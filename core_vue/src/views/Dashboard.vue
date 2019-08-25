<template>
  <div class="animated fadeIn">
    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 id="graph" class="card-title mb-0">Model Graph</h4>
          <!-- <div class="small text-muted">November 2017</div> -->
        </b-col>
        <b-col sm="7" class="d-md-block">
          <b-button type="button" variant="secondary" class="float-right" style="margin-left: 3px" v-on:click="handleHelp()" title="Help" ><i class="fa fa-question"></i></b-button>
          <b-button type="button" variant="danger" class="float-right" style="margin-left: 3px" v-on:click="handleRun()" title="Run Graph" ><i class="fa fa-play"></i></b-button>
          <b-button type="button" variant="primary" class="float-right" style="margin-left: 3px" v-on:click="handleSave()" title="Save Graph"><i class="fa fa-save"></i></b-button>
          <!-- <b-button type="button" variant="secondary" class="float-right" style="margin-left: 3px"  v-on:click="handleShowWizard()"><i class="fa fa-folder"></i></b-button> -->
          <b-dropdown right split variant="primary" class="float-right" style="margin-left: 3px"  v-on:click="handleResetLayout('dagre')" title="Set Layout">
            <template slot="button-content">
              <i class="fa fa-sitemap"  title="DAG Layout"></i>
            </template>
            <b-dropdown-item v-on:click="handleResetLayout('dagre')">DAG Layout</b-dropdown-item>
            <b-dropdown-item v-on:click="handleResetLayout('circle')">Circle Layout</b-dropdown-item>
            <b-dropdown-item v-on:click="handleResetLayout('breadthfirst')">Breadth First Layout</b-dropdown-item>
            <b-dropdown-item v-on:click="handleResetLayout('grid')">Grid Layout</b-dropdown-item>
            <b-dropdown-item v-on:click="handleResetLayout('concentric')">Concentric Layout</b-dropdown-item>
            <b-dropdown-item v-on:click="handleResetLayout('cose')">CoSE Layout</b-dropdown-item>
            <b-dropdown-item v-on:click="handleResetLayout('random')">Random Layout</b-dropdown-item>
          </b-dropdown>
          <b-button type="button" variant="success" class="float-right" style="margin-left: 3px"  v-on:click="handleLoad()" title="Load Template"><i class="fa fa-folder-open"></i></b-button>
          <!-- <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
            <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
              <b-form-radio class="mx-0" value="Day">Day</b-form-radio>
              <b-form-radio class="mx-0" value="Month">Month</b-form-radio>
              <b-form-radio class="mx-0" value="Year">Year</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar> -->
        </b-col>
      </b-row>
      <cytoscape-graph class="chart-wrapper" style="height:600px;margin-top:40px;" height="600"></cytoscape-graph>
       <div slot="footer">
        <!-- <div class="text-muted">Template MetaData</div>
            
        <ul>
          <li>
            <div class="text-muted">Authors</div>
            <strong>Higgins et al</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">Publication</div>
            <strong>Neurips 2019</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="info" :value="20"></b-progress>
          </li>
          <li>
            <div class="text-muted">Tags</div>
            <strong>Disentanglement, Graphs, Unsupervised Learning</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">Title</div>
            <strong>Challenging Common Assumptions in the</strong> </br> <strong>Unsupervised Learning of </br> Disentangled Representations</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </li> 
                    <li class="d-none d-md-table-cell">
            <div class="text-muted">Bounce Rate</div>
            <strong>40.15%</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </li>
 -->        </ul>
      </div>
    </b-card>
    <modals></modals>
  </div>
</template>

<script>
import CytoscapeGraph from './dashboard/CytoscapeGraph.vue'
import Modals from './dashboard/Modals/index.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  components: {
    CytoscapeGraph,
    Modals
  },
  computed: {
    ...mapGetters({
      currentGraphType: 'graph/currentGraphType',
      currentGraphId: 'graph/currentGraphId',
      cy: 'cy'
    })
  },
  methods: {
    ...mapMutations({
      showLoad: 'showLoadGraph',
      showSave: 'showSaveGraph',
      showUpdate: 'showUpdateGraph',
      showWizard: 'showWizard',
      showHelp: 'showHelp'
    }),
    ...mapActions({
      updateRootGraphs: 'graph/updateRootGraphs',
      updateUserGraphs: 'graph/updateUserGraphs',
      runCurrentGraph: 'graph/runCurrentGraph'
    }),
    handleRun: function () {
      this.runCurrentGraph()
    },
    handleHelp: function () {
      this.showHelp()
    },
    handleLoad: function () {
      this.updateRootGraphs()
      this.updateUserGraphs()
      this.showLoad()
    },
    handleSave: function () {
      if (this.currentGraphType === 'root') {
        this.showSave()
      } else {
        this.showUpdate()
      }
    },
    handleResetLayout: function (layoutName) {
      var layout = this.cy.layout(
        { name: layoutName,
          animate: true, // whether to transition the node positions
          animationDuration: 500 // duration of animation in ms if enabled
        })
      layout.run()
    },
    handleShowWizard: function () {
      this.showWizard()
    }
  }
}
</script>
