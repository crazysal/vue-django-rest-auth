<template>
<div class='panel panel-sm'>
      <div class='panel-heading'> 
        <h4>CSV Import</h4>
      </div>
      <div class='panel-body'>
        <div class='form-group'>
          <label for='csv_file' class='control-label col-sm-3 text-right'>CSV file to import</label>
          <div class='col-sm-9'>
            <input type='file' id='csv_file' name='csv_file' class='form-control' @change='loadCSV($event)'>
          </div>
        </div>
        <div class='col-sm-offset-3 col-sm-9'>
          <div class='checkbox-inline'>
            <label for='header_rows'><input type='checkbox' id='header_rows'> File contains header row?</label>
          </div>
        </div>
        
        <div class='col-sm-12'>
          <button class='btn btn-primary' v-on:click='selecTion(1)'>Parse CSV</button>
          <button class='btn btn-primary' v-on:click='selecTion(2)'>Get EDA</button>
          <button class='btn btn-primary' v-on:click='selecTion(3)'>Line Plot</button>
          <button class='btn btn-primary' v-on:click='selecTion(4)'>Bar Plot</button>
          <button class='btn btn-primary' v-on:click='selecTion(5)'>Scatter Plot</button>
        </div>
        
        <div v-if='!selec1ted'>
          <table v-if='parse_csv'>
            <thead>
              <tr>
                <th v-for='key in parse_header'
                    @click='sortBy(key)'
                    :class='{ active: sortKey == key }'>
                  {{ key | capitalize }}
                  
                </th>
              </tr>
            </thead> 
            <tr v-for='csv in parse_csv'>
              <td v-for='key in parse_header'>
                {{csv[key]}}
              </td>
            </tr>
          </table> 
        </div>
        <div v-if='!selec2ted'>
          <div class='panel'>
          <table>
            <th> Column
            </th>
            <th>  Min - Max
            </th>
            <th> Average
            </th>
            <th> Median
            </th>
            <th>  Standard Deviation
            </th>
            <tr v-for='col in eda'>
              <td v-for='c in col'>
                {{c}}
              </td>
            </tr>
          </table>
          </div>
        </div>
        <div v-if='!selec3ted'>
          <span class='Strong'> Select axis to plot </span>
          <div class='col-sm-3'>
            X Axis<b-form-select v-model="s1selected" :options="parse_header" @change='Plot($event, null)'></b-form-select>
           </div> 
          <div class='col-sm-3'>
            Y Axis<b-form-select v-model="s2selected" :options="parse_header" @change='Plot(null, $event)'></b-form-select>
           </div>
           <div class='panel'> 
           <vue-plotly :data="ata" :layout=layout :options=options />   
           </div> 
        </div>
        <div v-if='!selec4ted'>
          <span class='Strong'> Select axis to plot </span>
          <div class='col-sm-3'>
            X Axis<b-form-select v-model="s1selected" :options="parse_header" @change='Plot($event, null)'></b-form-select>
           </div> 
          <div class='col-sm-3'>
            Y Axis<b-form-select v-model="s2selected" :options="parse_header" @change='Plot(null, $event)'></b-form-select>
           </div>
           <div class='panel'> 
           <vue-plotly :data="ata" :layout=layout :options=options />   
           </div> 
        </div>
        <div v-if='!selec5ted'>
          <span class='Strong'> Select axis to plot </span>
          <div class='col-sm-3'>
            X Axis<b-form-select v-model="s1selected" :options="parse_header" @change='Plot($event, null)'></b-form-select>
           </div> 
          <div class='col-sm-3'>
            Y Axis<b-form-select v-model="s2selected" :options="parse_header" @change='Plot(null, $event)'></b-form-select>
           </div>
           <div class='panel'> 
           <vue-plotly :data="ata" :layout=layout :options=options />   
           </div> 
        </div>
      </div>
    </div>
</template>

