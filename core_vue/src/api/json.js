import sklearnModelSelection from './jsons/sklearnModelSelection'
import sklearnDec from './jsons/sklearnDecomposition'
import sklearnPrep from './jsons/sklearnPreprocessing'
import sklearnSvm from './jsons/sklearnSvm'
import sklearnLinear from './jsons/sklearnLinearModel'
import sklearnMetrics from './jsons/sklearnMetrics'
import pands from './jsons/pandasAbbrv'
import chem from './jsons/chemmlChemUi'
import chemModel from './jsons/chemmlModelsUi'
import chemData from './jsons/chemmlDatasetsUi'
import chemmlwrapper from './jsons/chemmlWrapperPreprocessing_ui_prepare'
import chemmlwrapperprep from './jsons/chemmlWrapperPreprocessing_ui'
import lh from './jsons/menu'

let fp = {}

// SKLEARN SVM
for (let i = 0; i < sklearnSvm['nodes'].length; i++) {
  let node = sklearnSvm['nodes'][i]
  lh['Model']['Support Vector Machines']['sklearn']['name'].push(node['name'])
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
  lh['Model']['Support Vector Machines']['sklearn']['functions'].push(nf)
}
// console.log('-=-=-=-=--=-=-=-=-=-=-', lh, fp)

// CHEMML MODEL
for (let i = 0; i < chemModel['nodes'].length; i++) {
  let node = chemModel['nodes'][i]
  lh['Model']['Neural Network']['keras']['name'].push(node['name'])
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
  lh['Model']['Neural Network']['keras']['functions'].push(nf)
}

// PANDADADADNANDANDNADNADN
for (let i = 0; i < pands['node_functions'].length; i++) {
  let node = pands['node_functions'][i]
  // console.log('"*****"', node)/
  lh['Input']['CSV']['pandas']['name'].push(node['name'])
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
  // for (let i = 0; i < node['outputs'].length; i++) {
  let op0 = node['outputs'][0]
  let op1 = node['outputs'][1]
  fp[node['name']]['Methods'][op0['name']] = {}
  fp[node['name']]['Methods'][op0['name']]['outputs'] = [{
    // 'display_name': op['name'],
    // 'desc': op['docstring'],
    'name': op0['name']
  }, {'name': op1['name']}]
  // }
}
// cheml datasets
for (let i = 0; i < chemData['node_functions'].length; i++) {
  let node = chemData['node_functions'][i]
  // console.log('"*****"', node)/
  lh['Input']['Chemical']['chemml']['name'].push(node['name'])
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
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let i = 0; i < node['outputs'].length; i++) {
    let op = node['outputs'][i]
    fp[node['name']]['Methods'][op['name']] = {}
    fp[node['name']]['Methods'][op['name']]['outputs'] = [{
      // 'display_name': op['name'],
      'desc': op['docstring'],
      'name': op['name']
    }]
  }
}

// SKLEARN DECOMPOSITION
for (let i = 0; i < sklearnDec['nodes'].length; i++) {
  let node = sklearnDec['nodes'][i]
  lh['Represent']['Dimensionality Reduction']['sklearn']['name'].push(node['name'])
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
  lh['Represent']['Dimensionality Reduction']['sklearn']['functions'].push(nf)
}

// CHEMML chem
for (let i = 0; i < chem['nodes'].length; i++) {
  let node = chem['nodes'][i]
  lh['Represent']['Chemical']['chemml']['name'].push(node['name'])
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
  lh['Represent']['Chemical']['chemml']['functions'].push(nf)
}

// SKLEARN PREPROCESSING
for (let i = 0; i < sklearnPrep['nodes'].length; i++) {
  let node = sklearnPrep['nodes'][i]
  lh['Prepare']['Preprocessing']['sklearn']['name'].push(node['name'])
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
  lh['Prepare']['Preprocessing']['sklearn']['functions'].push(nf)
}

// chemml.wrapper.preprocessing_ui_prepare PREPROCESSING
for (let i = 0; i < chemmlwrapper['nodes'].length; i++) {
  let node = chemmlwrapper['nodes'][i]
  lh['Prepare']['Data Splitting']['chemml']['name'].push(node['name'])
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
  lh['Prepare']['Data Splitting']['chemml']['functions'].push(nf)
}

// Chemml Wrapper PREPROCESSING
for (let i = 0; i < chemmlwrapperprep['nodes'].length; i++) {
  let node = chemmlwrapperprep['nodes'][i]
  lh['Output']['Store Data']['chemml']['name'].push(node['name'])
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
  lh['Output']['Store Data']['chemml']['functions'].push(nf)
}

// SKLEARN LINEAR MODEL
for (let i = 0; i < sklearnLinear['nodes'].length; i++) {
  let node = sklearnLinear['nodes'][i]
  lh['Model']['Linear']['sklearn']['name'].push(node['name'])
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
  lh['Model']['Linear']['sklearn']['functions'].push(nf)
}
// sklearn metrics
for (let i = 0; i < sklearnMetrics['node_functions'].length; i++) {
  let node = sklearnMetrics['node_functions'][i]
  // console.log('"*****"', node)/
  lh['Optimize']['Metrics']['sklearn']['name'].push(node['name'])
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
      'desc': inp['docstring'],
      'is_optional': inp['is_optional']
    })
  }
  for (let i = 0; i < node['outputs'].length; i++) {
    let op = node['outputs'][i]
    fp[node['name']]['Methods'][op['name']] = {}
    fp[node['name']]['Methods'][op['name']]['outputs'] = [{
      // 'display_name': op['name'],
      'desc': op['docstring'],
      'name': op['name']
    }]
  }
}
// SKLEARN MODEL SELECTION
for (let i = 0; i < sklearnModelSelection['nodes'].length; i++) {
  let node = sklearnModelSelection['nodes'][i]
  lh['Optimize']['Selection']['sklearn']['name'].push(node['name'])
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
  lh['Optimize']['Selection']['sklearn']['functions'].push(nf)
}
console.log('idhar', fp, lh)
export default {lh, fp}
