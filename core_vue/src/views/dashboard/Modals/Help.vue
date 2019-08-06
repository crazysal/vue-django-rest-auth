<template>
  <b-modal title="Help" size="lg" v-model="myModal" @ok="handleOk()" @cancel="hide()" hide-header-close >
    <div class="row">
       <div class="col-lg-12"><h2>How To Do Stuff Goes here</h2></div> 
       </div> 
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import $ from 'jquery'
// import utils from '../_utils'

export default {
  name: 'help',
  data () {
    return {
      graphId: ''
    }
  },
  computed: {
    ...mapGetters({
      visible: 'helpVisible',
      rootgraphs: 'graph/rootgraphs',
      usergraphs: 'graph/usergraphs',
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
      show: 'showHelp',
      hide: 'hideHelp'
    }),
    ...mapActions({
      updateRootGraphs: 'graph/updateRootGraphs',
      updateUserGraphs: 'graph/updateUserGraphs',
      setCurrentGraphType: 'graph/setCurrentGraphType',
      setCurrentGraphId: 'graph/setCurrentGraphId',
      setCurrentGraphTitle: 'graph/setCurrentGraphTitle'
    }),
    handleOk: function () {
      let val = $('.sections.active').first().attr('id')
      let graphId = $('#' + val + 'graphs option:selected').val()
      if (graphId !== undefined) {
        this.help(val, graphId)
      }
      this.hide()
    },
    openView: function (view) {
      $('.graphviews').addClass('hiddenView')
      $('#' + view).removeClass('hiddenView')
    }
  },
  mounted () {
    $('.sections').click(function () {
      $('.active').removeClass('active')
      $(this).addClass('active')
    })

    this.updateRootGraphs()
    this.updateUserGraphs()
  }
}
</script>
console.log("*******************************GHAGFKEJKBFJKHEBFJKEBFJKLBELKFBRKLSFBRKLFBRRKLJWBSLKFB")

<style scoped>
  .hiddenView{
    display: none;
  }
</style>

