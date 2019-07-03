import graph from '../../api/graph'

const state = {
  file: null,
  axisOptionsX: [],
  axisOptionsY: [],
  axisX: {},
  axisY: {value: 'sara', text: 'sara'},
  seriesXY: [],
  xcat: []
}
const getters = {
  axisParametersX: state => state.axisOptionsX,
  axisParametersY: state => state.axisOptionsY,
  selectedAxisX: state => state.axisX,
  selectedAxisY: state => state.axisY,
  listXY: state => state.seriesXY,
  fileContent: state => state.file,
  cateX: state => state.xcat

}

const actions = {
  async fetchAxisParameters ({ commit }) {
    graph.getTableJson()
      .then(function (response) {
        const col = response.data.schema.fields
        var axis = []
        for (var i = 0; i < col.length; i++) {
          axis.push({
            value: "'" + col[i].name + "'",
            text: col[i].name
          })
        }
        commit('setAxisParameters', {axisParam: axis, fileContent: response.data})
      })
  },
  updateAxisX ({commit}, axisX) {
    var col = state.file
    var axis = []
    col.sort(function (a, b) {
      var x = a[`${axisX.text}`]
      var y = b[`${axisX.text}`]
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
    var xvalues = []
    for (var i = 0; i < col.length; i++) {
      var li = []
      xvalues.push(col[i][`${axisX.text}`])
      li.push(col[i][`${axisX.text}`])
      li.push(col[i][`${state.axisY.text}`])
      axis.push(li)
    }
    commit('setAxisX', {option: {value: axisX.value, text: axisX.text}, series: axis, values: xvalues})
  },
  updateAxisY ({commit}, axisY) {
    var col = state.file
    var axis = []
    col.sort(function (a, b) {
      var x = a[`${state.axisX.text}`]; var y = b[`${state.axisX.text}`]
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
    var xvalues = []
    for (var i = 0; i < col.length; i++) {
      var li = []
      xvalues.push(col[i][`${state.axisX.text}`])
      li.push(col[i][`${state.axisX.text}`])
      li.push(col[i][`${axisY.text}`])
      axis.push(li)
    }
    commit('setAxisY', {option: {value: axisY.value, text: axisY.text}, series: axis, values: xvalues})
  }
  // updateAxisX ({commit}, axisX) {
  //   graph.getColumnJson()
  //     .then(function (response) {
  //       var xvalues = Object.values(response.data[`${axisX.text}`])
  //       commit('setAxisX', {option: {value: axisX.value, text: axisX.text}, values: xvalues})
  //     })
  // },
}

const mutations = {
  setAxisParameters: function (state, axis) {
    state.axisOptionsX = axis.axisParam
    state.axisOptionsY = axis.axisParam
    state.file = axis.fileContent.data
  },
  setAxisX: function (state, data) {
    state.axisX = data.option
    state.seriesXY = data.series
    state.xcat = data.values
  },
  setAxisY: function (state, data) {
    state.axisY = data.option
    state.seriesXY = data.series
    state.xcat = data.values
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
