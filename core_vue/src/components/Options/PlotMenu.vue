<template>
     <div>  
         <h3>Plot the graph</h3>  
         <div id="parameters" class="form-group ">    
           
            <div class="form-group">
                <label >  Axis </label>
                <basic-select                    
                    :options="axisParametersX"
                    :selectedOption="axisX"
                    placeholder="Choose"
                    @select="onSelectAxisX"
                    class="col-md-8 center"
                    >
                </basic-select>
            </div>
              <div class="form-group">
                <basic-select
                    :options="axisParametersY"
                    :selectedOption="axisY"  
                    placeholder="Choose"
                    @select="onSelectAxisY"
                    class="col-md-8 center"
                    >
                </basic-select>
            </div>       
           
             <div>
            </div> 

         </div>
    </div>
</template>
<style scoped>
</style>
<script>
 import {mapGetters, mapActions} from 'vuex'
import { BasicSelect } from 'vue-search-select'
export default {
   name: 'PlotMenu',
   data () {
     return {
 
       axisX: {
         value: '',
         text: ''
       },
       axisY: {}
     }
   },
   components: {
     BasicSelect
   },
   methods: {
     ...mapActions(['fetchAxisParameters', 'updateAxisX', 'updateAxisY']),
     onSelectAxisX (item) {
       this.axisX = item
       this.updateAxisX(item)
     },
     onSelectAxisY (item) {
       this.axisY = item
       this.updateAxisY(item)
     }
   },
   computed: mapGetters(['axisParametersX', 'axisParametersY']),
   created () {
     this.fetchAxisParameters()
   }
}
</script>
