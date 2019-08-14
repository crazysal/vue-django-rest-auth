import sklearnModelSelection from './jsons/sklearnModelSelection'
import sklearnDec from './jsons/sklearnDecomposition'
import sklearnPrep from './jsons/sklearnPreprocessing'
import sklearnSvm from './jsons/sklearnSvm'
import sklearnLinear from './jsons/sklearnLinearModel'
import pands from './jsons/pandasAbbrv'

let lh = {
  'Enter': {},
  'Represent': {},
  'Prepare': {},
  'Model': {},
  'Search': {},
  'Mix': {},
  'Visualize': {},
  'Save': {}
}

let fp = {}

lh['Enter']['UploadData'] = {
  'pandas': {
    'name': [],
    'functions': []
  }
}
lh['Search']['model_selection'] = {
  'sklearn': {
    'name': [],
    'functions': []
  }
}
lh['Search']['svm'] = {
  'sklearn': {
    'name': [],
    'functions': []
  }
}
lh['Represent']['decomposition'] = {
  'sklearn': {
    'name': [],
    'functions': []
  }
}
lh['Prepare']['preprocessing'] = {
  'sklearn': {
    'name': [],
    'functions': []
  }
}
lh['Model']['linear_model'] = {
  'sklearn': {
    'name': [],
    'functions': []
  }
}

console.log(sklearnSvm, lh, fp)
for (let i = 0; i < sklearnSvm['nodes'].length; i++) {
  let node = sklearnSvm['nodes'][i]
  lh['Search']['svm']['sklearn']['name'].push(node['name'])
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }

  var nf = []
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      'param_type': inp['param_type'],
      'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }

  for (let f = 0; f < node['node_functions'].length; f++) {
    var mf = []
    let func = node['node_functions'][f]
    let n = func['name'].split('')[0]
    if (n !== '_') {
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'expected_shape': methinp['expected_shape'],
          'is_optional': methinp['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']] = mf
    }
  }
  lh['Search']['svm']['sklearn']['functions'].push(nf)
}
// console.log('-=-=-=-=--=-=-=-=-=-=-', lh, fp)

for (let i = 0; i < sklearnModelSelection['nodes'].length; i++) {
  let node = sklearnModelSelection['nodes'][i]
  lh['Search']['model_selection']['sklearn']['name'].push(node['name'])
  nf = []
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      'param_type': inp['param_type'],
      'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    let n = func['name'].split('')[0]
    mf = []
    if (n !== '_') {
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'expected_shape': methinp['expected_shape'],
          'is_optional': methinp['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']] = mf
    }
  }
  lh['Search']['model_selection']['sklearn']['functions'].push(nf)
}

console.log('"*****"', pands)
for (let i = 0; i < pands['node_functions'].length; i++) {
  let node = pands['node_functions'][i]
  console.log('"*****"', node)
  lh['Enter']['UploadData']['pandas']['name'].push(node['name'])
  nf = []
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      'param_type': inp['param_type'],
      'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
}

for (let i = 0; i < sklearnDec['nodes'].length; i++) {
  let node = sklearnDec['nodes'][i]
  lh['Represent']['decomposition']['sklearn']['name'].push(node['name'])
  nf = []
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      'param_type': inp['param_type'],
      'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    let n = func['name'].split('')[0]
    mf = []
    if (n !== '_') {
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'expected_shape': methinp['expected_shape'],
          'is_optional': methinp['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']] = mf
    }
  }
  lh['Represent']['decomposition']['sklearn']['functions'].push(nf)
}

for (let i = 0; i < sklearnPrep['nodes'].length; i++) {
  let node = sklearnPrep['nodes'][i]
  lh['Prepare']['preprocessing']['sklearn']['name'].push(node['name'])
  nf = []
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      'param_type': inp['param_type'],
      'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    let n = func['name'].split('')[0]
    mf = []
    if (n !== '_') {
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'expected_shape': methinp['expected_shape'],
          'is_optional': methinp['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']] = mf
    }
  }
  lh['Prepare']['preprocessing']['sklearn']['functions'].push(nf)
}

for (let i = 0; i < sklearnLinear['nodes'].length; i++) {
  let node = sklearnLinear['nodes'][i]
  lh['Model']['linear_model']['sklearn']['name'].push(node['name'])
  nf = []
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      'param_type': inp['param_type'],
      'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    let n = func['name'].split('')[0]
    mf = []
    if (n !== '_') {
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'expected_shape': methinp['expected_shape'],
          'is_optional': methinp['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']] = mf
    }
  }
  lh['Model']['linear_model']['sklearn']['functions'].push(nf)
}
// console.log('idhar', lh)
export default {lh, fp}
