# Create your tasks here
from __future__ import absolute_import, unicode_literals
from celery import shared_task
from server.api.utils import parse_graph
from collections import OrderedDict


@shared_task
def add(x, y):
    return x + y


@shared_task
def mul(x, y):
    return x * y


@shared_task
def xsum(numbers):
    return sum(numbers)


@shared_task
def run_cheml(data):
    print("in server.api.tasks.run_cheml ---------!!", )
    cmls, dep_lists, comp_graph = parse_graph(data)
    return cmls.__str__()
