// import axios from 'axios'
// import session from './session'

/**
 * Mocking client-server processing
 */
const _cytoscapeInitConfig = {
  container: null, // document.getElementById('cy'),
  boxSelectionEnabled: false,
  autounselectify: true,
  minZoom: 0.2,
  maxZoom: 2,
  layout: {
    name: 'dagre'
  },
  style: [
    {
      selector: 'node',
      style: {
        'content': 'data(name)',
        'text-opacity': 0.5,
        'text-valign': 'center',
        'text-halign': 'right',
        'background-color': '#11479e'
      }
    },
    {
      selector: 'edge',
      style: {
        // 'content': 'df',
        'curve-style': 'bezier',
        'width': 4,
        'target-arrow-shape': 'ellipse',
        'line-color': '#9dbaea',
        'target-arrow-color': '#9dbaea'
      }
    },
    {
      selector: '.eh-handle',
      style: {
        'background-color': 'red',
        'width': 12,
        'height': 12,
        'shape': 'ellipse',
        'overlay-opacity': 0,
        'border-width': 12, // makes the handle easier to hit
        'border-opacity': 0
      }
    },
    {
      selector: '.eh-hover',
      style: {
        'background-color': 'red'
      }
    },
    {
      selector: '.eh-source',
      style: {
        'border-width': 2,
        'border-color': 'red'
      }
    },
    {
      selector: '.eh-target',
      style: {
        'border-width': 2,
        'border-color': 'red'
      }
    },
    {
      selector: '.eh-preview, .eh-ghost-edge',
      style: {
        'background-color': 'red',
        'line-color': 'red',
        'target-arrow-color': 'red',
        'source-arrow-color': 'red'
      }
    }
  ],
  elements: null
}
// const _cyElem = {
//   nodes: [
//     {
//       data: {
//         id: '1',
//         name: 'Stageasdf1',
//         group: 'nodes'
//       }
//     },
//     {
//       data: {
//         id: '2',
//         name: 'Stage2',
//         group: 'nodes'
//       }
//     },
//     {
//       data: {
//         id: '3',
//         name: 'Stage3',
//         group: 'nodes'
//       }
//     },
//     {
//       data: {
//         id: '4',
//         name: 'Stage4',
//         group: 'nodes'
//       }
//     }
//   ],
//   edges: [
//     {
//       data: {
//         id: '1234',
//         source: '1',
//         target: '2'
//       }
//     },
//     {
//       data: {
//         id: '2345',
//         source: '2',
//         target: '3'
//       }
//     },
//     {
//       data: {
//         id: '3456',
//         source: '2',
//         target: '4'
//       }
//     }
//   ]
// }
const _edgehandlesConfig = {
  toggleOffOnLeave: true,
  handleNodes: 'node',
  handleSize: 10,
  edgeType: function (sourceNode, targetNode) {
  // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
  // returning null/undefined means an edge can't be added between the two nodes
  //  if (sourceNode.outgoers().edges().length > 1) {
  //    return null
  //  }
  //        return 'flat'
    var compatible = true
    if (compatible) {
      return 'flat'
    } else {
      return null
    }
  }
  // ,
  // complete: function (sourceNode, targetNode, addedEles) {
  //   // fired when edgehandles is done and elements are added
  //   if (typeof addedEles !== 'undefined') {
  //     console.log(addedEles.data().source + '-' + addedEles.data().target)
  //     window.selected_edge = window.guid()
  //     window.cytoOptions.elements.edges.push({
  //       data: {id: window.selected_edge, source: addedEles.data().source, target: addedEles.data().target}
  //     })
  //     window.app.$children[0].$children[0].$refs.edgeModalCompRef.show(true, true, true)
  //   }
  // }
}
const _contextMenusConfig = {
  menuItems: [
    {
      id: 'edit-node',
      content: 'Edit Node',
      tooltipText: 'Edit Node',
      selector: 'node',
      onClickFunction: function (event) {
        // console.log(event)
        // var target = event.target || event.cyTarget
        //
        // if (event.target.data().group) {
        //   var id = target.data().id
        //   window.selected_node = id
        //   window.cytoOptions.elements.nodes.forEach(function (node) {
        //     if (node.data.id === event.target.data().id) {
        //       window.info = node.info
        //       window.app.$children[0].$children[0].$refs.nodeDetailModalCompRef.updateDetails(node.ios.fun)
        //     }
        //   })
        //   window.app.$children[0].$children[0].$refs.nodeDetailModalCompRef.show_edit(true, true, true)
        // } else {
        //   window.app.$children[0].$children[0].$refs.edgeModalCompRef.show(true, true, true)
        //   // nidxList = []
        //   // // console.log('edge')
        //   // window.cytoOptions.elements.nodes.forEach(function (node) {
        //   //   nidxList.push(node.data.id)
        //   // })
        //   // window.cytoOptions.elements.edges.forEach(function (edge) {
        //   //   if ((event.target.data().source === edge.data.source) && (event.target.data().target === edge.data.target)) {
        //   //     var eidx = window.cytoOptions.elements.edges.indexOf(edge)
        //   //     window.cytoOptions.elements.edges.splice(eidx, 1)
        //   //   }
        //   // })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        // }
      }
      // hasTrailingDivider: true
    },
    {
      id: 'edit-edge',
      content: 'Edit Edge',
      tooltipText: 'Edit Edge',
      selector: 'edge',
      onClickFunction: function (event) {
        // console.log(event)
        // var target = event.target || event.cyTarget
        //
        // if (event.target.data().group) {
        //   var id = target.data().id
        //   window.selected_node = id
        //   window.cytoOptions.elements.nodes.forEach(function (node) {
        //     if (node.data.id === event.target.data().id) {
        //       window.info = node.info
        //       window.app.$children[0].$children[0].$refs.nodeDetailModalCompRef.updateDetails(node.ios.fun)
        //     }
        //   })
        //   window.app.$children[0].$children[0].$refs.nodeDetailModalCompRef.show_edit(true, true, true)
        // } else {
        //   window.app.$children[0].$children[0].$refs.edgeModalCompRef.show(true, true, true)
        //   // nidxList = []
        //   // // console.log('edge')
        //   // window.cytoOptions.elements.nodes.forEach(function (node) {
        //   //   nidxList.push(node.data.id)
        //   // })
        //   // window.cytoOptions.elements.edges.forEach(function (edge) {
        //   //   if ((event.target.data().source === edge.data.source) && (event.target.data().target === edge.data.target)) {
        //   //     var eidx = window.cytoOptions.elements.edges.indexOf(edge)
        //   //     window.cytoOptions.elements.edges.splice(eidx, 1)
        //   //   }
        //   // })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        // }
      }
      // hasTrailingDivider: true
    },
    {
      id: 'remove-node',
      content: 'Remove Node',
      tooltipText: 'Remove Node',
      selector: 'node',
      onClickFunction: function (event) {
        // var target = event.target || event.cyTarget
        // // target.remove()
        // var nidxList = []
        // if (event.target.data().group) {
        //   nidxList = []
        //   // console.log('node')
        //   window.cytoOptions.elements.nodes.forEach(function (node) {
        //     if (node.data.id === event.target.data().id) {
        //       var nidx = window.cytoOptions.elements.nodes.indexOf(node)
        //       window.cytoOptions.elements.nodes.splice(nidx, 1)
        //     } else {
        //       nidxList.push(node.data.id)
        //     }
        //   })
        //   window.cy.json({ elements: window.cytoOptions.elements })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        // } else {
        //   nidxList = []
        //   // console.log('edge')
        //   window.cytoOptions.elements.nodes.forEach(function (node) {
        //     nidxList.push(node.data.id)
        //   })
        //   window.cytoOptions.elements.edges.forEach(function (edge) {
        //     if ((event.target.data().source === edge.data.source) && (event.target.data().target === edge.data.target)) {
        //       var eidx = window.cytoOptions.elements.edges.indexOf(edge)
        //       window.cytoOptions.elements.edges.splice(eidx, 1)
        //     }
        //   })
        //   window.cy.json({ elements: window.cytoOptions.elements })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        // }
        // console.log(target.data())
      }
      // hasTrailingDivider: true
    },
    {
      id: 'remove-edge',
      content: 'Remove Edge',
      tooltipText: 'Remove Edge',
      selector: 'edge',
      onClickFunction: function (event) {
        // var target = event.target || event.cyTarget
        // // target.remove()
        // var nidxList = []
        // if (event.target.data().group) {
        //   nidxList = []
        //   // console.log('node')
        //   window.cytoOptions.elements.nodes.forEach(function (node) {
        //     if (node.data.id === event.target.data().id) {
        //       var nidx = window.cytoOptions.elements.nodes.indexOf(node)
        //       window.cytoOptions.elements.nodes.splice(nidx, 1)
        //     } else {
        //       nidxList.push(node.data.id)
        //     }
        //   })
        //   window.cy.json({ elements: window.cytoOptions.elements })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        // } else {
        //   nidxList = []
        //   // console.log('edge')
        //   window.cytoOptions.elements.nodes.forEach(function (node) {
        //     nidxList.push(node.data.id)
        //   })
        //   window.cytoOptions.elements.edges.forEach(function (edge) {
        //     if ((event.target.data().source === edge.data.source) && (event.target.data().target === edge.data.target)) {
        //       var eidx = window.cytoOptions.elements.edges.indexOf(edge)
        //       window.cytoOptions.elements.edges.splice(eidx, 1)
        //     }
        //   })
        //   window.cy.json({ elements: window.cytoOptions.elements })
        //   // window.cy.json({ elements: window.cytoOptions.elements })
        // }
        // console.log(target.data())
      }
      // hasTrailingDivider: true
    },
    {
      id: 'add-node',
      content: 'Add Node',
      tooltipText: 'Add Node',
      coreAsWell: true,
      onClickFunction: function (event) {
        // window.tempPos = event.position || event.cyPosition
        // //
        // // var newNode = {
        // //   data: {id: window.guid(), name: 'new', group: 'nodes'},
        // //   position: {x: pos.x, y: pos.y}
        // // }
        // // window.cytoOptions.elements.nodes.push(newNode)
        // window.app.$children[0].$children[0].$refs.nodeModalCompRef.show(true, true, true)
      }
      // onClickFunction: function (event) {
      //   this.$refs.modal-comp-ref
      // }
    }
    //        {
    //          id: 'remove-selected',
    //          content: 'remove selected',
    //          tooltipText: 'remove selected',
    //          coreAsWell: true,
    //          onClickFunction: function (event) {
    //            window.cy.$(':selected').remove()
    //          }
    //        }
  ],
  menuItemClasses: ['custom-menu-item'],
  contextMenuClasses: ['custom-context-menu']
}
// const _libHierarchy = {
//   'Enter': {
//     'table': {
//       'pandas': [
//         'read_excel',
//         'read_table'
//       ]
//     },
//     'python script': {
//       'cheml': [
//         'PyScript'
//       ]
//     },
//     'xyz': {
//       'cheml': [
//         'XYZreader'
//       ]
//     }
//   },
//   'Prepare': {
//     'scale': {
//       'sklearn': [
//         'MaxAbsScaler',
//         'MinMaxScaler',
//         'Normalizer',
//         'RobustScaler',
//         'StandardScaler'
//       ]
//     },
//     'feature transformation': {
//       'sklearn': [
//         'KernelPCA',
//         'PCA'
//       ]
//     },
//     'basic operators': {
//       'cheml': [
//         'Merge',
//         'Split'
//       ]
//     },
//     'feature representation': {
//       'cheml': [
//         'Bag_of_Bonds',
//         'Coulomb_Matrix',
//         'DistanceMatrix',
//         'Dragon',
//         'RDKitFingerprint'
//       ],
//       'sklearn': [
//         'Binarizer',
//         'OneHotEncoder',
//         'PolynomialFeatures'
//       ]
//     },
//     'preprocessor': {
//       'cheml': [
//         'Constant',
//         'MissingValues'
//       ],
//       'sklearn': [
//         'Imputer'
//       ]
//     },
//     'split': {
//       'sklearn': [
//         'KFold',
//         'LeaveOneOut',
//         'ShuffleSplit',
//         'StratifiedShuffleSplit',
//         'train_test_split'
//       ]
//     }
//   },
//   'Model': {
//     'regression': {
//       'cheml': [
//         'mlp_hogwild'
//       ],
//       'sklearn': [
//         'ARDRegression',
//         'BayesianRidge',
//         'ElasticNet',
//         'KernelRidge',
//         'Lars',
//         'Lasso',
//         'LassoLars',
//         'LinearRegression',
//         'LinearSVR',
//         'LogisticRegression',
//         'MLPRegressor',
//         'MultiTaskElasticNet',
//         'MultiTaskLasso',
//         'NuSVR',
//         'Ridge',
//         'SGDRegressor',
//         'SVR'
//       ]
//     }
//   },
//   'Search': {
//     'evaluate': {
//       'pandas': [
//         'corr'
//       ],
//       'sklearn': [
//         'evaluate_regression',
//         'scorer_regression'
//       ]
//     },
//     'validate': {
//       'sklearn': [
//         'cross_val_predict',
//         'cross_val_score'
//       ]
//     },
//     'grid': {
//       'sklearn': [
//         'GridSearchCV',
//         'learning_curve'
//       ]
//     }
//   },
//   'Mix': {},
//   'Visualize': {},
//   'Store': {
//     'file': {
//       'cheml': [
//         'SaveFile'
//       ]
//     }
//   }
// }
const _libHierarchy = {
  'Enter': {
    'table': {
      'pandas': [
        'read_excel',
        'read_table'
      ]
    },
    'Convert': {
      'cheml': [
        'ConvertFile'
      ]
    },
    'datasets': {
      'cheml': [
        'load_cep_homo',
        'load_comp_energy',
        'load_crystal_structures',
        'load_organic_density',
        'load_xyz_polarizability'
      ]
    },
    'xyz': {
      'cheml': [
        'XYZreader'
      ]
    },
    'python script': {
      'cheml': [
        'PyScript'
      ]
    }
  },
  'Represent': {
    'molecular descriptors': {
      'cheml': [
        'BagofBonds',
        'CoulombMatrix',
        'Dragon',
        'RDKitFingerprint'
      ]
    },
    'inorganic input': {
      'cheml': [
        'CompositionEntry',
        'CrystalStructureEntry'
      ]
    },
    'distance matrix': {
      'cheml': [
        'DistanceMatrix'
      ]
    },
    'inorganic descriptors': {
      'cheml': [
        'APEAttributeGenerator',
        'APRDFAttributeGenerator',
        'ChargeDependentAttributeGenerator',
        'ChemicalOrderingAttributeGenerator',
        'CoordinationNumberAttributeGenerator',
        'CoulombMatrixAttributeGenerator',
        'EffectiveCoordinationNumberAttributeGenerator',
        'ElementFractionAttributeGenerator',
        'ElementPairPropertyAttributeGenerator',
        'ElementalPropertyAttributeGenerator',
        'GCLPAttributeGenerator',
        'IonicCompoundProximityAttributeGenerator',
        'IonicityAttributeGenerator',
        'LatticeSimilarityAttributeGenerator',
        'LocalPropertyDifferenceAttributeGenerator',
        'LocalPropertyVarianceAttributeGenerator',
        'MeredigAttributeGenerator',
        'PRDFAttributeGenerator',
        'PackingEfficiencyAttributeGenerator',
        'StoichiometricAttributeGenerator',
        'StructuralHeterogeneityAttributeGenerator',
        'ValenceShellAttributeGenerator',
        'YangOmegaAttributeGenerator'
      ]
    }
  },
  'Prepare': {
    'data manipulation': {
      'cheml': [
        'Split'
      ],
      'pandas': [
        'concat'
      ]
    },
    'feature transformation': {
      'sklearn': [
        'KernelPCA',
        'PCA'
      ]
    },
    'data cleaning': {
      'cheml': [
        'ConstantColumns',
        'MissingValues',
        'Outliers'
      ],
      'sklearn': [
        'Imputer'
      ]
    },
    'scaling': {
      'sklearn': [
        'MaxAbsScaler',
        'MinMaxScaler',
        'Normalizer',
        'RobustScaler',
        'StandardScaler'
      ]
    },
    'feature representation': {
      'sklearn': [
        'Binarizer',
        'OneHotEncoder',
        'PolynomialFeatures'
      ]
    },
    'split': {
      'sklearn': [
        'KFold',
        'LeaveOneOut',
        'ShuffleSplit',
        'StratifiedShuffleSplit',
        'train_test_split'
      ]
    }
  },
  'Model': {
    'regression': {
      'cheml': [
        'MLP',
        'MLP_sklearn'
      ],
      'sklearn': [
        'ARDRegression',
        'BayesianRidge',
        'ElasticNet',
        'KernelRidge',
        'Lars',
        'Lasso',
        'LassoLars',
        'LinearRegression',
        'LinearSVR',
        'LogisticRegression',
        'MLPRegressor',
        'MultiTaskElasticNet',
        'MultiTaskLasso',
        'NuSVR',
        'Ridge',
        'SGDRegressor',
        'SVR'
      ]
    }
  },
  'Search': {
    'evaluate': {
      'pandas': [
        'corr'
      ],
      'sklearn': [
        'evaluate_regression',
        'scorer_regression'
      ]
    },
    'validate': {
      'sklearn': [
        'cross_val_predict',
        'cross_val_score'
      ]
    },
    'grid': {
      'sklearn': [
        'GridSearchCV',
        'learning_curve'
      ]
    },
    'genetic algorithm': {
      'cheml': [
        'GA_DEAP'
      ]
    }
  },
  'Mix': {},
  'Visualize': {
    'plot': {
      'cheml': [
        'hist',
        'scatter2D'
      ],
      'pandas': [
        'plot'
      ]
    },
    'artist': {
      'cheml': [
        'decorator'
      ]
    }
  },
  'Store': {
    'figure': {
      'cheml': [
        'SavePlot'
      ]
    },
    'file': {
      'cheml': [
        'SaveFile'
      ]
    }
  }
}
// const _funcMeta = {
//   'Lars': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'eps',
//         'name': 'eps',
//         'value': '',
//         'desc': 'eps'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_path',
//         'name': 'fit_path',
//         'value': '',
//         'desc': 'fit_path'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_nonzero_coefs',
//         'name': 'n_nonzero_coefs',
//         'value': '',
//         'desc': 'n_nonzero_coefs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'positive',
//         'name': 'positive',
//         'value': '',
//         'desc': 'positive'
//       },
//       {
//         'type': 'string',
//         'display_name': 'precompute',
//         'name': 'precompute',
//         'value': '',
//         'desc': 'precompute'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'Imputer': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'axis',
//         'name': 'axis',
//         'value': '',
//         'desc': 'axis'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'missing_values',
//         'name': 'missing_values',
//         'value': '',
//         'desc': 'missing_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'strategy',
//         'name': 'strategy',
//         'value': '',
//         'desc': 'strategy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'Ridge': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'solver',
//         'name': 'solver',
//         'value': '',
//         'desc': 'solver'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'mlp_hogwild': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'batch_size',
//         'name': 'batch_size',
//         'value': '',
//         'desc': 'batch_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'input_act_funcs',
//         'name': 'input_act_funcs',
//         'value': '',
//         'desc': 'input_act_funcs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'learn_rate',
//         'name': 'learn_rate',
//         'value': '',
//         'desc': 'learn_rate'
//       },
//       {
//         'type': 'string',
//         'display_name': 'model',
//         'name': 'model',
//         'value': '',
//         'desc': 'model'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_check',
//         'name': 'n_check',
//         'value': '',
//         'desc': 'n_check'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_cores',
//         'name': 'n_cores',
//         'value': '',
//         'desc': 'n_cores'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_epochs',
//         'name': 'n_epochs',
//         'value': '',
//         'desc': 'n_epochs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_hist',
//         'name': 'n_hist',
//         'value': '',
//         'desc': 'n_hist'
//       },
//       {
//         'type': 'string',
//         'display_name': 'nneurons',
//         'name': 'nneurons',
//         'value': '',
//         'desc': 'nneurons'
//       },
//       {
//         'type': 'string',
//         'display_name': 'print_level',
//         'name': 'print_level',
//         'value': '',
//         'desc': 'print_level'
//       },
//       {
//         'type': 'string',
//         'display_name': 'rms_decay',
//         'name': 'rms_decay',
//         'value': '',
//         'desc': 'rms_decay'
//       },
//       {
//         'type': 'string',
//         'display_name': 'threshold',
//         'name': 'threshold',
//         'value': '',
//         'desc': 'threshold'
//       },
//       {
//         'type': 'string',
//         'display_name': 'validation_size',
//         'name': 'validation_size',
//         'value': '',
//         'desc': 'validation_size'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'KFold': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'n_splits',
//         'name': 'n_splits',
//         'value': '',
//         'desc': 'n_splits'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'shuffle',
//         'name': 'shuffle',
//         'value': '',
//         'desc': 'shuffle'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fold_gen',
//         'name': 'fold_gen',
//         'value': '',
//         'desc': 'fold_gen'
//       }
//     ]
//   },
//   'KernelRidge': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'coef0',
//         'name': 'coef0',
//         'value': '',
//         'desc': 'coef0'
//       },
//       {
//         'type': 'string',
//         'display_name': 'degree',
//         'name': 'degree',
//         'value': '',
//         'desc': 'degree'
//       },
//       {
//         'type': 'string',
//         'display_name': 'gamma',
//         'name': 'gamma',
//         'value': '',
//         'desc': 'gamma'
//       },
//       {
//         'type': 'string',
//         'display_name': 'kernel',
//         'name': 'kernel',
//         'value': '',
//         'desc': 'kernel'
//       },
//       {
//         'type': 'string',
//         'display_name': 'kernel_params',
//         'name': 'kernel_params',
//         'value': '',
//         'desc': 'kernel_params'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'KernelPCA': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'coef0',
//         'name': 'coef0',
//         'value': '',
//         'desc': 'coef0'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'degree',
//         'name': 'degree',
//         'value': '',
//         'desc': 'degree'
//       },
//       {
//         'type': 'string',
//         'display_name': 'eigen_solver',
//         'name': 'eigen_solver',
//         'value': '',
//         'desc': 'eigen_solver'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_inverse_transform',
//         'name': 'fit_inverse_transform',
//         'value': '',
//         'desc': 'fit_inverse_transform'
//       },
//       {
//         'type': 'string',
//         'display_name': 'gamma',
//         'name': 'gamma',
//         'value': '',
//         'desc': 'gamma'
//       },
//       {
//         'type': 'string',
//         'display_name': 'kernel',
//         'name': 'kernel',
//         'value': '',
//         'desc': 'kernel'
//       },
//       {
//         'type': 'string',
//         'display_name': 'kernel_params',
//         'name': 'kernel_params',
//         'value': '',
//         'desc': 'kernel_params'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_components',
//         'name': 'n_components',
//         'value': '',
//         'desc': 'n_components'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_jobs',
//         'name': 'n_jobs',
//         'value': '',
//         'desc': 'n_jobs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'remove_zero_eig',
//         'name': 'remove_zero_eig',
//         'value': '',
//         'desc': 'remove_zero_eig'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'MaxAbsScaler': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'read_table': {
//     'WParameters': [],
//     'input': [],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'as_recarray',
//         'name': 'as_recarray',
//         'value': '',
//         'desc': 'as_recarray'
//       },
//       {
//         'type': 'string',
//         'display_name': 'buffer_lines',
//         'name': 'buffer_lines',
//         'value': '',
//         'desc': 'buffer_lines'
//       },
//       {
//         'type': 'string',
//         'display_name': 'chunksize',
//         'name': 'chunksize',
//         'value': '',
//         'desc': 'chunksize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'comment',
//         'name': 'comment',
//         'value': '',
//         'desc': 'comment'
//       },
//       {
//         'type': 'string',
//         'display_name': 'compact_ints',
//         'name': 'compact_ints',
//         'value': '',
//         'desc': 'compact_ints'
//       },
//       {
//         'type': 'string',
//         'display_name': 'compression',
//         'name': 'compression',
//         'value': '',
//         'desc': 'compression'
//       },
//       {
//         'type': 'string',
//         'display_name': 'converters',
//         'name': 'converters',
//         'value': '',
//         'desc': 'converters'
//       },
//       {
//         'type': 'string',
//         'display_name': 'date_parser',
//         'name': 'date_parser',
//         'value': '',
//         'desc': 'date_parser'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dayfirst',
//         'name': 'dayfirst',
//         'value': '',
//         'desc': 'dayfirst'
//       },
//       {
//         'type': 'string',
//         'display_name': 'decimal',
//         'name': 'decimal',
//         'value': '',
//         'desc': 'decimal'
//       },
//       {
//         'type': 'string',
//         'display_name': 'delim_whitespace',
//         'name': 'delim_whitespace',
//         'value': '',
//         'desc': 'delim_whitespace'
//       },
//       {
//         'type': 'string',
//         'display_name': 'delimiter',
//         'name': 'delimiter',
//         'value': '',
//         'desc': 'delimiter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dialect',
//         'name': 'dialect',
//         'value': '',
//         'desc': 'dialect'
//       },
//       {
//         'type': 'string',
//         'display_name': 'doublequote',
//         'name': 'doublequote',
//         'value': '',
//         'desc': 'doublequote'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dtype',
//         'name': 'dtype',
//         'value': '',
//         'desc': 'dtype'
//       },
//       {
//         'type': 'string',
//         'display_name': 'encoding',
//         'name': 'encoding',
//         'value': '',
//         'desc': 'encoding'
//       },
//       {
//         'type': 'string',
//         'display_name': 'engine',
//         'name': 'engine',
//         'value': '',
//         'desc': 'engine'
//       },
//       {
//         'type': 'string',
//         'display_name': 'error_bad_lines',
//         'name': 'error_bad_lines',
//         'value': '',
//         'desc': 'error_bad_lines'
//       },
//       {
//         'type': 'string',
//         'display_name': 'escapechar',
//         'name': 'escapechar',
//         'value': '',
//         'desc': 'escapechar'
//       },
//       {
//         'type': 'string',
//         'display_name': 'false_values',
//         'name': 'false_values',
//         'value': '',
//         'desc': 'false_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'filepath_or_buffer',
//         'name': 'filepath_or_buffer',
//         'value': '',
//         'desc': 'filepath_or_buffer'
//       },
//       {
//         'type': 'string',
//         'display_name': 'float_precision',
//         'name': 'float_precision',
//         'value': '',
//         'desc': 'float_precision'
//       },
//       {
//         'type': 'string',
//         'display_name': 'header',
//         'name': 'header',
//         'value': '',
//         'desc': 'header'
//       },
//       {
//         'type': 'string',
//         'display_name': 'index_col',
//         'name': 'index_col',
//         'value': '',
//         'desc': 'index_col'
//       },
//       {
//         'type': 'string',
//         'display_name': 'infer_datetime_format',
//         'name': 'infer_datetime_format',
//         'value': '',
//         'desc': 'infer_datetime_format'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iterator',
//         'name': 'iterator',
//         'value': '',
//         'desc': 'iterator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'keep_date_col',
//         'name': 'keep_date_col',
//         'value': '',
//         'desc': 'keep_date_col'
//       },
//       {
//         'type': 'string',
//         'display_name': 'keep_default_na',
//         'name': 'keep_default_na',
//         'value': '',
//         'desc': 'keep_default_na'
//       },
//       {
//         'type': 'string',
//         'display_name': 'lineterminator',
//         'name': 'lineterminator',
//         'value': '',
//         'desc': 'lineterminator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'low_memory',
//         'name': 'low_memory',
//         'value': '',
//         'desc': 'low_memory'
//       },
//       {
//         'type': 'string',
//         'display_name': 'mangle_dupe_cols',
//         'name': 'mangle_dupe_cols',
//         'value': '',
//         'desc': 'mangle_dupe_cols'
//       },
//       {
//         'type': 'string',
//         'display_name': 'memory_map',
//         'name': 'memory_map',
//         'value': '',
//         'desc': 'memory_map'
//       },
//       {
//         'type': 'string',
//         'display_name': 'na_filter',
//         'name': 'na_filter',
//         'value': '',
//         'desc': 'na_filter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'na_values',
//         'name': 'na_values',
//         'value': '',
//         'desc': 'na_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'names',
//         'name': 'names',
//         'value': '',
//         'desc': 'names'
//       },
//       {
//         'type': 'string',
//         'display_name': 'nrows',
//         'name': 'nrows',
//         'value': '',
//         'desc': 'nrows'
//       },
//       {
//         'type': 'string',
//         'display_name': 'parse_dates',
//         'name': 'parse_dates',
//         'value': '',
//         'desc': 'parse_dates'
//       },
//       {
//         'type': 'string',
//         'display_name': 'prefix',
//         'name': 'prefix',
//         'value': '',
//         'desc': 'prefix'
//       },
//       {
//         'type': 'string',
//         'display_name': 'quotechar',
//         'name': 'quotechar',
//         'value': '',
//         'desc': 'quotechar'
//       },
//       {
//         'type': 'string',
//         'display_name': 'quoting',
//         'name': 'quoting',
//         'value': '',
//         'desc': 'quoting'
//       },
//       {
//         'type': 'string',
//         'display_name': 'sep',
//         'name': 'sep',
//         'value': '',
//         'desc': 'sep'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skip_blank_lines',
//         'name': 'skip_blank_lines',
//         'value': '',
//         'desc': 'skip_blank_lines'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skip_footer',
//         'name': 'skip_footer',
//         'value': '',
//         'desc': 'skip_footer'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skipfooter',
//         'name': 'skipfooter',
//         'value': '',
//         'desc': 'skipfooter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skipinitialspace',
//         'name': 'skipinitialspace',
//         'value': '',
//         'desc': 'skipinitialspace'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skiprows',
//         'name': 'skiprows',
//         'value': '',
//         'desc': 'skiprows'
//       },
//       {
//         'type': 'string',
//         'display_name': 'squeeze',
//         'name': 'squeeze',
//         'value': '',
//         'desc': 'squeeze'
//       },
//       {
//         'type': 'string',
//         'display_name': 'thousands',
//         'name': 'thousands',
//         'value': '',
//         'desc': 'thousands'
//       },
//       {
//         'type': 'string',
//         'display_name': 'true_values',
//         'name': 'true_values',
//         'value': '',
//         'desc': 'true_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tupleize_cols',
//         'name': 'tupleize_cols',
//         'value': '',
//         'desc': 'tupleize_cols'
//       },
//       {
//         'type': 'string',
//         'display_name': 'use_unsigned',
//         'name': 'use_unsigned',
//         'value': '',
//         'desc': 'use_unsigned'
//       },
//       {
//         'type': 'string',
//         'display_name': 'usecols',
//         'name': 'usecols',
//         'value': '',
//         'desc': 'usecols'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warn_bad_lines',
//         'name': 'warn_bad_lines',
//         'value': '',
//         'desc': 'warn_bad_lines'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'LinearRegression': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_jobs',
//         'name': 'n_jobs',
//         'value': '',
//         'desc': 'n_jobs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'Split': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'selection',
//         'name': 'selection',
//         'value': '',
//         'desc': 'selection'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df1',
//         'name': 'df1',
//         'value': '',
//         'desc': 'df1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df2',
//         'name': 'df2',
//         'value': '',
//         'desc': 'df2'
//       }
//     ]
//   },
//   'SGDRegressor': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'average',
//         'name': 'average',
//         'value': '',
//         'desc': 'average'
//       },
//       {
//         'type': 'string',
//         'display_name': 'epsilon',
//         'name': 'epsilon',
//         'value': '',
//         'desc': 'epsilon'
//       },
//       {
//         'type': 'string',
//         'display_name': 'eta0',
//         'name': 'eta0',
//         'value': '',
//         'desc': 'eta0'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'l1_ratio',
//         'name': 'l1_ratio',
//         'value': '',
//         'desc': 'l1_ratio'
//       },
//       {
//         'type': 'string',
//         'display_name': 'learning_rate',
//         'name': 'learning_rate',
//         'value': '',
//         'desc': 'learning_rate'
//       },
//       {
//         'type': 'string',
//         'display_name': 'loss',
//         'name': 'loss',
//         'value': '',
//         'desc': 'loss'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_iter',
//         'name': 'n_iter',
//         'value': '',
//         'desc': 'n_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'penalty',
//         'name': 'penalty',
//         'value': '',
//         'desc': 'penalty'
//       },
//       {
//         'type': 'string',
//         'display_name': 'power_t',
//         'name': 'power_t',
//         'value': '',
//         'desc': 'power_t'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'shuffle',
//         'name': 'shuffle',
//         'value': '',
//         'desc': 'shuffle'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warm_start',
//         'name': 'warm_start',
//         'value': '',
//         'desc': 'warm_start'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'ShuffleSplit': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'n_splits',
//         'name': 'n_splits',
//         'value': '',
//         'desc': 'n_splits'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'test_size',
//         'name': 'test_size',
//         'value': '',
//         'desc': 'test_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'train_size',
//         'name': 'train_size',
//         'value': '',
//         'desc': 'train_size'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fold_gen',
//         'name': 'fold_gen',
//         'value': '',
//         'desc': 'fold_gen'
//       }
//     ]
//   },
//   'PCA': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iterated_power',
//         'name': 'iterated_power',
//         'value': '',
//         'desc': 'iterated_power'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_components',
//         'name': 'n_components',
//         'value': '',
//         'desc': 'n_components'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'svd_solver',
//         'name': 'svd_solver',
//         'value': '',
//         'desc': 'svd_solver'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'whiten',
//         'name': 'whiten',
//         'value': '',
//         'desc': 'whiten'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'read_excel': {
//     'WParameters': [],
//     'input': [],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'convert_float',
//         'name': 'convert_float',
//         'value': '',
//         'desc': 'convert_float'
//       },
//       {
//         'type': 'string',
//         'display_name': 'converters',
//         'name': 'converters',
//         'value': '',
//         'desc': 'converters'
//       },
//       {
//         'type': 'string',
//         'display_name': 'date_parser',
//         'name': 'date_parser',
//         'value': '',
//         'desc': 'date_parser'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dtype',
//         'name': 'dtype',
//         'value': '',
//         'desc': 'dtype'
//       },
//       {
//         'type': 'string',
//         'display_name': 'engine',
//         'name': 'engine',
//         'value': '',
//         'desc': 'engine'
//       },
//       {
//         'type': 'string',
//         'display_name': 'false_values',
//         'name': 'false_values',
//         'value': '',
//         'desc': 'false_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'header',
//         'name': 'header',
//         'value': '',
//         'desc': 'header'
//       },
//       {
//         'type': 'string',
//         'display_name': 'index_col',
//         'name': 'index_col',
//         'value': '',
//         'desc': 'index_col'
//       },
//       {
//         'type': 'string',
//         'display_name': 'io',
//         'name': 'io',
//         'value': '',
//         'desc': 'io'
//       },
//       {
//         'type': 'string',
//         'display_name': 'na_values',
//         'name': 'na_values',
//         'value': '',
//         'desc': 'na_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'names',
//         'name': 'names',
//         'value': '',
//         'desc': 'names'
//       },
//       {
//         'type': 'string',
//         'display_name': 'parse_dates',
//         'name': 'parse_dates',
//         'value': '',
//         'desc': 'parse_dates'
//       },
//       {
//         'type': 'string',
//         'display_name': 'sheet_name',
//         'name': 'sheet_name',
//         'value': '',
//         'desc': 'sheet_name'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skip_footer',
//         'name': 'skip_footer',
//         'value': '',
//         'desc': 'skip_footer'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skiprows',
//         'name': 'skiprows',
//         'value': '',
//         'desc': 'skiprows'
//       },
//       {
//         'type': 'string',
//         'display_name': 'squeeze',
//         'name': 'squeeze',
//         'value': '',
//         'desc': 'squeeze'
//       },
//       {
//         'type': 'string',
//         'display_name': 'thousands',
//         'name': 'thousands',
//         'value': '',
//         'desc': 'thousands'
//       },
//       {
//         'type': 'string',
//         'display_name': 'true_values',
//         'name': 'true_values',
//         'value': '',
//         'desc': 'true_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'usecols',
//         'name': 'usecols',
//         'value': '',
//         'desc': 'usecols'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'MLPRegressor': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'activation',
//         'name': 'activation',
//         'value': '',
//         'desc': 'activation'
//       },
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'batch_size',
//         'name': 'batch_size',
//         'value': '',
//         'desc': 'batch_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'beta_1',
//         'name': 'beta_1',
//         'value': '',
//         'desc': 'beta_1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'beta_2',
//         'name': 'beta_2',
//         'value': '',
//         'desc': 'beta_2'
//       },
//       {
//         'type': 'string',
//         'display_name': 'early_stopping',
//         'name': 'early_stopping',
//         'value': '',
//         'desc': 'early_stopping'
//       },
//       {
//         'type': 'string',
//         'display_name': 'epsilon',
//         'name': 'epsilon',
//         'value': '',
//         'desc': 'epsilon'
//       },
//       {
//         'type': 'string',
//         'display_name': 'hidden_layer_sizes',
//         'name': 'hidden_layer_sizes',
//         'value': '',
//         'desc': 'hidden_layer_sizes'
//       },
//       {
//         'type': 'string',
//         'display_name': 'learning_rate',
//         'name': 'learning_rate',
//         'value': '',
//         'desc': 'learning_rate'
//       },
//       {
//         'type': 'string',
//         'display_name': 'learning_rate_init',
//         'name': 'learning_rate_init',
//         'value': '',
//         'desc': 'learning_rate_init'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'momentum',
//         'name': 'momentum',
//         'value': '',
//         'desc': 'momentum'
//       },
//       {
//         'type': 'string',
//         'display_name': 'nesterovs_momentum',
//         'name': 'nesterovs_momentum',
//         'value': '',
//         'desc': 'nesterovs_momentum'
//       },
//       {
//         'type': 'string',
//         'display_name': 'power_t',
//         'name': 'power_t',
//         'value': '',
//         'desc': 'power_t'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'shuffle',
//         'name': 'shuffle',
//         'value': '',
//         'desc': 'shuffle'
//       },
//       {
//         'type': 'string',
//         'display_name': 'solver',
//         'name': 'solver',
//         'value': '',
//         'desc': 'solver'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'validation_fraction',
//         'name': 'validation_fraction',
//         'value': '',
//         'desc': 'validation_fraction'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warm_start',
//         'name': 'warm_start',
//         'value': '',
//         'desc': 'warm_start'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'SaveFile': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'filename',
//         'name': 'filename',
//         'value': '',
//         'desc': 'filename'
//       },
//       {
//         'type': 'string',
//         'display_name': 'format',
//         'name': 'format',
//         'value': '',
//         'desc': 'format'
//       },
//       {
//         'type': 'string',
//         'display_name': 'header',
//         'name': 'header',
//         'value': '',
//         'desc': 'header'
//       },
//       {
//         'type': 'string',
//         'display_name': 'index',
//         'name': 'index',
//         'value': '',
//         'desc': 'index'
//       },
//       {
//         'type': 'string',
//         'display_name': 'output_directory',
//         'name': 'output_directory',
//         'value': '',
//         'desc': 'output_directory'
//       },
//       {
//         'type': 'string',
//         'display_name': 'record_time',
//         'name': 'record_time',
//         'value': '',
//         'desc': 'record_time'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'filepath',
//         'name': 'filepath',
//         'value': '',
//         'desc': 'filepath'
//       }
//     ]
//   },
//   'Normalizer': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'norm',
//         'name': 'norm',
//         'value': '',
//         'desc': 'norm'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'DistanceMatrix': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'nCores',
//         'name': 'nCores',
//         'value': '',
//         'desc': 'nCores'
//       },
//       {
//         'type': 'string',
//         'display_name': 'norm_type',
//         'name': 'norm_type',
//         'value': '',
//         'desc': 'norm_type'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'train_test_split': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'X',
//         'name': 'X',
//         'value': '',
//         'desc': 'X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'shuffle',
//         'name': 'shuffle',
//         'value': '',
//         'desc': 'shuffle'
//       },
//       {
//         'type': 'string',
//         'display_name': 'stratify',
//         'name': 'stratify',
//         'value': '',
//         'desc': 'stratify'
//       },
//       {
//         'type': 'string',
//         'display_name': 'test_size',
//         'name': 'test_size',
//         'value': '',
//         'desc': 'test_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'train_size',
//         'name': 'train_size',
//         'value': '',
//         'desc': 'train_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'y',
//         'name': 'y',
//         'value': '',
//         'desc': 'y'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'dfx_test',
//         'name': 'dfx_test',
//         'value': '',
//         'desc': 'dfx_test'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx_train',
//         'name': 'dfx_train',
//         'value': '',
//         'desc': 'dfx_train'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_test',
//         'name': 'dfy_test',
//         'value': '',
//         'desc': 'dfy_test'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_train',
//         'name': 'dfy_train',
//         'value': '',
//         'desc': 'dfy_train'
//       }
//     ]
//   },
//   'OneHotEncoder': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'categorical_features',
//         'name': 'categorical_features',
//         'value': '',
//         'desc': 'categorical_features'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dtype',
//         'name': 'dtype',
//         'value': '',
//         'desc': 'dtype'
//       },
//       {
//         'type': 'string',
//         'display_name': 'handle_unknown',
//         'name': 'handle_unknown',
//         'value': '',
//         'desc': 'handle_unknown'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_values',
//         'name': 'n_values',
//         'value': '',
//         'desc': 'n_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'sparse',
//         'name': 'sparse',
//         'value': '',
//         'desc': 'sparse'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'ARDRegression': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha_1',
//         'name': 'alpha_1',
//         'value': '',
//         'desc': 'alpha_1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'alpha_2',
//         'name': 'alpha_2',
//         'value': '',
//         'desc': 'alpha_2'
//       },
//       {
//         'type': 'string',
//         'display_name': 'compute_score',
//         'name': 'compute_score',
//         'value': '',
//         'desc': 'compute_score'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'lambda_1',
//         'name': 'lambda_1',
//         'value': '',
//         'desc': 'lambda_1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'lambda_2',
//         'name': 'lambda_2',
//         'value': '',
//         'desc': 'lambda_2'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_iter',
//         'name': 'n_iter',
//         'value': '',
//         'desc': 'n_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'threshold_lambda',
//         'name': 'threshold_lambda',
//         'value': '',
//         'desc': 'threshold_lambda'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'Coulomb_Matrix': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'molecules',
//         'name': 'molecules',
//         'value': '',
//         'desc': 'molecules'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'CMtype',
//         'name': 'CMtype',
//         'value': '',
//         'desc': 'CMtype'
//       },
//       {
//         'type': 'string',
//         'display_name': 'const',
//         'name': 'const',
//         'value': '',
//         'desc': 'const'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_n_atoms',
//         'name': 'max_n_atoms',
//         'value': '',
//         'desc': 'max_n_atoms'
//       },
//       {
//         'type': 'string',
//         'display_name': 'nPerm',
//         'name': 'nPerm',
//         'value': '',
//         'desc': 'nPerm'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'LinearSVR': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'C',
//         'name': 'C',
//         'value': '',
//         'desc': 'C'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dual',
//         'name': 'dual',
//         'value': '',
//         'desc': 'dual'
//       },
//       {
//         'type': 'string',
//         'display_name': 'epsilon',
//         'name': 'epsilon',
//         'value': '',
//         'desc': 'epsilon'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'intercept_scaling',
//         'name': 'intercept_scaling',
//         'value': '',
//         'desc': 'intercept_scaling'
//       },
//       {
//         'type': 'string',
//         'display_name': 'loss',
//         'name': 'loss',
//         'value': '',
//         'desc': 'loss'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'cross_val_predict': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'cv',
//         'name': 'cv',
//         'value': '',
//         'desc': 'cv'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'X',
//         'name': 'X',
//         'value': '',
//         'desc': 'X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'cv',
//         'name': 'cv',
//         'value': '',
//         'desc': 'cv'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_params',
//         'name': 'fit_params',
//         'value': '',
//         'desc': 'fit_params'
//       },
//       {
//         'type': 'string',
//         'display_name': 'groups',
//         'name': 'groups',
//         'value': '',
//         'desc': 'groups'
//       },
//       {
//         'type': 'string',
//         'display_name': 'method',
//         'name': 'method',
//         'value': '',
//         'desc': 'method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_jobs',
//         'name': 'n_jobs',
//         'value': '',
//         'desc': 'n_jobs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'pre_dispatch',
//         'name': 'pre_dispatch',
//         'value': '',
//         'desc': 'pre_dispatch'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       },
//       {
//         'type': 'string',
//         'display_name': 'y',
//         'name': 'y',
//         'value': '',
//         'desc': 'y'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'RobustScaler': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'quantile_range',
//         'name': 'quantile_range',
//         'value': '',
//         'desc': 'quantile_range'
//       },
//       {
//         'type': 'string',
//         'display_name': 'with_centering',
//         'name': 'with_centering',
//         'value': '',
//         'desc': 'with_centering'
//       },
//       {
//         'type': 'string',
//         'display_name': 'with_scaling',
//         'name': 'with_scaling',
//         'value': '',
//         'desc': 'with_scaling'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'cross_val_score': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'cv',
//         'name': 'cv',
//         'value': '',
//         'desc': 'cv'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'scorer',
//         'name': 'scorer',
//         'value': '',
//         'desc': 'scorer'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'X',
//         'name': 'X',
//         'value': '',
//         'desc': 'X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'cv',
//         'name': 'cv',
//         'value': '',
//         'desc': 'cv'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_params',
//         'name': 'fit_params',
//         'value': '',
//         'desc': 'fit_params'
//       },
//       {
//         'type': 'string',
//         'display_name': 'groups',
//         'name': 'groups',
//         'value': '',
//         'desc': 'groups'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_jobs',
//         'name': 'n_jobs',
//         'value': '',
//         'desc': 'n_jobs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'pre_dispatch',
//         'name': 'pre_dispatch',
//         'value': '',
//         'desc': 'pre_dispatch'
//       },
//       {
//         'type': 'string',
//         'display_name': 'scoring',
//         'name': 'scoring',
//         'value': '',
//         'desc': 'scoring'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       },
//       {
//         'type': 'string',
//         'display_name': 'y',
//         'name': 'y',
//         'value': '',
//         'desc': 'y'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'scores',
//         'name': 'scores',
//         'value': '',
//         'desc': 'scores'
//       }
//     ]
//   },
//   'StandardScaler': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'with_mean',
//         'name': 'with_mean',
//         'value': '',
//         'desc': 'with_mean'
//       },
//       {
//         'type': 'string',
//         'display_name': 'with_std',
//         'name': 'with_std',
//         'value': '',
//         'desc': 'with_std'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'MissingValues': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'inf_as_null',
//         'name': 'inf_as_null',
//         'value': '',
//         'desc': 'inf_as_null'
//       },
//       {
//         'type': 'string',
//         'display_name': 'missing_values',
//         'name': 'missing_values',
//         'value': '',
//         'desc': 'missing_values'
//       },
//       {
//         'type': 'string',
//         'display_name': 'strategy',
//         'name': 'strategy',
//         'value': '',
//         'desc': 'strategy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'string_as_null',
//         'name': 'string_as_null',
//         'value': '',
//         'desc': 'string_as_null'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'Bag_of_Bonds': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'molecules',
//         'name': 'molecules',
//         'value': '',
//         'desc': 'molecules'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'const',
//         'name': 'const',
//         'value': '',
//         'desc': 'const'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'learning_curve': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'cv',
//         'name': 'cv',
//         'value': '',
//         'desc': 'cv'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'scorer',
//         'name': 'scorer',
//         'value': '',
//         'desc': 'scorer'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'X',
//         'name': 'X',
//         'value': '',
//         'desc': 'X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'cv',
//         'name': 'cv',
//         'value': '',
//         'desc': 'cv'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'exploit_incremental_learning',
//         'name': 'exploit_incremental_learning',
//         'value': '',
//         'desc': 'exploit_incremental_learning'
//       },
//       {
//         'type': 'string',
//         'display_name': 'groups',
//         'name': 'groups',
//         'value': '',
//         'desc': 'groups'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_jobs',
//         'name': 'n_jobs',
//         'value': '',
//         'desc': 'n_jobs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'pre_dispatch',
//         'name': 'pre_dispatch',
//         'value': '',
//         'desc': 'pre_dispatch'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'scoring',
//         'name': 'scoring',
//         'value': '',
//         'desc': 'scoring'
//       },
//       {
//         'type': 'string',
//         'display_name': 'shuffle',
//         'name': 'shuffle',
//         'value': '',
//         'desc': 'shuffle'
//       },
//       {
//         'type': 'string',
//         'display_name': 'train_sizes',
//         'name': 'train_sizes',
//         'value': '',
//         'desc': 'train_sizes'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       },
//       {
//         'type': 'string',
//         'display_name': 'y',
//         'name': 'y',
//         'value': '',
//         'desc': 'y'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'extended_result_',
//         'name': 'extended_result_',
//         'value': '',
//         'desc': 'extended_result_'
//       },
//       {
//         'type': 'string',
//         'display_name': 'test_scores',
//         'name': 'test_scores',
//         'value': '',
//         'desc': 'test_scores'
//       },
//       {
//         'type': 'string',
//         'display_name': 'train_scores',
//         'name': 'train_scores',
//         'value': '',
//         'desc': 'train_scores'
//       },
//       {
//         'type': 'string',
//         'display_name': 'train_sizes_abs',
//         'name': 'train_sizes_abs',
//         'value': '',
//         'desc': 'train_sizes_abs'
//       }
//     ]
//   },
//   'RDKitFingerprint': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'molfile',
//         'name': 'molfile',
//         'value': '',
//         'desc': 'molfile'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'FPtype',
//         'name': 'FPtype',
//         'value': '',
//         'desc': 'FPtype'
//       },
//       {
//         'type': 'string',
//         'display_name': 'arguments',
//         'name': 'arguments',
//         'value': '',
//         'desc': 'arguments'
//       },
//       {
//         'type': 'string',
//         'display_name': 'molfile',
//         'name': 'molfile',
//         'value': '',
//         'desc': 'molfile'
//       },
//       {
//         'type': 'string',
//         'display_name': 'nBits',
//         'name': 'nBits',
//         'value': '',
//         'desc': 'nBits'
//       },
//       {
//         'type': 'string',
//         'display_name': 'path',
//         'name': 'path',
//         'value': '',
//         'desc': 'path'
//       },
//       {
//         'type': 'string',
//         'display_name': 'radius',
//         'name': 'radius',
//         'value': '',
//         'desc': 'radius'
//       },
//       {
//         'type': 'string',
//         'display_name': 'removeHs',
//         'name': 'removeHs',
//         'value': '',
//         'desc': 'removeHs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'vector',
//         'name': 'vector',
//         'value': '',
//         'desc': 'vector'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       },
//       {
//         'type': 'string',
//         'display_name': 'removed_rows',
//         'name': 'removed_rows',
//         'value': '',
//         'desc': 'removed_rows'
//       }
//     ]
//   },
//   'GridSearchCV': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'scorer',
//         'name': 'scorer',
//         'value': '',
//         'desc': 'scorer'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'cv',
//         'name': 'cv',
//         'value': '',
//         'desc': 'cv'
//       },
//       {
//         'type': 'string',
//         'display_name': 'error_score',
//         'name': 'error_score',
//         'value': '',
//         'desc': 'error_score'
//       },
//       {
//         'type': 'string',
//         'display_name': 'estimator',
//         'name': 'estimator',
//         'value': '',
//         'desc': 'estimator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_params',
//         'name': 'fit_params',
//         'value': '',
//         'desc': 'fit_params'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iid',
//         'name': 'iid',
//         'value': '',
//         'desc': 'iid'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_jobs',
//         'name': 'n_jobs',
//         'value': '',
//         'desc': 'n_jobs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'param_grid',
//         'name': 'param_grid',
//         'value': '',
//         'desc': 'param_grid'
//       },
//       {
//         'type': 'string',
//         'display_name': 'pre_dispatch',
//         'name': 'pre_dispatch',
//         'value': '',
//         'desc': 'pre_dispatch'
//       },
//       {
//         'type': 'string',
//         'display_name': 'refit',
//         'name': 'refit',
//         'value': '',
//         'desc': 'refit'
//       },
//       {
//         'type': 'string',
//         'display_name': 'return_train_score',
//         'name': 'return_train_score',
//         'value': '',
//         'desc': 'return_train_score'
//       },
//       {
//         'type': 'string',
//         'display_name': 'scoring',
//         'name': 'scoring',
//         'value': '',
//         'desc': 'scoring'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'best_estimator_',
//         'name': 'best_estimator_',
//         'value': '',
//         'desc': 'best_estimator_'
//       },
//       {
//         'type': 'string',
//         'display_name': 'cv_results_',
//         'name': 'cv_results_',
//         'value': '',
//         'desc': 'cv_results_'
//       }
//     ]
//   },
//   'PyScript': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'iv1',
//         'name': 'iv1',
//         'value': '',
//         'desc': 'iv1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iv2',
//         'name': 'iv2',
//         'value': '',
//         'desc': 'iv2'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iv3',
//         'name': 'iv3',
//         'value': '',
//         'desc': 'iv3'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iv4',
//         'name': 'iv4',
//         'value': '',
//         'desc': 'iv4'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iv5',
//         'name': 'iv5',
//         'value': '',
//         'desc': 'iv5'
//       },
//       {
//         'type': 'string',
//         'display_name': 'iv6',
//         'name': 'iv6',
//         'value': '',
//         'desc': 'iv6'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'line01',
//         'name': 'line01',
//         'value': '',
//         'desc': 'line01'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line02',
//         'name': 'line02',
//         'value': '',
//         'desc': 'line02'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line03',
//         'name': 'line03',
//         'value': '',
//         'desc': 'line03'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line04',
//         'name': 'line04',
//         'value': '',
//         'desc': 'line04'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line05',
//         'name': 'line05',
//         'value': '',
//         'desc': 'line05'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line06',
//         'name': 'line06',
//         'value': '',
//         'desc': 'line06'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line07',
//         'name': 'line07',
//         'value': '',
//         'desc': 'line07'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line08',
//         'name': 'line08',
//         'value': '',
//         'desc': 'line08'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line09',
//         'name': 'line09',
//         'value': '',
//         'desc': 'line09'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line10',
//         'name': 'line10',
//         'value': '',
//         'desc': 'line10'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line11',
//         'name': 'line11',
//         'value': '',
//         'desc': 'line11'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line12',
//         'name': 'line12',
//         'value': '',
//         'desc': 'line12'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line13',
//         'name': 'line13',
//         'value': '',
//         'desc': 'line13'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line14',
//         'name': 'line14',
//         'value': '',
//         'desc': 'line14'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line15',
//         'name': 'line15',
//         'value': '',
//         'desc': 'line15'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line16',
//         'name': 'line16',
//         'value': '',
//         'desc': 'line16'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line17',
//         'name': 'line17',
//         'value': '',
//         'desc': 'line17'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line18',
//         'name': 'line18',
//         'value': '',
//         'desc': 'line18'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line19',
//         'name': 'line19',
//         'value': '',
//         'desc': 'line19'
//       },
//       {
//         'type': 'string',
//         'display_name': 'line20',
//         'name': 'line20',
//         'value': '',
//         'desc': 'line20'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'ov1',
//         'name': 'ov1',
//         'value': '',
//         'desc': 'ov1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'ov2',
//         'name': 'ov2',
//         'value': '',
//         'desc': 'ov2'
//       },
//       {
//         'type': 'string',
//         'display_name': 'ov3',
//         'name': 'ov3',
//         'value': '',
//         'desc': 'ov3'
//       },
//       {
//         'type': 'string',
//         'display_name': 'ov4',
//         'name': 'ov4',
//         'value': '',
//         'desc': 'ov4'
//       },
//       {
//         'type': 'string',
//         'display_name': 'ov5',
//         'name': 'ov5',
//         'value': '',
//         'desc': 'ov5'
//       },
//       {
//         'type': 'string',
//         'display_name': 'ov6',
//         'name': 'ov6',
//         'value': '',
//         'desc': 'ov6'
//       }
//     ]
//   },
//   'StratifiedShuffleSplit': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'n_splits',
//         'name': 'n_splits',
//         'value': '',
//         'desc': 'n_splits'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'test_size',
//         'name': 'test_size',
//         'value': '',
//         'desc': 'test_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'train_size',
//         'name': 'train_size',
//         'value': '',
//         'desc': 'train_size'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fold_gen',
//         'name': 'fold_gen',
//         'value': '',
//         'desc': 'fold_gen'
//       }
//     ]
//   },
//   'LassoLars': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'eps',
//         'name': 'eps',
//         'value': '',
//         'desc': 'eps'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_path',
//         'name': 'fit_path',
//         'value': '',
//         'desc': 'fit_path'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'positive',
//         'name': 'positive',
//         'value': '',
//         'desc': 'positive'
//       },
//       {
//         'type': 'string',
//         'display_name': 'precompute',
//         'name': 'precompute',
//         'value': '',
//         'desc': 'precompute'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'Merge': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'df1',
//         'name': 'df1',
//         'value': '',
//         'desc': 'df1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df2',
//         'name': 'df2',
//         'value': '',
//         'desc': 'df2'
//       }
//     ],
//     'FParameters': [],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'NuSVR': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'C',
//         'name': 'C',
//         'value': '',
//         'desc': 'C'
//       },
//       {
//         'type': 'string',
//         'display_name': 'cache_size',
//         'name': 'cache_size',
//         'value': '',
//         'desc': 'cache_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'coef0',
//         'name': 'coef0',
//         'value': '',
//         'desc': 'coef0'
//       },
//       {
//         'type': 'string',
//         'display_name': 'degree',
//         'name': 'degree',
//         'value': '',
//         'desc': 'degree'
//       },
//       {
//         'type': 'string',
//         'display_name': 'gamma',
//         'name': 'gamma',
//         'value': '',
//         'desc': 'gamma'
//       },
//       {
//         'type': 'string',
//         'display_name': 'kernel',
//         'name': 'kernel',
//         'value': '',
//         'desc': 'kernel'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'nu',
//         'name': 'nu',
//         'value': '',
//         'desc': 'nu'
//       },
//       {
//         'type': 'string',
//         'display_name': 'shrinking',
//         'name': 'shrinking',
//         'value': '',
//         'desc': 'shrinking'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'XYZreader': {
//     'WParameters': [],
//     'input': [],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'Z',
//         'name': 'Z',
//         'value': '',
//         'desc': 'Z'
//       },
//       {
//         'type': 'string',
//         'display_name': 'path_pattern',
//         'name': 'path_pattern',
//         'value': '',
//         'desc': 'path_pattern'
//       },
//       {
//         'type': 'string',
//         'display_name': 'path_root',
//         'name': 'path_root',
//         'value': '',
//         'desc': 'path_root'
//       },
//       {
//         'type': 'string',
//         'display_name': 'reader',
//         'name': 'reader',
//         'value': '',
//         'desc': 'reader'
//       },
//       {
//         'type': 'string',
//         'display_name': 'skip_lines',
//         'name': 'skip_lines',
//         'value': '',
//         'desc': 'skip_lines'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'molecules',
//         'name': 'molecules',
//         'value': '',
//         'desc': 'molecules'
//       }
//     ]
//   },
//   'corr': {
//     'WParameters': [],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'method',
//         'name': 'method',
//         'value': '',
//         'desc': 'method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'min_periods',
//         'name': 'min_periods',
//         'value': '',
//         'desc': 'min_periods'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'MultiTaskLasso': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'selection',
//         'name': 'selection',
//         'value': '',
//         'desc': 'selection'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warm_start',
//         'name': 'warm_start',
//         'value': '',
//         'desc': 'warm_start'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'scorer_regression': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'metric',
//         'name': 'metric',
//         'value': '',
//         'desc': 'metric'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'greater_is_better',
//         'name': 'greater_is_better',
//         'value': '',
//         'desc': 'greater_is_better'
//       },
//       {
//         'type': 'string',
//         'display_name': 'kwargs',
//         'name': 'kwargs',
//         'value': '',
//         'desc': 'kwargs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'needs_proba',
//         'name': 'needs_proba',
//         'value': '',
//         'desc': 'needs_proba'
//       },
//       {
//         'type': 'string',
//         'display_name': 'needs_threshold',
//         'name': 'needs_threshold',
//         'value': '',
//         'desc': 'needs_threshold'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'scorer',
//         'name': 'scorer',
//         'value': '',
//         'desc': 'scorer'
//       }
//     ]
//   },
//   'Dragon': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'script',
//         'name': 'script',
//         'value': '',
//         'desc': 'script'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'molfile',
//         'name': 'molfile',
//         'value': '',
//         'desc': 'molfile'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'Add2DHydrogens',
//         'name': 'Add2DHydrogens',
//         'value': '',
//         'desc': 'Add2DHydrogens'
//       },
//       {
//         'type': 'string',
//         'display_name': 'CheckUpdates',
//         'name': 'CheckUpdates',
//         'value': '',
//         'desc': 'CheckUpdates'
//       },
//       {
//         'type': 'string',
//         'display_name': 'Decimal_Separator',
//         'name': 'Decimal_Separator',
//         'value': '',
//         'desc': 'Decimal_Separator'
//       },
//       {
//         'type': 'string',
//         'display_name': 'DefaultMolFormat',
//         'name': 'DefaultMolFormat',
//         'value': '',
//         'desc': 'DefaultMolFormat'
//       },
//       {
//         'type': 'string',
//         'display_name': 'DisconnectedCalculationOption',
//         'name': 'DisconnectedCalculationOption',
//         'value': '',
//         'desc': 'DisconnectedCalculationOption'
//       },
//       {
//         'type': 'string',
//         'display_name': 'FPtype',
//         'name': 'FPtype',
//         'value': '',
//         'desc': 'FPtype'
//       },
//       {
//         'type': 'string',
//         'display_name': 'HelpBrowser',
//         'name': 'HelpBrowser',
//         'value': '',
//         'desc': 'HelpBrowser'
//       },
//       {
//         'type': 'string',
//         'display_name': 'LogEdge',
//         'name': 'LogEdge',
//         'value': '',
//         'desc': 'LogEdge'
//       },
//       {
//         'type': 'string',
//         'display_name': 'LogPathWalk',
//         'name': 'LogPathWalk',
//         'value': '',
//         'desc': 'LogPathWalk'
//       },
//       {
//         'type': 'string',
//         'display_name': 'MaxAtomWalkPath',
//         'name': 'MaxAtomWalkPath',
//         'value': '',
//         'desc': 'MaxAtomWalkPath'
//       },
//       {
//         'type': 'string',
//         'display_name': 'MaxSR',
//         'name': 'MaxSR',
//         'value': '',
//         'desc': 'MaxSR'
//       },
//       {
//         'type': 'string',
//         'display_name': 'MaxSRDetour',
//         'name': 'MaxSRDetour',
//         'value': '',
//         'desc': 'MaxSRDetour'
//       },
//       {
//         'type': 'string',
//         'display_name': 'MaxSRforAllCircuit',
//         'name': 'MaxSRforAllCircuit',
//         'value': '',
//         'desc': 'MaxSRforAllCircuit'
//       },
//       {
//         'type': 'string',
//         'display_name': 'MissingValue',
//         'name': 'MissingValue',
//         'value': '',
//         'desc': 'MissingValue'
//       },
//       {
//         'type': 'string',
//         'display_name': 'Missing_String',
//         'name': 'Missing_String',
//         'value': '',
//         'desc': 'Missing_String'
//       },
//       {
//         'type': 'string',
//         'display_name': 'PreserveTemporaryProjects',
//         'name': 'PreserveTemporaryProjects',
//         'value': '',
//         'desc': 'PreserveTemporaryProjects'
//       },
//       {
//         'type': 'string',
//         'display_name': 'RejectDisconnectedStrucuture',
//         'name': 'RejectDisconnectedStrucuture',
//         'value': '',
//         'desc': 'RejectDisconnectedStrucuture'
//       },
//       {
//         'type': 'string',
//         'display_name': 'RejectUnusualValence',
//         'name': 'RejectUnusualValence',
//         'value': '',
//         'desc': 'RejectUnusualValence'
//       },
//       {
//         'type': 'string',
//         'display_name': 'RetainBiggestFragment',
//         'name': 'RetainBiggestFragment',
//         'value': '',
//         'desc': 'RetainBiggestFragment'
//       },
//       {
//         'type': 'string',
//         'display_name': 'RoundCoordinates',
//         'name': 'RoundCoordinates',
//         'value': '',
//         'desc': 'RoundCoordinates'
//       },
//       {
//         'type': 'string',
//         'display_name': 'RoundDescriptorValues',
//         'name': 'RoundDescriptorValues',
//         'value': '',
//         'desc': 'RoundDescriptorValues'
//       },
//       {
//         'type': 'string',
//         'display_name': 'RoundWeights',
//         'name': 'RoundWeights',
//         'value': '',
//         'desc': 'RoundWeights'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveCorrThreshold',
//         'name': 'SaveCorrThreshold',
//         'value': '',
//         'desc': 'SaveCorrThreshold'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeAllMisVal',
//         'name': 'SaveExcludeAllMisVal',
//         'value': '',
//         'desc': 'SaveExcludeAllMisVal'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeConst',
//         'name': 'SaveExcludeConst',
//         'value': '',
//         'desc': 'SaveExcludeConst'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeCorrelated',
//         'name': 'SaveExcludeCorrelated',
//         'value': '',
//         'desc': 'SaveExcludeCorrelated'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeMisMolecules',
//         'name': 'SaveExcludeMisMolecules',
//         'value': '',
//         'desc': 'SaveExcludeMisMolecules'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeMisVal',
//         'name': 'SaveExcludeMisVal',
//         'value': '',
//         'desc': 'SaveExcludeMisVal'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeNearConst',
//         'name': 'SaveExcludeNearConst',
//         'value': '',
//         'desc': 'SaveExcludeNearConst'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeRejectedMolecules',
//         'name': 'SaveExcludeRejectedMolecules',
//         'value': '',
//         'desc': 'SaveExcludeRejectedMolecules'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExcludeStdDev',
//         'name': 'SaveExcludeStdDev',
//         'value': '',
//         'desc': 'SaveExcludeStdDev'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveExclusionOptionsToVariables',
//         'name': 'SaveExclusionOptionsToVariables',
//         'value': '',
//         'desc': 'SaveExclusionOptionsToVariables'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveFile',
//         'name': 'SaveFile',
//         'value': '',
//         'desc': 'SaveFile'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveFilePath',
//         'name': 'SaveFilePath',
//         'value': '',
//         'desc': 'SaveFilePath'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveFormatBlock',
//         'name': 'SaveFormatBlock',
//         'value': '',
//         'desc': 'SaveFormatBlock'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveFormatSubBlock',
//         'name': 'SaveFormatSubBlock',
//         'value': '',
//         'desc': 'SaveFormatSubBlock'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveLabelsOnSeparateFile',
//         'name': 'SaveLabelsOnSeparateFile',
//         'value': '',
//         'desc': 'SaveLabelsOnSeparateFile'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveLayout',
//         'name': 'SaveLayout',
//         'value': '',
//         'desc': 'SaveLayout'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveOnlyData',
//         'name': 'SaveOnlyData',
//         'value': '',
//         'desc': 'SaveOnlyData'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveProject',
//         'name': 'SaveProject',
//         'value': '',
//         'desc': 'SaveProject'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveProjectFile',
//         'name': 'SaveProjectFile',
//         'value': '',
//         'desc': 'SaveProjectFile'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveStdDevThreshold',
//         'name': 'SaveStdDevThreshold',
//         'value': '',
//         'desc': 'SaveStdDevThreshold'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveStdOut',
//         'name': 'SaveStdOut',
//         'value': '',
//         'desc': 'SaveStdOut'
//       },
//       {
//         'type': 'string',
//         'display_name': 'SaveType',
//         'name': 'SaveType',
//         'value': '',
//         'desc': 'SaveType'
//       },
//       {
//         'type': 'string',
//         'display_name': 'ShowWorksheet',
//         'name': 'ShowWorksheet',
//         'value': '',
//         'desc': 'ShowWorksheet'
//       },
//       {
//         'type': 'string',
//         'display_name': 'Weights',
//         'name': 'Weights',
//         'value': '',
//         'desc': 'Weights'
//       },
//       {
//         'type': 'string',
//         'display_name': 'blocks',
//         'name': 'blocks',
//         'value': '',
//         'desc': 'blocks'
//       },
//       {
//         'type': 'string',
//         'display_name': 'consecutiveDelimiter',
//         'name': 'consecutiveDelimiter',
//         'value': '',
//         'desc': 'consecutiveDelimiter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'delimiter',
//         'name': 'delimiter',
//         'value': '',
//         'desc': 'delimiter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'external',
//         'name': 'external',
//         'value': '',
//         'desc': 'external'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fileName',
//         'name': 'fileName',
//         'value': '',
//         'desc': 'fileName'
//       },
//       {
//         'type': 'string',
//         'display_name': 'knimemode',
//         'name': 'knimemode',
//         'value': '',
//         'desc': 'knimemode'
//       },
//       {
//         'type': 'string',
//         'display_name': 'logFile',
//         'name': 'logFile',
//         'value': '',
//         'desc': 'logFile'
//       },
//       {
//         'type': 'string',
//         'display_name': 'logMode',
//         'name': 'logMode',
//         'value': '',
//         'desc': 'logMode'
//       },
//       {
//         'type': 'string',
//         'display_name': 'molFile',
//         'name': 'molFile',
//         'value': '',
//         'desc': 'molFile'
//       },
//       {
//         'type': 'string',
//         'display_name': 'molInput',
//         'name': 'molInput',
//         'value': '',
//         'desc': 'molInput'
//       },
//       {
//         'type': 'string',
//         'display_name': 'molInputFormat',
//         'name': 'molInputFormat',
//         'value': '',
//         'desc': 'molInputFormat'
//       },
//       {
//         'type': 'string',
//         'display_name': 'script',
//         'name': 'script',
//         'value': '',
//         'desc': 'script'
//       },
//       {
//         'type': 'string',
//         'display_name': 'version',
//         'name': 'version',
//         'value': '',
//         'desc': 'version'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'SVR': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'C',
//         'name': 'C',
//         'value': '',
//         'desc': 'C'
//       },
//       {
//         'type': 'string',
//         'display_name': 'cache_size',
//         'name': 'cache_size',
//         'value': '',
//         'desc': 'cache_size'
//       },
//       {
//         'type': 'string',
//         'display_name': 'coef0',
//         'name': 'coef0',
//         'value': '',
//         'desc': 'coef0'
//       },
//       {
//         'type': 'string',
//         'display_name': 'degree',
//         'name': 'degree',
//         'value': '',
//         'desc': 'degree'
//       },
//       {
//         'type': 'string',
//         'display_name': 'epsilon',
//         'name': 'epsilon',
//         'value': '',
//         'desc': 'epsilon'
//       },
//       {
//         'type': 'string',
//         'display_name': 'gamma',
//         'name': 'gamma',
//         'value': '',
//         'desc': 'gamma'
//       },
//       {
//         'type': 'string',
//         'display_name': 'kernel',
//         'name': 'kernel',
//         'value': '',
//         'desc': 'kernel'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'shrinking',
//         'name': 'shrinking',
//         'value': '',
//         'desc': 'shrinking'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'LogisticRegression': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'C',
//         'name': 'C',
//         'value': '',
//         'desc': 'C'
//       },
//       {
//         'type': 'string',
//         'display_name': 'class_weight',
//         'name': 'class_weight',
//         'value': '',
//         'desc': 'class_weight'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dual',
//         'name': 'dual',
//         'value': '',
//         'desc': 'dual'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'intercept_scaling',
//         'name': 'intercept_scaling',
//         'value': '',
//         'desc': 'intercept_scaling'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'multi_class',
//         'name': 'multi_class',
//         'value': '',
//         'desc': 'multi_class'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_jobs',
//         'name': 'n_jobs',
//         'value': '',
//         'desc': 'n_jobs'
//       },
//       {
//         'type': 'string',
//         'display_name': 'penalty',
//         'name': 'penalty',
//         'value': '',
//         'desc': 'penalty'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'solver',
//         'name': 'solver',
//         'value': '',
//         'desc': 'solver'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warm_start',
//         'name': 'warm_start',
//         'value': '',
//         'desc': 'warm_start'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'Constant': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'selection',
//         'name': 'selection',
//         'value': '',
//         'desc': 'selection'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       },
//       {
//         'type': 'string',
//         'display_name': 'removed_columns_',
//         'name': 'removed_columns_',
//         'value': '',
//         'desc': 'removed_columns_'
//       }
//     ]
//   },
//   'evaluate_regression': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'ev_multioutput',
//         'name': 'ev_multioutput',
//         'value': '',
//         'desc': 'ev_multioutput'
//       },
//       {
//         'type': 'string',
//         'display_name': 'ev_sample_weight',
//         'name': 'ev_sample_weight',
//         'value': '',
//         'desc': 'ev_sample_weight'
//       },
//       {
//         'type': 'string',
//         'display_name': 'explained_variance_score',
//         'name': 'explained_variance_score',
//         'value': '',
//         'desc': 'explained_variance_score'
//       },
//       {
//         'type': 'string',
//         'display_name': 'mae_multioutput',
//         'name': 'mae_multioutput',
//         'value': '',
//         'desc': 'mae_multioutput'
//       },
//       {
//         'type': 'string',
//         'display_name': 'mae_sample_weight',
//         'name': 'mae_sample_weight',
//         'value': '',
//         'desc': 'mae_sample_weight'
//       },
//       {
//         'type': 'string',
//         'display_name': 'mean_absolute_error',
//         'name': 'mean_absolute_error',
//         'value': '',
//         'desc': 'mean_absolute_error'
//       },
//       {
//         'type': 'string',
//         'display_name': 'mean_squared_error',
//         'name': 'mean_squared_error',
//         'value': '',
//         'desc': 'mean_squared_error'
//       },
//       {
//         'type': 'string',
//         'display_name': 'median_absolute_error',
//         'name': 'median_absolute_error',
//         'value': '',
//         'desc': 'median_absolute_error'
//       },
//       {
//         'type': 'string',
//         'display_name': 'mse_multioutput',
//         'name': 'mse_multioutput',
//         'value': '',
//         'desc': 'mse_multioutput'
//       },
//       {
//         'type': 'string',
//         'display_name': 'mse_sample_weight',
//         'name': 'mse_sample_weight',
//         'value': '',
//         'desc': 'mse_sample_weight'
//       },
//       {
//         'type': 'string',
//         'display_name': 'multioutput',
//         'name': 'multioutput',
//         'value': '',
//         'desc': 'multioutput'
//       },
//       {
//         'type': 'string',
//         'display_name': 'r2_sample_weight',
//         'name': 'r2_sample_weight',
//         'value': '',
//         'desc': 'r2_sample_weight'
//       },
//       {
//         'type': 'string',
//         'display_name': 'r2_score',
//         'name': 'r2_score',
//         'value': '',
//         'desc': 'r2_score'
//       },
//       {
//         'type': 'string',
//         'display_name': 'rmse_multioutput',
//         'name': 'rmse_multioutput',
//         'value': '',
//         'desc': 'rmse_multioutput'
//       },
//       {
//         'type': 'string',
//         'display_name': 'rmse_sample_weight',
//         'name': 'rmse_sample_weight',
//         'value': '',
//         'desc': 'rmse_sample_weight'
//       },
//       {
//         'type': 'string',
//         'display_name': 'root_mean_squared_error',
//         'name': 'root_mean_squared_error',
//         'value': '',
//         'desc': 'root_mean_squared_error'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ],
//     'FParameters': [],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'evaluation_results_',
//         'name': 'evaluation_results_',
//         'value': '',
//         'desc': 'evaluation_results_'
//       },
//       {
//         'type': 'string',
//         'display_name': 'evaluator',
//         'name': 'evaluator',
//         'value': '',
//         'desc': 'evaluator'
//       }
//     ]
//   },
//   'Binarizer': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'threshold',
//         'name': 'threshold',
//         'value': '',
//         'desc': 'threshold'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'MultiTaskElasticNet': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'l1_ratio',
//         'name': 'l1_ratio',
//         'value': '',
//         'desc': 'l1_ratio'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'selection',
//         'name': 'selection',
//         'value': '',
//         'desc': 'selection'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warm_start',
//         'name': 'warm_start',
//         'value': '',
//         'desc': 'warm_start'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'LeaveOneOut': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       }
//     ],
//     'FParameters': [],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fold_gen',
//         'name': 'fold_gen',
//         'value': '',
//         'desc': 'fold_gen'
//       }
//     ]
//   },
//   'ElasticNet': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'l1_ratio',
//         'name': 'l1_ratio',
//         'value': '',
//         'desc': 'l1_ratio'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'positive',
//         'name': 'positive',
//         'value': '',
//         'desc': 'positive'
//       },
//       {
//         'type': 'string',
//         'display_name': 'precompute',
//         'name': 'precompute',
//         'value': '',
//         'desc': 'precompute'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'selection',
//         'name': 'selection',
//         'value': '',
//         'desc': 'selection'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warm_start',
//         'name': 'warm_start',
//         'value': '',
//         'desc': 'warm_start'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'PolynomialFeatures': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'degree',
//         'name': 'degree',
//         'value': '',
//         'desc': 'degree'
//       },
//       {
//         'type': 'string',
//         'display_name': 'include_bias',
//         'name': 'include_bias',
//         'value': '',
//         'desc': 'include_bias'
//       },
//       {
//         'type': 'string',
//         'display_name': 'interaction_only',
//         'name': 'interaction_only',
//         'value': '',
//         'desc': 'interaction_only'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'BayesianRidge': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha_1',
//         'name': 'alpha_1',
//         'value': '',
//         'desc': 'alpha_1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'alpha_2',
//         'name': 'alpha_2',
//         'value': '',
//         'desc': 'alpha_2'
//       },
//       {
//         'type': 'string',
//         'display_name': 'compute_score',
//         'name': 'compute_score',
//         'value': '',
//         'desc': 'compute_score'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'lambda_1',
//         'name': 'lambda_1',
//         'value': '',
//         'desc': 'lambda_1'
//       },
//       {
//         'type': 'string',
//         'display_name': 'lambda_2',
//         'name': 'lambda_2',
//         'value': '',
//         'desc': 'lambda_2'
//       },
//       {
//         'type': 'string',
//         'display_name': 'n_iter',
//         'name': 'n_iter',
//         'value': '',
//         'desc': 'n_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'verbose',
//         'name': 'verbose',
//         'value': '',
//         'desc': 'verbose'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   },
//   'MinMaxScaler': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'copy',
//         'name': 'copy',
//         'value': '',
//         'desc': 'copy'
//       },
//       {
//         'type': 'string',
//         'display_name': 'feature_range',
//         'name': 'feature_range',
//         'value': '',
//         'desc': 'feature_range'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'df',
//         'name': 'df',
//         'value': '',
//         'desc': 'df'
//       }
//     ]
//   },
//   'Lasso': {
//     'WParameters': [
//       {
//         'type': 'string',
//         'display_name': 'func_method',
//         'name': 'func_method',
//         'value': '',
//         'desc': 'func_method'
//       },
//       {
//         'type': 'string',
//         'display_name': 'track_header',
//         'name': 'track_header',
//         'value': '',
//         'desc': 'track_header'
//       }
//     ],
//     'input': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfx',
//         'name': 'dfx',
//         'value': '',
//         'desc': 'dfx'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy',
//         'name': 'dfy',
//         'value': '',
//         'desc': 'dfy'
//       }
//     ],
//     'FParameters': [
//       {
//         'type': 'string',
//         'display_name': 'alpha',
//         'name': 'alpha',
//         'value': '',
//         'desc': 'alpha'
//       },
//       {
//         'type': 'string',
//         'display_name': 'copy_X',
//         'name': 'copy_X',
//         'value': '',
//         'desc': 'copy_X'
//       },
//       {
//         'type': 'string',
//         'display_name': 'fit_intercept',
//         'name': 'fit_intercept',
//         'value': '',
//         'desc': 'fit_intercept'
//       },
//       {
//         'type': 'string',
//         'display_name': 'max_iter',
//         'name': 'max_iter',
//         'value': '',
//         'desc': 'max_iter'
//       },
//       {
//         'type': 'string',
//         'display_name': 'normalize',
//         'name': 'normalize',
//         'value': '',
//         'desc': 'normalize'
//       },
//       {
//         'type': 'string',
//         'display_name': 'positive',
//         'name': 'positive',
//         'value': '',
//         'desc': 'positive'
//       },
//       {
//         'type': 'string',
//         'display_name': 'precompute',
//         'name': 'precompute',
//         'value': '',
//         'desc': 'precompute'
//       },
//       {
//         'type': 'string',
//         'display_name': 'random_state',
//         'name': 'random_state',
//         'value': '',
//         'desc': 'random_state'
//       },
//       {
//         'type': 'string',
//         'display_name': 'selection',
//         'name': 'selection',
//         'value': '',
//         'desc': 'selection'
//       },
//       {
//         'type': 'string',
//         'display_name': 'tol',
//         'name': 'tol',
//         'value': '',
//         'desc': 'tol'
//       },
//       {
//         'type': 'string',
//         'display_name': 'warm_start',
//         'name': 'warm_start',
//         'value': '',
//         'desc': 'warm_start'
//       }
//     ],
//     'output': [
//       {
//         'type': 'string',
//         'display_name': 'api',
//         'name': 'api',
//         'value': '',
//         'desc': 'api'
//       },
//       {
//         'type': 'string',
//         'display_name': 'dfy_predict',
//         'name': 'dfy_predict',
//         'value': '',
//         'desc': 'dfy_predict'
//       }
//     ]
//   }
// }
const _libMeta = {
  'table': 'Input data in Table format from csv or excel file',
  'Convert': 'Convert the input file from one format to another',
  'datasets': 'Use one of the many standard datasets available',
  'xyz': 'Input data in the XYZ format',
  'python script': 'Use Python Script to get the input to the system',
  'molecular descriptors': 'Select the representation format of molecules for the chemical datasets',
  'inorganic input': 'Inorganic input details',
  'distance matrix': 'distance matrix details',
  'inorganic descriptors': 'inorganic descriptors details',
  'data manipulation': 'Use this split or concatenate the dataset',
  'feature transformation': 'Run KernalPCA or PCA on the data',
  'data cleaning': 'Select from the different data cleaning methods',
  'scaling': 'Feature Scaling',
  'feature representation': 'Select on how to represent the features - binarized, one-hot encoded or as polynomial features',
  'split': 'Select a method on how to split the data',
  'regression': 'Select from the different regression methods available',
  'evaluate': 'Use to to evaluate',
  'validate': 'Select from the different validation methods',
  'grid': 'Use grid search',
  'genetic algorithm': 'Use GA_DEAP',
  'plot': 'Use this to plot the data as histogram or scatterplot',
  'artist': 'Lorem ipsum',
  'figure': 'Use this to save the generated plot',
  'file': 'Use this to save the data into a file',
  'NA': 'Skip creating a node'
}
const _libUINames = {
  'table': 'Table',
  'Convert': 'Convert',
  'datasets': 'Datasets',
  'xyz': 'XYZ',
  'python script': 'Python Script',
  'molecular descriptors': 'Molecular Descriptors',
  'inorganic input': 'Inorganic Input',
  'distance matrix': 'Distance Matrix',
  'inorganic descriptors': 'Inorganic Descriptors',
  'data manipulation': 'Data Manipulation',
  'feature transformation': 'Feature Transformation',
  'data cleaning': 'Data Cleaning',
  'scaling': 'Feature Scaling',
  'feature representation': 'Feature Representation',
  'split': 'Split',
  'regression': 'Regression',
  'evaluate': 'Evaluate',
  'validate': 'Validate',
  'grid': 'Grid',
  'genetic algorithm': 'Genetic Algorithm',
  'plot': 'Plot',
  'artist': 'Artist',
  'figure': 'Figure',
  'file': 'File'
}
const _funcMeta = {
  'Lars': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'eps',
        'name': 'eps',
        'value': '',
        'desc': 'eps'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'fit_path',
        'name': 'fit_path',
        'value': '',
        'desc': 'fit_path'
      },
      {
        'type': 'string',
        'display_name': 'n_nonzero_coefs',
        'name': 'n_nonzero_coefs',
        'value': '',
        'desc': 'n_nonzero_coefs'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'positive',
        'name': 'positive',
        'value': '',
        'desc': 'positive'
      },
      {
        'type': 'string',
        'display_name': 'precompute',
        'name': 'precompute',
        'value': '',
        'desc': 'precompute'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'Ridge': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'solver',
        'name': 'solver',
        'value': '',
        'desc': 'solver'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'GCLPAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'energies',
        'name': 'energies',
        'value': '',
        'desc': 'energies'
      },
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      },
      {
        'type': 'string',
        'display_name': 'phases',
        'name': 'phases',
        'value': '',
        'desc': 'phases'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'count_phases',
        'name': 'count_phases',
        'value': '',
        'desc': 'count_phases'
      },
      {
        'type': 'string',
        'display_name': 'energies',
        'name': 'energies',
        'value': '',
        'desc': 'energies'
      },
      {
        'type': 'string',
        'display_name': 'phases',
        'name': 'phases',
        'value': '',
        'desc': 'phases'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'LinearRegression': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'n_jobs',
        'name': 'n_jobs',
        'value': '',
        'desc': 'n_jobs'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'SGDRegressor': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'average',
        'name': 'average',
        'value': '',
        'desc': 'average'
      },
      {
        'type': 'string',
        'display_name': 'epsilon',
        'name': 'epsilon',
        'value': '',
        'desc': 'epsilon'
      },
      {
        'type': 'string',
        'display_name': 'eta0',
        'name': 'eta0',
        'value': '',
        'desc': 'eta0'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'l1_ratio',
        'name': 'l1_ratio',
        'value': '',
        'desc': 'l1_ratio'
      },
      {
        'type': 'string',
        'display_name': 'learning_rate',
        'name': 'learning_rate',
        'value': '',
        'desc': 'learning_rate'
      },
      {
        'type': 'string',
        'display_name': 'loss',
        'name': 'loss',
        'value': '',
        'desc': 'loss'
      },
      {
        'type': 'string',
        'display_name': 'n_iter',
        'name': 'n_iter',
        'value': '',
        'desc': 'n_iter'
      },
      {
        'type': 'string',
        'display_name': 'penalty',
        'name': 'penalty',
        'value': '',
        'desc': 'penalty'
      },
      {
        'type': 'string',
        'display_name': 'power_t',
        'name': 'power_t',
        'value': '',
        'desc': 'power_t'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'shuffle',
        'name': 'shuffle',
        'value': '',
        'desc': 'shuffle'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      },
      {
        'type': 'string',
        'display_name': 'warm_start',
        'name': 'warm_start',
        'value': '',
        'desc': 'warm_start'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'CompositionEntry': {
    'WParameters': [],
    'input': [],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'filepath',
        'name': 'filepath',
        'value': '',
        'desc': 'filepath'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ]
  },
  'ConstantColumns': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      },
      {
        'type': 'string',
        'display_name': 'removed_columns_',
        'name': 'removed_columns_',
        'value': '',
        'desc': 'removed_columns_'
      }
    ]
  },
  'ARDRegression': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha_1',
        'name': 'alpha_1',
        'value': '',
        'desc': 'alpha_1'
      },
      {
        'type': 'string',
        'display_name': 'alpha_2',
        'name': 'alpha_2',
        'value': '',
        'desc': 'alpha_2'
      },
      {
        'type': 'string',
        'display_name': 'compute_score',
        'name': 'compute_score',
        'value': '',
        'desc': 'compute_score'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'lambda_1',
        'name': 'lambda_1',
        'value': '',
        'desc': 'lambda_1'
      },
      {
        'type': 'string',
        'display_name': 'lambda_2',
        'name': 'lambda_2',
        'value': '',
        'desc': 'lambda_2'
      },
      {
        'type': 'string',
        'display_name': 'n_iter',
        'name': 'n_iter',
        'value': '',
        'desc': 'n_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'threshold_lambda',
        'name': 'threshold_lambda',
        'value': '',
        'desc': 'threshold_lambda'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'ChargeDependentAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'MeredigAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'ConvertFile': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'file_path',
        'name': 'file_path',
        'value': '',
        'desc': 'file_path'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'file_path',
        'name': 'file_path',
        'value': '',
        'desc': 'file_path'
      },
      {
        'type': 'string',
        'display_name': 'from_format',
        'name': 'from_format',
        'value': '',
        'desc': 'from_format'
      },
      {
        'type': 'string',
        'display_name': 'to_format',
        'name': 'to_format',
        'value': '',
        'desc': 'to_format'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'converted_file_paths',
        'name': 'converted_file_paths',
        'value': '',
        'desc': 'converted_file_paths'
      }
    ]
  },
  'LassoLars': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'eps',
        'name': 'eps',
        'value': '',
        'desc': 'eps'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'fit_path',
        'name': 'fit_path',
        'value': '',
        'desc': 'fit_path'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'positive',
        'name': 'positive',
        'value': '',
        'desc': 'positive'
      },
      {
        'type': 'string',
        'display_name': 'precompute',
        'name': 'precompute',
        'value': '',
        'desc': 'precompute'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'LocalPropertyDifferenceAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'elemental_properties',
        'name': 'elemental_properties',
        'value': '',
        'desc': 'elemental_properties'
      },
      {
        'type': 'string',
        'display_name': 'shells',
        'name': 'shells',
        'value': '',
        'desc': 'shells'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'XYZreader': {
    'WParameters': [],
    'input': [],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'Z',
        'name': 'Z',
        'value': '',
        'desc': 'Z'
      },
      {
        'type': 'string',
        'display_name': 'path_pattern',
        'name': 'path_pattern',
        'value': '',
        'desc': 'path_pattern'
      },
      {
        'type': 'string',
        'display_name': 'path_root',
        'name': 'path_root',
        'value': '',
        'desc': 'path_root'
      },
      {
        'type': 'string',
        'display_name': 'reader',
        'name': 'reader',
        'value': '',
        'desc': 'reader'
      },
      {
        'type': 'string',
        'display_name': 'skip_lines',
        'name': 'skip_lines',
        'value': '',
        'desc': 'skip_lines'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'molecules',
        'name': 'molecules',
        'value': '',
        'desc': 'molecules'
      }
    ]
  },
  'SVR': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'C',
        'name': 'C',
        'value': '',
        'desc': 'C'
      },
      {
        'type': 'string',
        'display_name': 'cache_size',
        'name': 'cache_size',
        'value': '',
        'desc': 'cache_size'
      },
      {
        'type': 'string',
        'display_name': 'coef0',
        'name': 'coef0',
        'value': '',
        'desc': 'coef0'
      },
      {
        'type': 'string',
        'display_name': 'degree',
        'name': 'degree',
        'value': '',
        'desc': 'degree'
      },
      {
        'type': 'string',
        'display_name': 'epsilon',
        'name': 'epsilon',
        'value': '',
        'desc': 'epsilon'
      },
      {
        'type': 'string',
        'display_name': 'gamma',
        'name': 'gamma',
        'value': '',
        'desc': 'gamma'
      },
      {
        'type': 'string',
        'display_name': 'kernel',
        'name': 'kernel',
        'value': '',
        'desc': 'kernel'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'shrinking',
        'name': 'shrinking',
        'value': '',
        'desc': 'shrinking'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'decorator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'fig',
        'name': 'fig',
        'value': '',
        'desc': 'fig'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'family',
        'name': 'family',
        'value': '',
        'desc': 'family'
      },
      {
        'type': 'string',
        'display_name': 'grid',
        'name': 'grid',
        'value': '',
        'desc': 'grid'
      },
      {
        'type': 'string',
        'display_name': 'grid_color',
        'name': 'grid_color',
        'value': '',
        'desc': 'grid_color'
      },
      {
        'type': 'string',
        'display_name': 'grid_linestyle',
        'name': 'grid_linestyle',
        'value': '',
        'desc': 'grid_linestyle'
      },
      {
        'type': 'string',
        'display_name': 'grid_linewidth',
        'name': 'grid_linewidth',
        'value': '',
        'desc': 'grid_linewidth'
      },
      {
        'type': 'string',
        'display_name': 'size',
        'name': 'size',
        'value': '',
        'desc': 'size'
      },
      {
        'type': 'string',
        'display_name': 'style',
        'name': 'style',
        'value': '',
        'desc': 'style'
      },
      {
        'type': 'string',
        'display_name': 'title',
        'name': 'title',
        'value': '',
        'desc': 'title'
      },
      {
        'type': 'string',
        'display_name': 'variant',
        'name': 'variant',
        'value': '',
        'desc': 'variant'
      },
      {
        'type': 'string',
        'display_name': 'weight',
        'name': 'weight',
        'value': '',
        'desc': 'weight'
      },
      {
        'type': 'string',
        'display_name': 'xlabel',
        'name': 'xlabel',
        'value': '',
        'desc': 'xlabel'
      },
      {
        'type': 'string',
        'display_name': 'xlim',
        'name': 'xlim',
        'value': '',
        'desc': 'xlim'
      },
      {
        'type': 'string',
        'display_name': 'ylabel',
        'name': 'ylabel',
        'value': '',
        'desc': 'ylabel'
      },
      {
        'type': 'string',
        'display_name': 'ylim',
        'name': 'ylim',
        'value': '',
        'desc': 'ylim'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'fig',
        'name': 'fig',
        'value': '',
        'desc': 'fig'
      }
    ]
  },
  'LinearSVR': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'C',
        'name': 'C',
        'value': '',
        'desc': 'C'
      },
      {
        'type': 'string',
        'display_name': 'dual',
        'name': 'dual',
        'value': '',
        'desc': 'dual'
      },
      {
        'type': 'string',
        'display_name': 'epsilon',
        'name': 'epsilon',
        'value': '',
        'desc': 'epsilon'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'intercept_scaling',
        'name': 'intercept_scaling',
        'value': '',
        'desc': 'intercept_scaling'
      },
      {
        'type': 'string',
        'display_name': 'loss',
        'name': 'loss',
        'value': '',
        'desc': 'loss'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'Imputer': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'axis',
        'name': 'axis',
        'value': '',
        'desc': 'axis'
      },
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'missing_values',
        'name': 'missing_values',
        'value': '',
        'desc': 'missing_values'
      },
      {
        'type': 'string',
        'display_name': 'strategy',
        'name': 'strategy',
        'value': '',
        'desc': 'strategy'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'ValenceShellAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'KernelPCA': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'coef0',
        'name': 'coef0',
        'value': '',
        'desc': 'coef0'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'degree',
        'name': 'degree',
        'value': '',
        'desc': 'degree'
      },
      {
        'type': 'string',
        'display_name': 'eigen_solver',
        'name': 'eigen_solver',
        'value': '',
        'desc': 'eigen_solver'
      },
      {
        'type': 'string',
        'display_name': 'fit_inverse_transform',
        'name': 'fit_inverse_transform',
        'value': '',
        'desc': 'fit_inverse_transform'
      },
      {
        'type': 'string',
        'display_name': 'gamma',
        'name': 'gamma',
        'value': '',
        'desc': 'gamma'
      },
      {
        'type': 'string',
        'display_name': 'kernel',
        'name': 'kernel',
        'value': '',
        'desc': 'kernel'
      },
      {
        'type': 'string',
        'display_name': 'kernel_params',
        'name': 'kernel_params',
        'value': '',
        'desc': 'kernel_params'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'n_components',
        'name': 'n_components',
        'value': '',
        'desc': 'n_components'
      },
      {
        'type': 'string',
        'display_name': 'n_jobs',
        'name': 'n_jobs',
        'value': '',
        'desc': 'n_jobs'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'remove_zero_eig',
        'name': 'remove_zero_eig',
        'value': '',
        'desc': 'remove_zero_eig'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'learning_curve': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'scorer',
        'name': 'scorer',
        'value': '',
        'desc': 'scorer'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'X',
        'name': 'X',
        'value': '',
        'desc': 'X'
      },
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'exploit_incremental_learning',
        'name': 'exploit_incremental_learning',
        'value': '',
        'desc': 'exploit_incremental_learning'
      },
      {
        'type': 'string',
        'display_name': 'groups',
        'name': 'groups',
        'value': '',
        'desc': 'groups'
      },
      {
        'type': 'string',
        'display_name': 'n_jobs',
        'name': 'n_jobs',
        'value': '',
        'desc': 'n_jobs'
      },
      {
        'type': 'string',
        'display_name': 'pre_dispatch',
        'name': 'pre_dispatch',
        'value': '',
        'desc': 'pre_dispatch'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'scoring',
        'name': 'scoring',
        'value': '',
        'desc': 'scoring'
      },
      {
        'type': 'string',
        'display_name': 'shuffle',
        'name': 'shuffle',
        'value': '',
        'desc': 'shuffle'
      },
      {
        'type': 'string',
        'display_name': 'train_sizes',
        'name': 'train_sizes',
        'value': '',
        'desc': 'train_sizes'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      },
      {
        'type': 'string',
        'display_name': 'y',
        'name': 'y',
        'value': '',
        'desc': 'y'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'extended_result_',
        'name': 'extended_result_',
        'value': '',
        'desc': 'extended_result_'
      },
      {
        'type': 'string',
        'display_name': 'test_scores',
        'name': 'test_scores',
        'value': '',
        'desc': 'test_scores'
      },
      {
        'type': 'string',
        'display_name': 'train_scores',
        'name': 'train_scores',
        'value': '',
        'desc': 'train_scores'
      },
      {
        'type': 'string',
        'display_name': 'train_sizes_abs',
        'name': 'train_sizes_abs',
        'value': '',
        'desc': 'train_sizes_abs'
      }
    ]
  },
  'Split': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'selection',
        'name': 'selection',
        'value': '',
        'desc': 'selection'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df1',
        'name': 'df1',
        'value': '',
        'desc': 'df1'
      },
      {
        'type': 'string',
        'display_name': 'df2',
        'name': 'df2',
        'value': '',
        'desc': 'df2'
      }
    ]
  },
  'ElementPairPropertyAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'elemental_pair_properties',
        'name': 'elemental_pair_properties',
        'value': '',
        'desc': 'elemental_pair_properties'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'PCA': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'iterated_power',
        'name': 'iterated_power',
        'value': '',
        'desc': 'iterated_power'
      },
      {
        'type': 'string',
        'display_name': 'n_components',
        'name': 'n_components',
        'value': '',
        'desc': 'n_components'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'svd_solver',
        'name': 'svd_solver',
        'value': '',
        'desc': 'svd_solver'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'whiten',
        'name': 'whiten',
        'value': '',
        'desc': 'whiten'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'IonicityAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'OneHotEncoder': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'categorical_features',
        'name': 'categorical_features',
        'value': '',
        'desc': 'categorical_features'
      },
      {
        'type': 'string',
        'display_name': 'dtype',
        'name': 'dtype',
        'value': '',
        'desc': 'dtype'
      },
      {
        'type': 'string',
        'display_name': 'handle_unknown',
        'name': 'handle_unknown',
        'value': '',
        'desc': 'handle_unknown'
      },
      {
        'type': 'string',
        'display_name': 'n_values',
        'name': 'n_values',
        'value': '',
        'desc': 'n_values'
      },
      {
        'type': 'string',
        'display_name': 'sparse',
        'name': 'sparse',
        'value': '',
        'desc': 'sparse'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'hist': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'bins',
        'name': 'bins',
        'value': '',
        'desc': 'bins'
      },
      {
        'type': 'string',
        'display_name': 'color',
        'name': 'color',
        'value': '',
        'desc': 'color'
      },
      {
        'type': 'string',
        'display_name': 'kwargs',
        'name': 'kwargs',
        'value': '',
        'desc': 'kwargs'
      },
      {
        'type': 'string',
        'display_name': 'x',
        'name': 'x',
        'value': '',
        'desc': 'x'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'fig',
        'name': 'fig',
        'value': '',
        'desc': 'fig'
      }
    ]
  },
  'train_test_split': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'shuffle',
        'name': 'shuffle',
        'value': '',
        'desc': 'shuffle'
      },
      {
        'type': 'string',
        'display_name': 'stratify',
        'name': 'stratify',
        'value': '',
        'desc': 'stratify'
      },
      {
        'type': 'string',
        'display_name': 'test_size',
        'name': 'test_size',
        'value': '',
        'desc': 'test_size'
      },
      {
        'type': 'string',
        'display_name': 'train_size',
        'name': 'train_size',
        'value': '',
        'desc': 'train_size'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'dfx_test',
        'name': 'dfx_test',
        'value': '',
        'desc': 'dfx_test'
      },
      {
        'type': 'string',
        'display_name': 'dfx_train',
        'name': 'dfx_train',
        'value': '',
        'desc': 'dfx_train'
      },
      {
        'type': 'string',
        'display_name': 'dfy_test',
        'name': 'dfy_test',
        'value': '',
        'desc': 'dfy_test'
      },
      {
        'type': 'string',
        'display_name': 'dfy_train',
        'name': 'dfy_train',
        'value': '',
        'desc': 'dfy_train'
      }
    ]
  },
  'read_excel': {
    'WParameters': [],
    'input': [],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'convert_float',
        'name': 'convert_float',
        'value': '',
        'desc': 'convert_float'
      },
      {
        'type': 'string',
        'display_name': 'converters',
        'name': 'converters',
        'value': '',
        'desc': 'converters'
      },
      {
        'type': 'string',
        'display_name': 'date_parser',
        'name': 'date_parser',
        'value': '',
        'desc': 'date_parser'
      },
      {
        'type': 'string',
        'display_name': 'dtype',
        'name': 'dtype',
        'value': '',
        'desc': 'dtype'
      },
      {
        'type': 'string',
        'display_name': 'engine',
        'name': 'engine',
        'value': '',
        'desc': 'engine'
      },
      {
        'type': 'string',
        'display_name': 'false_values',
        'name': 'false_values',
        'value': '',
        'desc': 'false_values'
      },
      {
        'type': 'string',
        'display_name': 'header',
        'name': 'header',
        'value': '',
        'desc': 'header'
      },
      {
        'type': 'string',
        'display_name': 'index_col',
        'name': 'index_col',
        'value': '',
        'desc': 'index_col'
      },
      {
        'type': 'string',
        'display_name': 'io',
        'name': 'io',
        'value': '',
        'desc': 'io'
      },
      {
        'type': 'string',
        'display_name': 'na_values',
        'name': 'na_values',
        'value': '',
        'desc': 'na_values'
      },
      {
        'type': 'string',
        'display_name': 'names',
        'name': 'names',
        'value': '',
        'desc': 'names'
      },
      {
        'type': 'string',
        'display_name': 'parse_dates',
        'name': 'parse_dates',
        'value': '',
        'desc': 'parse_dates'
      },
      {
        'type': 'string',
        'display_name': 'sheet_name',
        'name': 'sheet_name',
        'value': '',
        'desc': 'sheet_name'
      },
      {
        'type': 'string',
        'display_name': 'skip_footer',
        'name': 'skip_footer',
        'value': '',
        'desc': 'skip_footer'
      },
      {
        'type': 'string',
        'display_name': 'skiprows',
        'name': 'skiprows',
        'value': '',
        'desc': 'skiprows'
      },
      {
        'type': 'string',
        'display_name': 'squeeze',
        'name': 'squeeze',
        'value': '',
        'desc': 'squeeze'
      },
      {
        'type': 'string',
        'display_name': 'thousands',
        'name': 'thousands',
        'value': '',
        'desc': 'thousands'
      },
      {
        'type': 'string',
        'display_name': 'true_values',
        'name': 'true_values',
        'value': '',
        'desc': 'true_values'
      },
      {
        'type': 'string',
        'display_name': 'usecols',
        'name': 'usecols',
        'value': '',
        'desc': 'usecols'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'MissingValues': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'inf_as_null',
        'name': 'inf_as_null',
        'value': '',
        'desc': 'inf_as_null'
      },
      {
        'type': 'string',
        'display_name': 'missing_values',
        'name': 'missing_values',
        'value': '',
        'desc': 'missing_values'
      },
      {
        'type': 'string',
        'display_name': 'strategy',
        'name': 'strategy',
        'value': '',
        'desc': 'strategy'
      },
      {
        'type': 'string',
        'display_name': 'string_as_null',
        'name': 'string_as_null',
        'value': '',
        'desc': 'string_as_null'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'PackingEfficiencyAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'GridSearchCV': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'scorer',
        'name': 'scorer',
        'value': '',
        'desc': 'scorer'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'error_score',
        'name': 'error_score',
        'value': '',
        'desc': 'error_score'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'fit_params',
        'name': 'fit_params',
        'value': '',
        'desc': 'fit_params'
      },
      {
        'type': 'string',
        'display_name': 'iid',
        'name': 'iid',
        'value': '',
        'desc': 'iid'
      },
      {
        'type': 'string',
        'display_name': 'n_jobs',
        'name': 'n_jobs',
        'value': '',
        'desc': 'n_jobs'
      },
      {
        'type': 'string',
        'display_name': 'param_grid',
        'name': 'param_grid',
        'value': '',
        'desc': 'param_grid'
      },
      {
        'type': 'string',
        'display_name': 'pre_dispatch',
        'name': 'pre_dispatch',
        'value': '',
        'desc': 'pre_dispatch'
      },
      {
        'type': 'string',
        'display_name': 'refit',
        'name': 'refit',
        'value': '',
        'desc': 'refit'
      },
      {
        'type': 'string',
        'display_name': 'return_train_score',
        'name': 'return_train_score',
        'value': '',
        'desc': 'return_train_score'
      },
      {
        'type': 'string',
        'display_name': 'scoring',
        'name': 'scoring',
        'value': '',
        'desc': 'scoring'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'best_estimator_',
        'name': 'best_estimator_',
        'value': '',
        'desc': 'best_estimator_'
      },
      {
        'type': 'string',
        'display_name': 'cv_results_',
        'name': 'cv_results_',
        'value': '',
        'desc': 'cv_results_'
      }
    ]
  },
  'corr': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'method',
        'name': 'method',
        'value': '',
        'desc': 'method'
      },
      {
        'type': 'string',
        'display_name': 'min_periods',
        'name': 'min_periods',
        'value': '',
        'desc': 'min_periods'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'PolynomialFeatures': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'degree',
        'name': 'degree',
        'value': '',
        'desc': 'degree'
      },
      {
        'type': 'string',
        'display_name': 'include_bias',
        'name': 'include_bias',
        'value': '',
        'desc': 'include_bias'
      },
      {
        'type': 'string',
        'display_name': 'interaction_only',
        'name': 'interaction_only',
        'value': '',
        'desc': 'interaction_only'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'PRDFAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'cut_off_distance',
        'name': 'cut_off_distance',
        'value': '',
        'desc': 'cut_off_distance'
      },
      {
        'type': 'string',
        'display_name': 'n_points',
        'name': 'n_points',
        'value': '',
        'desc': 'n_points'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'NuSVR': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'C',
        'name': 'C',
        'value': '',
        'desc': 'C'
      },
      {
        'type': 'string',
        'display_name': 'cache_size',
        'name': 'cache_size',
        'value': '',
        'desc': 'cache_size'
      },
      {
        'type': 'string',
        'display_name': 'coef0',
        'name': 'coef0',
        'value': '',
        'desc': 'coef0'
      },
      {
        'type': 'string',
        'display_name': 'degree',
        'name': 'degree',
        'value': '',
        'desc': 'degree'
      },
      {
        'type': 'string',
        'display_name': 'gamma',
        'name': 'gamma',
        'value': '',
        'desc': 'gamma'
      },
      {
        'type': 'string',
        'display_name': 'kernel',
        'name': 'kernel',
        'value': '',
        'desc': 'kernel'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'nu',
        'name': 'nu',
        'value': '',
        'desc': 'nu'
      },
      {
        'type': 'string',
        'display_name': 'shrinking',
        'name': 'shrinking',
        'value': '',
        'desc': 'shrinking'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'DistanceMatrix': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'nCores',
        'name': 'nCores',
        'value': '',
        'desc': 'nCores'
      },
      {
        'type': 'string',
        'display_name': 'norm_type',
        'name': 'norm_type',
        'value': '',
        'desc': 'norm_type'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'evaluate_regression': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'ev_multioutput',
        'name': 'ev_multioutput',
        'value': '',
        'desc': 'ev_multioutput'
      },
      {
        'type': 'string',
        'display_name': 'ev_sample_weight',
        'name': 'ev_sample_weight',
        'value': '',
        'desc': 'ev_sample_weight'
      },
      {
        'type': 'string',
        'display_name': 'explained_variance_score',
        'name': 'explained_variance_score',
        'value': '',
        'desc': 'explained_variance_score'
      },
      {
        'type': 'string',
        'display_name': 'mae_multioutput',
        'name': 'mae_multioutput',
        'value': '',
        'desc': 'mae_multioutput'
      },
      {
        'type': 'string',
        'display_name': 'mae_sample_weight',
        'name': 'mae_sample_weight',
        'value': '',
        'desc': 'mae_sample_weight'
      },
      {
        'type': 'string',
        'display_name': 'mean_absolute_error',
        'name': 'mean_absolute_error',
        'value': '',
        'desc': 'mean_absolute_error'
      },
      {
        'type': 'string',
        'display_name': 'mean_squared_error',
        'name': 'mean_squared_error',
        'value': '',
        'desc': 'mean_squared_error'
      },
      {
        'type': 'string',
        'display_name': 'median_absolute_error',
        'name': 'median_absolute_error',
        'value': '',
        'desc': 'median_absolute_error'
      },
      {
        'type': 'string',
        'display_name': 'mse_multioutput',
        'name': 'mse_multioutput',
        'value': '',
        'desc': 'mse_multioutput'
      },
      {
        'type': 'string',
        'display_name': 'mse_sample_weight',
        'name': 'mse_sample_weight',
        'value': '',
        'desc': 'mse_sample_weight'
      },
      {
        'type': 'string',
        'display_name': 'multioutput',
        'name': 'multioutput',
        'value': '',
        'desc': 'multioutput'
      },
      {
        'type': 'string',
        'display_name': 'r2_sample_weight',
        'name': 'r2_sample_weight',
        'value': '',
        'desc': 'r2_sample_weight'
      },
      {
        'type': 'string',
        'display_name': 'r2_score',
        'name': 'r2_score',
        'value': '',
        'desc': 'r2_score'
      },
      {
        'type': 'string',
        'display_name': 'rmse_multioutput',
        'name': 'rmse_multioutput',
        'value': '',
        'desc': 'rmse_multioutput'
      },
      {
        'type': 'string',
        'display_name': 'rmse_sample_weight',
        'name': 'rmse_sample_weight',
        'value': '',
        'desc': 'rmse_sample_weight'
      },
      {
        'type': 'string',
        'display_name': 'root_mean_squared_error',
        'name': 'root_mean_squared_error',
        'value': '',
        'desc': 'root_mean_squared_error'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'evaluation_results_',
        'name': 'evaluation_results_',
        'value': '',
        'desc': 'evaluation_results_'
      },
      {
        'type': 'string',
        'display_name': 'evaluator',
        'name': 'evaluator',
        'value': '',
        'desc': 'evaluator'
      }
    ]
  },
  'EffectiveCoordinationNumberAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'plot': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'ax',
        'name': 'ax',
        'value': '',
        'desc': 'ax'
      },
      {
        'type': 'string',
        'display_name': 'colormap',
        'name': 'colormap',
        'value': '',
        'desc': 'colormap'
      },
      {
        'type': 'string',
        'display_name': 'figsize',
        'name': 'figsize',
        'value': '',
        'desc': 'figsize'
      },
      {
        'type': 'string',
        'display_name': 'fontsize',
        'name': 'fontsize',
        'value': '',
        'desc': 'fontsize'
      },
      {
        'type': 'string',
        'display_name': 'grid',
        'name': 'grid',
        'value': '',
        'desc': 'grid'
      },
      {
        'type': 'string',
        'display_name': 'kind',
        'name': 'kind',
        'value': '',
        'desc': 'kind'
      },
      {
        'type': 'string',
        'display_name': 'layout',
        'name': 'layout',
        'value': '',
        'desc': 'layout'
      },
      {
        'type': 'string',
        'display_name': 'legend',
        'name': 'legend',
        'value': '',
        'desc': 'legend'
      },
      {
        'type': 'string',
        'display_name': 'loglog',
        'name': 'loglog',
        'value': '',
        'desc': 'loglog'
      },
      {
        'type': 'string',
        'display_name': 'logx',
        'name': 'logx',
        'value': '',
        'desc': 'logx'
      },
      {
        'type': 'string',
        'display_name': 'logy',
        'name': 'logy',
        'value': '',
        'desc': 'logy'
      },
      {
        'type': 'string',
        'display_name': 'rot',
        'name': 'rot',
        'value': '',
        'desc': 'rot'
      },
      {
        'type': 'string',
        'display_name': 'secondary_y',
        'name': 'secondary_y',
        'value': '',
        'desc': 'secondary_y'
      },
      {
        'type': 'string',
        'display_name': 'sharex',
        'name': 'sharex',
        'value': '',
        'desc': 'sharex'
      },
      {
        'type': 'string',
        'display_name': 'sharey',
        'name': 'sharey',
        'value': '',
        'desc': 'sharey'
      },
      {
        'type': 'string',
        'display_name': 'sort_columns',
        'name': 'sort_columns',
        'value': '',
        'desc': 'sort_columns'
      },
      {
        'type': 'string',
        'display_name': 'style',
        'name': 'style',
        'value': '',
        'desc': 'style'
      },
      {
        'type': 'string',
        'display_name': 'subplots',
        'name': 'subplots',
        'value': '',
        'desc': 'subplots'
      },
      {
        'type': 'string',
        'display_name': 'table',
        'name': 'table',
        'value': '',
        'desc': 'table'
      },
      {
        'type': 'string',
        'display_name': 'title',
        'name': 'title',
        'value': '',
        'desc': 'title'
      },
      {
        'type': 'string',
        'display_name': 'use_index',
        'name': 'use_index',
        'value': '',
        'desc': 'use_index'
      },
      {
        'type': 'string',
        'display_name': 'x',
        'name': 'x',
        'value': '',
        'desc': 'x'
      },
      {
        'type': 'string',
        'display_name': 'xerr',
        'name': 'xerr',
        'value': '',
        'desc': 'xerr'
      },
      {
        'type': 'string',
        'display_name': 'xlim',
        'name': 'xlim',
        'value': '',
        'desc': 'xlim'
      },
      {
        'type': 'string',
        'display_name': 'xticks',
        'name': 'xticks',
        'value': '',
        'desc': 'xticks'
      },
      {
        'type': 'string',
        'display_name': 'y',
        'name': 'y',
        'value': '',
        'desc': 'y'
      },
      {
        'type': 'string',
        'display_name': 'yerr',
        'name': 'yerr',
        'value': '',
        'desc': 'yerr'
      },
      {
        'type': 'string',
        'display_name': 'ylim',
        'name': 'ylim',
        'value': '',
        'desc': 'ylim'
      },
      {
        'type': 'string',
        'display_name': 'yticks',
        'name': 'yticks',
        'value': '',
        'desc': 'yticks'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'fig',
        'name': 'fig',
        'value': '',
        'desc': 'fig'
      }
    ]
  },
  'BagofBonds': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'molecules',
        'name': 'molecules',
        'value': '',
        'desc': 'molecules'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'const',
        'name': 'const',
        'value': '',
        'desc': 'const'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'MultiTaskElasticNet': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'l1_ratio',
        'name': 'l1_ratio',
        'value': '',
        'desc': 'l1_ratio'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'selection',
        'name': 'selection',
        'value': '',
        'desc': 'selection'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'warm_start',
        'name': 'warm_start',
        'value': '',
        'desc': 'warm_start'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'LeaveOneOut': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'fold_gen',
        'name': 'fold_gen',
        'value': '',
        'desc': 'fold_gen'
      }
    ]
  },
  'ElasticNet': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'l1_ratio',
        'name': 'l1_ratio',
        'value': '',
        'desc': 'l1_ratio'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'positive',
        'name': 'positive',
        'value': '',
        'desc': 'positive'
      },
      {
        'type': 'string',
        'display_name': 'precompute',
        'name': 'precompute',
        'value': '',
        'desc': 'precompute'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'selection',
        'name': 'selection',
        'value': '',
        'desc': 'selection'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'warm_start',
        'name': 'warm_start',
        'value': '',
        'desc': 'warm_start'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'Lasso': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'positive',
        'name': 'positive',
        'value': '',
        'desc': 'positive'
      },
      {
        'type': 'string',
        'display_name': 'precompute',
        'name': 'precompute',
        'value': '',
        'desc': 'precompute'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'selection',
        'name': 'selection',
        'value': '',
        'desc': 'selection'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'warm_start',
        'name': 'warm_start',
        'value': '',
        'desc': 'warm_start'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'load_cep_homo': {
    'WParameters': [],
    'input': [],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'homo',
        'name': 'homo',
        'value': '',
        'desc': 'homo'
      },
      {
        'type': 'string',
        'display_name': 'smiles',
        'name': 'smiles',
        'value': '',
        'desc': 'smiles'
      }
    ]
  },
  'KernelRidge': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'coef0',
        'name': 'coef0',
        'value': '',
        'desc': 'coef0'
      },
      {
        'type': 'string',
        'display_name': 'degree',
        'name': 'degree',
        'value': '',
        'desc': 'degree'
      },
      {
        'type': 'string',
        'display_name': 'gamma',
        'name': 'gamma',
        'value': '',
        'desc': 'gamma'
      },
      {
        'type': 'string',
        'display_name': 'kernel',
        'name': 'kernel',
        'value': '',
        'desc': 'kernel'
      },
      {
        'type': 'string',
        'display_name': 'kernel_params',
        'name': 'kernel_params',
        'value': '',
        'desc': 'kernel_params'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'read_table': {
    'WParameters': [],
    'input': [],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'as_recarray',
        'name': 'as_recarray',
        'value': '',
        'desc': 'as_recarray'
      },
      {
        'type': 'string',
        'display_name': 'buffer_lines',
        'name': 'buffer_lines',
        'value': '',
        'desc': 'buffer_lines'
      },
      {
        'type': 'string',
        'display_name': 'chunksize',
        'name': 'chunksize',
        'value': '',
        'desc': 'chunksize'
      },
      {
        'type': 'string',
        'display_name': 'comment',
        'name': 'comment',
        'value': '',
        'desc': 'comment'
      },
      {
        'type': 'string',
        'display_name': 'compact_ints',
        'name': 'compact_ints',
        'value': '',
        'desc': 'compact_ints'
      },
      {
        'type': 'string',
        'display_name': 'compression',
        'name': 'compression',
        'value': '',
        'desc': 'compression'
      },
      {
        'type': 'string',
        'display_name': 'converters',
        'name': 'converters',
        'value': '',
        'desc': 'converters'
      },
      {
        'type': 'string',
        'display_name': 'date_parser',
        'name': 'date_parser',
        'value': '',
        'desc': 'date_parser'
      },
      {
        'type': 'string',
        'display_name': 'dayfirst',
        'name': 'dayfirst',
        'value': '',
        'desc': 'dayfirst'
      },
      {
        'type': 'string',
        'display_name': 'decimal',
        'name': 'decimal',
        'value': '',
        'desc': 'decimal'
      },
      {
        'type': 'string',
        'display_name': 'delim_whitespace',
        'name': 'delim_whitespace',
        'value': '',
        'desc': 'delim_whitespace'
      },
      {
        'type': 'string',
        'display_name': 'delimiter',
        'name': 'delimiter',
        'value': '',
        'desc': 'delimiter'
      },
      {
        'type': 'string',
        'display_name': 'dialect',
        'name': 'dialect',
        'value': '',
        'desc': 'dialect'
      },
      {
        'type': 'string',
        'display_name': 'doublequote',
        'name': 'doublequote',
        'value': '',
        'desc': 'doublequote'
      },
      {
        'type': 'string',
        'display_name': 'dtype',
        'name': 'dtype',
        'value': '',
        'desc': 'dtype'
      },
      {
        'type': 'string',
        'display_name': 'encoding',
        'name': 'encoding',
        'value': '',
        'desc': 'encoding'
      },
      {
        'type': 'string',
        'display_name': 'engine',
        'name': 'engine',
        'value': '',
        'desc': 'engine'
      },
      {
        'type': 'string',
        'display_name': 'error_bad_lines',
        'name': 'error_bad_lines',
        'value': '',
        'desc': 'error_bad_lines'
      },
      {
        'type': 'string',
        'display_name': 'escapechar',
        'name': 'escapechar',
        'value': '',
        'desc': 'escapechar'
      },
      {
        'type': 'string',
        'display_name': 'false_values',
        'name': 'false_values',
        'value': '',
        'desc': 'false_values'
      },
      {
        'type': 'string',
        'display_name': 'filepath_or_buffer',
        'name': 'filepath_or_buffer',
        'value': '',
        'desc': 'filepath_or_buffer'
      },
      {
        'type': 'string',
        'display_name': 'float_precision',
        'name': 'float_precision',
        'value': '',
        'desc': 'float_precision'
      },
      {
        'type': 'string',
        'display_name': 'header',
        'name': 'header',
        'value': '',
        'desc': 'header'
      },
      {
        'type': 'string',
        'display_name': 'index_col',
        'name': 'index_col',
        'value': '',
        'desc': 'index_col'
      },
      {
        'type': 'string',
        'display_name': 'infer_datetime_format',
        'name': 'infer_datetime_format',
        'value': '',
        'desc': 'infer_datetime_format'
      },
      {
        'type': 'string',
        'display_name': 'iterator',
        'name': 'iterator',
        'value': '',
        'desc': 'iterator'
      },
      {
        'type': 'string',
        'display_name': 'keep_date_col',
        'name': 'keep_date_col',
        'value': '',
        'desc': 'keep_date_col'
      },
      {
        'type': 'string',
        'display_name': 'keep_default_na',
        'name': 'keep_default_na',
        'value': '',
        'desc': 'keep_default_na'
      },
      {
        'type': 'string',
        'display_name': 'lineterminator',
        'name': 'lineterminator',
        'value': '',
        'desc': 'lineterminator'
      },
      {
        'type': 'string',
        'display_name': 'low_memory',
        'name': 'low_memory',
        'value': '',
        'desc': 'low_memory'
      },
      {
        'type': 'string',
        'display_name': 'mangle_dupe_cols',
        'name': 'mangle_dupe_cols',
        'value': '',
        'desc': 'mangle_dupe_cols'
      },
      {
        'type': 'string',
        'display_name': 'memory_map',
        'name': 'memory_map',
        'value': '',
        'desc': 'memory_map'
      },
      {
        'type': 'string',
        'display_name': 'na_filter',
        'name': 'na_filter',
        'value': '',
        'desc': 'na_filter'
      },
      {
        'type': 'string',
        'display_name': 'na_values',
        'name': 'na_values',
        'value': '',
        'desc': 'na_values'
      },
      {
        'type': 'string',
        'display_name': 'names',
        'name': 'names',
        'value': '',
        'desc': 'names'
      },
      {
        'type': 'string',
        'display_name': 'nrows',
        'name': 'nrows',
        'value': '',
        'desc': 'nrows'
      },
      {
        'type': 'string',
        'display_name': 'parse_dates',
        'name': 'parse_dates',
        'value': '',
        'desc': 'parse_dates'
      },
      {
        'type': 'string',
        'display_name': 'prefix',
        'name': 'prefix',
        'value': '',
        'desc': 'prefix'
      },
      {
        'type': 'string',
        'display_name': 'quotechar',
        'name': 'quotechar',
        'value': '',
        'desc': 'quotechar'
      },
      {
        'type': 'string',
        'display_name': 'quoting',
        'name': 'quoting',
        'value': '',
        'desc': 'quoting'
      },
      {
        'type': 'string',
        'display_name': 'sep',
        'name': 'sep',
        'value': '',
        'desc': 'sep'
      },
      {
        'type': 'string',
        'display_name': 'skip_blank_lines',
        'name': 'skip_blank_lines',
        'value': '',
        'desc': 'skip_blank_lines'
      },
      {
        'type': 'string',
        'display_name': 'skip_footer',
        'name': 'skip_footer',
        'value': '',
        'desc': 'skip_footer'
      },
      {
        'type': 'string',
        'display_name': 'skipfooter',
        'name': 'skipfooter',
        'value': '',
        'desc': 'skipfooter'
      },
      {
        'type': 'string',
        'display_name': 'skipinitialspace',
        'name': 'skipinitialspace',
        'value': '',
        'desc': 'skipinitialspace'
      },
      {
        'type': 'string',
        'display_name': 'skiprows',
        'name': 'skiprows',
        'value': '',
        'desc': 'skiprows'
      },
      {
        'type': 'string',
        'display_name': 'squeeze',
        'name': 'squeeze',
        'value': '',
        'desc': 'squeeze'
      },
      {
        'type': 'string',
        'display_name': 'thousands',
        'name': 'thousands',
        'value': '',
        'desc': 'thousands'
      },
      {
        'type': 'string',
        'display_name': 'true_values',
        'name': 'true_values',
        'value': '',
        'desc': 'true_values'
      },
      {
        'type': 'string',
        'display_name': 'tupleize_cols',
        'name': 'tupleize_cols',
        'value': '',
        'desc': 'tupleize_cols'
      },
      {
        'type': 'string',
        'display_name': 'use_unsigned',
        'name': 'use_unsigned',
        'value': '',
        'desc': 'use_unsigned'
      },
      {
        'type': 'string',
        'display_name': 'usecols',
        'name': 'usecols',
        'value': '',
        'desc': 'usecols'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      },
      {
        'type': 'string',
        'display_name': 'warn_bad_lines',
        'name': 'warn_bad_lines',
        'value': '',
        'desc': 'warn_bad_lines'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'SavePlot': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'fig',
        'name': 'fig',
        'value': '',
        'desc': 'fig'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'filename',
        'name': 'filename',
        'value': '',
        'desc': 'filename'
      },
      {
        'type': 'string',
        'display_name': 'format',
        'name': 'format',
        'value': '',
        'desc': 'format'
      },
      {
        'type': 'string',
        'display_name': 'kwargs',
        'name': 'kwargs',
        'value': '',
        'desc': 'kwargs'
      },
      {
        'type': 'string',
        'display_name': 'output_directory',
        'name': 'output_directory',
        'value': '',
        'desc': 'output_directory'
      }
    ],
    'output': []
  },
  'SaveFile': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'filename',
        'name': 'filename',
        'value': '',
        'desc': 'filename'
      },
      {
        'type': 'string',
        'display_name': 'format',
        'name': 'format',
        'value': '',
        'desc': 'format'
      },
      {
        'type': 'string',
        'display_name': 'header',
        'name': 'header',
        'value': '',
        'desc': 'header'
      },
      {
        'type': 'string',
        'display_name': 'index',
        'name': 'index',
        'value': '',
        'desc': 'index'
      },
      {
        'type': 'string',
        'display_name': 'output_directory',
        'name': 'output_directory',
        'value': '',
        'desc': 'output_directory'
      },
      {
        'type': 'string',
        'display_name': 'record_time',
        'name': 'record_time',
        'value': '',
        'desc': 'record_time'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'filepath',
        'name': 'filepath',
        'value': '',
        'desc': 'filepath'
      }
    ]
  },
  'APEAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'n_nearest_to_eval',
        'name': 'n_nearest_to_eval',
        'value': '',
        'desc': 'n_nearest_to_eval'
      },
      {
        'type': 'string',
        'display_name': 'packing_threshold',
        'name': 'packing_threshold',
        'value': '',
        'desc': 'packing_threshold'
      },
      {
        'type': 'string',
        'display_name': 'radius_property',
        'name': 'radius_property',
        'value': '',
        'desc': 'radius_property'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'CoulombMatrix': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'molecules',
        'name': 'molecules',
        'value': '',
        'desc': 'molecules'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'CMtype',
        'name': 'CMtype',
        'value': '',
        'desc': 'CMtype'
      },
      {
        'type': 'string',
        'display_name': 'const',
        'name': 'const',
        'value': '',
        'desc': 'const'
      },
      {
        'type': 'string',
        'display_name': 'max_n_atoms',
        'name': 'max_n_atoms',
        'value': '',
        'desc': 'max_n_atoms'
      },
      {
        'type': 'string',
        'display_name': 'nPerm',
        'name': 'nPerm',
        'value': '',
        'desc': 'nPerm'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'StandardScaler': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'with_mean',
        'name': 'with_mean',
        'value': '',
        'desc': 'with_mean'
      },
      {
        'type': 'string',
        'display_name': 'with_std',
        'name': 'with_std',
        'value': '',
        'desc': 'with_std'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'Dragon': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'script',
        'name': 'script',
        'value': '',
        'desc': 'script'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'molfile',
        'name': 'molfile',
        'value': '',
        'desc': 'molfile'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'Add2DHydrogens',
        'name': 'Add2DHydrogens',
        'value': '',
        'desc': 'Add2DHydrogens'
      },
      {
        'type': 'string',
        'display_name': 'CheckUpdates',
        'name': 'CheckUpdates',
        'value': '',
        'desc': 'CheckUpdates'
      },
      {
        'type': 'string',
        'display_name': 'Decimal_Separator',
        'name': 'Decimal_Separator',
        'value': '',
        'desc': 'Decimal_Separator'
      },
      {
        'type': 'string',
        'display_name': 'DefaultMolFormat',
        'name': 'DefaultMolFormat',
        'value': '',
        'desc': 'DefaultMolFormat'
      },
      {
        'type': 'string',
        'display_name': 'DisconnectedCalculationOption',
        'name': 'DisconnectedCalculationOption',
        'value': '',
        'desc': 'DisconnectedCalculationOption'
      },
      {
        'type': 'string',
        'display_name': 'FPtype',
        'name': 'FPtype',
        'value': '',
        'desc': 'FPtype'
      },
      {
        'type': 'string',
        'display_name': 'HelpBrowser',
        'name': 'HelpBrowser',
        'value': '',
        'desc': 'HelpBrowser'
      },
      {
        'type': 'string',
        'display_name': 'LogEdge',
        'name': 'LogEdge',
        'value': '',
        'desc': 'LogEdge'
      },
      {
        'type': 'string',
        'display_name': 'LogPathWalk',
        'name': 'LogPathWalk',
        'value': '',
        'desc': 'LogPathWalk'
      },
      {
        'type': 'string',
        'display_name': 'MaxAtomWalkPath',
        'name': 'MaxAtomWalkPath',
        'value': '',
        'desc': 'MaxAtomWalkPath'
      },
      {
        'type': 'string',
        'display_name': 'MaxSR',
        'name': 'MaxSR',
        'value': '',
        'desc': 'MaxSR'
      },
      {
        'type': 'string',
        'display_name': 'MaxSRDetour',
        'name': 'MaxSRDetour',
        'value': '',
        'desc': 'MaxSRDetour'
      },
      {
        'type': 'string',
        'display_name': 'MaxSRforAllCircuit',
        'name': 'MaxSRforAllCircuit',
        'value': '',
        'desc': 'MaxSRforAllCircuit'
      },
      {
        'type': 'string',
        'display_name': 'MissingValue',
        'name': 'MissingValue',
        'value': '',
        'desc': 'MissingValue'
      },
      {
        'type': 'string',
        'display_name': 'Missing_String',
        'name': 'Missing_String',
        'value': '',
        'desc': 'Missing_String'
      },
      {
        'type': 'string',
        'display_name': 'PreserveTemporaryProjects',
        'name': 'PreserveTemporaryProjects',
        'value': '',
        'desc': 'PreserveTemporaryProjects'
      },
      {
        'type': 'string',
        'display_name': 'RejectDisconnectedStrucuture',
        'name': 'RejectDisconnectedStrucuture',
        'value': '',
        'desc': 'RejectDisconnectedStrucuture'
      },
      {
        'type': 'string',
        'display_name': 'RejectUnusualValence',
        'name': 'RejectUnusualValence',
        'value': '',
        'desc': 'RejectUnusualValence'
      },
      {
        'type': 'string',
        'display_name': 'RetainBiggestFragment',
        'name': 'RetainBiggestFragment',
        'value': '',
        'desc': 'RetainBiggestFragment'
      },
      {
        'type': 'string',
        'display_name': 'RoundCoordinates',
        'name': 'RoundCoordinates',
        'value': '',
        'desc': 'RoundCoordinates'
      },
      {
        'type': 'string',
        'display_name': 'RoundDescriptorValues',
        'name': 'RoundDescriptorValues',
        'value': '',
        'desc': 'RoundDescriptorValues'
      },
      {
        'type': 'string',
        'display_name': 'RoundWeights',
        'name': 'RoundWeights',
        'value': '',
        'desc': 'RoundWeights'
      },
      {
        'type': 'string',
        'display_name': 'SaveCorrThreshold',
        'name': 'SaveCorrThreshold',
        'value': '',
        'desc': 'SaveCorrThreshold'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeAllMisVal',
        'name': 'SaveExcludeAllMisVal',
        'value': '',
        'desc': 'SaveExcludeAllMisVal'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeConst',
        'name': 'SaveExcludeConst',
        'value': '',
        'desc': 'SaveExcludeConst'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeCorrelated',
        'name': 'SaveExcludeCorrelated',
        'value': '',
        'desc': 'SaveExcludeCorrelated'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeMisMolecules',
        'name': 'SaveExcludeMisMolecules',
        'value': '',
        'desc': 'SaveExcludeMisMolecules'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeMisVal',
        'name': 'SaveExcludeMisVal',
        'value': '',
        'desc': 'SaveExcludeMisVal'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeNearConst',
        'name': 'SaveExcludeNearConst',
        'value': '',
        'desc': 'SaveExcludeNearConst'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeRejectedMolecules',
        'name': 'SaveExcludeRejectedMolecules',
        'value': '',
        'desc': 'SaveExcludeRejectedMolecules'
      },
      {
        'type': 'string',
        'display_name': 'SaveExcludeStdDev',
        'name': 'SaveExcludeStdDev',
        'value': '',
        'desc': 'SaveExcludeStdDev'
      },
      {
        'type': 'string',
        'display_name': 'SaveExclusionOptionsToVariables',
        'name': 'SaveExclusionOptionsToVariables',
        'value': '',
        'desc': 'SaveExclusionOptionsToVariables'
      },
      {
        'type': 'string',
        'display_name': 'SaveFile',
        'name': 'SaveFile',
        'value': '',
        'desc': 'SaveFile'
      },
      {
        'type': 'string',
        'display_name': 'SaveFilePath',
        'name': 'SaveFilePath',
        'value': '',
        'desc': 'SaveFilePath'
      },
      {
        'type': 'string',
        'display_name': 'SaveFormatBlock',
        'name': 'SaveFormatBlock',
        'value': '',
        'desc': 'SaveFormatBlock'
      },
      {
        'type': 'string',
        'display_name': 'SaveFormatSubBlock',
        'name': 'SaveFormatSubBlock',
        'value': '',
        'desc': 'SaveFormatSubBlock'
      },
      {
        'type': 'string',
        'display_name': 'SaveLabelsOnSeparateFile',
        'name': 'SaveLabelsOnSeparateFile',
        'value': '',
        'desc': 'SaveLabelsOnSeparateFile'
      },
      {
        'type': 'string',
        'display_name': 'SaveLayout',
        'name': 'SaveLayout',
        'value': '',
        'desc': 'SaveLayout'
      },
      {
        'type': 'string',
        'display_name': 'SaveOnlyData',
        'name': 'SaveOnlyData',
        'value': '',
        'desc': 'SaveOnlyData'
      },
      {
        'type': 'string',
        'display_name': 'SaveProject',
        'name': 'SaveProject',
        'value': '',
        'desc': 'SaveProject'
      },
      {
        'type': 'string',
        'display_name': 'SaveProjectFile',
        'name': 'SaveProjectFile',
        'value': '',
        'desc': 'SaveProjectFile'
      },
      {
        'type': 'string',
        'display_name': 'SaveStdDevThreshold',
        'name': 'SaveStdDevThreshold',
        'value': '',
        'desc': 'SaveStdDevThreshold'
      },
      {
        'type': 'string',
        'display_name': 'SaveStdOut',
        'name': 'SaveStdOut',
        'value': '',
        'desc': 'SaveStdOut'
      },
      {
        'type': 'string',
        'display_name': 'SaveType',
        'name': 'SaveType',
        'value': '',
        'desc': 'SaveType'
      },
      {
        'type': 'string',
        'display_name': 'ShowWorksheet',
        'name': 'ShowWorksheet',
        'value': '',
        'desc': 'ShowWorksheet'
      },
      {
        'type': 'string',
        'display_name': 'Weights',
        'name': 'Weights',
        'value': '',
        'desc': 'Weights'
      },
      {
        'type': 'string',
        'display_name': 'blocks',
        'name': 'blocks',
        'value': '',
        'desc': 'blocks'
      },
      {
        'type': 'string',
        'display_name': 'consecutiveDelimiter',
        'name': 'consecutiveDelimiter',
        'value': '',
        'desc': 'consecutiveDelimiter'
      },
      {
        'type': 'string',
        'display_name': 'delimiter',
        'name': 'delimiter',
        'value': '',
        'desc': 'delimiter'
      },
      {
        'type': 'string',
        'display_name': 'external',
        'name': 'external',
        'value': '',
        'desc': 'external'
      },
      {
        'type': 'string',
        'display_name': 'fileName',
        'name': 'fileName',
        'value': '',
        'desc': 'fileName'
      },
      {
        'type': 'string',
        'display_name': 'knimemode',
        'name': 'knimemode',
        'value': '',
        'desc': 'knimemode'
      },
      {
        'type': 'string',
        'display_name': 'logFile',
        'name': 'logFile',
        'value': '',
        'desc': 'logFile'
      },
      {
        'type': 'string',
        'display_name': 'logMode',
        'name': 'logMode',
        'value': '',
        'desc': 'logMode'
      },
      {
        'type': 'string',
        'display_name': 'molFile',
        'name': 'molFile',
        'value': '',
        'desc': 'molFile'
      },
      {
        'type': 'string',
        'display_name': 'molInput',
        'name': 'molInput',
        'value': '',
        'desc': 'molInput'
      },
      {
        'type': 'string',
        'display_name': 'molInputFormat',
        'name': 'molInputFormat',
        'value': '',
        'desc': 'molInputFormat'
      },
      {
        'type': 'string',
        'display_name': 'script',
        'name': 'script',
        'value': '',
        'desc': 'script'
      },
      {
        'type': 'string',
        'display_name': 'version',
        'name': 'version',
        'value': '',
        'desc': 'version'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'APRDFAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'cut_off_distance',
        'name': 'cut_off_distance',
        'value': '',
        'desc': 'cut_off_distance'
      },
      {
        'type': 'string',
        'display_name': 'elemental_properties',
        'name': 'elemental_properties',
        'value': '',
        'desc': 'elemental_properties'
      },
      {
        'type': 'string',
        'display_name': 'num_points',
        'name': 'num_points',
        'value': '',
        'desc': 'num_points'
      },
      {
        'type': 'string',
        'display_name': 'smooth_parameter',
        'name': 'smooth_parameter',
        'value': '',
        'desc': 'smooth_parameter'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'MultiTaskLasso': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'selection',
        'name': 'selection',
        'value': '',
        'desc': 'selection'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'warm_start',
        'name': 'warm_start',
        'value': '',
        'desc': 'warm_start'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'scorer_regression': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'metric',
        'name': 'metric',
        'value': '',
        'desc': 'metric'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'greater_is_better',
        'name': 'greater_is_better',
        'value': '',
        'desc': 'greater_is_better'
      },
      {
        'type': 'string',
        'display_name': 'kwargs',
        'name': 'kwargs',
        'value': '',
        'desc': 'kwargs'
      },
      {
        'type': 'string',
        'display_name': 'needs_proba',
        'name': 'needs_proba',
        'value': '',
        'desc': 'needs_proba'
      },
      {
        'type': 'string',
        'display_name': 'needs_threshold',
        'name': 'needs_threshold',
        'value': '',
        'desc': 'needs_threshold'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'scorer',
        'name': 'scorer',
        'value': '',
        'desc': 'scorer'
      }
    ]
  },
  'LatticeSimilarityAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'LogisticRegression': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'C',
        'name': 'C',
        'value': '',
        'desc': 'C'
      },
      {
        'type': 'string',
        'display_name': 'class_weight',
        'name': 'class_weight',
        'value': '',
        'desc': 'class_weight'
      },
      {
        'type': 'string',
        'display_name': 'dual',
        'name': 'dual',
        'value': '',
        'desc': 'dual'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'intercept_scaling',
        'name': 'intercept_scaling',
        'value': '',
        'desc': 'intercept_scaling'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'multi_class',
        'name': 'multi_class',
        'value': '',
        'desc': 'multi_class'
      },
      {
        'type': 'string',
        'display_name': 'n_jobs',
        'name': 'n_jobs',
        'value': '',
        'desc': 'n_jobs'
      },
      {
        'type': 'string',
        'display_name': 'penalty',
        'name': 'penalty',
        'value': '',
        'desc': 'penalty'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'solver',
        'name': 'solver',
        'value': '',
        'desc': 'solver'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      },
      {
        'type': 'string',
        'display_name': 'warm_start',
        'name': 'warm_start',
        'value': '',
        'desc': 'warm_start'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'Normalizer': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'norm',
        'name': 'norm',
        'value': '',
        'desc': 'norm'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'YangOmegaAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'Binarizer': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'threshold',
        'name': 'threshold',
        'value': '',
        'desc': 'threshold'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'ElementalPropertyAttributeGenerator': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'elemental_properties',
        'name': 'elemental_properties',
        'value': '',
        'desc': 'elemental_properties'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'use_default_properties',
        'name': 'use_default_properties',
        'value': '',
        'desc': 'use_default_properties'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'GA_DEAP': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'evaluate',
        'name': 'evaluate',
        'value': '',
        'desc': 'evaluate'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'Evaluate',
        'name': 'Evaluate',
        'value': '',
        'desc': 'Evaluate'
      },
      {
        'type': 'string',
        'display_name': 'Weights',
        'name': 'Weights',
        'value': '',
        'desc': 'Weights'
      },
      {
        'type': 'string',
        'display_name': 'bit_limits',
        'name': 'bit_limits',
        'value': '',
        'desc': 'bit_limits'
      },
      {
        'type': 'string',
        'display_name': 'chromosome_length',
        'name': 'chromosome_length',
        'value': '',
        'desc': 'chromosome_length'
      },
      {
        'type': 'string',
        'display_name': 'chromosome_type',
        'name': 'chromosome_type',
        'value': '',
        'desc': 'chromosome_type'
      },
      {
        'type': 'string',
        'display_name': 'crossover_pop_frac',
        'name': 'crossover_pop_frac',
        'value': '',
        'desc': 'crossover_pop_frac'
      },
      {
        'type': 'string',
        'display_name': 'crossover_prob',
        'name': 'crossover_prob',
        'value': '',
        'desc': 'crossover_prob'
      },
      {
        'type': 'string',
        'display_name': 'crossover_type',
        'name': 'crossover_type',
        'value': '',
        'desc': 'crossover_type'
      },
      {
        'type': 'string',
        'display_name': 'init_pop_frac',
        'name': 'init_pop_frac',
        'value': '',
        'desc': 'init_pop_frac'
      },
      {
        'type': 'string',
        'display_name': 'mut_float_dev',
        'name': 'mut_float_dev',
        'value': '',
        'desc': 'mut_float_dev'
      },
      {
        'type': 'string',
        'display_name': 'mut_float_mean',
        'name': 'mut_float_mean',
        'value': '',
        'desc': 'mut_float_mean'
      },
      {
        'type': 'string',
        'display_name': 'mut_int_lower',
        'name': 'mut_int_lower',
        'value': '',
        'desc': 'mut_int_lower'
      },
      {
        'type': 'string',
        'display_name': 'mut_int_upper',
        'name': 'mut_int_upper',
        'value': '',
        'desc': 'mut_int_upper'
      },
      {
        'type': 'string',
        'display_name': 'mutation_prob',
        'name': 'mutation_prob',
        'value': '',
        'desc': 'mutation_prob'
      },
      {
        'type': 'string',
        'display_name': 'n_generations',
        'name': 'n_generations',
        'value': '',
        'desc': 'n_generations'
      },
      {
        'type': 'string',
        'display_name': 'pop_size',
        'name': 'pop_size',
        'value': '',
        'desc': 'pop_size'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'best_ind_df',
        'name': 'best_ind_df',
        'value': '',
        'desc': 'best_ind_df'
      },
      {
        'type': 'string',
        'display_name': 'best_individual',
        'name': 'best_individual',
        'value': '',
        'desc': 'best_individual'
      }
    ]
  },
  'load_crystal_structures': {
    'WParameters': [],
    'input': [],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ]
  },
  'KFold': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'n_splits',
        'name': 'n_splits',
        'value': '',
        'desc': 'n_splits'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'shuffle',
        'name': 'shuffle',
        'value': '',
        'desc': 'shuffle'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'fold_gen',
        'name': 'fold_gen',
        'value': '',
        'desc': 'fold_gen'
      }
    ]
  },
  'PyScript': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'iv1',
        'name': 'iv1',
        'value': '',
        'desc': 'iv1'
      },
      {
        'type': 'string',
        'display_name': 'iv2',
        'name': 'iv2',
        'value': '',
        'desc': 'iv2'
      },
      {
        'type': 'string',
        'display_name': 'iv3',
        'name': 'iv3',
        'value': '',
        'desc': 'iv3'
      },
      {
        'type': 'string',
        'display_name': 'iv4',
        'name': 'iv4',
        'value': '',
        'desc': 'iv4'
      },
      {
        'type': 'string',
        'display_name': 'iv5',
        'name': 'iv5',
        'value': '',
        'desc': 'iv5'
      },
      {
        'type': 'string',
        'display_name': 'iv6',
        'name': 'iv6',
        'value': '',
        'desc': 'iv6'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'line01',
        'name': 'line01',
        'value': '',
        'desc': 'line01'
      },
      {
        'type': 'string',
        'display_name': 'line02',
        'name': 'line02',
        'value': '',
        'desc': 'line02'
      },
      {
        'type': 'string',
        'display_name': 'line03',
        'name': 'line03',
        'value': '',
        'desc': 'line03'
      },
      {
        'type': 'string',
        'display_name': 'line04',
        'name': 'line04',
        'value': '',
        'desc': 'line04'
      },
      {
        'type': 'string',
        'display_name': 'line05',
        'name': 'line05',
        'value': '',
        'desc': 'line05'
      },
      {
        'type': 'string',
        'display_name': 'line06',
        'name': 'line06',
        'value': '',
        'desc': 'line06'
      },
      {
        'type': 'string',
        'display_name': 'line07',
        'name': 'line07',
        'value': '',
        'desc': 'line07'
      },
      {
        'type': 'string',
        'display_name': 'line08',
        'name': 'line08',
        'value': '',
        'desc': 'line08'
      },
      {
        'type': 'string',
        'display_name': 'line09',
        'name': 'line09',
        'value': '',
        'desc': 'line09'
      },
      {
        'type': 'string',
        'display_name': 'line10',
        'name': 'line10',
        'value': '',
        'desc': 'line10'
      },
      {
        'type': 'string',
        'display_name': 'line11',
        'name': 'line11',
        'value': '',
        'desc': 'line11'
      },
      {
        'type': 'string',
        'display_name': 'line12',
        'name': 'line12',
        'value': '',
        'desc': 'line12'
      },
      {
        'type': 'string',
        'display_name': 'line13',
        'name': 'line13',
        'value': '',
        'desc': 'line13'
      },
      {
        'type': 'string',
        'display_name': 'line14',
        'name': 'line14',
        'value': '',
        'desc': 'line14'
      },
      {
        'type': 'string',
        'display_name': 'line15',
        'name': 'line15',
        'value': '',
        'desc': 'line15'
      },
      {
        'type': 'string',
        'display_name': 'line16',
        'name': 'line16',
        'value': '',
        'desc': 'line16'
      },
      {
        'type': 'string',
        'display_name': 'line17',
        'name': 'line17',
        'value': '',
        'desc': 'line17'
      },
      {
        'type': 'string',
        'display_name': 'line18',
        'name': 'line18',
        'value': '',
        'desc': 'line18'
      },
      {
        'type': 'string',
        'display_name': 'line19',
        'name': 'line19',
        'value': '',
        'desc': 'line19'
      },
      {
        'type': 'string',
        'display_name': 'line20',
        'name': 'line20',
        'value': '',
        'desc': 'line20'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'ov1',
        'name': 'ov1',
        'value': '',
        'desc': 'ov1'
      },
      {
        'type': 'string',
        'display_name': 'ov2',
        'name': 'ov2',
        'value': '',
        'desc': 'ov2'
      },
      {
        'type': 'string',
        'display_name': 'ov3',
        'name': 'ov3',
        'value': '',
        'desc': 'ov3'
      },
      {
        'type': 'string',
        'display_name': 'ov4',
        'name': 'ov4',
        'value': '',
        'desc': 'ov4'
      },
      {
        'type': 'string',
        'display_name': 'ov5',
        'name': 'ov5',
        'value': '',
        'desc': 'ov5'
      },
      {
        'type': 'string',
        'display_name': 'ov6',
        'name': 'ov6',
        'value': '',
        'desc': 'ov6'
      }
    ]
  },
  'MaxAbsScaler': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'StructuralHeterogeneityAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'load_comp_energy': {
    'WParameters': [],
    'input': [],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      },
      {
        'type': 'string',
        'display_name': 'formation_energy',
        'name': 'formation_energy',
        'value': '',
        'desc': 'formation_energy'
      }
    ]
  },
  'ShuffleSplit': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'n_splits',
        'name': 'n_splits',
        'value': '',
        'desc': 'n_splits'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'test_size',
        'name': 'test_size',
        'value': '',
        'desc': 'test_size'
      },
      {
        'type': 'string',
        'display_name': 'train_size',
        'name': 'train_size',
        'value': '',
        'desc': 'train_size'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'fold_gen',
        'name': 'fold_gen',
        'value': '',
        'desc': 'fold_gen'
      }
    ]
  },
  'CoulombMatrixAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'n_eigenvalues',
        'name': 'n_eigenvalues',
        'value': '',
        'desc': 'n_eigenvalues'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'Outliers': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'm',
        'name': 'm',
        'value': '',
        'desc': 'm'
      },
      {
        'type': 'string',
        'display_name': 'strategy',
        'name': 'strategy',
        'value': '',
        'desc': 'strategy'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      },
      {
        'type': 'string',
        'display_name': 'removed_columns_',
        'name': 'removed_columns_',
        'value': '',
        'desc': 'removed_columns_'
      }
    ]
  },
  'MLPRegressor': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'activation',
        'name': 'activation',
        'value': '',
        'desc': 'activation'
      },
      {
        'type': 'string',
        'display_name': 'alpha',
        'name': 'alpha',
        'value': '',
        'desc': 'alpha'
      },
      {
        'type': 'string',
        'display_name': 'batch_size',
        'name': 'batch_size',
        'value': '',
        'desc': 'batch_size'
      },
      {
        'type': 'string',
        'display_name': 'beta_1',
        'name': 'beta_1',
        'value': '',
        'desc': 'beta_1'
      },
      {
        'type': 'string',
        'display_name': 'beta_2',
        'name': 'beta_2',
        'value': '',
        'desc': 'beta_2'
      },
      {
        'type': 'string',
        'display_name': 'early_stopping',
        'name': 'early_stopping',
        'value': '',
        'desc': 'early_stopping'
      },
      {
        'type': 'string',
        'display_name': 'epsilon',
        'name': 'epsilon',
        'value': '',
        'desc': 'epsilon'
      },
      {
        'type': 'string',
        'display_name': 'hidden_layer_sizes',
        'name': 'hidden_layer_sizes',
        'value': '',
        'desc': 'hidden_layer_sizes'
      },
      {
        'type': 'string',
        'display_name': 'learning_rate',
        'name': 'learning_rate',
        'value': '',
        'desc': 'learning_rate'
      },
      {
        'type': 'string',
        'display_name': 'learning_rate_init',
        'name': 'learning_rate_init',
        'value': '',
        'desc': 'learning_rate_init'
      },
      {
        'type': 'string',
        'display_name': 'max_iter',
        'name': 'max_iter',
        'value': '',
        'desc': 'max_iter'
      },
      {
        'type': 'string',
        'display_name': 'momentum',
        'name': 'momentum',
        'value': '',
        'desc': 'momentum'
      },
      {
        'type': 'string',
        'display_name': 'nesterovs_momentum',
        'name': 'nesterovs_momentum',
        'value': '',
        'desc': 'nesterovs_momentum'
      },
      {
        'type': 'string',
        'display_name': 'power_t',
        'name': 'power_t',
        'value': '',
        'desc': 'power_t'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'shuffle',
        'name': 'shuffle',
        'value': '',
        'desc': 'shuffle'
      },
      {
        'type': 'string',
        'display_name': 'solver',
        'name': 'solver',
        'value': '',
        'desc': 'solver'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'validation_fraction',
        'name': 'validation_fraction',
        'value': '',
        'desc': 'validation_fraction'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      },
      {
        'type': 'string',
        'display_name': 'warm_start',
        'name': 'warm_start',
        'value': '',
        'desc': 'warm_start'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'CrystalStructureEntry': {
    'WParameters': [],
    'input': [],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'directory_path',
        'name': 'directory_path',
        'value': '',
        'desc': 'directory_path'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ]
  },
  'cross_val_predict': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'scorer',
        'name': 'scorer',
        'value': '',
        'desc': 'scorer'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'X',
        'name': 'X',
        'value': '',
        'desc': 'X'
      },
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'fit_params',
        'name': 'fit_params',
        'value': '',
        'desc': 'fit_params'
      },
      {
        'type': 'string',
        'display_name': 'groups',
        'name': 'groups',
        'value': '',
        'desc': 'groups'
      },
      {
        'type': 'string',
        'display_name': 'method',
        'name': 'method',
        'value': '',
        'desc': 'method'
      },
      {
        'type': 'string',
        'display_name': 'n_jobs',
        'name': 'n_jobs',
        'value': '',
        'desc': 'n_jobs'
      },
      {
        'type': 'string',
        'display_name': 'pre_dispatch',
        'name': 'pre_dispatch',
        'value': '',
        'desc': 'pre_dispatch'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      },
      {
        'type': 'string',
        'display_name': 'y',
        'name': 'y',
        'value': '',
        'desc': 'y'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'cross_val_score': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'scorer',
        'name': 'scorer',
        'value': '',
        'desc': 'scorer'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'X',
        'name': 'X',
        'value': '',
        'desc': 'X'
      },
      {
        'type': 'string',
        'display_name': 'cv',
        'name': 'cv',
        'value': '',
        'desc': 'cv'
      },
      {
        'type': 'string',
        'display_name': 'estimator',
        'name': 'estimator',
        'value': '',
        'desc': 'estimator'
      },
      {
        'type': 'string',
        'display_name': 'fit_params',
        'name': 'fit_params',
        'value': '',
        'desc': 'fit_params'
      },
      {
        'type': 'string',
        'display_name': 'groups',
        'name': 'groups',
        'value': '',
        'desc': 'groups'
      },
      {
        'type': 'string',
        'display_name': 'n_jobs',
        'name': 'n_jobs',
        'value': '',
        'desc': 'n_jobs'
      },
      {
        'type': 'string',
        'display_name': 'pre_dispatch',
        'name': 'pre_dispatch',
        'value': '',
        'desc': 'pre_dispatch'
      },
      {
        'type': 'string',
        'display_name': 'scoring',
        'name': 'scoring',
        'value': '',
        'desc': 'scoring'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      },
      {
        'type': 'string',
        'display_name': 'y',
        'name': 'y',
        'value': '',
        'desc': 'y'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'scores',
        'name': 'scores',
        'value': '',
        'desc': 'scores'
      }
    ]
  },
  'RobustScaler': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'quantile_range',
        'name': 'quantile_range',
        'value': '',
        'desc': 'quantile_range'
      },
      {
        'type': 'string',
        'display_name': 'with_centering',
        'name': 'with_centering',
        'value': '',
        'desc': 'with_centering'
      },
      {
        'type': 'string',
        'display_name': 'with_scaling',
        'name': 'with_scaling',
        'value': '',
        'desc': 'with_scaling'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'MLP_sklearn': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'activations',
        'name': 'activations',
        'value': '',
        'desc': 'activations'
      },
      {
        'type': 'string',
        'display_name': 'batch_size',
        'name': 'batch_size',
        'value': '',
        'desc': 'batch_size'
      },
      {
        'type': 'string',
        'display_name': 'layer_config_file',
        'name': 'layer_config_file',
        'value': '',
        'desc': 'layer_config_file'
      },
      {
        'type': 'string',
        'display_name': 'learning_rate',
        'name': 'learning_rate',
        'value': '',
        'desc': 'learning_rate'
      },
      {
        'type': 'string',
        'display_name': 'loss',
        'name': 'loss',
        'value': '',
        'desc': 'loss'
      },
      {
        'type': 'string',
        'display_name': 'lr_decay',
        'name': 'lr_decay',
        'value': '',
        'desc': 'lr_decay'
      },
      {
        'type': 'string',
        'display_name': 'nclasses',
        'name': 'nclasses',
        'value': '',
        'desc': 'nclasses'
      },
      {
        'type': 'string',
        'display_name': 'nepochs',
        'name': 'nepochs',
        'value': '',
        'desc': 'nepochs'
      },
      {
        'type': 'string',
        'display_name': 'nhidden',
        'name': 'nhidden',
        'value': '',
        'desc': 'nhidden'
      },
      {
        'type': 'string',
        'display_name': 'nneurons',
        'name': 'nneurons',
        'value': '',
        'desc': 'nneurons'
      },
      {
        'type': 'string',
        'display_name': 'opt_config_file',
        'name': 'opt_config_file',
        'value': '',
        'desc': 'opt_config_file'
      },
      {
        'type': 'string',
        'display_name': 'regression',
        'name': 'regression',
        'value': '',
        'desc': 'regression'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'ElementFractionAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'CoordinationNumberAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'RDKitFingerprint': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'molfile',
        'name': 'molfile',
        'value': '',
        'desc': 'molfile'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'FPtype',
        'name': 'FPtype',
        'value': '',
        'desc': 'FPtype'
      },
      {
        'type': 'string',
        'display_name': 'arguments',
        'name': 'arguments',
        'value': '',
        'desc': 'arguments'
      },
      {
        'type': 'string',
        'display_name': 'molfile',
        'name': 'molfile',
        'value': '',
        'desc': 'molfile'
      },
      {
        'type': 'string',
        'display_name': 'nBits',
        'name': 'nBits',
        'value': '',
        'desc': 'nBits'
      },
      {
        'type': 'string',
        'display_name': 'path',
        'name': 'path',
        'value': '',
        'desc': 'path'
      },
      {
        'type': 'string',
        'display_name': 'radius',
        'name': 'radius',
        'value': '',
        'desc': 'radius'
      },
      {
        'type': 'string',
        'display_name': 'removeHs',
        'name': 'removeHs',
        'value': '',
        'desc': 'removeHs'
      },
      {
        'type': 'string',
        'display_name': 'vector',
        'name': 'vector',
        'value': '',
        'desc': 'vector'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      },
      {
        'type': 'string',
        'display_name': 'removed_rows',
        'name': 'removed_rows',
        'value': '',
        'desc': 'removed_rows'
      }
    ]
  },
  'StratifiedShuffleSplit': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'n_splits',
        'name': 'n_splits',
        'value': '',
        'desc': 'n_splits'
      },
      {
        'type': 'string',
        'display_name': 'random_state',
        'name': 'random_state',
        'value': '',
        'desc': 'random_state'
      },
      {
        'type': 'string',
        'display_name': 'test_size',
        'name': 'test_size',
        'value': '',
        'desc': 'test_size'
      },
      {
        'type': 'string',
        'display_name': 'train_size',
        'name': 'train_size',
        'value': '',
        'desc': 'train_size'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'fold_gen',
        'name': 'fold_gen',
        'value': '',
        'desc': 'fold_gen'
      }
    ]
  },
  'MLP': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'activations',
        'name': 'activations',
        'value': '',
        'desc': 'activations'
      },
      {
        'type': 'string',
        'display_name': 'batch_size',
        'name': 'batch_size',
        'value': '',
        'desc': 'batch_size'
      },
      {
        'type': 'string',
        'display_name': 'layer_config_file',
        'name': 'layer_config_file',
        'value': '',
        'desc': 'layer_config_file'
      },
      {
        'type': 'string',
        'display_name': 'learning_rate',
        'name': 'learning_rate',
        'value': '',
        'desc': 'learning_rate'
      },
      {
        'type': 'string',
        'display_name': 'loss',
        'name': 'loss',
        'value': '',
        'desc': 'loss'
      },
      {
        'type': 'string',
        'display_name': 'lr_decay',
        'name': 'lr_decay',
        'value': '',
        'desc': 'lr_decay'
      },
      {
        'type': 'string',
        'display_name': 'nclasses',
        'name': 'nclasses',
        'value': '',
        'desc': 'nclasses'
      },
      {
        'type': 'string',
        'display_name': 'nepochs',
        'name': 'nepochs',
        'value': '',
        'desc': 'nepochs'
      },
      {
        'type': 'string',
        'display_name': 'nhidden',
        'name': 'nhidden',
        'value': '',
        'desc': 'nhidden'
      },
      {
        'type': 'string',
        'display_name': 'nneurons',
        'name': 'nneurons',
        'value': '',
        'desc': 'nneurons'
      },
      {
        'type': 'string',
        'display_name': 'opt_config_file',
        'name': 'opt_config_file',
        'value': '',
        'desc': 'opt_config_file'
      },
      {
        'type': 'string',
        'display_name': 'regression',
        'name': 'regression',
        'value': '',
        'desc': 'regression'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'LocalPropertyVarianceAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'elemental_properties',
        'name': 'elemental_properties',
        'value': '',
        'desc': 'elemental_properties'
      },
      {
        'type': 'string',
        'display_name': 'shells',
        'name': 'shells',
        'value': '',
        'desc': 'shells'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'scatter2D': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'color',
        'name': 'color',
        'value': '',
        'desc': 'color'
      },
      {
        'type': 'string',
        'display_name': 'linestyle',
        'name': 'linestyle',
        'value': '',
        'desc': 'linestyle'
      },
      {
        'type': 'string',
        'display_name': 'linewidth',
        'name': 'linewidth',
        'value': '',
        'desc': 'linewidth'
      },
      {
        'type': 'string',
        'display_name': 'marker',
        'name': 'marker',
        'value': '',
        'desc': 'marker'
      },
      {
        'type': 'string',
        'display_name': 'x',
        'name': 'x',
        'value': '',
        'desc': 'x'
      },
      {
        'type': 'string',
        'display_name': 'y',
        'name': 'y',
        'value': '',
        'desc': 'y'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'fig',
        'name': 'fig',
        'value': '',
        'desc': 'fig'
      }
    ]
  },
  'concat': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'df1',
        'name': 'df1',
        'value': '',
        'desc': 'df1'
      },
      {
        'type': 'string',
        'display_name': 'df2',
        'name': 'df2',
        'value': '',
        'desc': 'df2'
      },
      {
        'type': 'string',
        'display_name': 'df3',
        'name': 'df3',
        'value': '',
        'desc': 'df3'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'axis',
        'name': 'axis',
        'value': '',
        'desc': 'axis'
      },
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'ignore_index',
        'name': 'ignore_index',
        'value': '',
        'desc': 'ignore_index'
      },
      {
        'type': 'string',
        'display_name': 'join',
        'name': 'join',
        'value': '',
        'desc': 'join'
      },
      {
        'type': 'string',
        'display_name': 'join_axes',
        'name': 'join_axes',
        'value': '',
        'desc': 'join_axes'
      },
      {
        'type': 'string',
        'display_name': 'keys',
        'name': 'keys',
        'value': '',
        'desc': 'keys'
      },
      {
        'type': 'string',
        'display_name': 'levels',
        'name': 'levels',
        'value': '',
        'desc': 'levels'
      },
      {
        'type': 'string',
        'display_name': 'names',
        'name': 'names',
        'value': '',
        'desc': 'names'
      },
      {
        'type': 'string',
        'display_name': 'verify_integrity',
        'name': 'verify_integrity',
        'value': '',
        'desc': 'verify_integrity'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'IonicCompoundProximityAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'max_formula_unit',
        'name': 'max_formula_unit',
        'value': '',
        'desc': 'max_formula_unit'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'ChemicalOrderingAttributeGenerator': {
    'WParameters': [],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'shells',
        'name': 'shells',
        'value': '',
        'desc': 'shells'
      },
      {
        'type': 'string',
        'display_name': 'weighted',
        'name': 'weighted',
        'value': '',
        'desc': 'weighted'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'StoichiometricAttributeGenerator': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'use_default_norms',
        'name': 'use_default_norms',
        'value': '',
        'desc': 'use_default_norms'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'entries',
        'name': 'entries',
        'value': '',
        'desc': 'entries'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'p_norms',
        'name': 'p_norms',
        'value': '',
        'desc': 'p_norms'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'load_xyz_polarizability': {
    'WParameters': [],
    'input': [],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'coordinates',
        'name': 'coordinates',
        'value': '',
        'desc': 'coordinates'
      },
      {
        'type': 'string',
        'display_name': 'polarizability',
        'name': 'polarizability',
        'value': '',
        'desc': 'polarizability'
      }
    ]
  },
  'BayesianRidge': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfx',
        'name': 'dfx',
        'value': '',
        'desc': 'dfx'
      },
      {
        'type': 'string',
        'display_name': 'dfy',
        'name': 'dfy',
        'value': '',
        'desc': 'dfy'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'alpha_1',
        'name': 'alpha_1',
        'value': '',
        'desc': 'alpha_1'
      },
      {
        'type': 'string',
        'display_name': 'alpha_2',
        'name': 'alpha_2',
        'value': '',
        'desc': 'alpha_2'
      },
      {
        'type': 'string',
        'display_name': 'compute_score',
        'name': 'compute_score',
        'value': '',
        'desc': 'compute_score'
      },
      {
        'type': 'string',
        'display_name': 'copy_X',
        'name': 'copy_X',
        'value': '',
        'desc': 'copy_X'
      },
      {
        'type': 'string',
        'display_name': 'fit_intercept',
        'name': 'fit_intercept',
        'value': '',
        'desc': 'fit_intercept'
      },
      {
        'type': 'string',
        'display_name': 'lambda_1',
        'name': 'lambda_1',
        'value': '',
        'desc': 'lambda_1'
      },
      {
        'type': 'string',
        'display_name': 'lambda_2',
        'name': 'lambda_2',
        'value': '',
        'desc': 'lambda_2'
      },
      {
        'type': 'string',
        'display_name': 'n_iter',
        'name': 'n_iter',
        'value': '',
        'desc': 'n_iter'
      },
      {
        'type': 'string',
        'display_name': 'normalize',
        'name': 'normalize',
        'value': '',
        'desc': 'normalize'
      },
      {
        'type': 'string',
        'display_name': 'tol',
        'name': 'tol',
        'value': '',
        'desc': 'tol'
      },
      {
        'type': 'string',
        'display_name': 'verbose',
        'name': 'verbose',
        'value': '',
        'desc': 'verbose'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'dfy_predict',
        'name': 'dfy_predict',
        'value': '',
        'desc': 'dfy_predict'
      }
    ]
  },
  'MinMaxScaler': {
    'WParameters': [
      {
        'type': 'string',
        'display_name': 'func_method',
        'name': 'func_method',
        'value': '',
        'desc': 'func_method'
      },
      {
        'type': 'string',
        'display_name': 'track_header',
        'name': 'track_header',
        'value': '',
        'desc': 'track_header'
      }
    ],
    'input': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ],
    'FParameters': [
      {
        'type': 'string',
        'display_name': 'copy',
        'name': 'copy',
        'value': '',
        'desc': 'copy'
      },
      {
        'type': 'string',
        'display_name': 'feature_range',
        'name': 'feature_range',
        'value': '',
        'desc': 'feature_range'
      }
    ],
    'output': [
      {
        'type': 'string',
        'display_name': 'api',
        'name': 'api',
        'value': '',
        'desc': 'api'
      },
      {
        'type': 'string',
        'display_name': 'df',
        'name': 'df',
        'value': '',
        'desc': 'df'
      }
    ]
  },
  'load_organic_density': {
    'WParameters': [],
    'input': [],
    'FParameters': [],
    'output': [
      {
        'type': 'string',
        'display_name': 'density',
        'name': 'density',
        'value': '',
        'desc': 'density'
      },
      {
        'type': 'string',
        'display_name': 'features',
        'name': 'features',
        'value': '',
        'desc': 'features'
      },
      {
        'type': 'string',
        'display_name': 'smiles',
        'name': 'smiles',
        'value': '',
        'desc': 'smiles'
      }
    ]
  }
}

export default {
  getCytoscapeInitConfig (cb) {
    let temp = _cytoscapeInitConfig
    setTimeout(() => cb(temp), 5)
  },
  getEdgehandlesConfig (cb) {
    setTimeout(() => cb(_edgehandlesConfig), 5)
  },
  getContextMenusConfig (cb) {
    setTimeout(() => cb(_contextMenusConfig), 5)
  },
  getLibHierarchy (cb) {
    setTimeout(() => cb(_libHierarchy), 5)
  },
  getFuncMeta (cb) {
    setTimeout(() => cb(_funcMeta), 5)
  },
  getLibMeta (cb) {
    setTimeout(() => cb(_libMeta), 5)
  },
  getlibUINames (cb) {
    setTimeout(() => cb(_libUINames), 5)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }

}
