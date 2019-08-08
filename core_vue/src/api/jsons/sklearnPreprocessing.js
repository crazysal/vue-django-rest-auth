export default {
  name: 'sklearn.preprocessing',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'add_dummy_feature',
      docstring:
        'Augment dataset with an additional dummy feature.\n\n    This is useful for fitting an intercept term with implementations which\n    cannot otherwise fit it directly.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        Data.\n\n    value : float\n        Value to use for the dummy feature.\n\n    Returns\n    -------\n\n    X : {array, sparse matrix}, shape [n_samples, n_features + 1]\n        Same data with dummy feature added as first column.\n\n    Examples\n    --------\n\n    >>> from sklearn.preprocessing import add_dummy_feature\n    >>> add_dummy_feature([[0, 1], [1, 0]])\n    array([[1., 0., 1.],\n           [1., 1., 0.]])\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'Data.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '[n_samples, n_features]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'value',
          docstring: 'Value to use for the dummy feature.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'X',
          docstring: 'Same data with dummy feature added as first column.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          returned: true
        }
      ]
    },
    {
      name: 'binarize',
      docstring:
        'Boolean thresholding of array-like or scipy.sparse matrix\n\n    Read more in the :ref:`User Guide <preprocessing_binarization>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        The data to binarize, element by element.\n        scipy.sparse matrices should be in CSR or CSC format to avoid an\n        un-necessary copy.\n\n    threshold : float, optional (0.0 by default)\n        Feature values below or equal to this are replaced by 0, above it by 1.\n        Threshold may not be less than 0 for operations on sparse matrices.\n\n    copy : boolean, optional, default True\n        set to False to perform inplace binarization and avoid a copy\n        (if the input is already a numpy array or a scipy.sparse CSR / CSC\n        matrix and if axis is 1).\n\n    See also\n    --------\n    Binarizer: Performs binarization using the ``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n    ',
      inputs: [
        {
          name: 'X',
          docstring:
            'The data to binarize, element by element. scipy.sparse matrices should be in CSR or CSC format to avoid an un-necessary copy.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '[n_samples, n_features]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'threshold',
          docstring:
            'Feature values below or equal to this are replaced by 0, above it by 1. Threshold may not be less than 0 for operations on sparse matrices.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace binarization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR / CSC matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: []
    },
    {
      name: 'label_binarize',
      docstring:
        "Binarize labels in a one-vs-all fashion\n\n    Several regression and binary classification algorithms are\n    available in scikit-learn. A simple way to extend these algorithms\n    to the multi-class classification case is to use the so-called\n    one-vs-all scheme.\n\n    This function makes it possible to compute this transformation for a\n    fixed set of class labels known ahead of time.\n\n    Parameters\n    ----------\n    y : array-like\n        Sequence of integer labels or multilabel data to encode.\n\n    classes : array-like of shape [n_classes]\n        Uniquely holds the label for each class.\n\n    neg_label : int (default: 0)\n        Value with which negative labels must be encoded.\n\n    pos_label : int (default: 1)\n        Value with which positive labels must be encoded.\n\n    sparse_output : boolean (default: False),\n        Set to true if output binary array is desired in CSR sparse format\n\n    Returns\n    -------\n    Y : numpy array or CSR matrix of shape [n_samples, n_classes]\n        Shape will be [n_samples, 1] for binary problems.\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import label_binarize\n    >>> label_binarize([1, 6], classes=[1, 2, 4, 6])\n    array([[1, 0, 0, 0],\n           [0, 0, 0, 1]])\n\n    The class ordering is preserved:\n\n    >>> label_binarize([1, 6], classes=[1, 6, 4, 2])\n    array([[1, 0, 0, 0],\n           [0, 1, 0, 0]])\n\n    Binary targets transform to a column vector\n\n    >>> label_binarize(['yes', 'no', 'no', 'yes'], classes=['no', 'yes'])\n    array([[1],\n           [0],\n           [0],\n           [1]])\n\n    See also\n    --------\n    LabelBinarizer : class used to wrap the functionality of label_binarize and\n        allow for fitting to classes independently of the transform operation\n    ",
      inputs: [
        {
          name: 'y',
          docstring: 'Sequence of integer labels or multilabel data to encode.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'classes',
          docstring: 'Uniquely holds the label for each class.',
          param_type: ['array'],
          expected_shape: '[n_classes]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'neg_label',
          docstring: 'Value with which negative labels must be encoded.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 0)'
        },
        {
          name: 'pos_label',
          docstring: 'Value with which positive labels must be encoded.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 1)'
        },
        {
          name: 'sparse_output',
          docstring:
            'Set to true if output binary array is desired in CSR sparse format',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        }
      ],
      outputs: [
        {
          name: 'Y',
          docstring: 'Shape will be [n_samples, 1] for binary problems.',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'maxabs_scale',
      docstring:
        'Scale each feature to the [-1, 1] range without breaking the sparsity.\n\n    This estimator scales each feature individually such\n    that the maximal absolute value of each feature in the\n    training set will be 1.0.\n\n    This scaler can also be applied to sparse CSR or CSC matrices.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        The data.\n\n    axis : int (0 by default)\n        axis used to scale along. If 0, independently scale each feature,\n        otherwise (if 1) scale each sample.\n\n    copy : boolean, optional, default is True\n        Set to False to perform inplace scaling and avoid a copy (if the input\n        is already a numpy array).\n\n    See also\n    --------\n    MaxAbsScaler: Performs scaling to the [-1, 1] range using the``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded to compute the statistics,\n    and maintained during the data transformation.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to scale along. If 0, independently scale each feature, otherwise (if 1) scale each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ')'
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace scaling and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: []
    },
    {
      name: 'minmax_scale',
      docstring:
        'Transforms features by scaling each feature to a given range.\n\n    This estimator scales and translates each feature individually such\n    that it is in the given range on the training set, i.e. between\n    zero and one.\n\n    The transformation is given by (when ``axis=0``)::\n\n        X_std = (X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0))\n        X_scaled = X_std * (max - min) + min\n\n    where min, max = feature_range.\n\n    The transformation is calculated as (when ``axis=0``)::\n\n       X_scaled = scale * X + min - X.min(axis=0) * scale\n       where scale = (max - min) / (X.max(axis=0) - X.min(axis=0))\n\n    This transformation is often used as an alternative to zero mean,\n    unit variance scaling.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    .. versionadded:: 0.17\n       *minmax_scale* function interface\n       to :class:`sklearn.preprocessing.MinMaxScaler`.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        The data.\n\n    feature_range : tuple (min, max), default=(0, 1)\n        Desired range of transformed data.\n\n    axis : int (0 by default)\n        axis used to scale along. If 0, independently scale each feature,\n        otherwise (if 1) scale each sample.\n\n    copy : boolean, optional, default is True\n        Set to False to perform inplace scaling and avoid a copy (if the input\n        is already a numpy array).\n\n    See also\n    --------\n    MinMaxScaler: Performs scaling to a given range using the``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    Notes\n    -----\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'feature_range',
          docstring: 'Desired range of transformed data.',
          param_type: ['tuple'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'axis',
          docstring:
            'axis used to scale along. If 0, independently scale each feature, otherwise (if 1) scale each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ')'
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace scaling and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: []
    },
    {
      name: 'normalize',
      docstring:
        "Scale input vectors individually to unit norm (vector length).\n\n    Read more in the :ref:`User Guide <preprocessing_normalization>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        The data to normalize, element by element.\n        scipy.sparse matrices should be in CSR format to avoid an\n        un-necessary copy.\n\n    norm : 'l1', 'l2', or 'max', optional ('l2' by default)\n        The norm to use to normalize each non zero sample (or each non-zero\n        feature if axis is 0).\n\n    axis : 0 or 1, optional (1 by default)\n        axis used to normalize the data along. If 1, independently normalize\n        each sample, otherwise (if 0) normalize each feature.\n\n    copy : boolean, optional, default True\n        set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array or a scipy.sparse\n        CSR matrix and if axis is 1).\n\n    return_norm : boolean, default False\n        whether to return the computed norms\n\n    Returns\n    -------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        Normalized input X.\n\n    norms : array, shape [n_samples] if axis=1 else [n_features]\n        An array of norms along given axis for X.\n        When X is sparse, a NotImplementedError will be raised\n        for norm 'l1' or 'l2'.\n\n    See also\n    --------\n    Normalizer: Performs normalization using the ``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    Notes\n    -----\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            'The data to normalize, element by element. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '[n_samples, n_features]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'norm',
          docstring:
            'The norm to use to normalize each non zero sample (or each non-zero feature if axis is 0).',
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to normalize the data along. If 1, independently normalize each sample, otherwise (if 0) normalize each feature.',
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_norm',
          docstring: 'whether to return the computed norms',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        }
      ],
      outputs: [
        {
          name: 'X',
          docstring: 'Normalized input X.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          returned: true
        },
        {
          name: 'norms',
          docstring:
            "An array of norms along given axis for X. When X is sparse, a NotImplementedError will be raised for norm 'l1' or 'l2'.",
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'power_transform',
      docstring:
        "\n    Power transforms are a family of parametric, monotonic transformations\n    that are applied to make data more Gaussian-like. This is useful for\n    modeling issues related to heteroscedasticity (non-constant variance),\n    or other situations where normality is desired.\n\n    Currently, power_transform supports the Box-Cox transform and the\n    Yeo-Johnson transform. The optimal parameter for stabilizing variance and\n    minimizing skewness is estimated through maximum likelihood.\n\n    Box-Cox requires input data to be strictly positive, while Yeo-Johnson\n    supports both positive or negative data.\n\n    By default, zero-mean, unit-variance normalization is applied to the\n    transformed data.\n\n    Read more in the :ref:`User Guide <preprocessing_transformer>`.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        The data to be transformed using a power transformation.\n\n    method : str\n        The power transform method. Available methods are:\n\n        - 'yeo-johnson' [1]_, works with positive and negative values\n        - 'box-cox' [2]_, only works with strictly positive values\n\n        The default method will be changed from 'box-cox' to 'yeo-johnson'\n        in version 0.23. To suppress the FutureWarning, explicitly set the\n        parameter.\n\n    standardize : boolean, default=True\n        Set to True to apply zero-mean, unit-variance normalization to the\n        transformed output.\n\n    copy : boolean, optional, default=True\n        Set to False to perform inplace computation during transformation.\n\n    Returns\n    -------\n    X_trans : array-like, shape (n_samples, n_features)\n        The transformed data.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.preprocessing import power_transform\n    >>> data = [[1, 2], [3, 2], [4, 5]]\n    >>> print(power_transform(data, method='box-cox'))  # doctest: +ELLIPSIS\n    [[-1.332... -0.707...]\n     [ 0.256... -0.707...]\n     [ 1.076...  1.414...]]\n\n    See also\n    --------\n    PowerTransformer : Equivalent transformation with the\n        ``Transformer`` API (e.g. as part of a preprocessing\n        :class:`sklearn.pipeline.Pipeline`).\n\n    quantile_transform : Maps data to a standard normal distribution with\n        the parameter `output_distribution='normal'`.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in ``fit``, and maintained\n    in ``transform``.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    References\n    ----------\n\n    .. [1] I.K. Yeo and R.A. Johnson, \"A new family of power transformations to\n           improve normality or symmetry.\" Biometrika, 87(4), pp.954-959,\n           (2000).\n\n    .. [2] G.E.P. Box and D.R. Cox, \"An Analysis of Transformations\", Journal\n           of the Royal Statistical Society B, 26, 211-252 (1964).\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'The data to be transformed using a power transformation.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            "The power transform method. Available methods are:  - 'yeo-johnson' [1]_, works with positive and negative values - 'box-cox' [2]_, only works with strictly positive values  The default method will be changed from 'box-cox' to 'yeo-johnson' in version 0.23. To suppress the FutureWarning, explicitly set the parameter.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'standardize',
          docstring:
            'Set to True to apply zero-mean, unit-variance normalization to the transformed output.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace computation during transformation.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'X_trans',
          docstring: 'The transformed data.',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'quantile_transform',
      docstring:
        "Transform features using quantiles information.\n\n    This method transforms the features to follow a uniform or a normal\n    distribution. Therefore, for a given feature, this transformation tends\n    to spread out the most frequent values. It also reduces the impact of\n    (marginal) outliers: this is therefore a robust preprocessing scheme.\n\n    The transformation is applied on each feature independently. First an\n    estimate of the cumulative distribution function of a feature is\n    used to map the original values to a uniform distribution. The obtained\n    values are then mapped to the desired output distribution using the\n    associated quantile function. Features values of new/unseen data that fall\n    below or above the fitted range will be mapped to the bounds of the output\n    distribution. Note that this transform is non-linear. It may distort linear\n    correlations between variables measured at the same scale but renders\n    variables measured at different scales more directly comparable.\n\n    Read more in the :ref:`User Guide <preprocessing_transformer>`.\n\n    Parameters\n    ----------\n    X : array-like, sparse matrix\n        The data to transform.\n\n    axis : int, (default=0)\n        Axis used to compute the means and standard deviations along. If 0,\n        transform each feature, otherwise (if 1) transform each sample.\n\n    n_quantiles : int, optional (default=1000 or n_samples)\n        Number of quantiles to be computed. It corresponds to the number\n        of landmarks used to discretize the cumulative distribution function.\n        If n_quantiles is larger than the number of samples, n_quantiles is set\n        to the number of samples as a larger number of quantiles does not give\n        a better approximation of the cumulative distribution function\n        estimator.\n\n    output_distribution : str, optional (default='uniform')\n        Marginal distribution for the transformed data. The choices are\n        'uniform' (default) or 'normal'.\n\n    ignore_implicit_zeros : bool, optional (default=False)\n        Only applies to sparse matrices. If True, the sparse entries of the\n        matrix are discarded to compute the quantile statistics. If False,\n        these entries are treated as zeros.\n\n    subsample : int, optional (default=1e5)\n        Maximum number of samples used to estimate the quantiles for\n        computational efficiency. Note that the subsampling procedure may\n        differ for value-identical sparse and dense matrices.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by np.random. Note that this is used by subsampling and smoothing\n        noise.\n\n    copy : boolean, optional, (default=\"warn\")\n        Set to False to perform inplace transformation and avoid a copy (if the\n        input is already a numpy array). If True, a copy of `X` is transformed,\n        leaving the original `X` unchanged\n\n        .. deprecated:: 0.21\n            The default value of parameter `copy` will be changed from False\n            to True in 0.23. The current default of False is being changed to\n            make it more consistent with the default `copy` values of other\n            functions in :mod:`sklearn.preprocessing.data`. Furthermore, the\n            current default of False may have unexpected side effects by\n            modifying the value of `X` inplace\n\n    Returns\n    -------\n    Xt : ndarray or sparse matrix, shape (n_samples, n_features)\n        The transformed data.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.preprocessing import quantile_transform\n    >>> rng = np.random.RandomState(0)\n    >>> X = np.sort(rng.normal(loc=0.5, scale=0.25, size=(25, 1)), axis=0)\n    >>> quantile_transform(X, n_quantiles=10, random_state=0, copy=True)\n    ... # doctest: +ELLIPSIS\n    array([...])\n\n    See also\n    --------\n    QuantileTransformer : Performs quantile-based scaling using the\n        ``Transformer`` API (e.g. as part of a preprocessing\n        :class:`sklearn.pipeline.Pipeline`).\n    power_transform : Maps data to a normal distribution using a\n        power transformation.\n    scale : Performs standardization that is faster, but less robust\n        to outliers.\n    robust_scale : Performs robust standardization that removes the influence\n        of outliers but does not put outliers and inliers on the same scale.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in fit, and maintained in\n    transform.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'The data to transform.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'axis',
          docstring:
            'Axis used to compute the means and standard deviations along. If 0, transform each feature, otherwise (if 1) transform each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0)'
        },
        {
          name: 'n_quantiles',
          docstring:
            'Number of quantiles to be computed. It corresponds to the number of landmarks used to discretize the cumulative distribution function. If n_quantiles is larger than the number of samples, n_quantiles is set to the number of samples as a larger number of quantiles does not give a better approximation of the cumulative distribution function estimator.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'output_distribution',
          docstring:
            "Marginal distribution for the transformed data. The choices are 'uniform' (default) or 'normal'.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'ignore_implicit_zeros',
          docstring:
            'Only applies to sparse matrices. If True, the sparse entries of the matrix are discarded to compute the quantile statistics. If False, these entries are treated as zeros.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'subsample',
          docstring:
            'Maximum number of samples used to estimate the quantiles for computational efficiency. Note that the subsampling procedure may differ for value-identical sparse and dense matrices.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by np.random. Note that this is used by subsampling and smoothing noise.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace transformation and avoid a copy (if the input is already a numpy array). If True, a copy of `X` is transformed, leaving the original `X` unchanged  .. deprecated:: 0.21     The default value of parameter `copy` will be changed from False     to True in 0.23. The current default of False is being changed to     make it more consistent with the default `copy` values of other     functions in :mod:`sklearn.preprocessing.data`. Furthermore, the     current default of False may have unexpected side effects by     modifying the value of `X` inplace',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'Xt',
          docstring: 'The transformed data.',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'robust_scale',
      docstring:
        'Standardize a dataset along any axis\n\n    Center to the median and component wise scale\n    according to the interquartile range.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    Parameters\n    ----------\n    X : array-like\n        The data to center and scale.\n\n    axis : int (0 by default)\n        axis used to compute the medians and IQR along. If 0,\n        independently scale each feature, otherwise (if 1) scale\n        each sample.\n\n    with_centering : boolean, True by default\n        If True, center the data before scaling.\n\n    with_scaling : boolean, True by default\n        If True, scale the data to unit variance (or equivalently,\n        unit standard deviation).\n\n    quantile_range : tuple (q_min, q_max), 0.0 < q_min < q_max < 100.0\n        Default: (25.0, 75.0) = (1st quantile, 3rd quantile) = IQR\n        Quantile range used to calculate ``scale_``.\n\n        .. versionadded:: 0.18\n\n    copy : boolean, optional, default is True\n        set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array or a scipy.sparse\n        CSR matrix and if axis is 1).\n\n    Notes\n    -----\n    This implementation will refuse to center scipy.sparse matrices\n    since it would make them non-sparse and would potentially crash the\n    program with memory exhaustion problems.\n\n    Instead the caller is expected to either set explicitly\n    `with_centering=False` (in that case, only variance scaling will be\n    performed on the features of the CSR matrix) or to call `X.toarray()`\n    if he/she expects the materialized dense array to fit in memory.\n\n    To avoid memory copy the caller should pass a CSR matrix.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    See also\n    --------\n    RobustScaler: Performs centering and scaling using the ``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data to center and scale.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to compute the medians and IQR along. If 0, independently scale each feature, otherwise (if 1) scale each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ')'
        },
        {
          name: 'with_centering',
          docstring: 'If True, center the data before scaling.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'with_scaling',
          docstring:
            'If True, scale the data to unit variance (or equivalently, unit standard deviation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'quantile_range',
          docstring:
            'Default: (25.0, 75.0) = (1st quantile, 3rd quantile) = IQR Quantile range used to calculate ``scale_``.  .. versionadded:: 0.18',
          param_type: ['tuple'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: []
    },
    {
      name: 'scale',
      docstring:
        'Standardize a dataset along any axis\n\n    Center to the mean and component wise scale to unit variance.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}\n        The data to center and scale.\n\n    axis : int (0 by default)\n        axis used to compute the means and standard deviations along. If 0,\n        independently standardize each feature, otherwise (if 1) standardize\n        each sample.\n\n    with_mean : boolean, True by default\n        If True, center the data before scaling.\n\n    with_std : boolean, True by default\n        If True, scale the data to unit variance (or equivalently,\n        unit standard deviation).\n\n    copy : boolean, optional, default True\n        set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array or a scipy.sparse\n        CSC matrix and if axis is 1).\n\n    Notes\n    -----\n    This implementation will refuse to center scipy.sparse matrices\n    since it would make them non-sparse and would potentially crash the\n    program with memory exhaustion problems.\n\n    Instead the caller is expected to either set explicitly\n    `with_mean=False` (in that case, only variance scaling will be\n    performed on the features of the CSC matrix) or to call `X.toarray()`\n    if he/she expects the materialized dense array to fit in memory.\n\n    To avoid memory copy the caller should pass a CSC matrix.\n\n    NaNs are treated as missing values: disregarded to compute the statistics,\n    and maintained during the data transformation.\n\n    We use a biased estimator for the standard deviation, equivalent to\n    `numpy.std(x, ddof=0)`. Note that the choice of `ddof` is unlikely to\n    affect model performance.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    See also\n    --------\n    StandardScaler: Performs scaling to unit variance using the``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data to center and scale.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to compute the means and standard deviations along. If 0, independently standardize each feature, otherwise (if 1) standardize each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ')'
        },
        {
          name: 'with_mean',
          docstring: 'If True, center the data before scaling.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'with_std',
          docstring:
            'If True, scale the data to unit variance (or equivalently, unit standard deviation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSC matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: []
    }
  ],
  nodes: [
    {
      name: 'Binarizer',
      docstring:
        'Binarize data (set feature values to 0 or 1) according to a threshold\n\n    Values greater than the threshold map to 1, while values less than\n    or equal to the threshold map to 0. With the default threshold of 0,\n    only positive values map to 1.\n\n    Binarization is a common operation on text count data where the\n    analyst can decide to only consider the presence or absence of a\n    feature rather than a quantified number of occurrences for instance.\n\n    It can also be used as a pre-processing step for estimators that\n    consider boolean random variables (e.g. modelled using the Bernoulli\n    distribution in a Bayesian setting).\n\n    Read more in the :ref:`User Guide <preprocessing_binarization>`.\n\n    Parameters\n    ----------\n    threshold : float, optional (0.0 by default)\n        Feature values below or equal to this are replaced by 0, above it by 1.\n        Threshold may not be less than 0 for operations on sparse matrices.\n\n    copy : boolean, optional, default True\n        set to False to perform inplace binarization and avoid a copy (if\n        the input is already a numpy array or a scipy.sparse CSR matrix).\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import Binarizer\n    >>> X = [[ 1., -1.,  2.],\n    ...      [ 2.,  0.,  0.],\n    ...      [ 0.,  1., -1.]]\n    >>> transformer = Binarizer().fit(X)  # fit does nothing.\n    >>> transformer\n    Binarizer(copy=True, threshold=0.0)\n    >>> transformer.transform(X)\n    array([[1., 0., 1.],\n           [1., 0., 0.],\n           [0., 1., 0.]])\n\n    Notes\n    -----\n    If the input is a sparse matrix, only the non-zero values are subject\n    to update by the Binarizer class.\n\n    This estimator is stateless (besides constructor parameters), the\n    fit method does nothing but is useful when used in a pipeline.\n\n    See also\n    --------\n    binarize: Equivalent function without the estimator API.\n    ',
      inputs: [
        {
          name: 'threshold',
          docstring:
            'Feature values below or equal to this are replaced by 0, above it by 1. Threshold may not be less than 0 for operations on sparse matrices.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace binarization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
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
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Do nothing and return the estimator unchanged\n\n        This method is just there to implement the usual API and hence\n        work in pipelines.\n\n        Parameters\n        ----------\n        X : array-like\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Binarize each element of X\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape [n_samples, n_features]\n            The data to binarize, element by element.\n            scipy.sparse matrices should be in CSR format to avoid an\n            un-necessary copy.\n\n        copy : bool\n            Copy the input X or not.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to binarize, element by element. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy',
              docstring: 'Copy the input X or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'FunctionTransformer',
      docstring:
        'Constructs a transformer from an arbitrary callable.\n\n    A FunctionTransformer forwards its X (and optionally y) arguments to a\n    user-defined function or function object and returns the result of this\n    function. This is useful for stateless transformations such as taking the\n    log of frequencies, doing custom scaling, etc.\n\n    Note: If a lambda is used as the function, then the resulting\n    transformer will not be pickleable.\n\n    .. versionadded:: 0.17\n\n    Read more in the :ref:`User Guide <function_transformer>`.\n\n    Parameters\n    ----------\n    func : callable, optional default=None\n        The callable to use for the transformation. This will be passed\n        the same arguments as transform, with args and kwargs forwarded.\n        If func is None, then func will be the identity function.\n\n    inverse_func : callable, optional default=None\n        The callable to use for the inverse transformation. This will be\n        passed the same arguments as inverse transform, with args and\n        kwargs forwarded. If inverse_func is None, then inverse_func\n        will be the identity function.\n\n    validate : bool, optional default=True\n        Indicate that the input X array should be checked before calling\n        ``func``. The possibilities are:\n\n        - If False, there is no input validation.\n        - If True, then X will be converted to a 2-dimensional NumPy array or\n          sparse matrix. If the conversion is not possible an exception is\n          raised.\n\n        .. deprecated:: 0.20\n           ``validate=True`` as default will be replaced by\n           ``validate=False`` in 0.22.\n\n    accept_sparse : boolean, optional\n        Indicate that func accepts a sparse matrix as input. If validate is\n        False, this has no effect. Otherwise, if accept_sparse is false,\n        sparse matrix inputs will cause an exception to be raised.\n\n    pass_y : bool, optional default=False\n        Indicate that transform should forward the y argument to the\n        inner callable.\n\n        .. deprecated:: 0.19\n\n    check_inverse : bool, default=True\n       Whether to check that or ``func`` followed by ``inverse_func`` leads to\n       the original inputs. It can be used for a sanity check, raising a\n       warning when the condition is not fulfilled.\n\n       .. versionadded:: 0.20\n\n    kw_args : dict, optional\n        Dictionary of additional keyword arguments to pass to func.\n\n    inv_kw_args : dict, optional\n        Dictionary of additional keyword arguments to pass to inverse_func.\n\n    ',
      inputs: [
        {
          name: 'func',
          docstring:
            'The callable to use for the transformation. This will be passed the same arguments as transform, with args and kwargs forwarded. If func is None, then func will be the identity function.',
          param_type: ['callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'inverse_func',
          docstring:
            'The callable to use for the inverse transformation. This will be passed the same arguments as inverse transform, with args and kwargs forwarded. If inverse_func is None, then inverse_func will be the identity function.',
          param_type: ['callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'validate',
          docstring:
            'Indicate that the input X array should be checked before calling ``func``. The possibilities are:  - If False, there is no input validation. - If True, then X will be converted to a 2-dimensional NumPy array or   sparse matrix. If the conversion is not possible an exception is   raised.  .. deprecated:: 0.20    ``validate=True`` as default will be replaced by    ``validate=False`` in 0.22.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'accept_sparse',
          docstring:
            'Indicate that func accepts a sparse matrix as input. If validate is False, this has no effect. Otherwise, if accept_sparse is false, sparse matrix inputs will cause an exception to be raised.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pass_y',
          docstring:
            'Indicate that transform should forward the y argument to the inner callable.  .. deprecated:: 0.19',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'check_inverse',
          docstring:
            'Whether to check that or ``func`` followed by ``inverse_func`` leads to the original inputs. It can be used for a sanity check, raising a warning when the condition is not fulfilled.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'kw_args',
          docstring:
            'Dictionary of additional keyword arguments to pass to func.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'inv_kw_args',
          docstring:
            'Dictionary of additional keyword arguments to pass to inverse_func.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
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
          name: '_check_input',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_check_inverse_transform',
          docstring: 'Check that func and inverse_func are the inverse.',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_transform',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit transformer by checking X.\n\n        If ``validate`` is ``True``, ``X`` will be checked.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Input array.\n\n        Returns\n        -------\n        self\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Input array.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Transform X using the inverse function.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Input array.\n\n\n\n        Returns\n        -------\n        X_out : array-like, shape (n_samples, n_features)\n            Transformed input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Input array.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_out',
              docstring: 'Transformed input.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Transform X using the forward function.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Input array.\n\n\n\n        Returns\n        -------\n        X_out : array-like, shape (n_samples, n_features)\n            Transformed input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Input array.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_out',
              docstring: 'Transformed input.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'Imputer',
      docstring:
        'Imputation transformer for completing missing values.\n\n    Read more in the :ref:`User Guide <imputation>`.\n\n    Parameters\n    ----------\n    missing_values : integer or "NaN", optional (default="NaN")\n        The placeholder for the missing values. All occurrences of\n        `missing_values` will be imputed. For missing values encoded as np.nan,\n        use the string value "NaN".\n\n    strategy : string, optional (default="mean")\n        The imputation strategy.\n\n        - If "mean", then replace missing values using the mean along\n          the axis.\n        - If "median", then replace missing values using the median along\n          the axis.\n        - If "most_frequent", then replace missing using the most frequent\n          value along the axis.\n\n    axis : integer, optional (default=0)\n        The axis along which to impute.\n\n        - If `axis=0`, then impute along columns.\n        - If `axis=1`, then impute along rows.\n\n    verbose : integer, optional (default=0)\n        Controls the verbosity of the imputer.\n\n    copy : boolean, optional (default=True)\n        If True, a copy of X will be created. If False, imputation will\n        be done in-place whenever possible. Note that, in the following cases,\n        a new copy will always be made, even if `copy=False`:\n\n        - If X is not an array of floating values;\n        - If X is sparse and `missing_values=0`;\n        - If `axis=0` and X is encoded as a CSR matrix;\n        - If `axis=1` and X is encoded as a CSC matrix.\n\n    Attributes\n    ----------\n    statistics_ : array of shape (n_features,)\n        The imputation fill value for each feature if axis == 0.\n\n    Notes\n    -----\n    - When ``axis=0``, columns which only contained missing values at `fit`\n      are discarded upon `transform`.\n    - When ``axis=1``, an exception is raised if there are rows for which it is\n      not possible to fill in the missing values (e.g., because they only\n      contain missing values).\n    ',
      inputs: [
        {
          name: 'missing_values',
          docstring:
            'The placeholder for the missing values. All occurrences of `missing_values` will be imputed. For missing values encoded as np.nan, use the string value "NaN".',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'strategy',
          docstring:
            'The imputation strategy.  - If "mean", then replace missing values using the mean along   the axis. - If "median", then replace missing values using the median along   the axis. - If "most_frequent", then replace missing using the most frequent   value along the axis.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'axis',
          docstring:
            'The axis along which to impute.  - If `axis=0`, then impute along columns. - If `axis=1`, then impute along rows.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Controls the verbosity of the imputer.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'If True, a copy of X will be created. If False, imputation will be done in-place whenever possible. Note that, in the following cases, a new copy will always be made, even if `copy=False`:  - If X is not an array of floating values; - If X is sparse and `missing_values=0`; - If `axis=0` and X is encoded as a CSR matrix; - If `axis=1` and X is encoded as a CSC matrix.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'statistics_',
          docstring: 'The imputation fill value for each feature if axis == 0.',
          param_type: ['array'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring:
            'DEPRECATED: Imputer was deprecated in version 0.20 and will be removed in 0.22. Import impute.SimpleImputer from sklearn instead.',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_fit',
          docstring: 'Fit the transformer on dense data.',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_fit',
          docstring: 'Fit the transformer on sparse data.',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the imputer on X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Input data, where ``n_samples`` is the number of samples and\n            ``n_features`` is the number of features.\n\n        Returns\n        -------\n        self : Imputer\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Input data, where ``n_samples`` is the number of samples and ``n_features`` is the number of features.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Impute all missing values in X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            The input data to complete.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The input data to complete.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'KBinsDiscretizer',
      docstring:
        "Bin continuous data into intervals.\n\n    Read more in the :ref:`User Guide <preprocessing_discretization>`.\n\n    Parameters\n    ----------\n    n_bins : int or array-like, shape (n_features,) (default=5)\n        The number of bins to produce. Raises ValueError if ``n_bins < 2``.\n\n    encode : {'onehot', 'onehot-dense', 'ordinal'}, (default='onehot')\n        Method used to encode the transformed result.\n\n        onehot\n            Encode the transformed result with one-hot encoding\n            and return a sparse matrix. Ignored features are always\n            stacked to the right.\n        onehot-dense\n            Encode the transformed result with one-hot encoding\n            and return a dense array. Ignored features are always\n            stacked to the right.\n        ordinal\n            Return the bin identifier encoded as an integer value.\n\n    strategy : {'uniform', 'quantile', 'kmeans'}, (default='quantile')\n        Strategy used to define the widths of the bins.\n\n        uniform\n            All bins in each feature have identical widths.\n        quantile\n            All bins in each feature have the same number of points.\n        kmeans\n            Values in each bin have the same nearest center of a 1D k-means\n            cluster.\n\n    Attributes\n    ----------\n    n_bins_ : int array, shape (n_features,)\n        Number of bins per feature. Bins whose width are too small\n        (i.e., <= 1e-8) are removed with a warning.\n\n    bin_edges_ : array of arrays, shape (n_features, )\n        The edges of each bin. Contain arrays of varying shapes ``(n_bins_, )``\n        Ignored features will have empty arrays.\n\n    Examples\n    --------\n    >>> X = [[-2, 1, -4,   -1],\n    ...      [-1, 2, -3, -0.5],\n    ...      [ 0, 3, -2,  0.5],\n    ...      [ 1, 4, -1,    2]]\n    >>> est = KBinsDiscretizer(n_bins=3, encode='ordinal', strategy='uniform')\n    >>> est.fit(X)  # doctest: +ELLIPSIS, +NORMALIZE_WHITESPACE\n    KBinsDiscretizer(...)\n    >>> Xt = est.transform(X)\n    >>> Xt  # doctest: +SKIP\n    array([[ 0., 0., 0., 0.],\n           [ 1., 1., 1., 0.],\n           [ 2., 2., 2., 1.],\n           [ 2., 2., 2., 2.]])\n\n    Sometimes it may be useful to convert the data back into the original\n    feature space. The ``inverse_transform`` function converts the binned\n    data into the original feature space. Each value will be equal to the mean\n    of the two bin edges.\n\n    >>> est.bin_edges_[0]\n    array([-2., -1.,  0.,  1.])\n    >>> est.inverse_transform(Xt)\n    array([[-1.5,  1.5, -3.5, -0.5],\n           [-0.5,  2.5, -2.5, -0.5],\n           [ 0.5,  3.5, -1.5,  0.5],\n           [ 0.5,  3.5, -1.5,  1.5]])\n\n    Notes\n    -----\n    In bin edges for feature ``i``, the first and last values are used only for\n    ``inverse_transform``. During transform, bin edges are extended to::\n\n      np.concatenate([-np.inf, bin_edges_[i][1:-1], np.inf])\n\n    You can combine ``KBinsDiscretizer`` with\n    :class:`sklearn.compose.ColumnTransformer` if you only want to preprocess\n    part of the features.\n\n    ``KBinsDiscretizer`` might produce constant features (e.g., when\n    ``encode = 'onehot'`` and certain bins do not contain any data).\n    These features can be removed with feature selection algorithms\n    (e.g., :class:`sklearn.feature_selection.VarianceThreshold`).\n\n    See also\n    --------\n     sklearn.preprocessing.Binarizer : class used to bin values as ``0`` or\n        ``1`` based on a parameter ``threshold``.\n    ",
      inputs: [
        {
          name: 'n_bins',
          docstring:
            'The number of bins to produce. Raises ValueError if ``n_bins < 2``.',
          param_type: ['array', 'int'],
          expected_shape: '(n_features,) (default=5)',
          is_optional: true,
          default_value: '=5)'
        },
        {
          name: 'encode',
          docstring:
            'Method used to encode the transformed result.  onehot     Encode the transformed result with one-hot encoding     and return a sparse matrix. Ignored features are always     stacked to the right. onehot-dense     Encode the transformed result with one-hot encoding     and return a dense array. Ignored features are always     stacked to the right. ordinal     Return the bin identifier encoded as an integer value.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: "='onehot')"
        },
        {
          name: 'strategy',
          docstring:
            'Strategy used to define the widths of the bins.  uniform     All bins in each feature have identical widths. quantile     All bins in each feature have the same number of points. kmeans     Values in each bin have the same nearest center of a 1D k-means     cluster.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: "='quantile')"
        }
      ],
      outputs: [
        {
          name: 'n_bins_',
          docstring:
            'Number of bins per feature. Bins whose width are too small (i.e., <= 1e-8) are removed with a warning.',
          param_type: ['array', 'int'],
          returned: false
        },
        {
          name: 'bin_edges_',
          docstring:
            'The edges of each bin. Contain arrays of varying shapes ``(n_bins_, )`` Ignored features will have empty arrays.',
          param_type: ['array'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_n_bins',
          docstring:
            'Returns n_bins_, the number of bins per feature.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fits the estimator.\n\n        Parameters\n        ----------\n        X : numeric array-like, shape (n_samples, n_features)\n            Data to be discretized.\n\n        y : ignored\n\n        Returns\n        -------\n        self\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Data to be discretized.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Transforms discretized data back to original feature space.\n\n        Note that this function does not regenerate the original data\n        due to discretization rounding.\n\n        Parameters\n        ----------\n        Xt : numeric array-like, shape (n_sample, n_features)\n            Transformed data in the binned space.\n\n        Returns\n        -------\n        Xinv : numeric array-like\n            Data in the original feature space.\n        ',
          inputs: [
            {
              name: 'Xt',
              docstring: 'Transformed data in the binned space.',
              param_type: ['array'],
              expected_shape: '(n_sample, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'Xinv',
              docstring: 'Data in the original feature space.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Discretizes the data.\n\n        Parameters\n        ----------\n        X : numeric array-like, shape (n_samples, n_features)\n            Data to be discretized.\n\n        Returns\n        -------\n        Xt : numeric array-like or sparse matrix\n            Data in the binned space.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Data to be discretized.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'Xt',
              docstring: 'Data in the binned space.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'KernelCenterer',
      docstring:
        "Center a kernel matrix\n\n    Let K(x, z) be a kernel defined by phi(x)^T phi(z), where phi is a\n    function mapping x to a Hilbert space. KernelCenterer centers (i.e.,\n    normalize to have zero mean) the data without explicitly computing phi(x).\n    It is equivalent to centering phi(x) with\n    sklearn.preprocessing.StandardScaler(with_std=False).\n\n    Read more in the :ref:`User Guide <kernel_centering>`.\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import KernelCenterer\n    >>> from sklearn.metrics.pairwise import pairwise_kernels\n    >>> X = [[ 1., -2.,  2.],\n    ...      [ -2.,  1.,  3.],\n    ...      [ 4.,  1., -2.]]\n    >>> K = pairwise_kernels(X, metric='linear')\n    >>> K\n    array([[  9.,   2.,  -2.],\n           [  2.,  14., -13.],\n           [ -2., -13.,  21.]])\n    >>> transformer = KernelCenterer().fit(K)\n    >>> transformer\n    KernelCenterer()\n    >>> transformer.transform(K)\n    array([[  5.,   0.,  -5.],\n           [  0.,  14., -14.],\n           [ -5., -14.,  19.]])\n    ",
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit KernelCenterer\n\n        Parameters\n        ----------\n        K : numpy array of shape [n_samples, n_samples]\n            Kernel matrix.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'K',
              docstring: 'Kernel matrix.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Center kernel matrix.\n\n        Parameters\n        ----------\n        K : numpy array of shape [n_samples1, n_samples2]\n            Kernel matrix.\n\n        copy : boolean, optional, default True\n            Set to False to perform inplace computation.\n\n        Returns\n        -------\n        K_new : numpy array of shape [n_samples1, n_samples2]\n        ',
          inputs: [
            {
              name: 'K',
              docstring: 'Kernel matrix.',
              param_type: ['array'],
              expected_shape: '[n_samples1, n_samples2]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy',
              docstring: 'Set to False to perform inplace computation.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'K_new',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LabelBinarizer',
      docstring:
        "Binarize labels in a one-vs-all fashion\n\n    Several regression and binary classification algorithms are\n    available in scikit-learn. A simple way to extend these algorithms\n    to the multi-class classification case is to use the so-called\n    one-vs-all scheme.\n\n    At learning time, this simply consists in learning one regressor\n    or binary classifier per class. In doing so, one needs to convert\n    multi-class labels to binary labels (belong or does not belong\n    to the class). LabelBinarizer makes this process easy with the\n    transform method.\n\n    At prediction time, one assigns the class for which the corresponding\n    model gave the greatest confidence. LabelBinarizer makes this easy\n    with the inverse_transform method.\n\n    Read more in the :ref:`User Guide <preprocessing_targets>`.\n\n    Parameters\n    ----------\n\n    neg_label : int (default: 0)\n        Value with which negative labels must be encoded.\n\n    pos_label : int (default: 1)\n        Value with which positive labels must be encoded.\n\n    sparse_output : boolean (default: False)\n        True if the returned array from transform is desired to be in sparse\n        CSR format.\n\n    Attributes\n    ----------\n\n    classes_ : array of shape [n_class]\n        Holds the label for each class.\n\n    y_type_ : str,\n        Represents the type of the target data as evaluated by\n        utils.multiclass.type_of_target. Possible type are 'continuous',\n        'continuous-multioutput', 'binary', 'multiclass',\n        'multiclass-multioutput', 'multilabel-indicator', and 'unknown'.\n\n    sparse_input_ : boolean,\n        True if the input data to transform is given as a sparse matrix, False\n        otherwise.\n\n    Examples\n    --------\n    >>> from sklearn import preprocessing\n    >>> lb = preprocessing.LabelBinarizer()\n    >>> lb.fit([1, 2, 6, 4, 2])\n    LabelBinarizer(neg_label=0, pos_label=1, sparse_output=False)\n    >>> lb.classes_\n    array([1, 2, 4, 6])\n    >>> lb.transform([1, 6])\n    array([[1, 0, 0, 0],\n           [0, 0, 0, 1]])\n\n    Binary targets transform to a column vector\n\n    >>> lb = preprocessing.LabelBinarizer()\n    >>> lb.fit_transform(['yes', 'no', 'no', 'yes'])\n    array([[1],\n           [0],\n           [0],\n           [1]])\n\n    Passing a 2D matrix for multilabel classification\n\n    >>> import numpy as np\n    >>> lb.fit(np.array([[0, 1, 1], [1, 0, 0]]))\n    LabelBinarizer(neg_label=0, pos_label=1, sparse_output=False)\n    >>> lb.classes_\n    array([0, 1, 2])\n    >>> lb.transform([0, 1, 2, 1])\n    array([[1, 0, 0],\n           [0, 1, 0],\n           [0, 0, 1],\n           [0, 1, 0]])\n\n    See also\n    --------\n    label_binarize : function to perform the transform operation of\n        LabelBinarizer with fixed classes.\n    sklearn.preprocessing.OneHotEncoder : encode categorical features\n        using a one-hot aka one-of-K scheme.\n    ",
      inputs: [
        {
          name: 'neg_label',
          docstring: 'Value with which negative labels must be encoded.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 0)'
        },
        {
          name: 'pos_label',
          docstring: 'Value with which positive labels must be encoded.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 1)'
        },
        {
          name: 'sparse_output',
          docstring:
            'True if the returned array from transform is desired to be in sparse CSR format.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ': False)'
        }
      ],
      outputs: [
        {
          name: 'classes_',
          docstring: 'Holds the label for each class.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'y_type_',
          docstring:
            "Represents the type of the target data as evaluated by utils.multiclass.type_of_target. Possible type are 'continuous', 'continuous-multioutput', 'binary', 'multiclass', 'multiclass-multioutput', 'multilabel-indicator', and 'unknown'.",
          param_type: ['str'],
          returned: false
        },
        {
          name: 'sparse_input_',
          docstring:
            'True if the input data to transform is given as a sparse matrix, False otherwise.',
          param_type: ['bool'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit label binarizer\n\n        Parameters\n        ----------\n        y : array of shape [n_samples,] or [n_samples, n_classes]\n            Target values. The 2-d matrix should only contain 0 and 1,\n            represents multilabel classification.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'y',
              docstring:
                'Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification.',
              param_type: ['array'],
              expected_shape: '[n_samples,] or [n_samples, n_classes]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit label binarizer and transform multi-class labels to binary\n        labels.\n\n        The output of transform is sometimes referred to as\n        the 1-of-K coding scheme.\n\n        Parameters\n        ----------\n        y : array or sparse matrix of shape [n_samples,] or             [n_samples, n_classes]\n            Target values. The 2-d matrix should only contain 0 and 1,\n            represents multilabel classification. Sparse matrix can be\n            CSR, CSC, COO, DOK, or LIL.\n\n        Returns\n        -------\n        Y : array or CSR matrix of shape [n_samples, n_classes]\n            Shape will be [n_samples, 1] for binary problems.\n        ',
          inputs: [
            {
              name: 'y',
              docstring:
                'Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL.',
              param_type: ['array'],
              expected_shape:
                '[n_samples,] or             [n_samples, n_classes]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'Y',
              docstring: 'Shape will be [n_samples, 1] for binary problems.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            "Transform binary labels back to multi-class labels\n\n        Parameters\n        ----------\n        Y : numpy array or sparse matrix with shape [n_samples, n_classes]\n            Target values. All sparse matrices are converted to CSR before\n            inverse transformation.\n\n        threshold : float or None\n            Threshold used in the binary and multi-label cases.\n\n            Use 0 when ``Y`` contains the output of decision_function\n            (classifier).\n            Use 0.5 when ``Y`` contains the output of predict_proba.\n\n            If None, the threshold is assumed to be half way between\n            neg_label and pos_label.\n\n        Returns\n        -------\n        y : numpy array or CSR matrix of shape [n_samples] Target values.\n\n        Notes\n        -----\n        In the case when the binary labels are fractional\n        (probabilistic), inverse_transform chooses the class with the\n        greatest value. Typically, this allows to use the output of a\n        linear model's decision_function method directly as the input\n        of inverse_transform.\n        ",
          inputs: [
            {
              name: 'Y',
              docstring:
                'Target values. All sparse matrices are converted to CSR before inverse transformation.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_classes]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'threshold',
              docstring:
                'Threshold used in the binary and multi-label cases.  Use 0 when ``Y`` contains the output of decision_function (classifier). Use 0.5 when ``Y`` contains the output of predict_proba.  If None, the threshold is assumed to be half way between neg_label and pos_label.',
              param_type: ['float', null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Transform multi-class labels to binary labels\n\n        The output of transform is sometimes referred to by some authors as\n        the 1-of-K coding scheme.\n\n        Parameters\n        ----------\n        y : array or sparse matrix of shape [n_samples,] or             [n_samples, n_classes]\n            Target values. The 2-d matrix should only contain 0 and 1,\n            represents multilabel classification. Sparse matrix can be\n            CSR, CSC, COO, DOK, or LIL.\n\n        Returns\n        -------\n        Y : numpy array or CSR matrix of shape [n_samples, n_classes]\n            Shape will be [n_samples, 1] for binary problems.\n        ',
          inputs: [
            {
              name: 'y',
              docstring:
                'Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL.',
              param_type: ['array'],
              expected_shape:
                '[n_samples,] or             [n_samples, n_classes]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'Y',
              docstring: 'Shape will be [n_samples, 1] for binary problems.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LabelEncoder',
      docstring:
        'Encode labels with value between 0 and n_classes-1.\n\n    Read more in the :ref:`User Guide <preprocessing_targets>`.\n\n    Attributes\n    ----------\n    classes_ : array of shape (n_class,)\n        Holds the label for each class.\n\n    Examples\n    --------\n    `LabelEncoder` can be used to normalize labels.\n\n    >>> from sklearn import preprocessing\n    >>> le = preprocessing.LabelEncoder()\n    >>> le.fit([1, 2, 2, 6])\n    LabelEncoder()\n    >>> le.classes_\n    array([1, 2, 6])\n    >>> le.transform([1, 1, 2, 6]) #doctest: +ELLIPSIS\n    array([0, 0, 1, 2]...)\n    >>> le.inverse_transform([0, 0, 1, 2])\n    array([1, 1, 2, 6])\n\n    It can also be used to transform non-numerical labels (as long as they are\n    hashable and comparable) to numerical labels.\n\n    >>> le = preprocessing.LabelEncoder()\n    >>> le.fit(["paris", "paris", "tokyo", "amsterdam"])\n    LabelEncoder()\n    >>> list(le.classes_)\n    [\'amsterdam\', \'paris\', \'tokyo\']\n    >>> le.transform(["tokyo", "tokyo", "paris"]) #doctest: +ELLIPSIS\n    array([2, 2, 1]...)\n    >>> list(le.inverse_transform([2, 2, 1]))\n    [\'tokyo\', \'tokyo\', \'paris\']\n\n    See also\n    --------\n    sklearn.preprocessing.OrdinalEncoder : encode categorical features\n        using a one-hot or ordinal encoding scheme.\n    ',
      inputs: [],
      outputs: [
        {
          name: 'classes_',
          docstring: 'Holds the label for each class.',
          param_type: ['array'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring:
            'Initialize self.  See help(type(self)) for accurate signature.',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit label encoder\n\n        Parameters\n        ----------\n        y : array-like of shape (n_samples,)\n            Target values.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit label encoder and return encoded labels\n\n        Parameters\n        ----------\n        y : array-like of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        y : array-like of shape [n_samples]\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Transform labels back to original encoding.\n\n        Parameters\n        ----------\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        y : numpy array of shape [n_samples]\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Transform labels to normalized encoding.\n\n        Parameters\n        ----------\n        y : array-like of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        y : array-like of shape [n_samples]\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'MaxAbsScaler',
      docstring:
        'Scale each feature by its maximum absolute value.\n\n    This estimator scales and translates each feature individually such\n    that the maximal absolute value of each feature in the\n    training set will be 1.0. It does not shift/center the data, and\n    thus does not destroy any sparsity.\n\n    This scaler can also be applied to sparse CSR or CSC matrices.\n\n    .. versionadded:: 0.17\n\n    Parameters\n    ----------\n    copy : boolean, optional, default is True\n        Set to False to perform inplace scaling and avoid a copy (if the input\n        is already a numpy array).\n\n    Attributes\n    ----------\n    scale_ : ndarray, shape (n_features,)\n        Per feature relative scaling of the data.\n\n        .. versionadded:: 0.17\n           *scale_* attribute.\n\n    max_abs_ : ndarray, shape (n_features,)\n        Per feature maximum absolute value.\n\n    n_samples_seen_ : int\n        The number of samples processed by the estimator. Will be reset on\n        new calls to fit, but increments across ``partial_fit`` calls.\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import MaxAbsScaler\n    >>> X = [[ 1., -1.,  2.],\n    ...      [ 2.,  0.,  0.],\n    ...      [ 0.,  1., -1.]]\n    >>> transformer = MaxAbsScaler().fit(X)\n    >>> transformer\n    MaxAbsScaler(copy=True)\n    >>> transformer.transform(X)\n    array([[ 0.5, -1. ,  1. ],\n           [ 1. ,  0. ,  0. ],\n           [ 0. ,  1. , -0.5]])\n\n    See also\n    --------\n    maxabs_scale: Equivalent function without the estimator API.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in fit, and maintained in\n    transform.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ',
      inputs: [
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace scaling and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'scale_',
          docstring:
            'Per feature relative scaling of the data.  .. versionadded:: 0.17    *scale_* attribute.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'max_abs_',
          docstring: 'Per feature maximum absolute value.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_samples_seen_',
          docstring:
            'The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across ``partial_fit`` calls.',
          param_type: ['int'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_reset',
          docstring:
            'Reset internal data-dependent state of the scaler, if necessary.\n\n        __init__ parameters are not touched.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Compute the maximum absolute value to be used for later scaling.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape [n_samples, n_features]\n            The data used to compute the per-feature minimum and maximum\n            used for later scaling along the features axis.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Scale back the data to the original representation\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}\n            The data that should be transformed back.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data that should be transformed back.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'partial_fit',
          docstring:
            'Online computation of max absolute value of X for later scaling.\n        All of X is processed as a single batch. This is intended for cases\n        when `fit` is not feasible due to very large number of `n_samples`\n        or because X is read from a continuous stream.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape [n_samples, n_features]\n            The data used to compute the mean and standard deviation\n            used for later scaling along the features axis.\n\n        y\n            Ignored\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Scale the data\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}\n            The data that should be scaled.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data that should be scaled.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'MinMaxScaler',
      docstring:
        'Transforms features by scaling each feature to a given range.\n\n    This estimator scales and translates each feature individually such\n    that it is in the given range on the training set, e.g. between\n    zero and one.\n\n    The transformation is given by::\n\n        X_std = (X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0))\n        X_scaled = X_std * (max - min) + min\n\n    where min, max = feature_range.\n\n    The transformation is calculated as::\n\n        X_scaled = scale * X + min - X.min(axis=0) * scale\n        where scale = (max - min) / (X.max(axis=0) - X.min(axis=0))\n\n    This transformation is often used as an alternative to zero mean,\n    unit variance scaling.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    Parameters\n    ----------\n    feature_range : tuple (min, max), default=(0, 1)\n        Desired range of transformed data.\n\n    copy : boolean, optional, default True\n        Set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array).\n\n    Attributes\n    ----------\n    min_ : ndarray, shape (n_features,)\n        Per feature adjustment for minimum. Equivalent to\n        ``min - X.min(axis=0) * self.scale_``\n\n    scale_ : ndarray, shape (n_features,)\n        Per feature relative scaling of the data. Equivalent to\n        ``(max - min) / (X.max(axis=0) - X.min(axis=0))``\n\n        .. versionadded:: 0.17\n           *scale_* attribute.\n\n    data_min_ : ndarray, shape (n_features,)\n        Per feature minimum seen in the data\n\n        .. versionadded:: 0.17\n           *data_min_*\n\n    data_max_ : ndarray, shape (n_features,)\n        Per feature maximum seen in the data\n\n        .. versionadded:: 0.17\n           *data_max_*\n\n    data_range_ : ndarray, shape (n_features,)\n        Per feature range ``(data_max_ - data_min_)`` seen in the data\n\n        .. versionadded:: 0.17\n           *data_range_*\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import MinMaxScaler\n    >>> data = [[-1, 2], [-0.5, 6], [0, 10], [1, 18]]\n    >>> scaler = MinMaxScaler()\n    >>> print(scaler.fit(data))\n    MinMaxScaler(copy=True, feature_range=(0, 1))\n    >>> print(scaler.data_max_)\n    [ 1. 18.]\n    >>> print(scaler.transform(data))\n    [[0.   0.  ]\n     [0.25 0.25]\n     [0.5  0.5 ]\n     [1.   1.  ]]\n    >>> print(scaler.transform([[2, 2]]))\n    [[1.5 0. ]]\n\n    See also\n    --------\n    minmax_scale: Equivalent function without the estimator API.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in fit, and maintained in\n    transform.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ',
      inputs: [
        {
          name: 'feature_range',
          docstring: 'Desired range of transformed data.',
          param_type: ['tuple'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'min_',
          docstring:
            'Per feature adjustment for minimum. Equivalent to ``min - X.min(axis=0) * self.scale_``',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'scale_',
          docstring:
            'Per feature relative scaling of the data. Equivalent to ``(max - min) / (X.max(axis=0) - X.min(axis=0))``  .. versionadded:: 0.17    *scale_* attribute.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'data_min_',
          docstring:
            'Per feature minimum seen in the data  .. versionadded:: 0.17    *data_min_*',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'data_max_',
          docstring:
            'Per feature maximum seen in the data  .. versionadded:: 0.17    *data_max_*',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'data_range_',
          docstring:
            'Per feature range ``(data_max_ - data_min_)`` seen in the data  .. versionadded:: 0.17    *data_range_*',
          param_type: ['array'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_reset',
          docstring:
            'Reset internal data-dependent state of the scaler, if necessary.\n\n        __init__ parameters are not touched.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Compute the minimum and maximum to be used for later scaling.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data used to compute the per-feature minimum and maximum\n            used for later scaling along the features axis.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Undo the scaling of X according to feature_range.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            Input data that will be transformed. It cannot be sparse.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Input data that will be transformed. It cannot be sparse.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'partial_fit',
          docstring:
            'Online computation of min and max on X for later scaling.\n        All of X is processed as a single batch. This is intended for cases\n        when `fit` is not feasible due to very large number of `n_samples`\n        or because X is read from a continuous stream.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data used to compute the mean and standard deviation\n            used for later scaling along the features axis.\n\n        y\n            Ignored\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Scaling features of X according to feature_range.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            Input data that will be transformed.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Input data that will be transformed.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'MultiLabelBinarizer',
      docstring:
        "Transform between iterable of iterables and a multilabel format\n\n    Although a list of sets or tuples is a very intuitive format for multilabel\n    data, it is unwieldy to process. This transformer converts between this\n    intuitive format and the supported multilabel format: a (samples x classes)\n    binary matrix indicating the presence of a class label.\n\n    Parameters\n    ----------\n    classes : array-like of shape [n_classes] (optional)\n        Indicates an ordering for the class labels.\n        All entries should be unique (cannot contain duplicate classes).\n\n    sparse_output : boolean (default: False),\n        Set to true if output binary array is desired in CSR sparse format\n\n    Attributes\n    ----------\n    classes_ : array of labels\n        A copy of the `classes` parameter where provided,\n        or otherwise, the sorted set of classes found when fitting.\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import MultiLabelBinarizer\n    >>> mlb = MultiLabelBinarizer()\n    >>> mlb.fit_transform([(1, 2), (3,)])\n    array([[1, 1, 0],\n           [0, 0, 1]])\n    >>> mlb.classes_\n    array([1, 2, 3])\n\n    >>> mlb.fit_transform([{'sci-fi', 'thriller'}, {'comedy'}])\n    array([[0, 1, 1],\n           [1, 0, 0]])\n    >>> list(mlb.classes_)\n    ['comedy', 'sci-fi', 'thriller']\n\n    See also\n    --------\n    sklearn.preprocessing.OneHotEncoder : encode categorical features\n        using a one-hot aka one-of-K scheme.\n    ",
      inputs: [
        {
          name: 'classes',
          docstring:
            'Indicates an ordering for the class labels. All entries should be unique (cannot contain duplicate classes).',
          param_type: ['array'],
          expected_shape: '[n_classes] (optional)',
          is_optional: true,
          default_value: null
        },
        {
          name: 'sparse_output',
          docstring:
            'Set to true if output binary array is desired in CSR sparse format',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        }
      ],
      outputs: [
        {
          name: 'classes_',
          docstring:
            'A copy of the `classes` parameter where provided, or otherwise, the sorted set of classes found when fitting.',
          param_type: ['array'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_build_cache',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_transform',
          docstring:
            'Transforms the label sets with a given mapping\n\n        Parameters\n        ----------\n        y : iterable of iterables\n        class_mapping : Mapping\n            Maps from label to column index in label indicator matrix\n\n        Returns\n        -------\n        y_indicator : sparse CSR matrix, shape (n_samples, n_classes)\n            Label indicator matrix\n        ',
          inputs: [
            {
              name: 'y',
              docstring: '',
              param_type: ['iter'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'class_mapping',
              docstring:
                'Maps from label to column index in label indicator matrix',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_indicator',
              docstring: 'Label indicator matrix',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'fit',
          docstring:
            'Fit the label sets binarizer, storing `classes_`\n\n        Parameters\n        ----------\n        y : iterable of iterables\n            A set of labels (any orderable and hashable object) for each\n            sample. If the `classes` parameter is set, `y` will not be\n            iterated.\n\n        Returns\n        -------\n        self : returns this MultiLabelBinarizer instance\n        ',
          inputs: [
            {
              name: 'y',
              docstring:
                'A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated.',
              param_type: ['iter'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit the label sets binarizer and transform the given label sets\n\n        Parameters\n        ----------\n        y : iterable of iterables\n            A set of labels (any orderable and hashable object) for each\n            sample. If the `classes` parameter is set, `y` will not be\n            iterated.\n\n        Returns\n        -------\n        y_indicator : array or CSR matrix, shape (n_samples, n_classes)\n            A matrix such that `y_indicator[i, j] = 1` iff `classes_[j]` is in\n            `y[i]`, and 0 otherwise.\n        ',
          inputs: [
            {
              name: 'y',
              docstring:
                'A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated.',
              param_type: ['iter'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_indicator',
              docstring:
                'A matrix such that `y_indicator[i, j] = 1` iff `classes_[j]` is in `y[i]`, and 0 otherwise.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Transform the given indicator matrix into label sets\n\n        Parameters\n        ----------\n        yt : array or sparse matrix of shape (n_samples, n_classes)\n            A matrix containing only 1s ands 0s.\n\n        Returns\n        -------\n        y : list of tuples\n            The set of labels for each sample such that `y[i]` consists of\n            `classes_[j]` for each `yt[i, j] == 1`.\n        ',
          inputs: [
            {
              name: 'yt',
              docstring: 'A matrix containing only 1s ands 0s.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_classes)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y',
              docstring:
                'The set of labels for each sample such that `y[i]` consists of `classes_[j]` for each `yt[i, j] == 1`.',
              param_type: ['list', 'tuple'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Transform the given label sets\n\n        Parameters\n        ----------\n        y : iterable of iterables\n            A set of labels (any orderable and hashable object) for each\n            sample. If the `classes` parameter is set, `y` will not be\n            iterated.\n\n        Returns\n        -------\n        y_indicator : array or CSR matrix, shape (n_samples, n_classes)\n            A matrix such that `y_indicator[i, j] = 1` iff `classes_[j]` is in\n            `y[i]`, and 0 otherwise.\n        ',
          inputs: [
            {
              name: 'y',
              docstring:
                'A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated.',
              param_type: ['iter'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_indicator',
              docstring:
                'A matrix such that `y_indicator[i, j] = 1` iff `classes_[j]` is in `y[i]`, and 0 otherwise.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'Normalizer',
      docstring:
        "Normalize samples individually to unit norm.\n\n    Each sample (i.e. each row of the data matrix) with at least one\n    non zero component is rescaled independently of other samples so\n    that its norm (l1 or l2) equals one.\n\n    This transformer is able to work both with dense numpy arrays and\n    scipy.sparse matrix (use CSR format if you want to avoid the burden of\n    a copy / conversion).\n\n    Scaling inputs to unit norms is a common operation for text\n    classification or clustering for instance. For instance the dot\n    product of two l2-normalized TF-IDF vectors is the cosine similarity\n    of the vectors and is the base similarity metric for the Vector\n    Space Model commonly used by the Information Retrieval community.\n\n    Read more in the :ref:`User Guide <preprocessing_normalization>`.\n\n    Parameters\n    ----------\n    norm : 'l1', 'l2', or 'max', optional ('l2' by default)\n        The norm to use to normalize each non zero sample.\n\n    copy : boolean, optional, default True\n        set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array or a scipy.sparse\n        CSR matrix).\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import Normalizer\n    >>> X = [[4, 1, 2, 2],\n    ...      [1, 3, 9, 3],\n    ...      [5, 7, 5, 1]]\n    >>> transformer = Normalizer().fit(X)  # fit does nothing.\n    >>> transformer\n    Normalizer(copy=True, norm='l2')\n    >>> transformer.transform(X)\n    array([[0.8, 0.2, 0.4, 0.4],\n           [0.1, 0.3, 0.9, 0.3],\n           [0.5, 0.7, 0.5, 0.1]])\n\n    Notes\n    -----\n    This estimator is stateless (besides constructor parameters), the\n    fit method does nothing but is useful when used in a pipeline.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n\n    See also\n    --------\n    normalize: Equivalent function without the estimator API.\n    ",
      inputs: [
        {
          name: 'norm',
          docstring: 'The norm to use to normalize each non zero sample.',
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
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
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Do nothing and return the estimator unchanged\n\n        This method is just there to implement the usual API and hence\n        work in pipelines.\n\n        Parameters\n        ----------\n        X : array-like\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Scale each non zero row of X to unit norm\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape [n_samples, n_features]\n            The data to normalize, row by row. scipy.sparse matrices should be\n            in CSR format to avoid an un-necessary copy.\n        copy : bool, optional (default: None)\n            Copy the input X or not.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to normalize, row by row. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy',
              docstring: 'Copy the input X or not.',
              param_type: ['bool', null],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'OneHotEncoder',
      docstring:
        "Encode categorical integer features as a one-hot numeric array.\n\n    The input to this transformer should be an array-like of integers or\n    strings, denoting the values taken on by categorical (discrete) features.\n    The features are encoded using a one-hot (aka 'one-of-K' or 'dummy')\n    encoding scheme. This creates a binary column for each category and\n    returns a sparse matrix or dense array.\n\n    By default, the encoder derives the categories based on the unique values\n    in each feature. Alternatively, you can also specify the `categories`\n    manually.\n    The OneHotEncoder previously assumed that the input features take on\n    values in the range [0, max(values)). This behaviour is deprecated.\n\n    This encoding is needed for feeding categorical data to many scikit-learn\n    estimators, notably linear models and SVMs with the standard kernels.\n\n    Note: a one-hot encoding of y labels should use a LabelBinarizer\n    instead.\n\n    Read more in the :ref:`User Guide <preprocessing_categorical_features>`.\n\n    Parameters\n    ----------\n    categories : 'auto' or a list of lists/arrays of values, default='auto'.\n        Categories (unique values) per feature:\n\n        - 'auto' : Determine categories automatically from the training data.\n        - list : ``categories[i]`` holds the categories expected in the ith\n          column. The passed categories should not mix strings and numeric\n          values within a single feature, and should be sorted in case of\n          numeric values.\n\n        The used categories can be found in the ``categories_`` attribute.\n\n    drop : 'first' or a list/array of shape (n_features,), default=None.\n        Specifies a methodology to use to drop one of the categories per\n        feature. This is useful in situations where perfectly collinear\n        features cause problems, such as when feeding the resulting data\n        into a neural network or an unregularized regression.\n\n        - None : retain all features (the default).\n        - 'first' : drop the first category in each feature. If only one\n          category is present, the feature will be dropped entirely.\n        - array : ``drop[i]`` is the category in feature ``X[:, i]`` that\n          should be dropped.\n\n    sparse : boolean, default=True\n        Will return sparse matrix if set True else will return an array.\n\n    dtype : number type, default=np.float\n        Desired dtype of output.\n\n    handle_unknown : 'error' or 'ignore', default='error'.\n        Whether to raise an error or ignore if an unknown categorical feature\n        is present during transform (default is to raise). When this parameter\n        is set to 'ignore' and an unknown category is encountered during\n        transform, the resulting one-hot encoded columns for this feature\n        will be all zeros. In the inverse transform, an unknown category\n        will be denoted as None.\n\n    n_values : 'auto', int or array of ints, default='auto'\n        Number of values per feature.\n\n        - 'auto' : determine value range from training data.\n        - int : number of categorical values per feature.\n                Each feature value should be in ``range(n_values)``\n        - array : ``n_values[i]`` is the number of categorical values in\n                  ``X[:, i]``. Each feature value should be\n                  in ``range(n_values[i])``\n\n        .. deprecated:: 0.20\n            The `n_values` keyword was deprecated in version 0.20 and will\n            be removed in 0.22. Use `categories` instead.\n\n    categorical_features : 'all' or array of indices or mask, default='all'\n        Specify what features are treated as categorical.\n\n        - 'all': All features are treated as categorical.\n        - array of indices: Array of categorical feature indices.\n        - mask: Array of length n_features and with dtype=bool.\n\n        Non-categorical features are always stacked to the right of the matrix.\n\n        .. deprecated:: 0.20\n            The `categorical_features` keyword was deprecated in version\n            0.20 and will be removed in 0.22.\n            You can use the ``ColumnTransformer`` instead.\n\n    Attributes\n    ----------\n    categories_ : list of arrays\n        The categories of each feature determined during fitting\n        (in order of the features in X and corresponding with the output\n        of ``transform``). This includes the category specified in ``drop``\n        (if any).\n\n    drop_idx_ : array of shape (n_features,)\n        ``drop_idx_[i]`` is\u00a0the index in ``categories_[i]`` of the category to\n        be dropped for each feature. None if all the transformed features will\n        be retained.\n\n    active_features_ : array\n        Indices for active features, meaning values that actually occur\n        in the training set. Only available when n_values is ``'auto'``.\n\n        .. deprecated:: 0.20\n            The ``active_features_`` attribute was deprecated in version\n            0.20 and will be removed in 0.22.\n\n    feature_indices_ : array of shape (n_features,)\n        Indices to feature ranges.\n        Feature ``i`` in the original data is mapped to features\n        from ``feature_indices_[i]`` to ``feature_indices_[i+1]``\n        (and then potentially masked by ``active_features_`` afterwards)\n\n        .. deprecated:: 0.20\n            The ``feature_indices_`` attribute was deprecated in version\n            0.20 and will be removed in 0.22.\n\n    n_values_ : array of shape (n_features,)\n        Maximum number of values per feature.\n\n        .. deprecated:: 0.20\n            The ``n_values_`` attribute was deprecated in version\n            0.20 and will be removed in 0.22.\n\n    Examples\n    --------\n    Given a dataset with two features, we let the encoder find the unique\n    values per feature and transform the data to a binary one-hot encoding.\n\n    >>> from sklearn.preprocessing import OneHotEncoder\n    >>> enc = OneHotEncoder(handle_unknown='ignore')\n    >>> X = [['Male', 1], ['Female', 3], ['Female', 2]]\n    >>> enc.fit(X)\n    ... # doctest: +ELLIPSIS\n    ... # doctest: +NORMALIZE_WHITESPACE\n    OneHotEncoder(categorical_features=None, categories=None, drop=None,\n       dtype=<... 'numpy.float64'>, handle_unknown='ignore',\n       n_values=None, sparse=True)\n\n    >>> enc.categories_\n    [array(['Female', 'Male'], dtype=object), array([1, 2, 3], dtype=object)]\n    >>> enc.transform([['Female', 1], ['Male', 4]]).toarray()\n    array([[1., 0., 1., 0., 0.],\n           [0., 1., 0., 0., 0.]])\n    >>> enc.inverse_transform([[0, 1, 1, 0, 0], [0, 0, 0, 1, 0]])\n    array([['Male', 1],\n           [None, 2]], dtype=object)\n    >>> enc.get_feature_names()\n    array(['x0_Female', 'x0_Male', 'x1_1', 'x1_2', 'x1_3'], dtype=object)\n    >>> drop_enc = OneHotEncoder(drop='first').fit(X)\n    >>> drop_enc.categories_\n    [array(['Female', 'Male'], dtype=object), array([1, 2, 3], dtype=object)]\n    >>> drop_enc.transform([['Female', 1], ['Male', 2]]).toarray()\n    array([[0., 0., 0.],\n           [1., 1., 0.]])\n\n    See also\n    --------\n    sklearn.preprocessing.OrdinalEncoder : performs an ordinal (integer)\n      encoding of the categorical features.\n    sklearn.feature_extraction.DictVectorizer : performs a one-hot encoding of\n      dictionary items (also handles string-valued features).\n    sklearn.feature_extraction.FeatureHasher : performs an approximate one-hot\n      encoding of dictionary items or strings.\n    sklearn.preprocessing.LabelBinarizer : binarizes labels in a one-vs-all\n      fashion.\n    sklearn.preprocessing.MultiLabelBinarizer : transforms between iterable of\n      iterables and a multilabel format, e.g. a (samples x classes) binary\n      matrix indicating the presence of a class label.\n    ",
      inputs: [
        {
          name: 'categories',
          docstring:
            "Categories (unique values) per feature:  - 'auto' : Determine categories automatically from the training data. - list : ``categories[i]`` holds the categories expected in the ith   column. The passed categories should not mix strings and numeric   values within a single feature, and should be sorted in case of   numeric values.  The used categories can be found in the ``categories_`` attribute.",
          param_type: ['array', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: "='auto'."
        },
        {
          name: 'drop',
          docstring:
            "Specifies a methodology to use to drop one of the categories per feature. This is useful in situations where perfectly collinear features cause problems, such as when feeding the resulting data into a neural network or an unregularized regression.  - None : retain all features (the default). - 'first' : drop the first category in each feature. If only one   category is present, the feature will be dropped entirely. - array : ``drop[i]`` is the category in feature ``X[:, i]`` that   should be dropped.",
          param_type: ['array', 'list', null],
          expected_shape: '(n_features,), default=None.',
          is_optional: true,
          default_value: '=None.'
        },
        {
          name: 'sparse',
          docstring:
            'Will return sparse matrix if set True else will return an array.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'dtype',
          docstring: 'Desired dtype of output.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=np.float'
        },
        {
          name: 'handle_unknown',
          docstring:
            "Whether to raise an error or ignore if an unknown categorical feature is present during transform (default is to raise). When this parameter is set to 'ignore' and an unknown category is encountered during transform, the resulting one-hot encoded columns for this feature will be all zeros. In the inverse transform, an unknown category will be denoted as None.",
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: "='error'."
        },
        {
          name: 'n_values',
          docstring:
            "Number of values per feature.  - 'auto' : determine value range from training data. - int : number of categorical values per feature.         Each feature value should be in ``range(n_values)`` - array : ``n_values[i]`` is the number of categorical values in           ``X[:, i]``. Each feature value should be           in ``range(n_values[i])``  .. deprecated:: 0.20     The `n_values` keyword was deprecated in version 0.20 and will     be removed in 0.22. Use `categories` instead.",
          param_type: ['array', 'int'],
          expected_shape: null,
          is_optional: true,
          default_value: "='auto'"
        },
        {
          name: 'categorical_features',
          docstring:
            "Specify what features are treated as categorical.  - 'all': All features are treated as categorical. - array of indices: Array of categorical feature indices. - mask: Array of length n_features and with dtype=bool.  Non-categorical features are always stacked to the right of the matrix.  .. deprecated:: 0.20     The `categorical_features` keyword was deprecated in version     0.20 and will be removed in 0.22.     You can use the ``ColumnTransformer`` instead.",
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: "='all'"
        }
      ],
      outputs: [
        {
          name: 'categories_',
          docstring:
            'The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of ``transform``). This includes the category specified in ``drop`` (if any).',
          param_type: ['array', 'list'],
          returned: false
        },
        {
          name: 'drop_idx_',
          docstring:
            '``drop_idx_[i]`` is\u00a0the index in ``categories_[i]`` of the category to be dropped for each feature. None if all the transformed features will be retained.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'active_features_',
          docstring:
            "Indices for active features, meaning values that actually occur in the training set. Only available when n_values is ``'auto'``.  .. deprecated:: 0.20     The ``active_features_`` attribute was deprecated in version     0.20 and will be removed in 0.22.",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'feature_indices_',
          docstring:
            'Indices to feature ranges. Feature ``i`` in the original data is mapped to features from ``feature_indices_[i]`` to ``feature_indices_[i+1]`` (and then potentially masked by ``active_features_`` afterwards)  .. deprecated:: 0.20     The ``feature_indices_`` attribute was deprecated in version     0.20 and will be removed in 0.22.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_values_',
          docstring:
            'Maximum number of values per feature.  .. deprecated:: 0.20     The ``n_values_`` attribute was deprecated in version     0.20 and will be removed in 0.22.',
          param_type: ['array'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_check_X',
          docstring:
            '\n        Perform custom check_array:\n        - convert list of strings to object dtype\n        - check for missing values for object dtype data (check_array does\n          not do that)\n        - return list of features (arrays): this list of features is\n          constructed feature by feature to preserve the data types\n          of pandas DataFrame columns, as otherwise information is lost\n          and cannot be used, eg for the `categories_` attribute.\n\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_compute_drop_idx',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_feature',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_handle_deprecations',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_legacy_fit_transform',
          docstring: 'Assumes X contains only categorical features.',
          inputs: [],
          outputs: []
        },
        {
          name: '_legacy_transform',
          docstring: 'Assumes X contains only categorical features.',
          inputs: [],
          outputs: []
        },
        {
          name: '_transform',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_transform_new',
          docstring: 'New implementation assuming categorical input',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_keywords',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit OneHotEncoder to X.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data to determine the categories of each feature.\n\n        Returns\n        -------\n        self\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to determine the categories of each feature.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit OneHotEncoder to X, then transform X.\n\n        Equivalent to fit(X).transform(X) but more convenient.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data to encode.\n\n        Returns\n        -------\n        X_out : sparse matrix if sparse=True else a 2-d array\n            Transformed input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data to encode.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_out',
              docstring: 'Transformed input.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_feature_names',
          docstring:
            'Return feature names for output features.\n\n        Parameters\n        ----------\n        input_features : list of string, length n_features, optional\n            String names for input features if available. By default,\n            "x0", "x1", ... "xn_features" is used.\n\n        Returns\n        -------\n        output_feature_names : array of string, length n_output_features\n\n        ',
          inputs: [
            {
              name: 'input_features',
              docstring:
                'String names for input features if available. By default, "x0", "x1", ... "xn_features" is used.',
              param_type: ['str', 'list'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'output_feature_names',
              docstring: '',
              param_type: ['array', 'str'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Convert the back data to the original representation.\n\n        In case unknown categories are encountered (all zeros in the\n        one-hot encoding), ``None`` is used to represent this category.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape [n_samples, n_encoded_features]\n            The transformed data.\n\n        Returns\n        -------\n        X_tr : array-like, shape [n_samples, n_features]\n            Inverse transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The transformed data.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_encoded_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_tr',
              docstring: 'Inverse transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Transform X using one-hot encoding.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data to encode.\n\n        Returns\n        -------\n        X_out : sparse matrix if sparse=True else a 2-d array\n            Transformed input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data to encode.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_out',
              docstring: 'Transformed input.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'OrdinalEncoder',
      docstring:
        "Encode categorical features as an integer array.\n\n    The input to this transformer should be an array-like of integers or\n    strings, denoting the values taken on by categorical (discrete) features.\n    The features are converted to ordinal integers. This results in\n    a single column of integers (0 to n_categories - 1) per feature.\n\n    Read more in the :ref:`User Guide <preprocessing_categorical_features>`.\n\n    Parameters\n    ----------\n    categories : 'auto' or a list of lists/arrays of values.\n        Categories (unique values) per feature:\n\n        - 'auto' : Determine categories automatically from the training data.\n        - list : ``categories[i]`` holds the categories expected in the ith\n          column. The passed categories should not mix strings and numeric\n          values, and should be sorted in case of numeric values.\n\n        The used categories can be found in the ``categories_`` attribute.\n\n    dtype : number type, default np.float64\n        Desired dtype of output.\n\n    Attributes\n    ----------\n    categories_ : list of arrays\n        The categories of each feature determined during fitting\n        (in order of the features in X and corresponding with the output\n        of ``transform``).\n\n    Examples\n    --------\n    Given a dataset with two features, we let the encoder find the unique\n    values per feature and transform the data to an ordinal encoding.\n\n    >>> from sklearn.preprocessing import OrdinalEncoder\n    >>> enc = OrdinalEncoder()\n    >>> X = [['Male', 1], ['Female', 3], ['Female', 2]]\n    >>> enc.fit(X)\n    ... # doctest: +ELLIPSIS\n    OrdinalEncoder(categories='auto', dtype=<... 'numpy.float64'>)\n    >>> enc.categories_\n    [array(['Female', 'Male'], dtype=object), array([1, 2, 3], dtype=object)]\n    >>> enc.transform([['Female', 3], ['Male', 1]])\n    array([[0., 2.],\n           [1., 0.]])\n\n    >>> enc.inverse_transform([[1, 0], [0, 1]])\n    array([['Male', 1],\n           ['Female', 2]], dtype=object)\n\n    See also\n    --------\n    sklearn.preprocessing.OneHotEncoder : performs a one-hot encoding of\n      categorical features.\n    sklearn.preprocessing.LabelEncoder : encodes target labels with values\n      between 0 and n_classes-1.\n    ",
      inputs: [
        {
          name: 'categories',
          docstring:
            "Categories (unique values) per feature:  - 'auto' : Determine categories automatically from the training data. - list : ``categories[i]`` holds the categories expected in the ith   column. The passed categories should not mix strings and numeric   values, and should be sorted in case of numeric values.  The used categories can be found in the ``categories_`` attribute.",
          param_type: ['array', 'list'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'dtype',
          docstring: 'Desired dtype of output.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: 'np.float64'
        }
      ],
      outputs: [
        {
          name: 'categories_',
          docstring:
            'The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of ``transform``).',
          param_type: ['array', 'list'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_check_X',
          docstring:
            '\n        Perform custom check_array:\n        - convert list of strings to object dtype\n        - check for missing values for object dtype data (check_array does\n          not do that)\n        - return list of features (arrays): this list of features is\n          constructed feature by feature to preserve the data types\n          of pandas DataFrame columns, as otherwise information is lost\n          and cannot be used, eg for the `categories_` attribute.\n\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_feature',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_transform',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the OrdinalEncoder to X.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data to determine the categories of each feature.\n\n        Returns\n        -------\n        self\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to determine the categories of each feature.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Convert the data back to the original representation.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape [n_samples, n_encoded_features]\n            The transformed data.\n\n        Returns\n        -------\n        X_tr : array-like, shape [n_samples, n_features]\n            Inverse transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The transformed data.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_encoded_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_tr',
              docstring: 'Inverse transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Transform X to ordinal codes.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data to encode.\n\n        Returns\n        -------\n        X_out : sparse matrix or a 2-d array\n            Transformed input.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data to encode.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_out',
              docstring: 'Transformed input.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'PolynomialFeatures',
      docstring:
        "Generate polynomial and interaction features.\n\n    Generate a new feature matrix consisting of all polynomial combinations\n    of the features with degree less than or equal to the specified degree.\n    For example, if an input sample is two dimensional and of the form\n    [a, b], the degree-2 polynomial features are [1, a, b, a^2, ab, b^2].\n\n    Parameters\n    ----------\n    degree : integer\n        The degree of the polynomial features. Default = 2.\n\n    interaction_only : boolean, default = False\n        If true, only interaction features are produced: features that are\n        products of at most ``degree`` *distinct* input features (so not\n        ``x[1] ** 2``, ``x[0] * x[2] ** 3``, etc.).\n\n    include_bias : boolean\n        If True (default), then include a bias column, the feature in which\n        all polynomial powers are zero (i.e. a column of ones - acts as an\n        intercept term in a linear model).\n\n    order : str in {'C', 'F'}, default 'C'\n        Order of output array in the dense case. 'F' order is faster to\n        compute, but may slow down subsequent estimators.\n\n        .. versionadded:: 0.21\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.preprocessing import PolynomialFeatures\n    >>> X = np.arange(6).reshape(3, 2)\n    >>> X\n    array([[0, 1],\n           [2, 3],\n           [4, 5]])\n    >>> poly = PolynomialFeatures(2)\n    >>> poly.fit_transform(X)\n    array([[ 1.,  0.,  1.,  0.,  0.,  1.],\n           [ 1.,  2.,  3.,  4.,  6.,  9.],\n           [ 1.,  4.,  5., 16., 20., 25.]])\n    >>> poly = PolynomialFeatures(interaction_only=True)\n    >>> poly.fit_transform(X)\n    array([[ 1.,  0.,  1.,  0.],\n           [ 1.,  2.,  3.,  6.],\n           [ 1.,  4.,  5., 20.]])\n\n    Attributes\n    ----------\n    powers_ : array, shape (n_output_features, n_input_features)\n        powers_[i, j] is the exponent of the jth input in the ith output.\n\n    n_input_features_ : int\n        The total number of input features.\n\n    n_output_features_ : int\n        The total number of polynomial output features. The number of output\n        features is computed by iterating over all suitably sized combinations\n        of input features.\n\n    Notes\n    -----\n    Be aware that the number of features in the output array scales\n    polynomially in the number of features of the input array, and\n    exponentially in the degree. High degrees can cause overfitting.\n\n    See :ref:`examples/linear_model/plot_polynomial_interpolation.py\n    <sphx_glr_auto_examples_linear_model_plot_polynomial_interpolation.py>`\n    ",
      inputs: [
        {
          name: 'degree',
          docstring: 'The degree of the polynomial features. Default = 2.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'interaction_only',
          docstring:
            'If true, only interaction features are produced: features that are products of at most ``degree`` *distinct* input features (so not ``x[1] ** 2``, ``x[0] * x[2] ** 3``, etc.).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '= False'
        },
        {
          name: 'include_bias',
          docstring:
            'If True (default), then include a bias column, the feature in which all polynomial powers are zero (i.e. a column of ones - acts as an intercept term in a linear model).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'order',
          docstring:
            "Order of output array in the dense case. 'F' order is faster to compute, but may slow down subsequent estimators.  .. versionadded:: 0.21",
          param_type: ['LIST_VALID_OPTIONS', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'C'"
        }
      ],
      outputs: [
        {
          name: 'powers_',
          docstring:
            'powers_[i, j] is the exponent of the jth input in the ith output.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_input_features_',
          docstring: 'The total number of input features.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'n_output_features_',
          docstring:
            'The total number of polynomial output features. The number of output features is computed by iterating over all suitably sized combinations of input features.',
          param_type: ['int'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_combinations',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            '\n        Compute number of output features.\n\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            The data.\n\n        Returns\n        -------\n        self : instance\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_feature_names',
          docstring:
            '\n        Return feature names for output features\n\n        Parameters\n        ----------\n        input_features : list of string, length n_features, optional\n            String names for input features if available. By default,\n            "x0", "x1", ... "xn_features" is used.\n\n        Returns\n        -------\n        output_feature_names : list of string, length n_output_features\n\n        ',
          inputs: [
            {
              name: 'input_features',
              docstring:
                'String names for input features if available. By default, "x0", "x1", ... "xn_features" is used.',
              param_type: ['str', 'list'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'output_feature_names',
              docstring: '',
              param_type: ['str', 'list'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Transform data to polynomial features\n\n        Parameters\n        ----------\n        X : array-like or CSR/CSC sparse matrix, shape [n_samples, n_features]\n            The data to transform, row by row.\n\n            Prefer CSR over CSC for sparse input (for speed), but CSC is\n            required if the degree is 4 or higher. If the degree is less than\n            4 and the input format is CSC, it will be converted to CSR, have\n            its polynomial features generated, then converted back to CSC.\n\n            If the degree is 2 or 3, the method described in "Leveraging\n            Sparsity to Speed Up Polynomial Feature Expansions of CSR Matrices\n            Using K-Simplex Numbers" by Andrew Nystrom and John Hughes is\n            used, which is much faster than the method used on CSC input. For\n            this reason, a CSC input will be converted to CSR, and the output\n            will be converted back to CSC prior to being returned, hence the\n            preference of CSR.\n\n        Returns\n        -------\n        XP : np.ndarray or CSR/CSC sparse matrix, shape [n_samples, NP]\n            The matrix of features, where NP is the number of polynomial\n            features generated from the combination of inputs.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to transform, row by row.  Prefer CSR over CSC for sparse input (for speed), but CSC is required if the degree is 4 or higher. If the degree is less than 4 and the input format is CSC, it will be converted to CSR, have its polynomial features generated, then converted back to CSC.  If the degree is 2 or 3, the method described in "Leveraging Sparsity to Speed Up Polynomial Feature Expansions of CSR Matrices Using K-Simplex Numbers" by Andrew Nystrom and John Hughes is used, which is much faster than the method used on CSC input. For this reason, a CSC input will be converted to CSR, and the output will be converted back to CSC prior to being returned, hence the preference of CSR.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'XP',
              docstring:
                'The matrix of features, where NP is the number of polynomial features generated from the combination of inputs.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'PowerTransformer',
      docstring:
        "Apply a power transform featurewise to make data more Gaussian-like.\n\n    Power transforms are a family of parametric, monotonic transformations\n    that are applied to make data more Gaussian-like. This is useful for\n    modeling issues related to heteroscedasticity (non-constant variance),\n    or other situations where normality is desired.\n\n    Currently, PowerTransformer supports the Box-Cox transform and the\n    Yeo-Johnson transform. The optimal parameter for stabilizing variance and\n    minimizing skewness is estimated through maximum likelihood.\n\n    Box-Cox requires input data to be strictly positive, while Yeo-Johnson\n    supports both positive or negative data.\n\n    By default, zero-mean, unit-variance normalization is applied to the\n    transformed data.\n\n    Read more in the :ref:`User Guide <preprocessing_transformer>`.\n\n    Parameters\n    ----------\n    method : str, (default='yeo-johnson')\n        The power transform method. Available methods are:\n\n        - 'yeo-johnson' [1]_, works with positive and negative values\n        - 'box-cox' [2]_, only works with strictly positive values\n\n    standardize : boolean, default=True\n        Set to True to apply zero-mean, unit-variance normalization to the\n        transformed output.\n\n    copy : boolean, optional, default=True\n        Set to False to perform inplace computation during transformation.\n\n    Attributes\n    ----------\n    lambdas_ : array of float, shape (n_features,)\n        The parameters of the power transformation for the selected features.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.preprocessing import PowerTransformer\n    >>> pt = PowerTransformer()\n    >>> data = [[1, 2], [3, 2], [4, 5]]\n    >>> print(pt.fit(data))\n    PowerTransformer(copy=True, method='yeo-johnson', standardize=True)\n    >>> print(pt.lambdas_)\n    [ 1.386... -3.100...]\n    >>> print(pt.transform(data))\n    [[-1.316... -0.707...]\n     [ 0.209... -0.707...]\n     [ 1.106...  1.414...]]\n\n    See also\n    --------\n    power_transform : Equivalent function without the estimator API.\n\n    QuantileTransformer : Maps data to a standard normal distribution with\n        the parameter `output_distribution='normal'`.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in ``fit``, and maintained\n    in ``transform``.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    References\n    ----------\n\n    .. [1] I.K. Yeo and R.A. Johnson, \"A new family of power transformations to\n           improve normality or symmetry.\" Biometrika, 87(4), pp.954-959,\n           (2000).\n\n    .. [2] G.E.P. Box and D.R. Cox, \"An Analysis of Transformations\", Journal\n           of the Royal Statistical Society B, 26, 211-252 (1964).\n    ",
      inputs: [
        {
          name: 'method',
          docstring:
            "The power transform method. Available methods are:  - 'yeo-johnson' [1]_, works with positive and negative values - 'box-cox' [2]_, only works with strictly positive values",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "='yeo-johnson')"
        },
        {
          name: 'standardize',
          docstring:
            'Set to True to apply zero-mean, unit-variance normalization to the transformed output.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace computation during transformation.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'lambdas_',
          docstring:
            'The parameters of the power transformation for the selected features.',
          param_type: ['array', 'float'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_box_cox_inverse_tranform',
          docstring:
            'Return inverse-transformed input x following Box-Cox inverse\n        transform with parameter lambda.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_box_cox_optimize',
          docstring:
            'Find and return optimal lambda parameter of the Box-Cox transform by\n        MLE, for observed data x.\n\n        We here use scipy builtins which uses the brent optimizer.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_check_input',
          docstring:
            "Validate the input before fit and transform.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        check_positive : bool\n            If True, check that all data is positive and non-zero (only if\n            ``self.method=='box-cox'``).\n\n        check_shape : bool\n            If True, check that n_features matches the length of self.lambdas_\n\n        check_method : bool\n            If True, check that the transformation method is valid.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'check_positive',
              docstring:
                "If True, check that all data is positive and non-zero (only if ``self.method=='box-cox'``).",
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'check_shape',
              docstring:
                'If True, check that n_features matches the length of self.lambdas_',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'check_method',
              docstring:
                'If True, check that the transformation method is valid.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: '_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_yeo_johnson_inverse_transform',
          docstring:
            'Return inverse-transformed input x following Yeo-Johnson inverse\n        transform with parameter lambda.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_yeo_johnson_optimize',
          docstring:
            'Find and return optimal lambda parameter of the Yeo-Johnson\n        transform by MLE, for observed data x.\n\n        Like for Box-Cox, MLE is done via the brent optimizer.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_yeo_johnson_transform',
          docstring:
            'Return transformed input x following Yeo-Johnson transform with\n        parameter lambda.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Estimate the optimal parameter lambda for each feature.\n\n        The optimal lambda parameter for minimizing skewness is estimated on\n        each feature independently using maximum likelihood.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            The data used to estimate the optimal transformation parameters.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to estimate the optimal transformation parameters.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring: 'None',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Apply the inverse power transformation using the fitted lambdas.\n\n        The inverse of the Box-Cox transformation is given by::\n\n            if lambda == 0:\n                X = exp(X_trans)\n            else:\n                X = (X_trans * lambda + 1) ** (1 / lambda)\n\n        The inverse of the Yeo-Johnson transformation is given by::\n\n            if X >= 0 and lambda == 0:\n                X = exp(X_trans) - 1\n            elif X >= 0 and lambda != 0:\n                X = (X_trans * lambda + 1) ** (1 / lambda) - 1\n            elif X < 0 and lambda != 2:\n                X = 1 - (-(2 - lambda) * X_trans + 1) ** (1 / (2 - lambda))\n            elif X < 0 and lambda == 2:\n                X = 1 - exp(-X_trans)\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            The transformed data.\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_features)\n            The original data\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The transformed data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X',
              docstring: 'The original data',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Apply the power transform to each feature using the fitted lambdas.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            The data to be transformed using a power transformation.\n\n        Returns\n        -------\n        X_trans : array-like, shape (n_samples, n_features)\n            The transformed data.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to be transformed using a power transformation.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_trans',
              docstring: 'The transformed data.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'QuantileTransformer',
      docstring:
        "Transform features using quantiles information.\n\n    This method transforms the features to follow a uniform or a normal\n    distribution. Therefore, for a given feature, this transformation tends\n    to spread out the most frequent values. It also reduces the impact of\n    (marginal) outliers: this is therefore a robust preprocessing scheme.\n\n    The transformation is applied on each feature independently. First an\n    estimate of the cumulative distribution function of a feature is\n    used to map the original values to a uniform distribution. The obtained\n    values are then mapped to the desired output distribution using the\n    associated quantile function. Features values of new/unseen data that fall\n    below or above the fitted range will be mapped to the bounds of the output\n    distribution. Note that this transform is non-linear. It may distort linear\n    correlations between variables measured at the same scale but renders\n    variables measured at different scales more directly comparable.\n\n    Read more in the :ref:`User Guide <preprocessing_transformer>`.\n\n    Parameters\n    ----------\n    n_quantiles : int, optional (default=1000 or n_samples)\n        Number of quantiles to be computed. It corresponds to the number\n        of landmarks used to discretize the cumulative distribution function.\n        If n_quantiles is larger than the number of samples, n_quantiles is set\n        to the number of samples as a larger number of quantiles does not give\n        a better approximation of the cumulative distribution function\n        estimator.\n\n    output_distribution : str, optional (default='uniform')\n        Marginal distribution for the transformed data. The choices are\n        'uniform' (default) or 'normal'.\n\n    ignore_implicit_zeros : bool, optional (default=False)\n        Only applies to sparse matrices. If True, the sparse entries of the\n        matrix are discarded to compute the quantile statistics. If False,\n        these entries are treated as zeros.\n\n    subsample : int, optional (default=1e5)\n        Maximum number of samples used to estimate the quantiles for\n        computational efficiency. Note that the subsampling procedure may\n        differ for value-identical sparse and dense matrices.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by np.random. Note that this is used by subsampling and smoothing\n        noise.\n\n    copy : boolean, optional, (default=True)\n        Set to False to perform inplace transformation and avoid a copy (if the\n        input is already a numpy array).\n\n    Attributes\n    ----------\n    n_quantiles_ : integer\n        The actual number of quantiles used to discretize the cumulative\n        distribution function.\n\n    quantiles_ : ndarray, shape (n_quantiles, n_features)\n        The values corresponding the quantiles of reference.\n\n    references_ : ndarray, shape(n_quantiles, )\n        Quantiles of references.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.preprocessing import QuantileTransformer\n    >>> rng = np.random.RandomState(0)\n    >>> X = np.sort(rng.normal(loc=0.5, scale=0.25, size=(25, 1)), axis=0)\n    >>> qt = QuantileTransformer(n_quantiles=10, random_state=0)\n    >>> qt.fit_transform(X) # doctest: +ELLIPSIS\n    array([...])\n\n    See also\n    --------\n    quantile_transform : Equivalent function without the estimator API.\n    PowerTransformer : Perform mapping to a normal distribution using a power\n        transform.\n    StandardScaler : Perform standardization that is faster, but less robust\n        to outliers.\n    RobustScaler : Perform robust standardization that removes the influence\n        of outliers but does not put outliers and inliers on the same scale.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in fit, and maintained in\n    transform.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ",
      inputs: [
        {
          name: 'n_quantiles',
          docstring:
            'Number of quantiles to be computed. It corresponds to the number of landmarks used to discretize the cumulative distribution function. If n_quantiles is larger than the number of samples, n_quantiles is set to the number of samples as a larger number of quantiles does not give a better approximation of the cumulative distribution function estimator.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'output_distribution',
          docstring:
            "Marginal distribution for the transformed data. The choices are 'uniform' (default) or 'normal'.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'ignore_implicit_zeros',
          docstring:
            'Only applies to sparse matrices. If True, the sparse entries of the matrix are discarded to compute the quantile statistics. If False, these entries are treated as zeros.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'subsample',
          docstring:
            'Maximum number of samples used to estimate the quantiles for computational efficiency. Note that the subsampling procedure may differ for value-identical sparse and dense matrices.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by np.random. Note that this is used by subsampling and smoothing noise.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace transformation and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'n_quantiles_',
          docstring:
            'The actual number of quantiles used to discretize the cumulative distribution function.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'quantiles_',
          docstring: 'The values corresponding the quantiles of reference.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'references_',
          docstring: 'Quantiles of references.',
          param_type: ['array'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_check_inputs',
          docstring: 'Check inputs before fit and transform',
          inputs: [],
          outputs: []
        },
        {
          name: '_check_is_fitted',
          docstring: 'Check the inputs before transforming',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_fit',
          docstring:
            'Compute percentiles for dense matrices.\n\n        Parameters\n        ----------\n        X : ndarray, shape (n_samples, n_features)\n            The data used to scale along the features axis.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the features axis.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_fit',
          docstring:
            'Compute percentiles for sparse matrices.\n\n        Parameters\n        ----------\n        X : sparse matrix CSC, shape (n_samples, n_features)\n            The data used to scale along the features axis. The sparse matrix\n            needs to be nonnegative.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to scale along the features axis. The sparse matrix needs to be nonnegative.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: '_transform',
          docstring:
            'Forward and inverse transform.\n\n        Parameters\n        ----------\n        X : ndarray, shape (n_samples, n_features)\n            The data used to scale along the features axis.\n\n        inverse : bool, optional (default=False)\n            If False, apply forward transform. If True, apply\n            inverse transform.\n\n        Returns\n        -------\n        X : ndarray, shape (n_samples, n_features)\n            Projected data\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the features axis.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'inverse',
              docstring:
                'If False, apply forward transform. If True, apply inverse transform.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X',
              docstring: 'Projected data',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_transform_col',
          docstring: 'Private function to transform a single feature',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Compute the quantiles used for transforming.\n\n        Parameters\n        ----------\n        X : ndarray or sparse matrix, shape (n_samples, n_features)\n            The data used to scale along the features axis. If a sparse\n            matrix is provided, it will be converted into a sparse\n            ``csc_matrix``. Additionally, the sparse matrix needs to be\n            nonnegative if `ignore_implicit_zeros` is False.\n\n        Returns\n        -------\n        self : object\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse ``csc_matrix``. Additionally, the sparse matrix needs to be nonnegative if `ignore_implicit_zeros` is False.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Back-projection to the original space.\n\n        Parameters\n        ----------\n        X : ndarray or sparse matrix, shape (n_samples, n_features)\n            The data used to scale along the features axis. If a sparse\n            matrix is provided, it will be converted into a sparse\n            ``csc_matrix``. Additionally, the sparse matrix needs to be\n            nonnegative if `ignore_implicit_zeros` is False.\n\n        Returns\n        -------\n        Xt : ndarray or sparse matrix, shape (n_samples, n_features)\n            The projected data.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse ``csc_matrix``. Additionally, the sparse matrix needs to be nonnegative if `ignore_implicit_zeros` is False.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'Xt',
              docstring: 'The projected data.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Feature-wise transformation of the data.\n\n        Parameters\n        ----------\n        X : ndarray or sparse matrix, shape (n_samples, n_features)\n            The data used to scale along the features axis. If a sparse\n            matrix is provided, it will be converted into a sparse\n            ``csc_matrix``. Additionally, the sparse matrix needs to be\n            nonnegative if `ignore_implicit_zeros` is False.\n\n        Returns\n        -------\n        Xt : ndarray or sparse matrix, shape (n_samples, n_features)\n            The projected data.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse ``csc_matrix``. Additionally, the sparse matrix needs to be nonnegative if `ignore_implicit_zeros` is False.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'Xt',
              docstring: 'The projected data.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'RobustScaler',
      docstring:
        "Scale features using statistics that are robust to outliers.\n\n    This Scaler removes the median and scales the data according to\n    the quantile range (defaults to IQR: Interquartile Range).\n    The IQR is the range between the 1st quartile (25th quantile)\n    and the 3rd quartile (75th quantile).\n\n    Centering and scaling happen independently on each feature by\n    computing the relevant statistics on the samples in the training\n    set. Median and interquartile range are then stored to be used on\n    later data using the ``transform`` method.\n\n    Standardization of a dataset is a common requirement for many\n    machine learning estimators. Typically this is done by removing the mean\n    and scaling to unit variance. However, outliers can often influence the\n    sample mean / variance in a negative way. In such cases, the median and\n    the interquartile range often give better results.\n\n    .. versionadded:: 0.17\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    Parameters\n    ----------\n    with_centering : boolean, True by default\n        If True, center the data before scaling.\n        This will cause ``transform`` to raise an exception when attempted on\n        sparse matrices, because centering them entails building a dense\n        matrix which in common use cases is likely to be too large to fit in\n        memory.\n\n    with_scaling : boolean, True by default\n        If True, scale the data to interquartile range.\n\n    quantile_range : tuple (q_min, q_max), 0.0 < q_min < q_max < 100.0\n        Default: (25.0, 75.0) = (1st quantile, 3rd quantile) = IQR\n        Quantile range used to calculate ``scale_``.\n\n        .. versionadded:: 0.18\n\n    copy : boolean, optional, default is True\n        If False, try to avoid a copy and do inplace scaling instead.\n        This is not guaranteed to always work inplace; e.g. if the data is\n        not a NumPy array or scipy.sparse CSR matrix, a copy may still be\n        returned.\n\n    Attributes\n    ----------\n    center_ : array of floats\n        The median value for each feature in the training set.\n\n    scale_ : array of floats\n        The (scaled) interquartile range for each feature in the training set.\n\n        .. versionadded:: 0.17\n           *scale_* attribute.\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import RobustScaler\n    >>> X = [[ 1., -2.,  2.],\n    ...      [ -2.,  1.,  3.],\n    ...      [ 4.,  1., -2.]]\n    >>> transformer = RobustScaler().fit(X)\n    >>> transformer  # doctest: +NORMALIZE_WHITESPACE\n    RobustScaler(copy=True, quantile_range=(25.0, 75.0), with_centering=True,\n           with_scaling=True)\n    >>> transformer.transform(X)\n    array([[ 0. , -2. ,  0. ],\n           [-1. ,  0. ,  0.4],\n           [ 1. ,  0. , -1.6]])\n\n    See also\n    --------\n    robust_scale: Equivalent function without the estimator API.\n\n    :class:`sklearn.decomposition.PCA`\n        Further removes the linear correlation across features with\n        'whiten=True'.\n\n    Notes\n    -----\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    https://en.wikipedia.org/wiki/Median\n    https://en.wikipedia.org/wiki/Interquartile_range\n    ",
      inputs: [
        {
          name: 'with_centering',
          docstring:
            'If True, center the data before scaling. This will cause ``transform`` to raise an exception when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'with_scaling',
          docstring: 'If True, scale the data to interquartile range.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'quantile_range',
          docstring:
            'Default: (25.0, 75.0) = (1st quantile, 3rd quantile) = IQR Quantile range used to calculate ``scale_``.  .. versionadded:: 0.18',
          param_type: ['tuple'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'If False, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'center_',
          docstring: 'The median value for each feature in the training set.',
          param_type: ['array', 'float'],
          returned: false
        },
        {
          name: 'scale_',
          docstring:
            'The (scaled) interquartile range for each feature in the training set.  .. versionadded:: 0.17    *scale_* attribute.',
          param_type: ['array', 'float'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Compute the median and quantiles to be used for scaling.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data used to compute the median and quantiles\n            used for later scaling along the features axis.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the median and quantiles used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Scale back the data to the original representation\n\n        Parameters\n        ----------\n        X : array-like\n            The data used to scale along the specified axis.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the specified axis.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Center and scale the data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}\n            The data used to scale along the specified axis.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the specified axis.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'StandardScaler',
      docstring:
        "Standardize features by removing the mean and scaling to unit variance\n\n    The standard score of a sample `x` is calculated as:\n\n        z = (x - u) / s\n\n    where `u` is the mean of the training samples or zero if `with_mean=False`,\n    and `s` is the standard deviation of the training samples or one if\n    `with_std=False`.\n\n    Centering and scaling happen independently on each feature by computing\n    the relevant statistics on the samples in the training set. Mean and\n    standard deviation are then stored to be used on later data using the\n    `transform` method.\n\n    Standardization of a dataset is a common requirement for many\n    machine learning estimators: they might behave badly if the\n    individual features do not more or less look like standard normally\n    distributed data (e.g. Gaussian with 0 mean and unit variance).\n\n    For instance many elements used in the objective function of\n    a learning algorithm (such as the RBF kernel of Support Vector\n    Machines or the L1 and L2 regularizers of linear models) assume that\n    all features are centered around 0 and have variance in the same\n    order. If a feature has a variance that is orders of magnitude larger\n    that others, it might dominate the objective function and make the\n    estimator unable to learn from other features correctly as expected.\n\n    This scaler can also be applied to sparse CSR or CSC matrices by passing\n    `with_mean=False` to avoid breaking the sparsity structure of the data.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    Parameters\n    ----------\n    copy : boolean, optional, default True\n        If False, try to avoid a copy and do inplace scaling instead.\n        This is not guaranteed to always work inplace; e.g. if the data is\n        not a NumPy array or scipy.sparse CSR matrix, a copy may still be\n        returned.\n\n    with_mean : boolean, True by default\n        If True, center the data before scaling.\n        This does not work (and will raise an exception) when attempted on\n        sparse matrices, because centering them entails building a dense\n        matrix which in common use cases is likely to be too large to fit in\n        memory.\n\n    with_std : boolean, True by default\n        If True, scale the data to unit variance (or equivalently,\n        unit standard deviation).\n\n    Attributes\n    ----------\n    scale_ : ndarray or None, shape (n_features,)\n        Per feature relative scaling of the data. This is calculated using\n        `np.sqrt(var_)`. Equal to ``None`` when ``with_std=False``.\n\n        .. versionadded:: 0.17\n           *scale_*\n\n    mean_ : ndarray or None, shape (n_features,)\n        The mean value for each feature in the training set.\n        Equal to ``None`` when ``with_mean=False``.\n\n    var_ : ndarray or None, shape (n_features,)\n        The variance for each feature in the training set. Used to compute\n        `scale_`. Equal to ``None`` when ``with_std=False``.\n\n    n_samples_seen_ : int or array, shape (n_features,)\n        The number of samples processed by the estimator for each feature.\n        If there are not missing samples, the ``n_samples_seen`` will be an\n        integer, otherwise it will be an array.\n        Will be reset on new calls to fit, but increments across\n        ``partial_fit`` calls.\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import StandardScaler\n    >>> data = [[0, 0], [0, 0], [1, 1], [1, 1]]\n    >>> scaler = StandardScaler()\n    >>> print(scaler.fit(data))\n    StandardScaler(copy=True, with_mean=True, with_std=True)\n    >>> print(scaler.mean_)\n    [0.5 0.5]\n    >>> print(scaler.transform(data))\n    [[-1. -1.]\n     [-1. -1.]\n     [ 1.  1.]\n     [ 1.  1.]]\n    >>> print(scaler.transform([[2, 2]]))\n    [[3. 3.]]\n\n    See also\n    --------\n    scale: Equivalent function without the estimator API.\n\n    :class:`sklearn.decomposition.PCA`\n        Further removes the linear correlation across features with 'whiten=True'.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in fit, and maintained in\n    transform.\n\n    We use a biased estimator for the standard deviation, equivalent to\n    `numpy.std(x, ddof=0)`. Note that the choice of `ddof` is unlikely to\n    affect model performance.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ",
      inputs: [
        {
          name: 'copy',
          docstring:
            'If False, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'with_mean',
          docstring:
            'If True, center the data before scaling. This does not work (and will raise an exception) when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'with_std',
          docstring:
            'If True, scale the data to unit variance (or equivalently, unit standard deviation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        }
      ],
      outputs: [
        {
          name: 'scale_',
          docstring:
            'Per feature relative scaling of the data. This is calculated using `np.sqrt(var_)`. Equal to ``None`` when ``with_std=False``.  .. versionadded:: 0.17    *scale_*',
          param_type: ['array', null],
          returned: false
        },
        {
          name: 'mean_',
          docstring:
            'The mean value for each feature in the training set. Equal to ``None`` when ``with_mean=False``.',
          param_type: ['array', null],
          returned: false
        },
        {
          name: 'var_',
          docstring:
            'The variance for each feature in the training set. Used to compute `scale_`. Equal to ``None`` when ``with_std=False``.',
          param_type: ['array', null],
          returned: false
        },
        {
          name: 'n_samples_seen_',
          docstring:
            'The number of samples processed by the estimator for each feature. If there are not missing samples, the ``n_samples_seen`` will be an integer, otherwise it will be an array. Will be reset on new calls to fit, but increments across ``partial_fit`` calls.',
          param_type: ['array', 'int'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_reset',
          docstring:
            'Reset internal data-dependent state of the scaler, if necessary.\n\n        __init__ parameters are not touched.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Compute the mean and std to be used for later scaling.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape [n_samples, n_features]\n            The data used to compute the mean and standard deviation\n            used for later scaling along the features axis.\n\n        y\n            Ignored\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Scale back the data to the original representation\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data used to scale along the features axis.\n        copy : bool, optional (default: None)\n            Copy the input X or not.\n\n        Returns\n        -------\n        X_tr : array-like, shape [n_samples, n_features]\n            Transformed array.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy',
              docstring: 'Copy the input X or not.',
              param_type: ['bool', null],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_tr',
              docstring: 'Transformed array.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'partial_fit',
          docstring:
            'Online computation of mean and std on X for later scaling.\n        All of X is processed as a single batch. This is intended for cases\n        when `fit` is not feasible due to very large number of `n_samples`\n        or because X is read from a continuous stream.\n\n        The algorithm for incremental mean and std is given in Equation 1.5a,b\n        in Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. "Algorithms\n        for computing the sample variance: Analysis and recommendations."\n        The American Statistician 37.3 (1983): 242-247:\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape [n_samples, n_features]\n            The data used to compute the mean and standard deviation\n            used for later scaling along the features axis.\n\n        y\n            Ignored\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Perform standardization by centering and scaling\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            The data used to scale along the features axis.\n        copy : bool, optional (default: None)\n            Copy the input X or not.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy',
              docstring: 'Copy the input X or not.',
              param_type: ['bool', null],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    }
  ],
  library: 'sklearn',
  module: 'preprocessing'
}
