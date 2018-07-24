import session from '../../api/session'

// initial state
const state = {
  loggedIn: false,
  token: '',
  loginFailed: false
}

// getters
const getters = {
  loggedIn: state => state.loggedIn,
  token: state => state.token,
  loginFailed: state => state.loginFailed
}

// actions
const actions = {
  login ({ commit }, auth) {
    return new Promise((resolve, reject) => {
      session.login(auth, res => {
        console.log(res)
        if (res.authenticated === true) {
          commit('logIn', res.token)
        } else {
          commit('loginFailed')
        }
        resolve()
      })
    })
  }

}

// mutations
const mutations = {
  logIn (state, token) {
    state.loggedIn = true
    state.token = token
  },
  logOut (state) {
    state.loggedIn = false
    state.token = ''
  },
  loginFailed (state) {
    state.loginFailed = true
  }

  // showEditNode (state) {
  //   state.editNodeVisible = true
  // },
  // showEditEdge (state) {
  //   state.editEdgeVisible = true
  // },
  // hideAddNode (state) {
  //   state.addNodeVisible = false
  // },
  // hideEditNode (state) {
  //   state.editNodeVisible = false
  // },
  // hideEditEdge (state) {
  //   state.editEdgeVisible = false
  // }
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
