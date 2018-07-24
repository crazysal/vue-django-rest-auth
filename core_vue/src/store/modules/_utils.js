function getEditNodeOnClickFunction (self) {
  return function (event) {
    let target = event.target || event.cyTarget
    let id = target.data().id
    let node = {
      group: 'nodes',
      data: self.cy.getElementById(id).data(),
      position: self.cy.getElementById(id).position()
    }
    self.$store.commit('setSelectedNodeId', id)
    self.$store.commit('setSelectedNodeElem', node)
    self.$store.commit('showEditNode')
  }
}

function getEditEdgeOnClickFunction (self) {
  return function (event) {
    let target = event.target || event.cyTarget
    let id = target.data().id
    let edge = {
      group: 'edges',
      data: self.cy.getElementById(id).data()
    }
    self.$store.commit('setSelectedEdge', edge)
    self.$store.commit('showEditEdge')
  }
}

function getRemoveNodeOnClickFunction (self) {
  return function (event) {
    let target = event.target || event.cyTarget
    let id = target.data().id
    self.cy.remove(self.cy.$id(id))
  }
}

function getRemoveEdgeOnClickFunction (self) {
  return function (event) {
    let target = event.target || event.cyTarget
    let id = target.data().id
    self.cy.remove(self.cy.$id(id))
  }
}

function getAddNodeOnClickFunction (self) {
  return function (event) {
    self.$store.commit('showAddNode')
    const pos = event.position || event.cyPosition
    self.$store.commit('setCyClickPos', { x: pos.x, y: pos.y })
  }
}

function getEdgeDropFunction (self) {
  return function (sourceNode, targetNode, addedEles) {
    if (typeof addedEles !== 'undefined') {
      // console.log(addedEles.data().source + '-' + addedEles.data().target)
      // console.log(addedEles)
      let sFunc = sourceNode.data().func
      let tFunc = targetNode.data().func
      let edge = {
        group: 'edges',
        data: addedEles.data()
      }
      edge.data.inputs = self.funcMeta[sFunc].output
      edge.data.outputs = self.funcMeta[tFunc].input

      self.$store.commit('setSelectedEdge', edge)
      self.$store.commit('showEditEdge')
    }
  }
}

export default{
  getEditNodeOnClickFunction,
  getEditEdgeOnClickFunction,
  getRemoveNodeOnClickFunction,
  getRemoveEdgeOnClickFunction,
  getAddNodeOnClickFunction,
  getEdgeDropFunction
}
