export default {
  name: 'sklearn.linear_model',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'enet_path',
      docstring:
        "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'Target values',
          param_type: ['array'],
          expected_shape: '(n_samples,) or (n_samples, n_outputs)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'l1_ratio',
          docstring:
            'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_alphas',
          docstring: 'Number of alphas along the regularization path',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alphas',
          docstring:
            'List of alphas where to compute the models. If None alphas are set automatically',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'Xy',
          docstring:
            'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'coef_init',
          docstring: 'The initial values of the coefficients.',
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          expected_shape: '(n_features, ) | None',
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Amount of verbosity.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring: 'whether to return the number of iterations or not.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'check_input',
          docstring:
            'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: '**params',
          docstring:
            'keyword arguments passed to the coordinate descent solver.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'alphas',
          docstring: 'The alphas along the path where models are computed.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'coefs',
          docstring: 'Coefficients along the path.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'dual_gaps',
          docstring:
            'The dual gaps at the end of the optimization for each alpha.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iters',
          docstring:
            'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'lars_path',
      docstring:
        "Compute Least Angle Regression or Lasso path using LARS algorithm [1]\n\n    The optimization objective for the case method='lasso' is::\n\n    (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    in the case of method='lars', the objective function is only known in\n    the form of an implicit equation (see discussion in [1])\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    ----------\n    X : None or array, shape (n_samples, n_features)\n        Input data. Note that if X is None then the Gram matrix must be\n        specified, i.e., cannot be None or False.\n\n        .. deprecated:: 0.21\n\n           The use of ``X`` is ``None`` in combination with ``Gram`` is not\n           ``None`` will be removed in v0.23. Use :func:`lars_path_gram`\n           instead.\n\n    y : None or array, shape (n_samples,)\n        Input targets.\n\n    Xy : array-like, shape (n_samples,) or (n_samples, n_targets), optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    Gram : None, 'auto', array, shape (n_features, n_features), optional\n        Precomputed Gram matrix (X' * X), if ``'auto'``, the Gram\n        matrix is precomputed from the given X, if there are more samples\n        than features.\n\n        .. deprecated:: 0.21\n\n           The use of ``X`` is ``None`` in combination with ``Gram`` is not\n           None will be removed in v0.23. Use :func:`lars_path_gram` instead.\n\n    max_iter : integer, optional (default=500)\n        Maximum number of iterations to perform, set to infinity for no limit.\n\n    alpha_min : float, optional (default=0)\n        Minimum correlation along the path. It corresponds to the\n        regularization parameter alpha parameter in the Lasso.\n\n    method : {'lar', 'lasso'}, optional (default='lar')\n        Specifies the returned model. Select ``'lar'`` for Least Angle\n        Regression, ``'lasso'`` for the Lasso.\n\n    copy_X : bool, optional (default=True)\n        If ``False``, ``X`` is overwritten.\n\n    eps : float, optional (default=``np.finfo(np.float).eps``)\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems.\n\n    copy_Gram : bool, optional (default=True)\n        If ``False``, ``Gram`` is overwritten.\n\n    verbose : int (default=0)\n        Controls output verbosity.\n\n    return_path : bool, optional (default=True)\n        If ``return_path==True`` returns the entire path, else returns only the\n        last point of the path.\n\n    return_n_iter : bool, optional (default=False)\n        Whether to return the number of iterations.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0.\n        This option is only allowed with method 'lasso'. Note that the model\n        coefficients will not converge to the ordinary-least-squares solution\n        for small values of alpha. Only coefficients up to the smallest alpha\n        value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by\n        the stepwise Lars-Lasso algorithm are typically in congruence with the\n        solution of the coordinate descent lasso_path function.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas + 1,)\n        Maximum of covariances (in absolute value) at each iteration.\n        ``n_alphas`` is either ``max_iter``, ``n_features`` or the\n        number of nodes in the path with ``alpha >= alpha_min``, whichever\n        is smaller.\n\n    active : array, shape [n_alphas]\n        Indices of active variables at the end of the path.\n\n    coefs : array, shape (n_features, n_alphas + 1)\n        Coefficients along the path\n\n    n_iter : int\n        Number of iterations run. Returned only if return_n_iter is set\n        to True.\n\n    See also\n    --------\n    lars_path_gram\n    lasso_path\n    lasso_path_gram\n    LassoLars\n    Lars\n    LassoLarsCV\n    LarsCV\n    sklearn.decomposition.sparse_encode\n\n    References\n    ----------\n    .. [1] \"Least Angle Regression\", Efron et al.\n           http://statweb.stanford.edu/~tibs/ftp/lars.pdf\n\n    .. [2] `Wikipedia entry on the Least-angle regression\n           <https://en.wikipedia.org/wiki/Least-angle_regression>`_\n\n    .. [3] `Wikipedia entry on the Lasso\n           <https://en.wikipedia.org/wiki/Lasso_(statistics)>`_\n\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            'Input data. Note that if X is None then the Gram matrix must be specified, i.e., cannot be None or False.  .. deprecated:: 0.21     The use of ``X`` is ``None`` in combination with ``Gram`` is not    ``None`` will be removed in v0.23. Use :func:`lars_path_gram`    instead.',
          param_type: ['array', null],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'Input targets.',
          param_type: ['array', null],
          expected_shape: '(n_samples,)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'Xy',
          docstring:
            'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
          param_type: ['array'],
          expected_shape: '(n_samples,) or (n_samples, n_targets), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'Gram',
          docstring:
            "Precomputed Gram matrix (X' * X), if ``'auto'``, the Gram matrix is precomputed from the given X, if there are more samples than features.  .. deprecated:: 0.21     The use of ``X`` is ``None`` in combination with ``Gram`` is not    None will be removed in v0.23. Use :func:`lars_path_gram` instead.",
          param_type: ['array', null],
          expected_shape: '(n_features, n_features), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations to perform, set to infinity for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alpha_min',
          docstring:
            'Minimum correlation along the path. It corresponds to the regularization parameter alpha parameter in the Lasso.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            "Specifies the returned model. Select ``'lar'`` for Least Angle Regression, ``'lasso'`` for the Lasso.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If ``False``, ``X`` is overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_Gram',
          docstring: 'If ``False``, ``Gram`` is overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Controls output verbosity.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0)'
        },
        {
          name: 'return_path',
          docstring:
            'If ``return_path==True`` returns the entire path, else returns only the last point of the path.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring: 'Whether to return the number of iterations.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            "Restrict coefficients to be >= 0. This option is only allowed with method 'lasso'. Note that the model coefficients will not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent lasso_path function.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False)'
        }
      ],
      outputs: [
        {
          name: 'alphas',
          docstring:
            'Maximum of covariances (in absolute value) at each iteration. ``n_alphas`` is either ``max_iter``, ``n_features`` or the number of nodes in the path with ``alpha >= alpha_min``, whichever is smaller.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'active',
          docstring: 'Indices of active variables at the end of the path.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'coefs',
          docstring: 'Coefficients along the path',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iter',
          docstring:
            'Number of iterations run. Returned only if return_n_iter is set to True.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'lars_path_gram',
      docstring:
        "lars_path in the sufficient stats mode [1]\n\n    The optimization objective for the case method='lasso' is::\n\n    (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    in the case of method='lars', the objective function is only known in\n    the form of an implicit equation (see discussion in [1])\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    ----------\n    Xy : array-like, shape (n_samples,) or (n_samples, n_targets)\n        Xy = np.dot(X.T, y).\n\n    Gram : array, shape (n_features, n_features)\n        Gram = np.dot(X.T * X).\n\n    n_samples : integer or float\n        Equivalent size of sample.\n\n    max_iter : integer, optional (default=500)\n        Maximum number of iterations to perform, set to infinity for no limit.\n\n    alpha_min : float, optional (default=0)\n        Minimum correlation along the path. It corresponds to the\n        regularization parameter alpha parameter in the Lasso.\n\n    method : {'lar', 'lasso'}, optional (default='lar')\n        Specifies the returned model. Select ``'lar'`` for Least Angle\n        Regression, ``'lasso'`` for the Lasso.\n\n    copy_X : bool, optional (default=True)\n        If ``False``, ``X`` is overwritten.\n\n    eps : float, optional (default=``np.finfo(np.float).eps``)\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems.\n\n    copy_Gram : bool, optional (default=True)\n        If ``False``, ``Gram`` is overwritten.\n\n    verbose : int (default=0)\n        Controls output verbosity.\n\n    return_path : bool, optional (default=True)\n        If ``return_path==True`` returns the entire path, else returns only the\n        last point of the path.\n\n    return_n_iter : bool, optional (default=False)\n        Whether to return the number of iterations.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0.\n        This option is only allowed with method 'lasso'. Note that the model\n        coefficients will not converge to the ordinary-least-squares solution\n        for small values of alpha. Only coefficients up to the smallest alpha\n        value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by\n        the stepwise Lars-Lasso algorithm are typically in congruence with the\n        solution of the coordinate descent lasso_path function.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas + 1,)\n        Maximum of covariances (in absolute value) at each iteration.\n        ``n_alphas`` is either ``max_iter``, ``n_features`` or the\n        number of nodes in the path with ``alpha >= alpha_min``, whichever\n        is smaller.\n\n    active : array, shape [n_alphas]\n        Indices of active variables at the end of the path.\n\n    coefs : array, shape (n_features, n_alphas + 1)\n        Coefficients along the path\n\n    n_iter : int\n        Number of iterations run. Returned only if return_n_iter is set\n        to True.\n\n    See also\n    --------\n    lars_path\n    lasso_path\n    lasso_path_gram\n    LassoLars\n    Lars\n    LassoLarsCV\n    LarsCV\n    sklearn.decomposition.sparse_encode\n\n    References\n    ----------\n    .. [1] \"Least Angle Regression\", Efron et al.\n           http://statweb.stanford.edu/~tibs/ftp/lars.pdf\n\n    .. [2] `Wikipedia entry on the Least-angle regression\n           <https://en.wikipedia.org/wiki/Least-angle_regression>`_\n\n    .. [3] `Wikipedia entry on the Lasso\n           <https://en.wikipedia.org/wiki/Lasso_(statistics)>`_\n\n    ",
      inputs: [
        {
          name: 'Xy',
          docstring: 'Xy = np.dot(X.T, y).',
          param_type: ['array'],
          expected_shape: '(n_samples,) or (n_samples, n_targets)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'Gram',
          docstring: 'Gram = np.dot(X.T * X).',
          param_type: ['array'],
          expected_shape: '(n_features, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_samples',
          docstring: 'Equivalent size of sample.',
          param_type: ['int', 'float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations to perform, set to infinity for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alpha_min',
          docstring:
            'Minimum correlation along the path. It corresponds to the regularization parameter alpha parameter in the Lasso.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            "Specifies the returned model. Select ``'lar'`` for Least Angle Regression, ``'lasso'`` for the Lasso.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If ``False``, ``X`` is overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_Gram',
          docstring: 'If ``False``, ``Gram`` is overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Controls output verbosity.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0)'
        },
        {
          name: 'return_path',
          docstring:
            'If ``return_path==True`` returns the entire path, else returns only the last point of the path.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring: 'Whether to return the number of iterations.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            "Restrict coefficients to be >= 0. This option is only allowed with method 'lasso'. Note that the model coefficients will not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent lasso_path function.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False)'
        }
      ],
      outputs: [
        {
          name: 'alphas',
          docstring:
            'Maximum of covariances (in absolute value) at each iteration. ``n_alphas`` is either ``max_iter``, ``n_features`` or the number of nodes in the path with ``alpha >= alpha_min``, whichever is smaller.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'active',
          docstring: 'Indices of active variables at the end of the path.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'coefs',
          docstring: 'Coefficients along the path',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iter',
          docstring:
            'Number of iterations run. Returned only if return_n_iter is set to True.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'lasso_path',
      docstring:
        "Compute Lasso path with coordinate descent\n\n    The Lasso optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^2_Fro + alpha * ||W||_21\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <lasso>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,), or (n_samples, n_outputs)\n        Target values\n\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If ``None`` alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n\n    Note that in certain cases, the Lars solver may be significantly\n    faster to implement this functionality. In particular, linear\n    interpolation can be used to retrieve model coefficients between the\n    values output by lars_path\n\n    Examples\n    --------\n\n    Comparing lasso_path and lars_path with interpolation:\n\n    >>> X = np.array([[1, 2, 3.1], [2.3, 5.4, 4.3]]).T\n    >>> y = np.array([1, 2, 3.1])\n    >>> # Use lasso_path to compute a coefficient path\n    >>> _, coef_path, _ = lasso_path(X, y, alphas=[5., 1., .5])\n    >>> print(coef_path)\n    [[0.         0.         0.46874778]\n     [0.2159048  0.4425765  0.23689075]]\n\n    >>> # Now use lars_path and 1D linear interpolation to compute the\n    >>> # same path\n    >>> from sklearn.linear_model import lars_path\n    >>> alphas, active, coef_path_lars = lars_path(X, y, method='lasso')\n    >>> from scipy import interpolate\n    >>> coef_path_continuous = interpolate.interp1d(alphas[::-1],\n    ...                                             coef_path_lars[:, ::-1])\n    >>> print(coef_path_continuous([5., 1., .5]))\n    [[0.         0.         0.46915237]\n     [0.2159048  0.4425765  0.23668876]]\n\n\n    See also\n    --------\n    lars_path\n    Lasso\n    LassoLars\n    LassoCV\n    LassoLarsCV\n    sklearn.decomposition.sparse_encode\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'Target values',
          param_type: ['array'],
          expected_shape: '(n_samples,), or (n_samples, n_outputs)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_alphas',
          docstring: 'Number of alphas along the regularization path',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alphas',
          docstring:
            'List of alphas where to compute the models. If ``None`` alphas are set automatically',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'Xy',
          docstring:
            'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'coef_init',
          docstring: 'The initial values of the coefficients.',
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          expected_shape: '(n_features, ) | None',
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Amount of verbosity.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring: 'whether to return the number of iterations or not.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: '**params',
          docstring:
            'keyword arguments passed to the coordinate descent solver.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'alphas',
          docstring: 'The alphas along the path where models are computed.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'coefs',
          docstring: 'Coefficients along the path.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'dual_gaps',
          docstring:
            'The dual gaps at the end of the optimization for each alpha.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iters',
          docstring:
            'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha.',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'logistic_regression_path',
      docstring:
        "DEPRECATED: logistic_regression_path was deprecated in version 0.21 and will be removed in version 0.23.0\n\nCompute a Logistic Regression model for a list of regularization\n    parameters.\n\n    This is an implementation that uses the result of the previous model\n    to speed up computations along the set of solutions, making it faster\n    than sequentially calling LogisticRegression for the different parameters.\n    Note that there will be no speedup with liblinear solver, since it does\n    not handle warm-starting.\n\n    .. deprecated:: 0.21\n        ``logistic_regression_path`` was deprecated in version 0.21 and will\n        be removed in 0.23.\n\n    Read more in the :ref:`User Guide <logistic_regression>`.\n\n    Parameters\n    ----------\n    X : array-like or sparse matrix, shape (n_samples, n_features)\n        Input data.\n\n    y : array-like, shape (n_samples,) or (n_samples, n_targets)\n        Input data, target values.\n\n    pos_class : int, None\n        The class with respect to which we perform a one-vs-all fit.\n        If None, then it is assumed that the given problem is binary.\n\n    Cs : int | array-like, shape (n_cs,)\n        List of values for the regularization parameter or integer specifying\n        the number of regularization parameters that should be used. In this\n        case, the parameters will be chosen in a logarithmic scale between\n        1e-4 and 1e4.\n\n    fit_intercept : bool\n        Whether to fit an intercept for the model. In this case the shape of\n        the returned array is (n_cs, n_features + 1).\n\n    max_iter : int\n        Maximum number of iterations for the solver.\n\n    tol : float\n        Stopping criterion. For the newton-cg and lbfgs solvers, the iteration\n        will stop when ``max{|g_i | i = 1, ..., n} <= tol``\n        where ``g_i`` is the i-th component of the gradient.\n\n    verbose : int\n        For the liblinear and lbfgs solvers set verbose to any positive\n        number for verbosity.\n\n    solver : {'lbfgs', 'newton-cg', 'liblinear', 'sag', 'saga'}\n        Numerical solver to use.\n\n    coef : array-like, shape (n_features,), default None\n        Initialization value for coefficients of logistic regression.\n        Useless for liblinear solver.\n\n    class_weight : dict or 'balanced', optional\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one.\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``.\n\n        Note that these weights will be multiplied with sample_weight (passed\n        through the fit method) if sample_weight is specified.\n\n    dual : bool\n        Dual or primal formulation. Dual formulation is only implemented for\n        l2 penalty with liblinear solver. Prefer dual=False when\n        n_samples > n_features.\n\n    penalty : str, 'l1', 'l2', or 'elasticnet'\n        Used to specify the norm used in the penalization. The 'newton-cg',\n        'sag' and 'lbfgs' solvers support only l2 penalties. 'elasticnet' is\n        only supported by the 'saga' solver.\n\n    intercept_scaling : float, default 1.\n        Useful only when the solver 'liblinear' is used\n        and self.fit_intercept is set to True. In this case, x becomes\n        [x, self.intercept_scaling],\n        i.e. a \"synthetic\" feature with constant value equal to\n        intercept_scaling is appended to the instance vector.\n        The intercept becomes ``intercept_scaling * synthetic_feature_weight``.\n\n        Note! the synthetic feature weight is subject to l1/l2 regularization\n        as all other features.\n        To lessen the effect of regularization on synthetic feature weight\n        (and therefore on the intercept) intercept_scaling has to be increased.\n\n    multi_class : str, {'ovr', 'multinomial', 'auto'}, default: 'ovr'\n        If the option chosen is 'ovr', then a binary problem is fit for each\n        label. For 'multinomial' the loss minimised is the multinomial loss fit\n        across the entire probability distribution, *even when the data is\n        binary*. 'multinomial' is unavailable when solver='liblinear'.\n        'auto' selects 'ovr' if the data is binary, or if solver='liblinear',\n        and otherwise selects 'multinomial'.\n\n        .. versionadded:: 0.18\n           Stochastic Average Gradient descent solver for 'multinomial' case.\n        .. versionchanged:: 0.20\n            Default will change from 'ovr' to 'auto' in 0.22.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`. Used when ``solver`` == 'sag' or\n        'liblinear'.\n\n    check_input : bool, default True\n        If False, the input arrays X and y will not be checked.\n\n    max_squared_sum : float, default None\n        Maximum squared sum of X over samples. Used only in SAG solver.\n        If None, it will be computed, going through all the samples.\n        The value should be precomputed to speed up cross validation.\n\n    sample_weight : array-like, shape(n_samples,) optional\n        Array of weights that are assigned to individual samples.\n        If not provided, then each sample is given unit weight.\n\n    l1_ratio : float or None, optional (default=None)\n        The Elastic-Net mixing parameter, with ``0 <= l1_ratio <= 1``. Only\n        used if ``penalty='elasticnet'``. Setting ``l1_ratio=0`` is equivalent\n        to using ``penalty='l2'``, while setting ``l1_ratio=1`` is equivalent\n        to using ``penalty='l1'``. For ``0 < l1_ratio <1``, the penalty is a\n        combination of L1 and L2.\n\n    Returns\n    -------\n    coefs : ndarray, shape (n_cs, n_features) or (n_cs, n_features + 1)\n        List of coefficients for the Logistic Regression model. If\n        fit_intercept is set to True then the second dimension will be\n        n_features + 1, where the last item represents the intercept. For\n        ``multiclass='multinomial'``, the shape is (n_classes, n_cs,\n        n_features) or (n_classes, n_cs, n_features + 1).\n\n    Cs : ndarray\n        Grid of Cs used for cross-validation.\n\n    n_iter : array, shape (n_cs,)\n        Actual number of iteration for each Cs.\n\n    Notes\n    -----\n    You might get slightly different results with the solver liblinear than\n    with the others since this uses LIBLINEAR which penalizes the intercept.\n\n    .. versionchanged:: 0.19\n        The \"copy\" parameter was removed.\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            "Input data.  y : array-like, shape (n_samples,) or (n_samples, n_targets)     Input data, target values.  pos_class : int, None     The class with respect to which we perform a one-vs-all fit.     If None, then it is assumed that the given problem is binary.  Cs : int | array-like, shape (n_cs,)     List of values for the regularization parameter or integer specifying     the number of regularization parameters that should be used. In this     case, the parameters will be chosen in a logarithmic scale between     1e-4 and 1e4.  fit_intercept : bool     Whether to fit an intercept for the model. In this case the shape of     the returned array is (n_cs, n_features + 1).  max_iter : int     Maximum number of iterations for the solver.  tol : float     Stopping criterion. For the newton-cg and lbfgs solvers, the iteration     will stop when ``max{|g_i | i = 1, ..., n} <= tol``     where ``g_i`` is the i-th component of the gradient.  verbose : int     For the liblinear and lbfgs solvers set verbose to any positive     number for verbosity.  solver : {'lbfgs', 'newton-cg', 'liblinear', 'sag', 'saga'}     Numerical solver to use.  coef : array-like, shape (n_features,), default None     Initialization value for coefficients of logistic regression.     Useless for liblinear solver.  class_weight : dict or 'balanced', optional     Weights associated with classes in the form ``{class_label: weight}``.     If not given, all classes are supposed to have weight one.      The \"balanced\" mode uses the values of y to automatically adjust     weights inversely proportional to class frequencies in the input data     as ``n_samples / (n_classes * np.bincount(y))``.      Note that these weights will be multiplied with sample_weight (passed     through the fit method) if sample_weight is specified.  dual : bool     Dual or primal formulation. Dual formulation is only implemented for     l2 penalty with liblinear solver. Prefer dual=False when     n_samples > n_features.  penalty : str, 'l1', 'l2', or 'elasticnet'     Used to specify the norm used in the penalization. The 'newton-cg',     'sag' and 'lbfgs' solvers support only l2 penalties. 'elasticnet' is     only supported by the 'saga' solver.  intercept_scaling : float, default 1.     Useful only when the solver 'liblinear' is used     and self.fit_intercept is set to True. In this case, x becomes     [x, self.intercept_scaling],     i.e. a \"synthetic\" feature with constant value equal to     intercept_scaling is appended to the instance vector.     The intercept becomes ``intercept_scaling * synthetic_feature_weight``.      Note! the synthetic feature weight is subject to l1/l2 regularization     as all other features.     To lessen the effect of regularization on synthetic feature weight     (and therefore on the intercept) intercept_scaling has to be increased.  multi_class : str, {'ovr', 'multinomial', 'auto'}, default: 'ovr'     If the option chosen is 'ovr', then a binary problem is fit for each     label. For 'multinomial' the loss minimised is the multinomial loss fit     across the entire probability distribution, *even when the data is     binary*. 'multinomial' is unavailable when solver='liblinear'.     'auto' selects 'ovr' if the data is binary, or if solver='liblinear',     and otherwise selects 'multinomial'.      .. versionadded:: 0.18        Stochastic Average Gradient descent solver for 'multinomial' case.     .. versionchanged:: 0.20         Default will change from 'ovr' to 'auto' in 0.22.  random_state : int, RandomState instance or None, optional, default None     The seed of the pseudo random number generator to use when shuffling     the data.  If int, random_state is the seed used by the random number     generator; If RandomState instance, random_state is the random number     generator; If None, the random number generator is the RandomState     instance used by `np.random`. Used when ``solver`` == 'sag' or     'liblinear'.  check_input : bool, default True     If False, the input arrays X and y will not be checked.  max_squared_sum : float, default None     Maximum squared sum of X over samples. Used only in SAG solver.     If None, it will be computed, going through all the samples.     The value should be precomputed to speed up cross validation.  sample_weight : array-like, shape(n_samples,) optional     Array of weights that are assigned to individual samples.     If not provided, then each sample is given unit weight.  l1_ratio : float or None, optional (default=None)     The Elastic-Net mixing parameter, with ``0 <= l1_ratio <= 1``. Only     used if ``penalty='elasticnet'``. Setting ``l1_ratio=0`` is equivalent     to using ``penalty='l2'``, while setting ``l1_ratio=1`` is equivalent     to using ``penalty='l1'``. For ``0 < l1_ratio <1``, the penalty is a     combination of L1 and L2.",
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coefs',
          docstring:
            "List of coefficients for the Logistic Regression model. If     fit_intercept is set to True then the second dimension will be     n_features + 1, where the last item represents the intercept. For     ``multiclass='multinomial'``, the shape is (n_classes, n_cs,     n_features) or (n_classes, n_cs, n_features + 1).  Cs : ndarray     Grid of Cs used for cross-validation.  n_iter : array, shape (n_cs,)     Actual number of iteration for each Cs.",
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'orthogonal_mp',
      docstring:
        "Orthogonal Matching Pursuit (OMP)\n\n    Solves n_targets Orthogonal Matching Pursuit problems.\n    An instance of the problem has the form:\n\n    When parametrized by the number of non-zero coefficients using\n    `n_nonzero_coefs`:\n    argmin ||y - X\\gamma||^2 subject to ||\\gamma||_0 <= n_{nonzero coefs}\n\n    When parametrized by error using the parameter `tol`:\n    argmin ||\\gamma||_0 subject to ||y - X\\gamma||^2 <= tol\n\n    Read more in the :ref:`User Guide <omp>`.\n\n    Parameters\n    ----------\n    X : array, shape (n_samples, n_features)\n        Input data. Columns are assumed to have unit norm.\n\n    y : array, shape (n_samples,) or (n_samples, n_targets)\n        Input targets\n\n    n_nonzero_coefs : int\n        Desired number of non-zero entries in the solution. If None (by\n        default) this value is set to 10% of n_features.\n\n    tol : float\n        Maximum norm of the residual. If not None, overrides n_nonzero_coefs.\n\n    precompute : {True, False, 'auto'},\n        Whether to perform precomputations. Improves performance when n_targets\n        or n_samples is very large.\n\n    copy_X : bool, optional\n        Whether the design matrix X must be copied by the algorithm. A false\n        value is only helpful if X is already Fortran-ordered, otherwise a\n        copy is made anyway.\n\n    return_path : bool, optional. Default: False\n        Whether to return every value of the nonzero coefficients along the\n        forward path. Useful for cross-validation.\n\n    return_n_iter : bool, optional default False\n        Whether or not to return the number of iterations.\n\n    Returns\n    -------\n    coef : array, shape (n_features,) or (n_features, n_targets)\n        Coefficients of the OMP solution. If `return_path=True`, this contains\n        the whole coefficient path. In this case its shape is\n        (n_features, n_features) or (n_features, n_targets, n_features) and\n        iterating over the last axis yields coefficients in increasing order\n        of active features.\n\n    n_iters : array-like or int\n        Number of active features across every target. Returned only if\n        `return_n_iter` is set to True.\n\n    See also\n    --------\n    OrthogonalMatchingPursuit\n    orthogonal_mp_gram\n    lars_path\n    decomposition.sparse_encode\n\n    Notes\n    -----\n    Orthogonal matching pursuit was introduced in S. Mallat, Z. Zhang,\n    Matching pursuits with time-frequency dictionaries, IEEE Transactions on\n    Signal Processing, Vol. 41, No. 12. (December 1993), pp. 3397-3415.\n    (http://blanche.polytechnique.fr/~mallat/papiers/MallatPursuit93.pdf)\n\n    This implementation is based on Rubinstein, R., Zibulevsky, M. and Elad,\n    M., Efficient Implementation of the K-SVD Algorithm using Batch Orthogonal\n    Matching Pursuit Technical Report - CS Technion, April 2008.\n    https://www.cs.technion.ac.il/~ronrubin/Publications/KSVD-OMP-v2.pdf\n\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'Input data. Columns are assumed to have unit norm.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'Input targets',
          param_type: ['array'],
          expected_shape: '(n_samples,) or (n_samples, n_targets)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_nonzero_coefs',
          docstring:
            'Desired number of non-zero entries in the solution. If None (by default) this value is set to 10% of n_features.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'Maximum norm of the residual. If not None, overrides n_nonzero_coefs.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            'Whether to perform precomputations. Improves performance when n_targets or n_samples is very large.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'Whether the design matrix X must be copied by the algorithm. A false value is only helpful if X is already Fortran-ordered, otherwise a copy is made anyway.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_path',
          docstring:
            'Whether to return every value of the nonzero coefficients along the forward path. Useful for cross-validation.',
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
          name: 'coef',
          docstring:
            'Coefficients of the OMP solution. If `return_path=True`, this contains the whole coefficient path. In this case its shape is (n_features, n_features) or (n_features, n_targets, n_features) and iterating over the last axis yields coefficients in increasing order of active features.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iters',
          docstring:
            'Number of active features across every target. Returned only if `return_n_iter` is set to True.',
          param_type: ['array', 'int'],
          returned: true
        }
      ]
    },
    {
      name: 'orthogonal_mp_gram',
      docstring:
        'Gram Orthogonal Matching Pursuit (OMP)\n\n    Solves n_targets Orthogonal Matching Pursuit problems using only\n    the Gram matrix X.T * X and the product X.T * y.\n\n    Read more in the :ref:`User Guide <omp>`.\n\n    Parameters\n    ----------\n    Gram : array, shape (n_features, n_features)\n        Gram matrix of the input data: X.T * X\n\n    Xy : array, shape (n_features,) or (n_features, n_targets)\n        Input targets multiplied by X: X.T * y\n\n    n_nonzero_coefs : int\n        Desired number of non-zero entries in the solution. If None (by\n        default) this value is set to 10% of n_features.\n\n    tol : float\n        Maximum norm of the residual. If not None, overrides n_nonzero_coefs.\n\n    norms_squared : array-like, shape (n_targets,)\n        Squared L2 norms of the lines of y. Required if tol is not None.\n\n    copy_Gram : bool, optional\n        Whether the gram matrix must be copied by the algorithm. A false\n        value is only helpful if it is already Fortran-ordered, otherwise a\n        copy is made anyway.\n\n    copy_Xy : bool, optional\n        Whether the covariance vector Xy must be copied by the algorithm.\n        If False, it may be overwritten.\n\n    return_path : bool, optional. Default: False\n        Whether to return every value of the nonzero coefficients along the\n        forward path. Useful for cross-validation.\n\n    return_n_iter : bool, optional default False\n        Whether or not to return the number of iterations.\n\n    Returns\n    -------\n    coef : array, shape (n_features,) or (n_features, n_targets)\n        Coefficients of the OMP solution. If `return_path=True`, this contains\n        the whole coefficient path. In this case its shape is\n        (n_features, n_features) or (n_features, n_targets, n_features) and\n        iterating over the last axis yields coefficients in increasing order\n        of active features.\n\n    n_iters : array-like or int\n        Number of active features across every target. Returned only if\n        `return_n_iter` is set to True.\n\n    See also\n    --------\n    OrthogonalMatchingPursuit\n    orthogonal_mp\n    lars_path\n    decomposition.sparse_encode\n\n    Notes\n    -----\n    Orthogonal matching pursuit was introduced in G. Mallat, Z. Zhang,\n    Matching pursuits with time-frequency dictionaries, IEEE Transactions on\n    Signal Processing, Vol. 41, No. 12. (December 1993), pp. 3397-3415.\n    (http://blanche.polytechnique.fr/~mallat/papiers/MallatPursuit93.pdf)\n\n    This implementation is based on Rubinstein, R., Zibulevsky, M. and Elad,\n    M., Efficient Implementation of the K-SVD Algorithm using Batch Orthogonal\n    Matching Pursuit Technical Report - CS Technion, April 2008.\n    https://www.cs.technion.ac.il/~ronrubin/Publications/KSVD-OMP-v2.pdf\n\n    ',
      inputs: [
        {
          name: 'Gram',
          docstring: 'Gram matrix of the input data: X.T * X',
          param_type: ['array'],
          expected_shape: '(n_features, n_features)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'Xy',
          docstring: 'Input targets multiplied by X: X.T * y',
          param_type: ['array'],
          expected_shape: '(n_features,) or (n_features, n_targets)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_nonzero_coefs',
          docstring:
            'Desired number of non-zero entries in the solution. If None (by default) this value is set to 10% of n_features.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'Maximum norm of the residual. If not None, overrides n_nonzero_coefs.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'norms_squared',
          docstring:
            'Squared L2 norms of the lines of y. Required if tol is not None.',
          param_type: ['array'],
          expected_shape: '(n_targets,)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'copy_Gram',
          docstring:
            'Whether the gram matrix must be copied by the algorithm. A false value is only helpful if it is already Fortran-ordered, otherwise a copy is made anyway.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_Xy',
          docstring:
            'Whether the covariance vector Xy must be copied by the algorithm. If False, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_path',
          docstring:
            'Whether to return every value of the nonzero coefficients along the forward path. Useful for cross-validation.',
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
          name: 'coef',
          docstring:
            'Coefficients of the OMP solution. If `return_path=True`, this contains the whole coefficient path. In this case its shape is (n_features, n_features) or (n_features, n_targets, n_features) and iterating over the last axis yields coefficients in increasing order of active features.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iters',
          docstring:
            'Number of active features across every target. Returned only if `return_n_iter` is set to True.',
          param_type: ['array', 'int'],
          returned: true
        }
      ]
    },
    {
      name: 'ridge_regression',
      docstring:
        "Solve the ridge equation by the method of normal equations.\n\n    Read more in the :ref:`User Guide <ridge_regression>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix, LinearOperator},\n        shape = [n_samples, n_features]\n        Training data\n\n    y : array-like, shape = [n_samples] or [n_samples, n_targets]\n        Target values\n\n    alpha : {float, array-like},\n        shape = [n_targets] if array-like\n        Regularization strength; must be a positive float. Regularization\n        improves the conditioning of the problem and reduces the variance of\n        the estimates. Larger values specify stronger regularization.\n        Alpha corresponds to ``C^-1`` in other linear models such as\n        LogisticRegression or LinearSVC. If an array is passed, penalties are\n        assumed to be specific to the targets. Hence they must correspond in\n        number.\n\n    sample_weight : float or numpy array of shape [n_samples]\n        Individual weights for each sample. If sample_weight is not None and\n        solver='auto', the solver will be set to 'cholesky'.\n\n        .. versionadded:: 0.17\n\n    solver : {'auto', 'svd', 'cholesky', 'lsqr', 'sparse_cg', 'sag', 'saga'}\n        Solver to use in the computational routines:\n\n        - 'auto' chooses the solver automatically based on the type of data.\n\n        - 'svd' uses a Singular Value Decomposition of X to compute the Ridge\n          coefficients. More stable for singular matrices than\n          'cholesky'.\n\n        - 'cholesky' uses the standard scipy.linalg.solve function to\n          obtain a closed-form solution via a Cholesky decomposition of\n          dot(X.T, X)\n\n        - 'sparse_cg' uses the conjugate gradient solver as found in\n          scipy.sparse.linalg.cg. As an iterative algorithm, this solver is\n          more appropriate than 'cholesky' for large-scale data\n          (possibility to set `tol` and `max_iter`).\n\n        - 'lsqr' uses the dedicated regularized least-squares routine\n          scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative\n          procedure.\n\n        - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses\n          its improved, unbiased version named SAGA. Both methods also use an\n          iterative procedure, and are often faster than other solvers when\n          both n_samples and n_features are large. Note that 'sag' and\n          'saga' fast convergence is only guaranteed on features with\n          approximately the same scale. You can preprocess the data with a\n          scaler from sklearn.preprocessing.\n\n\n        All last five solvers support both dense and sparse data. However, only\n        'sag' and 'sparse_cg' supports sparse input when`fit_intercept` is\n        True.\n\n        .. versionadded:: 0.17\n           Stochastic Average Gradient descent solver.\n        .. versionadded:: 0.19\n           SAGA solver.\n\n    max_iter : int, optional\n        Maximum number of iterations for conjugate gradient solver.\n        For the 'sparse_cg' and 'lsqr' solvers, the default value is determined\n        by scipy.sparse.linalg. For 'sag' and saga solver, the default value is\n        1000.\n\n    tol : float\n        Precision of the solution.\n\n    verbose : int\n        Verbosity level. Setting verbose > 0 will display additional\n        information depending on the solver used.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`. Used when ``solver`` == 'sag'.\n\n    return_n_iter : boolean, default False\n        If True, the method also returns `n_iter`, the actual number of\n        iteration performed by the solver.\n\n        .. versionadded:: 0.17\n\n    return_intercept : boolean, default False\n        If True and if X is sparse, the method also returns the intercept,\n        and the solver is automatically changed to 'sag'. This is only a\n        temporary fix for fitting the intercept with sparse data. For dense\n        data, use sklearn.linear_model._preprocess_data before your regression.\n\n        .. versionadded:: 0.17\n\n    check_input : boolean, default True\n        If False, the input arrays X and y will not be checked.\n\n        .. versionadded:: 0.21\n\n    Returns\n    -------\n    coef : array, shape = [n_features] or [n_targets, n_features]\n        Weight vector(s).\n\n    n_iter : int, optional\n        The actual number of iteration performed by the solver.\n        Only returned if `return_n_iter` is True.\n\n    intercept : float or array, shape = [n_targets]\n        The intercept of the model. Only returned if `return_intercept`\n        is True and if X is a scipy sparse array.\n\n    Notes\n    -----\n    This function won't compute the intercept.\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'shape = [n_samples, n_features] Training data',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'Target values',
          param_type: ['array'],
          expected_shape: '= [n_samples] or [n_samples, n_targets]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring:
            'shape = [n_targets] if array-like Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegression or LinearSVC. If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'sample_weight',
          docstring:
            "Individual weights for each sample. If sample_weight is not None and solver='auto', the solver will be set to 'cholesky'.  .. versionadded:: 0.17",
          param_type: ['array', 'float'],
          expected_shape: '[n_samples]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'solver',
          docstring:
            "Solver to use in the computational routines:  - 'auto' chooses the solver automatically based on the type of data.  - 'svd' uses a Singular Value Decomposition of X to compute the Ridge   coefficients. More stable for singular matrices than   'cholesky'.  - 'cholesky' uses the standard scipy.linalg.solve function to   obtain a closed-form solution via a Cholesky decomposition of   dot(X.T, X)  - 'sparse_cg' uses the conjugate gradient solver as found in   scipy.sparse.linalg.cg. As an iterative algorithm, this solver is   more appropriate than 'cholesky' for large-scale data   (possibility to set `tol` and `max_iter`).  - 'lsqr' uses the dedicated regularized least-squares routine   scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative   procedure.  - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses   its improved, unbiased version named SAGA. Both methods also use an   iterative procedure, and are often faster than other solvers when   both n_samples and n_features are large. Note that 'sag' and   'saga' fast convergence is only guaranteed on features with   approximately the same scale. You can preprocess the data with a   scaler from sklearn.preprocessing.  All last five solvers support both dense and sparse data. However, only 'sag' and 'sparse_cg' supports sparse input when`fit_intercept` is True.  .. versionadded:: 0.17    Stochastic Average Gradient descent solver. .. versionadded:: 0.19    SAGA solver.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            "Maximum number of iterations for conjugate gradient solver. For the 'sparse_cg' and 'lsqr' solvers, the default value is determined by scipy.sparse.linalg. For 'sag' and saga solver, the default value is 1000.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Precision of the solution.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Verbosity level. Setting verbose > 0 will display additional information depending on the solver used.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``solver`` == 'sag'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_n_iter',
          docstring:
            'If True, the method also returns `n_iter`, the actual number of iteration performed by the solver.  .. versionadded:: 0.17',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'return_intercept',
          docstring:
            "If True and if X is sparse, the method also returns the intercept, and the solver is automatically changed to 'sag'. This is only a temporary fix for fitting the intercept with sparse data. For dense data, use sklearn.linear_model._preprocess_data before your regression.  .. versionadded:: 0.17",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'check_input',
          docstring:
            'If False, the input arrays X and y will not be checked.  .. versionadded:: 0.21',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        }
      ],
      outputs: [
        {
          name: 'coef',
          docstring: 'Weight vector(s).',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'n_iter',
          docstring:
            'The actual number of iteration performed by the solver. Only returned if `return_n_iter` is True.',
          param_type: ['int'],
          returned: true
        },
        {
          name: 'intercept',
          docstring:
            'The intercept of the model. Only returned if `return_intercept` is True and if X is a scipy sparse array.',
          param_type: ['array', 'float'],
          returned: true
        }
      ]
    }
  ],
  nodes: [
    {
      name: 'ARDRegression',
      docstring:
        'Bayesian ARD regression.\n\n    Fit the weights of a regression model, using an ARD prior. The weights of\n    the regression model are assumed to be in Gaussian distributions.\n    Also estimate the parameters lambda (precisions of the distributions of the\n    weights) and alpha (precision of the distribution of the noise).\n    The estimation is done by an iterative procedures (Evidence Maximization)\n\n    Read more in the :ref:`User Guide <bayesian_regression>`.\n\n    Parameters\n    ----------\n    n_iter : int, optional\n        Maximum number of iterations. Default is 300\n\n    tol : float, optional\n        Stop the algorithm if w has converged. Default is 1.e-3.\n\n    alpha_1 : float, optional\n        Hyper-parameter : shape parameter for the Gamma distribution prior\n        over the alpha parameter. Default is 1.e-6.\n\n    alpha_2 : float, optional\n        Hyper-parameter : inverse scale parameter (rate parameter) for the\n        Gamma distribution prior over the alpha parameter. Default is 1.e-6.\n\n    lambda_1 : float, optional\n        Hyper-parameter : shape parameter for the Gamma distribution prior\n        over the lambda parameter. Default is 1.e-6.\n\n    lambda_2 : float, optional\n        Hyper-parameter : inverse scale parameter (rate parameter) for the\n        Gamma distribution prior over the lambda parameter. Default is 1.e-6.\n\n    compute_score : boolean, optional\n        If True, compute the objective function at each step of the model.\n        Default is False.\n\n    threshold_lambda : float, optional\n        threshold for removing (pruning) weights with high precision from\n        the computation. Default is 1.e+4.\n\n    fit_intercept : boolean, optional\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n        Default is True.\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    copy_X : boolean, optional, default True.\n        If True, X will be copied; else, it may be overwritten.\n\n    verbose : boolean, optional, default False\n        Verbose mode when fitting the model.\n\n    Attributes\n    ----------\n    coef_ : array, shape = (n_features)\n        Coefficients of the regression model (mean of distribution)\n\n    alpha_ : float\n       estimated precision of the noise.\n\n    lambda_ : array, shape = (n_features)\n       estimated precisions of the weights.\n\n    sigma_ : array, shape = (n_features, n_features)\n        estimated variance-covariance matrix of the weights\n\n    scores_ : float\n        if computed, value of the objective function (to be maximized)\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> clf = linear_model.ARDRegression()\n    >>> clf.fit([[0,0], [1, 1], [2, 2]], [0, 1, 2])\n    ... # doctest: +NORMALIZE_WHITESPACE\n    ARDRegression(alpha_1=1e-06, alpha_2=1e-06, compute_score=False,\n            copy_X=True, fit_intercept=True, lambda_1=1e-06, lambda_2=1e-06,\n            n_iter=300, normalize=False, threshold_lambda=10000.0, tol=0.001,\n            verbose=False)\n    >>> clf.predict([[1, 1]])\n    array([1.])\n\n    Notes\n    -----\n    For an example, see :ref:`examples/linear_model/plot_ard.py\n    <sphx_glr_auto_examples_linear_model_plot_ard.py>`.\n\n    References\n    ----------\n    D. J. C. MacKay, Bayesian nonlinear modeling for the prediction\n    competition, ASHRAE Transactions, 1994.\n\n    R. Salakhutdinov, Lecture notes on Statistical Machine Learning,\n    http://www.utstat.toronto.edu/~rsalakhu/sta4273/notes/Lecture2.pdf#page=15\n    Their beta is our ``self.alpha_``\n    Their alpha is our ``self.lambda_``\n    ARD is a little different than the slide: only dimensions/features for\n    which ``self.lambda_ < self.threshold_lambda`` are kept and the rest are\n    discarded.\n    ',
      inputs: [
        {
          name: 'n_iter',
          docstring: 'Maximum number of iterations. Default is 300',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Stop the algorithm if w has converged. Default is 1.e-3.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alpha_1',
          docstring:
            'Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter. Default is 1.e-6.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alpha_2',
          docstring:
            'Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter. Default is 1.e-6.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'lambda_1',
          docstring:
            'Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter. Default is 1.e-6.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'lambda_2',
          docstring:
            'Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter. Default is 1.e-6.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'compute_score',
          docstring:
            'If True, compute the objective function at each step of the model. Default is False.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'threshold_lambda',
          docstring:
            'threshold for removing (pruning) weights with high precision from the computation. Default is 1.e+4.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered). Default is True.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Verbose mode when fitting the model.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Coefficients of the regression model (mean of distribution)',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'estimated precision of the noise.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'lambda_',
          docstring: 'estimated precisions of the weights.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'sigma_',
          docstring: 'estimated variance-covariance matrix of the weights',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'scores_',
          docstring:
            'if computed, value of the objective function (to be maximized)',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit the ARDRegression model according to the given training data\n        and parameters.\n\n        Iterative procedure to maximize the evidence\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n            Training vector, where n_samples in the number of samples and\n            n_features is the number of features.\n        y : array, shape = [n_samples]\n            Target values (integers). Will be cast to X's dtype if necessary\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                "Target values (integers). Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '= [n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model.\n\n        In addition to the mean of the predictive distribution, also its\n        standard deviation can be returned.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = (n_samples, n_features)\n            Samples.\n\n        return_std : boolean, optional\n            Whether to return the standard deviation of posterior prediction.\n\n        Returns\n        -------\n        y_mean : array, shape = (n_samples,)\n            Mean of predictive distribution of query points.\n\n        y_std : array, shape = (n_samples,)\n            Standard deviation of predictive distribution of query points.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_std',
              docstring:
                'Whether to return the standard deviation of posterior prediction.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_mean',
              docstring: 'Mean of predictive distribution of query points.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'y_std',
              docstring:
                'Standard deviation of predictive distribution of query points.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'BayesianRidge',
      docstring:
        'Bayesian ridge regression.\n\n    Fit a Bayesian ridge model. See the Notes section for details on this\n    implementation and the optimization of the regularization parameters\n    lambda (precision of the weights) and alpha (precision of the noise).\n\n    Read more in the :ref:`User Guide <bayesian_regression>`.\n\n    Parameters\n    ----------\n    n_iter : int, optional\n        Maximum number of iterations.  Default is 300. Should be greater than\n        or equal to 1.\n\n    tol : float, optional\n        Stop the algorithm if w has converged. Default is 1.e-3.\n\n    alpha_1 : float, optional\n        Hyper-parameter : shape parameter for the Gamma distribution prior\n        over the alpha parameter. Default is 1.e-6\n\n    alpha_2 : float, optional\n        Hyper-parameter : inverse scale parameter (rate parameter) for the\n        Gamma distribution prior over the alpha parameter.\n        Default is 1.e-6.\n\n    lambda_1 : float, optional\n        Hyper-parameter : shape parameter for the Gamma distribution prior\n        over the lambda parameter. Default is 1.e-6.\n\n    lambda_2 : float, optional\n        Hyper-parameter : inverse scale parameter (rate parameter) for the\n        Gamma distribution prior over the lambda parameter.\n        Default is 1.e-6\n\n    compute_score : boolean, optional\n        If True, compute the log marginal likelihood at each iteration of the\n        optimization. Default is False.\n\n    fit_intercept : boolean, optional, default True\n        Whether to calculate the intercept for this model.\n        The intercept is not treated as a probabilistic parameter\n        and thus has no associated variance. If set\n        to False, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    verbose : boolean, optional, default False\n        Verbose mode when fitting the model.\n\n\n    Attributes\n    ----------\n    coef_ : array, shape = (n_features,)\n        Coefficients of the regression model (mean of distribution).\n\n    intercept_ : float\n        Independent term in decision function. Set to 0.0 if\n        ``fit_intercept = False``.\n\n    alpha_ : float\n       Estimated precision of the noise.\n\n    lambda_ : float\n       Estimated precision of the weights.\n\n    sigma_ : array, shape = (n_features, n_features)\n        Estimated variance-covariance matrix of the weights.\n\n    scores_ : array, shape = (n_iter_ + 1,)\n        If computed_score is True, value of the log marginal likelihood (to be\n        maximized) at each iteration of the optimization. The array starts\n        with the value of the log marginal likelihood obtained for the initial\n        values of alpha and lambda and ends with the value obtained for the\n        estimated alpha and lambda.\n\n    n_iter_ : int\n        The actual number of iterations to reach the stopping criterion.\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> clf = linear_model.BayesianRidge()\n    >>> clf.fit([[0,0], [1, 1], [2, 2]], [0, 1, 2])\n    ... # doctest: +NORMALIZE_WHITESPACE\n    BayesianRidge(alpha_1=1e-06, alpha_2=1e-06, compute_score=False,\n            copy_X=True, fit_intercept=True, lambda_1=1e-06, lambda_2=1e-06,\n            n_iter=300, normalize=False, tol=0.001, verbose=False)\n    >>> clf.predict([[1, 1]])\n    array([1.])\n\n    Notes\n    -----\n    There exist several strategies to perform Bayesian ridge regression. This\n    implementation is based on the algorithm described in Appendix A of\n    (Tipping, 2001) where updates of the regularization parameters are done as\n    suggested in (MacKay, 1992). Note that according to A New\n    View of Automatic Relevance Determination (Wipf and Nagarajan, 2008) these\n    update rules do not guarantee that the marginal likelihood is increasing\n    between two consecutive iterations of the optimization.\n\n    References\n    ----------\n    D. J. C. MacKay, Bayesian Interpolation, Computation and Neural Systems,\n    Vol. 4, No. 3, 1992.\n\n    M. E. Tipping, Sparse Bayesian Learning and the Relevance Vector Machine,\n    Journal of Machine Learning Research, Vol. 1, 2001.\n    ',
      inputs: [
        {
          name: 'n_iter',
          docstring:
            'Maximum number of iterations.  Default is 300. Should be greater than or equal to 1.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Stop the algorithm if w has converged. Default is 1.e-3.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alpha_1',
          docstring:
            'Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter. Default is 1.e-6',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alpha_2',
          docstring:
            'Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter. Default is 1.e-6.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'lambda_1',
          docstring:
            'Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter. Default is 1.e-6.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'lambda_2',
          docstring:
            'Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter. Default is 1.e-6',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'compute_score',
          docstring:
            'If True, compute the log marginal likelihood at each iteration of the optimization. Default is False.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. The intercept is not treated as a probabilistic parameter and thus has no associated variance. If set to False, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Verbose mode when fitting the model.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Coefficients of the regression model (mean of distribution).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring:
            'Independent term in decision function. Set to 0.0 if ``fit_intercept = False``.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'Estimated precision of the noise.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'lambda_',
          docstring: 'Estimated precision of the weights.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'sigma_',
          docstring: 'Estimated variance-covariance matrix of the weights.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'scores_',
          docstring:
            'If computed_score is True, value of the log marginal likelihood (to be maximized) at each iteration of the optimization. The array starts with the value of the log marginal likelihood obtained for the initial values of alpha and lambda and ends with the value obtained for the estimated alpha and lambda.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The actual number of iterations to reach the stopping criterion.',
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
          name: '_decision_function',
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
          name: '_log_marginal_likelihood',
          docstring: 'Log marginal likelihood.',
          inputs: [],
          outputs: []
        },
        {
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_update_coef_',
          docstring:
            'Update posterior mean and compute corresponding rmse.\n\n        Posterior mean is given by coef_ = scaled_sigma_ * X.T * y where\n        scaled_sigma_ = (lambda_/alpha_ * np.eye(n_features)\n                         + np.dot(X.T, X))^-1\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit the model\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples,n_features]\n            Training data\n        y : numpy array of shape [n_samples]\n            Target values. Will be cast to X's dtype if necessary\n\n        sample_weight : numpy array of shape [n_samples]\n            Individual weights for each sample\n\n            .. versionadded:: 0.20\n               parameter *sample_weight* support to BayesianRidge.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['array'],
              expected_shape: '[n_samples,n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                "Target values. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Individual weights for each sample  .. versionadded:: 0.20    parameter *sample_weight* support to BayesianRidge.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model.\n\n        In addition to the mean of the predictive distribution, also its\n        standard deviation can be returned.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = (n_samples, n_features)\n            Samples.\n\n        return_std : boolean, optional\n            Whether to return the standard deviation of posterior prediction.\n\n        Returns\n        -------\n        y_mean : array, shape = (n_samples,)\n            Mean of predictive distribution of query points.\n\n        y_std : array, shape = (n_samples,)\n            Standard deviation of predictive distribution of query points.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_std',
              docstring:
                'Whether to return the standard deviation of posterior prediction.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_mean',
              docstring: 'Mean of predictive distribution of query points.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'y_std',
              docstring:
                'Standard deviation of predictive distribution of query points.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'ElasticNet',
      docstring:
        "Linear regression with combined L1 and L2 priors as regularizer.\n\n    Minimizes the objective function::\n\n            1 / (2 * n_samples) * ||y - Xw||^2_2\n            + alpha * l1_ratio * ||w||_1\n            + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    If you are interested in controlling the L1 and L2 penalty\n    separately, keep in mind that this is equivalent to::\n\n            a * L1 + b * L2\n\n    where::\n\n            alpha = a + b and l1_ratio = a / (a + b)\n\n    The parameter l1_ratio corresponds to alpha in the glmnet R package while\n    alpha corresponds to the lambda parameter in glmnet. Specifically, l1_ratio\n    = 1 is the lasso penalty. Currently, l1_ratio <= 0.01 is not reliable,\n    unless you supply your own sequence of alpha.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    alpha : float, optional\n        Constant that multiplies the penalty terms. Defaults to 1.0.\n        See the notes for the exact mathematical meaning of this\n        parameter.``alpha = 0`` is equivalent to an ordinary least square,\n        solved by the :class:`LinearRegression` object. For numerical\n        reasons, using ``alpha = 0`` with the ``Lasso`` object is not advised.\n        Given this, you should use the :class:`LinearRegression` object.\n\n    l1_ratio : float\n        The ElasticNet mixing parameter, with ``0 <= l1_ratio <= 1``. For\n        ``l1_ratio = 0`` the penalty is an L2 penalty. ``For l1_ratio = 1`` it\n        is an L1 penalty.  For ``0 < l1_ratio < 1``, the penalty is a\n        combination of L1 and L2.\n\n    fit_intercept : bool\n        Whether the intercept should be estimated or not. If ``False``, the\n        data is assumed to be already centered.\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. The Gram matrix can also be passed as argument.\n        For sparse input this option is always ``True`` to preserve sparsity.\n\n    max_iter : int, optional\n        The maximum number of iterations\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    warm_start : bool, optional\n        When set to ``True``, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n    positive : bool, optional\n        When set to ``True``, forces the coefficients to be positive.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'.\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,) | (n_targets, n_features)\n        parameter vector (w in the cost function formula)\n\n    sparse_coef_ : scipy.sparse matrix, shape (n_features, 1) |             (n_targets, n_features)\n        ``sparse_coef_`` is a readonly property derived from ``coef_``\n\n    intercept_ : float | array, shape (n_targets,)\n        independent term in decision function.\n\n    n_iter_ : array-like, shape (n_targets,)\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import ElasticNet\n    >>> from sklearn.datasets import make_regression\n\n    >>> X, y = make_regression(n_features=2, random_state=0)\n    >>> regr = ElasticNet(random_state=0)\n    >>> regr.fit(X, y)  # doctest: +NORMALIZE_WHITESPACE\n    ElasticNet(alpha=1.0, copy_X=True, fit_intercept=True, l1_ratio=0.5,\n          max_iter=1000, normalize=False, positive=False, precompute=False,\n          random_state=0, selection='cyclic', tol=0.0001, warm_start=False)\n    >>> print(regr.coef_) # doctest: +ELLIPSIS\n    [18.83816048 64.55968825]\n    >>> print(regr.intercept_) # doctest: +ELLIPSIS\n    1.451...\n    >>> print(regr.predict([[0, 0]])) # doctest: +ELLIPSIS\n    [1.451...]\n\n\n    Notes\n    -----\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n\n    See also\n    --------\n    ElasticNetCV : Elastic net model with best model selection by\n        cross-validation.\n    SGDRegressor: implements elastic net regression with incremental training.\n    SGDClassifier: implements logistic regression with elastic net penalty\n        (``SGDClassifier(loss=\"log\", penalty=\"elasticnet\")``).\n    ",
      inputs: [
        {
          name: 'alpha',
          docstring:
            'Constant that multiplies the penalty terms. Defaults to 1.0. See the notes for the exact mathematical meaning of this parameter.``alpha = 0`` is equivalent to an ordinary least square, solved by the :class:`LinearRegression` object. For numerical reasons, using ``alpha = 0`` with the ``Lasso`` object is not advised. Given this, you should use the :class:`LinearRegression` object.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'l1_ratio',
          docstring:
            'The ElasticNet mixing parameter, with ``0 <= l1_ratio <= 1``. For ``l1_ratio = 0`` the penalty is an L2 penalty. ``For l1_ratio = 1`` it is an L1 penalty.  For ``0 < l1_ratio < 1``, the penalty is a combination of L1 and L2.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether the intercept should be estimated or not. If ``False``, the data is assumed to be already centered.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            'Whether to use a precomputed Gram matrix to speed up calculations. The Gram matrix can also be passed as argument. For sparse input this option is always ``True`` to preserve sparsity.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to ``True``, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'When set to ``True``, forces the coefficients to be positive.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'parameter vector (w in the cost function formula)',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          returned: false
        },
        {
          name: 'sparse_coef_',
          docstring:
            '``sparse_coef_`` is a readonly property derived from ``coef_``',
          param_type: ['LIST_VALID_OPTIONS'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance.',
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
          name: '_decision_function',
          docstring:
            'Decision function of the linear model\n\n        Parameters\n        ----------\n        X : numpy array or scipy.sparse matrix of shape (n_samples, n_features)\n\n        Returns\n        -------\n        T : array, shape (n_samples,)\n            The predicted decision function\n        ',
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
              name: 'T',
              docstring: 'The predicted decision function',
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit model with coordinate descent.\n\n        Parameters\n        ----------\n        X : ndarray or scipy.sparse matrix, (n_samples, n_features)\n            Data\n\n        y : ndarray, shape (n_samples,) or (n_samples, n_targets)\n            Target. Will be cast to X's dtype if necessary\n\n        check_input : boolean, (default=True)\n            Allow to bypass several input checking.\n            Don't use this parameter unless you know what you do.\n\n        Notes\n        -----\n\n        Coordinate descent is an algorithm that considers each column of\n        data at a time hence it will automatically convert the X input\n        as a Fortran-contiguous numpy array if necessary.\n\n        To avoid memory re-allocation it is advised to allocate the\n        initial data in memory directly using that format.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Data',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: "Target. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'check_input',
              docstring:
                "Allow to bypass several input checking. Don't use this parameter unless you know what you do.",
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: '=True)'
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'l1_ratio',
              docstring:
                'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If None alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: 'check_input',
              docstring:
                'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'ElasticNetCV',
      docstring:
        "Elastic Net model with iterative fitting along a regularization path.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    l1_ratio : float or array of floats, optional\n        float between 0 and 1 passed to ElasticNet (scaling between\n        l1 and l2 penalties). For ``l1_ratio = 0``\n        the penalty is an L2 penalty. For ``l1_ratio = 1`` it is an L1 penalty.\n        For ``0 < l1_ratio < 1``, the penalty is a combination of L1 and L2\n        This parameter can be a list, in which case the different\n        values are tested by cross-validation and the one giving the best\n        prediction score is used. Note that a good choice of list of\n        values for l1_ratio is often to put more values close to 1\n        (i.e. Lasso) and less close to 0 (i.e. Ridge), as in ``[.1, .5, .7,\n        .9, .95, .99, 1]``\n\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``.\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path, used for each l1_ratio.\n\n    alphas : numpy array, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    max_iter : int, optional\n        The maximum number of iterations\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    positive : bool, optional\n        When set to ``True``, forces the coefficients to be positive.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'.\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4.\n\n    Attributes\n    ----------\n    alpha_ : float\n        The amount of penalization chosen by cross validation\n\n    l1_ratio_ : float\n        The compromise between l1 and l2 penalization chosen by\n        cross validation\n\n    coef_ : array, shape (n_features,) | (n_targets, n_features)\n        Parameter vector (w in the cost function formula),\n\n    intercept_ : float | array, shape (n_targets, n_features)\n        Independent term in the decision function.\n\n    mse_path_ : array, shape (n_l1_ratio, n_alpha, n_folds)\n        Mean square error for the test set on each fold, varying l1_ratio and\n        alpha.\n\n    alphas_ : numpy array, shape (n_alphas,) or (n_l1_ratio, n_alphas)\n        The grid of alphas used for fitting, for each l1_ratio.\n\n    n_iter_ : int\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance for the optimal alpha.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import ElasticNetCV\n    >>> from sklearn.datasets import make_regression\n\n    >>> X, y = make_regression(n_features=2, random_state=0)\n    >>> regr = ElasticNetCV(cv=5, random_state=0)\n    >>> regr.fit(X, y)  # doctest: +NORMALIZE_WHITESPACE\n    ElasticNetCV(alphas=None, copy_X=True, cv=5, eps=0.001, fit_intercept=True,\n           l1_ratio=0.5, max_iter=1000, n_alphas=100, n_jobs=None,\n           normalize=False, positive=False, precompute='auto', random_state=0,\n           selection='cyclic', tol=0.0001, verbose=0)\n    >>> print(regr.alpha_) # doctest: +ELLIPSIS\n    0.199...\n    >>> print(regr.intercept_) # doctest: +ELLIPSIS\n    0.398...\n    >>> print(regr.predict([[0, 0]])) # doctest: +ELLIPSIS\n    [0.398...]\n\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_model_selection.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_model_selection.py>`.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n\n    The parameter l1_ratio corresponds to alpha in the glmnet R package\n    while alpha corresponds to the lambda parameter in glmnet.\n    More specifically, the optimization objective is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    If you are interested in controlling the L1 and L2 penalty\n    separately, keep in mind that this is equivalent to::\n\n        a * L1 + b * L2\n\n    for::\n\n        alpha = a + b and l1_ratio = a / (a + b).\n\n    See also\n    --------\n    enet_path\n    ElasticNet\n\n    ",
      inputs: [
        {
          name: 'l1_ratio',
          docstring:
            'float between 0 and 1 passed to ElasticNet (scaling between l1 and l2 penalties). For ``l1_ratio = 0`` the penalty is an L2 penalty. For ``l1_ratio = 1`` it is an L1 penalty. For ``0 < l1_ratio < 1``, the penalty is a combination of L1 and L2 This parameter can be a list, in which case the different values are tested by cross-validation and the one giving the best prediction score is used. Note that a good choice of list of values for l1_ratio is often to put more values close to 1 (i.e. Lasso) and less close to 0 (i.e. Ridge), as in ``[.1, .5, .7, .9, .95, .99, 1]``',
          param_type: ['array', 'float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_alphas',
          docstring:
            'Number of alphas along the regularization path, used for each l1_ratio.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alphas',
          docstring:
            'List of alphas where to compute the models. If None alphas are set automatically',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Amount of verbosity.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'When set to ``True``, forces the coefficients to be positive.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'alpha_',
          docstring: 'The amount of penalization chosen by cross validation',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'l1_ratio_',
          docstring:
            'The compromise between l1 and l2 penalization chosen by cross validation',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'coef_',
          docstring: 'Parameter vector (w in the cost function formula),',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Independent term in the decision function.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'mse_path_',
          docstring:
            'Mean square error for the test set on each fold, varying l1_ratio and alpha.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alphas_',
          docstring: 'The grid of alphas used for fitting, for each l1_ratio.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with coordinate descent\n\n        Fit is on grid of alphas and best alpha estimated by cross-validation.\n\n        Parameters\n        ----------\n        X : {array-like}, shape (n_samples, n_features)\n            Training data. Pass directly as Fortran-contiguous data\n            to avoid unnecessary memory duplication. If y is mono-output,\n            X can be sparse.\n\n        y : array-like, shape (n_samples,) or (n_samples, n_targets)\n            Target values\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'l1_ratio',
              docstring:
                'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If None alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: 'check_input',
              docstring:
                'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'Hinge',
      docstring:
        'Hinge loss for binary classification tasks with y in {-1,1}\n\n    Parameters\n    ----------\n\n    threshold : float > 0.0\n        Margin threshold. When threshold=1.0, one gets the loss used by SVM.\n        When threshold=0.0, one gets the loss used by the Perceptron.\n    ',
      inputs: [
        {
          name: 'threshold',
          docstring:
            'Margin threshold. When threshold=1.0, one gets the loss used by SVM. When threshold=0.0, one gets the loss used by the Perceptron.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring:
            'Initialize self.  See help(type(self)) for accurate signature.',
          inputs: [],
          outputs: []
        },
        {
          name: 'dloss',
          docstring:
            'Evaluate the derivative of the loss function with respect to\n        the prediction `p`.\n\n        Parameters\n        ----------\n        p : double\n            The prediction, p = w^T x\n        y : double\n            The true value (aka target)\n        Returns\n        -------\n        double\n            The derivative of the loss function with regards to `p`.\n        ',
          inputs: [
            {
              name: 'p',
              docstring: 'The prediction, p = w^T x',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'The true value (aka target)',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Returns',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: '-------',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'double',
              docstring:
                'The derivative of the loss function with regards to `p`.',
              param_type: [null],
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
      name: 'Huber',
      docstring:
        'Huber regression loss\n\n    Variant of the SquaredLoss that is robust to outliers (quadratic near zero,\n    linear in for large errors).\n\n    https://en.wikipedia.org/wiki/Huber_Loss_Function\n    ',
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring:
            'Initialize self.  See help(type(self)) for accurate signature.',
          inputs: [],
          outputs: []
        },
        {
          name: 'dloss',
          docstring:
            'Evaluate the derivative of the loss function with respect to\n        the prediction `p`.\n\n        Parameters\n        ----------\n        p : double\n            The prediction, p = w^T x\n        y : double\n            The true value (aka target)\n        Returns\n        -------\n        double\n            The derivative of the loss function with regards to `p`.\n        ',
          inputs: [
            {
              name: 'p',
              docstring: 'The prediction, p = w^T x',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'The true value (aka target)',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Returns',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: '-------',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'double',
              docstring:
                'The derivative of the loss function with regards to `p`.',
              param_type: [null],
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
      name: 'HuberRegressor',
      docstring:
        'Linear regression model that is robust to outliers.\n\n    The Huber Regressor optimizes the squared loss for the samples where\n    ``|(y - X\'w) / sigma| < epsilon`` and the absolute loss for the samples\n    where ``|(y - X\'w) / sigma| > epsilon``, where w and sigma are parameters\n    to be optimized. The parameter sigma makes sure that if y is scaled up\n    or down by a certain factor, one does not need to rescale epsilon to\n    achieve the same robustness. Note that this does not take into account\n    the fact that the different features of X may be of different scales.\n\n    This makes sure that the loss function is not heavily influenced by the\n    outliers while not completely ignoring their effect.\n\n    Read more in the :ref:`User Guide <huber_regression>`\n\n    .. versionadded:: 0.18\n\n    Parameters\n    ----------\n    epsilon : float, greater than 1.0, default 1.35\n        The parameter epsilon controls the number of samples that should be\n        classified as outliers. The smaller the epsilon, the more robust it is\n        to outliers.\n\n    max_iter : int, default 100\n        Maximum number of iterations that scipy.optimize.fmin_l_bfgs_b\n        should run for.\n\n    alpha : float, default 0.0001\n        Regularization parameter.\n\n    warm_start : bool, default False\n        This is useful if the stored attributes of a previously used model\n        has to be reused. If set to False, then the coefficients will\n        be rewritten for every call to fit.\n        See :term:`the Glossary <warm_start>`.\n\n    fit_intercept : bool, default True\n        Whether or not to fit the intercept. This can be set to False\n        if the data is already centered around the origin.\n\n    tol : float, default 1e-5\n        The iteration will stop when\n        ``max{|proj g_i | i = 1, ..., n}`` <= ``tol``\n        where pg_i is the i-th component of the projected gradient.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,)\n        Features got by optimizing the Huber loss.\n\n    intercept_ : float\n        Bias.\n\n    scale_ : float\n        The value by which ``|y - X\'w - c|`` is scaled down.\n\n    n_iter_ : int\n        Number of iterations that fmin_l_bfgs_b has run for.\n\n        .. versionchanged:: 0.20\n\n            In SciPy <= 1.0.0 the number of lbfgs iterations may exceed\n            ``max_iter``. ``n_iter_`` will now report at most ``max_iter``.\n\n    outliers_ : array, shape (n_samples,)\n        A boolean mask which is set to True where the samples are identified\n        as outliers.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.linear_model import HuberRegressor, LinearRegression\n    >>> from sklearn.datasets import make_regression\n    >>> rng = np.random.RandomState(0)\n    >>> X, y, coef = make_regression(\n    ...     n_samples=200, n_features=2, noise=4.0, coef=True, random_state=0)\n    >>> X[:4] = rng.uniform(10, 20, (4, 2))\n    >>> y[:4] = rng.uniform(10, 20, 4)\n    >>> huber = HuberRegressor().fit(X, y)\n    >>> huber.score(X, y) # doctest: +ELLIPSIS\n    -7.284608623514573\n    >>> huber.predict(X[:1,])\n    array([806.7200...])\n    >>> linear = LinearRegression().fit(X, y)\n    >>> print("True coefficients:", coef)\n    True coefficients: [20.4923...  34.1698...]\n    >>> print("Huber coefficients:", huber.coef_)\n    Huber coefficients: [17.7906... 31.0106...]\n    >>> print("Linear Regression coefficients:", linear.coef_)\n    Linear Regression coefficients: [-1.9221...  7.0226...]\n\n    References\n    ----------\n    .. [1] Peter J. Huber, Elvezio M. Ronchetti, Robust Statistics\n           Concomitant scale estimates, pg 172\n    .. [2] Art B. Owen (2006), A robust hybrid of lasso and ridge regression.\n           https://statweb.stanford.edu/~owen/reports/hhu.pdf\n    ',
      inputs: [
        {
          name: 'epsilon',
          docstring:
            'The parameter epsilon controls the number of samples that should be classified as outliers. The smaller the epsilon, the more robust it is to outliers.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '1.35'
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations that scipy.optimize.fmin_l_bfgs_b should run for.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '100'
        },
        {
          name: 'alpha',
          docstring: 'Regularization parameter.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '0.0001'
        },
        {
          name: 'warm_start',
          docstring:
            'This is useful if the stored attributes of a previously used model has to be reused. If set to False, then the coefficients will be rewritten for every call to fit. See :term:`the Glossary <warm_start>`.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether or not to fit the intercept. This can be set to False if the data is already centered around the origin.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'tol',
          docstring:
            'The iteration will stop when ``max{|proj g_i | i = 1, ..., n}`` <= ``tol`` where pg_i is the i-th component of the projected gradient.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '1e-5'
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'Features got by optimizing the Huber loss.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Bias.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'scale_',
          docstring: "The value by which ``|y - X'w - c|`` is scaled down.",
          param_type: ['float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'Number of iterations that fmin_l_bfgs_b has run for.  .. versionchanged:: 0.20      In SciPy <= 1.0.0 the number of lbfgs iterations may exceed     ``max_iter``. ``n_iter_`` will now report at most ``max_iter``.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'outliers_',
          docstring:
            'A boolean mask which is set to True where the samples are identified as outliers.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model according to the given training data.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vector, where n_samples in the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape (n_samples,)\n            Target vector relative to X.\n\n        sample_weight : array-like, shape (n_samples,)\n            Weight given to each sample.\n\n        Returns\n        -------\n        self : object\n        ',
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
              docstring: 'Target vector relative to X.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Weight given to each sample.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'Lars',
      docstring:
        "Least Angle Regression model a.k.a. LAR\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    ----------\n    fit_intercept : boolean\n        Whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    verbose : boolean or integer, optional\n        Sets the verbosity amount\n\n    normalize : boolean, optional, default True\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    n_nonzero_coefs : int, optional\n        Target number of non-zero coefficients. Use ``np.inf`` for no limit.\n\n    eps : float, optional\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems. Unlike the ``tol`` parameter in some iterative\n        optimization-based algorithms, this parameter does not control\n        the tolerance of the optimization.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    fit_path : boolean\n        If True the full path is stored in the ``coef_path_`` attribute.\n        If you compute the solution for a large problem or many targets,\n        setting ``fit_path`` to ``False`` will lead to a speedup, especially\n        with a small alpha.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0. Be aware that you might want to\n        remove fit_intercept which is set True by default.\n\n        .. deprecated:: 0.20\n\n            The option is broken and deprecated. It will be removed in v0.22.\n\n    Attributes\n    ----------\n    alphas_ : array, shape (n_alphas + 1,) | list of n_targets such arrays\n        Maximum of covariances (in absolute value) at each iteration.         ``n_alphas`` is either ``n_nonzero_coefs`` or ``n_features``,         whichever is smaller.\n\n    active_ : list, length = n_alphas | list of n_targets such lists\n        Indices of active variables at the end of the path.\n\n    coef_path_ : array, shape (n_features, n_alphas + 1)         | list of n_targets such arrays\n        The varying values of the coefficients along the path. It is not\n        present if the ``fit_path`` parameter is ``False``.\n\n    coef_ : array, shape (n_features,) or (n_targets, n_features)\n        Parameter vector (w in the formulation formula).\n\n    intercept_ : float | array, shape (n_targets,)\n        Independent term in decision function.\n\n    n_iter_ : array-like or int\n        The number of iterations taken by lars_path to find the\n        grid of alphas for each target.\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> reg = linear_model.Lars(n_nonzero_coefs=1)\n    >>> reg.fit([[-1, 1], [0, 0], [1, 1]], [-1.1111, 0, -1.1111])\n    ... # doctest: +ELLIPSIS, +NORMALIZE_WHITESPACE\n    Lars(copy_X=True, eps=..., fit_intercept=True, fit_path=True,\n       n_nonzero_coefs=1, normalize=True, positive=False, precompute='auto',\n       verbose=False)\n    >>> print(reg.coef_) # doctest: +ELLIPSIS, +NORMALIZE_WHITESPACE\n    [ 0. -1.11...]\n\n    See also\n    --------\n    lars_path, LarsCV\n    sklearn.decomposition.sparse_encode\n\n    ",
      inputs: [
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Sets the verbosity amount',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_nonzero_coefs',
          docstring:
            'Target number of non-zero coefficients. Use ``np.inf`` for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the ``tol`` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_path',
          docstring:
            'If True the full path is stored in the ``coef_path_`` attribute. If you compute the solution for a large problem or many targets, setting ``fit_path`` to ``False`` will lead to a speedup, especially with a small alpha.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'Restrict coefficients to be >= 0. Be aware that you might want to remove fit_intercept which is set True by default.  .. deprecated:: 0.20      The option is broken and deprecated. It will be removed in v0.22.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False)'
        }
      ],
      outputs: [
        {
          name: 'alphas_',
          docstring:
            'Maximum of covariances (in absolute value) at each iteration.         ``n_alphas`` is either ``n_nonzero_coefs`` or ``n_features``,         whichever is smaller.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'list'],
          returned: false
        },
        {
          name: 'active_',
          docstring: 'Indices of active variables at the end of the path.',
          param_type: ['LIST_VALID_OPTIONS', 'list'],
          returned: false
        },
        {
          name: 'coef_path_',
          docstring:
            'The varying values of the coefficients along the path. It is not present if the ``fit_path`` parameter is ``False``.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'list'],
          returned: false
        },
        {
          name: 'coef_',
          docstring: 'Parameter vector (w in the formulation formula).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Independent term in decision function.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The number of iterations taken by lars_path to find the grid of alphas for each target.',
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
          name: '_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring:
            'Auxiliary method to fit the model using X, y as training data',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_gram',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model using X, y as training data.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        y : array-like, shape (n_samples,) or (n_samples, n_targets)\n            Target values.\n\n        Xy : array-like, shape (n_samples,) or (n_samples, n_targets),                 optional\n            Xy = np.dot(X.T, y) that can be precomputed. It is useful\n            only when the Gram matrix is precomputed.\n\n        Returns\n        -------\n        self : object\n            returns an instance of self.\n        ',
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
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape:
                '(n_samples,) or (n_samples, n_targets),                 optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'LarsCV',
      docstring:
        "Cross-validated Least Angle Regression model.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    ----------\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    verbose : boolean or integer, optional\n        Sets the verbosity amount\n\n    max_iter : integer, optional\n        Maximum number of iterations to perform.\n\n    normalize : boolean, optional, default True\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram matrix\n        cannot be passed as argument since we will use only subsets of X.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    max_n_alphas : integer, optional\n        The maximum number of points on the path used to compute the\n        residuals in the cross-validation\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    eps : float, optional\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0. Be aware that you might want to\n        remove fit_intercept which is set True by default.\n\n        .. deprecated:: 0.20\n            The option is broken and deprecated. It will be removed in v0.22.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,)\n        parameter vector (w in the formulation formula)\n\n    intercept_ : float\n        independent term in decision function\n\n    coef_path_ : array, shape (n_features, n_alphas)\n        the varying values of the coefficients along the path\n\n    alpha_ : float\n        the estimated regularization parameter alpha\n\n    alphas_ : array, shape (n_alphas,)\n        the different values of alpha along the path\n\n    cv_alphas_ : array, shape (n_cv_alphas,)\n        all the values of alpha along the path for the different folds\n\n    mse_path_ : array, shape (n_folds, n_cv_alphas)\n        the mean square error on left-out for each fold along the path\n        (alpha values given by ``cv_alphas``)\n\n    n_iter_ : array-like or int\n        the number of iterations run by Lars with the optimal alpha.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import LarsCV\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(n_samples=200, noise=4.0, random_state=0)\n    >>> reg = LarsCV(cv=5).fit(X, y)\n    >>> reg.score(X, y) # doctest: +ELLIPSIS\n    0.9996...\n    >>> reg.alpha_\n    0.0254...\n    >>> reg.predict(X[:1,])\n    array([154.0842...])\n\n    See also\n    --------\n    lars_path, LassoLars, LassoLarsCV\n    ",
      inputs: [
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Sets the verbosity amount',
          param_type: ['int', 'bool'],
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
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_n_alphas',
          docstring:
            'The maximum number of points on the path used to compute the residuals in the cross-validation',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'Restrict coefficients to be >= 0. Be aware that you might want to remove fit_intercept which is set True by default.  .. deprecated:: 0.20     The option is broken and deprecated. It will be removed in v0.22.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False)'
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'parameter vector (w in the formulation formula)',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'coef_path_',
          docstring: 'the varying values of the coefficients along the path',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'the estimated regularization parameter alpha',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'alphas_',
          docstring: 'the different values of alpha along the path',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'cv_alphas_',
          docstring:
            'all the values of alpha along the path for the different folds',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'mse_path_',
          docstring:
            'the mean square error on left-out for each fold along the path (alpha values given by ``cv_alphas``)',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'the number of iterations run by Lars with the optimal alpha.',
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
          name: '_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring:
            'Auxiliary method to fit the model using X, y as training data',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_gram',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model using X, y as training data.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        y : array-like, shape (n_samples,)\n            Target values.\n\n        Returns\n        -------\n        self : object\n            returns an instance of self.\n        ',
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'Lasso',
      docstring:
        "Linear Model trained with L1 prior as regularizer (aka the Lasso)\n\n    The optimization objective for Lasso is::\n\n        (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    Technically the Lasso model is optimizing the same objective function as\n    the Elastic Net with ``l1_ratio=1.0`` (no L2 penalty).\n\n    Read more in the :ref:`User Guide <lasso>`.\n\n    Parameters\n    ----------\n    alpha : float, optional\n        Constant that multiplies the L1 term. Defaults to 1.0.\n        ``alpha = 0`` is equivalent to an ordinary least square, solved\n        by the :class:`LinearRegression` object. For numerical\n        reasons, using ``alpha = 0`` with the ``Lasso`` object is not advised.\n        Given this, you should use the :class:`LinearRegression` object.\n\n    fit_intercept : boolean, optional, default True\n        Whether to calculate the intercept for this model. If set\n        to False, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | array-like, default=False\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument. For sparse input\n        this option is always ``True`` to preserve sparsity.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    max_iter : int, optional\n        The maximum number of iterations\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    warm_start : bool, optional\n        When set to True, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n    positive : bool, optional\n        When set to ``True``, forces the coefficients to be positive.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'.\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,) | (n_targets, n_features)\n        parameter vector (w in the cost function formula)\n\n    sparse_coef_ : scipy.sparse matrix, shape (n_features, 1) |             (n_targets, n_features)\n        ``sparse_coef_`` is a readonly property derived from ``coef_``\n\n    intercept_ : float | array, shape (n_targets,)\n        independent term in decision function.\n\n    n_iter_ : int | array-like, shape (n_targets,)\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance.\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> clf = linear_model.Lasso(alpha=0.1)\n    >>> clf.fit([[0,0], [1, 1], [2, 2]], [0, 1, 2])\n    ... # doctest: +NORMALIZE_WHITESPACE\n    Lasso(alpha=0.1, copy_X=True, fit_intercept=True, max_iter=1000,\n       normalize=False, positive=False, precompute=False, random_state=None,\n       selection='cyclic', tol=0.0001, warm_start=False)\n    >>> print(clf.coef_)\n    [0.85 0.  ]\n    >>> print(clf.intercept_)  # doctest: +ELLIPSIS\n    0.15...\n\n    See also\n    --------\n    lars_path\n    lasso_path\n    LassoLars\n    LassoCV\n    LassoLarsCV\n    sklearn.decomposition.sparse_encode\n\n    Notes\n    -----\n    The algorithm used to fit the model is coordinate descent.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n    ",
      inputs: [
        {
          name: 'alpha',
          docstring:
            'Constant that multiplies the L1 term. Defaults to 1.0. ``alpha = 0`` is equivalent to an ordinary least square, solved by the :class:`LinearRegression` object. For numerical reasons, using ``alpha = 0`` with the ``Lasso`` object is not advised. Given this, you should use the :class:`LinearRegression` object.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to False, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument. For sparse input this option is always ``True`` to preserve sparsity.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'When set to ``True``, forces the coefficients to be positive.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'parameter vector (w in the cost function formula)',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          returned: false
        },
        {
          name: 'sparse_coef_',
          docstring:
            '``sparse_coef_`` is a readonly property derived from ``coef_``',
          param_type: ['LIST_VALID_OPTIONS'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'int'],
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
          name: '_decision_function',
          docstring:
            'Decision function of the linear model\n\n        Parameters\n        ----------\n        X : numpy array or scipy.sparse matrix of shape (n_samples, n_features)\n\n        Returns\n        -------\n        T : array, shape (n_samples,)\n            The predicted decision function\n        ',
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
              name: 'T',
              docstring: 'The predicted decision function',
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit model with coordinate descent.\n\n        Parameters\n        ----------\n        X : ndarray or scipy.sparse matrix, (n_samples, n_features)\n            Data\n\n        y : ndarray, shape (n_samples,) or (n_samples, n_targets)\n            Target. Will be cast to X's dtype if necessary\n\n        check_input : boolean, (default=True)\n            Allow to bypass several input checking.\n            Don't use this parameter unless you know what you do.\n\n        Notes\n        -----\n\n        Coordinate descent is an algorithm that considers each column of\n        data at a time hence it will automatically convert the X input\n        as a Fortran-contiguous numpy array if necessary.\n\n        To avoid memory re-allocation it is advised to allocate the\n        initial data in memory directly using that format.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Data',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: "Target. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'check_input',
              docstring:
                "Allow to bypass several input checking. Don't use this parameter unless you know what you do.",
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: '=True)'
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'l1_ratio',
              docstring:
                'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If None alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: 'check_input',
              docstring:
                'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'LassoCV',
      docstring:
        "Lasso linear model with iterative fitting along a regularization path.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    The best model is selected by cross-validation.\n\n    The optimization objective for Lasso is::\n\n        (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    Read more in the :ref:`User Guide <lasso>`.\n\n    Parameters\n    ----------\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``.\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : numpy array, optional\n        List of alphas where to compute the models.\n        If ``None`` alphas are set automatically\n\n    fit_intercept : boolean, default True\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    max_iter : int, optional\n        The maximum number of iterations\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    positive : bool, optional\n        If positive, restrict regression coefficients to be positive\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'.\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4.\n\n    Attributes\n    ----------\n    alpha_ : float\n        The amount of penalization chosen by cross validation\n\n    coef_ : array, shape (n_features,) | (n_targets, n_features)\n        parameter vector (w in the cost function formula)\n\n    intercept_ : float | array, shape (n_targets,)\n        independent term in decision function.\n\n    mse_path_ : array, shape (n_alphas, n_folds)\n        mean square error for the test set on each fold, varying alpha\n\n    alphas_ : numpy array, shape (n_alphas,)\n        The grid of alphas used for fitting\n\n    dual_gap_ : ndarray, shape ()\n        The dual gap at the end of the optimization for the optimal alpha\n        (``alpha_``).\n\n    n_iter_ : int\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance for the optimal alpha.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import LassoCV\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(noise=4, random_state=0)\n    >>> reg = LassoCV(cv=5, random_state=0).fit(X, y)\n    >>> reg.score(X, y) # doctest: +ELLIPSIS\n    0.9993...\n    >>> reg.predict(X[:1,])\n    array([-78.4951...])\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_model_selection.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_model_selection.py>`.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n\n    See also\n    --------\n    lars_path\n    lasso_path\n    LassoLars\n    Lasso\n    LassoLarsCV\n    ",
      inputs: [
        {
          name: 'eps',
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_alphas',
          docstring: 'Number of alphas along the regularization path',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alphas',
          docstring:
            'List of alphas where to compute the models. If ``None`` alphas are set automatically',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Amount of verbosity.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'If positive, restrict regression coefficients to be positive',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'alpha_',
          docstring: 'The amount of penalization chosen by cross validation',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'coef_',
          docstring: 'parameter vector (w in the cost function formula)',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'mse_path_',
          docstring:
            'mean square error for the test set on each fold, varying alpha',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alphas_',
          docstring: 'The grid of alphas used for fitting',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'dual_gap_',
          docstring:
            'The dual gap at the end of the optimization for the optimal alpha (``alpha_``).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with coordinate descent\n\n        Fit is on grid of alphas and best alpha estimated by cross-validation.\n\n        Parameters\n        ----------\n        X : {array-like}, shape (n_samples, n_features)\n            Training data. Pass directly as Fortran-contiguous data\n            to avoid unnecessary memory duplication. If y is mono-output,\n            X can be sparse.\n\n        y : array-like, shape (n_samples,) or (n_samples, n_targets)\n            Target values\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute Lasso path with coordinate descent\n\n    The Lasso optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^2_Fro + alpha * ||W||_21\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <lasso>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,), or (n_samples, n_outputs)\n        Target values\n\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If ``None`` alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n\n    Note that in certain cases, the Lars solver may be significantly\n    faster to implement this functionality. In particular, linear\n    interpolation can be used to retrieve model coefficients between the\n    values output by lars_path\n\n    Examples\n    --------\n\n    Comparing lasso_path and lars_path with interpolation:\n\n    >>> X = np.array([[1, 2, 3.1], [2.3, 5.4, 4.3]]).T\n    >>> y = np.array([1, 2, 3.1])\n    >>> # Use lasso_path to compute a coefficient path\n    >>> _, coef_path, _ = lasso_path(X, y, alphas=[5., 1., .5])\n    >>> print(coef_path)\n    [[0.         0.         0.46874778]\n     [0.2159048  0.4425765  0.23689075]]\n\n    >>> # Now use lars_path and 1D linear interpolation to compute the\n    >>> # same path\n    >>> from sklearn.linear_model import lars_path\n    >>> alphas, active, coef_path_lars = lars_path(X, y, method='lasso')\n    >>> from scipy import interpolate\n    >>> coef_path_continuous = interpolate.interp1d(alphas[::-1],\n    ...                                             coef_path_lars[:, ::-1])\n    >>> print(coef_path_continuous([5., 1., .5]))\n    [[0.         0.         0.46915237]\n     [0.2159048  0.4425765  0.23668876]]\n\n\n    See also\n    --------\n    lars_path\n    Lasso\n    LassoLars\n    LassoCV\n    LassoLarsCV\n    sklearn.decomposition.sparse_encode\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,), or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If ``None`` alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'LassoLars',
      docstring:
        "Lasso model fit with Least Angle Regression a.k.a. Lars\n\n    It is a Linear Model trained with an L1 prior as regularizer.\n\n    The optimization objective for Lasso is::\n\n    (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    ----------\n    alpha : float\n        Constant that multiplies the penalty term. Defaults to 1.0.\n        ``alpha = 0`` is equivalent to an ordinary least square, solved\n        by :class:`LinearRegression`. For numerical reasons, using\n        ``alpha = 0`` with the LassoLars object is not advised and you\n        should prefer the LinearRegression object.\n\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    verbose : boolean or integer, optional\n        Sets the verbosity amount\n\n    normalize : boolean, optional, default True\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    max_iter : integer, optional\n        Maximum number of iterations to perform.\n\n    eps : float, optional\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems. Unlike the ``tol`` parameter in some iterative\n        optimization-based algorithms, this parameter does not control\n        the tolerance of the optimization.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    fit_path : boolean\n        If ``True`` the full path is stored in the ``coef_path_`` attribute.\n        If you compute the solution for a large problem or many targets,\n        setting ``fit_path`` to ``False`` will lead to a speedup, especially\n        with a small alpha.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0. Be aware that you might want to\n        remove fit_intercept which is set True by default.\n        Under the positive restriction the model coefficients will not converge\n        to the ordinary-least-squares solution for small values of alpha.\n        Only coefficients up to the smallest alpha value (``alphas_[alphas_ >\n        0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso\n        algorithm are typically in congruence with the solution of the\n        coordinate descent Lasso estimator.\n\n    Attributes\n    ----------\n    alphas_ : array, shape (n_alphas + 1,) | list of n_targets such arrays\n        Maximum of covariances (in absolute value) at each iteration.         ``n_alphas`` is either ``max_iter``, ``n_features``, or the number of         nodes in the path with correlation greater than ``alpha``, whichever         is smaller.\n\n    active_ : list, length = n_alphas | list of n_targets such lists\n        Indices of active variables at the end of the path.\n\n    coef_path_ : array, shape (n_features, n_alphas + 1) or list\n        If a list is passed it's expected to be one of n_targets such arrays.\n        The varying values of the coefficients along the path. It is not\n        present if the ``fit_path`` parameter is ``False``.\n\n    coef_ : array, shape (n_features,) or (n_targets, n_features)\n        Parameter vector (w in the formulation formula).\n\n    intercept_ : float | array, shape (n_targets,)\n        Independent term in decision function.\n\n    n_iter_ : array-like or int.\n        The number of iterations taken by lars_path to find the\n        grid of alphas for each target.\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> reg = linear_model.LassoLars(alpha=0.01)\n    >>> reg.fit([[-1, 1], [0, 0], [1, 1]], [-1, 0, -1])\n    ... # doctest: +ELLIPSIS, +NORMALIZE_WHITESPACE\n    LassoLars(alpha=0.01, copy_X=True, eps=..., fit_intercept=True,\n         fit_path=True, max_iter=500, normalize=True, positive=False,\n         precompute='auto', verbose=False)\n    >>> print(reg.coef_) # doctest: +ELLIPSIS, +NORMALIZE_WHITESPACE\n    [ 0.         -0.963257...]\n\n    See also\n    --------\n    lars_path\n    lasso_path\n    Lasso\n    LassoCV\n    LassoLarsCV\n    LassoLarsIC\n    sklearn.decomposition.sparse_encode\n\n    ",
      inputs: [
        {
          name: 'alpha',
          docstring:
            'Constant that multiplies the penalty term. Defaults to 1.0. ``alpha = 0`` is equivalent to an ordinary least square, solved by :class:`LinearRegression`. For numerical reasons, using ``alpha = 0`` with the LassoLars object is not advised and you should prefer the LinearRegression object.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Sets the verbosity amount',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
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
          name: 'eps',
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the ``tol`` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_path',
          docstring:
            'If ``True`` the full path is stored in the ``coef_path_`` attribute. If you compute the solution for a large problem or many targets, setting ``fit_path`` to ``False`` will lead to a speedup, especially with a small alpha.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'Restrict coefficients to be >= 0. Be aware that you might want to remove fit_intercept which is set True by default. Under the positive restriction the model coefficients will not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False)'
        }
      ],
      outputs: [
        {
          name: 'alphas_',
          docstring:
            'Maximum of covariances (in absolute value) at each iteration.         ``n_alphas`` is either ``max_iter``, ``n_features``, or the number of         nodes in the path with correlation greater than ``alpha``, whichever         is smaller.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'list'],
          returned: false
        },
        {
          name: 'active_',
          docstring: 'Indices of active variables at the end of the path.',
          param_type: ['LIST_VALID_OPTIONS', 'list'],
          returned: false
        },
        {
          name: 'coef_path_',
          docstring:
            "If a list is passed it's expected to be one of n_targets such arrays. The varying values of the coefficients along the path. It is not present if the ``fit_path`` parameter is ``False``.",
          param_type: ['array', 'list'],
          returned: false
        },
        {
          name: 'coef_',
          docstring: 'Parameter vector (w in the formulation formula).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Independent term in decision function.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The number of iterations taken by lars_path to find the grid of alphas for each target.',
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
          name: '_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring:
            'Auxiliary method to fit the model using X, y as training data',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_gram',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model using X, y as training data.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        y : array-like, shape (n_samples,) or (n_samples, n_targets)\n            Target values.\n\n        Xy : array-like, shape (n_samples,) or (n_samples, n_targets),                 optional\n            Xy = np.dot(X.T, y) that can be precomputed. It is useful\n            only when the Gram matrix is precomputed.\n\n        Returns\n        -------\n        self : object\n            returns an instance of self.\n        ',
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
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape:
                '(n_samples,) or (n_samples, n_targets),                 optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'LassoLarsCV',
      docstring:
        "Cross-validated Lasso, using the LARS algorithm.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    The optimization objective for Lasso is::\n\n    (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    ----------\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    verbose : boolean or integer, optional\n        Sets the verbosity amount\n\n    max_iter : integer, optional\n        Maximum number of iterations to perform.\n\n    normalize : boolean, optional, default True\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | 'auto'\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram matrix\n        cannot be passed as argument since we will use only subsets of X.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    max_n_alphas : integer, optional\n        The maximum number of points on the path used to compute the\n        residuals in the cross-validation\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    eps : float, optional\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0. Be aware that you might want to\n        remove fit_intercept which is set True by default.\n        Under the positive restriction the model coefficients do not converge\n        to the ordinary-least-squares solution for small values of alpha.\n        Only coefficients up to the smallest alpha value (``alphas_[alphas_ >\n        0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso\n        algorithm are typically in congruence with the solution of the\n        coordinate descent Lasso estimator.\n        As a consequence using LassoLarsCV only makes sense for problems where\n        a sparse solution is expected and/or reached.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,)\n        parameter vector (w in the formulation formula)\n\n    intercept_ : float\n        independent term in decision function.\n\n    coef_path_ : array, shape (n_features, n_alphas)\n        the varying values of the coefficients along the path\n\n    alpha_ : float\n        the estimated regularization parameter alpha\n\n    alphas_ : array, shape (n_alphas,)\n        the different values of alpha along the path\n\n    cv_alphas_ : array, shape (n_cv_alphas,)\n        all the values of alpha along the path for the different folds\n\n    mse_path_ : array, shape (n_folds, n_cv_alphas)\n        the mean square error on left-out for each fold along the path\n        (alpha values given by ``cv_alphas``)\n\n    n_iter_ : array-like or int\n        the number of iterations run by Lars with the optimal alpha.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import LassoLarsCV\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(noise=4.0, random_state=0)\n    >>> reg = LassoLarsCV(cv=5).fit(X, y)\n    >>> reg.score(X, y) # doctest: +ELLIPSIS\n    0.9992...\n    >>> reg.alpha_\n    0.0484...\n    >>> reg.predict(X[:1,])\n    array([-77.8723...])\n\n    Notes\n    -----\n\n    The object solves the same problem as the LassoCV object. However,\n    unlike the LassoCV, it find the relevant alphas values by itself.\n    In general, because of this property, it will be more stable.\n    However, it is more fragile to heavily multicollinear datasets.\n\n    It is more efficient than the LassoCV if only a small number of\n    features are selected compared to the total number, for instance if\n    there are very few samples compared to the number of features.\n\n    See also\n    --------\n    lars_path, LassoLars, LarsCV, LassoCV\n    ",
      inputs: [
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Sets the verbosity amount',
          param_type: ['int', 'bool'],
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
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_n_alphas',
          docstring:
            'The maximum number of points on the path used to compute the residuals in the cross-validation',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'Restrict coefficients to be >= 0. Be aware that you might want to remove fit_intercept which is set True by default. Under the positive restriction the model coefficients do not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator. As a consequence using LassoLarsCV only makes sense for problems where a sparse solution is expected and/or reached.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False)'
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'parameter vector (w in the formulation formula)',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'coef_path_',
          docstring: 'the varying values of the coefficients along the path',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'the estimated regularization parameter alpha',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'alphas_',
          docstring: 'the different values of alpha along the path',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'cv_alphas_',
          docstring:
            'all the values of alpha along the path for the different folds',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'mse_path_',
          docstring:
            'the mean square error on left-out for each fold along the path (alpha values given by ``cv_alphas``)',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'the number of iterations run by Lars with the optimal alpha.',
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
          name: '_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring:
            'Auxiliary method to fit the model using X, y as training data',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_gram',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model using X, y as training data.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        y : array-like, shape (n_samples,)\n            Target values.\n\n        Returns\n        -------\n        self : object\n            returns an instance of self.\n        ',
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'LassoLarsIC',
      docstring:
        "Lasso model fit with Lars using BIC or AIC for model selection\n\n    The optimization objective for Lasso is::\n\n    (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    AIC is the Akaike information criterion and BIC is the Bayes\n    Information criterion. Such criteria are useful to select the value\n    of the regularization parameter by making a trade-off between the\n    goodness of fit and the complexity of the model. A good model should\n    explain well the data while being simple.\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    ----------\n    criterion : 'bic' | 'aic'\n        The type of criterion to use.\n\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    verbose : boolean or integer, optional\n        Sets the verbosity amount\n\n    normalize : boolean, optional, default True\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    max_iter : integer, optional\n        Maximum number of iterations to perform. Can be used for\n        early stopping.\n\n    eps : float, optional\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems. Unlike the ``tol`` parameter in some iterative\n        optimization-based algorithms, this parameter does not control\n        the tolerance of the optimization.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0. Be aware that you might want to\n        remove fit_intercept which is set True by default.\n        Under the positive restriction the model coefficients do not converge\n        to the ordinary-least-squares solution for small values of alpha.\n        Only coefficients up to the smallest alpha value (``alphas_[alphas_ >\n        0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso\n        algorithm are typically in congruence with the solution of the\n        coordinate descent Lasso estimator.\n        As a consequence using LassoLarsIC only makes sense for problems where\n        a sparse solution is expected and/or reached.\n\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,)\n        parameter vector (w in the formulation formula)\n\n    intercept_ : float\n        independent term in decision function.\n\n    alpha_ : float\n        the alpha parameter chosen by the information criterion\n\n    n_iter_ : int\n        number of iterations run by lars_path to find the grid of\n        alphas.\n\n    criterion_ : array, shape (n_alphas,)\n        The value of the information criteria ('aic', 'bic') across all\n        alphas. The alpha which has the smallest information criterion is\n        chosen. This value is larger by a factor of ``n_samples`` compared to\n        Eqns. 2.15 and 2.16 in (Zou et al, 2007).\n\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> reg = linear_model.LassoLarsIC(criterion='bic')\n    >>> reg.fit([[-1, 1], [0, 0], [1, 1]], [-1.1111, 0, -1.1111])\n    ... # doctest: +ELLIPSIS, +NORMALIZE_WHITESPACE\n    LassoLarsIC(copy_X=True, criterion='bic', eps=..., fit_intercept=True,\n          max_iter=500, normalize=True, positive=False, precompute='auto',\n          verbose=False)\n    >>> print(reg.coef_) # doctest: +ELLIPSIS, +NORMALIZE_WHITESPACE\n    [ 0.  -1.11...]\n\n    Notes\n    -----\n    The estimation of the number of degrees of freedom is given by:\n\n    \"On the degrees of freedom of the lasso\"\n    Hui Zou, Trevor Hastie, and Robert Tibshirani\n    Ann. Statist. Volume 35, Number 5 (2007), 2173-2192.\n\n    https://en.wikipedia.org/wiki/Akaike_information_criterion\n    https://en.wikipedia.org/wiki/Bayesian_information_criterion\n\n    See also\n    --------\n    lars_path, LassoLars, LassoLarsCV\n    ",
      inputs: [
        {
          name: 'criterion',
          docstring: 'The type of criterion to use.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Sets the verbosity amount',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations to perform. Can be used for early stopping.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the ``tol`` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'positive',
          docstring:
            'Restrict coefficients to be >= 0. Be aware that you might want to remove fit_intercept which is set True by default. Under the positive restriction the model coefficients do not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator. As a consequence using LassoLarsIC only makes sense for problems where a sparse solution is expected and/or reached.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False)'
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'parameter vector (w in the formulation formula)',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'the alpha parameter chosen by the information criterion',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by lars_path to find the grid of alphas.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'criterion_',
          docstring:
            "The value of the information criteria ('aic', 'bic') across all alphas. The alpha which has the smallest information criterion is chosen. This value is larger by a factor of ``n_samples`` compared to Eqns. 2.15 and 2.16 in (Zou et al, 2007).",
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
          name: '_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring:
            'Auxiliary method to fit the model using X, y as training data',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_gram',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit the model using X, y as training data.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            training data.\n\n        y : array-like, shape (n_samples,)\n            target values. Will be cast to X's dtype if necessary\n\n        copy_X : boolean, optional, default None\n            If provided, this parameter will override the choice\n            of copy_X made at instance creation.\n            If ``True``, X will be copied; else, it may be overwritten.\n\n        Returns\n        -------\n        self : object\n            returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'training data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                "target values. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If provided, this parameter will override the choice of copy_X made at instance creation. If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool', null],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'LinearRegression',
      docstring:
        '\n    Ordinary least squares Linear Regression.\n\n    Parameters\n    ----------\n    fit_intercept : boolean, optional, default True\n        whether to calculate the intercept for this model. If set\n        to False, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on\n        an estimator with ``normalize=False``.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    n_jobs : int or None, optional (default=None)\n        The number of jobs to use for the computation. This will only provide\n        speedup for n_targets > 1 and sufficient large problems.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features, ) or (n_targets, n_features)\n        Estimated coefficients for the linear regression problem.\n        If multiple targets are passed during the fit (y 2D), this\n        is a 2D array of shape (n_targets, n_features), while if only\n        one target is passed, this is a 1D array of length n_features.\n\n    intercept_ : array\n        Independent term in the linear model.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.linear_model import LinearRegression\n    >>> X = np.array([[1, 1], [1, 2], [2, 2], [2, 3]])\n    >>> # y = 1 * x_0 + 2 * x_1 + 3\n    >>> y = np.dot(X, np.array([1, 2])) + 3\n    >>> reg = LinearRegression().fit(X, y)\n    >>> reg.score(X, y)\n    1.0\n    >>> reg.coef_\n    array([1., 2.])\n    >>> reg.intercept_ # doctest: +ELLIPSIS\n    3.0000...\n    >>> reg.predict(np.array([[3, 5]]))\n    array([16.])\n\n    Notes\n    -----\n    From the implementation point of view, this is just plain Ordinary\n    Least Squares (scipy.linalg.lstsq) wrapped as a predictor object.\n\n    ',
      inputs: [
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to False, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of jobs to use for the computation. This will only provide speedup for n_targets > 1 and sufficient large problems. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Estimated coefficients for the linear regression problem. If multiple targets are passed during the fit (y 2D), this is a 2D array of shape (n_targets, n_features), while if only one target is passed, this is a 1D array of length n_features.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Independent term in the linear model.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "\n        Fit linear model.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape (n_samples, n_features)\n            Training data\n\n        y : array_like, shape (n_samples, n_targets)\n            Target values. Will be cast to X's dtype if necessary\n\n        sample_weight : numpy array of shape [n_samples]\n            Individual weights for each sample\n\n            .. versionadded:: 0.17\n               parameter *sample_weight* support to LinearRegression.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                "Target values. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples, n_targets)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Individual weights for each sample  .. versionadded:: 0.17    parameter *sample_weight* support to LinearRegression.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'Log',
      docstring:
        'Logistic regression loss for binary classification with y in {-1, 1}',
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring:
            'Initialize self.  See help(type(self)) for accurate signature.',
          inputs: [],
          outputs: []
        },
        {
          name: 'dloss',
          docstring:
            'Evaluate the derivative of the loss function with respect to\n        the prediction `p`.\n\n        Parameters\n        ----------\n        p : double\n            The prediction, p = w^T x\n        y : double\n            The true value (aka target)\n        Returns\n        -------\n        double\n            The derivative of the loss function with regards to `p`.\n        ',
          inputs: [
            {
              name: 'p',
              docstring: 'The prediction, p = w^T x',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'The true value (aka target)',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Returns',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: '-------',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'double',
              docstring:
                'The derivative of the loss function with regards to `p`.',
              param_type: [null],
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
      name: 'LogisticRegression',
      docstring:
        "Logistic Regression (aka logit, MaxEnt) classifier.\n\n    In the multiclass case, the training algorithm uses the one-vs-rest (OvR)\n    scheme if the 'multi_class' option is set to 'ovr', and uses the\n    cross-entropy loss if the 'multi_class' option is set to 'multinomial'.\n    (Currently the 'multinomial' option is supported only by the 'lbfgs',\n    'sag', 'saga' and 'newton-cg' solvers.)\n\n    This class implements regularized logistic regression using the\n    'liblinear' library, 'newton-cg', 'sag', 'saga' and 'lbfgs' solvers. **Note\n    that regularization is applied by default**. It can handle both dense\n    and sparse input. Use C-ordered arrays or CSR matrices containing 64-bit\n    floats for optimal performance; any other input format will be converted\n    (and copied).\n\n    The 'newton-cg', 'sag', and 'lbfgs' solvers support only L2 regularization\n    with primal formulation, or no regularization. The 'liblinear' solver\n    supports both L1 and L2 regularization, with a dual formulation only for\n    the L2 penalty. The Elastic-Net regularization is only supported by the\n    'saga' solver.\n\n    Read more in the :ref:`User Guide <logistic_regression>`.\n\n    Parameters\n    ----------\n    penalty : str, 'l1', 'l2', 'elasticnet' or 'none', optional (default='l2')\n        Used to specify the norm used in the penalization. The 'newton-cg',\n        'sag' and 'lbfgs' solvers support only l2 penalties. 'elasticnet' is\n        only supported by the 'saga' solver. If 'none' (not supported by the\n        liblinear solver), no regularization is applied.\n\n        .. versionadded:: 0.19\n           l1 penalty with SAGA solver (allowing 'multinomial' + L1)\n\n    dual : bool, optional (default=False)\n        Dual or primal formulation. Dual formulation is only implemented for\n        l2 penalty with liblinear solver. Prefer dual=False when\n        n_samples > n_features.\n\n    tol : float, optional (default=1e-4)\n        Tolerance for stopping criteria.\n\n    C : float, optional (default=1.0)\n        Inverse of regularization strength; must be a positive float.\n        Like in support vector machines, smaller values specify stronger\n        regularization.\n\n    fit_intercept : bool, optional (default=True)\n        Specifies if a constant (a.k.a. bias or intercept) should be\n        added to the decision function.\n\n    intercept_scaling : float, optional (default=1)\n        Useful only when the solver 'liblinear' is used\n        and self.fit_intercept is set to True. In this case, x becomes\n        [x, self.intercept_scaling],\n        i.e. a \"synthetic\" feature with constant value equal to\n        intercept_scaling is appended to the instance vector.\n        The intercept becomes ``intercept_scaling * synthetic_feature_weight``.\n\n        Note! the synthetic feature weight is subject to l1/l2 regularization\n        as all other features.\n        To lessen the effect of regularization on synthetic feature weight\n        (and therefore on the intercept) intercept_scaling has to be increased.\n\n    class_weight : dict or 'balanced', optional (default=None)\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one.\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``.\n\n        Note that these weights will be multiplied with sample_weight (passed\n        through the fit method) if sample_weight is specified.\n\n        .. versionadded:: 0.17\n           *class_weight='balanced'*\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`. Used when ``solver`` == 'sag' or\n        'liblinear'.\n\n    solver : str, {'newton-cg', 'lbfgs', 'liblinear', 'sag', 'saga'},              optional (default='liblinear').\n\n        Algorithm to use in the optimization problem.\n\n        - For small datasets, 'liblinear' is a good choice, whereas 'sag' and\n          'saga' are faster for large ones.\n        - For multiclass problems, only 'newton-cg', 'sag', 'saga' and 'lbfgs'\n          handle multinomial loss; 'liblinear' is limited to one-versus-rest\n          schemes.\n        - 'newton-cg', 'lbfgs', 'sag' and 'saga' handle L2 or no penalty\n        - 'liblinear' and 'saga' also handle L1 penalty\n        - 'saga' also supports 'elasticnet' penalty\n        - 'liblinear' does not handle no penalty\n\n        Note that 'sag' and 'saga' fast convergence is only guaranteed on\n        features with approximately the same scale. You can\n        preprocess the data with a scaler from sklearn.preprocessing.\n\n        .. versionadded:: 0.17\n           Stochastic Average Gradient descent solver.\n        .. versionadded:: 0.19\n           SAGA solver.\n        .. versionchanged:: 0.20\n            Default will change from 'liblinear' to 'lbfgs' in 0.22.\n\n    max_iter : int, optional (default=100)\n        Maximum number of iterations taken for the solvers to converge.\n\n    multi_class : str, {'ovr', 'multinomial', 'auto'}, optional (default='ovr')\n        If the option chosen is 'ovr', then a binary problem is fit for each\n        label. For 'multinomial' the loss minimised is the multinomial loss fit\n        across the entire probability distribution, *even when the data is\n        binary*. 'multinomial' is unavailable when solver='liblinear'.\n        'auto' selects 'ovr' if the data is binary, or if solver='liblinear',\n        and otherwise selects 'multinomial'.\n\n        .. versionadded:: 0.18\n           Stochastic Average Gradient descent solver for 'multinomial' case.\n        .. versionchanged:: 0.20\n            Default will change from 'ovr' to 'auto' in 0.22.\n\n    verbose : int, optional (default=0)\n        For the liblinear and lbfgs solvers set verbose to any positive\n        number for verbosity.\n\n    warm_start : bool, optional (default=False)\n        When set to True, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        Useless for liblinear solver. See :term:`the Glossary <warm_start>`.\n\n        .. versionadded:: 0.17\n           *warm_start* to support *lbfgs*, *newton-cg*, *sag*, *saga* solvers.\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPU cores used when parallelizing over classes if\n        multi_class='ovr'\". This parameter is ignored when the ``solver`` is\n        set to 'liblinear' regardless of whether 'multi_class' is specified or\n        not. ``None`` means 1 unless in a :obj:`joblib.parallel_backend`\n        context. ``-1`` means using all processors.\n        See :term:`Glossary <n_jobs>` for more details.\n\n    l1_ratio : float or None, optional (default=None)\n        The Elastic-Net mixing parameter, with ``0 <= l1_ratio <= 1``. Only\n        used if ``penalty='elasticnet'`. Setting ``l1_ratio=0`` is equivalent\n        to using ``penalty='l2'``, while setting ``l1_ratio=1`` is equivalent\n        to using ``penalty='l1'``. For ``0 < l1_ratio <1``, the penalty is a\n        combination of L1 and L2.\n\n    Attributes\n    ----------\n\n    classes_ : array, shape (n_classes, )\n        A list of class labels known to the classifier.\n\n    coef_ : array, shape (1, n_features) or (n_classes, n_features)\n        Coefficient of the features in the decision function.\n\n        `coef_` is of shape (1, n_features) when the given problem is binary.\n        In particular, when `multi_class='multinomial'`, `coef_` corresponds\n        to outcome 1 (True) and `-coef_` corresponds to outcome 0 (False).\n\n    intercept_ : array, shape (1,) or (n_classes,)\n        Intercept (a.k.a. bias) added to the decision function.\n\n        If `fit_intercept` is set to False, the intercept is set to zero.\n        `intercept_` is of shape (1,) when the given problem is binary.\n        In particular, when `multi_class='multinomial'`, `intercept_`\n        corresponds to outcome 1 (True) and `-intercept_` corresponds to\n        outcome 0 (False).\n\n    n_iter_ : array, shape (n_classes,) or (1, )\n        Actual number of iterations for all classes. If binary or multinomial,\n        it returns only 1 element. For liblinear solver, only the maximum\n        number of iteration across all classes is given.\n\n        .. versionchanged:: 0.20\n\n            In SciPy <= 1.0.0 the number of lbfgs iterations may exceed\n            ``max_iter``. ``n_iter_`` will now report at most ``max_iter``.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_iris\n    >>> from sklearn.linear_model import LogisticRegression\n    >>> X, y = load_iris(return_X_y=True)\n    >>> clf = LogisticRegression(random_state=0, solver='lbfgs',\n    ...                          multi_class='multinomial').fit(X, y)\n    >>> clf.predict(X[:2, :])\n    array([0, 0])\n    >>> clf.predict_proba(X[:2, :]) # doctest: +ELLIPSIS\n    array([[9.8...e-01, 1.8...e-02, 1.4...e-08],\n           [9.7...e-01, 2.8...e-02, ...e-08]])\n    >>> clf.score(X, y)\n    0.97...\n\n    See also\n    --------\n    SGDClassifier : incrementally trained logistic regression (when given\n        the parameter ``loss=\"log\"``).\n    LogisticRegressionCV : Logistic regression with built-in cross validation\n\n    Notes\n    -----\n    The underlying C implementation uses a random number generator to\n    select features when fitting the model. It is thus not uncommon,\n    to have slightly different results for the same input data. If\n    that happens, try with a smaller tol parameter.\n\n    Predict output may not match that of standalone liblinear in certain\n    cases. See :ref:`differences from liblinear <liblinear_differences>`\n    in the narrative documentation.\n\n    References\n    ----------\n\n    LIBLINEAR -- A Library for Large Linear Classification\n        https://www.csie.ntu.edu.tw/~cjlin/liblinear/\n\n    SAG -- Mark Schmidt, Nicolas Le Roux, and Francis Bach\n        Minimizing Finite Sums with the Stochastic Average Gradient\n        https://hal.inria.fr/hal-00860051/document\n\n    SAGA -- Defazio, A., Bach F. & Lacoste-Julien S. (2014).\n        SAGA: A Fast Incremental Gradient Method With Support\n        for Non-Strongly Convex Composite Objectives\n        https://arxiv.org/abs/1407.0202\n\n    Hsiang-Fu Yu, Fang-Lan Huang, Chih-Jen Lin (2011). Dual coordinate descent\n        methods for logistic regression and maximum entropy models.\n        Machine Learning 85(1-2):41-75.\n        https://www.csie.ntu.edu.tw/~cjlin/papers/maxent_dual.pdf\n    ",
      inputs: [
        {
          name: 'penalty',
          docstring:
            "Used to specify the norm used in the penalization. The 'newton-cg', 'sag' and 'lbfgs' solvers support only l2 penalties. 'elasticnet' is only supported by the 'saga' solver. If 'none' (not supported by the liblinear solver), no regularization is applied.  .. versionadded:: 0.19    l1 penalty with SAGA solver (allowing 'multinomial' + L1)",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dual',
          docstring:
            'Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=False when n_samples > n_features.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for stopping criteria.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'C',
          docstring:
            'Inverse of regularization strength; must be a positive float. Like in support vector machines, smaller values specify stronger regularization.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'intercept_scaling',
          docstring:
            'Useful only when the solver \'liblinear\' is used and self.fit_intercept is set to True. In this case, x becomes [x, self.intercept_scaling], i.e. a "synthetic" feature with constant value equal to intercept_scaling is appended to the instance vector. The intercept becomes ``intercept_scaling * synthetic_feature_weight``.  Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``.  Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.  .. versionadded:: 0.17    *class_weight=\'balanced\'*',
          param_type: ['dict', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``solver`` == 'sag' or 'liblinear'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'solver',
          docstring:
            "Algorithm to use in the optimization problem.  - For small datasets, 'liblinear' is a good choice, whereas 'sag' and   'saga' are faster for large ones. - For multiclass problems, only 'newton-cg', 'sag', 'saga' and 'lbfgs'   handle multinomial loss; 'liblinear' is limited to one-versus-rest   schemes. - 'newton-cg', 'lbfgs', 'sag' and 'saga' handle L2 or no penalty - 'liblinear' and 'saga' also handle L1 penalty - 'saga' also supports 'elasticnet' penalty - 'liblinear' does not handle no penalty  Note that 'sag' and 'saga' fast convergence is only guaranteed on features with approximately the same scale. You can preprocess the data with a scaler from sklearn.preprocessing.  .. versionadded:: 0.17    Stochastic Average Gradient descent solver. .. versionadded:: 0.19    SAGA solver. .. versionchanged:: 0.20     Default will change from 'liblinear' to 'lbfgs' in 0.22.",
          param_type: ['LIST_VALID_OPTIONS', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations taken for the solvers to converge.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'multi_class',
          docstring:
            "If the option chosen is 'ovr', then a binary problem is fit for each label. For 'multinomial' the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. 'multinomial' is unavailable when solver='liblinear'. 'auto' selects 'ovr' if the data is binary, or if solver='liblinear', and otherwise selects 'multinomial'.  .. versionadded:: 0.18    Stochastic Average Gradient descent solver for 'multinomial' case. .. versionchanged:: 0.20     Default will change from 'ovr' to 'auto' in 0.22.",
          param_type: ['LIST_VALID_OPTIONS', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'For the liblinear and lbfgs solvers set verbose to any positive number for verbosity.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. Useless for liblinear solver. See :term:`the Glossary <warm_start>`.  .. versionadded:: 0.17    *warm_start* to support *lbfgs*, *newton-cg*, *sag*, *saga* solvers.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            "Number of CPU cores used when parallelizing over classes if multi_class='ovr'\". This parameter is ignored when the ``solver`` is set to 'liblinear' regardless of whether 'multi_class' is specified or not. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'l1_ratio',
          docstring:
            "The Elastic-Net mixing parameter, with ``0 <= l1_ratio <= 1``. Only used if ``penalty='elasticnet'`. Setting ``l1_ratio=0`` is equivalent to using ``penalty='l2'``, while setting ``l1_ratio=1`` is equivalent to using ``penalty='l1'``. For ``0 < l1_ratio <1``, the penalty is a combination of L1 and L2.",
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'classes_',
          docstring: 'A list of class labels known to the classifier.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            "Coefficient of the features in the decision function.  `coef_` is of shape (1, n_features) when the given problem is binary. In particular, when `multi_class='multinomial'`, `coef_` corresponds to outcome 1 (True) and `-coef_` corresponds to outcome 0 (False).",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring:
            "Intercept (a.k.a. bias) added to the decision function.  If `fit_intercept` is set to False, the intercept is set to zero. `intercept_` is of shape (1,) when the given problem is binary. In particular, when `multi_class='multinomial'`, `intercept_` corresponds to outcome 1 (True) and `-intercept_` corresponds to outcome 0 (False).",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'Actual number of iterations for all classes. If binary or multinomial, it returns only 1 element. For liblinear solver, only the maximum number of iteration across all classes is given.  .. versionchanged:: 0.20      In SciPy <= 1.0.0 the number of lbfgs iterations may exceed     ``max_iter``. ``n_iter_`` will now report at most ``max_iter``.',
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
          name: '_predict_proba_lr',
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'densify',
          docstring:
            'Convert coefficient matrix to dense array format.\n\n        Converts the ``coef_`` member (back) to a numpy.ndarray. This is the\n        default format of ``coef_`` and is required for fitting, so calling\n        this method is only required on models that have previously been\n        sparsified; otherwise, it is a no-op.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training vector, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape (n_samples,)\n            Target vector relative to X.\n\n        sample_weight : array-like, shape (n_samples,) optional\n            Array of weights that are assigned to individual samples.\n            If not provided, then each sample is given unit weight.\n\n            .. versionadded:: 0.17\n               *sample_weight* support to LogisticRegression.\n\n        Returns\n        -------\n        self : object\n\n        Notes\n        -----\n        The SAGA solver supports both float64 and float32 bit arrays.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target vector relative to X.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.  .. versionadded:: 0.17    *sample_weight* support to LogisticRegression.',
              param_type: ['array'],
              expected_shape: '(n_samples,) optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict class labels for samples in X.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape [n_samples]\n            Predicted class label per sample.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Predicted class label per sample.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict_log_proba',
          docstring:
            'Log of probability estimates.\n\n        The returned estimates for all classes are ordered by the\n        label of classes.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n\n        Returns\n        -------\n        T : array-like, shape = [n_samples, n_classes]\n            Returns the log-probability of the sample for each class in the\n            model, where classes are ordered as they are in ``self.classes_``.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'T',
              docstring:
                'Returns the log-probability of the sample for each class in the model, where classes are ordered as they are in ``self.classes_``.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict_proba',
          docstring:
            'Probability estimates.\n\n        The returned estimates for all classes are ordered by the\n        label of classes.\n\n        For a multi_class problem, if multi_class is set to be "multinomial"\n        the softmax function is used to find the predicted probability of\n        each class.\n        Else use a one-vs-rest approach, i.e calculate the probability\n        of each class assuming it to be positive using the logistic function.\n        and normalize these values across all the classes.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n\n        Returns\n        -------\n        T : array-like, shape = [n_samples, n_classes]\n            Returns the probability of the sample for each class in the model,\n            where classes are ordered as they are in ``self.classes_``.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'T',
              docstring:
                'Returns the probability of the sample for each class in the model, where classes are ordered as they are in ``self.classes_``.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Mean accuracy of self.predict(X) wrt. y.',
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
          name: 'sparsify',
          docstring:
            'Convert coefficient matrix to sparse format.\n\n        Converts the ``coef_`` member to a scipy.sparse matrix, which for\n        L1-regularized models can be much more memory- and storage-efficient\n        than the usual numpy.ndarray representation.\n\n        The ``intercept_`` member is not converted.\n\n        Notes\n        -----\n        For non-sparse models, i.e. when there are not many zeros in ``coef_``,\n        this may actually *increase* memory usage, so use this method with\n        care. A rule of thumb is that the number of zero elements, which can\n        be computed with ``(coef_ == 0).sum()``, must be more than 50% for this\n        to provide significant benefits.\n\n        After calling this method, further fitting with the partial_fit\n        method (if any) will not work until you call densify.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'LogisticRegressionCV',
      docstring:
        "Logistic Regression CV (aka logit, MaxEnt) classifier.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    This class implements logistic regression using liblinear, newton-cg, sag\n    of lbfgs optimizer. The newton-cg, sag and lbfgs solvers support only L2\n    regularization with primal formulation. The liblinear solver supports both\n    L1 and L2 regularization, with a dual formulation only for the L2 penalty.\n    Elastic-Net penalty is only supported by the saga solver.\n\n    For the grid of `Cs` values and `l1_ratios` values, the best\n    hyperparameter is selected by the cross-validator `StratifiedKFold`, but\n    it can be changed using the `cv` parameter. The 'newton-cg', 'sag',\n    'saga' and 'lbfgs' solvers can warm-start the coefficients (see\n    :term:`Glossary<warm_start>`).\n\n    Read more in the :ref:`User Guide <logistic_regression>`.\n\n    Parameters\n    ----------\n    Cs : list of floats or int, optional (default=10)\n        Each of the values in Cs describes the inverse of regularization\n        strength. If Cs is as an int, then a grid of Cs values are chosen\n        in a logarithmic scale between 1e-4 and 1e4.\n        Like in support vector machines, smaller values specify stronger\n        regularization.\n\n    fit_intercept : bool, optional (default=True)\n        Specifies if a constant (a.k.a. bias or intercept) should be\n        added to the decision function.\n\n    cv : int or cross-validation generator, optional (default=None)\n        The default cross-validation generator used is Stratified K-Folds.\n        If an integer is provided, then it is the number of folds used.\n        See the module :mod:`sklearn.model_selection` module for the\n        list of possible cross-validation objects.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    dual : bool, optional (default=False)\n        Dual or primal formulation. Dual formulation is only implemented for\n        l2 penalty with liblinear solver. Prefer dual=False when\n        n_samples > n_features.\n\n    penalty : str, 'l1', 'l2', or 'elasticnet', optional (default='l2')\n        Used to specify the norm used in the penalization. The 'newton-cg',\n        'sag' and 'lbfgs' solvers support only l2 penalties. 'elasticnet' is\n        only supported by the 'saga' solver.\n\n    scoring : string, callable, or None, optional (default=None)\n        A string (see model evaluation documentation) or\n        a scorer callable object / function with signature\n        ``scorer(estimator, X, y)``. For a list of scoring functions\n        that can be used, look at :mod:`sklearn.metrics`. The\n        default scoring option used is 'accuracy'.\n\n    solver : str, {'newton-cg', 'lbfgs', 'liblinear', 'sag', 'saga'},              optional (default='lbfgs')\n\n        Algorithm to use in the optimization problem.\n\n        - For small datasets, 'liblinear' is a good choice, whereas 'sag' and\n          'saga' are faster for large ones.\n        - For multiclass problems, only 'newton-cg', 'sag', 'saga' and 'lbfgs'\n          handle multinomial loss; 'liblinear' is limited to one-versus-rest\n          schemes.\n        - 'newton-cg', 'lbfgs' and 'sag' only handle L2 penalty, whereas\n          'liblinear' and 'saga' handle L1 penalty.\n        - 'liblinear' might be slower in LogisticRegressionCV because it does\n          not handle warm-starting.\n\n        Note that 'sag' and 'saga' fast convergence is only guaranteed on\n        features with approximately the same scale. You can preprocess the data\n        with a scaler from sklearn.preprocessing.\n\n        .. versionadded:: 0.17\n           Stochastic Average Gradient descent solver.\n        .. versionadded:: 0.19\n           SAGA solver.\n\n    tol : float, optional (default=1e-4)\n        Tolerance for stopping criteria.\n\n    max_iter : int, optional (default=100)\n        Maximum number of iterations of the optimization algorithm.\n\n    class_weight : dict or 'balanced', optional (default=None)\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one.\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``.\n\n        Note that these weights will be multiplied with sample_weight (passed\n        through the fit method) if sample_weight is specified.\n\n        .. versionadded:: 0.17\n           class_weight == 'balanced'\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPU cores used during the cross-validation loop.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : int, optional (default=0)\n        For the 'liblinear', 'sag' and 'lbfgs' solvers set verbose to any\n        positive number for verbosity.\n\n    refit : bool, optional (default=True)\n        If set to True, the scores are averaged across all folds, and the\n        coefs and the C that corresponds to the best score is taken, and a\n        final refit is done using these parameters.\n        Otherwise the coefs, intercepts and C that correspond to the\n        best scores across folds are averaged.\n\n    intercept_scaling : float, optional (default=1)\n        Useful only when the solver 'liblinear' is used\n        and self.fit_intercept is set to True. In this case, x becomes\n        [x, self.intercept_scaling],\n        i.e. a \"synthetic\" feature with constant value equal to\n        intercept_scaling is appended to the instance vector.\n        The intercept becomes ``intercept_scaling * synthetic_feature_weight``.\n\n        Note! the synthetic feature weight is subject to l1/l2 regularization\n        as all other features.\n        To lessen the effect of regularization on synthetic feature weight\n        (and therefore on the intercept) intercept_scaling has to be increased.\n\n    multi_class : str, {'ovr', 'multinomial', 'auto'}, optional (default='ovr')\n        If the option chosen is 'ovr', then a binary problem is fit for each\n        label. For 'multinomial' the loss minimised is the multinomial loss fit\n        across the entire probability distribution, *even when the data is\n        binary*. 'multinomial' is unavailable when solver='liblinear'.\n        'auto' selects 'ovr' if the data is binary, or if solver='liblinear',\n        and otherwise selects 'multinomial'.\n\n        .. versionadded:: 0.18\n           Stochastic Average Gradient descent solver for 'multinomial' case.\n        .. versionchanged:: 0.20\n            Default will change from 'ovr' to 'auto' in 0.22.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    l1_ratios : list of float or None, optional (default=None)\n        The list of Elastic-Net mixing parameter, with ``0 <= l1_ratio <= 1``.\n        Only used if ``penalty='elasticnet'``. A value of 0 is equivalent to\n        using ``penalty='l2'``, while 1 is equivalent to using\n        ``penalty='l1'``. For ``0 < l1_ratio <1``, the penalty is a combination\n        of L1 and L2.\n\n    Attributes\n    ----------\n    classes_ : array, shape (n_classes, )\n        A list of class labels known to the classifier.\n\n    coef_ : array, shape (1, n_features) or (n_classes, n_features)\n        Coefficient of the features in the decision function.\n\n        `coef_` is of shape (1, n_features) when the given problem\n        is binary.\n\n    intercept_ : array, shape (1,) or (n_classes,)\n        Intercept (a.k.a. bias) added to the decision function.\n\n        If `fit_intercept` is set to False, the intercept is set to zero.\n        `intercept_` is of shape(1,) when the problem is binary.\n\n    Cs_ : array, shape (n_cs)\n        Array of C i.e. inverse of regularization parameter values used\n        for cross-validation.\n\n    l1_ratios_ : array, shape (n_l1_ratios)\n        Array of l1_ratios used for cross-validation. If no l1_ratio is used\n        (i.e. penalty is not 'elasticnet'), this is set to ``[None]``\n\n    coefs_paths_ : array, shape (n_folds, n_cs, n_features) or                    (n_folds, n_cs, n_features + 1)\n        dict with classes as the keys, and the path of coefficients obtained\n        during cross-validating across each fold and then across each Cs\n        after doing an OvR for the corresponding class as values.\n        If the 'multi_class' option is set to 'multinomial', then\n        the coefs_paths are the coefficients corresponding to each class.\n        Each dict value has shape ``(n_folds, n_cs, n_features)`` or\n        ``(n_folds, n_cs, n_features + 1)`` depending on whether the\n        intercept is fit or not. If ``penalty='elasticnet'``, the shape is\n        ``(n_folds, n_cs, n_l1_ratios_, n_features)`` or\n        ``(n_folds, n_cs, n_l1_ratios_, n_features + 1)``.\n\n    scores_ : dict\n        dict with classes as the keys, and the values as the\n        grid of scores obtained during cross-validating each fold, after doing\n        an OvR for the corresponding class. If the 'multi_class' option\n        given is 'multinomial' then the same scores are repeated across\n        all classes, since this is the multinomial class. Each dict value\n        has shape ``(n_folds, n_cs`` or ``(n_folds, n_cs, n_l1_ratios)`` if\n        ``penalty='elasticnet'``.\n\n    C_ : array, shape (n_classes,) or (n_classes - 1,)\n        Array of C that maps to the best scores across every class. If refit is\n        set to False, then for each class, the best C is the average of the\n        C's that correspond to the best scores for each fold.\n        `C_` is of shape(n_classes,) when the problem is binary.\n\n    l1_ratio_ : array, shape (n_classes,) or (n_classes - 1,)\n        Array of l1_ratio that maps to the best scores across every class. If\n        refit is set to False, then for each class, the best l1_ratio is the\n        average of the l1_ratio's that correspond to the best scores for each\n        fold.  `l1_ratio_` is of shape(n_classes,) when the problem is binary.\n\n    n_iter_ : array, shape (n_classes, n_folds, n_cs) or (1, n_folds, n_cs)\n        Actual number of iterations for all classes, folds and Cs.\n        In the binary or multinomial cases, the first dimension is equal to 1.\n        If ``penalty='elasticnet'``, the shape is ``(n_classes, n_folds,\n        n_cs, n_l1_ratios)`` or ``(1, n_folds, n_cs, n_l1_ratios)``.\n\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_iris\n    >>> from sklearn.linear_model import LogisticRegressionCV\n    >>> X, y = load_iris(return_X_y=True)\n    >>> clf = LogisticRegressionCV(cv=5, random_state=0,\n    ...                            multi_class='multinomial').fit(X, y)\n    >>> clf.predict(X[:2, :])\n    array([0, 0])\n    >>> clf.predict_proba(X[:2, :]).shape\n    (2, 3)\n    >>> clf.score(X, y) # doctest: +ELLIPSIS\n    0.98...\n\n    See also\n    --------\n    LogisticRegression\n\n    ",
      inputs: [
        {
          name: 'Cs',
          docstring:
            'Each of the values in Cs describes the inverse of regularization strength. If Cs is as an int, then a grid of Cs values are chosen in a logarithmic scale between 1e-4 and 1e4. Like in support vector machines, smaller values specify stronger regularization.',
          param_type: ['int', 'float', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'The default cross-validation generator used is Stratified K-Folds. If an integer is provided, then it is the number of folds used. See the module :mod:`sklearn.model_selection` module for the list of possible cross-validation objects.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dual',
          docstring:
            'Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=False when n_samples > n_features.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'penalty',
          docstring:
            "Used to specify the norm used in the penalization. The 'newton-cg', 'sag' and 'lbfgs' solvers support only l2 penalties. 'elasticnet' is only supported by the 'saga' solver.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            "A string (see model evaluation documentation) or a scorer callable object / function with signature ``scorer(estimator, X, y)``. For a list of scoring functions that can be used, look at :mod:`sklearn.metrics`. The default scoring option used is 'accuracy'.",
          param_type: ['str', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'solver',
          docstring:
            "Algorithm to use in the optimization problem.  - For small datasets, 'liblinear' is a good choice, whereas 'sag' and   'saga' are faster for large ones. - For multiclass problems, only 'newton-cg', 'sag', 'saga' and 'lbfgs'   handle multinomial loss; 'liblinear' is limited to one-versus-rest   schemes. - 'newton-cg', 'lbfgs' and 'sag' only handle L2 penalty, whereas   'liblinear' and 'saga' handle L1 penalty. - 'liblinear' might be slower in LogisticRegressionCV because it does   not handle warm-starting.  Note that 'sag' and 'saga' fast convergence is only guaranteed on features with approximately the same scale. You can preprocess the data with a scaler from sklearn.preprocessing.  .. versionadded:: 0.17    Stochastic Average Gradient descent solver. .. versionadded:: 0.19    SAGA solver.",
          param_type: ['LIST_VALID_OPTIONS', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for stopping criteria.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations of the optimization algorithm.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``.  Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.  .. versionadded:: 0.17    class_weight == \'balanced\'',
          param_type: ['dict', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPU cores used during the cross-validation loop. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            "For the 'liblinear', 'sag' and 'lbfgs' solvers set verbose to any positive number for verbosity.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'refit',
          docstring:
            'If set to True, the scores are averaged across all folds, and the coefs and the C that corresponds to the best score is taken, and a final refit is done using these parameters. Otherwise the coefs, intercepts and C that correspond to the best scores across folds are averaged.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'intercept_scaling',
          docstring:
            'Useful only when the solver \'liblinear\' is used and self.fit_intercept is set to True. In this case, x becomes [x, self.intercept_scaling], i.e. a "synthetic" feature with constant value equal to intercept_scaling is appended to the instance vector. The intercept becomes ``intercept_scaling * synthetic_feature_weight``.  Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'multi_class',
          docstring:
            "If the option chosen is 'ovr', then a binary problem is fit for each label. For 'multinomial' the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. 'multinomial' is unavailable when solver='liblinear'. 'auto' selects 'ovr' if the data is binary, or if solver='liblinear', and otherwise selects 'multinomial'.  .. versionadded:: 0.18    Stochastic Average Gradient descent solver for 'multinomial' case. .. versionchanged:: 0.20     Default will change from 'ovr' to 'auto' in 0.22.",
          param_type: ['LIST_VALID_OPTIONS', 'str'],
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
          name: 'l1_ratios',
          docstring:
            "The list of Elastic-Net mixing parameter, with ``0 <= l1_ratio <= 1``. Only used if ``penalty='elasticnet'``. A value of 0 is equivalent to using ``penalty='l2'``, while 1 is equivalent to using ``penalty='l1'``. For ``0 < l1_ratio <1``, the penalty is a combination of L1 and L2.",
          param_type: ['float', 'list', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'classes_',
          docstring: 'A list of class labels known to the classifier.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Coefficient of the features in the decision function.  `coef_` is of shape (1, n_features) when the given problem is binary.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring:
            'Intercept (a.k.a. bias) added to the decision function.  If `fit_intercept` is set to False, the intercept is set to zero. `intercept_` is of shape(1,) when the problem is binary.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'Cs_',
          docstring:
            'Array of C i.e. inverse of regularization parameter values used for cross-validation.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'l1_ratios_',
          docstring:
            "Array of l1_ratios used for cross-validation. If no l1_ratio is used (i.e. penalty is not 'elasticnet'), this is set to ``[None]``",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coefs_paths_',
          docstring:
            "dict with classes as the keys, and the path of coefficients obtained during cross-validating across each fold and then across each Cs after doing an OvR for the corresponding class as values. If the 'multi_class' option is set to 'multinomial', then the coefs_paths are the coefficients corresponding to each class. Each dict value has shape ``(n_folds, n_cs, n_features)`` or ``(n_folds, n_cs, n_features + 1)`` depending on whether the intercept is fit or not. If ``penalty='elasticnet'``, the shape is ``(n_folds, n_cs, n_l1_ratios_, n_features)`` or ``(n_folds, n_cs, n_l1_ratios_, n_features + 1)``.",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'scores_',
          docstring:
            "dict with classes as the keys, and the values as the grid of scores obtained during cross-validating each fold, after doing an OvR for the corresponding class. If the 'multi_class' option given is 'multinomial' then the same scores are repeated across all classes, since this is the multinomial class. Each dict value has shape ``(n_folds, n_cs`` or ``(n_folds, n_cs, n_l1_ratios)`` if ``penalty='elasticnet'``.",
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'C_',
          docstring:
            "Array of C that maps to the best scores across every class. If refit is set to False, then for each class, the best C is the average of the C's that correspond to the best scores for each fold. `C_` is of shape(n_classes,) when the problem is binary.",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'l1_ratio_',
          docstring:
            "Array of l1_ratio that maps to the best scores across every class. If refit is set to False, then for each class, the best l1_ratio is the average of the l1_ratio's that correspond to the best scores for each fold.  `l1_ratio_` is of shape(n_classes,) when the problem is binary.",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            "Actual number of iterations for all classes, folds and Cs. In the binary or multinomial cases, the first dimension is equal to 1. If ``penalty='elasticnet'``, the shape is ``(n_classes, n_folds, n_cs, n_l1_ratios)`` or ``(1, n_folds, n_cs, n_l1_ratios)``.",
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
          name: '_predict_proba_lr',
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'densify',
          docstring:
            'Convert coefficient matrix to dense array format.\n\n        Converts the ``coef_`` member (back) to a numpy.ndarray. This is the\n        default format of ``coef_`` and is required for fitting, so calling\n        this method is only required on models that have previously been\n        sparsified; otherwise, it is a no-op.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training vector, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape (n_samples,)\n            Target vector relative to X.\n\n        sample_weight : array-like, shape (n_samples,) optional\n            Array of weights that are assigned to individual samples.\n            If not provided, then each sample is given unit weight.\n\n        Returns\n        -------\n        self : object\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target vector relative to X.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.',
              param_type: ['array'],
              expected_shape: '(n_samples,) optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict class labels for samples in X.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape [n_samples]\n            Predicted class label per sample.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Predicted class label per sample.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict_log_proba',
          docstring:
            'Log of probability estimates.\n\n        The returned estimates for all classes are ordered by the\n        label of classes.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n\n        Returns\n        -------\n        T : array-like, shape = [n_samples, n_classes]\n            Returns the log-probability of the sample for each class in the\n            model, where classes are ordered as they are in ``self.classes_``.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'T',
              docstring:
                'Returns the log-probability of the sample for each class in the model, where classes are ordered as they are in ``self.classes_``.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict_proba',
          docstring:
            'Probability estimates.\n\n        The returned estimates for all classes are ordered by the\n        label of classes.\n\n        For a multi_class problem, if multi_class is set to be "multinomial"\n        the softmax function is used to find the predicted probability of\n        each class.\n        Else use a one-vs-rest approach, i.e calculate the probability\n        of each class assuming it to be positive using the logistic function.\n        and normalize these values across all the classes.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n\n        Returns\n        -------\n        T : array-like, shape = [n_samples, n_classes]\n            Returns the probability of the sample for each class in the model,\n            where classes are ordered as they are in ``self.classes_``.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'T',
              docstring:
                'Returns the probability of the sample for each class in the model, where classes are ordered as they are in ``self.classes_``.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the score using the `scoring` option on the given\n        test data and labels.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples,)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Score of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Score of self.predict(X) wrt. y.',
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
          name: 'sparsify',
          docstring:
            'Convert coefficient matrix to sparse format.\n\n        Converts the ``coef_`` member to a scipy.sparse matrix, which for\n        L1-regularized models can be much more memory- and storage-efficient\n        than the usual numpy.ndarray representation.\n\n        The ``intercept_`` member is not converted.\n\n        Notes\n        -----\n        For non-sparse models, i.e. when there are not many zeros in ``coef_``,\n        this may actually *increase* memory usage, so use this method with\n        care. A rule of thumb is that the number of zero elements, which can\n        be computed with ``(coef_ == 0).sum()``, must be more than 50% for this\n        to provide significant benefits.\n\n        After calling this method, further fitting with the partial_fit\n        method (if any) will not work until you call densify.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'ModifiedHuber',
      docstring:
        "Modified Huber loss for binary classification with y in {-1, 1}\n\n    This is equivalent to quadratically smoothed SVM with gamma = 2.\n\n    See T. Zhang 'Solving Large Scale Linear Prediction Problems Using\n    Stochastic Gradient Descent', ICML'04.\n    ",
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring:
            'Initialize self.  See help(type(self)) for accurate signature.',
          inputs: [],
          outputs: []
        },
        {
          name: 'dloss',
          docstring:
            'Evaluate the derivative of the loss function with respect to\n        the prediction `p`.\n\n        Parameters\n        ----------\n        p : double\n            The prediction, p = w^T x\n        y : double\n            The true value (aka target)\n        Returns\n        -------\n        double\n            The derivative of the loss function with regards to `p`.\n        ',
          inputs: [
            {
              name: 'p',
              docstring: 'The prediction, p = w^T x',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'The true value (aka target)',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Returns',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: '-------',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'double',
              docstring:
                'The derivative of the loss function with regards to `p`.',
              param_type: [null],
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
      name: 'MultiTaskElasticNet',
      docstring:
        "Multi-task ElasticNet model trained with L1/L2 mixed-norm as regularizer\n\n    The optimization objective for MultiTaskElasticNet is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||_Fro^2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = sum_i sqrt(sum_j w_ij ^ 2)\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <multi_task_elastic_net>`.\n\n    Parameters\n    ----------\n    alpha : float, optional\n        Constant that multiplies the L1/L2 term. Defaults to 1.0\n\n    l1_ratio : float\n        The ElasticNet mixing parameter, with 0 < l1_ratio <= 1.\n        For l1_ratio = 1 the penalty is an L1/L2 penalty. For l1_ratio = 0 it\n        is an L2 penalty.\n        For ``0 < l1_ratio < 1``, the penalty is a combination of L1/L2 and L2.\n\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    max_iter : int, optional\n        The maximum number of iterations\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    warm_start : bool, optional\n        When set to ``True``, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'.\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4.\n\n    Attributes\n    ----------\n    intercept_ : array, shape (n_tasks,)\n        Independent term in decision function.\n\n    coef_ : array, shape (n_tasks, n_features)\n        Parameter vector (W in the cost function formula). If a 1D y is\n        passed in at fit (non multi-task usage), ``coef_`` is then a 1D array.\n        Note that ``coef_`` stores the transpose of ``W``, ``W.T``.\n\n    n_iter_ : int\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance.\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> clf = linear_model.MultiTaskElasticNet(alpha=0.1)\n    >>> clf.fit([[0,0], [1, 1], [2, 2]], [[0, 0], [1, 1], [2, 2]])\n    ... #doctest: +NORMALIZE_WHITESPACE\n    MultiTaskElasticNet(alpha=0.1, copy_X=True, fit_intercept=True,\n            l1_ratio=0.5, max_iter=1000, normalize=False, random_state=None,\n            selection='cyclic', tol=0.0001, warm_start=False)\n    >>> print(clf.coef_)\n    [[0.45663524 0.45612256]\n     [0.45663524 0.45612256]]\n    >>> print(clf.intercept_)\n    [0.0872422 0.0872422]\n\n    See also\n    --------\n    MultiTaskElasticNet : Multi-task L1/L2 ElasticNet with built-in\n        cross-validation.\n    ElasticNet\n    MultiTaskLasso\n\n    Notes\n    -----\n    The algorithm used to fit the model is coordinate descent.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n    ",
      inputs: [
        {
          name: 'alpha',
          docstring: 'Constant that multiplies the L1/L2 term. Defaults to 1.0',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'l1_ratio',
          docstring:
            'The ElasticNet mixing parameter, with 0 < l1_ratio <= 1. For l1_ratio = 1 the penalty is an L1/L2 penalty. For l1_ratio = 0 it is an L2 penalty. For ``0 < l1_ratio < 1``, the penalty is a combination of L1/L2 and L2.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to ``True``, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'intercept_',
          docstring: 'Independent term in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Parameter vector (W in the cost function formula). If a 1D y is passed in at fit (non multi-task usage), ``coef_`` is then a 1D array. Note that ``coef_`` stores the transpose of ``W``, ``W.T``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance.',
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
          name: '_decision_function',
          docstring:
            'Decision function of the linear model\n\n        Parameters\n        ----------\n        X : numpy array or scipy.sparse matrix of shape (n_samples, n_features)\n\n        Returns\n        -------\n        T : array, shape (n_samples,)\n            The predicted decision function\n        ',
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
              name: 'T',
              docstring: 'The predicted decision function',
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit MultiTaskElasticNet model with coordinate descent\n\n        Parameters\n        ----------\n        X : ndarray, shape (n_samples, n_features)\n            Data\n        y : ndarray, shape (n_samples, n_tasks)\n            Target. Will be cast to X's dtype if necessary\n\n        Notes\n        -----\n\n        Coordinate descent is an algorithm that considers each column of\n        data at a time hence it will automatically convert the X input\n        as a Fortran-contiguous numpy array if necessary.\n\n        To avoid memory re-allocation it is advised to allocate the\n        initial data in memory directly using that format.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Data',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: "Target. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples, n_tasks)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'l1_ratio',
              docstring:
                'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If None alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: 'check_input',
              docstring:
                'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'MultiTaskElasticNetCV',
      docstring:
        "Multi-task L1/L2 ElasticNet with built-in cross-validation.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    The optimization objective for MultiTaskElasticNet is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <multi_task_elastic_net>`.\n\n    Parameters\n    ----------\n    l1_ratio : float or array of floats\n        The ElasticNet mixing parameter, with 0 < l1_ratio <= 1.\n        For l1_ratio = 1 the penalty is an L1/L2 penalty. For l1_ratio = 0 it\n        is an L2 penalty.\n        For ``0 < l1_ratio < 1``, the penalty is a combination of L1/L2 and L2.\n        This parameter can be a list, in which case the different\n        values are tested by cross-validation and the one giving the best\n        prediction score is used. Note that a good choice of list of\n        values for l1_ratio is often to put more values close to 1\n        (i.e. Lasso) and less close to 0 (i.e. Ridge), as in ``[.1, .5, .7,\n        .9, .95, .99, 1]``\n\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``.\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : array-like, optional\n        List of alphas where to compute the models.\n        If not provided, set automatically.\n\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    max_iter : int, optional\n        The maximum number of iterations\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation. Note that this is\n        used only if multiple values for l1_ratio are given.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'.\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4.\n\n    Attributes\n    ----------\n    intercept_ : array, shape (n_tasks,)\n        Independent term in decision function.\n\n    coef_ : array, shape (n_tasks, n_features)\n        Parameter vector (W in the cost function formula).\n        Note that ``coef_`` stores the transpose of ``W``, ``W.T``.\n\n    alpha_ : float\n        The amount of penalization chosen by cross validation\n\n    mse_path_ : array, shape (n_alphas, n_folds) or                 (n_l1_ratio, n_alphas, n_folds)\n        mean square error for the test set on each fold, varying alpha\n\n    alphas_ : numpy array, shape (n_alphas,) or (n_l1_ratio, n_alphas)\n        The grid of alphas used for fitting, for each l1_ratio\n\n    l1_ratio_ : float\n        best l1_ratio obtained by cross-validation.\n\n    n_iter_ : int\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance for the optimal alpha.\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> clf = linear_model.MultiTaskElasticNetCV(cv=3)\n    >>> clf.fit([[0,0], [1, 1], [2, 2]],\n    ...         [[0, 0], [1, 1], [2, 2]])\n    ... #doctest: +NORMALIZE_WHITESPACE\n    MultiTaskElasticNetCV(alphas=None, copy_X=True, cv=3, eps=0.001,\n           fit_intercept=True, l1_ratio=0.5, max_iter=1000, n_alphas=100,\n           n_jobs=None, normalize=False, random_state=None, selection='cyclic',\n           tol=0.0001, verbose=0)\n    >>> print(clf.coef_)\n    [[0.52875032 0.46958558]\n     [0.52875032 0.46958558]]\n    >>> print(clf.intercept_)\n    [0.00166409 0.00166409]\n\n    See also\n    --------\n    MultiTaskElasticNet\n    ElasticNetCV\n    MultiTaskLassoCV\n\n    Notes\n    -----\n    The algorithm used to fit the model is coordinate descent.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n    ",
      inputs: [
        {
          name: 'l1_ratio',
          docstring:
            'The ElasticNet mixing parameter, with 0 < l1_ratio <= 1. For l1_ratio = 1 the penalty is an L1/L2 penalty. For l1_ratio = 0 it is an L2 penalty. For ``0 < l1_ratio < 1``, the penalty is a combination of L1/L2 and L2. This parameter can be a list, in which case the different values are tested by cross-validation and the one giving the best prediction score is used. Note that a good choice of list of values for l1_ratio is often to put more values close to 1 (i.e. Lasso) and less close to 0 (i.e. Ridge), as in ``[.1, .5, .7, .9, .95, .99, 1]``',
          param_type: ['array', 'float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'eps',
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_alphas',
          docstring: 'Number of alphas along the regularization path',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alphas',
          docstring:
            'List of alphas where to compute the models. If not provided, set automatically.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Amount of verbosity.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. Note that this is used only if multiple values for l1_ratio are given. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'intercept_',
          docstring: 'Independent term in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Parameter vector (W in the cost function formula). Note that ``coef_`` stores the transpose of ``W``, ``W.T``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'The amount of penalization chosen by cross validation',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'mse_path_',
          docstring:
            'mean square error for the test set on each fold, varying alpha',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alphas_',
          docstring: 'The grid of alphas used for fitting, for each l1_ratio',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'l1_ratio_',
          docstring: 'best l1_ratio obtained by cross-validation.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with coordinate descent\n\n        Fit is on grid of alphas and best alpha estimated by cross-validation.\n\n        Parameters\n        ----------\n        X : {array-like}, shape (n_samples, n_features)\n            Training data. Pass directly as Fortran-contiguous data\n            to avoid unnecessary memory duplication. If y is mono-output,\n            X can be sparse.\n\n        y : array-like, shape (n_samples,) or (n_samples, n_targets)\n            Target values\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'l1_ratio',
              docstring:
                'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If None alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: 'check_input',
              docstring:
                'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'MultiTaskLasso',
      docstring:
        "Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.\n\n    The optimization objective for Lasso is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^2_Fro + alpha * ||W||_21\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <multi_task_lasso>`.\n\n    Parameters\n    ----------\n    alpha : float, optional\n        Constant that multiplies the L1/L2 term. Defaults to 1.0\n\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    max_iter : int, optional\n        The maximum number of iterations\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    warm_start : bool, optional\n        When set to ``True``, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'.\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_tasks, n_features)\n        Parameter vector (W in the cost function formula).\n        Note that ``coef_`` stores the transpose of ``W``, ``W.T``.\n\n    intercept_ : array, shape (n_tasks,)\n        independent term in decision function.\n\n    n_iter_ : int\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance.\n\n    Examples\n    --------\n    >>> from sklearn import linear_model\n    >>> clf = linear_model.MultiTaskLasso(alpha=0.1)\n    >>> clf.fit([[0,0], [1, 1], [2, 2]], [[0, 0], [1, 1], [2, 2]])\n    ... # doctest: +NORMALIZE_WHITESPACE\n    MultiTaskLasso(alpha=0.1, copy_X=True, fit_intercept=True, max_iter=1000,\n            normalize=False, random_state=None, selection='cyclic', tol=0.0001,\n            warm_start=False)\n    >>> print(clf.coef_)\n    [[0.89393398 0.        ]\n     [0.89393398 0.        ]]\n    >>> print(clf.intercept_)\n    [0.10606602 0.10606602]\n\n    See also\n    --------\n    MultiTaskLasso : Multi-task L1/L2 Lasso with built-in cross-validation\n    Lasso\n    MultiTaskElasticNet\n\n    Notes\n    -----\n    The algorithm used to fit the model is coordinate descent.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n    ",
      inputs: [
        {
          name: 'alpha',
          docstring: 'Constant that multiplies the L1/L2 term. Defaults to 1.0',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to ``True``, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Parameter vector (W in the cost function formula). Note that ``coef_`` stores the transpose of ``W``, ``W.T``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance.',
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
          name: '_decision_function',
          docstring:
            'Decision function of the linear model\n\n        Parameters\n        ----------\n        X : numpy array or scipy.sparse matrix of shape (n_samples, n_features)\n\n        Returns\n        -------\n        T : array, shape (n_samples,)\n            The predicted decision function\n        ',
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
              name: 'T',
              docstring: 'The predicted decision function',
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit MultiTaskElasticNet model with coordinate descent\n\n        Parameters\n        ----------\n        X : ndarray, shape (n_samples, n_features)\n            Data\n        y : ndarray, shape (n_samples, n_tasks)\n            Target. Will be cast to X's dtype if necessary\n\n        Notes\n        -----\n\n        Coordinate descent is an algorithm that considers each column of\n        data at a time hence it will automatically convert the X input\n        as a Fortran-contiguous numpy array if necessary.\n\n        To avoid memory re-allocation it is advised to allocate the\n        initial data in memory directly using that format.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Data',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: "Target. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples, n_tasks)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'l1_ratio',
              docstring:
                'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If None alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: 'check_input',
              docstring:
                'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'MultiTaskLassoCV',
      docstring:
        "Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    The optimization objective for MultiTaskLasso is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2 + alpha * ||W||_21\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <multi_task_lasso>`.\n\n    Parameters\n    ----------\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``.\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : array-like, optional\n        List of alphas where to compute the models.\n        If not provided, set automatically.\n\n    fit_intercept : boolean\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    max_iter : int, optional\n        The maximum number of iterations.\n\n    tol : float, optional\n        The tolerance for the optimization: if the updates are\n        smaller than ``tol``, the optimization code checks the\n        dual gap for optimality and continues until it is smaller\n        than ``tol``.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation. Note that this is\n        used only if multiple values for l1_ratio are given.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator that selects a random\n        feature to update.  If int, random_state is the seed used by the random\n        number generator; If RandomState instance, random_state is the random\n        number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`. Used when ``selection`` ==\n        'random'\n\n    selection : str, default 'cyclic'\n        If set to 'random', a random coefficient is updated every iteration\n        rather than looping over features sequentially by default. This\n        (setting to 'random') often leads to significantly faster convergence\n        especially when tol is higher than 1e-4.\n\n    Attributes\n    ----------\n    intercept_ : array, shape (n_tasks,)\n        Independent term in decision function.\n\n    coef_ : array, shape (n_tasks, n_features)\n        Parameter vector (W in the cost function formula).\n        Note that ``coef_`` stores the transpose of ``W``, ``W.T``.\n\n    alpha_ : float\n        The amount of penalization chosen by cross validation\n\n    mse_path_ : array, shape (n_alphas, n_folds)\n        mean square error for the test set on each fold, varying alpha\n\n    alphas_ : numpy array, shape (n_alphas,)\n        The grid of alphas used for fitting.\n\n    n_iter_ : int\n        number of iterations run by the coordinate descent solver to reach\n        the specified tolerance for the optimal alpha.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import MultiTaskLassoCV\n    >>> from sklearn.datasets import make_regression\n    >>> from sklearn.metrics import r2_score\n    >>> X, y = make_regression(n_targets=2, noise=4, random_state=0)\n    >>> reg = MultiTaskLassoCV(cv=5, random_state=0).fit(X, y)\n    >>> r2_score(y, reg.predict(X)) # doctest: +ELLIPSIS\n    0.9994...\n    >>> reg.alpha_\n    0.5713...\n    >>> reg.predict(X[:1,])\n    array([[153.7971...,  94.9015...]])\n\n    See also\n    --------\n    MultiTaskElasticNet\n    ElasticNetCV\n    MultiTaskElasticNetCV\n\n    Notes\n    -----\n    The algorithm used to fit the model is coordinate descent.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n    ",
      inputs: [
        {
          name: 'eps',
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_alphas',
          docstring: 'Number of alphas along the regularization path',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'alphas',
          docstring:
            'List of alphas where to compute the models. If not provided, set automatically.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
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
          name: 'tol',
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Amount of verbosity.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. Note that this is used only if multiple values for l1_ratio are given. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator that selects a random feature to update.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``selection`` == 'random'",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'selection',
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: "'cyclic'"
        }
      ],
      outputs: [
        {
          name: 'intercept_',
          docstring: 'Independent term in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Parameter vector (W in the cost function formula). Note that ``coef_`` stores the transpose of ``W``, ``W.T``.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'The amount of penalization chosen by cross validation',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'mse_path_',
          docstring:
            'mean square error for the test set on each fold, varying alpha',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'alphas_',
          docstring: 'The grid of alphas used for fitting.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with coordinate descent\n\n        Fit is on grid of alphas and best alpha estimated by cross-validation.\n\n        Parameters\n        ----------\n        X : {array-like}, shape (n_samples, n_features)\n            Training data. Pass directly as Fortran-contiguous data\n            to avoid unnecessary memory duplication. If y is mono-output,\n            X can be sparse.\n\n        y : array-like, shape (n_samples,) or (n_samples, n_targets)\n            Target values\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'path',
          docstring:
            "Compute Lasso path with coordinate descent\n\n    The Lasso optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^2_Fro + alpha * ||W||_21\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <lasso>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,), or (n_samples, n_outputs)\n        Target values\n\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If ``None`` alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n\n    Note that in certain cases, the Lars solver may be significantly\n    faster to implement this functionality. In particular, linear\n    interpolation can be used to retrieve model coefficients between the\n    values output by lars_path\n\n    Examples\n    --------\n\n    Comparing lasso_path and lars_path with interpolation:\n\n    >>> X = np.array([[1, 2, 3.1], [2.3, 5.4, 4.3]]).T\n    >>> y = np.array([1, 2, 3.1])\n    >>> # Use lasso_path to compute a coefficient path\n    >>> _, coef_path, _ = lasso_path(X, y, alphas=[5., 1., .5])\n    >>> print(coef_path)\n    [[0.         0.         0.46874778]\n     [0.2159048  0.4425765  0.23689075]]\n\n    >>> # Now use lars_path and 1D linear interpolation to compute the\n    >>> # same path\n    >>> from sklearn.linear_model import lars_path\n    >>> alphas, active, coef_path_lars = lars_path(X, y, method='lasso')\n    >>> from scipy import interpolate\n    >>> coef_path_continuous = interpolate.interp1d(alphas[::-1],\n    ...                                             coef_path_lars[:, ::-1])\n    >>> print(coef_path_continuous([5., 1., .5]))\n    [[0.         0.         0.46915237]\n     [0.2159048  0.4425765  0.23668876]]\n\n\n    See also\n    --------\n    lars_path\n    Lasso\n    LassoLars\n    LassoCV\n    LassoLarsCV\n    sklearn.decomposition.sparse_encode\n    ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,), or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'eps',
              docstring:
                'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
              param_type: ['float'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'n_alphas',
              docstring: 'Number of alphas along the regularization path',
              param_type: ['int'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'alphas',
              docstring:
                'List of alphas where to compute the models. If ``None`` alphas are set automatically',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'precompute',
              docstring:
                "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Xy',
              docstring:
                'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'copy_X',
              docstring:
                'If ``True``, X will be copied; else, it may be overwritten.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring: 'The initial values of the coefficients.',
              param_type: ['LIST_VALID_OPTIONS', 'array', null],
              expected_shape: '(n_features, ) | None',
              is_optional: false,
              default_value: null
            },
            {
              name: 'verbose',
              docstring: 'Amount of verbosity.',
              param_type: ['int', 'bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'return_n_iter',
              docstring: 'whether to return the number of iterations or not.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'positive',
              docstring:
                'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'False'
            },
            {
              name: '**params',
              docstring:
                'keyword arguments passed to the coordinate descent solver.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'alphas',
              docstring: 'The alphas along the path where models are computed.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'coefs',
              docstring: 'Coefficients along the path.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'dual_gaps',
              docstring:
                'The dual gaps at the end of the optimization for each alpha.',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'n_iters',
              docstring:
                'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'OrthogonalMatchingPursuit',
      docstring:
        "Orthogonal Matching Pursuit model (OMP)\n\n    Read more in the :ref:`User Guide <omp>`.\n\n    Parameters\n    ----------\n    n_nonzero_coefs : int, optional\n        Desired number of non-zero entries in the solution. If None (by\n        default) this value is set to 10% of n_features.\n\n    tol : float, optional\n        Maximum norm of the residual. If not None, overrides n_nonzero_coefs.\n\n    fit_intercept : boolean, optional\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default True\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    precompute : {True, False, 'auto'}, default 'auto'\n        Whether to use a precomputed Gram and Xy matrix to speed up\n        calculations. Improves performance when `n_targets` or `n_samples` is\n        very large. Note that if you already have such matrices, you can pass\n        them directly to the fit method.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,) or (n_targets, n_features)\n        parameter vector (w in the formula)\n\n    intercept_ : float or array, shape (n_targets,)\n        independent term in decision function.\n\n    n_iter_ : int or array-like\n        Number of active features across every target.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import OrthogonalMatchingPursuit\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(noise=4, random_state=0)\n    >>> reg = OrthogonalMatchingPursuit().fit(X, y)\n    >>> reg.score(X, y) # doctest: +ELLIPSIS\n    0.9991...\n    >>> reg.predict(X[:1,])\n    array([-78.3854...])\n\n    Notes\n    -----\n    Orthogonal matching pursuit was introduced in G. Mallat, Z. Zhang,\n    Matching pursuits with time-frequency dictionaries, IEEE Transactions on\n    Signal Processing, Vol. 41, No. 12. (December 1993), pp. 3397-3415.\n    (http://blanche.polytechnique.fr/~mallat/papiers/MallatPursuit93.pdf)\n\n    This implementation is based on Rubinstein, R., Zibulevsky, M. and Elad,\n    M., Efficient Implementation of the K-SVD Algorithm using Batch Orthogonal\n    Matching Pursuit Technical Report - CS Technion, April 2008.\n    https://www.cs.technion.ac.il/~ronrubin/Publications/KSVD-OMP-v2.pdf\n\n    See also\n    --------\n    orthogonal_mp\n    orthogonal_mp_gram\n    lars_path\n    Lars\n    LassoLars\n    decomposition.sparse_encode\n    OrthogonalMatchingPursuitCV\n    ",
      inputs: [
        {
          name: 'n_nonzero_coefs',
          docstring:
            'Desired number of non-zero entries in the solution. If None (by default) this value is set to 10% of n_features.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'Maximum norm of the residual. If not None, overrides n_nonzero_coefs.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'precompute',
          docstring:
            'Whether to use a precomputed Gram and Xy matrix to speed up calculations. Improves performance when `n_targets` or `n_samples` is very large. Note that if you already have such matrices, you can pass them directly to the fit method.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: "'auto'"
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'parameter vector (w in the formula)',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'independent term in decision function.',
          param_type: ['array', 'float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of active features across every target.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit the model using X, y as training data.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        y : array-like, shape (n_samples,) or (n_samples, n_targets)\n            Target values. Will be cast to X's dtype if necessary\n\n\n        Returns\n        -------\n        self : object\n            returns an instance of self.\n        ",
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
              docstring:
                "Target values. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'OrthogonalMatchingPursuitCV',
      docstring:
        'Cross-validated Orthogonal Matching Pursuit model (OMP).\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    Read more in the :ref:`User Guide <omp>`.\n\n    Parameters\n    ----------\n    copy : bool, optional\n        Whether the design matrix X must be copied by the algorithm. A false\n        value is only helpful if X is already Fortran-ordered, otherwise a\n        copy is made anyway.\n\n    fit_intercept : boolean, optional\n        whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default True\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    max_iter : integer, optional\n        Maximum numbers of iterations to perform, therefore maximum features\n        to include. 10% of ``n_features`` but at least 5 if available.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : boolean or integer, optional\n        Sets the verbosity amount\n\n    Attributes\n    ----------\n    intercept_ : float or array, shape (n_targets,)\n        Independent term in decision function.\n\n    coef_ : array, shape (n_features,) or (n_targets, n_features)\n        Parameter vector (w in the problem formulation).\n\n    n_nonzero_coefs_ : int\n        Estimated number of non-zero coefficients giving the best mean squared\n        error over the cross-validation folds.\n\n    n_iter_ : int or array-like\n        Number of active features across every target for the model refit with\n        the best hyperparameters got by cross-validating across all folds.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import OrthogonalMatchingPursuitCV\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(n_features=100, n_informative=10,\n    ...                        noise=4, random_state=0)\n    >>> reg = OrthogonalMatchingPursuitCV(cv=5).fit(X, y)\n    >>> reg.score(X, y) # doctest: +ELLIPSIS\n    0.9991...\n    >>> reg.n_nonzero_coefs_\n    10\n    >>> reg.predict(X[:1,])\n    array([-78.3854...])\n\n    See also\n    --------\n    orthogonal_mp\n    orthogonal_mp_gram\n    lars_path\n    Lars\n    LassoLars\n    OrthogonalMatchingPursuit\n    LarsCV\n    LassoLarsCV\n    decomposition.sparse_encode\n\n    ',
      inputs: [
        {
          name: 'copy',
          docstring:
            'Whether the design matrix X must be copied by the algorithm. A false value is only helpful if X is already Fortran-ordered, otherwise a copy is made anyway.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum numbers of iterations to perform, therefore maximum features to include. 10% of ``n_features`` but at least 5 if available.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Sets the verbosity amount',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'intercept_',
          docstring: 'Independent term in decision function.',
          param_type: ['array', 'float'],
          returned: false
        },
        {
          name: 'coef_',
          docstring: 'Parameter vector (w in the problem formulation).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_nonzero_coefs_',
          docstring:
            'Estimated number of non-zero coefficients giving the best mean squared error over the cross-validation folds.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'Number of active features across every target for the model refit with the best hyperparameters got by cross-validating across all folds.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit the model using X, y as training data.\n\n        Parameters\n        ----------\n        X : array-like, shape [n_samples, n_features]\n            Training data.\n\n        y : array-like, shape [n_samples]\n            Target values. Will be cast to X's dtype if necessary\n\n        Returns\n        -------\n        self : object\n            returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Training data.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                "Target values. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'PassiveAggressiveClassifier',
      docstring:
        'Passive Aggressive Classifier\n\n    Read more in the :ref:`User Guide <passive_aggressive>`.\n\n    Parameters\n    ----------\n\n    C : float\n        Maximum step size (regularization). Defaults to 1.0.\n\n    fit_intercept : bool, default=False\n        Whether the intercept should be estimated or not. If False, the\n        data is assumed to be already centered.\n\n    max_iter : int, optional (default=1000)\n        The maximum number of passes over the training data (aka epochs).\n        It only impacts the behavior in the ``fit`` method, and not the\n        `partial_fit`.\n\n        .. versionadded:: 0.19\n\n    tol : float or None, optional (default=1e-3)\n        The stopping criterion. If it is not None, the iterations will stop\n        when (loss > previous_loss - tol).\n\n        .. versionadded:: 0.19\n\n    early_stopping : bool, default=False\n        Whether to use early stopping to terminate training when validation.\n        score is not improving. If set to True, it will automatically set aside\n        a stratified fraction of training data as validation and terminate\n        training when validation score is not improving by at least tol for\n        n_iter_no_change consecutive epochs.\n\n        .. versionadded:: 0.20\n\n    validation_fraction : float, default=0.1\n        The proportion of training data to set aside as validation set for\n        early stopping. Must be between 0 and 1.\n        Only used if early_stopping is True.\n\n        .. versionadded:: 0.20\n\n    n_iter_no_change : int, default=5\n        Number of iterations with no improvement to wait before early stopping.\n\n        .. versionadded:: 0.20\n\n    shuffle : bool, default=True\n        Whether or not the training data should be shuffled after each epoch.\n\n    verbose : integer, optional\n        The verbosity level\n\n    loss : string, optional\n        The loss function to be used:\n        hinge: equivalent to PA-I in the reference paper.\n        squared_hinge: equivalent to PA-II in the reference paper.\n\n    n_jobs : int or None, optional (default=None)\n        The number of CPUs to use to do the OVA (One Versus All, for\n        multi-class problems) computation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    warm_start : bool, optional\n        When set to True, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n        Repeatedly calling fit or partial_fit when warm_start is True can\n        result in a different solution than when calling fit a single time\n        because of the way the data is shuffled.\n\n    class_weight : dict, {class_label: weight} or "balanced" or None, optional\n        Preset for the class_weight fit parameter.\n\n        Weights associated with classes. If not given, all classes\n        are supposed to have weight one.\n\n        The "balanced" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n        .. versionadded:: 0.17\n           parameter *class_weight* to automatically weight samples.\n\n    average : bool or int, optional\n        When set to True, computes the averaged SGD weights and stores the\n        result in the ``coef_`` attribute. If set to an int greater than 1,\n        averaging will begin once the total number of samples seen reaches\n        average. So average=10 will begin averaging after seeing 10 samples.\n\n        .. versionadded:: 0.19\n           parameter *average* to use weights averaging in SGD\n\n    Attributes\n    ----------\n    coef_ : array, shape = [1, n_features] if n_classes == 2 else [n_classes,            n_features]\n        Weights assigned to the features.\n\n    intercept_ : array, shape = [1] if n_classes == 2 else [n_classes]\n        Constants in decision function.\n\n    n_iter_ : int\n        The actual number of iterations to reach the stopping criterion.\n        For multiclass fits, it is the maximum over every binary fit.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import PassiveAggressiveClassifier\n    >>> from sklearn.datasets import make_classification\n\n    >>> X, y = make_classification(n_features=4, random_state=0)\n    >>> clf = PassiveAggressiveClassifier(max_iter=1000, random_state=0,\n    ... tol=1e-3)\n    >>> clf.fit(X, y)  # doctest: +NORMALIZE_WHITESPACE\n    PassiveAggressiveClassifier(C=1.0, average=False, class_weight=None,\n                  early_stopping=False, fit_intercept=True, loss=\'hinge\',\n                  max_iter=1000, n_iter_no_change=5, n_jobs=None,\n                  random_state=0, shuffle=True, tol=0.001,\n                  validation_fraction=0.1, verbose=0, warm_start=False)\n    >>> print(clf.coef_)\n    [[0.26642044 0.45070924 0.67251877 0.64185414]]\n    >>> print(clf.intercept_)\n    [1.84127814]\n    >>> print(clf.predict([[0, 0, 0, 0]]))\n    [1]\n\n    See also\n    --------\n\n    SGDClassifier\n    Perceptron\n\n    References\n    ----------\n    Online Passive-Aggressive Algorithms\n    <http://jmlr.csail.mit.edu/papers/volume7/crammer06a/crammer06a.pdf>\n    K. Crammer, O. Dekel, J. Keshat, S. Shalev-Shwartz, Y. Singer - JMLR (2006)\n\n    ',
      inputs: [
        {
          name: 'C',
          docstring: 'Maximum step size (regularization). Defaults to 1.0.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether the intercept should be estimated or not. If False, the data is assumed to be already centered.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'max_iter',
          docstring:
            'The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the ``fit`` method, and not the `partial_fit`.  .. versionadded:: 0.19',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The stopping criterion. If it is not None, the iterations will stop when (loss > previous_loss - tol).  .. versionadded:: 0.19',
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'early_stopping',
          docstring:
            'Whether to use early stopping to terminate training when validation. score is not improving. If set to True, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n_iter_no_change consecutive epochs.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'validation_fraction',
          docstring:
            'The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is True.  .. versionadded:: 0.20',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0.1'
        },
        {
          name: 'n_iter_no_change',
          docstring:
            'Number of iterations with no improvement to wait before early stopping.  .. versionadded:: 0.20',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=5'
        },
        {
          name: 'shuffle',
          docstring:
            'Whether or not the training data should be shuffled after each epoch.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'verbose',
          docstring: 'The verbosity level',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'loss',
          docstring:
            'The loss function to be used: hinge: equivalent to PA-I in the reference paper. squared_hinge: equivalent to PA-II in the reference paper.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.  Repeatedly calling fit or partial_fit when warm_start is True can result in a different solution than when calling fit a single time because of the way the data is shuffled.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Preset for the class_weight fit parameter.  Weights associated with classes. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``  .. versionadded:: 0.17    parameter *class_weight* to automatically weight samples.',
          param_type: ['LIST_VALID_OPTIONS', 'dict', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'average',
          docstring:
            'When set to True, computes the averaged SGD weights and stores the result in the ``coef_`` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So average=10 will begin averaging after seeing 10 samples.  .. versionadded:: 0.19    parameter *average* to use weights averaging in SGD',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'Weights assigned to the features.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.',
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
          name: '_allocate_parameter_mem',
          docstring: 'Allocate mem for parameters; initialize if provided.',
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
          name: '_fit_binary',
          docstring: 'Fit a binary classifier on X and y. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_multiclass',
          docstring:
            'Fit a multi-class classifier by combining binary classifiers\n\n        Each binary classifier predicts one class versus all others. This\n        strategy is called OvA (One versus All) or OvR (One versus Rest).\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_learning_rate_type',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_loss_function',
          docstring: 'Get concrete ``LossFunction`` object for str ``loss``. ',
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
          name: '_get_penalty_type',
          docstring: 'None',
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
          name: '_make_validation_score_cb',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_make_validation_split',
          docstring:
            'Split the dataset between training set and validation set.\n\n        Parameters\n        ----------\n        y : array, shape (n_samples, )\n            Target values.\n\n        Returns\n        -------\n        validation_mask : array, shape (n_samples, )\n            Equal to 1 on the validation set, 0 on the training set.\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples, )',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'validation_mask',
              docstring:
                'Equal to 1 on the validation set, 0 on the training set.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_partial_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_predict_proba_lr',
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_params',
          docstring: 'Validate input params. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_sample_weight',
          docstring: 'Set the sample weight array.',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'densify',
          docstring:
            'Convert coefficient matrix to dense array format.\n\n        Converts the ``coef_`` member (back) to a numpy.ndarray. This is the\n        default format of ``coef_`` and is required for fitting, so calling\n        this method is only required on models that have previously been\n        sparsified; otherwise, it is a no-op.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with Passive Aggressive algorithm.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            Training data\n\n        y : numpy array of shape [n_samples]\n            Target values\n\n        coef_init : array, shape = [n_classes,n_features]\n            The initial coefficients to warm-start the optimization.\n\n        intercept_init : array, shape = [n_classes]\n            The initial intercept to warm-start the optimization.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring:
                'The initial coefficients to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '= [n_classes,n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'intercept_init',
              docstring:
                'The initial intercept to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '= [n_classes]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
            "Fit linear model with Passive Aggressive algorithm.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            Subset of the training data\n\n        y : numpy array of shape [n_samples]\n            Subset of the target values\n\n        classes : array, shape = [n_classes]\n            Classes across all calls to partial_fit.\n            Can be obtained by via `np.unique(y_all)`, where y_all is the\n            target vector of the entire dataset.\n            This argument is required for the first call to partial_fit\n            and can be omitted in the subsequent calls.\n            Note that y doesn't need to contain all labels in `classes`.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Subset of the training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Subset of the target values',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'classes',
              docstring:
                "Classes across all calls to partial_fit. Can be obtained by via `np.unique(y_all)`, where y_all is the target vector of the entire dataset. This argument is required for the first call to partial_fit and can be omitted in the subsequent calls. Note that y doesn't need to contain all labels in `classes`.",
              param_type: ['array'],
              expected_shape: '= [n_classes]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Predict class labels for samples in X.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape [n_samples]\n            Predicted class label per sample.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Predicted class label per sample.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Mean accuracy of self.predict(X) wrt. y.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring: 'None',
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
          name: 'sparsify',
          docstring:
            'Convert coefficient matrix to sparse format.\n\n        Converts the ``coef_`` member to a scipy.sparse matrix, which for\n        L1-regularized models can be much more memory- and storage-efficient\n        than the usual numpy.ndarray representation.\n\n        The ``intercept_`` member is not converted.\n\n        Notes\n        -----\n        For non-sparse models, i.e. when there are not many zeros in ``coef_``,\n        this may actually *increase* memory usage, so use this method with\n        care. A rule of thumb is that the number of zero elements, which can\n        be computed with ``(coef_ == 0).sum()``, must be more than 50% for this\n        to provide significant benefits.\n\n        After calling this method, further fitting with the partial_fit\n        method (if any) will not work until you call densify.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'PassiveAggressiveRegressor',
      docstring:
        "Passive Aggressive Regressor\n\n    Read more in the :ref:`User Guide <passive_aggressive>`.\n\n    Parameters\n    ----------\n\n    C : float\n        Maximum step size (regularization). Defaults to 1.0.\n\n    fit_intercept : bool\n        Whether the intercept should be estimated or not. If False, the\n        data is assumed to be already centered. Defaults to True.\n\n    max_iter : int, optional (default=1000)\n        The maximum number of passes over the training data (aka epochs).\n        It only impacts the behavior in the ``fit`` method, and not the\n        `partial_fit`.\n\n        .. versionadded:: 0.19\n\n    tol : float or None, optional (default=1e-3)\n        The stopping criterion. If it is not None, the iterations will stop\n        when (loss > previous_loss - tol).\n\n        .. versionadded:: 0.19\n\n    early_stopping : bool, default=False\n        Whether to use early stopping to terminate training when validation.\n        score is not improving. If set to True, it will automatically set aside\n        a fraction of training data as validation and terminate\n        training when validation score is not improving by at least tol for\n        n_iter_no_change consecutive epochs.\n\n        .. versionadded:: 0.20\n\n    validation_fraction : float, default=0.1\n        The proportion of training data to set aside as validation set for\n        early stopping. Must be between 0 and 1.\n        Only used if early_stopping is True.\n\n        .. versionadded:: 0.20\n\n    n_iter_no_change : int, default=5\n        Number of iterations with no improvement to wait before early stopping.\n\n        .. versionadded:: 0.20\n\n    shuffle : bool, default=True\n        Whether or not the training data should be shuffled after each epoch.\n\n    verbose : integer, optional\n        The verbosity level\n\n    loss : string, optional\n        The loss function to be used:\n        epsilon_insensitive: equivalent to PA-I in the reference paper.\n        squared_epsilon_insensitive: equivalent to PA-II in the reference\n        paper.\n\n    epsilon : float\n        If the difference between the current prediction and the correct label\n        is below this threshold, the model is not updated.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    warm_start : bool, optional\n        When set to True, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n        Repeatedly calling fit or partial_fit when warm_start is True can\n        result in a different solution than when calling fit a single time\n        because of the way the data is shuffled.\n\n    average : bool or int, optional\n        When set to True, computes the averaged SGD weights and stores the\n        result in the ``coef_`` attribute. If set to an int greater than 1,\n        averaging will begin once the total number of samples seen reaches\n        average. So average=10 will begin averaging after seeing 10 samples.\n\n        .. versionadded:: 0.19\n           parameter *average* to use weights averaging in SGD\n\n    Attributes\n    ----------\n    coef_ : array, shape = [1, n_features] if n_classes == 2 else [n_classes,            n_features]\n        Weights assigned to the features.\n\n    intercept_ : array, shape = [1] if n_classes == 2 else [n_classes]\n        Constants in decision function.\n\n    n_iter_ : int\n        The actual number of iterations to reach the stopping criterion.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import PassiveAggressiveRegressor\n    >>> from sklearn.datasets import make_regression\n\n    >>> X, y = make_regression(n_features=4, random_state=0)\n    >>> regr = PassiveAggressiveRegressor(max_iter=100, random_state=0,\n    ... tol=1e-3)\n    >>> regr.fit(X, y)  # doctest: +NORMALIZE_WHITESPACE\n    PassiveAggressiveRegressor(C=1.0, average=False, early_stopping=False,\n                  epsilon=0.1, fit_intercept=True, loss='epsilon_insensitive',\n                  max_iter=100, n_iter_no_change=5, random_state=0,\n                  shuffle=True, tol=0.001, validation_fraction=0.1,\n                  verbose=0, warm_start=False)\n    >>> print(regr.coef_)\n    [20.48736655 34.18818427 67.59122734 87.94731329]\n    >>> print(regr.intercept_)\n    [-0.02306214]\n    >>> print(regr.predict([[0, 0, 0, 0]]))\n    [-0.02306214]\n\n    See also\n    --------\n\n    SGDRegressor\n\n    References\n    ----------\n    Online Passive-Aggressive Algorithms\n    <http://jmlr.csail.mit.edu/papers/volume7/crammer06a/crammer06a.pdf>\n    K. Crammer, O. Dekel, J. Keshat, S. Shalev-Shwartz, Y. Singer - JMLR (2006)\n\n    ",
      inputs: [
        {
          name: 'C',
          docstring: 'Maximum step size (regularization). Defaults to 1.0.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether the intercept should be estimated or not. If False, the data is assumed to be already centered. Defaults to True.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the ``fit`` method, and not the `partial_fit`.  .. versionadded:: 0.19',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The stopping criterion. If it is not None, the iterations will stop when (loss > previous_loss - tol).  .. versionadded:: 0.19',
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'early_stopping',
          docstring:
            'Whether to use early stopping to terminate training when validation. score is not improving. If set to True, it will automatically set aside a fraction of training data as validation and terminate training when validation score is not improving by at least tol for n_iter_no_change consecutive epochs.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'validation_fraction',
          docstring:
            'The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is True.  .. versionadded:: 0.20',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0.1'
        },
        {
          name: 'n_iter_no_change',
          docstring:
            'Number of iterations with no improvement to wait before early stopping.  .. versionadded:: 0.20',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=5'
        },
        {
          name: 'shuffle',
          docstring:
            'Whether or not the training data should be shuffled after each epoch.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'verbose',
          docstring: 'The verbosity level',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'loss',
          docstring:
            'The loss function to be used: epsilon_insensitive: equivalent to PA-I in the reference paper. squared_epsilon_insensitive: equivalent to PA-II in the reference paper.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'epsilon',
          docstring:
            'If the difference between the current prediction and the correct label is below this threshold, the model is not updated.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.  Repeatedly calling fit or partial_fit when warm_start is True can result in a different solution than when calling fit a single time because of the way the data is shuffled.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'average',
          docstring:
            'When set to True, computes the averaged SGD weights and stores the result in the ``coef_`` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So average=10 will begin averaging after seeing 10 samples.  .. versionadded:: 0.19    parameter *average* to use weights averaging in SGD',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'Weights assigned to the features.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The actual number of iterations to reach the stopping criterion.',
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
          name: '_allocate_parameter_mem',
          docstring: 'Allocate mem for parameters; initialize if provided.',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n\n        Returns\n        -------\n        array, shape (n_samples,)\n           Predicted target values per element in X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: 'Predicted target values per element in X.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_regressor',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_learning_rate_type',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_loss_function',
          docstring: 'Get concrete ``LossFunction`` object for str ``loss``. ',
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
          name: '_get_penalty_type',
          docstring: 'None',
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
          name: '_make_validation_score_cb',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_make_validation_split',
          docstring:
            'Split the dataset between training set and validation set.\n\n        Parameters\n        ----------\n        y : array, shape (n_samples, )\n            Target values.\n\n        Returns\n        -------\n        validation_mask : array, shape (n_samples, )\n            Equal to 1 on the validation set, 0 on the training set.\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples, )',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'validation_mask',
              docstring:
                'Equal to 1 on the validation set, 0 on the training set.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_partial_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_params',
          docstring: 'Validate input params. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_sample_weight',
          docstring: 'Set the sample weight array.',
          inputs: [],
          outputs: []
        },
        {
          name: 'densify',
          docstring:
            'Convert coefficient matrix to dense array format.\n\n        Converts the ``coef_`` member (back) to a numpy.ndarray. This is the\n        default format of ``coef_`` and is required for fitting, so calling\n        this method is only required on models that have previously been\n        sparsified; otherwise, it is a no-op.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with Passive Aggressive algorithm.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            Training data\n\n        y : numpy array of shape [n_samples]\n            Target values\n\n        coef_init : array, shape = [n_features]\n            The initial coefficients to warm-start the optimization.\n\n        intercept_init : array, shape = [1]\n            The initial intercept to warm-start the optimization.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring:
                'The initial coefficients to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '= [n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'intercept_init',
              docstring:
                'The initial intercept to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '= [1]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
            'Fit linear model with Passive Aggressive algorithm.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            Subset of training data\n\n        y : numpy array of shape [n_samples]\n            Subset of target values\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Subset of training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Subset of target values',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n\n        Returns\n        -------\n        array, shape (n_samples,)\n           Predicted target values per element in X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: 'Predicted target values per element in X.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring: 'None',
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
          name: 'sparsify',
          docstring:
            'Convert coefficient matrix to sparse format.\n\n        Converts the ``coef_`` member to a scipy.sparse matrix, which for\n        L1-regularized models can be much more memory- and storage-efficient\n        than the usual numpy.ndarray representation.\n\n        The ``intercept_`` member is not converted.\n\n        Notes\n        -----\n        For non-sparse models, i.e. when there are not many zeros in ``coef_``,\n        this may actually *increase* memory usage, so use this method with\n        care. A rule of thumb is that the number of zero elements, which can\n        be computed with ``(coef_ == 0).sum()``, must be more than 50% for this\n        to provide significant benefits.\n\n        After calling this method, further fitting with the partial_fit\n        method (if any) will not work until you call densify.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'Perceptron',
      docstring:
        'Perceptron\n\n    Read more in the :ref:`User Guide <perceptron>`.\n\n    Parameters\n    ----------\n\n    penalty : None, \'l2\' or \'l1\' or \'elasticnet\'\n        The penalty (aka regularization term) to be used. Defaults to None.\n\n    alpha : float\n        Constant that multiplies the regularization term if regularization is\n        used. Defaults to 0.0001\n\n    fit_intercept : bool\n        Whether the intercept should be estimated or not. If False, the\n        data is assumed to be already centered. Defaults to True.\n\n    max_iter : int, optional (default=1000)\n        The maximum number of passes over the training data (aka epochs).\n        It only impacts the behavior in the ``fit`` method, and not the\n        `partial_fit`.\n\n        .. versionadded:: 0.19\n\n    tol : float or None, optional (default=1e-3)\n        The stopping criterion. If it is not None, the iterations will stop\n        when (loss > previous_loss - tol).\n\n        .. versionadded:: 0.19\n\n    shuffle : bool, optional, default True\n        Whether or not the training data should be shuffled after each epoch.\n\n    verbose : integer, optional\n        The verbosity level\n\n    eta0 : double\n        Constant by which the updates are multiplied. Defaults to 1.\n\n    n_jobs : int or None, optional (default=None)\n        The number of CPUs to use to do the OVA (One Versus All, for\n        multi-class problems) computation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    early_stopping : bool, default=False\n        Whether to use early stopping to terminate training when validation.\n        score is not improving. If set to True, it will automatically set aside\n        a stratified fraction of training data as validation and terminate\n        training when validation score is not improving by at least tol for\n        n_iter_no_change consecutive epochs.\n\n        .. versionadded:: 0.20\n\n    validation_fraction : float, default=0.1\n        The proportion of training data to set aside as validation set for\n        early stopping. Must be between 0 and 1.\n        Only used if early_stopping is True.\n\n        .. versionadded:: 0.20\n\n    n_iter_no_change : int, default=5\n        Number of iterations with no improvement to wait before early stopping.\n\n        .. versionadded:: 0.20\n\n    class_weight : dict, {class_label: weight} or "balanced" or None, optional\n        Preset for the class_weight fit parameter.\n\n        Weights associated with classes. If not given, all classes\n        are supposed to have weight one.\n\n        The "balanced" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n    warm_start : bool, optional\n        When set to True, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution. See\n        :term:`the Glossary <warm_start>`.\n\n    Attributes\n    ----------\n    coef_ : array, shape = [1, n_features] if n_classes == 2 else [n_classes,            n_features]\n        Weights assigned to the features.\n\n    intercept_ : array, shape = [1] if n_classes == 2 else [n_classes]\n        Constants in decision function.\n\n    n_iter_ : int\n        The actual number of iterations to reach the stopping criterion.\n        For multiclass fits, it is the maximum over every binary fit.\n\n    Notes\n    -----\n\n    ``Perceptron`` is a classification algorithm which shares the same\n    underlying implementation with ``SGDClassifier``. In fact,\n    ``Perceptron()`` is equivalent to `SGDClassifier(loss="perceptron",\n    eta0=1, learning_rate="constant", penalty=None)`.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_digits\n    >>> from sklearn.linear_model import Perceptron\n    >>> X, y = load_digits(return_X_y=True)\n    >>> clf = Perceptron(tol=1e-3, random_state=0)\n    >>> clf.fit(X, y)  # doctest: +NORMALIZE_WHITESPACE\n    Perceptron(alpha=0.0001, class_weight=None, early_stopping=False, eta0=1.0,\n          fit_intercept=True, max_iter=1000, n_iter_no_change=5, n_jobs=None,\n          penalty=None, random_state=0, shuffle=True, tol=0.001,\n          validation_fraction=0.1, verbose=0, warm_start=False)\n    >>> clf.score(X, y) # doctest: +ELLIPSIS\n    0.939...\n\n    See also\n    --------\n\n    SGDClassifier\n\n    References\n    ----------\n\n    https://en.wikipedia.org/wiki/Perceptron and references therein.\n    ',
      inputs: [
        {
          name: 'penalty',
          docstring:
            'The penalty (aka regularization term) to be used. Defaults to None.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring:
            'Constant that multiplies the regularization term if regularization is used. Defaults to 0.0001',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether the intercept should be estimated or not. If False, the data is assumed to be already centered. Defaults to True.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the ``fit`` method, and not the `partial_fit`.  .. versionadded:: 0.19',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The stopping criterion. If it is not None, the iterations will stop when (loss > previous_loss - tol).  .. versionadded:: 0.19',
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shuffle',
          docstring:
            'Whether or not the training data should be shuffled after each epoch.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'The verbosity level',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eta0',
          docstring:
            'Constant by which the updates are multiplied. Defaults to 1.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'early_stopping',
          docstring:
            'Whether to use early stopping to terminate training when validation. score is not improving. If set to True, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n_iter_no_change consecutive epochs.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'validation_fraction',
          docstring:
            'The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is True.  .. versionadded:: 0.20',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0.1'
        },
        {
          name: 'n_iter_no_change',
          docstring:
            'Number of iterations with no improvement to wait before early stopping.  .. versionadded:: 0.20',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=5'
        },
        {
          name: 'class_weight',
          docstring:
            'Preset for the class_weight fit parameter.  Weights associated with classes. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``',
          param_type: ['LIST_VALID_OPTIONS', 'dict', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'Weights assigned to the features.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.',
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
          name: '_allocate_parameter_mem',
          docstring: 'Allocate mem for parameters; initialize if provided.',
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
          name: '_fit_binary',
          docstring: 'Fit a binary classifier on X and y. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_multiclass',
          docstring:
            'Fit a multi-class classifier by combining binary classifiers\n\n        Each binary classifier predicts one class versus all others. This\n        strategy is called OvA (One versus All) or OvR (One versus Rest).\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_learning_rate_type',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_loss_function',
          docstring: 'Get concrete ``LossFunction`` object for str ``loss``. ',
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
          name: '_get_penalty_type',
          docstring: 'None',
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
          name: '_make_validation_score_cb',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_make_validation_split',
          docstring:
            'Split the dataset between training set and validation set.\n\n        Parameters\n        ----------\n        y : array, shape (n_samples, )\n            Target values.\n\n        Returns\n        -------\n        validation_mask : array, shape (n_samples, )\n            Equal to 1 on the validation set, 0 on the training set.\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples, )',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'validation_mask',
              docstring:
                'Equal to 1 on the validation set, 0 on the training set.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_partial_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_predict_proba_lr',
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_params',
          docstring: 'Validate input params. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_sample_weight',
          docstring: 'Set the sample weight array.',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'densify',
          docstring:
            'Convert coefficient matrix to dense array format.\n\n        Converts the ``coef_`` member (back) to a numpy.ndarray. This is the\n        default format of ``coef_`` and is required for fitting, so calling\n        this method is only required on models that have previously been\n        sparsified; otherwise, it is a no-op.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with Stochastic Gradient Descent.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training data\n\n        y : numpy array, shape (n_samples,)\n            Target values\n\n        coef_init : array, shape (n_classes, n_features)\n            The initial coefficients to warm-start the optimization.\n\n        intercept_init : array, shape (n_classes,)\n            The initial intercept to warm-start the optimization.\n\n        sample_weight : array-like, shape (n_samples,), optional\n            Weights applied to individual samples.\n            If not provided, uniform weights are assumed. These weights will\n            be multiplied with class_weight (passed through the\n            constructor) if class_weight is specified\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring:
                'The initial coefficients to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '(n_classes, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'intercept_init',
              docstring:
                'The initial intercept to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '(n_classes,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class_weight (passed through the constructor) if class_weight is specified',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
            "Perform one epoch of stochastic gradient descent on given samples.\n\n        Internally, this method uses ``max_iter = 1``. Therefore, it is not\n        guaranteed that a minimum of the cost function is reached after calling\n        it once. Matters such as objective convergence and early stopping\n        should be handled by the user.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Subset of the training data\n\n        y : numpy array, shape (n_samples,)\n            Subset of the target values\n\n        classes : array, shape (n_classes,)\n            Classes across all calls to partial_fit.\n            Can be obtained by via `np.unique(y_all)`, where y_all is the\n            target vector of the entire dataset.\n            This argument is required for the first call to partial_fit\n            and can be omitted in the subsequent calls.\n            Note that y doesn't need to contain all labels in `classes`.\n\n        sample_weight : array-like, shape (n_samples,), optional\n            Weights applied to individual samples.\n            If not provided, uniform weights are assumed.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Subset of the training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Subset of the target values',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'classes',
              docstring:
                "Classes across all calls to partial_fit. Can be obtained by via `np.unique(y_all)`, where y_all is the target vector of the entire dataset. This argument is required for the first call to partial_fit and can be omitted in the subsequent calls. Note that y doesn't need to contain all labels in `classes`.",
              param_type: ['array'],
              expected_shape: '(n_classes,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Weights applied to individual samples. If not provided, uniform weights are assumed.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Predict class labels for samples in X.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape [n_samples]\n            Predicted class label per sample.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Predicted class label per sample.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Mean accuracy of self.predict(X) wrt. y.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring: 'None',
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
          name: 'sparsify',
          docstring:
            'Convert coefficient matrix to sparse format.\n\n        Converts the ``coef_`` member to a scipy.sparse matrix, which for\n        L1-regularized models can be much more memory- and storage-efficient\n        than the usual numpy.ndarray representation.\n\n        The ``intercept_`` member is not converted.\n\n        Notes\n        -----\n        For non-sparse models, i.e. when there are not many zeros in ``coef_``,\n        this may actually *increase* memory usage, so use this method with\n        care. A rule of thumb is that the number of zero elements, which can\n        be computed with ``(coef_ == 0).sum()``, must be more than 50% for this\n        to provide significant benefits.\n\n        After calling this method, further fitting with the partial_fit\n        method (if any) will not work until you call densify.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'RANSACRegressor',
      docstring:
        'RANSAC (RANdom SAmple Consensus) algorithm.\n\n    RANSAC is an iterative algorithm for the robust estimation of parameters\n    from a subset of inliers from the complete data set. More information can\n    be found in the general documentation of linear models.\n\n    A detailed description of the algorithm can be found in the documentation\n    of the ``linear_model`` sub-package.\n\n    Read more in the :ref:`User Guide <ransac_regression>`.\n\n    Parameters\n    ----------\n    base_estimator : object, optional\n        Base estimator object which implements the following methods:\n\n         * `fit(X, y)`: Fit model to given training data and target values.\n         * `score(X, y)`: Returns the mean accuracy on the given test data,\n           which is used for the stop criterion defined by `stop_score`.\n           Additionally, the score is used to decide which of two equally\n           large consensus sets is chosen as the better one.\n         * `predict(X)`: Returns predicted values using the linear model,\n           which is used to compute residual error using loss function.\n\n        If `base_estimator` is None, then\n        ``base_estimator=sklearn.linear_model.LinearRegression()`` is used for\n        target values of dtype float.\n\n        Note that the current implementation only supports regression\n        estimators.\n\n    min_samples : int (>= 1) or float ([0, 1]), optional\n        Minimum number of samples chosen randomly from original data. Treated\n        as an absolute number of samples for `min_samples >= 1`, treated as a\n        relative number `ceil(min_samples * X.shape[0]`) for\n        `min_samples < 1`. This is typically chosen as the minimal number of\n        samples necessary to estimate the given `base_estimator`. By default a\n        ``sklearn.linear_model.LinearRegression()`` estimator is assumed and\n        `min_samples` is chosen as ``X.shape[1] + 1``.\n\n    residual_threshold : float, optional\n        Maximum residual for a data sample to be classified as an inlier.\n        By default the threshold is chosen as the MAD (median absolute\n        deviation) of the target values `y`.\n\n    is_data_valid : callable, optional\n        This function is called with the randomly selected data before the\n        model is fitted to it: `is_data_valid(X, y)`. If its return value is\n        False the current randomly chosen sub-sample is skipped.\n\n    is_model_valid : callable, optional\n        This function is called with the estimated model and the randomly\n        selected data: `is_model_valid(model, X, y)`. If its return value is\n        False the current randomly chosen sub-sample is skipped.\n        Rejecting samples with this function is computationally costlier than\n        with `is_data_valid`. `is_model_valid` should therefore only be used if\n        the estimated model is needed for making the rejection decision.\n\n    max_trials : int, optional\n        Maximum number of iterations for random sample selection.\n\n    max_skips : int, optional\n        Maximum number of iterations that can be skipped due to finding zero\n        inliers or invalid data defined by ``is_data_valid`` or invalid models\n        defined by ``is_model_valid``.\n\n        .. versionadded:: 0.19\n\n    stop_n_inliers : int, optional\n        Stop iteration if at least this number of inliers are found.\n\n    stop_score : float, optional\n        Stop iteration if score is greater equal than this threshold.\n\n    stop_probability : float in range [0, 1], optional\n        RANSAC iteration stops if at least one outlier-free set of the training\n        data is sampled in RANSAC. This requires to generate at least N\n        samples (iterations)::\n\n            N >= log(1 - probability) / log(1 - e**m)\n\n        where the probability (confidence) is typically set to high value such\n        as 0.99 (the default) and e is the current fraction of inliers w.r.t.\n        the total number of samples.\n\n    loss : string, callable, optional, default "absolute_loss"\n        String inputs, "absolute_loss" and "squared_loss" are supported which\n        find the absolute loss and squared loss per sample\n        respectively.\n\n        If ``loss`` is a callable, then it should be a function that takes\n        two arrays as inputs, the true and predicted value and returns a 1-D\n        array with the i-th value of the array corresponding to the loss\n        on ``X[i]``.\n\n        If the loss on a sample is greater than the ``residual_threshold``,\n        then this sample is classified as an outlier.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The generator used to initialize the centers.  If int, random_state is\n        the seed used by the random number generator; If RandomState instance,\n        random_state is the random number generator; If None, the random number\n        generator is the RandomState instance used by `np.random`.\n\n    Attributes\n    ----------\n    estimator_ : object\n        Best fitted model (copy of the `base_estimator` object).\n\n    n_trials_ : int\n        Number of random selection trials until one of the stop criteria is\n        met. It is always ``<= max_trials``.\n\n    inlier_mask_ : bool array of shape [n_samples]\n        Boolean mask of inliers classified as ``True``.\n\n    n_skips_no_inliers_ : int\n        Number of iterations skipped due to finding zero inliers.\n\n        .. versionadded:: 0.19\n\n    n_skips_invalid_data_ : int\n        Number of iterations skipped due to invalid data defined by\n        ``is_data_valid``.\n\n        .. versionadded:: 0.19\n\n    n_skips_invalid_model_ : int\n        Number of iterations skipped due to an invalid model defined by\n        ``is_model_valid``.\n\n        .. versionadded:: 0.19\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import RANSACRegressor\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(\n    ...     n_samples=200, n_features=2, noise=4.0, random_state=0)\n    >>> reg = RANSACRegressor(random_state=0).fit(X, y)\n    >>> reg.score(X, y) # doctest: +ELLIPSIS\n    0.9885...\n    >>> reg.predict(X[:1,])\n    array([-31.9417...])\n\n    References\n    ----------\n    .. [1] https://en.wikipedia.org/wiki/RANSAC\n    .. [2] https://www.sri.com/sites/default/files/publications/ransac-publication.pdf\n    .. [3] http://www.bmva.org/bmvc/2009/Papers/Paper355/Paper355.pdf\n    ',
      inputs: [
        {
          name: 'base_estimator',
          docstring:
            'Base estimator object which implements the following methods:   * `fit(X, y)`: Fit model to given training data and target values.  * `score(X, y)`: Returns the mean accuracy on the given test data,    which is used for the stop criterion defined by `stop_score`.    Additionally, the score is used to decide which of two equally    large consensus sets is chosen as the better one.  * `predict(X)`: Returns predicted values using the linear model,    which is used to compute residual error using loss function.  If `base_estimator` is None, then ``base_estimator=sklearn.linear_model.LinearRegression()`` is used for target values of dtype float.  Note that the current implementation only supports regression estimators.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'min_samples',
          docstring:
            'Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min_samples >= 1`, treated as a relative number `ceil(min_samples * X.shape[0]`) for `min_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `base_estimator`. By default a ``sklearn.linear_model.LinearRegression()`` estimator is assumed and `min_samples` is chosen as ``X.shape[1] + 1``.',
          param_type: ['int', 'float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'residual_threshold',
          docstring:
            'Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'is_data_valid',
          docstring:
            'This function is called with the randomly selected data before the model is fitted to it: `is_data_valid(X, y)`. If its return value is False the current randomly chosen sub-sample is skipped.',
          param_type: ['callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'is_model_valid',
          docstring:
            'This function is called with the estimated model and the randomly selected data: `is_model_valid(model, X, y)`. If its return value is False the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is_data_valid`. `is_model_valid` should therefore only be used if the estimated model is needed for making the rejection decision.',
          param_type: ['callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_trials',
          docstring:
            'Maximum number of iterations for random sample selection.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_skips',
          docstring:
            'Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by ``is_data_valid`` or invalid models defined by ``is_model_valid``.  .. versionadded:: 0.19',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'stop_n_inliers',
          docstring:
            'Stop iteration if at least this number of inliers are found.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'stop_score',
          docstring:
            'Stop iteration if score is greater equal than this threshold.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'stop_probability',
          docstring:
            'RANSAC iteration stops if at least one outlier-free set of the training data is sampled in RANSAC. This requires to generate at least N samples (iterations)::      N >= log(1 - probability) / log(1 - e**m)  where the probability (confidence) is typically set to high value such as 0.99 (the default) and e is the current fraction of inliers w.r.t. the total number of samples.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'loss',
          docstring:
            'String inputs, "absolute_loss" and "squared_loss" are supported which find the absolute loss and squared loss per sample respectively.  If ``loss`` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on ``X[i]``.  If the loss on a sample is greater than the ``residual_threshold``, then this sample is classified as an outlier.',
          param_type: ['str', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'The generator used to initialize the centers.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'estimator_',
          docstring: 'Best fitted model (copy of the `base_estimator` object).',
          param_type: ['object'],
          returned: false
        },
        {
          name: 'n_trials_',
          docstring:
            'Number of random selection trials until one of the stop criteria is met. It is always ``<= max_trials``.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'inlier_mask_',
          docstring: 'Boolean mask of inliers classified as ``True``.',
          param_type: ['array', 'bool'],
          returned: false
        },
        {
          name: 'n_skips_no_inliers_',
          docstring:
            'Number of iterations skipped due to finding zero inliers.  .. versionadded:: 0.19',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'n_skips_invalid_data_',
          docstring:
            'Number of iterations skipped due to invalid data defined by ``is_data_valid``.  .. versionadded:: 0.19',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'n_skips_invalid_model_',
          docstring:
            'Number of iterations skipped due to an invalid model defined by ``is_model_valid``.  .. versionadded:: 0.19',
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
          name: 'fit',
          docstring:
            'Fit estimator using RANSAC algorithm.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix, shape [n_samples, n_features]\n            Training data.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_targets]\n            Target values.\n\n        sample_weight : array-like, shape = [n_samples]\n            Individual weights for each sample\n            raises error if sample_weight is passed and base_estimator\n            fit method does not support it.\n\n        Raises\n        ------\n        ValueError\n            If no valid consensus set could be found. This occurs if\n            `is_data_valid` and `is_model_valid` return False for all\n            `max_trials` randomly chosen sub-samples.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '= [n_samples] or [n_samples, n_targets]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Individual weights for each sample raises error if sample_weight is passed and base_estimator fit method does not support it.',
              param_type: ['array'],
              expected_shape: '= [n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the estimated model.\n\n        This is a wrapper for `estimator_.predict(X)`.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n\n        Returns\n        -------\n        y : array, shape = [n_samples] or [n_samples, n_targets]\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the score of the prediction.\n\n        This is a wrapper for `estimator_.score(X, y)`.\n\n        Parameters\n        ----------\n        X : numpy array or sparse matrix of shape [n_samples, n_features]\n            Training data.\n\n        y : array, shape = [n_samples] or [n_samples, n_targets]\n            Target values.\n\n        Returns\n        -------\n        z : float\n            Score of the prediction.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '= [n_samples] or [n_samples, n_targets]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'z',
              docstring: 'Score of the prediction.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'Ridge',
      docstring:
        "Linear least squares with l2 regularization.\n\n    Minimizes the objective function::\n\n    ||y - Xw||^2_2 + alpha * ||w||^2_2\n\n    This model solves a regression model where the loss function is\n    the linear least squares function and regularization is given by\n    the l2-norm. Also known as Ridge Regression or Tikhonov regularization.\n    This estimator has built-in support for multi-variate regression\n    (i.e., when y is a 2d-array of shape [n_samples, n_targets]).\n\n    Read more in the :ref:`User Guide <ridge_regression>`.\n\n    Parameters\n    ----------\n    alpha : {float, array-like}, shape (n_targets)\n        Regularization strength; must be a positive float. Regularization\n        improves the conditioning of the problem and reduces the variance of\n        the estimates. Larger values specify stronger regularization.\n        Alpha corresponds to ``C^-1`` in other linear models such as\n        LogisticRegression or LinearSVC. If an array is passed, penalties are\n        assumed to be specific to the targets. Hence they must correspond in\n        number.\n\n    fit_intercept : boolean\n        Whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    max_iter : int, optional\n        Maximum number of iterations for conjugate gradient solver.\n        For 'sparse_cg' and 'lsqr' solvers, the default value is determined\n        by scipy.sparse.linalg. For 'sag' solver, the default value is 1000.\n\n    tol : float\n        Precision of the solution.\n\n    solver : {'auto', 'svd', 'cholesky', 'lsqr', 'sparse_cg', 'sag', 'saga'}\n        Solver to use in the computational routines:\n\n        - 'auto' chooses the solver automatically based on the type of data.\n\n        - 'svd' uses a Singular Value Decomposition of X to compute the Ridge\n          coefficients. More stable for singular matrices than\n          'cholesky'.\n\n        - 'cholesky' uses the standard scipy.linalg.solve function to\n          obtain a closed-form solution.\n\n        - 'sparse_cg' uses the conjugate gradient solver as found in\n          scipy.sparse.linalg.cg. As an iterative algorithm, this solver is\n          more appropriate than 'cholesky' for large-scale data\n          (possibility to set `tol` and `max_iter`).\n\n        - 'lsqr' uses the dedicated regularized least-squares routine\n          scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative\n          procedure.\n\n        - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses\n          its improved, unbiased version named SAGA. Both methods also use an\n          iterative procedure, and are often faster than other solvers when\n          both n_samples and n_features are large. Note that 'sag' and\n          'saga' fast convergence is only guaranteed on features with\n          approximately the same scale. You can preprocess the data with a\n          scaler from sklearn.preprocessing.\n\n        All last five solvers support both dense and sparse data. However, only\n        'sag' and 'sparse_cg' supports sparse input when `fit_intercept` is\n        True.\n\n        .. versionadded:: 0.17\n           Stochastic Average Gradient descent solver.\n        .. versionadded:: 0.19\n           SAGA solver.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`. Used when ``solver`` == 'sag'.\n\n        .. versionadded:: 0.17\n           *random_state* to support Stochastic Average Gradient.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,) or (n_targets, n_features)\n        Weight vector(s).\n\n    intercept_ : float | array, shape = (n_targets,)\n        Independent term in decision function. Set to 0.0 if\n        ``fit_intercept = False``.\n\n    n_iter_ : array or None, shape (n_targets,)\n        Actual number of iterations for each target. Available only for\n        sag and lsqr solvers. Other solvers will return None.\n\n        .. versionadded:: 0.17\n\n    See also\n    --------\n    RidgeClassifier : Ridge classifier\n    RidgeCV : Ridge regression with built-in cross validation\n    :class:`sklearn.kernel_ridge.KernelRidge` : Kernel ridge regression\n        combines ridge regression with the kernel trick\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import Ridge\n    >>> import numpy as np\n    >>> n_samples, n_features = 10, 5\n    >>> rng = np.random.RandomState(0)\n    >>> y = rng.randn(n_samples)\n    >>> X = rng.randn(n_samples, n_features)\n    >>> clf = Ridge(alpha=1.0)\n    >>> clf.fit(X, y) # doctest: +NORMALIZE_WHITESPACE\n    Ridge(alpha=1.0, copy_X=True, fit_intercept=True, max_iter=None,\n          normalize=False, random_state=None, solver='auto', tol=0.001)\n\n    ",
      inputs: [
        {
          name: 'alpha',
          docstring:
            'Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegression or LinearSVC. If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          expected_shape: '(n_targets)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            "Maximum number of iterations for conjugate gradient solver. For 'sparse_cg' and 'lsqr' solvers, the default value is determined by scipy.sparse.linalg. For 'sag' solver, the default value is 1000.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Precision of the solution.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'solver',
          docstring:
            "Solver to use in the computational routines:  - 'auto' chooses the solver automatically based on the type of data.  - 'svd' uses a Singular Value Decomposition of X to compute the Ridge   coefficients. More stable for singular matrices than   'cholesky'.  - 'cholesky' uses the standard scipy.linalg.solve function to   obtain a closed-form solution.  - 'sparse_cg' uses the conjugate gradient solver as found in   scipy.sparse.linalg.cg. As an iterative algorithm, this solver is   more appropriate than 'cholesky' for large-scale data   (possibility to set `tol` and `max_iter`).  - 'lsqr' uses the dedicated regularized least-squares routine   scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative   procedure.  - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses   its improved, unbiased version named SAGA. Both methods also use an   iterative procedure, and are often faster than other solvers when   both n_samples and n_features are large. Note that 'sag' and   'saga' fast convergence is only guaranteed on features with   approximately the same scale. You can preprocess the data with a   scaler from sklearn.preprocessing.  All last five solvers support both dense and sparse data. However, only 'sag' and 'sparse_cg' supports sparse input when `fit_intercept` is True.  .. versionadded:: 0.17    Stochastic Average Gradient descent solver. .. versionadded:: 0.19    SAGA solver.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``solver`` == 'sag'.  .. versionadded:: 0.17    *random_state* to support Stochastic Average Gradient.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'Weight vector(s).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring:
            'Independent term in decision function. Set to 0.0 if ``fit_intercept = False``.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return None.  .. versionadded:: 0.17',
          param_type: ['array', null],
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit Ridge regression model\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            Training data\n\n        y : array-like, shape = [n_samples] or [n_samples, n_targets]\n            Target values\n\n        sample_weight : float or numpy array of shape [n_samples]\n            Individual weights for each sample\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '= [n_samples] or [n_samples, n_targets]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Individual weights for each sample',
              param_type: ['array', 'float'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'RidgeCV',
      docstring:
        "Ridge regression with built-in cross-validation.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    By default, it performs Generalized Cross-Validation, which is a form of\n    efficient Leave-One-Out cross-validation.\n\n    Read more in the :ref:`User Guide <ridge_regression>`.\n\n    Parameters\n    ----------\n    alphas : numpy array of shape [n_alphas]\n        Array of alpha values to try.\n        Regularization strength; must be a positive float. Regularization\n        improves the conditioning of the problem and reduces the variance of\n        the estimates. Larger values specify stronger regularization.\n        Alpha corresponds to ``C^-1`` in other linear models such as\n        LogisticRegression or LinearSVC.\n        If using generalized cross-validation, alphas must be positive.\n\n    fit_intercept : boolean\n        Whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    scoring : string, callable or None, optional, default: None\n        A string (see model evaluation documentation) or\n        a scorer callable object / function with signature\n        ``scorer(estimator, X, y)``.\n        If None, the negative mean squared error if cv is 'auto' or None\n        (i.e. when using generalized cross-validation), and r2 score otherwise.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the efficient Leave-One-Out cross-validation\n          (also known as Generalized Cross-Validation).\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if ``y`` is binary or multiclass,\n        :class:`sklearn.model_selection.StratifiedKFold` is used, else,\n        :class:`sklearn.model_selection.KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n    gcv_mode : {None, 'auto', 'svd', eigen'}, optional\n        Flag indicating which strategy to use when performing\n        Generalized Cross-Validation. Options are::\n\n            'auto' : use 'svd' if n_samples > n_features, otherwise use 'eigen'\n            'svd' : force use of singular value decomposition of X when X is\n                dense, eigenvalue decomposition of X^T.X when X is sparse.\n            'eigen' : force computation via eigendecomposition of X.X^T\n\n        The 'auto' mode is the default and is intended to pick the cheaper\n        option of the two depending on the shape of the training data.\n\n    store_cv_values : boolean, default=False\n        Flag indicating if the cross-validation values corresponding to\n        each alpha should be stored in the ``cv_values_`` attribute (see\n        below). This flag is only compatible with ``cv=None`` (i.e. using\n        Generalized Cross-Validation).\n\n    Attributes\n    ----------\n    cv_values_ : array, shape = [n_samples, n_alphas] or         shape = [n_samples, n_targets, n_alphas], optional\n        Cross-validation values for each alpha (if ``store_cv_values=True``        and ``cv=None``). After ``fit()`` has been called, this attribute         will contain the mean squared errors (by default) or the values         of the ``{loss,score}_func`` function (if provided in the constructor).\n\n    coef_ : array, shape = [n_features] or [n_targets, n_features]\n        Weight vector(s).\n\n    intercept_ : float | array, shape = (n_targets,)\n        Independent term in decision function. Set to 0.0 if\n        ``fit_intercept = False``.\n\n    alpha_ : float\n        Estimated regularization parameter.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_diabetes\n    >>> from sklearn.linear_model import RidgeCV\n    >>> X, y = load_diabetes(return_X_y=True)\n    >>> clf = RidgeCV(alphas=[1e-3, 1e-2, 1e-1, 1]).fit(X, y)\n    >>> clf.score(X, y) # doctest: +ELLIPSIS\n    0.5166...\n\n    See also\n    --------\n    Ridge : Ridge regression\n    RidgeClassifier : Ridge classifier\n    RidgeClassifierCV : Ridge classifier with built-in cross validation\n    ",
      inputs: [
        {
          name: 'alphas',
          docstring:
            'Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegression or LinearSVC. If using generalized cross-validation, alphas must be positive.',
          param_type: ['array'],
          expected_shape: '[n_alphas]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            "A string (see model evaluation documentation) or a scorer callable object / function with signature ``scorer(estimator, X, y)``. If None, the negative mean squared error if cv is 'auto' or None (i.e. when using generalized cross-validation), and r2 score otherwise.",
          param_type: ['str', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the efficient Leave-One-Out cross-validation   (also known as Generalized Cross-Validation). - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if ``y`` is binary or multiclass, :class:`sklearn.model_selection.StratifiedKFold` is used, else, :class:`sklearn.model_selection.KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'gcv_mode',
          docstring:
            "Flag indicating which strategy to use when performing Generalized Cross-Validation. Options are::      'auto' : use 'svd' if n_samples > n_features, otherwise use 'eigen'     'svd' : force use of singular value decomposition of X when X is         dense, eigenvalue decomposition of X^T.X when X is sparse.     'eigen' : force computation via eigendecomposition of X.X^T  The 'auto' mode is the default and is intended to pick the cheaper option of the two depending on the shape of the training data.",
          param_type: ['LIST_VALID_OPTIONS', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'store_cv_values',
          docstring:
            'Flag indicating if the cross-validation values corresponding to each alpha should be stored in the ``cv_values_`` attribute (see below). This flag is only compatible with ``cv=None`` (i.e. using Generalized Cross-Validation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        }
      ],
      outputs: [
        {
          name: 'cv_values_',
          docstring:
            'Cross-validation values for each alpha (if ``store_cv_values=True``        and ``cv=None``). After ``fit()`` has been called, this attribute         will contain the mean squared errors (by default) or the values         of the ``{loss,score}_func`` function (if provided in the constructor).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring: 'Weight vector(s).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring:
            'Independent term in decision function. Set to 0.0 if ``fit_intercept = False``.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'Estimated regularization parameter.',
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
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            "Fit Ridge regression model\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n            Training data. If using GCV, will be cast to float64\n            if necessary.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_targets]\n            Target values. Will be cast to X's dtype if necessary\n\n        sample_weight : float or array-like of shape [n_samples]\n            Sample weight\n\n        Returns\n        -------\n        self : object\n\n        Notes\n        -----\n        When sample_weight is provided, the selected hyperparameter may depend\n        on whether we use generalized cross-validation (cv=None or cv='auto')\n        or another form of cross-validation, because only generalized\n        cross-validation takes the sample weights into account when computing\n        the validation score.\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data. If using GCV, will be cast to float64 if necessary.',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                "Target values. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '= [n_samples] or [n_samples, n_targets]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weight',
              param_type: ['array', 'float'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'RidgeClassifier',
      docstring:
        "Classifier using Ridge regression.\n\n    Read more in the :ref:`User Guide <ridge_regression>`.\n\n    Parameters\n    ----------\n    alpha : float\n        Regularization strength; must be a positive float. Regularization\n        improves the conditioning of the problem and reduces the variance of\n        the estimates. Larger values specify stronger regularization.\n        Alpha corresponds to ``C^-1`` in other linear models such as\n        LogisticRegression or LinearSVC.\n\n    fit_intercept : boolean\n        Whether to calculate the intercept for this model. If set to false, no\n        intercept will be used in calculations (e.g. data is expected to be\n        already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    max_iter : int, optional\n        Maximum number of iterations for conjugate gradient solver.\n        The default value is determined by scipy.sparse.linalg.\n\n    tol : float\n        Precision of the solution.\n\n    class_weight : dict or 'balanced', optional\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one.\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n    solver : {'auto', 'svd', 'cholesky', 'lsqr', 'sparse_cg', 'sag', 'saga'}\n        Solver to use in the computational routines:\n\n        - 'auto' chooses the solver automatically based on the type of data.\n\n        - 'svd' uses a Singular Value Decomposition of X to compute the Ridge\n          coefficients. More stable for singular matrices than\n          'cholesky'.\n\n        - 'cholesky' uses the standard scipy.linalg.solve function to\n          obtain a closed-form solution.\n\n        - 'sparse_cg' uses the conjugate gradient solver as found in\n          scipy.sparse.linalg.cg. As an iterative algorithm, this solver is\n          more appropriate than 'cholesky' for large-scale data\n          (possibility to set `tol` and `max_iter`).\n\n        - 'lsqr' uses the dedicated regularized least-squares routine\n          scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative\n          procedure.\n\n        - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses\n          its unbiased and more flexible version named SAGA. Both methods\n          use an iterative procedure, and are often faster than other solvers\n          when both n_samples and n_features are large. Note that 'sag' and\n          'saga' fast convergence is only guaranteed on features with\n          approximately the same scale. You can preprocess the data with a\n          scaler from sklearn.preprocessing.\n\n          .. versionadded:: 0.17\n             Stochastic Average Gradient descent solver.\n          .. versionadded:: 0.19\n           SAGA solver.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`. Used when ``solver`` == 'sag'.\n\n    Attributes\n    ----------\n    coef_ : array, shape (1, n_features) or (n_classes, n_features)\n        Coefficient of the features in the decision function.\n\n        ``coef_`` is of shape (1, n_features) when the given problem is binary.\n\n    intercept_ : float | array, shape = (n_targets,)\n        Independent term in decision function. Set to 0.0 if\n        ``fit_intercept = False``.\n\n    n_iter_ : array or None, shape (n_targets,)\n        Actual number of iterations for each target. Available only for\n        sag and lsqr solvers. Other solvers will return None.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_breast_cancer\n    >>> from sklearn.linear_model import RidgeClassifier\n    >>> X, y = load_breast_cancer(return_X_y=True)\n    >>> clf = RidgeClassifier().fit(X, y)\n    >>> clf.score(X, y) # doctest: +ELLIPSIS\n    0.9595...\n\n    See also\n    --------\n    Ridge : Ridge regression\n    RidgeClassifierCV :  Ridge classifier with built-in cross validation\n\n    Notes\n    -----\n    For multi-class classification, n_class classifiers are trained in\n    a one-versus-all approach. Concretely, this is implemented by taking\n    advantage of the multi-variate response support in Ridge.\n    ",
      inputs: [
        {
          name: 'alpha',
          docstring:
            'Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegression or LinearSVC.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations for conjugate gradient solver. The default value is determined by scipy.sparse.linalg.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Precision of the solution.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'solver',
          docstring:
            "Solver to use in the computational routines:  - 'auto' chooses the solver automatically based on the type of data.  - 'svd' uses a Singular Value Decomposition of X to compute the Ridge   coefficients. More stable for singular matrices than   'cholesky'.  - 'cholesky' uses the standard scipy.linalg.solve function to   obtain a closed-form solution.  - 'sparse_cg' uses the conjugate gradient solver as found in   scipy.sparse.linalg.cg. As an iterative algorithm, this solver is   more appropriate than 'cholesky' for large-scale data   (possibility to set `tol` and `max_iter`).  - 'lsqr' uses the dedicated regularized least-squares routine   scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative   procedure.  - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses   its unbiased and more flexible version named SAGA. Both methods   use an iterative procedure, and are often faster than other solvers   when both n_samples and n_features are large. Note that 'sag' and   'saga' fast convergence is only guaranteed on features with   approximately the same scale. You can preprocess the data with a   scaler from sklearn.preprocessing.    .. versionadded:: 0.17      Stochastic Average Gradient descent solver.   .. versionadded:: 0.19    SAGA solver.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            "The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``solver`` == 'sag'.",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Coefficient of the features in the decision function.  ``coef_`` is of shape (1, n_features) when the given problem is binary.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring:
            'Independent term in decision function. Set to 0.0 if ``fit_intercept = False``.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return None.',
          param_type: ['array', null],
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
          name: '_decision_function',
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
          name: '_predict_proba_lr',
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'fit',
          docstring:
            'Fit Ridge regression model.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples,n_features]\n            Training data\n\n        y : array-like, shape = [n_samples]\n            Target values\n\n        sample_weight : float or numpy array of shape (n_samples,)\n            Sample weight.\n\n            .. versionadded:: 0.17\n               *sample_weight* support to Classifier.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '= [n_samples,n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '= [n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Sample weight.  .. versionadded:: 0.17    *sample_weight* support to Classifier.',
              param_type: ['array', 'float'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict class labels for samples in X.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape [n_samples]\n            Predicted class label per sample.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Predicted class label per sample.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Mean accuracy of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'RidgeClassifierCV',
      docstring:
        'Ridge classifier with built-in cross-validation.\n\n    See glossary entry for :term:`cross-validation estimator`.\n\n    By default, it performs Generalized Cross-Validation, which is a form of\n    efficient Leave-One-Out cross-validation. Currently, only the n_features >\n    n_samples case is handled efficiently.\n\n    Read more in the :ref:`User Guide <ridge_regression>`.\n\n    Parameters\n    ----------\n    alphas : numpy array of shape [n_alphas]\n        Array of alpha values to try.\n        Regularization strength; must be a positive float. Regularization\n        improves the conditioning of the problem and reduces the variance of\n        the estimates. Larger values specify stronger regularization.\n        Alpha corresponds to ``C^-1`` in other linear models such as\n        LogisticRegression or LinearSVC.\n\n    fit_intercept : boolean\n        Whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (e.g. data is expected to be already centered).\n\n    normalize : boolean, optional, default False\n        This parameter is ignored when ``fit_intercept`` is set to False.\n        If True, the regressors X will be normalized before regression by\n        subtracting the mean and dividing by the l2-norm.\n        If you wish to standardize, please use\n        :class:`sklearn.preprocessing.StandardScaler` before calling ``fit``\n        on an estimator with ``normalize=False``.\n\n    scoring : string, callable or None, optional, default: None\n        A string (see model evaluation documentation) or\n        a scorer callable object / function with signature\n        ``scorer(estimator, X, y)``.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the efficient Leave-One-Out cross-validation\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n    class_weight : dict or \'balanced\', optional\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one.\n\n        The "balanced" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n    store_cv_values : boolean, default=False\n        Flag indicating if the cross-validation values corresponding to\n        each alpha should be stored in the ``cv_values_`` attribute (see\n        below). This flag is only compatible with ``cv=None`` (i.e. using\n        Generalized Cross-Validation).\n\n    Attributes\n    ----------\n    cv_values_ : array, shape = [n_samples, n_targets, n_alphas], optional\n        Cross-validation values for each alpha (if ``store_cv_values=True`` and\n        ``cv=None``). After ``fit()`` has been called, this attribute will\n        contain the mean squared errors (by default) or the values of the\n        ``{loss,score}_func`` function (if provided in the constructor).\n\n    coef_ : array, shape (1, n_features) or (n_targets, n_features)\n        Coefficient of the features in the decision function.\n\n        ``coef_`` is of shape (1, n_features) when the given problem is binary.\n\n    intercept_ : float | array, shape = (n_targets,)\n        Independent term in decision function. Set to 0.0 if\n        ``fit_intercept = False``.\n\n    alpha_ : float\n        Estimated regularization parameter\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_breast_cancer\n    >>> from sklearn.linear_model import RidgeClassifierCV\n    >>> X, y = load_breast_cancer(return_X_y=True)\n    >>> clf = RidgeClassifierCV(alphas=[1e-3, 1e-2, 1e-1, 1]).fit(X, y)\n    >>> clf.score(X, y) # doctest: +ELLIPSIS\n    0.9630...\n\n    See also\n    --------\n    Ridge : Ridge regression\n    RidgeClassifier : Ridge classifier\n    RidgeCV : Ridge regression with built-in cross validation\n\n    Notes\n    -----\n    For multi-class classification, n_class classifiers are trained in\n    a one-versus-all approach. Concretely, this is implemented by taking\n    advantage of the multi-variate response support in Ridge.\n    ',
      inputs: [
        {
          name: 'alphas',
          docstring:
            'Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegression or LinearSVC.',
          param_type: ['array'],
          expected_shape: '[n_alphas]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'normalize',
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            'A string (see model evaluation documentation) or a scorer callable object / function with signature ``scorer(estimator, X, y)``.',
          param_type: ['str', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the efficient Leave-One-Out cross-validation - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'store_cv_values',
          docstring:
            'Flag indicating if the cross-validation values corresponding to each alpha should be stored in the ``cv_values_`` attribute (see below). This flag is only compatible with ``cv=None`` (i.e. using Generalized Cross-Validation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        }
      ],
      outputs: [
        {
          name: 'cv_values_',
          docstring:
            'Cross-validation values for each alpha (if ``store_cv_values=True`` and ``cv=None``). After ``fit()`` has been called, this attribute will contain the mean squared errors (by default) or the values of the ``{loss,score}_func`` function (if provided in the constructor).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Coefficient of the features in the decision function.  ``coef_`` is of shape (1, n_features) when the given problem is binary.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring:
            'Independent term in decision function. Set to 0.0 if ``fit_intercept = False``.',
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          returned: false
        },
        {
          name: 'alpha_',
          docstring: 'Estimated regularization parameter',
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
          name: '_decision_function',
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
          name: '_predict_proba_lr',
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'fit',
          docstring:
            "Fit the ridge classifier.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples\n            and n_features is the number of features. When using GCV,\n            will be cast to float64 if necessary.\n\n        y : array-like, shape (n_samples,)\n            Target values. Will be cast to X's dtype if necessary\n\n        sample_weight : float or numpy array of shape (n_samples,)\n            Sample weight.\n\n        Returns\n        -------\n        self : object\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vectors, where n_samples is the number of samples and n_features is the number of features. When using GCV, will be cast to float64 if necessary.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                "Target values. Will be cast to X's dtype if necessary",
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weight.',
              param_type: ['array', 'float'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict class labels for samples in X.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape [n_samples]\n            Predicted class label per sample.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Predicted class label per sample.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Mean accuracy of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'SGDClassifier',
      docstring:
        "Linear classifiers (SVM, logistic regression, a.o.) with SGD training.\n\n    This estimator implements regularized linear models with stochastic\n    gradient descent (SGD) learning: the gradient of the loss is estimated\n    each sample at a time and the model is updated along the way with a\n    decreasing strength schedule (aka learning rate). SGD allows minibatch\n    (online/out-of-core) learning, see the partial_fit method.\n    For best results using the default learning rate schedule, the data should\n    have zero mean and unit variance.\n\n    This implementation works with data represented as dense or sparse arrays\n    of floating point values for the features. The model it fits can be\n    controlled with the loss parameter; by default, it fits a linear support\n    vector machine (SVM).\n\n    The regularizer is a penalty added to the loss function that shrinks model\n    parameters towards the zero vector using either the squared euclidean norm\n    L2 or the absolute norm L1 or a combination of both (Elastic Net). If the\n    parameter update crosses the 0.0 value because of the regularizer, the\n    update is truncated to 0.0 to allow for learning sparse models and achieve\n    online feature selection.\n\n    Read more in the :ref:`User Guide <sgd>`.\n\n    Parameters\n    ----------\n    loss : str, default: 'hinge'\n        The loss function to be used. Defaults to 'hinge', which gives a\n        linear SVM.\n\n        The possible options are 'hinge', 'log', 'modified_huber',\n        'squared_hinge', 'perceptron', or a regression loss: 'squared_loss',\n        'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'.\n\n        The 'log' loss gives logistic regression, a probabilistic classifier.\n        'modified_huber' is another smooth loss that brings tolerance to\n        outliers as well as probability estimates.\n        'squared_hinge' is like hinge but is quadratically penalized.\n        'perceptron' is the linear loss used by the perceptron algorithm.\n        The other losses are designed for regression but can be useful in\n        classification as well; see SGDRegressor for a description.\n\n    penalty : str, 'none', 'l2', 'l1', or 'elasticnet'\n        The penalty (aka regularization term) to be used. Defaults to 'l2'\n        which is the standard regularizer for linear SVM models. 'l1' and\n        'elasticnet' might bring sparsity to the model (feature selection)\n        not achievable with 'l2'.\n\n    alpha : float\n        Constant that multiplies the regularization term. Defaults to 0.0001\n        Also used to compute learning_rate when set to 'optimal'.\n\n    l1_ratio : float\n        The Elastic Net mixing parameter, with 0 <= l1_ratio <= 1.\n        l1_ratio=0 corresponds to L2 penalty, l1_ratio=1 to L1.\n        Defaults to 0.15.\n\n    fit_intercept : bool\n        Whether the intercept should be estimated or not. If False, the\n        data is assumed to be already centered. Defaults to True.\n\n    max_iter : int, optional (default=1000)\n        The maximum number of passes over the training data (aka epochs).\n        It only impacts the behavior in the ``fit`` method, and not the\n        `partial_fit`.\n\n        .. versionadded:: 0.19\n\n    tol : float or None, optional (default=1e-3)\n        The stopping criterion. If it is not None, the iterations will stop\n        when (loss > best_loss - tol) for ``n_iter_no_change`` consecutive\n        epochs.\n\n        .. versionadded:: 0.19\n\n    shuffle : bool, optional\n        Whether or not the training data should be shuffled after each epoch.\n        Defaults to True.\n\n    verbose : integer, optional\n        The verbosity level\n\n    epsilon : float\n        Epsilon in the epsilon-insensitive loss functions; only if `loss` is\n        'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'.\n        For 'huber', determines the threshold at which it becomes less\n        important to get the prediction exactly right.\n        For epsilon-insensitive, any differences between the current prediction\n        and the correct label are ignored if they are less than this threshold.\n\n    n_jobs : int or None, optional (default=None)\n        The number of CPUs to use to do the OVA (One Versus All, for\n        multi-class problems) computation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    learning_rate : string, optional\n        The learning rate schedule:\n\n        'constant':\n            eta = eta0\n        'optimal': [default]\n            eta = 1.0 / (alpha * (t + t0))\n            where t0 is chosen by a heuristic proposed by Leon Bottou.\n        'invscaling':\n            eta = eta0 / pow(t, power_t)\n        'adaptive':\n            eta = eta0, as long as the training keeps decreasing.\n            Each time n_iter_no_change consecutive epochs fail to decrease the\n            training loss by tol or fail to increase validation score by tol if\n            early_stopping is True, the current learning rate is divided by 5.\n\n    eta0 : double\n        The initial learning rate for the 'constant', 'invscaling' or\n        'adaptive' schedules. The default value is 0.0 as eta0 is not used by\n        the default schedule 'optimal'.\n\n    power_t : double\n        The exponent for inverse scaling learning rate [default 0.5].\n\n    early_stopping : bool, default=False\n        Whether to use early stopping to terminate training when validation\n        score is not improving. If set to True, it will automatically set aside\n        a stratified fraction of training data as validation and terminate\n        training when validation score is not improving by at least tol for\n        n_iter_no_change consecutive epochs.\n\n        .. versionadded:: 0.20\n\n    validation_fraction : float, default=0.1\n        The proportion of training data to set aside as validation set for\n        early stopping. Must be between 0 and 1.\n        Only used if early_stopping is True.\n\n        .. versionadded:: 0.20\n\n    n_iter_no_change : int, default=5\n        Number of iterations with no improvement to wait before early stopping.\n\n        .. versionadded:: 0.20\n\n    class_weight : dict, {class_label: weight} or \"balanced\" or None, optional\n        Preset for the class_weight fit parameter.\n\n        Weights associated with classes. If not given, all classes\n        are supposed to have weight one.\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n    warm_start : bool, optional\n        When set to True, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n        Repeatedly calling fit or partial_fit when warm_start is True can\n        result in a different solution than when calling fit a single time\n        because of the way the data is shuffled.\n        If a dynamic learning rate is used, the learning rate is adapted\n        depending on the number of samples already seen. Calling ``fit`` resets\n        this counter, while ``partial_fit`` will result in increasing the\n        existing counter.\n\n    average : bool or int, optional\n        When set to True, computes the averaged SGD weights and stores the\n        result in the ``coef_`` attribute. If set to an int greater than 1,\n        averaging will begin once the total number of samples seen reaches\n        average. So ``average=10`` will begin averaging after seeing 10\n        samples.\n\n    Attributes\n    ----------\n    coef_ : array, shape (1, n_features) if n_classes == 2 else (n_classes,            n_features)\n        Weights assigned to the features.\n\n    intercept_ : array, shape (1,) if n_classes == 2 else (n_classes,)\n        Constants in decision function.\n\n    n_iter_ : int\n        The actual number of iterations to reach the stopping criterion.\n        For multiclass fits, it is the maximum over every binary fit.\n\n    loss_function_ : concrete ``LossFunction``\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn import linear_model\n    >>> X = np.array([[-1, -1], [-2, -1], [1, 1], [2, 1]])\n    >>> Y = np.array([1, 1, 2, 2])\n    >>> clf = linear_model.SGDClassifier(max_iter=1000, tol=1e-3)\n    >>> clf.fit(X, Y)\n    ... #doctest: +NORMALIZE_WHITESPACE\n    SGDClassifier(alpha=0.0001, average=False, class_weight=None,\n           early_stopping=False, epsilon=0.1, eta0=0.0, fit_intercept=True,\n           l1_ratio=0.15, learning_rate='optimal', loss='hinge', max_iter=1000,\n           n_iter_no_change=5, n_jobs=None, penalty='l2', power_t=0.5,\n           random_state=None, shuffle=True, tol=0.001, validation_fraction=0.1,\n           verbose=0, warm_start=False)\n\n    >>> print(clf.predict([[-0.8, -1]]))\n    [1]\n\n    See also\n    --------\n    sklearn.svm.LinearSVC, LogisticRegression, Perceptron\n\n    ",
      inputs: [
        {
          name: 'loss',
          docstring:
            "The loss function to be used. Defaults to 'hinge', which gives a linear SVM.  The possible options are 'hinge', 'log', 'modified_huber', 'squared_hinge', 'perceptron', or a regression loss: 'squared_loss', 'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'.  The 'log' loss gives logistic regression, a probabilistic classifier. 'modified_huber' is another smooth loss that brings tolerance to outliers as well as probability estimates. 'squared_hinge' is like hinge but is quadratically penalized. 'perceptron' is the linear loss used by the perceptron algorithm. The other losses are designed for regression but can be useful in classification as well; see SGDRegressor for a description.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: ": 'hinge'"
        },
        {
          name: 'penalty',
          docstring:
            "The penalty (aka regularization term) to be used. Defaults to 'l2' which is the standard regularizer for linear SVM models. 'l1' and 'elasticnet' might bring sparsity to the model (feature selection) not achievable with 'l2'.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring:
            "Constant that multiplies the regularization term. Defaults to 0.0001 Also used to compute learning_rate when set to 'optimal'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'l1_ratio',
          docstring:
            'The Elastic Net mixing parameter, with 0 <= l1_ratio <= 1. l1_ratio=0 corresponds to L2 penalty, l1_ratio=1 to L1. Defaults to 0.15.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether the intercept should be estimated or not. If False, the data is assumed to be already centered. Defaults to True.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the ``fit`` method, and not the `partial_fit`.  .. versionadded:: 0.19',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The stopping criterion. If it is not None, the iterations will stop when (loss > best_loss - tol) for ``n_iter_no_change`` consecutive epochs.  .. versionadded:: 0.19',
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shuffle',
          docstring:
            'Whether or not the training data should be shuffled after each epoch. Defaults to True.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'The verbosity level',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'epsilon',
          docstring:
            "Epsilon in the epsilon-insensitive loss functions; only if `loss` is 'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'. For 'huber', determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'learning_rate',
          docstring:
            "The learning rate schedule:  'constant':     eta = eta0 'optimal': [default]     eta = 1.0 / (alpha * (t + t0))     where t0 is chosen by a heuristic proposed by Leon Bottou. 'invscaling':     eta = eta0 / pow(t, power_t) 'adaptive':     eta = eta0, as long as the training keeps decreasing.     Each time n_iter_no_change consecutive epochs fail to decrease the     training loss by tol or fail to increase validation score by tol if     early_stopping is True, the current learning rate is divided by 5.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eta0',
          docstring:
            "The initial learning rate for the 'constant', 'invscaling' or 'adaptive' schedules. The default value is 0.0 as eta0 is not used by the default schedule 'optimal'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'power_t',
          docstring:
            'The exponent for inverse scaling learning rate [default 0.5].',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'early_stopping',
          docstring:
            'Whether to use early stopping to terminate training when validation score is not improving. If set to True, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n_iter_no_change consecutive epochs.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'validation_fraction',
          docstring:
            'The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is True.  .. versionadded:: 0.20',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0.1'
        },
        {
          name: 'n_iter_no_change',
          docstring:
            'Number of iterations with no improvement to wait before early stopping.  .. versionadded:: 0.20',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=5'
        },
        {
          name: 'class_weight',
          docstring:
            'Preset for the class_weight fit parameter.  Weights associated with classes. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``',
          param_type: ['LIST_VALID_OPTIONS', 'dict', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'warm_start',
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.  Repeatedly calling fit or partial_fit when warm_start is True can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling ``fit`` resets this counter, while ``partial_fit`` will result in increasing the existing counter.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'average',
          docstring:
            'When set to True, computes the averaged SGD weights and stores the result in the ``coef_`` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So ``average=10`` will begin averaging after seeing 10 samples.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'Weights assigned to the features.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'loss_function_',
          docstring: '',
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
          name: '_allocate_parameter_mem',
          docstring: 'Allocate mem for parameters; initialize if provided.',
          inputs: [],
          outputs: []
        },
        {
          name: '_check_proba',
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
          name: '_fit_binary',
          docstring: 'Fit a binary classifier on X and y. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_multiclass',
          docstring:
            'Fit a multi-class classifier by combining binary classifiers\n\n        Each binary classifier predicts one class versus all others. This\n        strategy is called OvA (One versus All) or OvR (One versus Rest).\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_learning_rate_type',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_loss_function',
          docstring: 'Get concrete ``LossFunction`` object for str ``loss``. ',
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
          name: '_get_penalty_type',
          docstring: 'None',
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
          name: '_make_validation_score_cb',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_make_validation_split',
          docstring:
            'Split the dataset between training set and validation set.\n\n        Parameters\n        ----------\n        y : array, shape (n_samples, )\n            Target values.\n\n        Returns\n        -------\n        validation_mask : array, shape (n_samples, )\n            Equal to 1 on the validation set, 0 on the training set.\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples, )',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'validation_mask',
              docstring:
                'Equal to 1 on the validation set, 0 on the training set.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_partial_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_predict_log_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_predict_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_predict_proba_lr',
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_params',
          docstring: 'Validate input params. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_sample_weight',
          docstring: 'Set the sample weight array.',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'densify',
          docstring:
            'Convert coefficient matrix to dense array format.\n\n        Converts the ``coef_`` member (back) to a numpy.ndarray. This is the\n        default format of ``coef_`` and is required for fitting, so calling\n        this method is only required on models that have previously been\n        sparsified; otherwise, it is a no-op.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with Stochastic Gradient Descent.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training data\n\n        y : numpy array, shape (n_samples,)\n            Target values\n\n        coef_init : array, shape (n_classes, n_features)\n            The initial coefficients to warm-start the optimization.\n\n        intercept_init : array, shape (n_classes,)\n            The initial intercept to warm-start the optimization.\n\n        sample_weight : array-like, shape (n_samples,), optional\n            Weights applied to individual samples.\n            If not provided, uniform weights are assumed. These weights will\n            be multiplied with class_weight (passed through the\n            constructor) if class_weight is specified\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring:
                'The initial coefficients to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '(n_classes, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'intercept_init',
              docstring:
                'The initial intercept to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '(n_classes,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class_weight (passed through the constructor) if class_weight is specified',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
            "Perform one epoch of stochastic gradient descent on given samples.\n\n        Internally, this method uses ``max_iter = 1``. Therefore, it is not\n        guaranteed that a minimum of the cost function is reached after calling\n        it once. Matters such as objective convergence and early stopping\n        should be handled by the user.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Subset of the training data\n\n        y : numpy array, shape (n_samples,)\n            Subset of the target values\n\n        classes : array, shape (n_classes,)\n            Classes across all calls to partial_fit.\n            Can be obtained by via `np.unique(y_all)`, where y_all is the\n            target vector of the entire dataset.\n            This argument is required for the first call to partial_fit\n            and can be omitted in the subsequent calls.\n            Note that y doesn't need to contain all labels in `classes`.\n\n        sample_weight : array-like, shape (n_samples,), optional\n            Weights applied to individual samples.\n            If not provided, uniform weights are assumed.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Subset of the training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Subset of the target values',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'classes',
              docstring:
                "Classes across all calls to partial_fit. Can be obtained by via `np.unique(y_all)`, where y_all is the target vector of the entire dataset. This argument is required for the first call to partial_fit and can be omitted in the subsequent calls. Note that y doesn't need to contain all labels in `classes`.",
              param_type: ['array'],
              expected_shape: '(n_classes,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Weights applied to individual samples. If not provided, uniform weights are assumed.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Predict class labels for samples in X.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape [n_samples]\n            Predicted class label per sample.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Predicted class label per sample.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'Mean accuracy of self.predict(X) wrt. y.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring: 'None',
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
          name: 'sparsify',
          docstring:
            'Convert coefficient matrix to sparse format.\n\n        Converts the ``coef_`` member to a scipy.sparse matrix, which for\n        L1-regularized models can be much more memory- and storage-efficient\n        than the usual numpy.ndarray representation.\n\n        The ``intercept_`` member is not converted.\n\n        Notes\n        -----\n        For non-sparse models, i.e. when there are not many zeros in ``coef_``,\n        this may actually *increase* memory usage, so use this method with\n        care. A rule of thumb is that the number of zero elements, which can\n        be computed with ``(coef_ == 0).sum()``, must be more than 50% for this\n        to provide significant benefits.\n\n        After calling this method, further fitting with the partial_fit\n        method (if any) will not work until you call densify.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'SGDRegressor',
      docstring:
        "Linear model fitted by minimizing a regularized empirical loss with SGD\n\n    SGD stands for Stochastic Gradient Descent: the gradient of the loss is\n    estimated each sample at a time and the model is updated along the way with\n    a decreasing strength schedule (aka learning rate).\n\n    The regularizer is a penalty added to the loss function that shrinks model\n    parameters towards the zero vector using either the squared euclidean norm\n    L2 or the absolute norm L1 or a combination of both (Elastic Net). If the\n    parameter update crosses the 0.0 value because of the regularizer, the\n    update is truncated to 0.0 to allow for learning sparse models and achieve\n    online feature selection.\n\n    This implementation works with data represented as dense numpy arrays of\n    floating point values for the features.\n\n    Read more in the :ref:`User Guide <sgd>`.\n\n    Parameters\n    ----------\n    loss : str, default: 'squared_loss'\n        The loss function to be used. The possible values are 'squared_loss',\n        'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'\n\n        The 'squared_loss' refers to the ordinary least squares fit.\n        'huber' modifies 'squared_loss' to focus less on getting outliers\n        correct by switching from squared to linear loss past a distance of\n        epsilon. 'epsilon_insensitive' ignores errors less than epsilon and is\n        linear past that; this is the loss function used in SVR.\n        'squared_epsilon_insensitive' is the same but becomes squared loss past\n        a tolerance of epsilon.\n\n    penalty : str, 'none', 'l2', 'l1', or 'elasticnet'\n        The penalty (aka regularization term) to be used. Defaults to 'l2'\n        which is the standard regularizer for linear SVM models. 'l1' and\n        'elasticnet' might bring sparsity to the model (feature selection)\n        not achievable with 'l2'.\n\n    alpha : float\n        Constant that multiplies the regularization term. Defaults to 0.0001\n        Also used to compute learning_rate when set to 'optimal'.\n\n    l1_ratio : float\n        The Elastic Net mixing parameter, with 0 <= l1_ratio <= 1.\n        l1_ratio=0 corresponds to L2 penalty, l1_ratio=1 to L1.\n        Defaults to 0.15.\n\n    fit_intercept : bool\n        Whether the intercept should be estimated or not. If False, the\n        data is assumed to be already centered. Defaults to True.\n\n    max_iter : int, optional (default=1000)\n        The maximum number of passes over the training data (aka epochs).\n        It only impacts the behavior in the ``fit`` method, and not the\n        `partial_fit`.\n\n        .. versionadded:: 0.19\n\n    tol : float or None, optional (default=1e-3)\n        The stopping criterion. If it is not None, the iterations will stop\n        when (loss > best_loss - tol) for ``n_iter_no_change`` consecutive\n        epochs.\n\n        .. versionadded:: 0.19\n\n    shuffle : bool, optional\n        Whether or not the training data should be shuffled after each epoch.\n        Defaults to True.\n\n    verbose : integer, optional\n        The verbosity level.\n\n    epsilon : float\n        Epsilon in the epsilon-insensitive loss functions; only if `loss` is\n        'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'.\n        For 'huber', determines the threshold at which it becomes less\n        important to get the prediction exactly right.\n        For epsilon-insensitive, any differences between the current prediction\n        and the correct label are ignored if they are less than this threshold.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    learning_rate : string, optional\n        The learning rate schedule:\n\n        'constant':\n            eta = eta0\n        'optimal':\n            eta = 1.0 / (alpha * (t + t0))\n            where t0 is chosen by a heuristic proposed by Leon Bottou.\n        'invscaling': [default]\n            eta = eta0 / pow(t, power_t)\n        'adaptive':\n            eta = eta0, as long as the training keeps decreasing.\n            Each time n_iter_no_change consecutive epochs fail to decrease the\n            training loss by tol or fail to increase validation score by tol if\n            early_stopping is True, the current learning rate is divided by 5.\n\n    eta0 : double\n        The initial learning rate for the 'constant', 'invscaling' or\n        'adaptive' schedules. The default value is 0.0 as eta0 is not used by\n        the default schedule 'optimal'.\n\n    power_t : double\n        The exponent for inverse scaling learning rate [default 0.5].\n\n    early_stopping : bool, default=False\n        Whether to use early stopping to terminate training when validation\n        score is not improving. If set to True, it will automatically set aside\n        a fraction of training data as validation and terminate\n        training when validation score is not improving by at least tol for\n        n_iter_no_change consecutive epochs.\n\n        .. versionadded:: 0.20\n\n    validation_fraction : float, default=0.1\n        The proportion of training data to set aside as validation set for\n        early stopping. Must be between 0 and 1.\n        Only used if early_stopping is True.\n\n        .. versionadded:: 0.20\n\n    n_iter_no_change : int, default=5\n        Number of iterations with no improvement to wait before early stopping.\n\n        .. versionadded:: 0.20\n\n    warm_start : bool, optional\n        When set to True, reuse the solution of the previous call to fit as\n        initialization, otherwise, just erase the previous solution.\n        See :term:`the Glossary <warm_start>`.\n\n        Repeatedly calling fit or partial_fit when warm_start is True can\n        result in a different solution than when calling fit a single time\n        because of the way the data is shuffled.\n        If a dynamic learning rate is used, the learning rate is adapted\n        depending on the number of samples already seen. Calling ``fit`` resets\n        this counter, while ``partial_fit``  will result in increasing the\n        existing counter.\n\n    average : bool or int, optional\n        When set to True, computes the averaged SGD weights and stores the\n        result in the ``coef_`` attribute. If set to an int greater than 1,\n        averaging will begin once the total number of samples seen reaches\n        average. So ``average=10`` will begin averaging after seeing 10\n        samples.\n\n    Attributes\n    ----------\n    coef_ : array, shape (n_features,)\n        Weights assigned to the features.\n\n    intercept_ : array, shape (1,)\n        The intercept term.\n\n    average_coef_ : array, shape (n_features,)\n        Averaged weights assigned to the features.\n\n    average_intercept_ : array, shape (1,)\n        The averaged intercept term.\n\n    n_iter_ : int\n        The actual number of iterations to reach the stopping criterion.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn import linear_model\n    >>> n_samples, n_features = 10, 5\n    >>> rng = np.random.RandomState(0)\n    >>> y = rng.randn(n_samples)\n    >>> X = rng.randn(n_samples, n_features)\n    >>> clf = linear_model.SGDRegressor(max_iter=1000, tol=1e-3)\n    >>> clf.fit(X, y)\n    ... #doctest: +NORMALIZE_WHITESPACE\n    SGDRegressor(alpha=0.0001, average=False, early_stopping=False,\n           epsilon=0.1, eta0=0.01, fit_intercept=True, l1_ratio=0.15,\n           learning_rate='invscaling', loss='squared_loss', max_iter=1000,\n           n_iter_no_change=5, penalty='l2', power_t=0.25, random_state=None,\n           shuffle=True, tol=0.001, validation_fraction=0.1, verbose=0,\n           warm_start=False)\n\n    See also\n    --------\n    Ridge, ElasticNet, Lasso, sklearn.svm.SVR\n\n    ",
      inputs: [
        {
          name: 'loss',
          docstring:
            "The loss function to be used. The possible values are 'squared_loss', 'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'  The 'squared_loss' refers to the ordinary least squares fit. 'huber' modifies 'squared_loss' to focus less on getting outliers correct by switching from squared to linear loss past a distance of epsilon. 'epsilon_insensitive' ignores errors less than epsilon and is linear past that; this is the loss function used in SVR. 'squared_epsilon_insensitive' is the same but becomes squared loss past a tolerance of epsilon.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: ": 'squared_loss'"
        },
        {
          name: 'penalty',
          docstring:
            "The penalty (aka regularization term) to be used. Defaults to 'l2' which is the standard regularizer for linear SVM models. 'l1' and 'elasticnet' might bring sparsity to the model (feature selection) not achievable with 'l2'.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'alpha',
          docstring:
            "Constant that multiplies the regularization term. Defaults to 0.0001 Also used to compute learning_rate when set to 'optimal'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'l1_ratio',
          docstring:
            'The Elastic Net mixing parameter, with 0 <= l1_ratio <= 1. l1_ratio=0 corresponds to L2 penalty, l1_ratio=1 to L1. Defaults to 0.15.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether the intercept should be estimated or not. If False, the data is assumed to be already centered. Defaults to True.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the ``fit`` method, and not the `partial_fit`.  .. versionadded:: 0.19',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring:
            'The stopping criterion. If it is not None, the iterations will stop when (loss > best_loss - tol) for ``n_iter_no_change`` consecutive epochs.  .. versionadded:: 0.19',
          param_type: ['float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shuffle',
          docstring:
            'Whether or not the training data should be shuffled after each epoch. Defaults to True.',
          param_type: ['bool'],
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
          default_value: null
        },
        {
          name: 'epsilon',
          docstring:
            "Epsilon in the epsilon-insensitive loss functions; only if `loss` is 'huber', 'epsilon_insensitive', or 'squared_epsilon_insensitive'. For 'huber', determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'learning_rate',
          docstring:
            "The learning rate schedule:  'constant':     eta = eta0 'optimal':     eta = 1.0 / (alpha * (t + t0))     where t0 is chosen by a heuristic proposed by Leon Bottou. 'invscaling': [default]     eta = eta0 / pow(t, power_t) 'adaptive':     eta = eta0, as long as the training keeps decreasing.     Each time n_iter_no_change consecutive epochs fail to decrease the     training loss by tol or fail to increase validation score by tol if     early_stopping is True, the current learning rate is divided by 5.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'eta0',
          docstring:
            "The initial learning rate for the 'constant', 'invscaling' or 'adaptive' schedules. The default value is 0.0 as eta0 is not used by the default schedule 'optimal'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'power_t',
          docstring:
            'The exponent for inverse scaling learning rate [default 0.5].',
          param_type: ['float'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'early_stopping',
          docstring:
            'Whether to use early stopping to terminate training when validation score is not improving. If set to True, it will automatically set aside a fraction of training data as validation and terminate training when validation score is not improving by at least tol for n_iter_no_change consecutive epochs.  .. versionadded:: 0.20',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'validation_fraction',
          docstring:
            'The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is True.  .. versionadded:: 0.20',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '=0.1'
        },
        {
          name: 'n_iter_no_change',
          docstring:
            'Number of iterations with no improvement to wait before early stopping.  .. versionadded:: 0.20',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=5'
        },
        {
          name: 'warm_start',
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.  Repeatedly calling fit or partial_fit when warm_start is True can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling ``fit`` resets this counter, while ``partial_fit``  will result in increasing the existing counter.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'average',
          docstring:
            'When set to True, computes the averaged SGD weights and stores the result in the ``coef_`` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So ``average=10`` will begin averaging after seeing 10 samples.',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring: 'Weights assigned to the features.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'The intercept term.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'average_coef_',
          docstring: 'Averaged weights assigned to the features.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'average_intercept_',
          docstring: 'The averaged intercept term.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring:
            'The actual number of iterations to reach the stopping criterion.',
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
          name: '_allocate_parameter_mem',
          docstring: 'Allocate mem for parameters; initialize if provided.',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n\n        Returns\n        -------\n        array, shape (n_samples,)\n           Predicted target values per element in X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: 'Predicted target values per element in X.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit_regressor',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_learning_rate_type',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_loss_function',
          docstring: 'Get concrete ``LossFunction`` object for str ``loss``. ',
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
          name: '_get_penalty_type',
          docstring: 'None',
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
          name: '_make_validation_score_cb',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_make_validation_split',
          docstring:
            'Split the dataset between training set and validation set.\n\n        Parameters\n        ----------\n        y : array, shape (n_samples, )\n            Target values.\n\n        Returns\n        -------\n        validation_mask : array, shape (n_samples, )\n            Equal to 1 on the validation set, 0 on the training set.\n        ',
          inputs: [
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '(n_samples, )',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'validation_mask',
              docstring:
                'Equal to 1 on the validation set, 0 on the training set.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_partial_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_params',
          docstring: 'Validate input params. ',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_sample_weight',
          docstring: 'Set the sample weight array.',
          inputs: [],
          outputs: []
        },
        {
          name: 'densify',
          docstring:
            'Convert coefficient matrix to dense array format.\n\n        Converts the ``coef_`` member (back) to a numpy.ndarray. This is the\n        default format of ``coef_`` and is required for fitting, so calling\n        this method is only required on models that have previously been\n        sparsified; otherwise, it is a no-op.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model with Stochastic Gradient Descent.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training data\n\n        y : numpy array, shape (n_samples,)\n            Target values\n\n        coef_init : array, shape (n_features,)\n            The initial coefficients to warm-start the optimization.\n\n        intercept_init : array, shape (1,)\n            The initial intercept to warm-start the optimization.\n\n        sample_weight : array-like, shape (n_samples,), optional\n            Weights applied to individual samples (1. for unweighted).\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'coef_init',
              docstring:
                'The initial coefficients to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '(n_features,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'intercept_init',
              docstring:
                'The initial intercept to warm-start the optimization.',
              param_type: ['array'],
              expected_shape: '(1,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Weights applied to individual samples (1. for unweighted).',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
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
            'Perform one epoch of stochastic gradient descent on given samples.\n\n        Internally, this method uses ``max_iter = 1``. Therefore, it is not\n        guaranteed that a minimum of the cost function is reached after calling\n        it once. Matters such as objective convergence and early stopping\n        should be handled by the user.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Subset of training data\n\n        y : numpy array of shape (n_samples,)\n            Subset of target values\n\n        sample_weight : array-like, shape (n_samples,), optional\n            Weights applied to individual samples.\n            If not provided, uniform weights are assumed.\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Subset of training data',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Subset of target values',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Weights applied to individual samples. If not provided, uniform weights are assumed.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n\n        Returns\n        -------\n        array, shape (n_samples,)\n           Predicted target values per element in X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: '',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: 'Predicted target values per element in X.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring: 'None',
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
          name: 'sparsify',
          docstring:
            'Convert coefficient matrix to sparse format.\n\n        Converts the ``coef_`` member to a scipy.sparse matrix, which for\n        L1-regularized models can be much more memory- and storage-efficient\n        than the usual numpy.ndarray representation.\n\n        The ``intercept_`` member is not converted.\n\n        Notes\n        -----\n        For non-sparse models, i.e. when there are not many zeros in ``coef_``,\n        this may actually *increase* memory usage, so use this method with\n        care. A rule of thumb is that the number of zero elements, which can\n        be computed with ``(coef_ == 0).sum()``, must be more than 50% for this\n        to provide significant benefits.\n\n        After calling this method, further fitting with the partial_fit\n        method (if any) will not work until you call densify.\n\n        Returns\n        -------\n        self : estimator\n        ',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'SquaredLoss',
      docstring: 'Squared loss traditional used in linear regression.',
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring:
            'Initialize self.  See help(type(self)) for accurate signature.',
          inputs: [],
          outputs: []
        },
        {
          name: 'dloss',
          docstring:
            'Evaluate the derivative of the loss function with respect to\n        the prediction `p`.\n\n        Parameters\n        ----------\n        p : double\n            The prediction, p = w^T x\n        y : double\n            The true value (aka target)\n        Returns\n        -------\n        double\n            The derivative of the loss function with regards to `p`.\n        ',
          inputs: [
            {
              name: 'p',
              docstring: 'The prediction, p = w^T x',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'The true value (aka target)',
              param_type: ['float'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'Returns',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: '-------',
              docstring: '',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'double',
              docstring:
                'The derivative of the loss function with regards to `p`.',
              param_type: [null],
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
      name: 'TheilSenRegressor',
      docstring:
        "Theil-Sen Estimator: robust multivariate regression model.\n\n    The algorithm calculates least square solutions on subsets with size\n    n_subsamples of the samples in X. Any value of n_subsamples between the\n    number of features and samples leads to an estimator with a compromise\n    between robustness and efficiency. Since the number of least square\n    solutions is \"n_samples choose n_subsamples\", it can be extremely large\n    and can therefore be limited with max_subpopulation. If this limit is\n    reached, the subsets are chosen randomly. In a final step, the spatial\n    median (or L1 median) is calculated of all least square solutions.\n\n    Read more in the :ref:`User Guide <theil_sen_regression>`.\n\n    Parameters\n    ----------\n    fit_intercept : boolean, optional, default True\n        Whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations.\n\n    copy_X : boolean, optional, default True\n        If True, X will be copied; else, it may be overwritten.\n\n    max_subpopulation : int, optional, default 1e4\n        Instead of computing with a set of cardinality 'n choose k', where n is\n        the number of samples and k is the number of subsamples (at least\n        number of features), consider only a stochastic subpopulation of a\n        given maximal size if 'n choose k' is larger than max_subpopulation.\n        For other than small problem sizes this parameter will determine\n        memory usage and runtime if n_subsamples is not changed.\n\n    n_subsamples : int, optional, default None\n        Number of samples to calculate the parameters. This is at least the\n        number of features (plus 1 if fit_intercept=True) and the number of\n        samples as a maximum. A lower number leads to a higher breakdown\n        point and a low efficiency while a high number leads to a low\n        breakdown point and a high efficiency. If None, take the\n        minimum number of subsamples leading to maximal robustness.\n        If n_subsamples is set to n_samples, Theil-Sen is identical to least\n        squares.\n\n    max_iter : int, optional, default 300\n        Maximum number of iterations for the calculation of spatial median.\n\n    tol : float, optional, default 1.e-3\n        Tolerance when calculating spatial median.\n\n    random_state : int, RandomState instance or None, optional, default None\n        A random number generator instance to define the state of the random\n        permutations generator.  If int, random_state is the seed used by the\n        random number generator; If RandomState instance, random_state is the\n        random number generator; If None, the random number generator is the\n        RandomState instance used by `np.random`.\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the cross validation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : boolean, optional, default False\n        Verbose mode when fitting the model.\n\n    Attributes\n    ----------\n    coef_ : array, shape = (n_features)\n        Coefficients of the regression model (median of distribution).\n\n    intercept_ : float\n        Estimated intercept of regression model.\n\n    breakdown_ : float\n        Approximated breakdown point.\n\n    n_iter_ : int\n        Number of iterations needed for the spatial median.\n\n    n_subpopulation_ : int\n        Number of combinations taken into account from 'n choose k', where n is\n        the number of samples and k is the number of subsamples.\n\n    Examples\n    --------\n    >>> from sklearn.linear_model import TheilSenRegressor\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(\n    ...     n_samples=200, n_features=2, noise=4.0, random_state=0)\n    >>> reg = TheilSenRegressor(random_state=0).fit(X, y)\n    >>> reg.score(X, y) # doctest: +ELLIPSIS\n    0.9884...\n    >>> reg.predict(X[:1,])\n    array([-31.5871...])\n\n    References\n    ----------\n    - Theil-Sen Estimators in a Multiple Linear Regression Model, 2009\n      Xin Dang, Hanxiang Peng, Xueqin Wang and Heping Zhang\n      http://home.olemiss.edu/~xdang/papers/MTSE.pdf\n    ",
      inputs: [
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'copy_X',
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_subpopulation',
          docstring:
            "Instead of computing with a set of cardinality 'n choose k', where n is the number of samples and k is the number of subsamples (at least number of features), consider only a stochastic subpopulation of a given maximal size if 'n choose k' is larger than max_subpopulation. For other than small problem sizes this parameter will determine memory usage and runtime if n_subsamples is not changed.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_subsamples',
          docstring:
            'Number of samples to calculate the parameters. This is at least the number of features (plus 1 if fit_intercept=True) and the number of samples as a maximum. A lower number leads to a higher breakdown point and a low efficiency while a high number leads to a low breakdown point and a high efficiency. If None, take the minimum number of subsamples leading to maximal robustness. If n_subsamples is set to n_samples, Theil-Sen is identical to least squares.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring:
            'Maximum number of iterations for the calculation of spatial median.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance when calculating spatial median.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'A random number generator instance to define the state of the random permutations generator.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of CPUs to use during the cross validation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Verbose mode when fitting the model.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Coefficients of the regression model (median of distribution).',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Estimated intercept of regression model.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'breakdown_',
          docstring: 'Approximated breakdown point.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'n_iter_',
          docstring: 'Number of iterations needed for the spatial median.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'n_subpopulation_',
          docstring:
            "Number of combinations taken into account from 'n choose k', where n is the number of samples and k is the number of subsamples.",
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
          name: '_check_subparams',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
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
          name: '_preprocess_data',
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: [],
          outputs: []
        },
        {
          name: '_set_intercept',
          docstring: 'Set the intercept_\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit linear model.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training data\n        y : numpy array of shape [n_samples]\n            Target values\n\n        Returns\n        -------\n        self : returns an instance of self.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target values',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
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
          name: 'predict',
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Returns predicted values.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            "Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix instead, shape = (n_samples,\n            n_samples_fitted], where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor will use\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with `metrics.r2_score`. This will influence the ``score`` method of\n        all the multioutput regressors (except for\n        `multioutput.MultiOutputRegressor`). To specify the default value\n        manually and avoid the warning, please either call `metrics.r2_score`\n        directly or make a custom scorer with `metrics.make_scorer` (the\n        built-in scorer ``'r2'`` uses ``multioutput='uniform_average'``).\n        ",
          inputs: [
            {
              name: 'X',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              param_type: ['array'],
              expected_shape: '= (n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '= (n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '= [n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: 'R^2 of self.predict(X) wrt. y.',
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
        }
      ],
      nodes: []
    }
  ],
  library: 'sklearn',
  module: 'linear_model'
}