from collections import OrderedDict
import json



# def parse_graph1(data):
#     jsondata = json.loads(data['content'])
#     nodes = jsondata['elements']['nodes']
#     print("DATA IN PARSE GRAPH nodes:", nodes)

#     cmls = []
#     idseq = {}
#     dep_lists = {}
#     comp_graph = []

#     for node_seq, node in enumerate(nodes):
#         if not node['data'].__contains__('name'):
#             continue
#         id = node['data']['id']
#         idseq[id] = node_seq
#         new_node = {
#             'task': node['data']['name'],
#             'recv': {},
#             'send': {},
#             'parameters': {
#                 'host': node['data']['host'],
#                 'function': node['data']['func']
#                 }
#             }
#         cmls.append(new_node)

#         dep_lists[node_seq] = []

#     edges = jsondata['elements']['edges']
#     print("DATA IN PARSE GRAPH edges:", edges)
#     token_seq = 0
#     for edge in edges:
#         inputs = edge['data']['inputs']
#         outputs = edge['data']['outputs']
#         for input in inputs:
#             input_key = json.dumps(input['value'])
#             if input_key != '""':
#                 sid = idseq[edge['data']['source']]
#                 tid = idseq[edge['data']['target']]
#                 cmls[sid]['send'][(input['name'], token_seq)] = sid
#                 for output in outputs:
#                     output_key = json.dumps(output['value'])
#                     if input_key != '""' and input_key == output_key:
#                         cmls[tid]['recv'][(output['name'], token_seq)] = tid

#                         comp_graph_elem = (sid, input['name'], tid, output['name'])
#                         comp_graph.append(comp_graph_elem)
#                         if not dep_lists[tid].__contains__(sid):
#                             dep_lists[tid].append(sid)
#                 token_seq += 1

#     imp_order = get_order(dep_lists)

#     return cmls, imp_order, tuple(comp_graph)

