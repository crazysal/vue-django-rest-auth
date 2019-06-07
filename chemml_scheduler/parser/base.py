from collections import OrderedDict
import json


def parse_graph(data):
    # print(data)
    jsondata = json.loads(data['content'])
    nodes = jsondata['elements']['nodes']

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
            'task': str(node['data']['name']),
            'recv': {},
            'send': {},
            'parameters': {
                'host': str(node['data']['host']),
                'function': str(node['data']['func'])
                }
            }
        for param in node['data']['params']['fparams']:
            if is_int(param['value']):
                new_node['parameters'][str(param['name'])] = int(param['value'])
            elif is_float(param['value']):
                    new_node['parameters'][str(param['name'])] = float(param['value'])
            elif param['value'] != '':
                new_node['parameters'][str(param['name'])] = str(param['value'])
        for param in node['data']['params']['wparams']:
            if is_int(param['value']):
                new_node['parameters'][str(param['name'])] = int(param['value'])
            elif is_float(param['value']):
                    new_node['parameters'][str(param['name'])] = float(param['value'])
            elif param['value'] != '':
                new_node['parameters'][str(param['name'])] = str(param['value'])



        cmls.append(new_node)

        dep_lists[node_seq] = []

    edges = jsondata['elements']['edges']
    token_seq = 0
    for edge in edges:
        inputs = edge['data']['inputs']
        outputs = edge['data']['outputs']
        for input in inputs:
            input_key = json.dumps(input['value'])
            if input_key != '""':
                sid = idseq[edge['data']['source']]
                tid = idseq[edge['data']['target']]
                cmls[sid]['send'][(str(input['name']), token_seq)] = sid
                for output in outputs:
                    output_key = json.dumps(output['value'])
                    if input_key != '""' and input_key == output_key:
                        cmls[tid]['recv'][(str(output['name']), token_seq)] = tid

                        comp_graph_elem = (sid, str(input['name']), tid, str(output['name']))
                        comp_graph.append(comp_graph_elem)
                        if not dep_lists[tid].__contains__(sid):
                            dep_lists[tid].append(sid)
                token_seq += 1

    imp_order = get_order(dep_lists)

    return cmls, imp_order, tuple(comp_graph)


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


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        return False


def is_float(x):
    try:
        float(x)
    except ValueError:
        return False
    else:
        return True


def is_int(x):
    try:
        a = float(x)
        b = int(a)
    except ValueError:
        return False
    else:
        return a == b


def generate_and_write_script(cmls, dep_lists, comp_graph, ws, task_id):
    filePath = ws + task_id + ".txt"
    f = open(filePath, "w")

    for node in cmls:
        line = "## ("+node["task"]+")"
        f.write(line)
        for param in node["parameters"]:
            line = "\n    << " + param + " = " + str(node["parameters"][param])
            f.write(line)
        for item in node["recv"]:
            line = "\n    >> " + str(item[1]) + " " + item[0]
            f.write(line)
        for item in node["send"]:
            line = "\n    >> " + item[0] + " " + str(item[1])
            f.write(line)
        line = "\n\n"
        f.write(line)

    return filePath