<template>
  <b-modal title="Update Graph" v-model="myModal" @ok="handleOk()" ok-title="Yes" @cancel="handleCancel()" cancel-title="No" no-close-on-esc no-close-on-backdrop hide-header-close >
    <div>
      <h5>Do you want update/overwrite the current graph?</h5>
      <!--<b-button variant="primary" v-on:click="printCyJson()">Primary</b-button>-->
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
// import $ from 'jquery'
// import utils from '../_utils'

export default {
  name: 'updateGraph',
  data () {
    return {
      info: 'Asdf'
    }
  },
  computed: {
    ...mapGetters({
      visible: 'updateGraphVisible',
      clickPos: 'cyClickPos',
      libHierarchy: 'libHierarchy',
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
      show: 'showUpdateGraph',
      hide: 'hideUpdateGraph',
      showSave: 'showSaveGraph'
    }),
    ...mapActions({
      updateCurrentUserGraph: 'graph/updateCurrentUserGraph'
    }),
    handleCancel: function () {
      this.hide()
      this.showSave()
    },
    handleOk: function () {
      if (this.currentGraphType === 'user') {
        let data = JSON.stringify(this.cy.json())
        this.updateCurrentUserGraph({'id': this.currentGraphId, 'content': data})
      }
      this.hide()
    },
    printCyJson: function () {
      // let data = JSON.stringify(this.cy.json())
      // console.log(data)
      console.log(this.currentGraphId)
      console.log(this.currentGraphType)
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
