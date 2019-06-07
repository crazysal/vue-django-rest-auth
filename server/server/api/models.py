from django.conf import settings
from django.contrib.auth.models import User
from django.db.models import (
    AutoField,
    CASCADE,
    CharField,
    DateTimeField,
    ForeignKey,
    Model,
    TextField,
    IntegerField,
    DurationField,
)


# class User(AbstractUser):
#
#     followers = ManyToManyField('self', related_name='followees', symmetrical=False)


# class Post(Model):

#     author = ForeignKey(User, related_name='posts', on_delete=CASCADE)

#     created = DateTimeField(auto_now_add=True)
#     content = TextField(blank=True, null=True)
#     title = CharField(max_length=255)
#     updated = DateTimeField(auto_now=True)


class Graph(Model):

    author = ForeignKey(User, related_name='graphs', on_delete=CASCADE)

    graph_id = AutoField(primary_key=True)
    created = DateTimeField(auto_now_add=True)
    title = CharField(max_length=250, )
    content = TextField()
    updated = DateTimeField(auto_now=True)


class GraphRunState(Model):

    state_id = IntegerField(primary_key=True)
    state = CharField(max_length=250, )


class GraphRun(Model):

    graph = ForeignKey(Graph, related_name='runs', on_delete=CASCADE)
    graph_name = CharField(max_length=250, null=True)
    state = ForeignKey(GraphRunState, related_name='runs', on_delete=CASCADE)

    run_id = AutoField(primary_key=True)
    created = DateTimeField(auto_now_add=True)
    content = TextField()
