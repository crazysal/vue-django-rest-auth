import session from './session'

export default {
  getUserGraphs () {
    return session.get('https://madeatub.buffalo.edu/mltoolki/api/usergraphs/')
  },
  getRootGraphs () {
    return session.get('https://madeatub.buffalo.edu/mltoolki/api/rootgraphs/')
  },
  updateCurrentUserGraph (graphId, payload) {
    return session.put('https://madeatub.buffalo.edu/mltoolki/api/graphs/' + graphId + '/', payload)
  },
  saveCurrentUserGraph (data) {
    return session.post('https://madeatub.buffalo.edu/mltoolki/api/graphs/', data)
  },
  runGraph (data) {
    return session.post('https://madeatub.buffalo.edu/mltoolki/api/rungraph/', data)
  },
  getGraphRuns () {
    return session.get('https://madeatub.buffalo.edu/mltoolki/api/graphruns/')
  }
}
// export default {
//   getUserGraphs () {
//     return session.get('/api/usergraphs/')
//   },
//   getRootGraphs () {
//     return session.get('/api/rootgraphs/')
//   },
//   updateCurrentUserGraph (graphId, payload) {
//     return session.put('/api/graphs/' + graphId + '/', payload)
//   },
//   saveCurrentUserGraph (data) {
//     return session.post('/api/graphs/', data)
//   },
//   runGraph (data) {
//     return session.post('/api/rungraph/', data)
//   },
//   getGraphRuns () {
//     return session.get('/api/graphruns/')
//   }
// }
