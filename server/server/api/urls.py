from rest_framework.routers import DefaultRouter
from django.conf.urls import include, url

from .views import (
    UserViewSet,
    # PostViewSet,
    GraphViewSet,
    UserGraphs,
    RootGraphs,
    RunGraph
)

router = DefaultRouter()

router.register(r'users', UserViewSet)
# router.register(r'posts', PostViewSet)
router.register(r'graphs', GraphViewSet)

# urlpatterns = router.urls
urlpatterns = [
    url(r'usergraphs', UserGraphs.as_view(), name='user-graphs'),
    url(r'rootgraphs', RootGraphs.as_view(), name='root-graphs'),
    url(r'^', include(router.urls)),
    url(r'rungraph', RunGraph.as_view(), name='run-graph')
]
