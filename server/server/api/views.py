import zipfile
import os
from io import StringIO
from rest_framework.decorators import detail_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from django.http import HttpResponse
import datetime
from server.api.utils import parse_graph
from server.api.tasks import run_cheml
from collections import OrderedDict
from celery.execute import send_task
from server.api.models import *
from shutil import make_archive
from wsgiref.util import FileWrapper
from .dash_apps import fileUpload,columnStats,lineplot,scatterPlot,barPlot
import pandas as pd
from django.shortcuts import render,render_to_response



from .permissions import (
    AdminOrAuthorCanEdit,
)
from .models import (
    User,
    # Post,
    Graph
)
from .serializers import (
    UserSerializer,
    # PostSerializer,
    GraphSerializer,
    GraphRunSerializer
)

# ws = "/home/tinto/Workspace/tmp/graph_executions/"
ws = "/Users/shara/Desktop/Summer/VisualisationModule/tmp/graph_executions/"


fileUpload()
#comment out the following line
# lineplot()
# scatterPlot()
# barPlot()
def statistics(request):
    stats=columnStats()   
    context={
        'stats':stats
    }     
    return render(request, 'statistics.html',context)

from django.http import JsonResponse
import json
class TableView(APIView):
    def get(self, request, format=None):
        df=pd.read_csv('https://raw.githubusercontent.com/saranyailla/cheml-gui/master/test.csv')
        # df=df.head(5)
        numerics = ['int16', 'int32', 'int64', 'float16', 'float32', 'float64']
        df = df.select_dtypes(include=numerics)
        data=df.to_json(orient='table')
        h=json.loads(data)
        # print(h)
        return JsonResponse(h,safe=False)
class ColumnView(APIView):
    def get(self, request, format=None):
        df=pd.read_csv('https://raw.githubusercontent.com/saranyailla/cheml-gui/master/test.csv')
        df=df.head(5)
        data=df.to_json(orient='columns')
        h=json.loads(data)
        # print(h)
        return JsonResponse(h,safe=False)

class UserViewSet(ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = (
        IsAuthenticated,
    )

    @detail_route(methods=['get'])
    def graphs(self, request, pk=None):
        queryset = Graph.objects.filter(author__pk=pk).order_by('-created')

        context = {'request': request}

        serializer = GraphSerializer(queryset, context=context, many=True)

        return Response(serializer.data)


class GraphViewSet(ModelViewSet):
    queryset = Graph.objects.order_by('-created')
    serializer_class = GraphSerializer

    # permission_classes = (
    #     IsAuthenticated,
    #     AdminOrAuthorCanEdit,
    # )

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
        return super(ModelViewSet, self).perform_create(serializer)


class UserGraphs(APIView):
    """
    View to list all graphs created by the current user in the system.

    * Requires token authentication.
    """
    # authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        """
        Return a list of graphs.
        """
        graphs = Graph.objects.filter(author=self.request.user)
        context = {'request': request}
        serializer = GraphSerializer(graphs, context=context, many=True)
        return Response(serializer.data)


class RootGraphs(APIView):
    """
    View to list all graphs created by the root in the system.

    * Requires token authentication.
    """
    # authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        """
        Return a list of graphs.
        """
        graphs = Graph.objects.filter(author=User.objects.get(id=1))
        context = {'request': request}
        serializer = GraphSerializer(graphs, context=context, many=True)
        return Response(serializer.data)


class RunGraph(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        # //.filter(author=self.request.user)
        graph = Graph.objects.filter(graph_id=request.data['graph_id'])
        context = {'request': request}
        serializer = GraphSerializer(graph, context=context, many=True)
        # cmls, dep_lists, comp_graph = parse_graph()
        # for node in cmls:
        # print(cmls)
        # print(dep_lists)
        # print(comp_graph)
        # run_cheml.delay(cmls, dep_lists, comp_graph)

        print('calling celery task.. okookok', request)
        res = send_task("server.api.tasks.run_cheml", [serializer.data[0]])
        print('here, after send_task' , res)
        result_id = res.id
        run = GraphRun(
            graph=graph.first(),
            graph_name=graph.first().title,
            state=GraphRunState.objects.filter(state_id=2).first(),
            content=result_id
        )
        run.save()

        print("ready:")
        print(res.ready())
        print("state:")
        print(res.state)
        print("result:")
        print(res.result)
        print("id : " +res.id)
        # res.collect()
        res.get(10)
        if res.ready():
            if res.state == "STARTED":
                run.state = GraphRunState.objects.filter(state_id=3).first()
            if res.state == "FAILURE":
                run.state = GraphRunState.objects.filter(state_id=4).first()
            if res.state == "SUCCESS":
                run.state = GraphRunState.objects.filter(state_id=5).first()
            run.save()

        # print("ready:")
        # print(res.ready())
        # print("state:")
        # print(res.state)
        # print("result:")
        # print(res.result)
        # send_task("tasks.add", [2,6])
        return Response({"run_id": run.run_id,
                         "state": res.state})


class GraphRuns(APIView):
    """
    View to list all graphs created by the current user in the system.

    * Requires token authentication.
    """
    # authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        """
        Return a list of graphs.
        """
        graphs = GraphRun.objects.filter(graph__author=self.request.user)
        serializer = GraphRunSerializer(graphs, context={'request': request}, many=True)
        return Response(serializer.data)


class DownloadGraphRun(APIView):
    """
    View to list all graphs created by the current user in the system.

    * Requires token authentication.
    """
    # authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        folder = request.GET.get('run', '')
        filepath = os.path.join(ws,folder)
        path_to_zip = make_archive(filepath, "zip", filepath)
        response = HttpResponse(FileWrapper(open(path_to_zip, 'rb')), content_type='application/zip')
        response['Content-Disposition'] = 'attachment; filename="{filename}.zip"'.format(
            filename=folder.replace(" ", "_")
        )
        return response


def getfiles(request):
    # Files (local path) to put in the .zip
    # FIXME: Change this (get paths from DB etc)
    filenames = ["/tmp/file1.txt", "/tmp/file2.txt"]

    # Folder name in ZIP archive which contains the above files
    # E.g [thearchive.zip]/somefiles/file2.txt
    # FIXME: Set this to something better
    zip_subdir = "somefiles"
    zip_filename = "%s.zip" % zip_subdir

    # Open StringIO to grab in-memory ZIP contents
    s = StringIO.StringIO()

    # The zip compressor
    zf = zipfile.ZipFile(s, "w")

    for fpath in filenames:
        # Calculate path for file in zip
        fdir, fname = os.path.split(fpath)
        zip_path = os.path.join(zip_subdir, fname)

        # Add file, at correct path
        zf.write(fpath, zip_path)

    # Must close zip for all contents to be written
    zf.close()

    # Grab ZIP file from in-memory, make response with correct MIME-type
    resp = HttpResponse(s.getvalue(), mimetype = "application/x-zip-compressed")
    # ..and correct content-disposition
    resp['Content-Disposition'] = 'attachment; filename=%s' % zip_filename

    return resp



