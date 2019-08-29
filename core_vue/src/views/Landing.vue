<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <h1>Welcome to ML GuI</h1>
        <h3>Building ML models from user defined computational graphs !</h3>
        <p>ML GuI provides an online web application based utility for desigining Machine Learning Models for generic users without nedding to have indepth knowledge of coding required.</p>  
        <p>Built as a wrapper around <a href="#">ChemML</a> and a separate visualisation module - the app just needs a user to define the graphs. Rest is taken care dynamically. </p>
        <p>Steps to define a graph : 
          <ol>
            <li>
              Go to Dashboard
            </li>
            <li>
              Load a pre saved template or if starting from scratch design your own - Right Click on canvas to add node and follow prompt to add node properties
            </li>
            <li>
              To save as templates for further use, the current graph must be saved by root user. It is then available to all users for loading as template.
            </li>
            <li>
              After Defining a graph and setting up all node properties click on red button to run graph. Multiple Graphs can be run asynchronously in the background. 
               
            </li>
          </ol>
        </p>  
      </b-col><!--/.col-->
    </b-row>
    <b-row>
      <b-col lg="10">
        <b-img height=280 src="static/img/banner.png" rounded alt="Banner"></b-img>
      </b-col>  
    </b-row>
    <!--/.row-->

  </div>

</template>

<script>
  console.log('from inside landing.vue')
</script>
