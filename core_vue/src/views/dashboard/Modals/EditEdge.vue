<template>
  <b-modal title="Edit Edge" v-model="myModal" @ok="handleOk()" @cancel="hide()" hide-header-close>

<!--     <strong v-if='inputs.length>0'>Source Node Outputs</strong>
    <template v-for='input in inputs'>
      <b-form-group>
        <label :for=input.name>{{input.name}}</label>
        <b-form-input type="text" :id=input.name placeholder="Enter Value" v-model="input.value"></b-form-input>
      </b-form-group>
    </template>
    <br/>
 -->
  <strong v-if='outputs.length>0'>Target Node Inputs</strong>
  <br>
  <small v-if='outputs.length>0'> Select unique values for each from dropdown output of previous node</small>
    <template v-for='output in outputs'>
      <b-form-group>
        <label :for=output.name>{{output.name}}</label>
        <b-form-select :id=output.name v-model="output.value" >
          <option v-for='input in inputs' :value="input.name">
            {{input.name}}
          </option>
        </b-form-select>
      </b-form-group>
    </template>

        <!-- <b-form-input type="text" :id=output.name placeholder="Enter Value" v-model="output.value"></b-form-input> -->
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
      // console.log('selectedEdge watch')
      // console.log(newVal)
      // console.log(oldVal)

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
    console.log('selectedEdge mounted')
    console.log(this.selectedEdge)
  }
}
</script>
