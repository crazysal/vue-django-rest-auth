export default {
  name: 'chemml.wrapper.preprocessing',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [],
  nodes: [
    {
      name: 'SplitColumns',
      docstring: '\n    This method splits a data matrix by columns.',
      inputs: [
        {
          name: 'selection',
          docstring:
            "if positive integer, it's the number of columns to be selected from left side of dataframe and returns as first data frame (df1). if negative integer, it's the number of columns to be selected from right side of dataframe and returns as first data frame (df1).",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1',
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
          name: 'fit',
          display_name: 'split_columns',
          docstring:
            '\n        The main function to split the input dataframe.',
          inputs: [
            {
              name: 'X',
              docstring: 'the input array',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'X1',
              docstring: 'Left part of the split data matrix',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'X2',
              docstring: 'Right part of the split data matrix',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    }
  ],
  library: 'chemml',
  module: 'wrapper.preprocessing'
}
