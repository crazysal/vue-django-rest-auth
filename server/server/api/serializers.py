from rest_framework.serializers import (
    HyperlinkedIdentityField,
    HyperlinkedRelatedField,
    ModelSerializer,
)

from .models import (
    User,
    # Post,
    Graph,
    GraphRun
)


class UserSerializer(ModelSerializer):

    graphs = HyperlinkedIdentityField(view_name='user-graphs')

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'graphs',
        )


# class PostSerializer(ModelSerializer):

#     author = HyperlinkedRelatedField(view_name='user-detail', read_only=True)

#     def get_validation_exclusions(self, *args, **kwargs):
#         # exclude the author field as we supply it later on in the
#         # corresponding view based on the http request
#         exclusions = super(PostSerializer, self).get_validation_exclusions(*args, **kwargs)
#         return exclusions + ['author']

#     class Meta:
#         model = Post
#         fields = '__all__'


class GraphSerializer(ModelSerializer):

    author = HyperlinkedRelatedField(view_name='user-detail', read_only=True)

    def get_validation_exclusions(self, *args, **kwargs):
        # exclude the author field as we supply it later on in the
        # corresponding view based on the http request
        exclusions = super(GraphSerializer, self).get_validation_exclusions(*args, **kwargs)
        return exclusions + ['author']

    class Meta:
        model = Graph
        fields = '__all__'


class GraphRunSerializer(ModelSerializer):

    # graphruns = HyperlinkedIdentityField(view_name='graph-runs')
    graph = GraphSerializer(read_only=True)

    class Meta:
        model = GraphRun
        fields = '__all__'

        # fields = (
        #     'graph',
        #     'state',
        #     'run_id',
        #     'created',
        #     'content',
        # )

