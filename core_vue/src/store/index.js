import Vue from 'vue'
import Vuex from 'vuex'
import cytoscape from './modules/cytoscape'
import modals from './modules/modals'
// import session from './modules/session'
import auth from './modules/auth'
import password from './modules/password'
import signup from './modules/signup'
import graph from './modules/graph'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cytoscape,
    modals,
    // session,
    auth,
    password,
    signup,
    graph
    // products
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
