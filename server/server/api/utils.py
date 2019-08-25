from collections import OrderedDict
import json



def parse_graph1(data):
    jsondata = json.loads(data['content'])
    nodes = jsondata['elements']['nodes']
    print("DATA IN PARSE GRAPH nodes:", nodes)

    cmls = []
    idseq = {}
    dep_lists = {}
    comp_graph = []

    for node_seq, node in enumerate(nodes):
        if not node['data'].__contains__('name'):
            continue
        id = node['data']['id']
        idseq[id] = node_seq
        new_node = {
            'task': node['data']['name'],
            'recv': {},
            'send': {},
            'parameters': {
                'host': node['data']['host'],
                'function': node['data']['func']
                }
            }
        cmls.append(new_node)

        dep_lists[node_seq] = []

    edges = jsondata['elements']['edges']
    print("DATA IN PARSE GRAPH edges:", edges)
    token_seq = 0
    for edge in edges:
        inputs = edge['data']['inputs']
        outputs = edge['data']['outputs']
        for input in inputs:
            input_key = json.dumps(input['value'])
            if input_key != '""':
                sid = idseq[edge['data']['source']]
                tid = idseq[edge['data']['target']]
                cmls[sid]['send'][(input['name'], token_seq)] = sid
                for output in outputs:
                    output_key = json.dumps(output['value'])
                    if input_key != '""' and input_key == output_key:
                        cmls[tid]['recv'][(output['name'], token_seq)] = tid

                        comp_graph_elem = (sid, input['name'], tid, output['name'])
                        comp_graph.append(comp_graph_elem)
                        if not dep_lists[tid].__contains__(sid):
                            dep_lists[tid].append(sid)
                token_seq += 1

    imp_order = get_order(dep_lists)

    return cmls, imp_order, tuple(comp_graph)

tmp_inp = {
  "nodes" : {
    "ID1": {
      "name": "StandardScaler",
      "library": "sklearn",
      "module": "preprocessing",
      "inputs": {
        "copy": "true",
        "with_mean": "true",
        "with_std": "true"
      },
      "method": {
        "name": "fit_transform",
        "inputs": {
          "X": "@ID2@descriptors"
        },
        "outputs": {
          "X_new": "true"
        }
      },
      "outputs": {
      },
      "wrapper_io": {
      }
    },
    "ID2": {
      "name": "load_organic_density",
      "library": "chemml",
      "module": "datasets",
      "inputs": {
      },
      "method": {
      },
      "outputs": {
        "descriptors": "true"
      },
      "wrapper_io": {
      }
    }
  },
  "gui_format": {},
  "tmeplate_id": 0

}

def parse_graph(data):
    # jsondata = json.loads(data['content'])
    # nodes = jsondata['elements']['nodes']
    # print("DATA IN PARSE GRAPH nodes:", nodes)

    # cmls = []
    # idseq = {}
    # dep_lists = {}
    # comp_graph = []

    # for node_seq, node in enumerate(nodes):
    #     if not node['data'].__contains__('name'):
    #         continue
    #     id = node['data']['id']
    #     idseq[id] = node_seq
    #     new_node = {
    #         'task': node['data']['name'],
    #         'recv': {},
    #         'send': {},
    #         'parameters': {
    #             'host': node['data']['host'],
    #             'function': node['data']['func']
    #             }
    #         }
    #     cmls.append(new_node)

    #     dep_lists[node_seq] = []

    # edges = jsondata['elements']['edges']
    # print("DATA IN PARSE GRAPH edges:", edges)
    # token_seq = 0
    # for edge in edges:
    #     inputs = edge['data']['inputs']
    #     outputs = edge['data']['outputs']
    #     for input in inputs:
    #         input_key = json.dumps(input['value'])
    #         if input_key != '""':
    #             sid = idseq[edge['data']['source']]
    #             tid = idseq[edge['data']['target']]
    #             cmls[sid]['send'][(input['name'], token_seq)] = sid
    #             for output in outputs:
    #                 output_key = json.dumps(output['value'])
    #                 if input_key != '""' and input_key == output_key:
    #                     cmls[tid]['recv'][(output['name'], token_seq)] = tid

    #                     comp_graph_elem = (sid, input['name'], tid, output['name'])
    #                     comp_graph.append(comp_graph_elem)
    #                     if not dep_lists[tid].__contains__(sid):
    #                         dep_lists[tid].append(sid)
    #             token_seq += 1

    # imp_order = get_order(dep_lists)

    # return cmls, imp_order, tuple(comp_graph)
    return  tmp_inp


def get_order(dep_lists):
    imp_order = []
    while(dep_lists):
        for key in dep_lists.keys():
            dep_list = dep_lists[key]
            if not dep_list:
                for list in dep_lists.values():
                    if list.count(key) > 0:
                        list.remove(key)
                dep_lists.pop(key)
                imp_order.append(key)
                break

    return tuple(imp_order)
