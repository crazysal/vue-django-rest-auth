<template>
  <b-modal title="Wizard" size="lg" v-model="myModal" @ok="handleOk" hide-header hide-footer ok-title="Yes" @cancel="handleCancel" cancel-title="No"  hide-header-close >
    <div>
      <form-wizard @on-complete="handleOk" @on-change="setActiveIndex" step-size="sm" title="Startup Wizard" color="#184da3" ref="formWizard">

        <template v-for='(stage, key1) in wizHierarchy'>

        <tab-content :icon="icon[key1]" :title=key1 v-if="key1!='Mix'">
          <div v-if="key1!='Finish'">

            <div  style="border: solid rgb(164, 183, 193);border-width: 1px 0px;padding: 0px 5px 10px 5px;">


              <!--v-for="index in moduleCount[]"-->
              <div v-for="index in 1" class="row" style="margin-top: 10px">
                <div class="col-sm-6">
                  <select name="user" size="5" class="form-control" v-model="selectedFunction[key1]">
                    <template v-for='(info, key2) in stage'>
                      <option :value=key2>{{libUINames[key2]}}</option>
                    </template>
                    <option value="NA"> -- </option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <div  class="col-sm-12" style="border: 1px solid rgb(164, 183, 193); padding: 15px 15px; height: 100%">
                    <!--{{libMeta[selectedFunction[key1][index-1]]}}-->
                    <!--{{selectedFunction[key1][index-1]}}-->
                    {{selectedFunction[key1]}}
                    <!--{{selectedFunction['Enter']}}-->
                    <!--{{index-1}}-->
                  </div>
                </div>
              </div>

              <!--<select v-model="selected">-->
                <!--<option disabled value="">Please select one</option>-->
                <!--<option>A</option>-->
                <!--<option>B</option>-->
                <!--<option>C</option>-->
              <!--</select>-->
              <!--<span>Selected: {{ selected }}</span>-->

              <div class="row" >
                <!--style="display: none"-->
                <div class="col-12" style="margin-top: 5px">
                  <b-button type="button" variant="secondary" class="float-right" style="margin-left: 3px" ><i class="fa fa-plus"/></b-button>
                </div>
              </div>
            </div>


          </div>
          <div v-else style="border: solid rgb(164, 183, 193);border-width: 1px 0px;padding: 15px 0px;">
            This Wizard helps you get started on the workflow
            <ul>
              <li>
                To select the functions used in each step and to configure the parameters for
                the same right click on the node and select the 'Edit' option from the context menu.
              </li>
              <li>
                To configure the data is passed from one step to another, right click on the edge and
                select the 'Edit' option from the context menu
              </li>
              <li>
                To create a new edge, hover over the source node, click and drag the edge-handle
                (red circle) to the destination node. Configure the parameters in the pop-up window.
              </li>
              <li>
                To remove a node or a edge, right click on the same and select the 'Remove' option
                from the context menu.
              </li>
            </ul>

          </div>

        </tab-content>
        </template>
      </form-wizard>
      <span>
        <!--<tab-content title="Represent"-->
        <!--icon="fa fa-cubes">-->
        <!--My second tab content-->
        <!--</tab-content>-->
        <!--<tab-content title="Prepare"-->
        <!--icon="fa fa-magic">-->
        <!--Yuhuuu! This seems pretty damn simple-->
        <!--</tab-content>-->
        <!--<tab-content title="Model"-->
        <!--icon="fa fa-dashboard">-->
        <!--Yuhuuu! This seems pretty damn simple-->
        <!--</tab-content>-->
        <!--<tab-content title="Search"-->
        <!--icon="fa fa-search">-->
        <!--Yuhuuu! This seems pretty damn simple-->
        <!--</tab-content>-->
        <!--<tab-content title="Visualize"-->
        <!--icon="fa fa-bar-chart"-->
        <!--class="disabled">-->
        <!--asdfzc vzxcv-->
        <!--zxcvASFASDF-->
        <!--</tab-content>-->
        <!--<tab-content title="Store"-->
        <!--icon="fa fa-file">-->
        <!--SDFLKJHASLXNC-->
        <!--ASDLF-->
        <!--</tab-content>-->
        <!--<tab-content title="Finish"-->
        <!--icon="fa fa-check">-->
        <!--KAJBXDCOIU ckajsd-->
        <!--acsdkljfasd-->
        <!--</tab-content>-->

      </span>
    </div>
    <textarea rows="10" v-model="text"></textarea>
    <br>
    <file-reader @load="text = $event"></file-reader>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import FileReader from '../../../components/FileReader.vue'

// import _ from 'lodash'
// import utils from '../_utils'1

export default {
  name: 'wizard',
  components: {
    FormWizard,
    TabContent,
    FileReader
  },
  data () {
    return {
      text: '',
      info: 'Startup Wizard',
      icon: {
        'Enter': 'fa fa-database',
        'Represent': 'fa fa-cubes',
        'Prepare': 'fa fa-magic',
        'Model': 'fa fa-dashboard',
        'Search': 'fa fa-search',
        'Visualize': 'fa fa-bar-chart',
        'Store': 'fa fa-file',
        'Finish': 'fa fa-check'
      },
      selectedFunction: {},
      activeIndex: 0,
      moduleCount: [],
      selected: ''
    }
  },
  computed: {
    ...mapGetters({
      visible: 'wizardVisible',
      clickPos: 'cyClickPos',
      libHierarchy: 'libHierarchy',
      wizHierarchy: 'wizHierarchy',
      libMeta: 'libMeta',
      libUINames: 'libUINames',
      cy: 'cy',
      currentGraphId: 'graph/currentGraphId',
      currentGraphType: 'graph/currentGraphType'
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
      showWizard: 'showWizard',
      hideWizard: 'hideWizard'
    }),
    show: function () {
      this.showWizard()
    },
    hide: function () {
      this.$refs.formWizard.reset()
      this.hideWizard()
    },
    handleCancel: function () {
      this.hide()
    },
    handleOk: function () {
      this.hide()
    },
    clearDesc: function () {
      this.selectedFunction = ''
      return true
    },
    setActiveIndex: function (prevIndex, nextIndex) {
      this.activeIndex = nextIndex
    }
  },
  beforeCreate () {
    //    this.wizHierarchy = this.libHierarchy
    //    this.wizHierarchy['Finish'] = 'asdf'
    //    for (var stage in this.wizHierarchy) {
    //      this.$set(this.selectedFunction, stage, '')
    //    }
    console.log('beforeCreate start')
    console.log(JSON.stringify(this.libHierarchy))
    console.log('beforeCreate end')
  },
  mounted () {
    console.log('mounted start')
    console.log(JSON.stringify(this.libHierarchy))
    console.log('mounted end')
    //    let timer = setInterval(function () {
    //      if (this.libHierarchy != null) {
    //        this.wizHierarchy = this.libHierarchy
    //        clearInterval(timer)
    //        console.log('updated')
    //      }
    //      console.log(this.libHierarchy)
    //      console.log('going to sleep')
    //    }, 1000)
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
