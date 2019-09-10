import graph from '../../api/graph'

const state = {
  usergraphs: null,
  rootgraphs: null,
  error: false,
  currentGraphId: '48',
  currentGraphType: 'root',
  currentGraphTitle: 'Boston House Prices',
  graphruns: null
}

const getters = {
  usergraphs: state => state.usergraphs,
  rootgraphs: state => state.rootgraphs,
  error: state => state.error,
  currentGraphId: state => state.currentGraphId,
  currentGraphType: state => state.currentGraphType,
  currentGraphTitle: state => state.currentGraphTitle,
  graphruns: state => state.graphruns
}

const actions = {
  updateRootGraphs ({ commit }) {
    // console.log('in store')
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
  },
  setGraphRuns ({ commit }) {
    return graph.getGraphRuns()
      .then(({ data }) => commit('setGraphRuns', data))
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
  },
  setGraphRuns (state, data) {
    var newData = []
    data.forEach(function (item) {
      var row = {
        'id': item.content,
        'graph': item.graph.title,
        'start_time': item.created,
        'status': item.state,
        'actions': "<a id='" + item.content + "' href='api/downloadGraphRun?run=" + item.content + "' download>download</a>"
      }
      row.status = item.state === 0 ? 'Created'
        : item.state === 1 ? 'Requested'
          : item.state === 2 ? 'Queued'
            : item.state === 3 ? 'Started'
              : item.state === 4 ? 'Error'
                : item.state === 5 ? 'Success'
                  : item.state === 6 ? 'Error' : 'NA'
      newData.push(row)
    })
    state.graphruns = newData
  }
}

export default {
  namespaced: true,
  state: state,
  getters,
  actions,
  mutations
}
