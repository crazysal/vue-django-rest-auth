import sklearnModelSelection from './jsons/sklearnModelSelection'
import sklearnDec from './jsons/sklearnDecomposition'
import sklearnPrep from './jsons/sklearnPreprocessing'
import sklearnSvm from './jsons/sklearnSvm'
import sklearnLinear from './jsons/sklearnLinearModel'
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
console.log(sklearnModelSelection, lh)
for (let i = 0; i < sklearnModelSelection['nodes'].length; i++) {
  let node = sklearnModelSelection['nodes'][i]
  // console.log('Node', node)
  // console.log('Node name', node['name'])
  lh['Search']['model_selection']['sklearn']['name'].push(node['name'])
  var nf = []
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    // console.log('Node funcs', func)
    let n = func['name'].split('')[0]
    if (n !== '_') {
      // console.log('Node funcs name', n)
      nf.push(func['name'])
    }
  }
  lh['Search']['model_selection']['sklearn']['functions'].push(nf)
}

for (let i = 0; i < sklearnSvm['nodes'].length; i++) {
  let node = sklearnSvm['nodes'][i]
  // console.log('Node', node)
  // console.log('Node name', node['name'])
  lh['Search']['svm']['sklearn']['name'].push(node['name'])
  nf = []
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    // console.log('Node funcs', func)
    let n = func['name'].split('')[0]
    if (n !== '_') {
      // console.log('Node funcs name', n)
      nf.push(func['name'])
    }
  }
  lh['Search']['svm']['sklearn']['functions'].push(nf)
}

for (let i = 0; i < sklearnDec['nodes'].length; i++) {
  let node = sklearnDec['nodes'][i]
  // console.log('Node', node)
  // console.log('Node name', node['name'])
  lh['Represent']['decomposition']['sklearn']['name'].push(node['name'])
  nf = []
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    // console.log('Node funcs', func)
    let n = func['name'].split('')[0]
    if (n !== '_') {
      // console.log('Node funcs name', n)
      nf.push(func['name'])
    }
  }
  lh['Represent']['decomposition']['sklearn']['functions'].push(nf)
}

for (let i = 0; i < sklearnPrep['nodes'].length; i++) {
  let node = sklearnPrep['nodes'][i]
  // console.log('Node', node)
  // console.log('Node name', node['name'])
  lh['Prepare']['preprocessing']['sklearn']['name'].push(node['name'])
  nf = []
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    // console.log('Node funcs', func)
    let n = func['name'].split('')[0]
    if (n !== '_') {
      // console.log('Node funcs name', n)
      nf.push(func['name'])
    }
  }
  lh['Prepare']['preprocessing']['sklearn']['functions'].push(nf)
}

for (let i = 0; i < sklearnLinear['nodes'].length; i++) {
  let node = sklearnLinear['nodes'][i]
  // console.log('Node', node)
  // console.log('Node name', node['name'])
  lh['Model']['linear_model']['sklearn']['name'].push(node['name'])
  nf = []
  for (let f = 0; f < node['node_functions'].length; f++) {
    let func = node['node_functions'][f]
    // console.log('Node funcs', func)
    let n = func['name'].split('')[0]
    if (n !== '_') {
      // console.log('Node funcs name', n)
      nf.push(func['name'])
    }
  }
  lh['Model']['linear_model']['sklearn']['functions'].push(nf)
}
console.log('idhar', lh)
export default {lh}
