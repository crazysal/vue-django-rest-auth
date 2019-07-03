import session from './session'

export default {
  getUserGraphs () {
    return session.get('/api/usergraphs/')
  },
  getRootGraphs () {
    return session.get('/api/rootgraphs/')
  },
  updateCurrentUserGraph (graphId, payload) {
    return session.put('/api/graphs/' + graphId + '/', payload)
  },
  saveCurrentUserGraph (data) {
    return session.post('/api/graphs/', data)
  },
  runGraph (data) {
    return session.post('/api/rungraph/', data)
  },
  getGraphRuns () {
    return session.get('/api/graphruns/')
  },
  getTableJson () {
    return session.get('/api/table/')
  },
  getColumnJson () {
    return session.get('/api/columns/')
  }
}
