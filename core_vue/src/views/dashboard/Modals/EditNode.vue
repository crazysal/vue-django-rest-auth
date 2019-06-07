<template>
  <b-modal title="Edit Node" v-model="myModal" @ok="handleOk" @cancel="handleCancel" no-close-on-esc no-close-on-backdrop hide-header-close >
    <div v-if="selectedNode.hasOwnProperty('elem')">

      <strong>Node Type</strong>
      <template v-for='(lib, key1) in selectedNode.elem.data.info'>
        <b-form-group
          :label="key1"
          label-for="radios"
          :label-cols="3"
          :horizontal="true">
          <b-form-radio-group
            id="radios"
            name="funcRadios">
            <div v-for='func in lib' class="custom-control custom-radio custom-control-inline">
              <input type="radio" :id=func name="funcRadios" class="custom-control-input" :value=func v-on:click="handleFuncChange(key1,func)">
              <label class="custom-control-label" for="radiosInline">{{func}}</label>
            </div>
          </b-form-radio-group>
        </b-form-group>
      </template>

      <strong v-if='wparams.length>0'>Wrapper Params</strong>
      <template v-for='param in wparams'>
        <b-form-group>
          <label :for=param.name>{{param.name}}</label>
          <b-form-input type="text" :id=param.name placeholder="Enter Value" v-model="param.value"></b-form-input>
        </b-form-group>
      </template>
      <br/>
      <strong v-if='fparams.length>0'>Function Params</strong>
      <template v-for='param in fparams'>
        <b-form-group>
          <label :for=param.name>{{param.name}}</label>
          <b-form-input type="text" :id=param.name placeholder="Enter Value" v-model="param.value"></b-form-input>
        </b-form-group>
      </template>

    </div>

  </b-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import _ from 'lodash'
// import $ from 'jquery'

export default {
  name: 'editNode',
  data () {
    return {
      host: '',
      func: '',
      wparams: [],
      fparams: []
    }
  },
  computed: {
    ...mapGetters({
      visible: 'editNodeVisible',
      selectedNode: 'selectedNode',
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
      show: 'showEditNode',
      hide: 'hideEditNode',
      resetSelectedNode: 'resetSelectedNode'
    }),
    handleFuncChange: function (host, func) {
      this.host = host
      this.func = func
      this.wparams = _.cloneDeep(this.funcMeta[func].WParameters)
      this.fparams = _.cloneDeep(this.funcMeta[func].FParameters)
    },
    handleOk: function () {
      let node = this.selectedNode
      node.elem.data.params = {wparams: this.wparams, fparams: this.fparams}
      node.elem.data.func = this.func
      node.elem.data.host = this.host
      this.cy.add(node.elem)

      this.hide()
      this.resetSelectedNode()
    },
    handleCancel: function () {
      this.hide()
      this.resetSelectedNode()
    }
  },
  watch: {
    // whenever question changes, this function will run
    selectedNode: function (newVal, oldVal) {
      if (this.selectedNode.hasOwnProperty('elem')) {
        if (this.selectedNode.elem.data.hasOwnProperty('params')) {
          this.func = this.selectedNode.elem.data.func
          setTimeout(function () {
          // alert(this.func)
            let ele = document.getElementById(this.func)
            ele.checked = true
          }.bind(this), 500)
          this.wparams = this.selectedNode.elem.data.params.wparams
          this.fparams = this.selectedNode.elem.data.params.fparams
        }
      } else {
        this.func = ''
        this.wparams = []
        this.fparams = []
      }
    }
  },
  mounted () {
    // this.show()
  }
}
</script>

<style scoped>
.custom-control-input{
  left: 2px;
  top: 6px;
  z-index: 1;
}
</style>
