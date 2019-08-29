# Create your tasks here
from __future__ import absolute_import, unicode_literals
from celery import shared_task
from server.api.utils import parse_graph
from collections import OrderedDict
from chemml.wrapper import ChemMLWrapperRun
import json 

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
    # cmls, dep_lists, comp_graph = parse_graph(data)
    # with open('data.json', 'w'):
    #   json.dump(parse_graph(data), fp)

    # return ChemMLWrapperRun('data.json', '~/Documents/reps/tmp')
    return ChemMLWrapperRun(parse_graph(data), '~/Documents/reps/tmp')

