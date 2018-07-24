<template>
  <b-modal title="Edit Edge" v-model="myModal" @ok="handleOk()" @cancel="hide()" no-close-on-esc no-close-on-backdrop hide-header-close>

    <strong v-if='inputs.length>0'>Inputs</strong>
    <template v-for='input in inputs'>
      <b-form-group>
        <label :for=input.name>{{input.name}}</label>
        <b-form-input type="text" :id=input.name placeholder="Enter Value" v-model="input.value"></b-form-input>
      </b-form-group>
    </template>
    <br/>
    <strong v-if='outputs.length>0'>Outputs</strong>
    <template v-for='output in outputs'>
      <b-form-group>
        <label :for=output.name>{{output.name}}</label>
        <b-form-input type="text" :id=output.name placeholder="Enter Value" v-model="output.value"></b-form-input>
      </b-form-group>
    </template>

  </b-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'editEdge',
  data () {
    return {
      inputs: [],
      outputs: []
    }
  },
  computed: {
    ...mapGetters({
      visible: 'editEdgeVisible',
      selectedEdge: 'selectedEdge',
      funcMeta: 'funcMeta',
      cy: 'cy'
    }),
    myModal: {
      get: function () {
        return this.visible
      },
      set: function (value) {
        if (value === true) {
          this.show()
        } else {
          this.hide()
        }
      }
    }
  },
  methods: {
    ...mapMutations({
      show: 'showEditEdge',
      hide: 'hideEditEdge'
    }),
    handleOk: function () {
      let edge = this.selectedEdge
      edge.data.inputs = this.inputs
      edge.data.outputs = this.outputs
      this.cy.add(edge)

      this.hide()
    }
  },
  watch: {
    selectedEdge: function (newVal, oldVal) {
      if (newVal.data.hasOwnProperty('inputs')) {
        this.inputs = newVal.data.inputs
        this.outputs = newVal.data.outputs
      } else {
        this.inputs = []
        this.outputs = []
      }
    }
  },
  mounted () {
    // this.show()
  }
}
</script>
