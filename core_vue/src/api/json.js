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

// console.log(sklearnSvm, lh, fp)

// SKLEARN SVM
for (let i = 0; i < sklearnSvm['nodes'].length; i++) {
  let node = sklearnSvm['nodes'][i]
  lh['Search']['svm']['sklearn']['name'].push(node['name'])
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }

  var nf = ['obj']
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
    var lf = []
    var mf = []
    let func = node['node_functions'][f]
    let n = func['name'].split('')[0]
    if (n !== '_') {
      fp[node['name']]['Methods'][func['name']] = {}
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'is_optional': methinp['is_optional']
        })
      }
      for (let m = 0; m < func['outputs'].length; m++) {
        let methop = func['outputs'][m]
        lf.push({
          'name': methop['name'],
          'docstring': methop['docstring'],
          'param_type': methop['param_type'],
          'is_optional': methop['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']]['inputs'] = mf
      fp[node['name']]['Methods'][func['name']]['outputs'] = lf
    }
  }
  lh['Search']['svm']['sklearn']['functions'].push(nf)
}
// console.log('-=-=-=-=--=-=-=-=-=-=-', lh, fp)

// SKLEARN MODEL SELECTION
for (let i = 0; i < sklearnModelSelection['nodes'].length; i++) {
  let node = sklearnModelSelection['nodes'][i]
  lh['Search']['model_selection']['sklearn']['name'].push(node['name'])
  nf = ['obj']
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
    lf = []
    mf = []
    if (n !== '_') {
      fp[node['name']]['Methods'][func['name']] = {}
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'is_optional': methinp['is_optional']
        })
      }
      for (let m = 0; m < func['outputs'].length; m++) {
        let methop = func['outputs'][m]
        lf.push({
          'name': methop['name'],
          'docstring': methop['docstring'],
          'param_type': methop['param_type'],
          'is_optional': methop['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']]['inputs'] = mf
      fp[node['name']]['Methods'][func['name']]['outputs'] = lf
    }
  }
  lh['Search']['model_selection']['sklearn']['functions'].push(nf)
}

// PANDADADADNANDANDNADNADN
for (let i = 0; i < pands['node_functions'].length; i++) {
  let node = pands['node_functions'][i]
  // console.log('"*****"', node)
  lh['Enter']['UploadData']['pandas']['name'].push(node['name'])
  // nf = ['obj']
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      // 'param_type': inp['param_type'],
      // 'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      // 'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let i = 0; i < node['outputs'].length; i++) {
    let op = node['outputs'][i]
    fp[node['name']]['Methods'][op['name']] = {}
    fp[node['name']]['Methods'][op['name']]['outputs'] = [{
      // 'display_name': op['name'],
      // 'desc': op['docstring'],
      'name': op['name']
    }]
  }
}

// SKLEARN DECOMPOSITION
for (let i = 0; i < sklearnDec['nodes'].length; i++) {
  let node = sklearnDec['nodes'][i]
  lh['Represent']['decomposition']['sklearn']['name'].push(node['name'])
  nf = ['obj']
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
    lf = []
    mf = []
    if (n !== '_') {
      fp[node['name']]['Methods'][func['name']] = {}
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'is_optional': methinp['is_optional']
        })
      }
      for (let m = 0; m < func['outputs'].length; m++) {
        let methop = func['outputs'][m]
        lf.push({
          'name': methop['name'],
          'docstring': methop['docstring'],
          'param_type': methop['param_type'],
          'is_optional': methop['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']]['inputs'] = mf
      fp[node['name']]['Methods'][func['name']]['outputs'] = lf
    }
  }
  lh['Represent']['decomposition']['sklearn']['functions'].push(nf)
}

// SKLEARN PREPROCESSING
for (let i = 0; i < sklearnPrep['nodes'].length; i++) {
  let node = sklearnPrep['nodes'][i]
  lh['Prepare']['preprocessing']['sklearn']['name'].push(node['name'])
  nf = ['obj']
  fp[node['name']] = {
    'FParameters': [],
    'Methods': {}
  }
  for (let i = 0; i < node['inputs'].length; i++) {
    let inp = node['inputs'][i]
    fp[node['name']]['FParameters'].push({
      // 'param_type': inp['param_type'],
      // 'display_name': inp['name'],
      'name': inp['name'],
      'value': inp['default_value'],
      // 'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    let n = func['name'].split('')[0]
    lf = []
    mf = []
    if (n !== '_') {
      nf.push(func['name'])
      fp[node['name']]['Methods'][func['name']] = {}
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          // 'docstring': methinp['docstring'],
          // 'param_type': methinp['param_type'],
          'is_optional': methinp['is_optional']
        })
      }
      for (let m = 0; m < func['outputs'].length; m++) {
        let methop = func['outputs'][m]
        lf.push({
          'name': methop['name'],
          // 'docstring': methop['docstring'],
          // 'param_type': methop['param_type'],
          'is_optional': methop['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']]['inputs'] = mf
      fp[node['name']]['Methods'][func['name']]['outputs'] = lf
    }
  }
  lh['Prepare']['preprocessing']['sklearn']['functions'].push(nf)
}

// SKLEARN LINEAR MODEL
for (let i = 0; i < sklearnLinear['nodes'].length; i++) {
  let node = sklearnLinear['nodes'][i]
  lh['Model']['linear_model']['sklearn']['name'].push(node['name'])
  nf = ['obj']
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
    lf = []
    if (n !== '_') {
      fp[node['name']]['Methods'][func['name']] = {}
      nf.push(func['name'])
      for (let m = 0; m < func['inputs'].length; m++) {
        let methinp = func['inputs'][m]
        mf.push({
          'name': methinp['name'],
          'docstring': methinp['docstring'],
          'param_type': methinp['param_type'],
          'is_optional': methinp['is_optional']
        })
      }
      for (let m = 0; m < func['outputs'].length; m++) {
        let methop = func['outputs'][m]
        lf.push({
          'name': methop['name'],
          'docstring': methop['docstring'],
          'param_type': methop['param_type'],
          'is_optional': methop['is_optional']
        })
      }
      fp[node['name']]['Methods'][func['name']]['inputs'] = mf
      fp[node['name']]['Methods'][func['name']]['outputs'] = lf
    }
  }
  lh['Model']['linear_model']['sklearn']['functions'].push(nf)
}
console.log('idhar', fp)
export default {lh, fp}
