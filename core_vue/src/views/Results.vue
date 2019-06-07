<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <c-table striped caption="<i class='fa fa-align-justify'></i> Executions"></c-table>
      </b-col><!--/.col-->
    </b-row><!--/.row-->

  </div>

</template>

<script>
  import cTable from './Table.vue'

  export default {
    name: 'tables',
    components: {cTable}
  }
</script>
