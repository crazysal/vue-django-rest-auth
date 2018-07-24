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
    GraphSerializer
)


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
        graph = Graph.objects.filter(author=self.request.user).filter(graph_id=request.data['graph_id'])
        context = {'request': request}
        serializer = GraphSerializer(graph, context=context, many=True)
        # cmls, dep_lists, comp_graph = parse_graph()
        # for node in cmls:
        # print(cmls)
        # print(dep_lists)
        # print(comp_graph)
        # run_cheml.delay(cmls, dep_lists, comp_graph)
        print('calling celery task..')
        send_task("tasks.run_cheml", [serializer.data[0]])
        # send_task("tasks.add", [2,6])
        return Response({})



