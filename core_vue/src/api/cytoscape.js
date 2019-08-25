// import axios from 'axios'
// import session from './session'

/**
 * Mocking client-server processing
 */
import json from './json'

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
        'target-arrow-shape': 'triangle',
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
        'border-color': 'green'
      }
    },
    {
      selector: '.eh-target',
      style: {
        'border-width': 2,
        'border-color': 'blue'
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
const _edgehandlesConfig = {
  toggleOffOnLeave: true,
  handleNodes: 'node',
  handleSize: 10,
  edgeType: function (sourceNode, targetNode) {
    var compatible = true
    if (compatible) {
      return 'flat'
    } else {
      return null
    }
  }
}
const _contextMenusConfig = {
  menuItems: [
    {
      id: 'edit-node',
      content: 'Edit Node',
      tooltipText: 'Edit Node',
      selector: 'node',
      onClickFunction: function (event) {
      }
    },
    {
      id: 'edit-edge',
      content: 'Edit Edge',
      tooltipText: 'Edit Edge',
      selector: 'edge',
      onClickFunction: function (event) {
      }
    },
    {
      id: 'remove-node',
      content: 'Remove Node',
      tooltipText: 'Remove Node',
      selector: 'node',
      onClickFunction: function (event) {
      }
    },
    {
      id: 'remove-edge',
      content: 'Remove Edge',
      tooltipText: 'Remove Edge',
      selector: 'edge',
      onClickFunction: function (event) {
      }
    },
    {
      id: 'add-node',
      content: 'Add Node',
      tooltipText: 'Add Node',
      coreAsWell: true,
      onClickFunction: function (event) {
      }
    }
  ],
  menuItemClasses: ['custom-menu-item'],
  contextMenuClasses: ['custom-context-menu']
}
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
    setTimeout(() => cb(json['lh']), 5)
  },
  getFuncMeta (cb) {
    setTimeout(() => cb(json['fp']), 5)
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
