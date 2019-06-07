<template>
  <div class="wrapper">
    <add-node></add-node>
    <edit-node></edit-node>
    <edit-edge></edit-edge>
    <load-graph></load-graph>
    <save-graph></save-graph>
    <update-graph></update-graph>
    <wizard></wizard>
  </div>
</template>

<script>
import AddNode from './AddNode.vue'
import EditNode from './EditNode.vue'
import EditEdge from './EditEdge.vue'
import LoadGraph from './LoadGraph.vue'
import SaveGraph from './SaveGraph.vue'
import UpdateGraph from './UpdateGraph.vue'
import Wizard from './Wizard.vue'

export default {
  name: 'modals',
  components: {
    AddNode,
    EditNode,
    EditEdge,
    LoadGraph,
    SaveGraph,
    UpdateGraph,
    Wizard
  },
  data () {
    return {
      // myModal: fa
      // ,
      // largeModal: false,
      // smallModal: false,
      // primaryModal: false,
      // successModal: false,
      // warningModal: false,
      // dangerModal: false,
      // infoModal: false
    }
  }
}
</script>