<script>
// import { mapGetters, mapMutations } from 'vuex'
// import _ from 'lodash'
// import $ from 'jquery'
import VuePlotly from '@statnett/vue-plotly'
import * as d3 from 'd3'
// import * as Plotly from 'plotly.js'
var plotly = require('plotly')
console.log(plotly)
export default {
  name: 'visual',
  components: {
    VuePlotly
  },
  data () {
    return {
      ata: [{ 'x': [1, 3], 'y': [2, 4] }],
      layout: {'mode': 'markers'},
      options: {'type': 'scatter'},
      s1selected: null,
      s2selected: null,
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      eda: [],
      rawData: [],
      sortOrders: {},
      sortKey: '',
      selec1ted: false,
      selec2ted: true,
      selec3ted: true,
      selec4ted: true,
      selec5ted: true
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON (csv) {
      var vm = this
      var lines = csv.split('\n')
      var result = []
      var headers = lines[0].split(',')
      vm.parse_header = lines[0].split(',')
      lines[0].split(',').forEach(function (key) {
        vm.sortOrders[key] = 1
      })
      lines.map(function (line, indexLine) {
        if (indexLine < 1) return // Jump header line
        var obj = {}
        var currentline = line.split(',')
        headers.map(function (header, indexHeader) {
          obj[header] = currentline[indexHeader]
        })
        result.push(obj)
      })
      result.pop() // remove the last item because undefined values
      return result // JavaScript object
    },
    doEDA (csv) {
      var lines = csv.split('\n')
      var totalRec = lines.length - 2
      var headers = lines[0].split(',')
      var totalCol = headers.length - 1
      var data = []
      for (var i = 1; i < totalRec; i++) {
        var currentline = lines[i].split(',')
        var dataObj = {}
        for (var j = 0; j < totalCol; j++) {
          if (Number.isNaN(parseInt(currentline[j]))) {
            dataObj[headers[j]] = currentline[j]
          } else {
            dataObj[headers[j]] = parseFloat(currentline[j])
          }
        }
        data.push(dataObj)
      }
      var eda = []
      for (j = 0; j < totalCol; j++) {
        var extent = d3.extent(data, function (d) { return d[headers[j]] })
        var avg = d3.mean(data, function (d) { return d[headers[j]] })
        var med = d3.median(data, function (d) { return d[headers[j]] })
        var sD = d3.deviation(data, function (d) { return d[headers[j]] })
        eda.push({
          'Column': headers[j],
          'Min Max': extent,
          'Average': avg,
          'Median': med,
          'Standard Deviation': sD
        })
      }
      console.log('data', data)
      console.log('eda', eda)
      this.rawData.push(data)
      return eda
    },
    loadCSV (e) {
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader()
        reader.readAsText(e.target.files[0])
        // Handle errors load
        reader.onload = function (event) {
          var csv = event.target.result
          vm.parse_csv = vm.csvJSON(csv)
          vm.eda = vm.doEDA(csv)
          console.log(vm.parse_csv[0])
        }
        reader.onerror = function (evt) {
          if (evt.target.error.name === 'NotReadableError') {
            alert('Can not read file !')
          }
        }
      } else {
        alert('FileReader are not supported in this browser.')
      }
    },
    selecTion (e) {
      this.selec1ted = true
      this.selec2ted = true
      this.selec3ted = true
      this.selec4ted = true
      this.selec5ted = true
      var chng = 'selec' + e + 'ted'
      this[chng] = false
    },
    Plot (x, y, type) {
      var rdd = this.rawData[0]
      if (x) {
        var xx = []
        for (var l = 0; l < rdd.length; l++) {
          xx.push(rdd[l][x])
        }
        this.ata[0]['x'] = xx
      }
      if (y) {
        var yy = []
        for (var k = 0; k < rdd.length; k++) {
          yy.push(rdd[k][y])
        }
        this.ata[0]['y'] = yy
      }
    }
  }

}
</script>

<style scoped>
.custom-control-input{
  left: 2px;
  top: 6px;
  z-index: 1;
}
html, body {
  margin: 0;
  padding: 0;
}
body {
  margin: 32px auto;
}
.panel {
  border: 2px solid #dfdfdf;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 0 0;
  margin: 10px;
} 
.panel.panel-sm {
  max-width: 700px;
  margin: 10px auto;
}
.panel-heading {
  border-bottom: 2px solid #dfdfdf;
}
.panel-heading h1, .panel-heading h2, .panel-heading h3, .panel-heading h4, .panel-heading h5, .panel-heading h6 {
  margin: 0;
  padding: 0;
}
.panel-body .checkbox-inline {
  padding: 15px 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
