<template>
  <div id="app">
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />    
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'App',
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Profit'],
        ['2014', 1200],
        ['2015', 1250],
        ['2016', 6300],
        ['2017', 1300]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      }
    }
  }
}
</script>