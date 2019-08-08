import cytoscape from '../../api/cytoscape'
import session from '../../api/session'
import _utils from './_utils'
import _ from 'lodash'
// import get_sklearn_linear from '../../api/jsons/sklearn_linear_model'
// import sklearnModelSelection from '../../api/jsons/sklearnModelSelection'

// initial state
const state = {
  cytoscapeConfig: {},
  edgehandlesConfig: {},
  contextMenusConfig: {},
  funcMeta: {},
  libMeta: {},
  libUINames: {},
  cy: {},
  cyClickPos: {
    x: 20,
    y: 20
  },
  libHierarchy: {},
  wizHierarchy: {},
  selectedNode: {},
  selectedEdge: {},
  initGraph: {}
}

// getters
const getters = {
  cytoscapeConfig: state => state.cytoscapeConfig,
  edgehandlesConfig: state => state.edgehandlesConfig,
  contextMenusConfig: state => state.contextMenusConfig,
  libHierarchy: state => state.libHierarchy,
  wizHierarchy: state => state.wizHierarchy,
  funcMeta: state => state.funcMeta,
  libMeta: state => state.libMeta,
  libUINames: state => state.libUINames,
  elements: state => state.cy.elements,
  cy: state => state.cy,
  cyClickPos: state => state.cyClickPos,
  selectedNode: state => state.selectedNode,
  selectedEdge: state => state.selectedEdge,
  initGraph: state => state.initGraph
}

// actions
const actions = {
  setCytoscapeInitConfig ({ commit }, container) {
    return new Promise((resolve, reject) => {
      cytoscape.getCytoscapeInitConfig(cytoscapeConfig => {
        cytoscapeConfig.container = container
        commit('setCytoscapeConfig', cytoscapeConfig)
        resolve()
      })
    })
  },

  setEdgehandlesConfig ({ commit }, self) {
    return new Promise((resolve, reject) => {
      cytoscape.getEdgehandlesConfig(edgehandlesConfig => {
        edgehandlesConfig.complete = _utils.getEdgeDropFunction(self)
        commit('setEdgehandlesConfig', edgehandlesConfig)
        resolve()
      })
    })
  },

  setLibHierarchy ({ commit }) {
    return new Promise((resolve, reject) => {
      // sklearnModelSelection.getSklearnModelSelection(libHierarchy => {
      //   commit('setLibHierarchy', libHierarchy)
      //   commit('setWizHierarchy', libHierarchy)
      //   resolve()
      // })
      cytoscape.getLibHierarchy(libHierarchy => {
        commit('setLibHierarchy', libHierarchy)
        commit('setWizHierarchy', libHierarchy)
        resolve()
      })
    })
  },

  setFuncMeta ({ commit }) {
    return new Promise((resolve, reject) => {
      cytoscape.getFuncMeta(funcMeta => {
        commit('setFuncMeta', funcMeta)
        resolve()
      })
    })
  },

  setLibMeta ({ commit }) {
    return new Promise((resolve, reject) => {
      cytoscape.getLibMeta(libMeta => {
        commit('setLibMeta', libMeta)
        resolve()
      })
    })
  },

  setLibUINames ({ commit }) {
    return new Promise((resolve, reject) => {
      cytoscape.getlibUINames(libUINames => {
        commit('setLibUINames', libUINames)
        resolve()
      })
    })
  },

  setContextMenusConfig ({ commit }, self) {
    return new Promise((resolve, reject) => {
      cytoscape.getContextMenusConfig(contextMenusConfig => {
        contextMenusConfig.menuItems[0].onClickFunction = _utils.getEditNodeOnClickFunction(self)
        contextMenusConfig.menuItems[1].onClickFunction = _utils.getEditEdgeOnClickFunction(self)
        contextMenusConfig.menuItems[2].onClickFunction = _utils.getRemoveNodeOnClickFunction(self)
        contextMenusConfig.menuItems[3].onClickFunction = _utils.getRemoveEdgeOnClickFunction(self)
        contextMenusConfig.menuItems[4].onClickFunction = _utils.getAddNodeOnClickFunction(self)
        commit('setContextMenusConfig', contextMenusConfig)
        resolve()
      })
    })
  },

  setCy ({ commit }, cyObj) {
    return new Promise((resolve, reject) => {
      commit('setCy', cyObj)
      resolve()
    })
  },

  setInitGraph ({ commit }) {
    return new Promise((resolve, reject) => {
      session.get('/api/graphs/5/')
        .then(result => {
          commit('setInitGraph', result.data)
          resolve()
        }, error => {
          console.error(error)
          reject(error)
        })
    })
  }

}

// mutations
const mutations = {
  setCytoscapeConfig (state, cytoscapeConfig) {
    state.cytoscapeConfig = cytoscapeConfig
  },
  setEdgehandlesConfig (state, edgehandlesConfig) {
    state.edgehandlesConfig = edgehandlesConfig
  },
  setLibHierarchy (state, libHierarchy) {
    state.libHierarchy = libHierarchy
  },
  setWizHierarchy (state, libHierarchy) {
    let wizHierarchy = _.cloneDeep(libHierarchy)
    wizHierarchy['Finish'] = 'finish'
    state.wizHierarchy = wizHierarchy
  },
  setFuncMeta (state, funcMeta) {
    state.funcMeta = funcMeta
  },
  setLibMeta (state, libMeta) {
    state.libMeta = libMeta
  },
  setLibUINames (state, libUINames) {
    state.libUINames = libUINames
  },
  setContextMenusConfig (state, contextMenusConfig) {
    state.contextMenusConfig = contextMenusConfig
  },
  setCy (state, cyObj) {
    state.cy = cyObj
  },
  setCyClickPos (state, cyPos) {
    console.log(cyPos)
    state.cyClickPos.x = cyPos.x
    state.cyClickPos.y = cyPos.y
  },
  setSelectedNodeId (state, id) {
    state.selectedNode = {id: id}
  },
  setSelectedNodeElem (state, elem) {
    state.selectedNode.elem = elem
  },
  resetSelectedNode (state) {
    state.selectedNode = {}
  },
  setSelectedEdge (state, elem) {
    state.selectedEdge = elem
  },
  setInitGraph (state, initGraph) {
    state.initGraph = initGraph
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
