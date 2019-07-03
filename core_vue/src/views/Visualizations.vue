<template>
  <div class="row">
    <div class="col-lg-9">
     <div ref="chart" class="chart"></div>
    </div>
    <div class="col-lg-3">
    <PlotMenu/>
    </div>
  </div>

</template>

<script>
import ApexCharts from 'apexcharts'
import PlotMenu from '../components/Options/PlotMenu'
import {mapGetters} from 'vuex'

export default {
  name: 'Visualizations',
  components: {
    PlotMenu
  },
  chart: {},
  mounted () {
    var options = {
      chart: {
        id: 'mychart',
        type: 'area',
        animations: {
          speed: 200
        }
      },
      series: [{
        name: 'X axis',
        data: []
      }],
      xaxis: {
        type: 'datetime',
        categories: []
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        show: true,
        y: {
          formatter: function (val) {
            return val
          }
        },
        x: {
          formatter: function (val) {
            return val
          }
        }
      }
    }

    if (this.$refs.chart) {
    //   console.log(options)
      this.chart = new ApexCharts(this.$refs.chart, options)
      this.chart.render()
    }
  },
  computed: mapGetters(['listXY']),
  watch: {
    listXY: { handler: function (val) {
      if (this.$refs.chart) {
        ApexCharts.exec('mychart', 'updateSeries', [{
          data: val
        }], true)
      }
    },
    immediate: true
    }
    // cateX: { handler: function (val) {
    //   if (this.$refs.chart) {
    //     ApexCharts.exec('mychart', 'updateOptions', {
    //       xaxis: {
    //       }
    //     }, false, true)
    //   }
    // },
    // immediate: true
    // }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.chart {
  width: 100%;
}
</style>
