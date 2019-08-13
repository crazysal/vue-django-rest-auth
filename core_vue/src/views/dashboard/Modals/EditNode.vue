<template>
  <b-modal title="Edit Node" v-model="myModal" @ok="handleOk" @cancel="handleCancel">
    <div v-if="selectedNode.hasOwnProperty('elem')">

      <strong>Node Type</strong>
      <template v-for='(lib, key1) in selectedNode.elem.data.info'>
        
        <b-form-group
          :label="key1"
          label-for="radios"
          :label-cols="3"
          :horizontal="true">
          <!-- <div v-for='func in lib.name' class="custom-control custom-radio custom-control-inline"> -->
              <b-form-radio-group
                id="radios"
                name="funcRadios">
                <div v-for='func in lib.name' class="custom-control custom-radio custom-control-inline">
                  <input type="radio" :id=func name="funcRadios" class="custom-control-input" :value=func v-on:click="handleFuncChange(key1,func, lib.functions[lib.name.indexOf(func)])">
                  <label class="custom-control-label" for="radiosInline">{{func}}</label>
                </div>
              </b-form-radio-group>
          <!-- </div> -->
        </b-form-group>
      </template>

      <strong v-if='meths.length>0'>Select Class Method</strong>
      <template v-for='param in meths'>
        <b-form-radio-group
        id="radiosmeths"
        name="methRadios">
         <input type="radio" :id=param name="methRadios" :value=param v-on:click="handleMethChange(param)">
         <label class="custom-control-label" for="radiosInline">{{param}}</label>
        </b-form-radio-group>
      </template>
      <br/>

      <div v-if='fparams.length>0'>
        <button class='btn btn-success'  v-on:click="isHidden = !isHidden">Click to Set Base Parameter Values</button>
        <b-button class='btn btn-outline-info'   v-on:click="isHidden2 = !isHidden2"><i class="fa fa-question"></i></b-button>
      </div>
          
            
          
          <template v-if='!isHidden' v-for='param in fparams'>
            <b-form-group>
              
              <div v-if='param.is_optional' class="form-group required"><label :for=param.name class="control-label"> {{param.is_optional}}{{param.name}}</label></div>
              <div v-else><label :for=param.name>{{param.name}}</label></div>
              <div v-if='!isHidden2'>
                  <dl class="row">
                    <dd class="alert alert-light">{{param.desc}}</dd>
                  </dl>
              </div>
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
      meths: [],
      wparams: [],
      isHidden: true,
      isHidden2: true,
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
    handleFuncChange: function (host, func, meths) {
      this.host = host
      this.func = func
      this.meths = meths
      this.isHidden = true
      this.isHidden2 = true
      // alert(meths, host, func)
      this.wparams = _.cloneDeep(this.funcMeta[func].WParameters)
      this.fparams = _.cloneDeep(this.funcMeta[func].FParameters)
    },
    handleMethChange: function (param) {
      alert('In methchange', param)
      // this.host = host
      // this.func = func
      // this.meths = meths
      // // alert(meths, host, func)
      // this.wparams = _.cloneDeep(this.funcMeta[func].WParameters)
      // this.fparams = _.cloneDeep(this.funcMeta[func].FParameters)
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
