<template>
  <b-modal title="Add Node" v-model="myModal" @ok="handleOk()" @cancel="hide()" hide-header-close>
   <div>
      <template v-for='(stage, key1) in libHierarchy'>
        <b-form-group
          :label="key1"
          label-for="radios"
          :label-cols="3"
          :horizontal="true">
          <b-form-radio-group
            id="radios"
            name="radiosInline">
            <div v-for='(element, key2) in stage' class="custom-control custom-radio custom-control-inline">
              {{stage["name"]}}
              <input type="radio" :id=key2 name="radiosInline" class="custom-control-input" :value=JSON.stringify(element) :key1=key1 :key2=key2>
              
              <label class="custom-control-label" for="radiosInline">{{key2}}</label>
            </div>
          </b-form-radio-group>
        </b-form-group>
      </template>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import $ from 'jquery'
import utils from '../_utils'

export default {
  name: 'addNode',
  data () {
    return {
      info: 'Asdf'
    }
  },
  computed: {
    ...mapGetters({
      visible: 'addNodeVisible',
      clickPos: 'cyClickPos',
      libHierarchy: 'libHierarchy',
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
      show: 'showAddNode',
      hide: 'hideAddNode',
      shownext: 'showEditNode',
      setSelectedNodeId: 'setSelectedNodeId',
      setSelectedNodeElem: 'setSelectedNodeElem'
    }),
    handleOk: function () {
      let $selected = $('input[name=radiosInline]:checked')
      this.addNode(JSON.parse($selected.val()), $selected.attr('key1'), $selected.attr('key2'))

      let ele = document.getElementsByName('radiosInline')
      for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false
      }

      this.hide()
      this.shownext()
    },
    addNode: function (elem, key1, key2) {
      const name = key1 + ' : ' + key2
      const newNode = {
        group: 'nodes',
        data: {id: utils.guid(), name: name, info: elem},
        position: {x: this.clickPos.x, y: this.clickPos.y}
      }
      this.setSelectedNodeId(newNode.data.id)
      this.setSelectedNodeElem(newNode)
      this.cy.add(newNode)
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
