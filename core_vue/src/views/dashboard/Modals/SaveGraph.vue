<template>
  <b-modal title="Save Graph" v-model="myModal" @ok="handleOk()" @cancel="hide()" no-close-on-esc no-close-on-backdrop hide-header-close >
    <div>

      <label for="name">Name</label>
      <b-form-input type="text" id="name" v-model="newGraphTitle" ></b-form-input>

    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
// import $ from 'jquery'
// import utils from '../_utils'

export default {
  name: 'saveGraph',
  data () {
    return {
      newGraphTitle: 'Untitled'
    }
  },
  computed: {
    ...mapGetters({
      visible: 'saveGraphVisible',
      clickPos: 'cyClickPos',
      libHierarchy: 'libHierarchy',
      cy: 'cy',
      currentGraphId: 'graph/currentGraphId',
      currentGraphType: 'graph/currentGraphType',
      currentGraphTitle: 'graph/currentGraphTitle'
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
      show: 'showSaveGraph',
      hide: 'hideSaveGraph'
    }),
    ...mapActions({
      saveCurrentUserGraph: 'graph/saveCurrentUserGraph'
    }),
    handleOk: function () {
      let data = JSON.stringify(this.cy.json())
      this.saveCurrentUserGraph({'title': this.newGraphTitle, 'content': data})
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
