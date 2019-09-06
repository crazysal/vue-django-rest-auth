export default {
  name: 'chemml.wrapper.visualization',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [],
  nodes: [
    {
      name: 'VisualizeRegression',
      docstring:
        'Module to visualize predictions and ground truth score for regression tasks. Use the plot function to create and save an image of the plot.',
      inputs: [
        {
          name: 'filepath',
          docstring: 'Path to store the output plot',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'r_square.png',
          options: null
        }
      ],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'plot',
          display_name: 'plot',
          docstring:
            'Method to plot predicted values vs. ground truth and compute R^2 score.',
          inputs: [
            {
              name: 'truth',
              docstring: 'Ground Truth Values',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'prediction',
              docstring: 'Predictions corresponding to ground truth',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    }
  ],
  library: 'chemml',
  module: 'wrapper.visualization'
}
