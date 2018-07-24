<template>
  <div class="animated fadeIn">
    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 id="graph" class="card-title mb-0">Graph</h4>
          <!-- <div class="small text-muted">November 2017</div> -->
        </b-col>
        <b-col sm="7" class="d-md-block">
          <b-button type="button" variant="danger" class="float-right" style="margin-left: 3px" v-on:click="handleRun()"><i class="fa fa-play"></i></b-button>
          <b-button type="button" variant="secondary" class="float-right" style="margin-left: 3px" v-on:click="handleSave()"><i class="fa fa-save"></i></b-button>
          <b-button type="button" variant="secondary" class="float-right"  v-on:click="handleLoad()"><i class="fa fa-folder-open"></i></b-button>
          <!-- <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
            <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
              <b-form-radio class="mx-0" value="Day">Day</b-form-radio>
              <b-form-radio class="mx-0" value="Month">Month</b-form-radio>
              <b-form-radio class="mx-0" value="Year">Year</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar> -->
        </b-col>
      </b-row>
      <cytoscape-graph class="chart-wrapper" style="height:400px;margin-top:40px;" height="400"></cytoscape-graph>
      <!-- <div slot="footer">
        <ul>
          <li>
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="info" :value="20"></b-progress>
          </li>
          <li>
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">Bounce Rate</div>
            <strong>40.15%</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </li>
        </ul>
      </div> -->
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
      currentGraphId: 'graph/currentGraphId'
    })
  },
  methods: {
    ...mapMutations({
      showLoad: 'showLoadGraph',
      showSave: 'showSaveGraph',
      showUpdate: 'showUpdateGraph'
    }),
    ...mapActions({
      updateRootGraphs: 'graph/updateRootGraphs',
      updateUserGraphs: 'graph/updateUserGraphs',
      runCurrentGraph: 'graph/runCurrentGraph'
    }),
    handleRun: function () {
      this.runCurrentGraph()
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
    }
  }
}
</script>
