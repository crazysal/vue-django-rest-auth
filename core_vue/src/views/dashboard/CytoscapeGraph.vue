<template>
    <div id="cy"> </div>
</template>

<script>
import cytoscape from 'cytoscape'
import cytoscapeDagre from 'cytoscape-dagre'
import cytoscapeContextMenu from 'cytoscape-context-menus'
import cytoscapeEdgehandles from 'cytoscape-edgehandles'
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CytoscapeGraph',
  // data () {
  //   return {
  //     cy: null
  //   }
  // },
  computed: {
    ...mapGetters({
      cytoscapeConfig: 'cytoscapeConfig',
      edgehandlesConfig: 'edgehandlesConfig',
      contextMenusConfig: 'contextMenusConfig',
      cy: 'cy',
      funcMeta: 'funcMeta',
      initGraph: 'initGraph'
    })
    // ,
    // elements: function () {
    //   return this.cy.json()
    // }
  },
  methods: {
    ...mapActions({
      setCytoscapeInitConfig: 'setCytoscapeInitConfig',
      setEdgehandlesConfig: 'setEdgehandlesConfig',
      setContextMenusConfig: 'setContextMenusConfig',
      setCy: 'setCy',
      setLibHierarchy: 'setLibHierarchy',
      setFuncMeta: 'setFuncMeta',
      setLibMeta: 'setLibMeta',
      setLibUINames: 'setLibUINames',
      setInitGraph: 'setInitGraph'
    })
  },
  // watch: {
  //   elements (newElements, oldElements) {
  //     if (typeof this.cy !== 'undefined' && this.cy !== null) {
  //       this.cy.json({ elements: this.elements })
  //     }
  //   }
  // },
  mounted: function () {
    let container = $('#cy')
    // getting cytoscape configutations
    this.setLibHierarchy().then(() => {
      console.log('updated lib hierarchy')
    })
    this.setLibMeta()
    this.setLibUINames()
    this.setFuncMeta().then(() => {
      this.setCytoscapeInitConfig(container).then(() => {
        // registering cytoscape plugins
        cytoscape.use(cytoscapeDagre)
        cytoscape.use(cytoscapeEdgehandles)
        cytoscapeContextMenu(cytoscape, $)
        // cytoscape init
        // this.cy = cytoscape(Object.assign(this.cytoscapeConfig))
        // console.log('"**********************************************************************************"', this.cytoscapeConfig)
        this.setCy(cytoscape(Object.assign(this.cytoscapeConfig)))
        // edgehandles init
        this.setEdgehandlesConfig(this).then(() => {
          this.cy.edgehandles(this.edgehandlesConfig)
        })
        // contextMenus init
        this.setContextMenusConfig(this).then(() => {
          // console.log(this)
          this.cy.contextMenus(this.contextMenusConfig)
        })
      }).then(() => {
        this.setInitGraph(this).then(() => {
          // console.log(this.initGraph)
          this.cy.json(JSON.parse(this.initGraph.content))
        })
      })
    })

    // window.selectAllOfTheSameType = function (ele) {
    //   this.cy.elements().unselect()
    //   if (ele.isNode()) {
    //     this.cy.nodes().select()
    //   } else if (ele.isEdge()) {
    //     this.cy.edges().select()
    //   }
    // }
    // window.removeEdgesWithNonVertex = function () {
    //   var nidx = []
    //   window.cytoOptions.elements.nodes.forEach(function (node) {
    //     nidx.push(node.data.id)
    //     console.log('pushed node :' + node.data.id)
    //   })
    //   window.cytoOptions.elements.edges.forEach(function (edge) {
    //     if (!nidx.includes(edge.data.source) || !nidx.includes(edge.data.target)) {
    //       var neidx = window.cytoOptions.elements.edges.indexOf(edge)
    //       window.cytoOptions.elements.edges.splice(neidx, 1)
    //       console.log('removed edge :' + edge.data.source + '-' + edge.data.target + '-' + edge.data.id)
    //     }
    //   })
    //   window.cy.json({ elements: window.cytoOptions.elements })
    // //      window.cy.json({ elements: window.cytoOptions.elements })
    // }

    // save state
  }
}
</script>
<style>
#cy {
  width: 100%;
  height: 100%;
  /*position: absolute;*/
  left: 0;
  top: 0;
  /*z-index: 999;*/
  margin:auto;
  border:3px solid #ccc!important;
  /* border-radius:16px; */
  padding:2px;
}

.cy-context-menus-cxt-menu {
    display:none;
    z-index:1000;
    position:absolute;
    border:1px solid #A0A0A0;
    padding: 0;
    margin: 0;
    width:auto;
}

.cy-context-menus-cxt-menuitem {
    display:block;
    z-index:1000;
    width: 100%;
    padding: 3px 20px;
    position:relative;
    margin:0;
    background-color:#f8f8f8;
    font-weight:normal;
    font-size: 12px;
    white-space:nowrap;
    border: 0;
    text-align: left;
}

.cy-context-menus-cxt-menuitem:enabled {
    color: #000000;
}

.cy-context-menus-ctx-operation:focus {
  outline: none;
}

.cy-context-menus-cxt-menuitem:hover {
    color: #ffffff;
    text-decoration: none;
    background-color: #0B9BCD;
    background-image: none;
    cursor: pointer;
}

.cy-context-menus-cxt-menuitem[content]:before {
    content:attr(content);
}

.cy-context-menus-divider {
  border-bottom:1px solid #A0A0A0;
}

</style>
