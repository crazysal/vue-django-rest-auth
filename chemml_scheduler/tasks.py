from celery import Celery
from parser.base import parse_graph, generate_and_write_script
from cheml.wrappers.engine import Wrapper
from cheml import wrapperRUN
# wrapperRUN(INPUT_FILE = 'cheml_config.txt', OUTPUT_DIRECTORY = 'output_directory')


app = Celery('server', backend='db+sqlite:////home/tinto/Workspace/CUBS/vue-django-rest-auth/server/results.sqlite', broker='pyamqp://guest@localhost//')
app.conf.update(
    result_persistent=True
)
ws = "/home/tinto/Workspace/tmp/graph_executions/"


@app.task
def run_cheml(data, task_id=None):
    task_id = run_cheml.request.id
    cmls, dep_lists, comp_graph = parse_graph(data)
    file = generate_and_write_script(cmls, dep_lists, comp_graph, ws, task_id)
    # print("\n ~~~~~~ cmls : ")
    for node in cmls:
        print(node)
    # print("\n ~~~~~~ dep_lists : ")
    # print(dep_lists)
    # print("\n ~~~~~~ comp_graph : ")
    # print(comp_graph)
    wrapperRUN(INPUT_FILE=file,
               OUTPUT_DIRECTORY=ws+task_id)
    # wrapper = Wrapper(cmls, dep_lists, comp_graph, "", ws)
    # wrapper.call()
    return cmls.__str__()