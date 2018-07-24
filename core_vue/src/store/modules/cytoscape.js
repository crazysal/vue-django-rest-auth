import cytoscape from '../../api/cytoscape'
import session from '../../api/session'
import _utils from './_utils'

// initial state
const state = {
  cytoscapeConfig: {},
  edgehandlesConfig: {},
  contextMenusConfig: {},
  cy: {},
  cyClickPos: {
    x: 20,
    y: 20
  },
  libHierarchy: {},
  selectedNode: {},
  funcMeta: {},
  selectedEdge: {},
  initGraph: {}
}

// getters
const getters = {
  cytoscapeConfig: state => state.cytoscapeConfig,
  edgehandlesConfig: state => state.edgehandlesConfig,
  contextMenusConfig: state => state.contextMenusConfig,
  elements: state => state.cy.elements,
  cy: state => state.cy,
  cyClickPos: state => state.cyClickPos,
  libHierarchy: state => state.libHierarchy,
  selectedNode: state => state.selectedNode,
  selectedEdge: state => state.selectedEdge,
  funcMeta: state => state.funcMeta,
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
      cytoscape.getLibHierarchy(libHierarchy => {
        commit('setLibHierarchy', libHierarchy)
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
      session.get('/api/graphs/1/')
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
  setFuncMeta (state, funcMeta) {
    state.funcMeta = funcMeta
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
