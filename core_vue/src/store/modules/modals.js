
// initial state
const state = {
  addNodeVisible: false,
  editNodeVisible: false,
  editEdgeVisible: false,
  loadGraphVisible: false,
  saveGraphVisible: false,
  updateGraphVisible: false,
  wizardVisible: false
}

// getters
const getters = {
  addNodeVisible: state => state.addNodeVisible,
  editNodeVisible: state => state.editNodeVisible,
  editEdgeVisible: state => state.editEdgeVisible,
  loadGraphVisible: state => state.loadGraphVisible,
  saveGraphVisible: state => state.saveGraphVisible,
  updateGraphVisible: state => state.updateGraphVisible,
  wizardVisible: state => state.wizardVisible
}

// actions
const actions = {
  // setCytoscapeInitConfig ({ commit }, container) {
  //   return new Promise((resolve, reject) => {
  //     cytoscape.getCytoscapeInitConfig(cytoscapeConfig => {
  //       cytoscapeConfig.container = container
  //       commit('setCytoscapeConfig', cytoscapeConfig)
  //       resolve()
  //     })
  //   })
  // },
  //
  // setEdgehandlesConfig ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     cytoscape.getEdgehandlesConfig(edgehandlesConfig => {
  //       commit('setEdgehandlesConfig', edgehandlesConfig)
  //       resolve()
  //     })
  //   })
  // },
  //
  // setContextMenusConfig ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     cytoscape.getContextMenusConfig(contextMenusConfig => {
  //       commit('setContextMenusConfig', contextMenusConfig)
  //       resolve()
  //     })
  //   })
  // },
  //
  // setCy ({ commit }, cyObj) {
  //   return new Promise((resolve, reject) => {
  //     commit('setCy', cyObj)
  //     resolve()
  //   })
  // }

}

// mutations
const mutations = {
  showAddNode (state) {
    state.addNodeVisible = true
  },
  showEditNode (state) {
    state.editNodeVisible = true
  },
  showEditEdge (state) {
    state.editEdgeVisible = true
  },
  showSaveGraph (state) {
    state.saveGraphVisible = true
  },
  showLoadGraph (state) {
    state.loadGraphVisible = true
  },
  showUpdateGraph (state) {
    state.updateGraphVisible = true
  },
  showWizard (state) {
    state.wizardVisible = true
  },
  hideAddNode (state) {
    state.addNodeVisible = false
  },
  hideEditNode (state) {
    state.editNodeVisible = false
  },
  hideEditEdge (state) {
    state.editEdgeVisible = false
  },
  hideSaveGraph (state) {
    state.saveGraphVisible = false
  },
  hideLoadGraph (state) {
    state.loadGraphVisible = false
  },
  hideUpdateGraph (state) {
    state.updateGraphVisible = false
  },
  hideWizard (state) {
    state.wizardVisible = false
  }
  // setAddNode (state, value) {
  //   state.addNodeVisible = value
  // },
  // setEditNode (state, value) {
  //   state.editNodeVisible = value
  // },
  // setEditEdge (state, value) {
  //   state.editEdgeVisible = value
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
