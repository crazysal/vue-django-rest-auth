<template>
  <div class="animated fadeIn">
    <!--/.row-->

    <b-row>
      <b-col lg="12">
        <h1>MaDE@UB Machine Learning Toolkit</h1>
<h3>A toolkit to train and test statistical models from user defined data flows with a focus on data and methods from chemical and materials sciences.</h3>
    <b-row>
      <b-col sm="4">
        <b-img height=250 src="https://madeatub.buffalo.edu/mltk/static/img/banner.png" rounded alt="Banner"></b-img>
      </b-col>  
    </b-row>
<p>Welcome! Our ML Toolkit provides an online web application for desigining Machine Learning (ML) models without needing to have in-depth knowledge of programming.</p>
<p>The app just needs a user to provide input data and define data processing operations via nodes and edges on a graph. Each node corresponds to a module that takes in data as input, performs an operation and emits processed data as output. Connections between modules (edges) enable transfer of data.</p>
<p>Modules are taken from popular third-party machine learning packages such as <a href="https://scikit-learn.org/stable/">scikit-learn</a>, <a href="https://keras.io/">keras</a> and <a href="https://www.tensorflow.org/">tensorflow</a>. Modules for organic/inorganic data come from RDKit, Dragon and Magpie. We use <a href="https://github.com/hachmannlab/chemml">ChemML</a> in the background to handle running the ML tasks.</p>
<p>After completing a graph, the user can hit "run" and sit back while the results are computed. We provide resources to handle multiple experiments, so you can choose and compare from different ML models with a few clicks and see what works best for your data!</p>
<p>To get started:</p>
<ol>
<li>Go to <a href="https://madeatub.buffalo.edu/mltoolkit/#/dashboard">Dashboard</a> by clicking the link on the left pane.</li>
<li>We recommend starting from a pre-defined template where common data-flow operations have been set up, for example, splitting a training set into train and test, preprocessing by standard scaling. You can access the list of available templates using the button on the top right of your dashboard.</li>
<li>Make changes to the templates to suit your data. You can right click on any node to alter its properties. If you wish to use a new module right click on an empty part of the canvas to choose a node. Drawing an edge between nodes connects them and enables data transfer between the two modules - the edge UI wizard will help you transfer the data matrices in the right way.</li>
<li>Advanced users can also start from a blank canvas, create custom data flow graphs and save it for future use!</li>
<li>After creating a graph and setting up all node properties click on red button to run graph (top right of the dashboard). Multiple graphs can be run asynchronously in the background. Look in the <a href="https://madeatub.buffalo.edu/mltoolkit/#/results">Results</a> page (see left pane) to download any output files, plots or intermediate data.</li>
</ol>
        </p>  
      </b-col><!--/.col-->
    </b-row>

  </div>

</template>
 