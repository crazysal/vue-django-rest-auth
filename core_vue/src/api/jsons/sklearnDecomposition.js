export default {
  name: 'sklearn.decomposition',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'dict_learning',
      docstring:
        "Solves a dictionary learning matrix factorization problem.\n\n    Finds the best dictionary and the corresponding sparse code for\n    approximating the data matrix X by solving::\n\n        (U^*, V^*) = argmin 0.5 || X - U V ||_2^2 + alpha * || U ||_1\n                     (U,V)\n                    with || V_k ||_2 = 1 for all  0 <= k < n_components\n\n    where V is the dictionary and U is the sparse code.\n\n    Read more in the :ref:`User Guide <DictionaryLearning>`.\n\n    Parameters\n    ----------\n    X : array of shape (n_samples, n_features)\n        Data matrix.\n\n    n_components : int,\n        Number of dictionary atoms to extract.\n\n    alpha : int,\n        Sparsity controlling parameter.\n\n    max_iter : int,\n        Maximum number of iterations to perform.\n\n    tol : float,\n        Tolerance for the stopping condition.\n\n    method : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    dict_init : array of shape (n_components, n_features),\n        Initial value for the dictionary for warm restart scenarios.\n\n    code_init : array of shape (n_samples, n_components),\n        Initial value for the sparse code for warm restart scenarios.\n\n    callback : callable or None, optional (default: None)\n        Callable that gets invoked every five iterations\n\n    verbose : bool, optional (default: False)\n        To control the verbosity of the procedure.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    return_n_iter : bool\n        Whether or not to return the number of iterations.\n\n    positive_dict : bool\n        Whether to enforce positivity when finding the dictionary.\n\n        .. versionadded:: 0.20\n\n    positive_code : bool\n        Whether to enforce positivity when finding the code.\n\n        .. versionadded:: 0.20\n\n    Returns\n    -------\n    code : array of shape (n_samples, n_components)\n        The sparse code factor in the matrix factorization.\n\n    dictionary : array of shape (n_components, n_features),\n        The dictionary factor in the matrix factorization.\n\n    errors : array\n        Vector of errors at each iteration.\n\n    n_iter : int\n        Number of iterations run. Returned only if `return_n_iter` is\n        set to True.\n\n    See also\n    --------\n    dict_learning_online\n    DictionaryLearning\n    MiniBatchDictionaryLearning\n    SparsePCA\n    MiniBatchSparsePCA\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'Data matrix.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_components',
          docstring: 'Number of dictionary atoms to extract.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring: 'Sparsity controlling parameter.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'Maximum number of iterations to perform.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for the stopping condition.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dict_init',
          docstring:
            'Initial value for the dictionary for warm restart scenarios.',
          param_type: ['array'],
          expected_shape: '(n_components, n_features),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'code_init',
          docstring:
            'Initial value for the sparse code for warm restart scenarios.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_components),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'callback',
          docstring: 'Callable that gets invoked every five iterations',
          param_type: ['callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'To control the verbosity of the procedure.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring: 'Whether or not to return the number of iterations.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive_dict',
          docstring:
            'Whether to enforce positivity when finding the dictionary.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive_code',
          docstring:
            'Whether to enforce positivity when finding the code.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'code',
          docstring: 'The sparse code factor in the matrix factorization.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'dictionary',
          docstring: 'The dictionary factor in the matrix factorization.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'errors',
          docstring: 'Vector of errors at each iteration.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iter',
          docstring:
            'Number of iterations run. Returned only if `return_n_iter` is set to True.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'dict_learning_online',
      docstring:
        "Solves a dictionary learning matrix factorization problem online.\n\n    Finds the best dictionary and the corresponding sparse code for\n    approximating the data matrix X by solving::\n\n        (U^*, V^*) = argmin 0.5 || X - U V ||_2^2 + alpha * || U ||_1\n                     (U,V)\n                     with || V_k ||_2 = 1 for all  0 <= k < n_components\n\n    where V is the dictionary and U is the sparse code. This is\n    accomplished by repeatedly iterating over mini-batches by slicing\n    the input data.\n\n    Read more in the :ref:`User Guide <DictionaryLearning>`.\n\n    Parameters\n    ----------\n    X : array of shape (n_samples, n_features)\n        Data matrix.\n\n    n_components : int,\n        Number of dictionary atoms to extract.\n\n    alpha : float,\n        Sparsity controlling parameter.\n\n    n_iter : int,\n        Number of iterations to perform.\n\n    return_code : boolean,\n        Whether to also return the code U or just the dictionary V.\n\n    dict_init : array of shape (n_components, n_features),\n        Initial value for the dictionary for warm restart scenarios.\n\n    callback : callable or None, optional (default: None)\n        callable that gets invoked every five iterations\n\n    batch_size : int,\n        The number of samples to take in each batch.\n\n    verbose : bool, optional (default: False)\n        To control the verbosity of the procedure.\n\n    shuffle : boolean,\n        Whether to shuffle the data before splitting it in batches.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    method : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n    iter_offset : int, default 0\n        Number of previous iterations completed on the dictionary used for\n        initialization.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    return_inner_stats : boolean, optional\n        Return the inner statistics A (dictionary covariance) and B\n        (data approximation). Useful to restart the algorithm in an\n        online setting. If return_inner_stats is True, return_code is\n        ignored\n\n    inner_stats : tuple of (A, B) ndarrays\n        Inner sufficient statistics that are kept by the algorithm.\n        Passing them at initialization is useful in online settings, to\n        avoid loosing the history of the evolution.\n        A (n_components, n_components) is the dictionary covariance matrix.\n        B (n_features, n_components) is the data approximation matrix\n\n    return_n_iter : bool\n        Whether or not to return the number of iterations.\n\n    positive_dict : bool\n        Whether to enforce positivity when finding the dictionary.\n\n        .. versionadded:: 0.20\n\n    positive_code : bool\n        Whether to enforce positivity when finding the code.\n\n        .. versionadded:: 0.20\n\n    Returns\n    -------\n    code : array of shape (n_samples, n_components),\n        the sparse code (only returned if `return_code=True`)\n\n    dictionary : array of shape (n_components, n_features),\n        the solutions to the dictionary learning problem\n\n    n_iter : int\n        Number of iterations run. Returned only if `return_n_iter` is\n        set to `True`.\n\n    See also\n    --------\n    dict_learning\n    DictionaryLearning\n    MiniBatchDictionaryLearning\n    SparsePCA\n    MiniBatchSparsePCA\n\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'Data matrix.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_components',
          docstring: 'Number of dictionary atoms to extract.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring: 'Sparsity controlling parameter.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_iter',
          docstring: 'Number of iterations to perform.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_code',
          docstring:
            'Whether to also return the code U or just the dictionary V.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'dict_init',
          docstring:
            'Initial value for the dictionary for warm restart scenarios.',
          param_type: ['array'],
          expected_shape: '(n_components, n_features),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'callback',
          docstring: 'callable that gets invoked every five iterations',
          param_type: ['callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'batch_size',
          docstring: 'The number of samples to take in each batch.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'To control the verbosity of the procedure.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shuffle',
          docstring:
            'Whether to shuffle the data before splitting it in batches.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'iter_offset',
          docstring:
            'Number of previous iterations completed on the dictionary used for initialization.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0'
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_inner_stats',
          docstring:
            'Return the inner statistics A (dictionary covariance) and B (data approximation). Useful to restart the algorithm in an online setting. If return_inner_stats is True, return_code is ignored',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'inner_stats',
          docstring:
            'Inner sufficient statistics that are kept by the algorithm. Passing them at initialization is useful in online settings, to avoid loosing the history of the evolution. A (n_components, n_components) is the dictionary covariance matrix. B (n_features, n_components) is the data approximation matrix',
          param_type: ['array', 'tuple'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring: 'Whether or not to return the number of iterations.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive_dict',
          docstring:
            'Whether to enforce positivity when finding the dictionary.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive_code',
          docstring:
            'Whether to enforce positivity when finding the code.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'code',
          docstring: 'the sparse code (only returned if `return_code=True`)',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'dictionary',
          docstring: 'the solutions to the dictionary learning problem',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iter',
          docstring:
            'Number of iterations run. Returned only if `return_n_iter` is set to `True`.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'fastica',
      docstring:
        "Perform Fast Independent Component Analysis.\n\n    Read more in the :ref:`User Guide <ICA>`.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        Training vector, where n_samples is the number of samples and\n        n_features is the number of features.\n\n    n_components : int, optional\n        Number of components to extract. If None no dimension reduction\n        is performed.\n\n    algorithm : {'parallel', 'deflation'}, optional\n        Apply a parallel or deflational FASTICA algorithm.\n\n    whiten : boolean, optional\n        If True perform an initial whitening of the data.\n        If False, the data is assumed to have already been\n        preprocessed: it should be centered, normed and white.\n        Otherwise you will get incorrect results.\n        In this case the parameter n_components will be ignored.\n\n    fun : string or function, optional. Default: 'logcosh'\n        The functional form of the G function used in the\n        approximation to neg-entropy. Could be either 'logcosh', 'exp',\n        or 'cube'.\n        You can also provide your own function. It should return a tuple\n        containing the value of the function, and of its derivative, in the\n        point. The derivative should be averaged along its last dimension.\n        Example:\n\n        def my_g(x):\n            return x ** 3, np.mean(3 * x ** 2, axis=-1)\n\n    fun_args : dictionary, optional\n        Arguments to send to the functional form.\n        If empty or None and if fun='logcosh', fun_args will take value\n        {'alpha' : 1.0}\n\n    max_iter : int, optional\n        Maximum number of iterations to perform.\n\n    tol : float, optional\n        A positive scalar giving the tolerance at which the\n        un-mixing matrix is considered to have converged.\n\n    w_init : (n_components, n_components) array, optional\n        Initial un-mixing array of dimension (n.comp,n.comp).\n        If None (default) then an array of normal r.v.'s is used.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    return_X_mean : bool, optional\n        If True, X_mean is returned too.\n\n    compute_sources : bool, optional\n        If False, sources are not computed, but only the rotation matrix.\n        This can save memory when working with big data. Defaults to True.\n\n    return_n_iter : bool, optional\n        Whether or not to return the number of iterations.\n\n    Returns\n    -------\n    K : array, shape (n_components, n_features) | None.\n        If whiten is 'True', K is the pre-whitening matrix that projects data\n        onto the first n_components principal components. If whiten is 'False',\n        K is 'None'.\n\n    W : array, shape (n_components, n_components)\n        Estimated un-mixing matrix.\n        The mixing matrix can be obtained by::\n\n            w = np.dot(W, K.T)\n            A = w.T * (w * w.T).I\n\n    S : array, shape (n_samples, n_components) | None\n        Estimated source matrix\n\n    X_mean : array, shape (n_features, )\n        The mean over features. Returned only if return_X_mean is True.\n\n    n_iter : int\n        If the algorithm is \"deflation\", n_iter is the\n        maximum number of iterations run across all components. Else\n        they are just the number of iterations taken to converge. This is\n        returned only when return_n_iter is set to `True`.\n\n    Notes\n    -----\n\n    The data matrix X is considered to be a linear combination of\n    non-Gaussian (independent) components i.e. X = AS where columns of S\n    contain the independent components and A is a linear mixing\n    matrix. In short ICA attempts to `un-mix' the data by estimating an\n    un-mixing matrix W where ``S = W K X.``\n\n    This implementation was originally made for data of shape\n    [n_features, n_samples]. Now the input is transposed\n    before the algorithm is applied. This makes it slightly\n    faster for Fortran-ordered input.\n\n    Implemented using FastICA:\n    *A. Hyvarinen and E. Oja, Independent Component Analysis:\n    Algorithms and Applications, Neural Networks, 13(4-5), 2000,\n    pp. 411-430*\n\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            'Training vector, where n_samples is the number of samples and n_features is the number of features.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_components',
          docstring:
            'Number of components to extract. If None no dimension reduction is performed.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'algorithm',
          docstring: 'Apply a parallel or deflational FASTICA algorithm.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'whiten',
          docstring:
            'If True perform an initial whitening of the data. If False, the data is assumed to have already been preprocessed: it should be centered, normed and white. Otherwise you will get incorrect results. In this case the parameter n_components will be ignored.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fun',
          docstring:
            "The functional form of the G function used in the approximation to neg-entropy. Could be either 'logcosh', 'exp', or 'cube'. You can also provide your own function. It should return a tuple containing the value of the function, and of its derivative, in the point. The derivative should be averaged along its last dimension. Example:  def my_g(x):     return x ** 3, np.mean(3 * x ** 2, axis=-1)",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fun_args',
          docstring:
            "Arguments to send to the functional form. If empty or None and if fun='logcosh', fun_args will take value {'alpha' : 1.0}",
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'Maximum number of iterations to perform.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'A positive scalar giving the tolerance at which the un-mixing matrix is considered to have converged.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'w_init',
          docstring:
            "Initial un-mixing array of dimension (n.comp,n.comp). If None (default) then an array of normal r.v.'s is used.",
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_X_mean',
          docstring: 'If True, X_mean is returned too.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'compute_sources',
          docstring:
            'If False, sources are not computed, but only the rotation matrix. This can save memory when working with big data. Defaults to True.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring: 'Whether or not to return the number of iterations.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'K',
          docstring:
            "If whiten is 'True', K is the pre-whitening matrix that projects data onto the first n_components principal components. If whiten is 'False', K is 'None'.",
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          returned: true
        },
        {
          name: 'W',
          docstring:
            'Estimated un-mixing matrix. The mixing matrix can be obtained by::      w = np.dot(W, K.T)     A = w.T * (w * w.T).I',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'S',
          docstring: 'Estimated source matrix',
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          returned: true
        },
        {
          name: 'X_mean',
          docstring:
            'The mean over features. Returned only if return_X_mean is True.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iter',
          docstring:
            'If the algorithm is "deflation", n_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge. This is returned only when return_n_iter is set to `True`.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'non_negative_factorization',
      docstring:
        "Compute Non-negative Matrix Factorization (NMF)\n\n    Find two non-negative matrices (W, H) whose product approximates the non-\n    negative matrix X. This factorization can be used for example for\n    dimensionality reduction, source separation or topic extraction.\n\n    The objective function is::\n\n        0.5 * ||X - WH||_Fro^2\n        + alpha * l1_ratio * ||vec(W)||_1\n        + alpha * l1_ratio * ||vec(H)||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n        + 0.5 * alpha * (1 - l1_ratio) * ||H||_Fro^2\n\n    Where::\n\n        ||A||_Fro^2 = \\sum_{i,j} A_{ij}^2 (Frobenius norm)\n        ||vec(A)||_1 = \\sum_{i,j} abs(A_{ij}) (Elementwise L1 norm)\n\n    For multiplicative-update ('mu') solver, the Frobenius norm\n    (0.5 * ||X - WH||_Fro^2) can be changed into another beta-divergence loss,\n    by changing the beta_loss parameter.\n\n    The objective function is minimized with an alternating minimization of W\n    and H. If H is given and update_H=False, it solves for W only.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        Constant matrix.\n\n    W : array-like, shape (n_samples, n_components)\n        If init='custom', it is used as initial guess for the solution.\n\n    H : array-like, shape (n_components, n_features)\n        If init='custom', it is used as initial guess for the solution.\n        If update_H=False, it is used as a constant, to solve for W only.\n\n    n_components : integer\n        Number of components, if n_components is not set all features\n        are kept.\n\n    init : None | 'random' | 'nndsvd' | 'nndsvda' | 'nndsvdar' | 'custom'\n        Method used to initialize the procedure.\n        Default: 'random'.\n\n        The default value will change from 'random' to None in version 0.23\n        to make it consistent with decomposition.NMF.\n\n        Valid options:\n\n        - None: 'nndsvd' if n_components < n_features, otherwise 'random'.\n\n        - 'random': non-negative random matrices, scaled with:\n            sqrt(X.mean() / n_components)\n\n        - 'nndsvd': Nonnegative Double Singular Value Decomposition (NNDSVD)\n            initialization (better for sparseness)\n\n        - 'nndsvda': NNDSVD with zeros filled with the average of X\n            (better when sparsity is not desired)\n\n        - 'nndsvdar': NNDSVD with zeros filled with small random values\n            (generally faster, less accurate alternative to NNDSVDa\n            for when sparsity is not desired)\n\n        - 'custom': use custom matrices W and H\n\n    update_H : boolean, default: True\n        Set to True, both W and H will be estimated from initial guesses.\n        Set to False, only W will be estimated.\n\n    solver : 'cd' | 'mu'\n        Numerical solver to use:\n        'cd' is a Coordinate Descent solver that uses Fast Hierarchical\n            Alternating Least Squares (Fast HALS).\n        'mu' is a Multiplicative Update solver.\n\n        .. versionadded:: 0.17\n           Coordinate Descent solver.\n\n        .. versionadded:: 0.19\n           Multiplicative Update solver.\n\n    beta_loss : float or string, default 'frobenius'\n        String must be in {'frobenius', 'kullback-leibler', 'itakura-saito'}.\n        Beta divergence to be minimized, measuring the distance between X\n        and the dot product WH. Note that values different from 'frobenius'\n        (or 2) and 'kullback-leibler' (or 1) lead to significantly slower\n        fits. Note that for beta_loss <= 0 (or 'itakura-saito'), the input\n        matrix X cannot contain zeros. Used only in 'mu' solver.\n\n        .. versionadded:: 0.19\n\n    tol : float, default: 1e-4\n        Tolerance of the stopping condition.\n\n    max_iter : integer, default: 200\n        Maximum number of iterations before timing out.\n\n    alpha : double, default: 0.\n        Constant that multiplies the regularization terms.\n\n    l1_ratio : double, default: 0.\n        The regularization mixing parameter, with 0 <= l1_ratio <= 1.\n        For l1_ratio = 0 the penalty is an elementwise L2 penalty\n        (aka Frobenius Norm).\n        For l1_ratio = 1 it is an elementwise L1 penalty.\n        For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.\n\n    regularization : 'both' | 'components' | 'transformation' | None\n        Select whether the regularization affects the components (H), the\n        transformation (W), both or none of them.\n\n    random_state : int, RandomState instance or None, optional, default: None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    verbose : integer, default: 0\n        The verbosity level.\n\n    shuffle : boolean, default: False\n        If true, randomize the order of coordinates in the CD solver.\n\n    Returns\n    -------\n    W : array-like, shape (n_samples, n_components)\n        Solution to the non-negative least squares problem.\n\n    H : array-like, shape (n_components, n_features)\n        Solution to the non-negative least squares problem.\n\n    n_iter : int\n        Actual number of iterations.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> X = np.array([[1,1], [2, 1], [3, 1.2], [4, 1], [5, 0.8], [6, 1]])\n    >>> from sklearn.decomposition import non_negative_factorization\n    >>> W, H, n_iter = non_negative_factorization(X, n_components=2,\n    ... init='random', random_state=0)\n\n    References\n    ----------\n    Cichocki, Andrzej, and P. H. A. N. Anh-Huy. \"Fast local algorithms for\n    large scale nonnegative matrix and tensor factorizations.\"\n    IEICE transactions on fundamentals of electronics, communications and\n    computer sciences 92.3: 708-721, 2009.\n\n    Fevotte, C., & Idier, J. (2011). Algorithms for nonnegative matrix\n    factorization with the beta-divergence. Neural Computation, 23(9).\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'Constant matrix.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'W',
          docstring:
            "If init='custom', it is used as initial guess for the solution.",
          param_type: ['array'],
          expected_shape: '(n_samples, n_components)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'H',
          docstring:
            "If init='custom', it is used as initial guess for the solution. If update_H=False, it is used as a constant, to solve for W only.",
          param_type: ['array'],
          expected_shape: '(n_components, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_components',
          docstring:
            'Number of components, if n_components is not set all features are kept.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'init',
          docstring:
            "Method used to initialize the procedure. Default: 'random'.  The default value will change from 'random' to None in version 0.23 to make it consistent with decomposition.NMF.  Valid options:  - None: 'nndsvd' if n_components < n_features, otherwise 'random'.  - 'random': non-negative random matrices, scaled with:     sqrt(X.mean() / n_components)  - 'nndsvd': Nonnegative Double Singular Value Decomposition (NNDSVD)     initialization (better for sparseness)  - 'nndsvda': NNDSVD with zeros filled with the average of X     (better when sparsity is not desired)  - 'nndsvdar': NNDSVD with zeros filled with small random values     (generally faster, less accurate alternative to NNDSVDa     for when sparsity is not desired)  - 'custom': use custom matrices W and H",
          param_type: ['LIST_VALID_OPTIONS', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'update_H',
          docstring:
            'Set to True, both W and H will be estimated from initial guesses. Set to False, only W will be estimated.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ': True'
        },
        {
          name: 'solver',
          docstring:
            "Numerical solver to use: 'cd' is a Coordinate Descent solver that uses Fast Hierarchical     Alternating Least Squares (Fast HALS). 'mu' is a Multiplicative Update solver.  .. versionadded:: 0.17    Coordinate Descent solver.  .. versionadded:: 0.19    Multiplicative Update solver.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'beta_loss',
          docstring:
            "String must be in {'frobenius', 'kullback-leibler', 'itakura-saito'}. Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from 'frobenius' (or 2) and 'kullback-leibler' (or 1) lead to significantly slower fits. Note that for beta_loss <= 0 (or 'itakura-saito'), the input matrix X cannot contain zeros. Used only in 'mu' solver.  .. versionadded:: 0.19",
          param_type: ['float', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'frobenius'"
        },
        {
          name: 'tol',
          docstring: 'Tolerance of the stopping condition.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 1e-4'
        },
        {
          name: 'max_iter',
          docstring: 'Maximum number of iterations before timing out.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 200'
        },
        {
          name: 'alpha',
          docstring: 'Constant that multiplies the regularization terms.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 0.'
        },
        {
          name: 'l1_ratio',
          docstring:
            'The regularization mixing parameter, with 0 <= l1_ratio <= 1. For l1_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1_ratio = 1 it is an elementwise L1 penalty. For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 0.'
        },
        {
          name: 'regularization',
          docstring:
            'Select whether the regularization affects the components (H), the transformation (W), both or none of them.',
          param_type: ['LIST_VALID_OPTIONS', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'The verbosity level.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 0'
        },
        {
          name: 'shuffle',
          docstring:
            'If true, randomize the order of coordinates in the CD solver.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ': False'
        }
      ],
      outputs: [
        {
          name: 'W',
          docstring: 'Solution to the non-negative least squares problem.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'H',
          docstring: 'Solution to the non-negative least squares problem.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iter',
          docstring: 'Actual number of iterations.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'randomized_svd',
      docstring:
        "Computes a truncated randomized SVD\n\n    Parameters\n    ----------\n    M : ndarray or sparse matrix\n        Matrix to decompose\n\n    n_components : int\n        Number of singular values and vectors to extract.\n\n    n_oversamples : int (default is 10)\n        Additional number of random vectors to sample the range of M so as\n        to ensure proper conditioning. The total number of random vectors\n        used to find the range of M is n_components + n_oversamples. Smaller\n        number can improve speed but can negatively impact the quality of\n        approximation of singular vectors and singular values.\n\n    n_iter : int or 'auto' (default is 'auto')\n        Number of power iterations. It can be used to deal with very noisy\n        problems. When 'auto', it is set to 4, unless `n_components` is small\n        (< .1 * min(X.shape)) `n_iter` in which case is set to 7.\n        This improves precision with few components.\n\n        .. versionchanged:: 0.18\n\n    power_iteration_normalizer : 'auto' (default), 'QR', 'LU', 'none'\n        Whether the power iterations are normalized with step-by-step\n        QR factorization (the slowest but most accurate), 'none'\n        (the fastest but numerically unstable when `n_iter` is large, e.g.\n        typically 5 or larger), or 'LU' factorization (numerically stable\n        but can lose slightly in accuracy). The 'auto' mode applies no\n        normalization if `n_iter` <= 2 and switches to LU otherwise.\n\n        .. versionadded:: 0.18\n\n    transpose : True, False or 'auto' (default)\n        Whether the algorithm should be applied to M.T instead of M. The\n        result should approximately be the same. The 'auto' mode will\n        trigger the transposition if M.shape[1] > M.shape[0] since this\n        implementation of randomized SVD tend to be a little faster in that\n        case.\n\n        .. versionchanged:: 0.18\n\n    flip_sign : boolean, (True by default)\n        The output of a singular value decomposition is only unique up to a\n        permutation of the signs of the singular vectors. If `flip_sign` is\n        set to `True`, the sign ambiguity is resolved by making the largest\n        loadings for each component in the left singular vectors positive.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    Notes\n    -----\n    This algorithm finds a (usually very good) approximate truncated\n    singular value decomposition using randomization to speed up the\n    computations. It is particularly fast on large matrices on which\n    you wish to extract only a small number of components. In order to\n    obtain further speed up, `n_iter` can be set <=2 (at the cost of\n    loss of precision).\n\n    References\n    ----------\n    * Finding structure with randomness: Stochastic algorithms for constructing\n      approximate matrix decompositions\n      Halko, et al., 2009 https://arxiv.org/abs/0909.4061\n\n    * A randomized algorithm for the decomposition of matrices\n      Per-Gunnar Martinsson, Vladimir Rokhlin and Mark Tygert\n\n    * An implementation of a randomized algorithm for principal component\n      analysis\n      A. Szlam et al. 2014\n    ",
      inputs: [
        {
          name: 'M',
          docstring: 'Matrix to decompose',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_components',
          docstring: 'Number of singular values and vectors to extract.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_oversamples',
          docstring:
            'Additional number of random vectors to sample the range of M so as to ensure proper conditioning. The total number of random vectors used to find the range of M is n_components + n_oversamples. Smaller number can improve speed but can negatively impact the quality of approximation of singular vectors and singular values.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: 'is 10)'
        },
        {
          name: 'n_iter',
          docstring:
            "Number of power iterations. It can be used to deal with very noisy problems. When 'auto', it is set to 4, unless `n_components` is small (< .1 * min(X.shape)) `n_iter` in which case is set to 7. This improves precision with few components.  .. versionchanged:: 0.18",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: "is 'auto')"
        },
        {
          name: 'power_iteration_normalizer',
          docstring:
            "Whether the power iterations are normalized with step-by-step QR factorization (the slowest but most accurate), 'none' (the fastest but numerically unstable when `n_iter` is large, e.g. typically 5 or larger), or 'LU' factorization (numerically stable but can lose slightly in accuracy). The 'auto' mode applies no normalization if `n_iter` <= 2 and switches to LU otherwise.  .. versionadded:: 0.18",
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: "'"
        },
        {
          name: 'transpose',
          docstring:
            "Whether the algorithm should be applied to M.T instead of M. The result should approximately be the same. The 'auto' mode will trigger the transposition if M.shape[1] > M.shape[0] since this implementation of randomized SVD tend to be a little faster in that case.  .. versionchanged:: 0.18",
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: ')'
        },
        {
          name: 'flip_sign',
          docstring:
            'The output of a singular value decomposition is only unique up to a permutation of the signs of the singular vectors. If `flip_sign` is set to `True`, the sign ambiguity is resolved by making the largest loadings for each component in the left singular vectors positive.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ')'
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: []
    },
    {
      name: 'sparse_encode',
      docstring:
        "Sparse coding\n\n    Each row of the result is the solution to a sparse coding problem.\n    The goal is to find a sparse array `code` such that::\n\n        X ~= code * dictionary\n\n    Read more in the :ref:`User Guide <SparseCoder>`.\n\n    Parameters\n    ----------\n    X : array of shape (n_samples, n_features)\n        Data matrix\n\n    dictionary : array of shape (n_components, n_features)\n        The dictionary matrix against which to solve the sparse coding of\n        the data. Some of the algorithms assume normalized rows for meaningful\n        output.\n\n    gram : array, shape=(n_components, n_components)\n        Precomputed Gram matrix, dictionary * dictionary'\n\n    cov : array, shape=(n_components, n_samples)\n        Precomputed covariance, dictionary' * X\n\n    algorithm : {'lasso_lars', 'lasso_cd', 'lars', 'omp', 'threshold'}\n        lars: uses the least angle regression method (linear_model.lars_path)\n        lasso_lars: uses Lars to compute the Lasso solution\n        lasso_cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). lasso_lars will be faster if\n        the estimated components are sparse.\n        omp: uses orthogonal matching pursuit to estimate the sparse solution\n        threshold: squashes to zero all coefficients less than alpha from\n        the projection dictionary * X'\n\n    n_nonzero_coefs : int, 0.1 * n_features by default\n        Number of nonzero coefficients to target in each column of the\n        solution. This is only used by `algorithm='lars'` and `algorithm='omp'`\n        and is overridden by `alpha` in the `omp` case.\n\n    alpha : float, 1. by default\n        If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the\n        penalty applied to the L1 norm.\n        If `algorithm='threshold'`, `alpha` is the absolute value of the\n        threshold below which coefficients will be squashed to zero.\n        If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of\n        the reconstruction error targeted. In this case, it overrides\n        `n_nonzero_coefs`.\n\n    copy_cov : boolean, optional\n        Whether to copy the precomputed covariance matrix; if False, it may be\n        overwritten.\n\n    init : array of shape (n_samples, n_components)\n        Initialization value of the sparse codes. Only used if\n        `algorithm='lasso_cd'`.\n\n    max_iter : int, 1000 by default\n        Maximum number of iterations to perform if `algorithm='lasso_cd'`.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    check_input : boolean, optional\n        If False, the input arrays X and dictionary will not be checked.\n\n    verbose : int, optional\n        Controls the verbosity; the higher, the more messages. Defaults to 0.\n\n    positive : boolean, optional\n        Whether to enforce positivity when finding the encoding.\n\n        .. versionadded:: 0.20\n\n    Returns\n    -------\n    code : array of shape (n_samples, n_components)\n        The sparse codes\n\n    See also\n    --------\n    sklearn.linear_model.lars_path\n    sklearn.linear_model.orthogonal_mp\n    sklearn.linear_model.Lasso\n    SparseCoder\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'Data matrix',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'dictionary',
          docstring:
            'The dictionary matrix against which to solve the sparse coding of the data. Some of the algorithms assume normalized rows for meaningful output.',
          param_type: ['array'],
          expected_shape: '(n_components, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'gram',
          docstring: "Precomputed Gram matrix, dictionary * dictionary'",
          param_type: ['array'],
          expected_shape: '=(n_components, n_components)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'cov',
          docstring: "Precomputed covariance, dictionary' * X",
          param_type: ['array'],
          expected_shape: '=(n_components, n_samples)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'algorithm',
          docstring:
            "lars: uses the least angle regression method (linear_model.lars_path) lasso_lars: uses Lars to compute the Lasso solution lasso_cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). lasso_lars will be faster if the estimated components are sparse. omp: uses orthogonal matching pursuit to estimate the sparse solution threshold: squashes to zero all coefficients less than alpha from the projection dictionary * X'",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_nonzero_coefs',
          docstring:
            "Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'` and is overridden by `alpha` in the `omp` case.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'alpha',
          docstring:
            "If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of the reconstruction error targeted. In this case, it overrides `n_nonzero_coefs`.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'copy_cov',
          docstring:
            'Whether to copy the precomputed covariance matrix; if False, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'init',
          docstring:
            "Initialization value of the sparse codes. Only used if `algorithm='lasso_cd'`.",
          param_type: ['array'],
          expected_shape: '(n_samples, n_components)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            "Maximum number of iterations to perform if `algorithm='lasso_cd'`.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'check_input',
          docstring:
            'If False, the input arrays X and dictionary will not be checked.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Controls the verbosity; the higher, the more messages. Defaults to 0.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'Whether to enforce positivity when finding the encoding.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'code',
          docstring: 'The sparse codes',
          param_type: ['array'],
          returned: true
        }
      ]
    }
  ],
  nodes: [
    {
      name: 'DictionaryLearning',
      docstring:
        "Dictionary learning\n\n    Finds a dictionary (a set of atoms) that can best be used to represent data\n    using a sparse code.\n\n    Solves the optimization problem::\n\n        (U^*,V^*) = argmin 0.5 || Y - U V ||_2^2 + alpha * || U ||_1\n                    (U,V)\n                    with || V_k ||_2 = 1 for all  0 <= k < n_components\n\n    Read more in the :ref:`User Guide <DictionaryLearning>`.\n\n    Parameters\n    ----------\n    n_components : int,\n        number of dictionary elements to extract\n\n    alpha : float,\n        sparsity controlling parameter\n\n    max_iter : int,\n        maximum number of iterations to perform\n\n    tol : float,\n        tolerance for numerical error\n\n    fit_algorithm : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n        .. versionadded:: 0.17\n           *cd* coordinate descent method to improve speed.\n\n    transform_algorithm : {'lasso_lars', 'lasso_cd', 'lars', 'omp',     'threshold'}\n        Algorithm used to transform the data\n        lars: uses the least angle regression method (linear_model.lars_path)\n        lasso_lars: uses Lars to compute the Lasso solution\n        lasso_cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). lasso_lars will be faster if\n        the estimated components are sparse.\n        omp: uses orthogonal matching pursuit to estimate the sparse solution\n        threshold: squashes to zero all coefficients less than alpha from\n        the projection ``dictionary * X'``\n\n        .. versionadded:: 0.17\n           *lasso_cd* coordinate descent method to improve speed.\n\n    transform_n_nonzero_coefs : int, ``0.1 * n_features`` by default\n        Number of nonzero coefficients to target in each column of the\n        solution. This is only used by `algorithm='lars'` and `algorithm='omp'`\n        and is overridden by `alpha` in the `omp` case.\n\n    transform_alpha : float, 1. by default\n        If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the\n        penalty applied to the L1 norm.\n        If `algorithm='threshold'`, `alpha` is the absolute value of the\n        threshold below which coefficients will be squashed to zero.\n        If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of\n        the reconstruction error targeted. In this case, it overrides\n        `n_nonzero_coefs`.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    code_init : array of shape (n_samples, n_components),\n        initial value for the code, for warm restart\n\n    dict_init : array of shape (n_components, n_features),\n        initial values for the dictionary, for warm restart\n\n    verbose : bool, optional (default: False)\n        To control the verbosity of the procedure.\n\n    split_sign : bool, False by default\n        Whether to split the sparse feature vector into the concatenation of\n        its negative part and its positive part. This can improve the\n        performance of downstream classifiers.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    positive_code : bool\n        Whether to enforce positivity when finding the code.\n\n        .. versionadded:: 0.20\n\n    positive_dict : bool\n        Whether to enforce positivity when finding the dictionary\n\n        .. versionadded:: 0.20\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        dictionary atoms extracted from the data\n\n    error_ : array\n        vector of errors at each iteration\n\n    n_iter_ : int\n        Number of iterations run.\n\n    Notes\n    -----\n    **References:**\n\n    J. Mairal, F. Bach, J. Ponce, G. Sapiro, 2009: Online dictionary learning\n    for sparse coding (https://www.di.ens.fr/sierra/pdfs/icml09.pdf)\n\n    See also\n    --------\n    SparseCoder\n    MiniBatchDictionaryLearning\n    SparsePCA\n    MiniBatchSparsePCA\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring: 'number of dictionary elements to extract',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring: 'sparsity controlling parameter',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'maximum number of iterations to perform',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'tolerance for numerical error',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_algorithm',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.  .. versionadded:: 0.17    *cd* coordinate descent method to improve speed.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'transform_algorithm',
          docstring:
            "Algorithm used to transform the data lars: uses the least angle regression method (linear_model.lars_path) lasso_lars: uses Lars to compute the Lasso solution lasso_cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). lasso_lars will be faster if the estimated components are sparse. omp: uses orthogonal matching pursuit to estimate the sparse solution threshold: squashes to zero all coefficients less than alpha from the projection ``dictionary * X'``  .. versionadded:: 0.17    *lasso_cd* coordinate descent method to improve speed.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'transform_n_nonzero_coefs',
          docstring:
            "Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'` and is overridden by `alpha` in the `omp` case.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'transform_alpha',
          docstring:
            "If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of the reconstruction error targeted. In this case, it overrides `n_nonzero_coefs`.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'code_init',
          docstring: 'initial value for the code, for warm restart',
          param_type: ['array'],
          expected_shape: '(n_samples, n_components),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'dict_init',
          docstring: 'initial values for the dictionary, for warm restart',
          param_type: ['array'],
          expected_shape: '(n_components, n_features),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'To control the verbosity of the procedure.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'split_sign',
          docstring:
            'Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive_code',
          docstring:
            'Whether to enforce positivity when finding the code.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive_dict',
          docstring:
            'Whether to enforce positivity when finding the dictionary  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'dictionary atoms extracted from the data',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'error_',
          docstring: 'vector of errors at each iteration',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of iterations run.',
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
          name: '_set_sparse_coding_params',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model from data in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the object itself\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
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
            'Encode the data as a sparse combination of the dictionary atoms.\n\n        Coding method is determined by the object parameter\n        `transform_algorithm`.\n\n        Parameters\n        ----------\n        X : array of shape (n_samples, n_features)\n            Test data to be transformed, must have the same number of\n            features as the data used to train the model.\n\n        Returns\n        -------\n        X_new : array, shape (n_samples, n_components)\n            Transformed data\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Test data to be transformed, must have the same number of features as the data used to train the model.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed data',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'FactorAnalysis',
      docstring:
        "Factor Analysis (FA)\n\n    A simple linear generative model with Gaussian latent variables.\n\n    The observations are assumed to be caused by a linear transformation of\n    lower dimensional latent factors and added Gaussian noise.\n    Without loss of generality the factors are distributed according to a\n    Gaussian with zero mean and unit covariance. The noise is also zero mean\n    and has an arbitrary diagonal covariance matrix.\n\n    If we would restrict the model further, by assuming that the Gaussian\n    noise is even isotropic (all diagonal entries are the same) we would obtain\n    :class:`PPCA`.\n\n    FactorAnalysis performs a maximum likelihood estimate of the so-called\n    `loading` matrix, the transformation of the latent variables to the\n    observed ones, using expectation-maximization (EM).\n\n    Read more in the :ref:`User Guide <FA>`.\n\n    Parameters\n    ----------\n    n_components : int | None\n        Dimensionality of latent space, the number of components\n        of ``X`` that are obtained after ``transform``.\n        If None, n_components is set to the number of features.\n\n    tol : float\n        Stopping tolerance for EM algorithm.\n\n    copy : bool\n        Whether to make a copy of X. If ``False``, the input X gets overwritten\n        during fitting.\n\n    max_iter : int\n        Maximum number of iterations.\n\n    noise_variance_init : None | array, shape=(n_features,)\n        The initial guess of the noise variance for each feature.\n        If None, it defaults to np.ones(n_features)\n\n    svd_method : {'lapack', 'randomized'}\n        Which SVD method to use. If 'lapack' use standard SVD from\n        scipy.linalg, if 'randomized' use fast ``randomized_svd`` function.\n        Defaults to 'randomized'. For most applications 'randomized' will\n        be sufficiently precise while providing significant speed gains.\n        Accuracy can also be improved by setting higher values for\n        `iterated_power`. If this is not sufficient, for maximum precision\n        you should choose 'lapack'.\n\n    iterated_power : int, optional\n        Number of iterations for the power method. 3 by default. Only used\n        if ``svd_method`` equals 'randomized'\n\n    random_state : int, RandomState instance or None, optional (default=0)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Only used when ``svd_method`` equals 'randomized'.\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        Components with maximum variance.\n\n    loglike_ : list, [n_iterations]\n        The log likelihood at each iteration.\n\n    noise_variance_ : array, shape=(n_features,)\n        The estimated noise variance for each feature.\n\n    n_iter_ : int\n        Number of iterations run.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_digits\n    >>> from sklearn.decomposition import FactorAnalysis\n    >>> X, _ = load_digits(return_X_y=True)\n    >>> transformer = FactorAnalysis(n_components=7, random_state=0)\n    >>> X_transformed = transformer.fit_transform(X)\n    >>> X_transformed.shape\n    (1797, 7)\n\n    References\n    ----------\n    .. David Barber, Bayesian Reasoning and Machine Learning,\n        Algorithm 21.1\n\n    .. Christopher M. Bishop: Pattern Recognition and Machine Learning,\n        Chapter 12.2.4\n\n    See also\n    --------\n    PCA: Principal component analysis is also a latent linear variable model\n        which however assumes equal noise variance for each feature.\n        This extra assumption makes probabilistic PCA faster as it can be\n        computed in closed form.\n    FastICA: Independent component analysis, a latent variable model with\n        non-Gaussian latent variables.\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring:
            'Dimensionality of latent space, the number of components of ``X`` that are obtained after ``transform``. If None, n_components is set to the number of features.',
          param_type: ['LIST_VALID_OPTIONS', 'int', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Stopping tolerance for EM algorithm.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'Whether to make a copy of X. If ``False``, the input X gets overwritten during fitting.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'Maximum number of iterations.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'noise_variance_init',
          docstring:
            'The initial guess of the noise variance for each feature. If None, it defaults to np.ones(n_features)',
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          expected_shape: '=(n_features,)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'svd_method',
          docstring:
            "Which SVD method to use. If 'lapack' use standard SVD from scipy.linalg, if 'randomized' use fast ``randomized_svd`` function. Defaults to 'randomized'. For most applications 'randomized' will be sufficiently precise while providing significant speed gains. Accuracy can also be improved by setting higher values for `iterated_power`. If this is not sufficient, for maximum precision you should choose 'lapack'.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'iterated_power',
          docstring:
            "Number of iterations for the power method. 3 by default. Only used if ``svd_method`` equals 'randomized'",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Only used when ``svd_method`` equals 'randomized'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'Components with maximum variance.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'loglike_',
          docstring: 'The log likelihood at each iteration.',
          param_type: ['list'],
          returned: false
        },
        {
          name: 'noise_variance_',
          docstring: 'The estimated noise variance for each feature.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of iterations run.',
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
          name: 'fit',
          docstring:
            'Fit the FactorAnalysis model to X using EM\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        y : Ignored\n\n        Returns\n        -------\n        self\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data.',
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
          name: 'get_covariance',
          docstring:
            'Compute data covariance with the FactorAnalysis model.\n\n        ``cov = components_.T * components_ + diag(noise_variance)``\n\n        Returns\n        -------\n        cov : array, shape (n_features, n_features)\n            Estimated covariance of data.\n        ',
          inputs: [],
          outputs: [
            {
              name: 'cov',
              docstring: 'Estimated covariance of data.',
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
          name: 'get_precision',
          docstring:
            'Compute data precision matrix with the FactorAnalysis model.\n\n        Returns\n        -------\n        precision : array, shape (n_features, n_features)\n            Estimated precision of data.\n        ',
          inputs: [],
          outputs: [
            {
              name: 'precision',
              docstring: 'Estimated precision of data.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Compute the average log-likelihood of the samples\n\n        Parameters\n        ----------\n        X : array, shape (n_samples, n_features)\n            The data\n\n        y : Ignored\n\n        Returns\n        -------\n        ll : float\n            Average log-likelihood of the samples under the current model\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data',
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
              name: 'll',
              docstring:
                'Average log-likelihood of the samples under the current model',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'score_samples',
          docstring:
            'Compute the log-likelihood of each sample\n\n        Parameters\n        ----------\n        X : array, shape (n_samples, n_features)\n            The data\n\n        Returns\n        -------\n        ll : array, shape (n_samples,)\n            Log-likelihood of each sample under the current model\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'The data',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'll',
              docstring:
                'Log-likelihood of each sample under the current model',
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
            'Apply dimensionality reduction to X using the model.\n\n        Compute the expected mean of the latent variables.\n        See Barber, 21.2.33 (or Bishop, 12.66).\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n            The latent variables of X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'The latent variables of X.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'FastICA',
      docstring:
        "FastICA: a fast algorithm for Independent Component Analysis.\n\n    Read more in the :ref:`User Guide <ICA>`.\n\n    Parameters\n    ----------\n    n_components : int, optional\n        Number of components to use. If none is passed, all are used.\n\n    algorithm : {'parallel', 'deflation'}\n        Apply parallel or deflational algorithm for FastICA.\n\n    whiten : boolean, optional\n        If whiten is false, the data is already considered to be\n        whitened, and no whitening is performed.\n\n    fun : string or function, optional. Default: 'logcosh'\n        The functional form of the G function used in the\n        approximation to neg-entropy. Could be either 'logcosh', 'exp',\n        or 'cube'.\n        You can also provide your own function. It should return a tuple\n        containing the value of the function, and of its derivative, in the\n        point. Example:\n\n        def my_g(x):\n            return x ** 3, (3 * x ** 2).mean(axis=-1)\n\n    fun_args : dictionary, optional\n        Arguments to send to the functional form.\n        If empty and if fun='logcosh', fun_args will take value\n        {'alpha' : 1.0}.\n\n    max_iter : int, optional\n        Maximum number of iterations during fit.\n\n    tol : float, optional\n        Tolerance on update at each iteration.\n\n    w_init : None of an (n_components, n_components) ndarray\n        The mixing matrix to be used to initialize the algorithm.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    Attributes\n    ----------\n    components_ : 2D array, shape (n_components, n_features)\n        The unmixing matrix.\n\n    mixing_ : array, shape (n_features, n_components)\n        The mixing matrix.\n\n    n_iter_ : int\n        If the algorithm is \"deflation\", n_iter is the\n        maximum number of iterations run across all components. Else\n        they are just the number of iterations taken to converge.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_digits\n    >>> from sklearn.decomposition import FastICA\n    >>> X, _ = load_digits(return_X_y=True)\n    >>> transformer = FastICA(n_components=7,\n    ...         random_state=0)\n    >>> X_transformed = transformer.fit_transform(X)\n    >>> X_transformed.shape\n    (1797, 7)\n\n    Notes\n    -----\n    Implementation based on\n    *A. Hyvarinen and E. Oja, Independent Component Analysis:\n    Algorithms and Applications, Neural Networks, 13(4-5), 2000,\n    pp. 411-430*\n\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring:
            'Number of components to use. If none is passed, all are used.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'algorithm',
          docstring: 'Apply parallel or deflational algorithm for FastICA.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'whiten',
          docstring:
            'If whiten is false, the data is already considered to be whitened, and no whitening is performed.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fun',
          docstring:
            "The functional form of the G function used in the approximation to neg-entropy. Could be either 'logcosh', 'exp', or 'cube'. You can also provide your own function. It should return a tuple containing the value of the function, and of its derivative, in the point. Example:  def my_g(x):     return x ** 3, (3 * x ** 2).mean(axis=-1)",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fun_args',
          docstring:
            "Arguments to send to the functional form. If empty and if fun='logcosh', fun_args will take value {'alpha' : 1.0}.",
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'Maximum number of iterations during fit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance on update at each iteration.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'w_init',
          docstring:
            'The mixing matrix to be used to initialize the algorithm.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'The unmixing matrix.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'mixing_',
          docstring: 'The mixing matrix.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'If the algorithm is "deflation", n_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge.',
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
          name: '_fit',
          docstring:
            'Fit the model\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        compute_sources : bool\n            If False, sources are not computes but only the rotation matrix.\n            This can save memory when working with big data. Defaults to False.\n\n        Returns\n        -------\n            X_new : array-like, shape (n_samples, n_components)\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'compute_sources',
              docstring:
                'If False, sources are not computes but only the rotation matrix. This can save memory when working with big data. Defaults to False.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
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
            'Fit the model to X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
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
            'Fit the model and recover the sources from X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
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
              name: 'X_new',
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
            'Transform the sources back to the mixed data (apply mixing matrix).\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_components)\n            Sources, where n_samples is the number of samples\n            and n_components is the number of components.\n        copy : bool (optional)\n            If False, data passed to fit are overwritten. Defaults to True.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_features)\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Sources, where n_samples is the number of samples and n_components is the number of components.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_components)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy',
              docstring:
                'If False, data passed to fit are overwritten. Defaults to True.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
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
            'Recover the sources from X (apply the unmixing matrix).\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Data to transform, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        copy : bool (optional)\n            If False, data passed to fit are overwritten. Defaults to True.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Data to transform, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy',
              docstring:
                'If False, data passed to fit are overwritten. Defaults to True.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
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
      name: 'IncrementalPCA',
      docstring:
        'Incremental principal components analysis (IPCA).\n\n    Linear dimensionality reduction using Singular Value Decomposition of\n    the data, keeping only the most significant singular vectors to\n    project the data to a lower dimensional space. The input data is centered\n    but not scaled for each feature before applying the SVD.\n\n    Depending on the size of the input data, this algorithm can be much more\n    memory efficient than a PCA.\n\n    This algorithm has constant memory complexity, on the order\n    of ``batch_size``, enabling use of np.memmap files without loading the\n    entire file into memory.\n\n    The computational overhead of each SVD is\n    ``O(batch_size * n_features ** 2)``, but only 2 * batch_size samples\n    remain in memory at a time. There will be ``n_samples / batch_size`` SVD\n    computations to get the principal components, versus 1 large SVD of\n    complexity ``O(n_samples * n_features ** 2)`` for PCA.\n\n    Read more in the :ref:`User Guide <IncrementalPCA>`.\n\n    Parameters\n    ----------\n    n_components : int or None, (default=None)\n        Number of components to keep. If ``n_components `` is ``None``,\n        then ``n_components`` is set to ``min(n_samples, n_features)``.\n\n    whiten : bool, optional\n        When True (False by default) the ``components_`` vectors are divided\n        by ``n_samples`` times ``components_`` to ensure uncorrelated outputs\n        with unit component-wise variances.\n\n        Whitening will remove some information from the transformed signal\n        (the relative variance scales of the components) but can sometimes\n        improve the predictive accuracy of the downstream estimators by\n        making data respect some hard-wired assumptions.\n\n    copy : bool, (default=True)\n        If False, X will be overwritten. ``copy=False`` can be used to\n        save memory but is unsafe for general use.\n\n    batch_size : int or None, (default=None)\n        The number of samples to use for each batch. Only used when calling\n        ``fit``. If ``batch_size`` is ``None``, then ``batch_size``\n        is inferred from the data and set to ``5 * n_features``, to provide a\n        balance between approximation accuracy and memory consumption.\n\n    Attributes\n    ----------\n    components_ : array, shape (n_components, n_features)\n        Components with maximum variance.\n\n    explained_variance_ : array, shape (n_components,)\n        Variance explained by each of the selected components.\n\n    explained_variance_ratio_ : array, shape (n_components,)\n        Percentage of variance explained by each of the selected components.\n        If all components are stored, the sum of explained variances is equal\n        to 1.0.\n\n    singular_values_ : array, shape (n_components,)\n        The singular values corresponding to each of the selected components.\n        The singular values are equal to the 2-norms of the ``n_components``\n        variables in the lower-dimensional space.\n\n    mean_ : array, shape (n_features,)\n        Per-feature empirical mean, aggregate over calls to ``partial_fit``.\n\n    var_ : array, shape (n_features,)\n        Per-feature empirical variance, aggregate over calls to\n        ``partial_fit``.\n\n    noise_variance_ : float\n        The estimated noise covariance following the Probabilistic PCA model\n        from Tipping and Bishop 1999. See "Pattern Recognition and\n        Machine Learning" by C. Bishop, 12.2.1 p. 574 or\n        http://www.miketipping.com/papers/met-mppca.pdf.\n\n    n_components_ : int\n        The estimated number of components. Relevant when\n        ``n_components=None``.\n\n    n_samples_seen_ : int\n        The number of samples processed by the estimator. Will be reset on\n        new calls to fit, but increments across ``partial_fit`` calls.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_digits\n    >>> from sklearn.decomposition import IncrementalPCA\n    >>> X, _ = load_digits(return_X_y=True)\n    >>> transformer = IncrementalPCA(n_components=7, batch_size=200)\n    >>> # either partially fit on smaller batches of data\n    >>> transformer.partial_fit(X[:100, :])\n    IncrementalPCA(batch_size=200, copy=True, n_components=7, whiten=False)\n    >>> # or let the fit function itself divide the data into batches\n    >>> X_transformed = transformer.fit_transform(X)\n    >>> X_transformed.shape\n    (1797, 7)\n\n    Notes\n    -----\n    Implements the incremental PCA model from:\n    *D. Ross, J. Lim, R. Lin, M. Yang, Incremental Learning for Robust Visual\n    Tracking, International Journal of Computer Vision, Volume 77, Issue 1-3,\n    pp. 125-141, May 2008.*\n    See https://www.cs.toronto.edu/~dross/ivt/RossLimLinYang_ijcv.pdf\n\n    This model is an extension of the Sequential Karhunen-Loeve Transform from:\n    *A. Levy and M. Lindenbaum, Sequential Karhunen-Loeve Basis Extraction and\n    its Application to Images, IEEE Transactions on Image Processing, Volume 9,\n    Number 8, pp. 1371-1374, August 2000.*\n    See https://www.cs.technion.ac.il/~mic/doc/skl-ip.pdf\n\n    We have specifically abstained from an optimization used by authors of both\n    papers, a QR decomposition used in specific situations to reduce the\n    algorithmic complexity of the SVD. The source for this technique is\n    *Matrix Computations, Third Edition, G. Holub and C. Van Loan, Chapter 5,\n    section 5.4.4, pp 252-253.*. This technique has been omitted because it is\n    advantageous only when decomposing a matrix with ``n_samples`` (rows)\n    >= 5/3 * ``n_features`` (columns), and hurts the readability of the\n    implemented algorithm. This would be a good opportunity for future\n    optimization, if it is deemed necessary.\n\n    References\n    ----------\n    D. Ross, J. Lim, R. Lin, M. Yang. Incremental Learning for Robust Visual\n    Tracking, International Journal of Computer Vision, Volume 77,\n    Issue 1-3, pp. 125-141, May 2008.\n\n    G. Golub and C. Van Loan. Matrix Computations, Third Edition, Chapter 5,\n    Section 5.4.4, pp. 252-253.\n\n    See also\n    --------\n    PCA\n    KernelPCA\n    SparsePCA\n    TruncatedSVD\n    ',
      inputs: [
        {
          name: 'n_components',
          docstring:
            'Number of components to keep. If ``n_components `` is ``None``, then ``n_components`` is set to ``min(n_samples, n_features)``.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None)'
        },
        {
          name: 'whiten',
          docstring:
            'When True (False by default) the ``components_`` vectors are divided by ``n_samples`` times ``components_`` to ensure uncorrelated outputs with unit component-wise variances.  Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometimes improve the predictive accuracy of the downstream estimators by making data respect some hard-wired assumptions.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'If False, X will be overwritten. ``copy=False`` can be used to save memory but is unsafe for general use.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True)'
        },
        {
          name: 'batch_size',
          docstring:
            'The number of samples to use for each batch. Only used when calling ``fit``. If ``batch_size`` is ``None``, then ``batch_size`` is inferred from the data and set to ``5 * n_features``, to provide a balance between approximation accuracy and memory consumption.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None)'
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'Components with maximum variance.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'explained_variance_',
          docstring: 'Variance explained by each of the selected components.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'explained_variance_ratio_',
          docstring:
            'Percentage of variance explained by each of the selected components. If all components are stored, the sum of explained variances is equal to 1.0.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'singular_values_',
          docstring:
            'The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the ``n_components`` variables in the lower-dimensional space.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'mean_',
          docstring:
            'Per-feature empirical mean, aggregate over calls to ``partial_fit``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'var_',
          docstring:
            'Per-feature empirical variance, aggregate over calls to ``partial_fit``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'noise_variance_',
          docstring:
            'The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See "Pattern Recognition and Machine Learning" by C. Bishop, 12.2.1 p. 574 or http://www.miketipping.com/papers/met-mppca.pdf.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'n_components_',
          docstring:
            'The estimated number of components. Relevant when ``n_components=None``.',
          param_type: ['int'],
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
          name: 'fit',
          docstring:
            'Fit the model with X, using minibatches of size batch_size.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
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
          name: 'get_covariance',
          docstring:
            'Compute data covariance with the generative model.\n\n        ``cov = components_.T * S**2 * components_ + sigma2 * eye(n_features)``\n        where S**2 contains the explained variances, and sigma2 contains the\n        noise variances.\n\n        Returns\n        -------\n        cov : array, shape=(n_features, n_features)\n            Estimated covariance of data.\n        ',
          inputs: [],
          outputs: [
            {
              name: 'cov',
              docstring: 'Estimated covariance of data.',
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
          name: 'get_precision',
          docstring:
            'Compute data precision matrix with the generative model.\n\n        Equals the inverse of the covariance but computed with\n        the matrix inversion lemma for efficiency.\n\n        Returns\n        -------\n        precision : array, shape=(n_features, n_features)\n            Estimated precision of data.\n        ',
          inputs: [],
          outputs: [
            {
              name: 'precision',
              docstring: 'Estimated precision of data.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Transform data back to its original space.\n\n        In other words, return an input X_original whose transform would be X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_components)\n            New data, where n_samples is the number of samples\n            and n_components is the number of components.\n\n        Returns\n        -------\n        X_original array-like, shape (n_samples, n_features)\n\n        Notes\n        -----\n        If whitening is enabled, inverse_transform will compute the\n        exact inverse operation, which includes reversing whitening.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'New data, where n_samples is the number of samples and n_components is the number of components.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_components)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'partial_fit',
          docstring:
            'Incremental fit with X. All of X is processed as a single batch.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples and\n            n_features is the number of features.\n        check_input : bool\n            Run check_array on X.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'check_input',
              docstring: 'Run check_array on X.',
              param_type: ['bool'],
              expected_shape: null,
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
            'Apply dimensionality reduction to X.\n\n        X is projected on the first principal components previously extracted\n        from a training set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            New data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n\n        Examples\n        --------\n\n        >>> import numpy as np\n        >>> from sklearn.decomposition import IncrementalPCA\n        >>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])\n        >>> ipca = IncrementalPCA(n_components=2, batch_size=3)\n        >>> ipca.fit(X)\n        IncrementalPCA(batch_size=3, copy=True, n_components=2, whiten=False)\n        >>> ipca.transform(X) # doctest: +SKIP\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'New data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
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
      name: 'KernelPCA',
      docstring:
        'Kernel Principal component analysis (KPCA)\n\n    Non-linear dimensionality reduction through the use of kernels (see\n    :ref:`metrics`).\n\n    Read more in the :ref:`User Guide <kernel_PCA>`.\n\n    Parameters\n    ----------\n    n_components : int, default=None\n        Number of components. If None, all non-zero components are kept.\n\n    kernel : "linear" | "poly" | "rbf" | "sigmoid" | "cosine" | "precomputed"\n        Kernel. Default="linear".\n\n    gamma : float, default=1/n_features\n        Kernel coefficient for rbf, poly and sigmoid kernels. Ignored by other\n        kernels.\n\n    degree : int, default=3\n        Degree for poly kernels. Ignored by other kernels.\n\n    coef0 : float, default=1\n        Independent term in poly and sigmoid kernels.\n        Ignored by other kernels.\n\n    kernel_params : mapping of string to any, default=None\n        Parameters (keyword arguments) and values for kernel passed as\n        callable object. Ignored by other kernels.\n\n    alpha : int, default=1.0\n        Hyperparameter of the ridge regression that learns the\n        inverse transform (when fit_inverse_transform=True).\n\n    fit_inverse_transform : bool, default=False\n        Learn the inverse transform for non-precomputed kernels.\n        (i.e. learn to find the pre-image of a point)\n\n    eigen_solver : string [\'auto\'|\'dense\'|\'arpack\'], default=\'auto\'\n        Select eigensolver to use. If n_components is much less than\n        the number of training samples, arpack may be more efficient\n        than the dense eigensolver.\n\n    tol : float, default=0\n        Convergence tolerance for arpack.\n        If 0, optimal value will be chosen by arpack.\n\n    max_iter : int, default=None\n        Maximum number of iterations for arpack.\n        If None, optimal value will be chosen by arpack.\n\n    remove_zero_eig : boolean, default=False\n        If True, then all components with zero eigenvalues are removed, so\n        that the number of components in the output may be < n_components\n        (and sometimes even zero due to numerical instability).\n        When n_components is None, this parameter is ignored and components\n        with zero eigenvalues are removed regardless.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Used when ``eigen_solver`` == \'arpack\'.\n\n        .. versionadded:: 0.18\n\n    copy_X : boolean, default=True\n        If True, input X is copied and stored by the model in the `X_fit_`\n        attribute. If no further changes will be done to X, setting\n        `copy_X=False` saves memory by storing a reference.\n\n        .. versionadded:: 0.18\n\n    n_jobs : int or None, optional (default=None)\n        The number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n        .. versionadded:: 0.18\n\n    Attributes\n    ----------\n    lambdas_ : array, (n_components,)\n        Eigenvalues of the centered kernel matrix in decreasing order.\n        If `n_components` and `remove_zero_eig` are not set,\n        then all values are stored.\n\n    alphas_ : array, (n_samples, n_components)\n        Eigenvectors of the centered kernel matrix. If `n_components` and\n        `remove_zero_eig` are not set, then all components are stored.\n\n    dual_coef_ : array, (n_samples, n_features)\n        Inverse transform matrix. Only available when\n        ``fit_inverse_transform`` is True.\n\n    X_transformed_fit_ : array, (n_samples, n_components)\n        Projection of the fitted data on the kernel principal components.\n        Only available when ``fit_inverse_transform`` is True.\n\n    X_fit_ : (n_samples, n_features)\n        The data used to fit the model. If `copy_X=False`, then `X_fit_` is\n        a reference. This attribute is used for the calls to transform.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_digits\n    >>> from sklearn.decomposition import KernelPCA\n    >>> X, _ = load_digits(return_X_y=True)\n    >>> transformer = KernelPCA(n_components=7, kernel=\'linear\')\n    >>> X_transformed = transformer.fit_transform(X)\n    >>> X_transformed.shape\n    (1797, 7)\n\n    References\n    ----------\n    Kernel PCA was introduced in:\n        Bernhard Schoelkopf, Alexander J. Smola,\n        and Klaus-Robert Mueller. 1999. Kernel principal\n        component analysis. In Advances in kernel methods,\n        MIT Press, Cambridge, MA, USA 327-352.\n    ',
      inputs: [
        {
          name: 'n_components',
          docstring:
            'Number of components. If None, all non-zero components are kept.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None'
        },
        {
          name: 'kernel',
          docstring: 'Kernel. Default="linear".',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'gamma',
          docstring:
            'Kernel coefficient for rbf, poly and sigmoid kernels. Ignored by other kernels.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=1/n_features'
        },
        {
          name: 'degree',
          docstring: 'Degree for poly kernels. Ignored by other kernels.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=3'
        },
        {
          name: 'coef0',
          docstring:
            'Independent term in poly and sigmoid kernels. Ignored by other kernels.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=1'
        },
        {
          name: 'kernel_params',
          docstring:
            'Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels.',
          param_type: ['str', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None'
        },
        {
          name: 'alpha',
          docstring:
            'Hyperparameter of the ridge regression that learns the inverse transform (when fit_inverse_transform=True).',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=1.0'
        },
        {
          name: 'fit_inverse_transform',
          docstring:
            'Learn the inverse transform for non-precomputed kernels. (i.e. learn to find the pre-image of a point)',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'eigen_solver',
          docstring:
            'Select eigensolver to use. If n_components is much less than the number of training samples, arpack may be more efficient than the dense eigensolver.',
          param_type: ['LIST_VALID_OPTIONS', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: "='auto'"
        },
        {
          name: 'tol',
          docstring:
            'Convergence tolerance for arpack. If 0, optimal value will be chosen by arpack.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0'
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations for arpack. If None, optimal value will be chosen by arpack.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None'
        },
        {
          name: 'remove_zero_eig',
          docstring:
            'If True, then all components with zero eigenvalues are removed, so that the number of components in the output may be < n_components (and sometimes even zero due to numerical instability). When n_components is None, this parameter is ignored and components with zero eigenvalues are removed regardless.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'random_state',
          docstring:
            "If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``eigen_solver`` == 'arpack'.  .. versionadded:: 0.18",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If True, input X is copied and stored by the model in the `X_fit_` attribute. If no further changes will be done to X, setting `copy_X=False` saves memory by storing a reference.  .. versionadded:: 0.18',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.  .. versionadded:: 0.18',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'lambdas_',
          docstring:
            'Eigenvalues of the centered kernel matrix in decreasing order. If `n_components` and `remove_zero_eig` are not set, then all values are stored.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alphas_',
          docstring:
            'Eigenvectors of the centered kernel matrix. If `n_components` and `remove_zero_eig` are not set, then all components are stored.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'dual_coef_',
          docstring:
            'Inverse transform matrix. Only available when ``fit_inverse_transform`` is True.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'X_transformed_fit_',
          docstring:
            'Projection of the fitted data on the kernel principal components. Only available when ``fit_inverse_transform`` is True.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'X_fit_',
          docstring:
            'The data used to fit the model. If `copy_X=False`, then `X_fit_` is a reference. This attribute is used for the calls to transform.',
          param_type: [null],
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
          name: '_fit_inverse_transform',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_transform',
          docstring: " Fit's using kernel K",
          inputs: [],
          outputs: []
        },
        {
          name: '_get_kernel',
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
            'Fit the model from data in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples\n            and n_features is the number of features.\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
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
            'Fit the model from data in X and transform X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples\n            and n_features is the number of features.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
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
            'Transform X back to original space.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_components)\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_features)\n\n        References\n        ----------\n        "Learning to Find Pre-Images", G BakIr et al, 2004.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '(n_samples, n_components)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
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
            'Transform X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
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
      name: 'LatentDirichletAllocation',
      docstring:
        "Latent Dirichlet Allocation with online variational Bayes algorithm\n\n    .. versionadded:: 0.17\n\n    Read more in the :ref:`User Guide <LatentDirichletAllocation>`.\n\n    Parameters\n    ----------\n    n_components : int, optional (default=10)\n        Number of topics.\n\n    doc_topic_prior : float, optional (default=None)\n        Prior of document topic distribution `theta`. If the value is None,\n        defaults to `1 / n_components`.\n        In [1]_, this is called `alpha`.\n\n    topic_word_prior : float, optional (default=None)\n        Prior of topic word distribution `beta`. If the value is None, defaults\n        to `1 / n_components`.\n        In [1]_, this is called `eta`.\n\n    learning_method : 'batch' | 'online', default='batch'\n        Method used to update `_component`. Only used in `fit` method.\n        In general, if the data size is large, the online update will be much\n        faster than the batch update.\n\n        Valid options::\n\n            'batch': Batch variational Bayes method. Use all training data in\n                each EM update.\n                Old `components_` will be overwritten in each iteration.\n            'online': Online variational Bayes method. In each EM update, use\n                mini-batch of training data to update the ``components_``\n                variable incrementally. The learning rate is controlled by the\n                ``learning_decay`` and the ``learning_offset`` parameters.\n\n        .. versionchanged:: 0.20\n            The default learning method is now ``\"batch\"``.\n\n    learning_decay : float, optional (default=0.7)\n        It is a parameter that control learning rate in the online learning\n        method. The value should be set between (0.5, 1.0] to guarantee\n        asymptotic convergence. When the value is 0.0 and batch_size is\n        ``n_samples``, the update method is same as batch learning. In the\n        literature, this is called kappa.\n\n    learning_offset : float, optional (default=10.)\n        A (positive) parameter that downweights early iterations in online\n        learning.  It should be greater than 1.0. In the literature, this is\n        called tau_0.\n\n    max_iter : integer, optional (default=10)\n        The maximum number of iterations.\n\n    batch_size : int, optional (default=128)\n        Number of documents to use in each EM iteration. Only used in online\n        learning.\n\n    evaluate_every : int, optional (default=0)\n        How often to evaluate perplexity. Only used in `fit` method.\n        set it to 0 or negative number to not evalute perplexity in\n        training at all. Evaluating perplexity can help you check convergence\n        in training process, but it will also increase total training time.\n        Evaluating perplexity in every iteration might increase training time\n        up to two-fold.\n\n    total_samples : int, optional (default=1e6)\n        Total number of documents. Only used in the `partial_fit` method.\n\n    perp_tol : float, optional (default=1e-1)\n        Perplexity tolerance in batch learning. Only used when\n        ``evaluate_every`` is greater than 0.\n\n    mean_change_tol : float, optional (default=1e-3)\n        Stopping tolerance for updating document topic distribution in E-step.\n\n    max_doc_update_iter : int (default=100)\n        Max number of iterations for updating document topic distribution in\n        the E-step.\n\n    n_jobs : int or None, optional (default=None)\n        The number of jobs to use in the E-step.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : int, optional (default=0)\n        Verbosity level.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        Variational parameters for topic word distribution. Since the complete\n        conditional for topic word distribution is a Dirichlet,\n        ``components_[i, j]`` can be viewed as pseudocount that represents the\n        number of times word `j` was assigned to topic `i`.\n        It can also be viewed as distribution over the words for each topic\n        after normalization:\n        ``model.components_ / model.components_.sum(axis=1)[:, np.newaxis]``.\n\n    n_batch_iter_ : int\n        Number of iterations of the EM step.\n\n    n_iter_ : int\n        Number of passes over the dataset.\n\n    Examples\n    --------\n    >>> from sklearn.decomposition import LatentDirichletAllocation\n    >>> from sklearn.datasets import make_multilabel_classification\n    >>> # This produces a feature matrix of token counts, similar to what\n    >>> # CountVectorizer would produce on text.\n    >>> X, _ = make_multilabel_classification(random_state=0)\n    >>> lda = LatentDirichletAllocation(n_components=5,\n    ...     random_state=0)\n    >>> lda.fit(X) # doctest: +ELLIPSIS\n    LatentDirichletAllocation(...)\n    >>> # get topics for some given samples:\n    >>> lda.transform(X[-2:])\n    array([[0.00360392, 0.25499205, 0.0036211 , 0.64236448, 0.09541846],\n           [0.15297572, 0.00362644, 0.44412786, 0.39568399, 0.003586  ]])\n\n    References\n    ----------\n    [1] \"Online Learning for Latent Dirichlet Allocation\", Matthew D. Hoffman,\n        David M. Blei, Francis Bach, 2010\n\n    [2] \"Stochastic Variational Inference\", Matthew D. Hoffman, David M. Blei,\n        Chong Wang, John Paisley, 2013\n\n    [3] Matthew D. Hoffman's onlineldavb code. Link:\n        https://github.com/blei-lab/onlineldavb\n\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring: 'Number of topics.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'doc_topic_prior',
          docstring:
            'Prior of document topic distribution `theta`. If the value is None, defaults to `1 / n_components`. In [1]_, this is called `alpha`.',
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'topic_word_prior',
          docstring:
            'Prior of topic word distribution `beta`. If the value is None, defaults to `1 / n_components`. In [1]_, this is called `eta`.',
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'learning_method',
          docstring:
            "Method used to update `_component`. Only used in `fit` method. In general, if the data size is large, the online update will be much faster than the batch update.  Valid options::      'batch': Batch variational Bayes method. Use all training data in         each EM update.         Old `components_` will be overwritten in each iteration.     'online': Online variational Bayes method. In each EM update, use         mini-batch of training data to update the ``components_``         variable incrementally. The learning rate is controlled by the         ``learning_decay`` and the ``learning_offset`` parameters.  .. versionchanged:: 0.20     The default learning method is now ``\"batch\"``.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: "='batch'"
        },
        {
          name: 'learning_decay',
          docstring:
            'It is a parameter that control learning rate in the online learning method. The value should be set between (0.5, 1.0] to guarantee asymptotic convergence. When the value is 0.0 and batch_size is ``n_samples``, the update method is same as batch learning. In the literature, this is called kappa.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'learning_offset',
          docstring:
            'A (positive) parameter that downweights early iterations in online learning.  It should be greater than 1.0. In the literature, this is called tau_0.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'batch_size',
          docstring:
            'Number of documents to use in each EM iteration. Only used in online learning.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'evaluate_every',
          docstring:
            'How often to evaluate perplexity. Only used in `fit` method. set it to 0 or negative number to not evalute perplexity in training at all. Evaluating perplexity can help you check convergence in training process, but it will also increase total training time. Evaluating perplexity in every iteration might increase training time up to two-fold.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'total_samples',
          docstring:
            'Total number of documents. Only used in the `partial_fit` method.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'perp_tol',
          docstring:
            'Perplexity tolerance in batch learning. Only used when ``evaluate_every`` is greater than 0.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'mean_change_tol',
          docstring:
            'Stopping tolerance for updating document topic distribution in E-step.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_doc_update_iter',
          docstring:
            'Max number of iterations for updating document topic distribution in the E-step.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=100)'
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of jobs to use in the E-step. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Verbosity level.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring:
            'Variational parameters for topic word distribution. Since the complete conditional for topic word distribution is a Dirichlet, ``components_[i, j]`` can be viewed as pseudocount that represents the number of times word `j` was assigned to topic `i`. It can also be viewed as distribution over the words for each topic after normalization: ``model.components_ / model.components_.sum(axis=1)[:, np.newaxis]``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_batch_iter_',
          docstring: 'Number of iterations of the EM step.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of passes over the dataset.',
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
          name: '_approx_bound',
          docstring:
            'Estimate the variational bound.\n\n        Estimate the variational bound over "all documents" using only the\n        documents passed in as X. Since log-likelihood of each word cannot\n        be computed directly, we use this bound to estimate it.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        doc_topic_distr : array, shape=(n_samples, n_components)\n            Document topic distribution. In the literature, this is called\n            gamma.\n\n        sub_sampling : boolean, optional, (default=False)\n            Compensate for subsampling of documents.\n            It is used in calculate bound in online learning.\n\n        Returns\n        -------\n        score : float\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'doc_topic_distr',
              docstring:
                'Document topic distribution. In the literature, this is called gamma.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_components)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sub_sampling',
              docstring:
                'Compensate for subsampling of documents. It is used in calculate bound in online learning.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: '',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: '_check_non_neg_array',
          docstring:
            'check X format\n\n        check X format and make sure no negative value in X.\n\n        Parameters\n        ----------\n        X :  array-like or sparse matrix\n\n        ',
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
          name: '_check_params',
          docstring: 'Check model parameters.',
          inputs: [],
          outputs: []
        },
        {
          name: '_e_step',
          docstring:
            'E-step in EM update.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        cal_sstats : boolean\n            Parameter that indicate whether to calculate sufficient statistics\n            or not. Set ``cal_sstats`` to True when we need to run M-step.\n\n        random_init : boolean\n            Parameter that indicate whether to initialize document topic\n            distribution randomly in the E-step. Set it to True in training\n            steps.\n\n        parallel : joblib.Parallel (optional)\n            Pre-initialized instance of joblib.Parallel.\n\n        Returns\n        -------\n        (doc_topic_distr, suff_stats) :\n            `doc_topic_distr` is unnormalized topic distribution for each\n            document. In the literature, this is called `gamma`.\n            `suff_stats` is expected sufficient statistics for the M-step.\n            When `cal_sstats == False`, it will be None.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'cal_sstats',
              docstring:
                'Parameter that indicate whether to calculate sufficient statistics or not. Set ``cal_sstats`` to True when we need to run M-step.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'random_init',
              docstring:
                'Parameter that indicate whether to initialize document topic distribution randomly in the E-step. Set it to True in training steps.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'parallel',
              docstring: 'Pre-initialized instance of joblib.Parallel.',
              param_type: [null],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                '`doc_topic_distr` is unnormalized topic distribution for each document. In the literature, this is called `gamma`. `suff_stats` is expected sufficient statistics for the M-step. When `cal_sstats == False`, it will be None.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: '_em_step',
          docstring:
            'EM update for 1 iteration.\n\n        update `_component` by batch VB or online VB.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        total_samples : integer\n            Total number of documents. It is only used when\n            batch_update is `False`.\n\n        batch_update : boolean\n            Parameter that controls updating method.\n            `True` for batch learning, `False` for online learning.\n\n        parallel : joblib.Parallel\n            Pre-initialized instance of joblib.Parallel\n\n        Returns\n        -------\n        doc_topic_distr : array, shape=(n_samples, n_components)\n            Unnormalized document topic distribution.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'total_samples',
              docstring:
                'Total number of documents. It is only used when batch_update is `False`.',
              param_type: ['int'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'batch_update',
              docstring:
                'Parameter that controls updating method. `True` for batch learning, `False` for online learning.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'parallel',
              docstring: 'Pre-initialized instance of joblib.Parallel',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'doc_topic_distr',
              docstring: 'Unnormalized document topic distribution.',
              param_type: ['array'],
              returned: true
            }
          ]
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
          name: '_init_latent_vars',
          docstring: 'Initialize latent variables.',
          inputs: [],
          outputs: []
        },
        {
          name: '_perplexity_precomp_distr',
          docstring:
            'Calculate approximate perplexity for data X with ability to accept\n        precomputed doc_topic_distr\n\n        Perplexity is defined as exp(-1. * log-likelihood per word)\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, [n_samples, n_features]\n            Document word matrix.\n\n        doc_topic_distr : None or array, shape=(n_samples, n_components)\n            Document topic distribution.\n            If it is None, it will be generated by applying transform on X.\n\n        Returns\n        -------\n        score : float\n            Perplexity score.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'doc_topic_distr',
              docstring:
                'Document topic distribution. If it is None, it will be generated by applying transform on X.',
              param_type: ['array', null],
              expected_shape: '=(n_samples, n_components)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Perplexity score.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: '_unnormalized_transform',
          docstring:
            'Transform data X according to fitted model.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        Returns\n        -------\n        doc_topic_distr : shape=(n_samples, n_components)\n            Document topic distribution for X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'doc_topic_distr',
              docstring: 'Document topic distribution for X.',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'fit',
          docstring:
            "Learn model for the data X with variational Bayes method.\n\n        When `learning_method` is 'online', use mini-batch update.\n        Otherwise, use batch update.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        y : Ignored\n\n        Returns\n        -------\n        self\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
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
          name: 'partial_fit',
          docstring:
            'Online VB with Mini-Batch update.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        y : Ignored\n\n        Returns\n        -------\n        self\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
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
          name: 'perplexity',
          docstring:
            'Calculate approximate perplexity for data X.\n\n        Perplexity is defined as exp(-1. * log-likelihood per word)\n\n        .. versionchanged:: 0.19\n           *doc_topic_distr* argument has been deprecated and is ignored\n           because user no longer has access to unnormalized distribution\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, [n_samples, n_features]\n            Document word matrix.\n\n        sub_sampling : bool\n            Do sub-sampling or not.\n\n        Returns\n        -------\n        score : float\n            Perplexity score.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'sub_sampling',
              docstring: 'Do sub-sampling or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Perplexity score.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Calculate approximate log-likelihood as score.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        y : Ignored\n\n        Returns\n        -------\n        score : float\n            Use approximate bound as score.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
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
              name: 'score',
              docstring: 'Use approximate bound as score.',
              param_type: ['float'],
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
            'Transform data X according to the fitted model.\n\n           .. versionchanged:: 0.18\n              *doc_topic_distr* is now normalized\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape=(n_samples, n_features)\n            Document word matrix.\n\n        Returns\n        -------\n        doc_topic_distr : shape=(n_samples, n_components)\n            Document topic distribution for X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Document word matrix.',
              param_type: ['array'],
              expected_shape: '=(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'doc_topic_distr',
              docstring: 'Document topic distribution for X.',
              param_type: [null],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'MiniBatchDictionaryLearning',
      docstring:
        "Mini-batch dictionary learning\n\n    Finds a dictionary (a set of atoms) that can best be used to represent data\n    using a sparse code.\n\n    Solves the optimization problem::\n\n       (U^*,V^*) = argmin 0.5 || Y - U V ||_2^2 + alpha * || U ||_1\n                    (U,V)\n                    with || V_k ||_2 = 1 for all  0 <= k < n_components\n\n    Read more in the :ref:`User Guide <DictionaryLearning>`.\n\n    Parameters\n    ----------\n    n_components : int,\n        number of dictionary elements to extract\n\n    alpha : float,\n        sparsity controlling parameter\n\n    n_iter : int,\n        total number of iterations to perform\n\n    fit_algorithm : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    batch_size : int,\n        number of samples in each mini-batch\n\n    shuffle : bool,\n        whether to shuffle the samples before forming batches\n\n    dict_init : array of shape (n_components, n_features),\n        initial value of the dictionary for warm restart scenarios\n\n    transform_algorithm : {'lasso_lars', 'lasso_cd', 'lars', 'omp',     'threshold'}\n        Algorithm used to transform the data.\n        lars: uses the least angle regression method (linear_model.lars_path)\n        lasso_lars: uses Lars to compute the Lasso solution\n        lasso_cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). lasso_lars will be faster if\n        the estimated components are sparse.\n        omp: uses orthogonal matching pursuit to estimate the sparse solution\n        threshold: squashes to zero all coefficients less than alpha from\n        the projection dictionary * X'\n\n    transform_n_nonzero_coefs : int, ``0.1 * n_features`` by default\n        Number of nonzero coefficients to target in each column of the\n        solution. This is only used by `algorithm='lars'` and `algorithm='omp'`\n        and is overridden by `alpha` in the `omp` case.\n\n    transform_alpha : float, 1. by default\n        If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the\n        penalty applied to the L1 norm.\n        If `algorithm='threshold'`, `alpha` is the absolute value of the\n        threshold below which coefficients will be squashed to zero.\n        If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of\n        the reconstruction error targeted. In this case, it overrides\n        `n_nonzero_coefs`.\n\n    verbose : bool, optional (default: False)\n        To control the verbosity of the procedure.\n\n    split_sign : bool, False by default\n        Whether to split the sparse feature vector into the concatenation of\n        its negative part and its positive part. This can improve the\n        performance of downstream classifiers.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    positive_code : bool\n        Whether to enforce positivity when finding the code.\n\n        .. versionadded:: 0.20\n\n    positive_dict : bool\n        Whether to enforce positivity when finding the dictionary.\n\n        .. versionadded:: 0.20\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        components extracted from the data\n\n    inner_stats_ : tuple of (A, B) ndarrays\n        Internal sufficient statistics that are kept by the algorithm.\n        Keeping them is useful in online settings, to avoid loosing the\n        history of the evolution, but they shouldn't have any use for the\n        end user.\n        A (n_components, n_components) is the dictionary covariance matrix.\n        B (n_features, n_components) is the data approximation matrix\n\n    n_iter_ : int\n        Number of iterations run.\n\n    Notes\n    -----\n    **References:**\n\n    J. Mairal, F. Bach, J. Ponce, G. Sapiro, 2009: Online dictionary learning\n    for sparse coding (https://www.di.ens.fr/sierra/pdfs/icml09.pdf)\n\n    See also\n    --------\n    SparseCoder\n    DictionaryLearning\n    SparsePCA\n    MiniBatchSparsePCA\n\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring: 'number of dictionary elements to extract',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring: 'sparsity controlling parameter',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_iter',
          docstring: 'total number of iterations to perform',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_algorithm',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'batch_size',
          docstring: 'number of samples in each mini-batch',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'shuffle',
          docstring: 'whether to shuffle the samples before forming batches',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'dict_init',
          docstring:
            'initial value of the dictionary for warm restart scenarios',
          param_type: ['array'],
          expected_shape: '(n_components, n_features),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'transform_algorithm',
          docstring:
            "Algorithm used to transform the data. lars: uses the least angle regression method (linear_model.lars_path) lasso_lars: uses Lars to compute the Lasso solution lasso_cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). lasso_lars will be faster if the estimated components are sparse. omp: uses orthogonal matching pursuit to estimate the sparse solution threshold: squashes to zero all coefficients less than alpha from the projection dictionary * X'",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'transform_n_nonzero_coefs',
          docstring:
            "Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'` and is overridden by `alpha` in the `omp` case.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'transform_alpha',
          docstring:
            "If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of the reconstruction error targeted. In this case, it overrides `n_nonzero_coefs`.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'verbose',
          docstring: 'To control the verbosity of the procedure.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'split_sign',
          docstring:
            'Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive_code',
          docstring:
            'Whether to enforce positivity when finding the code.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive_dict',
          docstring:
            'Whether to enforce positivity when finding the dictionary.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'components extracted from the data',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'inner_stats_',
          docstring:
            "Internal sufficient statistics that are kept by the algorithm. Keeping them is useful in online settings, to avoid loosing the history of the evolution, but they shouldn't have any use for the end user. A (n_components, n_components) is the dictionary covariance matrix. B (n_features, n_components) is the data approximation matrix",
          param_type: ['array', 'tuple'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of iterations run.',
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
          name: '_set_sparse_coding_params',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model from data in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
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
          name: 'partial_fit',
          docstring:
            'Updates the model using the data in X as a mini-batch.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        iter_offset : integer, optional\n            The number of iteration on data batches that has been\n            performed before this call to partial_fit. This is optional:\n            if no number is passed, the memory of the object is\n            used.\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
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
            },
            {
              name: 'iter_offset',
              docstring:
                'The number of iteration on data batches that has been performed before this call to partial_fit. This is optional: if no number is passed, the memory of the object is used.',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
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
            'Encode the data as a sparse combination of the dictionary atoms.\n\n        Coding method is determined by the object parameter\n        `transform_algorithm`.\n\n        Parameters\n        ----------\n        X : array of shape (n_samples, n_features)\n            Test data to be transformed, must have the same number of\n            features as the data used to train the model.\n\n        Returns\n        -------\n        X_new : array, shape (n_samples, n_components)\n            Transformed data\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Test data to be transformed, must have the same number of features as the data used to train the model.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed data',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'MiniBatchSparsePCA',
      docstring:
        "Mini-batch Sparse Principal Components Analysis\n\n    Finds the set of sparse components that can optimally reconstruct\n    the data.  The amount of sparseness is controllable by the coefficient\n    of the L1 penalty, given by the parameter alpha.\n\n    Read more in the :ref:`User Guide <SparsePCA>`.\n\n    Parameters\n    ----------\n    n_components : int,\n        number of sparse atoms to extract\n\n    alpha : int,\n        Sparsity controlling parameter. Higher values lead to sparser\n        components.\n\n    ridge_alpha : float,\n        Amount of ridge shrinkage to apply in order to improve\n        conditioning when calling the transform method.\n\n    n_iter : int,\n        number of iterations to perform for each mini batch\n\n    callback : callable or None, optional (default: None)\n        callable that gets invoked every five iterations\n\n    batch_size : int,\n        the number of features to take in each mini batch\n\n    verbose : int\n        Controls the verbosity; the higher, the more messages. Defaults to 0.\n\n    shuffle : boolean,\n        whether to shuffle the data before splitting it in batches\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    method : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    normalize_components : boolean, optional (default=False)\n        - if False, use a version of Sparse PCA without components\n          normalization and without data centering. This is likely a bug and\n          even though it's the default for backward compatibility,\n          this should not be used.\n        - if True, use a version of Sparse PCA with components normalization\n          and data centering.\n\n        .. versionadded:: 0.20\n\n        .. deprecated:: 0.22\n           ``normalize_components`` was added and set to ``False`` for\n           backward compatibility. It would be set to ``True`` from 0.22\n           onwards.\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        Sparse components extracted from the data.\n\n    n_iter_ : int\n        Number of iterations run.\n\n    mean_ : array, shape (n_features,)\n        Per-feature empirical mean, estimated from the training set.\n        Equal to ``X.mean(axis=0)``.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.datasets import make_friedman1\n    >>> from sklearn.decomposition import MiniBatchSparsePCA\n    >>> X, _ = make_friedman1(n_samples=200, n_features=30, random_state=0)\n    >>> transformer = MiniBatchSparsePCA(n_components=5,\n    ...         batch_size=50,\n    ...         normalize_components=True,\n    ...         random_state=0)\n    >>> transformer.fit(X) # doctest: +ELLIPSIS\n    MiniBatchSparsePCA(...)\n    >>> X_transformed = transformer.transform(X)\n    >>> X_transformed.shape\n    (200, 5)\n    >>> # most values in the components_ are zero (sparsity)\n    >>> np.mean(transformer.components_ == 0)\n    0.94\n\n    See also\n    --------\n    PCA\n    SparsePCA\n    DictionaryLearning\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring: 'number of sparse atoms to extract',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring:
            'Sparsity controlling parameter. Higher values lead to sparser components.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'ridge_alpha',
          docstring:
            'Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_iter',
          docstring: 'number of iterations to perform for each mini batch',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'callback',
          docstring: 'callable that gets invoked every five iterations',
          param_type: ['callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'batch_size',
          docstring: 'the number of features to take in each mini batch',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Controls the verbosity; the higher, the more messages. Defaults to 0.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'shuffle',
          docstring:
            'whether to shuffle the data before splitting it in batches',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize_components',
          docstring:
            "- if False, use a version of Sparse PCA without components   normalization and without data centering. This is likely a bug and   even though it's the default for backward compatibility,   this should not be used. - if True, use a version of Sparse PCA with components normalization   and data centering.  .. versionadded:: 0.20  .. deprecated:: 0.22    ``normalize_components`` was added and set to ``False`` for    backward compatibility. It would be set to ``True`` from 0.22    onwards.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'Sparse components extracted from the data.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of iterations run.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'mean_',
          docstring:
            'Per-feature empirical mean, estimated from the training set. Equal to ``X.mean(axis=0)``.',
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
          name: 'fit',
          docstring:
            'Fit the model from data in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
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
            'Least Squares projection of the data onto the sparse components.\n\n        To avoid instability issues in case the system is under-determined,\n        regularization can be applied (Ridge regression) via the\n        `ridge_alpha` parameter.\n\n        Note that Sparse PCA components orthogonality is not enforced as in PCA\n        hence one cannot use a simple linear projection.\n\n        Parameters\n        ----------\n        X : array of shape (n_samples, n_features)\n            Test data to be transformed, must have the same number of\n            features as the data used to train the model.\n\n        Returns\n        -------\n        X_new array, shape (n_samples, n_components)\n            Transformed data.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Test data to be transformed, must have the same number of features as the data used to train the model.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: 'Transformed data.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'NMF',
      docstring:
        "Non-Negative Matrix Factorization (NMF)\n\n    Find two non-negative matrices (W, H) whose product approximates the non-\n    negative matrix X. This factorization can be used for example for\n    dimensionality reduction, source separation or topic extraction.\n\n    The objective function is::\n\n        0.5 * ||X - WH||_Fro^2\n        + alpha * l1_ratio * ||vec(W)||_1\n        + alpha * l1_ratio * ||vec(H)||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n        + 0.5 * alpha * (1 - l1_ratio) * ||H||_Fro^2\n\n    Where::\n\n        ||A||_Fro^2 = \\sum_{i,j} A_{ij}^2 (Frobenius norm)\n        ||vec(A)||_1 = \\sum_{i,j} abs(A_{ij}) (Elementwise L1 norm)\n\n    For multiplicative-update ('mu') solver, the Frobenius norm\n    (0.5 * ||X - WH||_Fro^2) can be changed into another beta-divergence loss,\n    by changing the beta_loss parameter.\n\n    The objective function is minimized with an alternating minimization of W\n    and H.\n\n    Read more in the :ref:`User Guide <NMF>`.\n\n    Parameters\n    ----------\n    n_components : int or None\n        Number of components, if n_components is not set all features\n        are kept.\n\n    init : None | 'random' | 'nndsvd' |  'nndsvda' | 'nndsvdar' | 'custom'\n        Method used to initialize the procedure.\n        Default: None.\n        Valid options:\n\n        - None: 'nndsvd' if n_components <= min(n_samples, n_features),\n            otherwise random.\n\n        - 'random': non-negative random matrices, scaled with:\n            sqrt(X.mean() / n_components)\n\n        - 'nndsvd': Nonnegative Double Singular Value Decomposition (NNDSVD)\n            initialization (better for sparseness)\n\n        - 'nndsvda': NNDSVD with zeros filled with the average of X\n            (better when sparsity is not desired)\n\n        - 'nndsvdar': NNDSVD with zeros filled with small random values\n            (generally faster, less accurate alternative to NNDSVDa\n            for when sparsity is not desired)\n\n        - 'custom': use custom matrices W and H\n\n    solver : 'cd' | 'mu'\n        Numerical solver to use:\n        'cd' is a Coordinate Descent solver.\n        'mu' is a Multiplicative Update solver.\n\n        .. versionadded:: 0.17\n           Coordinate Descent solver.\n\n        .. versionadded:: 0.19\n           Multiplicative Update solver.\n\n    beta_loss : float or string, default 'frobenius'\n        String must be in {'frobenius', 'kullback-leibler', 'itakura-saito'}.\n        Beta divergence to be minimized, measuring the distance between X\n        and the dot product WH. Note that values different from 'frobenius'\n        (or 2) and 'kullback-leibler' (or 1) lead to significantly slower\n        fits. Note that for beta_loss <= 0 (or 'itakura-saito'), the input\n        matrix X cannot contain zeros. Used only in 'mu' solver.\n\n        .. versionadded:: 0.19\n\n    tol : float, default: 1e-4\n        Tolerance of the stopping condition.\n\n    max_iter : integer, default: 200\n        Maximum number of iterations before timing out.\n\n    random_state : int, RandomState instance or None, optional, default: None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    alpha : double, default: 0.\n        Constant that multiplies the regularization terms. Set it to zero to\n        have no regularization.\n\n        .. versionadded:: 0.17\n           *alpha* used in the Coordinate Descent solver.\n\n    l1_ratio : double, default: 0.\n        The regularization mixing parameter, with 0 <= l1_ratio <= 1.\n        For l1_ratio = 0 the penalty is an elementwise L2 penalty\n        (aka Frobenius Norm).\n        For l1_ratio = 1 it is an elementwise L1 penalty.\n        For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.\n\n        .. versionadded:: 0.17\n           Regularization parameter *l1_ratio* used in the Coordinate Descent\n           solver.\n\n    verbose : bool, default=False\n        Whether to be verbose.\n\n    shuffle : boolean, default: False\n        If true, randomize the order of coordinates in the CD solver.\n\n        .. versionadded:: 0.17\n           *shuffle* parameter used in the Coordinate Descent solver.\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        Factorization matrix, sometimes called 'dictionary'.\n\n    reconstruction_err_ : number\n        Frobenius norm of the matrix difference, or beta-divergence, between\n        the training data ``X`` and the reconstructed data ``WH`` from\n        the fitted model.\n\n    n_iter_ : int\n        Actual number of iterations.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> X = np.array([[1, 1], [2, 1], [3, 1.2], [4, 1], [5, 0.8], [6, 1]])\n    >>> from sklearn.decomposition import NMF\n    >>> model = NMF(n_components=2, init='random', random_state=0)\n    >>> W = model.fit_transform(X)\n    >>> H = model.components_\n\n    References\n    ----------\n    Cichocki, Andrzej, and P. H. A. N. Anh-Huy. \"Fast local algorithms for\n    large scale nonnegative matrix and tensor factorizations.\"\n    IEICE transactions on fundamentals of electronics, communications and\n    computer sciences 92.3: 708-721, 2009.\n\n    Fevotte, C., & Idier, J. (2011). Algorithms for nonnegative matrix\n    factorization with the beta-divergence. Neural Computation, 23(9).\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring:
            'Number of components, if n_components is not set all features are kept.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'init',
          docstring:
            "Method used to initialize the procedure. Default: None. Valid options:  - None: 'nndsvd' if n_components <= min(n_samples, n_features),     otherwise random.  - 'random': non-negative random matrices, scaled with:     sqrt(X.mean() / n_components)  - 'nndsvd': Nonnegative Double Singular Value Decomposition (NNDSVD)     initialization (better for sparseness)  - 'nndsvda': NNDSVD with zeros filled with the average of X     (better when sparsity is not desired)  - 'nndsvdar': NNDSVD with zeros filled with small random values     (generally faster, less accurate alternative to NNDSVDa     for when sparsity is not desired)  - 'custom': use custom matrices W and H",
          param_type: ['LIST_VALID_OPTIONS', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'solver',
          docstring:
            "Numerical solver to use: 'cd' is a Coordinate Descent solver. 'mu' is a Multiplicative Update solver.  .. versionadded:: 0.17    Coordinate Descent solver.  .. versionadded:: 0.19    Multiplicative Update solver.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'beta_loss',
          docstring:
            "String must be in {'frobenius', 'kullback-leibler', 'itakura-saito'}. Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from 'frobenius' (or 2) and 'kullback-leibler' (or 1) lead to significantly slower fits. Note that for beta_loss <= 0 (or 'itakura-saito'), the input matrix X cannot contain zeros. Used only in 'mu' solver.  .. versionadded:: 0.19",
          param_type: ['float', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'frobenius'"
        },
        {
          name: 'tol',
          docstring: 'Tolerance of the stopping condition.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 1e-4'
        },
        {
          name: 'max_iter',
          docstring: 'Maximum number of iterations before timing out.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 200'
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alpha',
          docstring:
            'Constant that multiplies the regularization terms. Set it to zero to have no regularization.  .. versionadded:: 0.17    *alpha* used in the Coordinate Descent solver.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 0.'
        },
        {
          name: 'l1_ratio',
          docstring:
            'The regularization mixing parameter, with 0 <= l1_ratio <= 1. For l1_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1_ratio = 1 it is an elementwise L1 penalty. For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.  .. versionadded:: 0.17    Regularization parameter *l1_ratio* used in the Coordinate Descent    solver.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ': 0.'
        },
        {
          name: 'verbose',
          docstring: 'Whether to be verbose.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'shuffle',
          docstring:
            'If true, randomize the order of coordinates in the CD solver.  .. versionadded:: 0.17    *shuffle* parameter used in the Coordinate Descent solver.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ': False'
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: "Factorization matrix, sometimes called 'dictionary'.",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'reconstruction_err_',
          docstring:
            'Frobenius norm of the matrix difference, or beta-divergence, between the training data ``X`` and the reconstructed data ``WH`` from the fitted model.',
          param_type: [null],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Actual number of iterations.',
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
          name: 'fit',
          docstring:
            'Learn a NMF model for the data X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Data matrix to be decomposed\n\n        y : Ignored\n\n        Returns\n        -------\n        self\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Data matrix to be decomposed',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
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
            "Learn a NMF model for the data X and returns the transformed data.\n\n        This is more efficient than calling fit followed by transform.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Data matrix to be decomposed\n\n        y : Ignored\n\n        W : array-like, shape (n_samples, n_components)\n            If init='custom', it is used as initial guess for the solution.\n\n        H : array-like, shape (n_components, n_features)\n            If init='custom', it is used as initial guess for the solution.\n\n        Returns\n        -------\n        W : array, shape (n_samples, n_components)\n            Transformed data.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Data matrix to be decomposed',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
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
            },
            {
              name: 'W',
              docstring:
                "If init='custom', it is used as initial guess for the solution.",
              param_type: ['array'],
              expected_shape: '(n_samples, n_components)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'H',
              docstring:
                "If init='custom', it is used as initial guess for the solution.",
              param_type: ['array'],
              expected_shape: '(n_components, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'W',
              docstring: 'Transformed data.',
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
            'Transform data back to its original space.\n\n        Parameters\n        ----------\n        W : {array-like, sparse matrix}, shape (n_samples, n_components)\n            Transformed data matrix\n\n        Returns\n        -------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Data matrix of original shape\n\n        .. versionadded:: 0.18\n        ',
          inputs: [
            {
              name: 'W',
              docstring: 'Transformed data matrix',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_components)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X',
              docstring: 'Data matrix of original shape',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              returned: true
            },
            {
              name: '',
              docstring: '',
              param_type: [null],
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
            'Transform the data X according to the fitted NMF model\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Data matrix to be transformed by the model\n\n        Returns\n        -------\n        W : array, shape (n_samples, n_components)\n            Transformed data\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Data matrix to be transformed by the model',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'W',
              docstring: 'Transformed data',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'PCA',
      docstring:
        "Principal component analysis (PCA)\n\n    Linear dimensionality reduction using Singular Value Decomposition of the\n    data to project it to a lower dimensional space. The input data is centered\n    but not scaled for each feature before applying the SVD.\n\n    It uses the LAPACK implementation of the full SVD or a randomized truncated\n    SVD by the method of Halko et al. 2009, depending on the shape of the input\n    data and the number of components to extract.\n\n    It can also use the scipy.sparse.linalg ARPACK implementation of the\n    truncated SVD.\n\n    Notice that this class does not support sparse input. See\n    :class:`TruncatedSVD` for an alternative with sparse data.\n\n    Read more in the :ref:`User Guide <PCA>`.\n\n    Parameters\n    ----------\n    n_components : int, float, None or string\n        Number of components to keep.\n        if n_components is not set all components are kept::\n\n            n_components == min(n_samples, n_features)\n\n        If ``n_components == 'mle'`` and ``svd_solver == 'full'``, Minka's\n        MLE is used to guess the dimension. Use of ``n_components == 'mle'``\n        will interpret ``svd_solver == 'auto'`` as ``svd_solver == 'full'``.\n\n        If ``0 < n_components < 1`` and ``svd_solver == 'full'``, select the\n        number of components such that the amount of variance that needs to be\n        explained is greater than the percentage specified by n_components.\n\n        If ``svd_solver == 'arpack'``, the number of components must be\n        strictly less than the minimum of n_features and n_samples.\n\n        Hence, the None case results in::\n\n            n_components == min(n_samples, n_features) - 1\n\n    copy : bool (default True)\n        If False, data passed to fit are overwritten and running\n        fit(X).transform(X) will not yield the expected results,\n        use fit_transform(X) instead.\n\n    whiten : bool, optional (default False)\n        When True (False by default) the `components_` vectors are multiplied\n        by the square root of n_samples and then divided by the singular values\n        to ensure uncorrelated outputs with unit component-wise variances.\n\n        Whitening will remove some information from the transformed signal\n        (the relative variance scales of the components) but can sometime\n        improve the predictive accuracy of the downstream estimators by\n        making their data respect some hard-wired assumptions.\n\n    svd_solver : string {'auto', 'full', 'arpack', 'randomized'}\n        auto :\n            the solver is selected by a default policy based on `X.shape` and\n            `n_components`: if the input data is larger than 500x500 and the\n            number of components to extract is lower than 80% of the smallest\n            dimension of the data, then the more efficient 'randomized'\n            method is enabled. Otherwise the exact full SVD is computed and\n            optionally truncated afterwards.\n        full :\n            run exact full SVD calling the standard LAPACK solver via\n            `scipy.linalg.svd` and select the components by postprocessing\n        arpack :\n            run SVD truncated to n_components calling ARPACK solver via\n            `scipy.sparse.linalg.svds`. It requires strictly\n            0 < n_components < min(X.shape)\n        randomized :\n            run randomized SVD by the method of Halko et al.\n\n        .. versionadded:: 0.18.0\n\n    tol : float >= 0, optional (default .0)\n        Tolerance for singular values computed by svd_solver == 'arpack'.\n\n        .. versionadded:: 0.18.0\n\n    iterated_power : int >= 0, or 'auto', (default 'auto')\n        Number of iterations for the power method computed by\n        svd_solver == 'randomized'.\n\n        .. versionadded:: 0.18.0\n\n    random_state : int, RandomState instance or None, optional (default None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Used when ``svd_solver`` == 'arpack' or 'randomized'.\n\n        .. versionadded:: 0.18.0\n\n    Attributes\n    ----------\n    components_ : array, shape (n_components, n_features)\n        Principal axes in feature space, representing the directions of\n        maximum variance in the data. The components are sorted by\n        ``explained_variance_``.\n\n    explained_variance_ : array, shape (n_components,)\n        The amount of variance explained by each of the selected components.\n\n        Equal to n_components largest eigenvalues\n        of the covariance matrix of X.\n\n        .. versionadded:: 0.18\n\n    explained_variance_ratio_ : array, shape (n_components,)\n        Percentage of variance explained by each of the selected components.\n\n        If ``n_components`` is not set then all components are stored and the\n        sum of the ratios is equal to 1.0.\n\n    singular_values_ : array, shape (n_components,)\n        The singular values corresponding to each of the selected components.\n        The singular values are equal to the 2-norms of the ``n_components``\n        variables in the lower-dimensional space.\n\n        .. versionadded:: 0.19\n\n    mean_ : array, shape (n_features,)\n        Per-feature empirical mean, estimated from the training set.\n\n        Equal to `X.mean(axis=0)`.\n\n    n_components_ : int\n        The estimated number of components. When n_components is set\n        to 'mle' or a number between 0 and 1 (with svd_solver == 'full') this\n        number is estimated from input data. Otherwise it equals the parameter\n        n_components, or the lesser value of n_features and n_samples\n        if n_components is None.\n\n    noise_variance_ : float\n        The estimated noise covariance following the Probabilistic PCA model\n        from Tipping and Bishop 1999. See \"Pattern Recognition and\n        Machine Learning\" by C. Bishop, 12.2.1 p. 574 or\n        http://www.miketipping.com/papers/met-mppca.pdf. It is required to\n        compute the estimated data covariance and score samples.\n\n        Equal to the average of (min(n_features, n_samples) - n_components)\n        smallest eigenvalues of the covariance matrix of X.\n\n    References\n    ----------\n    For n_components == 'mle', this class uses the method of *Minka, T. P.\n    \"Automatic choice of dimensionality for PCA\". In NIPS, pp. 598-604*\n\n    Implements the probabilistic PCA model from:\n    Tipping, M. E., and Bishop, C. M. (1999). \"Probabilistic principal\n    component analysis\". Journal of the Royal Statistical Society:\n    Series B (Statistical Methodology), 61(3), 611-622.\n    via the score and score_samples methods.\n    See http://www.miketipping.com/papers/met-mppca.pdf\n\n    For svd_solver == 'arpack', refer to `scipy.sparse.linalg.svds`.\n\n    For svd_solver == 'randomized', see:\n    *Halko, N., Martinsson, P. G., and Tropp, J. A. (2011).\n    \"Finding structure with randomness: Probabilistic algorithms for\n    constructing approximate matrix decompositions\".\n    SIAM review, 53(2), 217-288.* and also\n    *Martinsson, P. G., Rokhlin, V., and Tygert, M. (2011).\n    \"A randomized algorithm for the decomposition of matrices\".\n    Applied and Computational Harmonic Analysis, 30(1), 47-68.*\n\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.decomposition import PCA\n    >>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])\n    >>> pca = PCA(n_components=2)\n    >>> pca.fit(X)  # doctest: +NORMALIZE_WHITESPACE\n    PCA(copy=True, iterated_power='auto', n_components=2, random_state=None,\n      svd_solver='auto', tol=0.0, whiten=False)\n    >>> print(pca.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.9924... 0.0075...]\n    >>> print(pca.singular_values_)  # doctest: +ELLIPSIS\n    [6.30061... 0.54980...]\n\n    >>> pca = PCA(n_components=2, svd_solver='full')\n    >>> pca.fit(X)                 # doctest: +ELLIPSIS +NORMALIZE_WHITESPACE\n    PCA(copy=True, iterated_power='auto', n_components=2, random_state=None,\n      svd_solver='full', tol=0.0, whiten=False)\n    >>> print(pca.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.9924... 0.00755...]\n    >>> print(pca.singular_values_)  # doctest: +ELLIPSIS\n    [6.30061... 0.54980...]\n\n    >>> pca = PCA(n_components=1, svd_solver='arpack')\n    >>> pca.fit(X)  # doctest: +NORMALIZE_WHITESPACE\n    PCA(copy=True, iterated_power='auto', n_components=1, random_state=None,\n      svd_solver='arpack', tol=0.0, whiten=False)\n    >>> print(pca.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.99244...]\n    >>> print(pca.singular_values_)  # doctest: +ELLIPSIS\n    [6.30061...]\n\n    See also\n    --------\n    KernelPCA\n    SparsePCA\n    TruncatedSVD\n    IncrementalPCA\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring:
            "Number of components to keep. if n_components is not set all components are kept::      n_components == min(n_samples, n_features)  If ``n_components == 'mle'`` and ``svd_solver == 'full'``, Minka's MLE is used to guess the dimension. Use of ``n_components == 'mle'`` will interpret ``svd_solver == 'auto'`` as ``svd_solver == 'full'``.  If ``0 < n_components < 1`` and ``svd_solver == 'full'``, select the number of components such that the amount of variance that needs to be explained is greater than the percentage specified by n_components.  If ``svd_solver == 'arpack'``, the number of components must be strictly less than the minimum of n_features and n_samples.  Hence, the None case results in::      n_components == min(n_samples, n_features) - 1",
          param_type: ['int', 'float', 'str', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'copy',
          docstring:
            'If False, data passed to fit are overwritten and running fit(X).transform(X) will not yield the expected results, use fit_transform(X) instead.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True)'
        },
        {
          name: 'whiten',
          docstring:
            'When True (False by default) the `components_` vectors are multiplied by the square root of n_samples and then divided by the singular values to ensure uncorrelated outputs with unit component-wise variances.  Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometime improve the predictive accuracy of the downstream estimators by making their data respect some hard-wired assumptions.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'svd_solver',
          docstring:
            "auto :     the solver is selected by a default policy based on `X.shape` and     `n_components`: if the input data is larger than 500x500 and the     number of components to extract is lower than 80% of the smallest     dimension of the data, then the more efficient 'randomized'     method is enabled. Otherwise the exact full SVD is computed and     optionally truncated afterwards. full :     run exact full SVD calling the standard LAPACK solver via     `scipy.linalg.svd` and select the components by postprocessing arpack :     run SVD truncated to n_components calling ARPACK solver via     `scipy.sparse.linalg.svds`. It requires strictly     0 < n_components < min(X.shape) randomized :     run randomized SVD by the method of Halko et al.  .. versionadded:: 0.18.0",
          param_type: ['LIST_VALID_OPTIONS', 'str'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            "Tolerance for singular values computed by svd_solver == 'arpack'.  .. versionadded:: 0.18.0",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'iterated_power',
          docstring:
            "Number of iterations for the power method computed by svd_solver == 'randomized'.  .. versionadded:: 0.18.0",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: "'auto')"
        },
        {
          name: 'random_state',
          docstring:
            "If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``svd_solver`` == 'arpack' or 'randomized'.  .. versionadded:: 0.18.0",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring:
            'Principal axes in feature space, representing the directions of maximum variance in the data. The components are sorted by ``explained_variance_``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'explained_variance_',
          docstring:
            'The amount of variance explained by each of the selected components.  Equal to n_components largest eigenvalues of the covariance matrix of X.  .. versionadded:: 0.18',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'explained_variance_ratio_',
          docstring:
            'Percentage of variance explained by each of the selected components.  If ``n_components`` is not set then all components are stored and the sum of the ratios is equal to 1.0.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'singular_values_',
          docstring:
            'The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the ``n_components`` variables in the lower-dimensional space.  .. versionadded:: 0.19',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'mean_',
          docstring:
            'Per-feature empirical mean, estimated from the training set.  Equal to `X.mean(axis=0)`.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_components_',
          docstring:
            "The estimated number of components. When n_components is set to 'mle' or a number between 0 and 1 (with svd_solver == 'full') this number is estimated from input data. Otherwise it equals the parameter n_components, or the lesser value of n_features and n_samples if n_components is None.",
          param_type: ['int'],
          returned: false
        },
        {
          name: 'noise_variance_',
          docstring:
            'The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See "Pattern Recognition and Machine Learning" by C. Bishop, 12.2.1 p. 574 or http://www.miketipping.com/papers/met-mppca.pdf. It is required to compute the estimated data covariance and score samples.  Equal to the average of (min(n_features, n_samples) - n_components) smallest eigenvalues of the covariance matrix of X.',
          param_type: ['float'],
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
          name: '_fit',
          docstring:
            'Dispatch to the right submethod depending on the chosen solver.',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_full',
          docstring: 'Fit the model by computing full SVD on X',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_truncated',
          docstring:
            'Fit the model by computing truncated SVD (by ARPACK or randomized)\n        on X\n        ',
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
            'Fit the model with X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
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
          docstring:
            'Fit the model with X and apply the dimensionality reduction on X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
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
              name: 'X_new',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'get_covariance',
          docstring:
            'Compute data covariance with the generative model.\n\n        ``cov = components_.T * S**2 * components_ + sigma2 * eye(n_features)``\n        where S**2 contains the explained variances, and sigma2 contains the\n        noise variances.\n\n        Returns\n        -------\n        cov : array, shape=(n_features, n_features)\n            Estimated covariance of data.\n        ',
          inputs: [],
          outputs: [
            {
              name: 'cov',
              docstring: 'Estimated covariance of data.',
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
          name: 'get_precision',
          docstring:
            'Compute data precision matrix with the generative model.\n\n        Equals the inverse of the covariance but computed with\n        the matrix inversion lemma for efficiency.\n\n        Returns\n        -------\n        precision : array, shape=(n_features, n_features)\n            Estimated precision of data.\n        ',
          inputs: [],
          outputs: [
            {
              name: 'precision',
              docstring: 'Estimated precision of data.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Transform data back to its original space.\n\n        In other words, return an input X_original whose transform would be X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_components)\n            New data, where n_samples is the number of samples\n            and n_components is the number of components.\n\n        Returns\n        -------\n        X_original array-like, shape (n_samples, n_features)\n\n        Notes\n        -----\n        If whitening is enabled, inverse_transform will compute the\n        exact inverse operation, which includes reversing whitening.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'New data, where n_samples is the number of samples and n_components is the number of components.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_components)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Return the average log-likelihood of all samples.\n\n        See. "Pattern Recognition and Machine Learning"\n        by C. Bishop, 12.2.1 p. 574\n        or http://www.miketipping.com/papers/met-mppca.pdf\n\n        Parameters\n        ----------\n        X : array, shape(n_samples, n_features)\n            The data.\n\n        y : Ignored\n\n        Returns\n        -------\n        ll : float\n            Average log-likelihood of the samples under the current model\n        ',
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
              name: 'll',
              docstring:
                'Average log-likelihood of the samples under the current model',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'score_samples',
          docstring:
            'Return the log-likelihood of each sample.\n\n        See. "Pattern Recognition and Machine Learning"\n        by C. Bishop, 12.2.1 p. 574\n        or http://www.miketipping.com/papers/met-mppca.pdf\n\n        Parameters\n        ----------\n        X : array, shape(n_samples, n_features)\n            The data.\n\n        Returns\n        -------\n        ll : array, shape (n_samples,)\n            Log-likelihood of each sample under the current model\n        ',
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
          outputs: [
            {
              name: 'll',
              docstring:
                'Log-likelihood of each sample under the current model',
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
            'Apply dimensionality reduction to X.\n\n        X is projected on the first principal components previously extracted\n        from a training set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            New data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n\n        Examples\n        --------\n\n        >>> import numpy as np\n        >>> from sklearn.decomposition import IncrementalPCA\n        >>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])\n        >>> ipca = IncrementalPCA(n_components=2, batch_size=3)\n        >>> ipca.fit(X)\n        IncrementalPCA(batch_size=3, copy=True, n_components=2, whiten=False)\n        >>> ipca.transform(X) # doctest: +SKIP\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'New data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
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
      name: 'SparseCoder',
      docstring:
        "Sparse coding\n\n    Finds a sparse representation of data against a fixed, precomputed\n    dictionary.\n\n    Each row of the result is the solution to a sparse coding problem.\n    The goal is to find a sparse array `code` such that::\n\n        X ~= code * dictionary\n\n    Read more in the :ref:`User Guide <SparseCoder>`.\n\n    Parameters\n    ----------\n    dictionary : array, [n_components, n_features]\n        The dictionary atoms used for sparse coding. Lines are assumed to be\n        normalized to unit norm.\n\n    transform_algorithm : {'lasso_lars', 'lasso_cd', 'lars', 'omp',     'threshold'}\n        Algorithm used to transform the data:\n        lars: uses the least angle regression method (linear_model.lars_path)\n        lasso_lars: uses Lars to compute the Lasso solution\n        lasso_cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). lasso_lars will be faster if\n        the estimated components are sparse.\n        omp: uses orthogonal matching pursuit to estimate the sparse solution\n        threshold: squashes to zero all coefficients less than alpha from\n        the projection ``dictionary * X'``\n\n    transform_n_nonzero_coefs : int, ``0.1 * n_features`` by default\n        Number of nonzero coefficients to target in each column of the\n        solution. This is only used by `algorithm='lars'` and `algorithm='omp'`\n        and is overridden by `alpha` in the `omp` case.\n\n    transform_alpha : float, 1. by default\n        If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the\n        penalty applied to the L1 norm.\n        If `algorithm='threshold'`, `alpha` is the absolute value of the\n        threshold below which coefficients will be squashed to zero.\n        If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of\n        the reconstruction error targeted. In this case, it overrides\n        `n_nonzero_coefs`.\n\n    split_sign : bool, False by default\n        Whether to split the sparse feature vector into the concatenation of\n        its negative part and its positive part. This can improve the\n        performance of downstream classifiers.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    positive_code : bool\n        Whether to enforce positivity when finding the code.\n\n        .. versionadded:: 0.20\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        The unchanged dictionary atoms\n\n    See also\n    --------\n    DictionaryLearning\n    MiniBatchDictionaryLearning\n    SparsePCA\n    MiniBatchSparsePCA\n    sparse_encode\n    ",
      inputs: [
        {
          name: 'dictionary',
          docstring:
            'The dictionary atoms used for sparse coding. Lines are assumed to be normalized to unit norm.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'transform_algorithm',
          docstring:
            "Algorithm used to transform the data: lars: uses the least angle regression method (linear_model.lars_path) lasso_lars: uses Lars to compute the Lasso solution lasso_cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). lasso_lars will be faster if the estimated components are sparse. omp: uses orthogonal matching pursuit to estimate the sparse solution threshold: squashes to zero all coefficients less than alpha from the projection ``dictionary * X'``",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'transform_n_nonzero_coefs',
          docstring:
            "Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'` and is overridden by `alpha` in the `omp` case.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'transform_alpha',
          docstring:
            "If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of the reconstruction error targeted. In this case, it overrides `n_nonzero_coefs`.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'split_sign',
          docstring:
            'Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: ''
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive_code',
          docstring:
            'Whether to enforce positivity when finding the code.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'The unchanged dictionary atoms',
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
          name: '_set_sparse_coding_params',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Do nothing and return the estimator unchanged\n\n        This method is just there to implement the usual API and hence\n        work in pipelines.\n\n        Parameters\n        ----------\n        X : Ignored\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the object itself\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: [null],
              expected_shape: null,
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
            'Encode the data as a sparse combination of the dictionary atoms.\n\n        Coding method is determined by the object parameter\n        `transform_algorithm`.\n\n        Parameters\n        ----------\n        X : array of shape (n_samples, n_features)\n            Test data to be transformed, must have the same number of\n            features as the data used to train the model.\n\n        Returns\n        -------\n        X_new : array, shape (n_samples, n_components)\n            Transformed data\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Test data to be transformed, must have the same number of features as the data used to train the model.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring: 'Transformed data',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'SparsePCA',
      docstring:
        "Sparse Principal Components Analysis (SparsePCA)\n\n    Finds the set of sparse components that can optimally reconstruct\n    the data.  The amount of sparseness is controllable by the coefficient\n    of the L1 penalty, given by the parameter alpha.\n\n    Read more in the :ref:`User Guide <SparsePCA>`.\n\n    Parameters\n    ----------\n    n_components : int,\n        Number of sparse atoms to extract.\n\n    alpha : float,\n        Sparsity controlling parameter. Higher values lead to sparser\n        components.\n\n    ridge_alpha : float,\n        Amount of ridge shrinkage to apply in order to improve\n        conditioning when calling the transform method.\n\n    max_iter : int,\n        Maximum number of iterations to perform.\n\n    tol : float,\n        Tolerance for the stopping condition.\n\n    method : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    U_init : array of shape (n_samples, n_components),\n        Initial values for the loadings for warm restart scenarios.\n\n    V_init : array of shape (n_components, n_features),\n        Initial values for the components for warm restart scenarios.\n\n    verbose : int\n        Controls the verbosity; the higher, the more messages. Defaults to 0.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    normalize_components : boolean, optional (default=False)\n        - if False, use a version of Sparse PCA without components\n          normalization and without data centering. This is likely a bug and\n          even though it's the default for backward compatibility,\n          this should not be used.\n        - if True, use a version of Sparse PCA with components normalization\n          and data centering.\n\n        .. versionadded:: 0.20\n\n        .. deprecated:: 0.22\n           ``normalize_components`` was added and set to ``False`` for\n           backward compatibility. It would be set to ``True`` from 0.22\n           onwards.\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        Sparse components extracted from the data.\n\n    error_ : array\n        Vector of errors at each iteration.\n\n    n_iter_ : int\n        Number of iterations run.\n\n    mean_ : array, shape (n_features,)\n        Per-feature empirical mean, estimated from the training set.\n        Equal to ``X.mean(axis=0)``.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.datasets import make_friedman1\n    >>> from sklearn.decomposition import SparsePCA\n    >>> X, _ = make_friedman1(n_samples=200, n_features=30, random_state=0)\n    >>> transformer = SparsePCA(n_components=5,\n    ...         normalize_components=True,\n    ...         random_state=0)\n    >>> transformer.fit(X) # doctest: +ELLIPSIS\n    SparsePCA(...)\n    >>> X_transformed = transformer.transform(X)\n    >>> X_transformed.shape\n    (200, 5)\n    >>> # most values in the components_ are zero (sparsity)\n    >>> np.mean(transformer.components_ == 0) # doctest: +ELLIPSIS\n    0.9666...\n\n    See also\n    --------\n    PCA\n    MiniBatchSparsePCA\n    DictionaryLearning\n    ",
      inputs: [
        {
          name: 'n_components',
          docstring: 'Number of sparse atoms to extract.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring:
            'Sparsity controlling parameter. Higher values lead to sparser components.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'ridge_alpha',
          docstring:
            'Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'Maximum number of iterations to perform.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for the stopping condition.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'U_init',
          docstring:
            'Initial values for the loadings for warm restart scenarios.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_components),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'V_init',
          docstring:
            'Initial values for the components for warm restart scenarios.',
          param_type: ['array'],
          expected_shape: '(n_components, n_features),',
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Controls the verbosity; the higher, the more messages. Defaults to 0.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize_components',
          docstring:
            "- if False, use a version of Sparse PCA without components   normalization and without data centering. This is likely a bug and   even though it's the default for backward compatibility,   this should not be used. - if True, use a version of Sparse PCA with components normalization   and data centering.  .. versionadded:: 0.20  .. deprecated:: 0.22    ``normalize_components`` was added and set to ``False`` for    backward compatibility. It would be set to ``True`` from 0.22    onwards.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: 'Sparse components extracted from the data.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'error_',
          docstring: 'Vector of errors at each iteration.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of iterations run.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'mean_',
          docstring:
            'Per-feature empirical mean, estimated from the training set. Equal to ``X.mean(axis=0)``.',
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
          name: 'fit',
          docstring:
            'Fit the model from data in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
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
            'Least Squares projection of the data onto the sparse components.\n\n        To avoid instability issues in case the system is under-determined,\n        regularization can be applied (Ridge regression) via the\n        `ridge_alpha` parameter.\n\n        Note that Sparse PCA components orthogonality is not enforced as in PCA\n        hence one cannot use a simple linear projection.\n\n        Parameters\n        ----------\n        X : array of shape (n_samples, n_features)\n            Test data to be transformed, must have the same number of\n            features as the data used to train the model.\n\n        Returns\n        -------\n        X_new array, shape (n_samples, n_components)\n            Transformed data.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Test data to be transformed, must have the same number of features as the data used to train the model.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: 'Transformed data.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'TruncatedSVD',
      docstring:
        'Dimensionality reduction using truncated SVD (aka LSA).\n\n    This transformer performs linear dimensionality reduction by means of\n    truncated singular value decomposition (SVD). Contrary to PCA, this\n    estimator does not center the data before computing the singular value\n    decomposition. This means it can work with scipy.sparse matrices\n    efficiently.\n\n    In particular, truncated SVD works on term count/tf-idf matrices as\n    returned by the vectorizers in sklearn.feature_extraction.text. In that\n    context, it is known as latent semantic analysis (LSA).\n\n    This estimator supports two algorithms: a fast randomized SVD solver, and\n    a "naive" algorithm that uses ARPACK as an eigensolver on (X * X.T) or\n    (X.T * X), whichever is more efficient.\n\n    Read more in the :ref:`User Guide <LSA>`.\n\n    Parameters\n    ----------\n    n_components : int, default = 2\n        Desired dimensionality of output data.\n        Must be strictly less than the number of features.\n        The default value is useful for visualisation. For LSA, a value of\n        100 is recommended.\n\n    algorithm : string, default = "randomized"\n        SVD solver to use. Either "arpack" for the ARPACK wrapper in SciPy\n        (scipy.sparse.linalg.svds), or "randomized" for the randomized\n        algorithm due to Halko (2009).\n\n    n_iter : int, optional (default 5)\n        Number of iterations for randomized SVD solver. Not used by ARPACK.\n        The default is larger than the default in `randomized_svd` to handle\n        sparse matrices that may have large slowly decaying spectrum.\n\n    random_state : int, RandomState instance or None, optional, default = None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    tol : float, optional\n        Tolerance for ARPACK. 0 means machine precision. Ignored by randomized\n        SVD solver.\n\n    Attributes\n    ----------\n    components_ : array, shape (n_components, n_features)\n\n    explained_variance_ : array, shape (n_components,)\n        The variance of the training samples transformed by a projection to\n        each component.\n\n    explained_variance_ratio_ : array, shape (n_components,)\n        Percentage of variance explained by each of the selected components.\n\n    singular_values_ : array, shape (n_components,)\n        The singular values corresponding to each of the selected components.\n        The singular values are equal to the 2-norms of the ``n_components``\n        variables in the lower-dimensional space.\n\n    Examples\n    --------\n    >>> from sklearn.decomposition import TruncatedSVD\n    >>> from sklearn.random_projection import sparse_random_matrix\n    >>> X = sparse_random_matrix(100, 100, density=0.01, random_state=42)\n    >>> svd = TruncatedSVD(n_components=5, n_iter=7, random_state=42)\n    >>> svd.fit(X)  # doctest: +NORMALIZE_WHITESPACE\n    TruncatedSVD(algorithm=\'randomized\', n_components=5, n_iter=7,\n            random_state=42, tol=0.0)\n    >>> print(svd.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.0606... 0.0584... 0.0497... 0.0434... 0.0372...]\n    >>> print(svd.explained_variance_ratio_.sum())  # doctest: +ELLIPSIS\n    0.249...\n    >>> print(svd.singular_values_)  # doctest: +ELLIPSIS\n    [2.5841... 2.5245... 2.3201... 2.1753... 2.0443...]\n\n    See also\n    --------\n    PCA\n\n    References\n    ----------\n    Finding structure with randomness: Stochastic algorithms for constructing\n    approximate matrix decompositions\n    Halko, et al., 2009 (arXiv:909) https://arxiv.org/pdf/0909.4061.pdf\n\n    Notes\n    -----\n    SVD suffers from a problem called "sign indeterminacy", which means the\n    sign of the ``components_`` and the output from transform depend on the\n    algorithm and random state. To work around this, fit instances of this\n    class to data once, then keep the instance around to do transformations.\n\n    ',
      inputs: [
        {
          name: 'n_components',
          docstring:
            'Desired dimensionality of output data. Must be strictly less than the number of features. The default value is useful for visualisation. For LSA, a value of 100 is recommended.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '= 2'
        },
        {
          name: 'algorithm',
          docstring:
            'SVD solver to use. Either "arpack" for the ARPACK wrapper in SciPy (scipy.sparse.linalg.svds), or "randomized" for the randomized algorithm due to Halko (2009).',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: '= "randomized"'
        },
        {
          name: 'n_iter',
          docstring:
            'Number of iterations for randomized SVD solver. Not used by ARPACK. The default is larger than the default in `randomized_svd` to handle sparse matrices that may have large slowly decaying spectrum.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'Tolerance for ARPACK. 0 means machine precision. Ignored by randomized SVD solver.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'components_',
          docstring: '',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'explained_variance_',
          docstring:
            'The variance of the training samples transformed by a projection to each component.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'explained_variance_ratio_',
          docstring:
            'Percentage of variance explained by each of the selected components.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'singular_values_',
          docstring:
            'The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the ``n_components`` variables in the lower-dimensional space.',
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
          name: 'fit',
          docstring:
            'Fit LSI model on training data X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training data.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the transformer object.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
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
          docstring:
            'Fit LSI model to X and perform dimensionality reduction on X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training data.\n\n        y : Ignored\n\n        Returns\n        -------\n        X_new : array, shape (n_samples, n_components)\n            Reduced version of X. This will always be a dense array.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
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
              name: 'X_new',
              docstring:
                'Reduced version of X. This will always be a dense array.',
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
            'Transform X back to its original space.\n\n        Returns an array X_original whose transform would be X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_components)\n            New data.\n\n        Returns\n        -------\n        X_original : array, shape (n_samples, n_features)\n            Note that this is always a dense array.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'New data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_components)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_original',
              docstring: 'Note that this is always a dense array.',
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
            'Perform dimensionality reduction on X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            New data.\n\n        Returns\n        -------\n        X_new : array, shape (n_samples, n_components)\n            Reduced version of X. This will always be a dense array.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'New data.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'X_new',
              docstring:
                'Reduced version of X. This will always be a dense array.',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    }
  ],
  library: 'sklearn',
  module: 'decomposition'
}