tmp_inp = {
  "nodes" : {
    "ID1": {
      "name": "StandardScaler",
      "library": "sklearn",
      "module": "preprocessing",
      "inputs": {
        "copy": True,
        "with_mean": True,
        "with_std": True
      },
      "method": {
        "name": "fit_transform",
        "inputs": {
          "X": "@ID2@descriptors"
        },
        "outputs": {
          "X_new": True
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
        "descriptors": True
      },
      "wrapper_io": {
      }
    }
  },
  "gui_format": {},
  "tmeplate_id": 0

}

bstn = {
  "nodes": {
    "ID1": {
      "name": "read_csv",
      "library": "pandas",
      "module": "",
      "inputs": {
        "filepath_or_buffer": "~/tmp/Boston.csv",
        "index_col": 0
      },
      "outputs": {
        "df": True
      },
      "method": {}
    },
    "ID2": {
      "name": "StandardScaler",
      "library": "sklearn",
      "module": "preprocessing",
      "inputs": {},
      "outputs": {},
      "method": {
        "name": "fit_transform",
        "inputs": {
          "X": "@ID1@df"
        },
        "outputs": {
          "X_new": True
        }
      }
    },
    "ID3": {
      "name": "PCA",
      "library": "sklearn",
      "module": "decomposition",
      "inputs": {},
      "outputs": {},
      "method": {
        "name": "fit_transform",
        "inputs": {
          "X": "@ID2@X_new"
        },
        "outputs": {
          "X_new": True
        }
      }
    },
    "ID4": {
      "name": "SplitColumns",
      "library": "chemml",
      "module": "wrapper.preprocessing",
      "inputs": {
        "selection": -1
      },
      "outputs": {},
      "method": {
        "name": "fit",
        "inputs": {
          "X": "@ID3@X_new"
        },
        "outputs": {
          "X1": True,
          "X2": True
        }
      }
    },
    "ID5": {
      "name": "train_test_split",
      "library": "sklearn",
      "module": "model_selection",
      "inputs": {
        "*args": "@ID4@X2@ID4@X1",
        "test_size": 0.2
      },
      "outputs": {
        "train1": True,
        "test1": True,
        "train2": True,
        "test2": True
      },
      "method": {}
    },
    "ID6": {
      "name": "LinearRegression",
      "library": "sklearn",
      "module": "linear_model",
      "inputs": {},
      "outputs": {"obj": True},
      "method": {
        "name": "fit",
        "inputs": {
          "X": "@ID5@train1",
          "y": "@ID5@train2"
        },
        "outputs": {}
      }
    },
    "ID7": {
      "name": "LinearRegression",
      "library": "sklearn",
      "module": "linear_model",
      "inputs": {
        "obj": "@ID6@obj"
      },
      "outputs": {},
      "method": {
        "name": "predict",
        "inputs": {
          "X": "@ID5@test1"
        },
        "outputs": {
          "C": True
        }
      }
    },
    "ID8": {
      "name": "mean_absolute_error",
      "library": "sklearn",
      "module": "metrics",
      "inputs": {
        "y_true": "@ID5@test2",
        "y_pred": "@ID7@C"
      },
      "outputs": {
        "loss": True
      },
      "method": {}
    },
    "ID9": {
      "name": "SaveFile",
      "library": "chemml",
      "module": "wrapper.preprocessing",
      "inputs": {
        "file_path": "metric/mae.txt"
      },
      "outputs": {},
      "method": {
        "name": "write",
        "inputs": {
          "X": "@ID8@loss"
        },
        "outputs": {}
      }
    }
  }
}

chem2 = {
  "nodes" : {
    "ID1": {
      "name": "load_xyz_polarizability",
      "library": "chemml",
      "module": "datasets",
      "inputs": {
      },
      "method": {
      },
      "outputs": {
        "molecules": True,
        "pol": True
      }
    },
    "ID2": {
      "name": "CoulombMatrix",
      "library": "chemml",
      "module": "chem",
      "inputs": {
        "cm_type": "SC",
        "n_jobs": 1
      },
      "method": {
        "name": "represent",
        "inputs": {
          "molecules": "@ID1@molecules"
        },
        "outputs": {
          "features": True
        }
      },
      "outputs": {}
    },
    "ID3": {
      "name": "BagofBonds",
      "library": "chemml",
      "module": "chem",
      "inputs": {
        "n_jobs": 1
      },
      "method": {
        "name": "represent",
        "inputs": {
          "molecules": "@ID1@molecules"
        },
        "outputs": {
          "features": True
        }
      },
      "outputs": {}
    },
    "ID4": {
      "name": "SaveCSV",
      "library": "chemml",
      "module": "wrapper.preprocessing",
      "inputs": {
        "file_path": "3d/coulmat.csv"
      },
      "method": {
        "name": "write",
        "inputs": {
          "X": "@ID2@features"
        },
        "outputs": {
        }
      },
      "outputs": {}
    },
    "ID5": {
      "name": "SaveCSV",
      "library": "chemml",
      "module": "wrapper.preprocessing",
      "inputs": {
        "file_path": "3d/bagofbond.csv"
      },
      "method": {
        "name": "write",
        "inputs": {
          "X": "@ID3@features"
        },
        "outputs": {
        }
      },
      "outputs": {}
    }

  },
  "gui_format": {},
  "template": {
      "id": 1,
      "description": "A template workflow for calculating 3D descriptors for organic molecules."
  }
}

chemfull = {
  "nodes" : {
    "ID1": {
      "name": "load_xyz_polarizability",
      "library": "chemml",
      "module": "datasets",
      "inputs": {
      },
      "method": {
      },
      "outputs": {
        "molecules": True,
        "pol": True
      }
    },
    "ID2": {
      "name": "CoulombMatrix",
      "library": "chemml",
      "module": "chem",
      "inputs": {
        "cm_type": "SC",
        "n_jobs": 1
      },
      "method": {
        "name": "represent",
        "inputs": {
          "molecules": "@ID1@molecules"
        },
        "outputs": {
          "features": True
        }
      },
      "outputs": {}
    },
    "ID4": {
      "name": "SaveCSV",
      "library": "chemml",
      "module": "wrapper.preprocessing",
      "inputs": {
        "file_path": "3d/coulmat.csv"
      },
      "method": {
        "name": "write",
        "inputs": {
          "X": "@ID2@features"
        },
        "outputs": {
        }
      },
      "outputs": {}
    },
    "ID5": {
      "name": "train_test_split",
      "library": "sklearn",
      "module": "model_selection",
      "inputs": {
        "*args": "@ID2@features@ID1@pol",
        "test_size": 0.2
      },
      "outputs": {
        "train1": True,
        "test1": True,
        "train2": True,
        "test2": True
      },
      "method": {}
    },
    "ID6": {
      "name": "SVR",
      "library": "sklearn",
      "module": "svm",
      "inputs": {
        "cache_size": 500
      },
      "outputs": {"obj": True},
      "method": {
        "name": "fit",
        "inputs": {
          "X": "@ID5@train1",
          "y": "@ID5@train2"
        },
        "outputs": {}
      }
    },
    "ID7": {
      "name": "SVR",
      "library": "sklearn",
      "module": "svm",
      "inputs": {
        "obj": "@ID6@obj"
      },
      "outputs": {},
      "method": {
        "name": "predict",
        "inputs": {
          "X": "@ID5@test1"
        },
        "outputs": {
          "y_pred": True
        }
      }
    },
    "ID8": {
      "name": "mean_absolute_error",
      "library": "sklearn",
      "module": "metrics",
      "inputs": {
        "y_true": "@ID5@test2",
        "y_pred": "@ID7@y_pred"
      },
      "outputs": {
        "loss": True
      },
      "method": {}
    },
    "ID9": {
      "name": "SaveFile",
      "library": "chemml",
      "module": "wrapper.preprocessing",
      "inputs": {
        "file_path": "metric/mae.txt"
      },
      "outputs": {},
      "method": {
        "name": "write",
        "inputs": {
          "X": "@ID8@loss"
        },
        "outputs": {}
      }
    }
  },
  "gui_format": {},
  "template": {
      "id": 3,
      "description": "A template workflow for calculating 3D CoulombMatrix descriptors for organic molecules and training support vector regression to predict their polarizabilities."
  }
}

def parse_graph(data):
    if data['title'] == 'Boston House Prices' :
        print("SENDING BOSTON", bstn)
        return bstn
    elif  data['title'] == 'Extract Coulomb Matrix Features and Bag of Bonds' :
        return chem2
    elif  data['title'] == '3D CoulombMatrix Descriptor' :
        return chemfull
    else : 
        jsondata = json.loads(data['content'])
        nodes = jsondata['elements']['nodes']
        print(jsondata)

        cmls = {"nodes":{}}
        idseq = {}
        dep_lists = {}
        comp_graph = []

        for node_seq, node in enumerate(nodes):
            print("DATA IN PARSE GRAPH nodes:")


            if not node['data'].__contains__('name'):
                continue
            
            _id = node['data']['id']
            print(node['data']['id'])
            idseq[_id] = node_seq
            
            name = node['data']['func']
            print(node['data']['func'])
            
            lib = node['data']['host']
            print(node['data']['host'])
            print(node['data']['name'].split(':')[1][1:])
            print(node['data']['params']['funcm'])

            base_inp = {}

            if len(node['data']['params']['fparams']) > 0 :
                for key in node['data']['params']['fparams'] :
                    base_inp[key['name']] = key['value']
            base_op = {}
            if lib == 'pandas':
                module = ''
                base_op = {"data" : True} 
                mthd = {}
                base_inp= {'filepath_or_buffer': node['data']['params']['fparams'][0]['value']}
                cmls['nodes'][_id]= get_new_node(name, lib, module, base_inp, base_op, mthd)
            else:
                module = node['data']['name'].split(':')[1][1:]
                print(node['data']['params']['inp'])
                print(node['data']['params']['op'])
                mthd = {
                    "name": node['data']['params']['funcm'],
                    "inputs": {},
                    "outputs": {}
                    }
        
                if len(node['data']['params']['inp']) > 0:   
                    for key in node['data']['params']['inp'] :
                        if key['name'] != 'obj':
                            mthd['inputs'][key['name']] = None
        
                if len(node['data']['params']['op']) > 0:   
                    for key in node['data']['params']['op'] :
                        if key['name'] != 'obj':
                            mthd['outputs'][key['name']] = False

                cmls['nodes'][_id] = get_new_node(name, lib, module, base_inp, base_op, mthd)

            dep_lists[node_seq] = []    


        if jsondata['elements']['edges'] :
            edges = jsondata['elements']['edges']
        else: 
            edges = 0
        cmls = get_iop(cmls, edges, idseq, dep_lists) 
        print("cmls:", cmls) 
        return  cmls

def get_new_node(name, lib, module, base_inp, base_op, mthd) : 
    return {
    'name': name,
    'library': lib,
    'module': module,
    'inputs': base_inp,
    'outputs': base_op,
    'method': mthd
    }

def get_iop(cmls, edges, idseq, dep_lists):
    print("edges:", edges) 
    print("cmls:", cmls) 
    print("idseq:", idseq) 
    print("dep_lists:", dep_lists) 
    if edges:
        for edge in edges:
            inputs = edge['data']['inputs']
            outputs = edge['data']['outputs']
            curr_id = edge['data']['id']
            s_id = edge['data']['source']
            t_id = edge['data']['target']
            print("sid", s_id)
            print("src nd", cmls['nodes'][s_id])
            print("tid", t_id)
            print("t node", cmls['nodes'][t_id])
            inp_str = ""
            for op in outputs:
                if 'value' in op :
                    print("edge ops", op['name'], op['value'])

                    inp_str +='@'+s_id+'@'+op['value']
                    if op['name'] =='obj':
                        cmls['nodes'][t_id]['inputs'][op['name']] = inp_str
                    else:
                        cmls['nodes'][t_id]['method']['inputs'][op['name']] = inp_str
                else:
                    continue
            for ip in inputs:
                if 'value' in ip and cmls['nodes'][s_id]['library'] != 'pandas':
                    print("edge ips", ip['name'], ip['value'])
                    cmls['nodes'][s_id]['method']['outputs'][ip['name']] = True
                else:
                    continue 
    return cmls


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



### Things to do : 
##  Write edge parser to get inp/op sequence by edges 
