import graph from '../../api/graph'

const state = {
  usergraphs: null,
  rootgraphs: null,
  error: false,
  currentGraphId: '1',
  currentGraphType: 'root',
  currentGraphTitle: 'init_template'
}

const getters = {
  usergraphs: state => state.usergraphs,
  rootgraphs: state => state.rootgraphs,
  error: state => state.error,
  currentGraphId: state => state.currentGraphId,
  currentGraphType: state => state.currentGraphType,
  currentGraphTitle: state => state.currentGraphTitle
}

const actions = {
  updateRootGraphs ({ commit }) {
    console.log('in store')
    return graph.getRootGraphs()
      .then(({ data }) => commit('setRootGraphs', data))
      .then(() => commit('apiSuccess'))
      .catch(() => commit('apiError'))
  },
  updateUserGraphs ({ commit }) {
    return graph.getUserGraphs()
      .then(({ data }) => commit('setUserGraphs', data))
      .then(() => commit('apiSuccess'))
      .catch(() => commit('apiError'))
  },
  updateCurrentUserGraph ({ commit }, data) {
    // console.log(state.currentGraphTitle)
    return graph.updateCurrentUserGraph(data.id, {'title': state.currentGraphTitle, 'content': data.content})
      .then(() => commit('apiSuccess'))
      .catch(() => commit('apiError'))
  },
  saveCurrentUserGraph ({ commit }, data) {
    return graph.saveCurrentUserGraph({'title': data.title, 'content': data.content})
      .then(() => commit('apiSuccess'))
      .catch(() => commit('apiError'))
  },
  setCurrentGraphId ({commit}, graphId) {
    commit('setCurrentGraphId', graphId)
  },
  setCurrentGraphType ({commit}, graphType) {
    commit('setCurrentGraphType', graphType)
  },
  setCurrentGraphTitle ({commit}, graphTitle) {
    commit('setCurrentGraphTitle', graphTitle)
  },
  runCurrentGraph ({commit}) {
    return graph.runGraph({'graph_id': state.currentGraphId})
      .then(() => commit('apiSuccess'))
      .catch(() => commit('apiError'))
  }
}

const mutations = {
  setRootGraphs (state, data) {
    state.rootgraphs = data
  },
  setUserGraphs (state, data) {
    state.usergraphs = data
  },
  apiError (state) {
    state.error = true
  },
  apiSuccess (state) {
    state.error = false
  },
  setCurrentGraphId (state, graphId) {
    state.currentGraphId = graphId
  },
  setCurrentGraphType (state, graphType) {
    state.currentGraphType = graphType
  },
  setCurrentGraphTitle (state, graphTitle) {
    // console.log('asdf : ' + graphTitle)
    state.currentGraphTitle = graphTitle
  }
}

export default {
  namespaced: true,
  state: state,
  getters,
  actions,
  mutations
}
