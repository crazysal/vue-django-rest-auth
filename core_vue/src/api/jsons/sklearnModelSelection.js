export default {
  name: 'sklearn.model_selection',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'check_cv',
      docstring:
        'Input checker utility for building a cross-validator\n\n    Parameters\n    ----------\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross-validation,\n        - integer, to specify the number of folds.\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if classifier is True and ``y`` is either\n        binary or multiclass, :class:`StratifiedKFold` is used. In all other\n        cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value will change from 3-fold to 5-fold in v0.22.\n\n    y : array-like, optional\n        The target variable for supervised learning problems.\n\n    classifier : boolean, optional, default False\n        Whether the task is a classification task, in which case\n        stratified KFold will be used.\n\n    Returns\n    -------\n    checked_cv : a cross-validator instance.\n        The return value is a cross-validator which generates the train/test\n        splits via the ``split`` method.\n    ',
      inputs: [
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross-validation, - integer, to specify the number of folds. - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if classifier is True and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value will change from 3-fold to 5-fold in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'The target variable for supervised learning problems.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'classifier',
          docstring:
            'Whether the task is a classification task, in which case stratified KFold will be used.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'checked_cv',
          docstring:
            'The return value is a cross-validator which generates the train/test splits via the ``split`` method.',
          param_type: [null],
          returned: true
        }
      ]
    },
    {
      name: 'cross_val_predict',
      docstring:
        "Generate cross-validated estimates for each input data point\n\n    It is not appropriate to pass these predictions into an evaluation\n    metric. Use :func:`cross_validate` to measure generalization error.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    estimator : estimator object implementing 'fit' and 'predict'\n        The object to use to fit the data.\n\n    X : array-like\n        The data to fit. Can be, for example a list, or an array at least 2d.\n\n    y : array-like, optional, default: None\n        The target variable to try to predict in the case of\n        supervised learning.\n\n    groups : array-like, with shape (n_samples,), optional\n        Group labels for the samples used while splitting the dataset into\n        train/test set.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    n_jobs : int or None, optional (default=None)\n        The number of CPUs to use to do the computation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : integer, optional\n        The verbosity level.\n\n    fit_params : dict, optional\n        Parameters to pass to the fit method of the estimator.\n\n    pre_dispatch : int, or string, optional\n        Controls the number of jobs that get dispatched during parallel\n        execution. Reducing this number can be useful to avoid an\n        explosion of memory consumption when more jobs get dispatched\n        than CPUs can process. This parameter can be:\n\n            - None, in which case all the jobs are immediately\n              created and spawned. Use this for lightweight and\n              fast-running jobs, to avoid delays due to on-demand\n              spawning of the jobs\n\n            - An int, giving the exact number of total jobs that are\n              spawned\n\n            - A string, giving an expression as a function of n_jobs,\n              as in '2*n_jobs'\n\n    method : string, optional, default: 'predict'\n        Invokes the passed method name of the passed estimator. For\n        method='predict_proba', the columns correspond to the classes\n        in sorted order.\n\n    Returns\n    -------\n    predictions : ndarray\n        This is the result of calling ``method``\n\n    See also\n    --------\n    cross_val_score : calculate score for each CV split\n\n    cross_validate : calculate one or more scores and timings for each CV split\n\n    Notes\n    -----\n    In the case that one or more classes are absent in a training portion, a\n    default score needs to be assigned to all instances for that class if\n    ``method`` produces columns per class, as in {'decision_function',\n    'predict_proba', 'predict_log_proba'}.  For ``predict_proba`` this value is\n    0.  In order to ensure finite output, we approximate negative infinity by\n    the minimum finite float value for the dtype in other cases.\n\n    Examples\n    --------\n    >>> from sklearn import datasets, linear_model\n    >>> from sklearn.model_selection import cross_val_predict\n    >>> diabetes = datasets.load_diabetes()\n    >>> X = diabetes.data[:150]\n    >>> y = diabetes.target[:150]\n    >>> lasso = linear_model.Lasso()\n    >>> y_pred = cross_val_predict(lasso, X, y, cv=3)\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring: 'The object to use to fit the data.',
          param_type: ['object', 'dict'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'X',
          docstring:
            'The data to fit. Can be, for example a list, or an array at least 2d.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring:
            'The target variable to try to predict in the case of supervised learning.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'groups',
          docstring:
            'Group labels for the samples used while splitting the dataset into train/test set.',
          param_type: ['array'],
          expected_shape: '(n_samples,), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of CPUs to use to do the computation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
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
          default_value: null
        },
        {
          name: 'fit_params',
          docstring: 'Parameters to pass to the fit method of the estimator.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:      - None, in which case all the jobs are immediately       created and spawned. Use this for lightweight and       fast-running jobs, to avoid delays due to on-demand       spawning of the jobs      - An int, giving the exact number of total jobs that are       spawned      - A string, giving an expression as a function of n_jobs,       as in '2*n_jobs'",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'method',
          docstring:
            "Invokes the passed method name of the passed estimator. For method='predict_proba', the columns correspond to the classes in sorted order.",
          param_type: ['str', 'dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'predictions',
          docstring: 'This is the result of calling ``method``',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'cross_val_score',
      docstring:
        "Evaluate a score by cross-validation\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    estimator : estimator object implementing 'fit'\n        The object to use to fit the data.\n\n    X : array-like\n        The data to fit. Can be for example a list, or an array.\n\n    y : array-like, optional, default: None\n        The target variable to try to predict in the case of\n        supervised learning.\n\n    groups : array-like, with shape (n_samples,), optional\n        Group labels for the samples used while splitting the dataset into\n        train/test set.\n\n    scoring : string, callable or None, optional, default: None\n        A string (see model evaluation documentation) or\n        a scorer callable object / function with signature\n        ``scorer(estimator, X, y)`` which should return only\n        a single value.\n\n        Similar to :func:`cross_validate`\n        but only a single metric is permitted.\n\n        If None, the estimator's default scorer (if available) is used.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    n_jobs : int or None, optional (default=None)\n        The number of CPUs to use to do the computation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : integer, optional\n        The verbosity level.\n\n    fit_params : dict, optional\n        Parameters to pass to the fit method of the estimator.\n\n    pre_dispatch : int, or string, optional\n        Controls the number of jobs that get dispatched during parallel\n        execution. Reducing this number can be useful to avoid an\n        explosion of memory consumption when more jobs get dispatched\n        than CPUs can process. This parameter can be:\n\n            - None, in which case all the jobs are immediately\n              created and spawned. Use this for lightweight and\n              fast-running jobs, to avoid delays due to on-demand\n              spawning of the jobs\n\n            - An int, giving the exact number of total jobs that are\n              spawned\n\n            - A string, giving an expression as a function of n_jobs,\n              as in '2*n_jobs'\n\n    error_score : 'raise' | 'raise-deprecating' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised.\n        If set to 'raise-deprecating', a FutureWarning is printed before the\n        error is raised.\n        If a numeric value is given, FitFailedWarning is raised. This parameter\n        does not affect the refit step, which will always raise the error.\n        Default is 'raise-deprecating' but from version 0.22 it will change\n        to np.nan.\n\n    Returns\n    -------\n    scores : array of float, shape=(len(list(cv)),)\n        Array of scores of the estimator for each run of the cross validation.\n\n    Examples\n    --------\n    >>> from sklearn import datasets, linear_model\n    >>> from sklearn.model_selection import cross_val_score\n    >>> diabetes = datasets.load_diabetes()\n    >>> X = diabetes.data[:150]\n    >>> y = diabetes.target[:150]\n    >>> lasso = linear_model.Lasso()\n    >>> print(cross_val_score(lasso, X, y, cv=3))  # doctest: +ELLIPSIS\n    [0.33150734 0.08022311 0.03531764]\n\n    See Also\n    ---------\n    :func:`sklearn.model_selection.cross_validate`:\n        To run cross-validation on multiple metrics and also to return\n        train scores, fit times and score times.\n\n    :func:`sklearn.model_selection.cross_val_predict`:\n        Get predictions from each split of cross-validation for diagnostic\n        purposes.\n\n    :func:`sklearn.metrics.make_scorer`:\n        Make a scorer from a performance metric or loss function.\n\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring: 'The object to use to fit the data.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'X',
          docstring: 'The data to fit. Can be for example a list, or an array.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring:
            'The target variable to try to predict in the case of supervised learning.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'groups',
          docstring:
            'Group labels for the samples used while splitting the dataset into train/test set.',
          param_type: ['array'],
          expected_shape: '(n_samples,), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            "A string (see model evaluation documentation) or a scorer callable object / function with signature ``scorer(estimator, X, y)`` which should return only a single value.  Similar to :func:`cross_validate` but only a single metric is permitted.  If None, the estimator's default scorer (if available) is used.",
          param_type: ['str', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of CPUs to use to do the computation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
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
          default_value: null
        },
        {
          name: 'fit_params',
          docstring: 'Parameters to pass to the fit method of the estimator.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:      - None, in which case all the jobs are immediately       created and spawned. Use this for lightweight and       fast-running jobs, to avoid delays due to on-demand       spawning of the jobs      - An int, giving the exact number of total jobs that are       spawned      - A string, giving an expression as a function of n_jobs,       as in '2*n_jobs'",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If set to 'raise-deprecating', a FutureWarning is printed before the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise-deprecating' but from version 0.22 it will change to np.nan.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'scores',
          docstring:
            'Array of scores of the estimator for each run of the cross validation.',
          param_type: ['array', 'float', 'list'],
          returned: true
        }
      ]
    },
    {
      name: 'cross_validate',
      docstring:
        "Evaluate metric(s) by cross-validation and also record fit/score times.\n\n    Read more in the :ref:`User Guide <multimetric_cross_validation>`.\n\n    Parameters\n    ----------\n    estimator : estimator object implementing 'fit'\n        The object to use to fit the data.\n\n    X : array-like\n        The data to fit. Can be for example a list, or an array.\n\n    y : array-like, optional, default: None\n        The target variable to try to predict in the case of\n        supervised learning.\n\n    groups : array-like, with shape (n_samples,), optional\n        Group labels for the samples used while splitting the dataset into\n        train/test set.\n\n    scoring : string, callable, list/tuple, dict or None, default: None\n        A single string (see :ref:`scoring_parameter`) or a callable\n        (see :ref:`scoring`) to evaluate the predictions on the test set.\n\n        For evaluating multiple metrics, either give a list of (unique) strings\n        or a dict with names as keys and callables as values.\n\n        NOTE that when using custom scorers, each scorer should return a single\n        value. Metric functions returning a list/array of values can be wrapped\n        into multiple scorers that return one value each.\n\n        See :ref:`multimetric_grid_search` for an example.\n\n        If None, the estimator's score method is used.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    n_jobs : int or None, optional (default=None)\n        The number of CPUs to use to do the computation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : integer, optional\n        The verbosity level.\n\n    fit_params : dict, optional\n        Parameters to pass to the fit method of the estimator.\n\n    pre_dispatch : int, or string, optional\n        Controls the number of jobs that get dispatched during parallel\n        execution. Reducing this number can be useful to avoid an\n        explosion of memory consumption when more jobs get dispatched\n        than CPUs can process. This parameter can be:\n\n            - None, in which case all the jobs are immediately\n              created and spawned. Use this for lightweight and\n              fast-running jobs, to avoid delays due to on-demand\n              spawning of the jobs\n\n            - An int, giving the exact number of total jobs that are\n              spawned\n\n            - A string, giving an expression as a function of n_jobs,\n              as in '2*n_jobs'\n\n    return_train_score : boolean, default=False\n        Whether to include train scores.\n        Computing training scores is used to get insights on how different\n        parameter settings impact the overfitting/underfitting trade-off.\n        However computing the scores on the training set can be computationally\n        expensive and is not strictly required to select the parameters that\n        yield the best generalization performance.\n\n    return_estimator : boolean, default False\n        Whether to return the estimators fitted on each split.\n\n    error_score : 'raise' | 'raise-deprecating' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised.\n        If set to 'raise-deprecating', a FutureWarning is printed before the\n        error is raised.\n        If a numeric value is given, FitFailedWarning is raised. This parameter\n        does not affect the refit step, which will always raise the error.\n        Default is 'raise-deprecating' but from version 0.22 it will change\n        to np.nan.\n\n    Returns\n    -------\n    scores : dict of float arrays of shape=(n_splits,)\n        Array of scores of the estimator for each run of the cross validation.\n\n        A dict of arrays containing the score/time arrays for each scorer is\n        returned. The possible keys for this ``dict`` are:\n\n            ``test_score``\n                The score array for test scores on each cv split.\n            ``train_score``\n                The score array for train scores on each cv split.\n                This is available only if ``return_train_score`` parameter\n                is ``True``.\n            ``fit_time``\n                The time for fitting the estimator on the train\n                set for each cv split.\n            ``score_time``\n                The time for scoring the estimator on the test set for each\n                cv split. (Note time for scoring on the train set is not\n                included even if ``return_train_score`` is set to ``True``\n            ``estimator``\n                The estimator objects for each cv split.\n                This is available only if ``return_estimator`` parameter\n                is set to ``True``.\n\n    Examples\n    --------\n    >>> from sklearn import datasets, linear_model\n    >>> from sklearn.model_selection import cross_validate\n    >>> from sklearn.metrics.scorer import make_scorer\n    >>> from sklearn.metrics import confusion_matrix\n    >>> from sklearn.svm import LinearSVC\n    >>> diabetes = datasets.load_diabetes()\n    >>> X = diabetes.data[:150]\n    >>> y = diabetes.target[:150]\n    >>> lasso = linear_model.Lasso()\n\n    Single metric evaluation using ``cross_validate``\n\n    >>> cv_results = cross_validate(lasso, X, y, cv=3)\n    >>> sorted(cv_results.keys())                         # doctest: +ELLIPSIS\n    ['fit_time', 'score_time', 'test_score']\n    >>> cv_results['test_score']    # doctest: +ELLIPSIS +NORMALIZE_WHITESPACE\n    array([0.33150734, 0.08022311, 0.03531764])\n\n    Multiple metric evaluation using ``cross_validate``\n    (please refer the ``scoring`` parameter doc for more information)\n\n    >>> scores = cross_validate(lasso, X, y, cv=3,\n    ...                         scoring=('r2', 'neg_mean_squared_error'),\n    ...                         return_train_score=True)\n    >>> print(scores['test_neg_mean_squared_error'])      # doctest: +ELLIPSIS\n    [-3635.5... -3573.3... -6114.7...]\n    >>> print(scores['train_r2'])                         # doctest: +ELLIPSIS\n    [0.28010158 0.39088426 0.22784852]\n\n    See Also\n    ---------\n    :func:`sklearn.model_selection.cross_val_score`:\n        Run cross-validation for single metric evaluation.\n\n    :func:`sklearn.model_selection.cross_val_predict`:\n        Get predictions from each split of cross-validation for diagnostic\n        purposes.\n\n    :func:`sklearn.metrics.make_scorer`:\n        Make a scorer from a performance metric or loss function.\n\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring: 'The object to use to fit the data.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'X',
          docstring: 'The data to fit. Can be for example a list, or an array.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring:
            'The target variable to try to predict in the case of supervised learning.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'groups',
          docstring:
            'Group labels for the samples used while splitting the dataset into train/test set.',
          param_type: ['array'],
          expected_shape: '(n_samples,), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            "A single string (see :ref:`scoring_parameter`) or a callable (see :ref:`scoring`) to evaluate the predictions on the test set.  For evaluating multiple metrics, either give a list of (unique) strings or a dict with names as keys and callables as values.  NOTE that when using custom scorers, each scorer should return a single value. Metric functions returning a list/array of values can be wrapped into multiple scorers that return one value each.  See :ref:`multimetric_grid_search` for an example.  If None, the estimator's score method is used.",
          param_type: ['str', 'dict', 'list', 'tuple', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: ': None'
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of CPUs to use to do the computation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
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
          default_value: null
        },
        {
          name: 'fit_params',
          docstring: 'Parameters to pass to the fit method of the estimator.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:      - None, in which case all the jobs are immediately       created and spawned. Use this for lightweight and       fast-running jobs, to avoid delays due to on-demand       spawning of the jobs      - An int, giving the exact number of total jobs that are       spawned      - A string, giving an expression as a function of n_jobs,       as in '2*n_jobs'",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'return_train_score',
          docstring:
            'Whether to include train scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        },
        {
          name: 'return_estimator',
          docstring: 'Whether to return the estimators fitted on each split.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If set to 'raise-deprecating', a FutureWarning is printed before the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise-deprecating' but from version 0.22 it will change to np.nan.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'scores',
          docstring:
            'Array of scores of the estimator for each run of the cross validation.  A dict of arrays containing the score/time arrays for each scorer is returned. The possible keys for this ``dict`` are:      ``test_score``         The score array for test scores on each cv split.     ``train_score``         The score array for train scores on each cv split.         This is available only if ``return_train_score`` parameter         is ``True``.     ``fit_time``         The time for fitting the estimator on the train         set for each cv split.     ``score_time``         The time for scoring the estimator on the test set for each         cv split. (Note time for scoring on the train set is not         included even if ``return_train_score`` is set to ``True``     ``estimator``         The estimator objects for each cv split.         This is available only if ``return_estimator`` parameter         is set to ``True``.',
          param_type: ['array', 'float', 'dict'],
          returned: true
        }
      ]
    },
    {
      name: 'fit_grid_point',
      docstring:
        "Run fit on one set of parameters.\n\n    Parameters\n    ----------\n    X : array-like, sparse matrix or list\n        Input data.\n\n    y : array-like or None\n        Targets for input data.\n\n    estimator : estimator object\n        A object of that type is instantiated for each grid point.\n        This is assumed to implement the scikit-learn estimator interface.\n        Either estimator needs to provide a ``score`` function,\n        or ``scoring`` must be passed.\n\n    parameters : dict\n        Parameters to be set on estimator for this grid point.\n\n    train : ndarray, dtype int or bool\n        Boolean mask or indices for training set.\n\n    test : ndarray, dtype int or bool\n        Boolean mask or indices for test set.\n\n    scorer : callable or None\n        The scorer callable object / function must have its signature as\n        ``scorer(estimator, X, y)``.\n\n        If ``None`` the estimator's score method is used.\n\n    verbose : int\n        Verbosity level.\n\n    **fit_params : kwargs\n        Additional parameter passed to the fit function of the estimator.\n\n    error_score : 'raise' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised. If a numeric value is given,\n        FitFailedWarning is raised. This parameter does not affect the refit\n        step, which will always raise the error. Default is 'raise' but from\n        version 0.22 it will change to np.nan.\n\n    Returns\n    -------\n    score : float\n         Score of this parameter setting on given test split.\n\n    parameters : dict\n        The parameters that have been evaluated.\n\n    n_samples_test : int\n        Number of test samples in this split.\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'Input data.',
          param_type: ['array', 'list'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'Targets for input data.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'estimator',
          docstring:
            'A object of that type is instantiated for each grid point. This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a ``score`` function, or ``scoring`` must be passed.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'parameters',
          docstring: 'Parameters to be set on estimator for this grid point.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'train',
          docstring: 'Boolean mask or indices for training set.',
          param_type: ['array', 'int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'test',
          docstring: 'Boolean mask or indices for test set.',
          param_type: ['array', 'int', 'bool'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'scorer',
          docstring:
            "The scorer callable object / function must have its signature as ``scorer(estimator, X, y)``.  If ``None`` the estimator's score method is used.",
          param_type: ['callable', null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Verbosity level.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: '**fit_params',
          docstring:
            'Additional parameter passed to the fit function of the estimator.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise' but from version 0.22 it will change to np.nan.",
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'score',
          docstring: 'Score of this parameter setting on given test split.',
          param_type: ['float'],
          returned: true
        },
        {
          name: 'parameters',
          docstring: 'The parameters that have been evaluated.',
          param_type: ['dict'],
          returned: true
        },
        {
          name: 'n_samples_test',
          docstring: 'Number of test samples in this split.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'learning_curve',
      docstring:
        "Learning curve.\n\n    Determines cross-validated training and test scores for different training\n    set sizes.\n\n    A cross-validation generator splits the whole dataset k times in training\n    and test data. Subsets of the training set with varying sizes will be used\n    to train the estimator and a score for each training subset size and the\n    test set will be computed. Afterwards, the scores will be averaged over\n    all k runs for each training subset size.\n\n    Read more in the :ref:`User Guide <learning_curve>`.\n\n    Parameters\n    ----------\n    estimator : object type that implements the \"fit\" and \"predict\" methods\n        An object of that type which is cloned for each validation.\n\n    X : array-like, shape (n_samples, n_features)\n        Training vector, where n_samples is the number of samples and\n        n_features is the number of features.\n\n    y : array-like, shape (n_samples) or (n_samples, n_features), optional\n        Target relative to X for classification or regression;\n        None for unsupervised learning.\n\n    groups : array-like, with shape (n_samples,), optional\n        Group labels for the samples used while splitting the dataset into\n        train/test set.\n\n    train_sizes : array-like, shape (n_ticks,), dtype float or int\n        Relative or absolute numbers of training examples that will be used to\n        generate the learning curve. If the dtype is float, it is regarded as a\n        fraction of the maximum size of the training set (that is determined\n        by the selected validation method), i.e. it has to be within (0, 1].\n        Otherwise it is interpreted as absolute sizes of the training sets.\n        Note that for classification the number of samples usually have to\n        be big enough to contain at least one sample from each class.\n        (default: np.linspace(0.1, 1.0, 5))\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    scoring : string, callable or None, optional, default: None\n        A string (see model evaluation documentation) or\n        a scorer callable object / function with signature\n        ``scorer(estimator, X, y)``.\n\n    exploit_incremental_learning : boolean, optional, default: False\n        If the estimator supports incremental learning, this will be\n        used to speed up fitting for different training set sizes.\n\n    n_jobs : int or None, optional (default=None)\n        Number of jobs to run in parallel.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    pre_dispatch : integer or string, optional\n        Number of predispatched jobs for parallel execution (default is\n        all). The option can reduce the allocated memory. The string can\n        be an expression like '2*n_jobs'.\n\n    verbose : integer, optional\n        Controls the verbosity: the higher, the more messages.\n\n    shuffle : boolean, optional\n        Whether to shuffle training data before taking prefixes of it\n        based on``train_sizes``.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Used when ``shuffle`` is True.\n\n    error_score : 'raise' | 'raise-deprecating' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised.\n        If set to 'raise-deprecating', a FutureWarning is printed before the\n        error is raised.\n        If a numeric value is given, FitFailedWarning is raised. This parameter\n        does not affect the refit step, which will always raise the error.\n        Default is 'raise-deprecating' but from version 0.22 it will change\n        to np.nan.\n\n    Returns\n    -------\n    train_sizes_abs : array, shape (n_unique_ticks,), dtype int\n        Numbers of training examples that has been used to generate the\n        learning curve. Note that the number of ticks might be less\n        than n_ticks because duplicate entries will be removed.\n\n    train_scores : array, shape (n_ticks, n_cv_folds)\n        Scores on training sets.\n\n    test_scores : array, shape (n_ticks, n_cv_folds)\n        Scores on test set.\n\n    Notes\n    -----\n    See :ref:`examples/model_selection/plot_learning_curve.py\n    <sphx_glr_auto_examples_model_selection_plot_learning_curve.py>`\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring:
            'An object of that type which is cloned for each validation.',
          param_type: ['object', 'dict'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
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
          name: 'y',
          docstring:
            'Target relative to X for classification or regression; None for unsupervised learning.',
          param_type: ['array'],
          expected_shape: '(n_samples) or (n_samples, n_features), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'groups',
          docstring:
            'Group labels for the samples used while splitting the dataset into train/test set.',
          param_type: ['array'],
          expected_shape: '(n_samples,), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'train_sizes',
          docstring:
            'Relative or absolute numbers of training examples that will be used to generate the learning curve. If the dtype is float, it is regarded as a fraction of the maximum size of the training set (that is determined by the selected validation method), i.e. it has to be within (0, 1]. Otherwise it is interpreted as absolute sizes of the training sets. Note that for classification the number of samples usually have to be big enough to contain at least one sample from each class. (default: np.linspace(0.1, 1.0, 5))',
          param_type: ['array', 'int', 'float'],
          expected_shape: '(n_ticks,), dtype float or int',
          is_optional: false,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
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
          name: 'exploit_incremental_learning',
          docstring:
            'If the estimator supports incremental learning, this will be used to speed up fitting for different training set sizes.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of jobs to run in parallel. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Number of predispatched jobs for parallel execution (default is all). The option can reduce the allocated memory. The string can be an expression like '2*n_jobs'.",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Controls the verbosity: the higher, the more messages.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shuffle',
          docstring:
            'Whether to shuffle training data before taking prefixes of it based on``train_sizes``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``shuffle`` is True.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If set to 'raise-deprecating', a FutureWarning is printed before the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise-deprecating' but from version 0.22 it will change to np.nan.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'train_sizes_abs',
          docstring:
            'Numbers of training examples that has been used to generate the learning curve. Note that the number of ticks might be less than n_ticks because duplicate entries will be removed.',
          param_type: ['array', 'int'],
          returned: true
        },
        {
          name: 'train_scores',
          docstring: 'Scores on training sets.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'test_scores',
          docstring: 'Scores on test set.',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'permutation_test_score',
      docstring:
        "Evaluate the significance of a cross-validated score with permutations\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    estimator : estimator object implementing 'fit'\n        The object to use to fit the data.\n\n    X : array-like of shape at least 2D\n        The data to fit.\n\n    y : array-like\n        The target variable to try to predict in the case of\n        supervised learning.\n\n    groups : array-like, with shape (n_samples,), optional\n        Labels to constrain permutation within groups, i.e. ``y`` values\n        are permuted among samples with the same group identifier.\n        When not specified, ``y`` values are permuted among all samples.\n\n        When a grouped cross-validator is used, the group labels are\n        also passed on to the ``split`` method of the cross-validator. The\n        cross-validator uses them for grouping the samples  while splitting\n        the dataset into train/test set.\n\n    scoring : string, callable or None, optional, default: None\n        A single string (see :ref:`scoring_parameter`) or a callable\n        (see :ref:`scoring`) to evaluate the predictions on the test set.\n\n        If None the estimator's score method is used.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    n_permutations : integer, optional\n        Number of times to permute ``y``.\n\n    n_jobs : int or None, optional (default=None)\n        The number of CPUs to use to do the computation.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    random_state : int, RandomState instance or None, optional (default=0)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    verbose : integer, optional\n        The verbosity level.\n\n    Returns\n    -------\n    score : float\n        The true score without permuting targets.\n\n    permutation_scores : array, shape (n_permutations,)\n        The scores obtained for each permutations.\n\n    pvalue : float\n        The p-value, which approximates the probability that the score would\n        be obtained by chance. This is calculated as:\n\n        `(C + 1) / (n_permutations + 1)`\n\n        Where C is the number of permutations whose score >= the true score.\n\n        The best possible p-value is 1/(n_permutations + 1), the worst is 1.0.\n\n    Notes\n    -----\n    This function implements Test 1 in:\n\n        Ojala and Garriga. Permutation Tests for Studying Classifier\n        Performance.  The Journal of Machine Learning Research (2010)\n        vol. 11\n\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring: 'The object to use to fit the data.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'X',
          docstring: 'The data to fit.',
          param_type: ['array'],
          expected_shape: 'at least 2D',
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring:
            'The target variable to try to predict in the case of supervised learning.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'groups',
          docstring:
            'Labels to constrain permutation within groups, i.e. ``y`` values are permuted among samples with the same group identifier. When not specified, ``y`` values are permuted among all samples.  When a grouped cross-validator is used, the group labels are also passed on to the ``split`` method of the cross-validator. The cross-validator uses them for grouping the samples  while splitting the dataset into train/test set.',
          param_type: ['array'],
          expected_shape: '(n_samples,), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            "A single string (see :ref:`scoring_parameter`) or a callable (see :ref:`scoring`) to evaluate the predictions on the test set.  If None the estimator's score method is used.",
          param_type: ['str', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_permutations',
          docstring: 'Number of times to permute ``y``.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of CPUs to use to do the computation. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
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
          name: 'verbose',
          docstring: 'The verbosity level.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'score',
          docstring: 'The true score without permuting targets.',
          param_type: ['float'],
          returned: true
        },
        {
          name: 'permutation_scores',
          docstring: 'The scores obtained for each permutations.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'pvalue',
          docstring:
            'The p-value, which approximates the probability that the score would be obtained by chance. This is calculated as:  `(C + 1) / (n_permutations + 1)`  Where C is the number of permutations whose score >= the true score.  The best possible p-value is 1/(n_permutations + 1), the worst is 1.0.',
          param_type: ['float'],
          returned: true
        }
      ]
    },
    {
      name: 'train_test_split',
      docstring:
        'Split arrays or matrices into random train and test subsets\n\n    Quick utility that wraps input validation and\n    ``next(ShuffleSplit().split(X, y))`` and application to input data\n    into a single call for splitting (and optionally subsampling) data in a\n    oneliner.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    *arrays : sequence of indexables with same length / shape[0]\n        Allowed inputs are lists, numpy arrays, scipy-sparse\n        matrices or pandas dataframes.\n\n    test_size : float, int or None, optional (default=None)\n        If float, should be between 0.0 and 1.0 and represent the proportion\n        of the dataset to include in the test split. If int, represents the\n        absolute number of test samples. If None, the value is set to the\n        complement of the train size. If ``train_size`` is also None, it will\n        be set to 0.25.\n\n    train_size : float, int, or None, (default=None)\n        If float, should be between 0.0 and 1.0 and represent the\n        proportion of the dataset to include in the train split. If\n        int, represents the absolute number of train samples. If None,\n        the value is automatically set to the complement of the test size.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    shuffle : boolean, optional (default=True)\n        Whether or not to shuffle the data before splitting. If shuffle=False\n        then stratify must be None.\n\n    stratify : array-like or None (default=None)\n        If not None, data is split in a stratified fashion, using this as\n        the class labels.\n\n    Returns\n    -------\n    splitting : list, length=2 * len(arrays)\n        List containing train-test split of inputs.\n\n        .. versionadded:: 0.16\n            If the input is sparse, the output will be a\n            ``scipy.sparse.csr_matrix``. Else, output type is the same as the\n            input type.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import train_test_split\n    >>> X, y = np.arange(10).reshape((5, 2)), range(5)\n    >>> X\n    array([[0, 1],\n           [2, 3],\n           [4, 5],\n           [6, 7],\n           [8, 9]])\n    >>> list(y)\n    [0, 1, 2, 3, 4]\n\n    >>> X_train, X_test, y_train, y_test = train_test_split(\n    ...     X, y, test_size=0.33, random_state=42)\n    ...\n    >>> X_train\n    array([[4, 5],\n           [0, 1],\n           [6, 7]])\n    >>> y_train\n    [2, 0, 3]\n    >>> X_test\n    array([[2, 3],\n           [8, 9]])\n    >>> y_test\n    [1, 4]\n\n    >>> train_test_split(y, shuffle=False)\n    [[0, 1, 2], [3, 4]]\n\n    ',
      inputs: [
        {
          name: '*arrays',
          docstring:
            'Allowed inputs are lists, numpy arrays, scipy-sparse matrices or pandas dataframes.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'test_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If None, the value is set to the complement of the train size. If ``train_size`` is also None, it will be set to 0.25.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'train_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If None, the value is automatically set to the complement of the test size.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None)'
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
          name: 'shuffle',
          docstring:
            'Whether or not to shuffle the data before splitting. If shuffle=False then stratify must be None.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'stratify',
          docstring:
            'If not None, data is split in a stratified fashion, using this as the class labels.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None)'
        }
      ],
      outputs: [
        {
          name: 'splitting',
          docstring:
            'List containing train-test split of inputs.  .. versionadded:: 0.16     If the input is sparse, the output will be a     ``scipy.sparse.csr_matrix``. Else, output type is the same as the     input type.',
          param_type: ['array', 'list'],
          returned: true
        }
      ]
    },
    {
      name: 'validation_curve',
      docstring:
        "Validation curve.\n\n    Determine training and test scores for varying parameter values.\n\n    Compute scores for an estimator with different values of a specified\n    parameter. This is similar to grid search with one parameter. However, this\n    will also compute training scores and is merely a utility for plotting the\n    results.\n\n    Read more in the :ref:`User Guide <learning_curve>`.\n\n    Parameters\n    ----------\n    estimator : object type that implements the \"fit\" and \"predict\" methods\n        An object of that type which is cloned for each validation.\n\n    X : array-like, shape (n_samples, n_features)\n        Training vector, where n_samples is the number of samples and\n        n_features is the number of features.\n\n    y : array-like, shape (n_samples) or (n_samples, n_features), optional\n        Target relative to X for classification or regression;\n        None for unsupervised learning.\n\n    param_name : string\n        Name of the parameter that will be varied.\n\n    param_range : array-like, shape (n_values,)\n        The values of the parameter that will be evaluated.\n\n    groups : array-like, with shape (n_samples,), optional\n        Group labels for the samples used while splitting the dataset into\n        train/test set.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    scoring : string, callable or None, optional, default: None\n        A string (see model evaluation documentation) or\n        a scorer callable object / function with signature\n        ``scorer(estimator, X, y)``.\n\n    n_jobs : int or None, optional (default=None)\n        Number of jobs to run in parallel.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    pre_dispatch : integer or string, optional\n        Number of predispatched jobs for parallel execution (default is\n        all). The option can reduce the allocated memory. The string can\n        be an expression like '2*n_jobs'.\n\n    verbose : integer, optional\n        Controls the verbosity: the higher, the more messages.\n\n    error_score : 'raise' | 'raise-deprecating' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised.\n        If set to 'raise-deprecating', a FutureWarning is printed before the\n        error is raised.\n        If a numeric value is given, FitFailedWarning is raised. This parameter\n        does not affect the refit step, which will always raise the error.\n        Default is 'raise-deprecating' but from version 0.22 it will change\n        to np.nan.\n\n    Returns\n    -------\n    train_scores : array, shape (n_ticks, n_cv_folds)\n        Scores on training sets.\n\n    test_scores : array, shape (n_ticks, n_cv_folds)\n        Scores on test set.\n\n    Notes\n    -----\n    See :ref:`sphx_glr_auto_examples_model_selection_plot_validation_curve.py`\n\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring:
            'An object of that type which is cloned for each validation.',
          param_type: ['object', 'dict'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
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
          name: 'y',
          docstring:
            'Target relative to X for classification or regression; None for unsupervised learning.',
          param_type: ['array'],
          expected_shape: '(n_samples) or (n_samples, n_features), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'param_name',
          docstring: 'Name of the parameter that will be varied.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'param_range',
          docstring: 'The values of the parameter that will be evaluated.',
          param_type: ['array'],
          expected_shape: '(n_values,)',
          is_optional: false,
          default_value: null
        },
        {
          name: 'groups',
          docstring:
            'Group labels for the samples used while splitting the dataset into train/test set.',
          param_type: ['array'],
          expected_shape: '(n_samples,), optional',
          is_optional: true,
          default_value: null
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
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
          name: 'n_jobs',
          docstring:
            'Number of jobs to run in parallel. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Number of predispatched jobs for parallel execution (default is all). The option can reduce the allocated memory. The string can be an expression like '2*n_jobs'.",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring: 'Controls the verbosity: the higher, the more messages.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If set to 'raise-deprecating', a FutureWarning is printed before the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise-deprecating' but from version 0.22 it will change to np.nan.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'train_scores',
          docstring: 'Scores on training sets.',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'test_scores',
          docstring: 'Scores on test set.',
          param_type: ['array'],
          returned: true
        }
      ]
    }
  ],
  nodes: [
    {
      name: 'BaseCrossValidator',
      docstring:
        'Base class for all cross-validators\n\n    Implementations must define `_iter_test_masks` or `_iter_test_indices`.\n    ',
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
          name: '_iter_test_indices',
          docstring: 'Generates integer indices corresponding to test sets.',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring:
            'Generates boolean masks corresponding to test sets.\n\n        By default, delegates to _iter_test_indices(X, y, groups)\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator',
          inputs: [],
          outputs: []
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, of length n_samples\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'GridSearchCV',
      docstring:
        "Exhaustive search over specified parameter values for an estimator.\n\n    Important members are fit, predict.\n\n    GridSearchCV implements a \"fit\" and a \"score\" method.\n    It also implements \"predict\", \"predict_proba\", \"decision_function\",\n    \"transform\" and \"inverse_transform\" if they are implemented in the\n    estimator used.\n\n    The parameters of the estimator used to apply these methods are optimized\n    by cross-validated grid-search over a parameter grid.\n\n    Read more in the :ref:`User Guide <grid_search>`.\n\n    Parameters\n    ----------\n    estimator : estimator object.\n        This is assumed to implement the scikit-learn estimator interface.\n        Either estimator needs to provide a ``score`` function,\n        or ``scoring`` must be passed.\n\n    param_grid : dict or list of dictionaries\n        Dictionary with parameters names (string) as keys and lists of\n        parameter settings to try as values, or a list of such\n        dictionaries, in which case the grids spanned by each dictionary\n        in the list are explored. This enables searching over any sequence\n        of parameter settings.\n\n    scoring : string, callable, list/tuple, dict or None, default: None\n        A single string (see :ref:`scoring_parameter`) or a callable\n        (see :ref:`scoring`) to evaluate the predictions on the test set.\n\n        For evaluating multiple metrics, either give a list of (unique) strings\n        or a dict with names as keys and callables as values.\n\n        NOTE that when using custom scorers, each scorer should return a single\n        value. Metric functions returning a list/array of values can be wrapped\n        into multiple scorers that return one value each.\n\n        See :ref:`multimetric_grid_search` for an example.\n\n        If None, the estimator's score method is used.\n\n    n_jobs : int or None, optional (default=None)\n        Number of jobs to run in parallel.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    pre_dispatch : int, or string, optional\n        Controls the number of jobs that get dispatched during parallel\n        execution. Reducing this number can be useful to avoid an\n        explosion of memory consumption when more jobs get dispatched\n        than CPUs can process. This parameter can be:\n\n            - None, in which case all the jobs are immediately\n              created and spawned. Use this for lightweight and\n              fast-running jobs, to avoid delays due to on-demand\n              spawning of the jobs\n\n            - An int, giving the exact number of total jobs that are\n              spawned\n\n            - A string, giving an expression as a function of n_jobs,\n              as in '2*n_jobs'\n\n    iid : boolean, default='warn'\n        If True, return the average score across folds, weighted by the number\n        of samples in each test set. In this case, the data is assumed to be\n        identically distributed across the folds, and the loss minimized is\n        the total loss per sample, and not the mean loss across the folds. If\n        False, return the average score across folds. Default is True, but\n        will change to False in version 0.22, to correspond to the standard\n        definition of cross-validation.\n\n        .. versionchanged:: 0.20\n            Parameter ``iid`` will change from True to False by default in\n            version 0.22, and will be removed in 0.24.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    refit : boolean, string, or callable, default=True\n        Refit an estimator using the best found parameters on the whole\n        dataset.\n\n        For multiple metric evaluation, this needs to be a string denoting the\n        scorer that would be used to find the best parameters for refitting\n        the estimator at the end.\n\n        Where there are considerations other than maximum score in\n        choosing a best estimator, ``refit`` can be set to a function which\n        returns the selected ``best_index_`` given ``cv_results_``.\n\n        The refitted estimator is made available at the ``best_estimator_``\n        attribute and permits using ``predict`` directly on this\n        ``GridSearchCV`` instance.\n\n        Also for multiple metric evaluation, the attributes ``best_index_``,\n        ``best_score_`` and ``best_params_`` will only be available if\n        ``refit`` is set and all of them will be determined w.r.t this specific\n        scorer. ``best_score_`` is not returned if refit is callable.\n\n        See ``scoring`` parameter to know more about multiple metric\n        evaluation.\n\n        .. versionchanged:: 0.20\n            Support for callable added.\n\n    verbose : integer\n        Controls the verbosity: the higher, the more messages.\n\n    error_score : 'raise' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised. If a numeric value is given,\n        FitFailedWarning is raised. This parameter does not affect the refit\n        step, which will always raise the error. Default is 'raise' but from\n        version 0.22 it will change to np.nan.\n\n    return_train_score : boolean, default=False\n        If ``False``, the ``cv_results_`` attribute will not include training\n        scores.\n        Computing training scores is used to get insights on how different\n        parameter settings impact the overfitting/underfitting trade-off.\n        However computing the scores on the training set can be computationally\n        expensive and is not strictly required to select the parameters that\n        yield the best generalization performance.\n\n\n    Examples\n    --------\n    >>> from sklearn import svm, datasets\n    >>> from sklearn.model_selection import GridSearchCV\n    >>> iris = datasets.load_iris()\n    >>> parameters = {'kernel':('linear', 'rbf'), 'C':[1, 10]}\n    >>> svc = svm.SVC(gamma=\"scale\")\n    >>> clf = GridSearchCV(svc, parameters, cv=5)\n    >>> clf.fit(iris.data, iris.target)\n    ...                             # doctest: +NORMALIZE_WHITESPACE +ELLIPSIS\n    GridSearchCV(cv=5, error_score=...,\n           estimator=SVC(C=1.0, cache_size=..., class_weight=..., coef0=...,\n                         decision_function_shape='ovr', degree=..., gamma=...,\n                         kernel='rbf', max_iter=-1, probability=False,\n                         random_state=None, shrinking=True, tol=...,\n                         verbose=False),\n           iid=..., n_jobs=None,\n           param_grid=..., pre_dispatch=..., refit=..., return_train_score=...,\n           scoring=..., verbose=...)\n    >>> sorted(clf.cv_results_.keys())\n    ...                             # doctest: +NORMALIZE_WHITESPACE +ELLIPSIS\n    ['mean_fit_time', 'mean_score_time', 'mean_test_score',...\n     'param_C', 'param_kernel', 'params',...\n     'rank_test_score', 'split0_test_score',...\n     'split2_test_score', ...\n     'std_fit_time', 'std_score_time', 'std_test_score']\n\n    Attributes\n    ----------\n    cv_results_ : dict of numpy (masked) ndarrays\n        A dict with keys as column headers and values as columns, that can be\n        imported into a pandas ``DataFrame``.\n\n        For instance the below given table\n\n        +------------+-----------+------------+-----------------+---+---------+\n        |param_kernel|param_gamma|param_degree|split0_test_score|...|rank_t...|\n        +============+===========+============+=================+===+=========+\n        |  'poly'    |     --    |      2     |       0.80      |...|    2    |\n        +------------+-----------+------------+-----------------+---+---------+\n        |  'poly'    |     --    |      3     |       0.70      |...|    4    |\n        +------------+-----------+------------+-----------------+---+---------+\n        |  'rbf'     |     0.1   |     --     |       0.80      |...|    3    |\n        +------------+-----------+------------+-----------------+---+---------+\n        |  'rbf'     |     0.2   |     --     |       0.93      |...|    1    |\n        +------------+-----------+------------+-----------------+---+---------+\n\n        will be represented by a ``cv_results_`` dict of::\n\n            {\n            'param_kernel': masked_array(data = ['poly', 'poly', 'rbf', 'rbf'],\n                                         mask = [False False False False]...)\n            'param_gamma': masked_array(data = [-- -- 0.1 0.2],\n                                        mask = [ True  True False False]...),\n            'param_degree': masked_array(data = [2.0 3.0 -- --],\n                                         mask = [False False  True  True]...),\n            'split0_test_score'  : [0.80, 0.70, 0.80, 0.93],\n            'split1_test_score'  : [0.82, 0.50, 0.70, 0.78],\n            'mean_test_score'    : [0.81, 0.60, 0.75, 0.85],\n            'std_test_score'     : [0.01, 0.10, 0.05, 0.08],\n            'rank_test_score'    : [2, 4, 3, 1],\n            'split0_train_score' : [0.80, 0.92, 0.70, 0.93],\n            'split1_train_score' : [0.82, 0.55, 0.70, 0.87],\n            'mean_train_score'   : [0.81, 0.74, 0.70, 0.90],\n            'std_train_score'    : [0.01, 0.19, 0.00, 0.03],\n            'mean_fit_time'      : [0.73, 0.63, 0.43, 0.49],\n            'std_fit_time'       : [0.01, 0.02, 0.01, 0.01],\n            'mean_score_time'    : [0.01, 0.06, 0.04, 0.04],\n            'std_score_time'     : [0.00, 0.00, 0.00, 0.01],\n            'params'             : [{'kernel': 'poly', 'degree': 2}, ...],\n            }\n\n        NOTE\n\n        The key ``'params'`` is used to store a list of parameter\n        settings dicts for all the parameter candidates.\n\n        The ``mean_fit_time``, ``std_fit_time``, ``mean_score_time`` and\n        ``std_score_time`` are all in seconds.\n\n        For multi-metric evaluation, the scores for all the scorers are\n        available in the ``cv_results_`` dict at the keys ending with that\n        scorer's name (``'_<scorer_name>'``) instead of ``'_score'`` shown\n        above. ('split0_test_precision', 'mean_train_precision' etc.)\n\n    best_estimator_ : estimator or dict\n        Estimator that was chosen by the search, i.e. estimator\n        which gave highest score (or smallest loss if specified)\n        on the left out data. Not available if ``refit=False``.\n\n        See ``refit`` parameter for more information on allowed values.\n\n    best_score_ : float\n        Mean cross-validated score of the best_estimator\n\n        For multi-metric evaluation, this is present only if ``refit`` is\n        specified.\n\n    best_params_ : dict\n        Parameter setting that gave the best results on the hold out data.\n\n        For multi-metric evaluation, this is present only if ``refit`` is\n        specified.\n\n    best_index_ : int\n        The index (of the ``cv_results_`` arrays) which corresponds to the best\n        candidate parameter setting.\n\n        The dict at ``search.cv_results_['params'][search.best_index_]`` gives\n        the parameter setting for the best model, that gives the highest\n        mean score (``search.best_score_``).\n\n        For multi-metric evaluation, this is present only if ``refit`` is\n        specified.\n\n    scorer_ : function or a dict\n        Scorer function used on the held out data to choose the best\n        parameters for the model.\n\n        For multi-metric evaluation, this attribute holds the validated\n        ``scoring`` dict which maps the scorer key to the scorer callable.\n\n    n_splits_ : int\n        The number of cross-validation splits (folds/iterations).\n\n    refit_time_ : float\n        Seconds used for refitting the best model on the whole dataset.\n\n        This is present only if ``refit`` is not False.\n\n    Notes\n    -----\n    The parameters selected are those that maximize the score of the left out\n    data, unless an explicit score is passed in which case it is used instead.\n\n    If `n_jobs` was set to a value higher than one, the data is copied for each\n    point in the grid (and not `n_jobs` times). This is done for efficiency\n    reasons if individual jobs take very little time, but may raise errors if\n    the dataset is large and not enough memory is available.  A workaround in\n    this case is to set `pre_dispatch`. Then, the memory is copied only\n    `pre_dispatch` many times. A reasonable value for `pre_dispatch` is `2 *\n    n_jobs`.\n\n    See Also\n    ---------\n    :class:`ParameterGrid`:\n        generates all the combinations of a hyperparameter grid.\n\n    :func:`sklearn.model_selection.train_test_split`:\n        utility function to split the data into a development set usable\n        for fitting a GridSearchCV instance and an evaluation set for\n        its final evaluation.\n\n    :func:`sklearn.metrics.make_scorer`:\n        Make a scorer from a performance metric or loss function.\n\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring:
            'This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a ``score`` function, or ``scoring`` must be passed.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'param_grid',
          docstring:
            'Dictionary with parameters names (string) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.',
          param_type: ['dict', 'list'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            "A single string (see :ref:`scoring_parameter`) or a callable (see :ref:`scoring`) to evaluate the predictions on the test set.  For evaluating multiple metrics, either give a list of (unique) strings or a dict with names as keys and callables as values.  NOTE that when using custom scorers, each scorer should return a single value. Metric functions returning a list/array of values can be wrapped into multiple scorers that return one value each.  See :ref:`multimetric_grid_search` for an example.  If None, the estimator's score method is used.",
          param_type: ['str', 'dict', 'list', 'tuple', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: ': None'
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of jobs to run in parallel. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:      - None, in which case all the jobs are immediately       created and spawned. Use this for lightweight and       fast-running jobs, to avoid delays due to on-demand       spawning of the jobs      - An int, giving the exact number of total jobs that are       spawned      - A string, giving an expression as a function of n_jobs,       as in '2*n_jobs'",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'iid',
          docstring:
            'If True, return the average score across folds, weighted by the number of samples in each test set. In this case, the data is assumed to be identically distributed across the folds, and the loss minimized is the total loss per sample, and not the mean loss across the folds. If False, return the average score across folds. Default is True, but will change to False in version 0.22, to correspond to the standard definition of cross-validation.  .. versionchanged:: 0.20     Parameter ``iid`` will change from True to False by default in     version 0.22, and will be removed in 0.24.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: "='warn'"
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'refit',
          docstring:
            'Refit an estimator using the best found parameters on the whole dataset.  For multiple metric evaluation, this needs to be a string denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.  Where there are considerations other than maximum score in choosing a best estimator, ``refit`` can be set to a function which returns the selected ``best_index_`` given ``cv_results_``.  The refitted estimator is made available at the ``best_estimator_`` attribute and permits using ``predict`` directly on this ``GridSearchCV`` instance.  Also for multiple metric evaluation, the attributes ``best_index_``, ``best_score_`` and ``best_params_`` will only be available if ``refit`` is set and all of them will be determined w.r.t this specific scorer. ``best_score_`` is not returned if refit is callable.  See ``scoring`` parameter to know more about multiple metric evaluation.  .. versionchanged:: 0.20     Support for callable added.',
          param_type: ['bool', 'str', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'verbose',
          docstring: 'Controls the verbosity: the higher, the more messages.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise' but from version 0.22 it will change to np.nan.",
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_train_score',
          docstring:
            'If ``False``, the ``cv_results_`` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        }
      ],
      outputs: [
        {
          name: 'cv_results_',
          docstring:
            "A dict with keys as column headers and values as columns, that can be imported into a pandas ``DataFrame``.  For instance the below given table  +------------+-----------+------------+-----------------+---+---------+ |param_kernel|param_gamma|param_degree|split0_test_score|...|rank_t...| +============+===========+============+=================+===+=========+ |  'poly'    |     --    |      2     |       0.80      |...|    2    | +------------+-----------+------------+-----------------+---+---------+ |  'poly'    |     --    |      3     |       0.70      |...|    4    | +------------+-----------+------------+-----------------+---+---------+ |  'rbf'     |     0.1   |     --     |       0.80      |...|    3    | +------------+-----------+------------+-----------------+---+---------+ |  'rbf'     |     0.2   |     --     |       0.93      |...|    1    | +------------+-----------+------------+-----------------+---+---------+  will be represented by a ``cv_results_`` dict of::      {     'param_kernel': masked_array(data = ['poly', 'poly', 'rbf', 'rbf'],                                  mask = [False False False False]...)     'param_gamma': masked_array(data = [-- -- 0.1 0.2],                                 mask = [ True  True False False]...),     'param_degree': masked_array(data = [2.0 3.0 -- --],                                  mask = [False False  True  True]...),     'split0_test_score'  : [0.80, 0.70, 0.80, 0.93],     'split1_test_score'  : [0.82, 0.50, 0.70, 0.78],     'mean_test_score'    : [0.81, 0.60, 0.75, 0.85],     'std_test_score'     : [0.01, 0.10, 0.05, 0.08],     'rank_test_score'    : [2, 4, 3, 1],     'split0_train_score' : [0.80, 0.92, 0.70, 0.93],     'split1_train_score' : [0.82, 0.55, 0.70, 0.87],     'mean_train_score'   : [0.81, 0.74, 0.70, 0.90],     'std_train_score'    : [0.01, 0.19, 0.00, 0.03],     'mean_fit_time'      : [0.73, 0.63, 0.43, 0.49],     'std_fit_time'       : [0.01, 0.02, 0.01, 0.01],     'mean_score_time'    : [0.01, 0.06, 0.04, 0.04],     'std_score_time'     : [0.00, 0.00, 0.00, 0.01],     'params'             : [{'kernel': 'poly', 'degree': 2}, ...],     }  NOTE  The key ``'params'`` is used to store a list of parameter settings dicts for all the parameter candidates.  The ``mean_fit_time``, ``std_fit_time``, ``mean_score_time`` and ``std_score_time`` are all in seconds.  For multi-metric evaluation, the scores for all the scorers are available in the ``cv_results_`` dict at the keys ending with that scorer's name (``'_<scorer_name>'``) instead of ``'_score'`` shown above. ('split0_test_precision', 'mean_train_precision' etc.)",
          param_type: ['array', 'dict'],
          returned: false
        },
        {
          name: 'best_estimator_',
          docstring:
            'Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if ``refit=False``.  See ``refit`` parameter for more information on allowed values.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_score_',
          docstring:
            'Mean cross-validated score of the best_estimator  For multi-metric evaluation, this is present only if ``refit`` is specified.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'best_params_',
          docstring:
            'Parameter setting that gave the best results on the hold out data.  For multi-metric evaluation, this is present only if ``refit`` is specified.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_index_',
          docstring:
            "The index (of the ``cv_results_`` arrays) which corresponds to the best candidate parameter setting.  The dict at ``search.cv_results_['params'][search.best_index_]`` gives the parameter setting for the best model, that gives the highest mean score (``search.best_score_``).  For multi-metric evaluation, this is present only if ``refit`` is specified.",
          param_type: ['int'],
          returned: false
        },
        {
          name: 'scorer_',
          docstring:
            'Scorer function used on the held out data to choose the best parameters for the model.  For multi-metric evaluation, this attribute holds the validated ``scoring`` dict which maps the scorer key to the scorer callable.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'n_splits_',
          docstring:
            'The number of cross-validation splits (folds/iterations).',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'refit_time_',
          docstring:
            'Seconds used for refitting the best model on the whole dataset.  This is present only if ``refit`` is not False.',
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
          name: '_check_is_fitted',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_format_results',
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
          name: '_run_search',
          docstring: 'Search all candidates in param_grid',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Call decision_function on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``decision_function``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Run fit with all sets of parameters.\n\n        Parameters\n        ----------\n\n        X : array-like, shape = [n_samples, n_features]\n            Training vector, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        **fit_params : dict of string -> object\n            Parameters passed to the ``fit`` method of the estimator\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape:
                '= [n_samples] or [n_samples, n_output], optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: '**fit_params',
              docstring:
                'Parameters passed to the ``fit`` method of the estimator',
              param_type: ['object', 'str', 'dict'],
              expected_shape: null,
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
          name: 'inverse_transform',
          docstring:
            'Call inverse_transform on the estimator with the best found params.\n\n        Only available if the underlying estimator implements\n        ``inverse_transform`` and ``refit=True``.\n\n        Parameters\n        ----------\n        Xt : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'Xt',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Call predict on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_log_proba',
          docstring:
            'Call predict_log_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_log_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_proba',
          docstring:
            'Call predict_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'score',
          docstring:
            'Returns the score on the given data, if the estimator has been refit.\n\n        This uses the score defined by ``scoring`` where provided, and the\n        ``best_estimator_.score`` method otherwise.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n            Input data, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        Returns\n        -------\n        score : float\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Input data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape:
                '= [n_samples] or [n_samples, n_output], optional',
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
            'Call transform on the estimator with the best found parameters.\n\n        Only available if the underlying estimator supports ``transform`` and\n        ``refit=True``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
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
      name: 'GroupKFold',
      docstring:
        'K-fold iterator variant with non-overlapping groups.\n\n    The same group will not appear in two different folds (the number of\n    distinct groups has to be at least equal to the number of folds).\n\n    The folds are approximately balanced in the sense that the number of\n    distinct groups is approximately the same in each fold.\n\n    Parameters\n    ----------\n    n_splits : int, default=3\n        Number of folds. Must be at least 2.\n\n        .. versionchanged:: 0.20\n            ``n_splits`` default value will change from 3 to 5 in v0.22.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import GroupKFold\n    >>> X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])\n    >>> y = np.array([1, 2, 3, 4])\n    >>> groups = np.array([0, 0, 2, 2])\n    >>> group_kfold = GroupKFold(n_splits=2)\n    >>> group_kfold.get_n_splits(X, y, groups)\n    2\n    >>> print(group_kfold)\n    GroupKFold(n_splits=2)\n    >>> for train_index, test_index in group_kfold.split(X, y, groups):\n    ...     print("TRAIN:", train_index, "TEST:", test_index)\n    ...     X_train, X_test = X[train_index], X[test_index]\n    ...     y_train, y_test = y[train_index], y[test_index]\n    ...     print(X_train, X_test, y_train, y_test)\n    ...\n    TRAIN: [0 1] TEST: [2 3]\n    [[1 2]\n     [3 4]] [[5 6]\n     [7 8]] [1 2] [3 4]\n    TRAIN: [2 3] TEST: [0 1]\n    [[5 6]\n     [7 8]] [[1 2]\n     [3 4]] [3 4] [1 2]\n\n    See also\n    --------\n    LeaveOneGroupOut\n        For splitting the data according to explicit domain-specific\n        stratification of the dataset.\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring:
            'Number of folds. Must be at least 2.  .. versionchanged:: 0.20     ``n_splits`` default value will change from 3 to 5 in v0.22.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=3'
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
          name: '_iter_test_indices',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring:
            'Generates boolean masks corresponding to test sets.\n\n        By default, delegates to _iter_test_indices(X, y, groups)\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, shape (n_samples,), optional\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,)\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'GroupShuffleSplit',
      docstring:
        'Shuffle-Group(s)-Out cross-validation iterator\n\n    Provides randomized train/test indices to split data according to a\n    third-party provided group. This group information can be used to encode\n    arbitrary domain specific stratifications of the samples as integers.\n\n    For instance the groups could be the year of collection of the samples\n    and thus allow for cross-validation against time-based splits.\n\n    The difference between LeavePGroupsOut and GroupShuffleSplit is that\n    the former generates splits using all subsets of size ``p`` unique groups,\n    whereas GroupShuffleSplit generates a user-determined number of random\n    test splits, each with a user-determined fraction of unique groups.\n\n    For example, a less computationally intensive alternative to\n    ``LeavePGroupsOut(p=10)`` would be\n    ``GroupShuffleSplit(test_size=10, n_splits=100)``.\n\n    Note: The parameters ``test_size`` and ``train_size`` refer to groups, and\n    not to samples, as in ShuffleSplit.\n\n\n    Parameters\n    ----------\n    n_splits : int (default 5)\n        Number of re-shuffling & splitting iterations.\n\n    test_size : float, int, None, optional (default=None)\n        If float, should be between 0.0 and 1.0 and represent the proportion\n        of the dataset to include in the test split. If int, represents the\n        absolute number of test groups. If None, the value is set to the\n        complement of the train size. If ``train_size`` is also None, it will\n        be set to 0.2.\n\n    train_size : float, int, or None, default is None\n        If float, should be between 0.0 and 1.0 and represent the\n        proportion of the groups to include in the train split. If\n        int, represents the absolute number of train groups. If None,\n        the value is automatically set to the complement of the test size.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring: 'Number of re-shuffling & splitting iterations.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '5)'
        },
        {
          name: 'test_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test groups. If None, the value is set to the complement of the train size. If ``train_size`` is also None, it will be set to 0.2.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'train_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the groups to include in the train split. If int, represents the absolute number of train groups. If None, the value is automatically set to the complement of the test size.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'is None'
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
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_indices',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, shape (n_samples,), optional\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,)\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n\n        Notes\n        -----\n        Randomized CV splitters may return different results for each call of\n        split. You can make the results identical by setting ``random_state``\n        to an integer.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'KFold',
      docstring:
        'K-Folds cross-validator\n\n    Provides train/test indices to split data in train/test sets. Split\n    dataset into k consecutive folds (without shuffling by default).\n\n    Each fold is then used once as a validation while the k - 1 remaining\n    folds form the training set.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_splits : int, default=3\n        Number of folds. Must be at least 2.\n\n        .. versionchanged:: 0.20\n            ``n_splits`` default value will change from 3 to 5 in v0.22.\n\n    shuffle : boolean, optional\n        Whether to shuffle the data before splitting into batches.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Used when ``shuffle`` == True.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import KFold\n    >>> X = np.array([[1, 2], [3, 4], [1, 2], [3, 4]])\n    >>> y = np.array([1, 2, 3, 4])\n    >>> kf = KFold(n_splits=2)\n    >>> kf.get_n_splits(X)\n    2\n    >>> print(kf)  # doctest: +NORMALIZE_WHITESPACE\n    KFold(n_splits=2, random_state=None, shuffle=False)\n    >>> for train_index, test_index in kf.split(X):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    TRAIN: [2 3] TEST: [0 1]\n    TRAIN: [0 1] TEST: [2 3]\n\n    Notes\n    -----\n    The first ``n_samples % n_splits`` folds have size\n    ``n_samples // n_splits + 1``, other folds have size\n    ``n_samples // n_splits``, where ``n_samples`` is the number of samples.\n\n    Randomized CV splitters may return different results for each call of\n    split. You can make the results identical by setting ``random_state``\n    to an integer.\n\n    See also\n    --------\n    StratifiedKFold\n        Takes group information into account to avoid building folds with\n        imbalanced class distributions (for binary or multiclass\n        classification tasks).\n\n    GroupKFold: K-fold iterator variant with non-overlapping groups.\n\n    RepeatedKFold: Repeats K-Fold n times.\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring:
            'Number of folds. Must be at least 2.  .. versionchanged:: 0.20     ``n_splits`` default value will change from 3 to 5 in v0.22.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=3'
        },
        {
          name: 'shuffle',
          docstring:
            'Whether to shuffle the data before splitting into batches.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``shuffle`` == True.',
          param_type: ['int', null],
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
          name: '_iter_test_indices',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring:
            'Generates boolean masks corresponding to test sets.\n\n        By default, delegates to _iter_test_indices(X, y, groups)\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, shape (n_samples,)\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LeaveOneGroupOut',
      docstring:
        'Leave One Group Out cross-validator\n\n    Provides train/test indices to split data according to a third-party\n    provided group. This group information can be used to encode arbitrary\n    domain specific stratifications of the samples as integers.\n\n    For instance the groups could be the year of collection of the samples\n    and thus allow for cross-validation against time-based splits.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import LeaveOneGroupOut\n    >>> X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])\n    >>> y = np.array([1, 2, 1, 2])\n    >>> groups = np.array([1, 1, 2, 2])\n    >>> logo = LeaveOneGroupOut()\n    >>> logo.get_n_splits(X, y, groups)\n    2\n    >>> logo.get_n_splits(groups=groups)  # \'groups\' is always required\n    2\n    >>> print(logo)\n    LeaveOneGroupOut()\n    >>> for train_index, test_index in logo.split(X, y, groups):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    ...    print(X_train, X_test, y_train, y_test)\n    TRAIN: [2 3] TEST: [0 1]\n    [[5 6]\n     [7 8]] [[1 2]\n     [3 4]] [1 2] [1 2]\n    TRAIN: [0 1] TEST: [2 3]\n    [[1 2]\n     [3 4]] [[5 6]\n     [7 8]] [1 2] [1 2]\n\n    ',
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
          name: '_iter_test_indices',
          docstring: 'Generates integer indices corresponding to test sets.',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            "Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : array-like, with shape (n_samples,)\n            Group labels for the samples used while splitting the dataset into\n            train/test set. This 'groups' parameter must always be specified to\n            calculate the number of splits, though the other parameters can be\n            omitted.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                "Group labels for the samples used while splitting the dataset into train/test set. This 'groups' parameter must always be specified to calculate the number of splits, though the other parameters can be omitted.",
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, of length n_samples, optional\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,)\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LeaveOneOut',
      docstring:
        'Leave-One-Out cross-validator\n\n    Provides train/test indices to split data in train/test sets. Each\n    sample is used once as a test set (singleton) while the remaining\n    samples form the training set.\n\n    Note: ``LeaveOneOut()`` is equivalent to ``KFold(n_splits=n)`` and\n    ``LeavePOut(p=1)`` where ``n`` is the number of samples.\n\n    Due to the high number of test sets (which is the same as the\n    number of samples) this cross-validation method can be very costly.\n    For large datasets one should favor :class:`KFold`, :class:`ShuffleSplit`\n    or :class:`StratifiedKFold`.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import LeaveOneOut\n    >>> X = np.array([[1, 2], [3, 4]])\n    >>> y = np.array([1, 2])\n    >>> loo = LeaveOneOut()\n    >>> loo.get_n_splits(X)\n    2\n    >>> print(loo)\n    LeaveOneOut()\n    >>> for train_index, test_index in loo.split(X):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    ...    print(X_train, X_test, y_train, y_test)\n    TRAIN: [1] TEST: [0]\n    [[3 4]] [[1 2]] [2] [1]\n    TRAIN: [0] TEST: [1]\n    [[1 2]] [[3 4]] [1] [2]\n\n    See also\n    --------\n    LeaveOneGroupOut\n        For splitting the data according to explicit, domain-specific\n        stratification of the dataset.\n\n    GroupKFold: K-fold iterator variant with non-overlapping groups.\n    ',
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
          name: '_iter_test_indices',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring:
            'Generates boolean masks corresponding to test sets.\n\n        By default, delegates to _iter_test_indices(X, y, groups)\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
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
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, of length n_samples\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LeavePGroupsOut',
      docstring:
        'Leave P Group(s) Out cross-validator\n\n    Provides train/test indices to split data according to a third-party\n    provided group. This group information can be used to encode arbitrary\n    domain specific stratifications of the samples as integers.\n\n    For instance the groups could be the year of collection of the samples\n    and thus allow for cross-validation against time-based splits.\n\n    The difference between LeavePGroupsOut and LeaveOneGroupOut is that\n    the former builds the test sets with all the samples assigned to\n    ``p`` different values of the groups while the latter uses samples\n    all assigned the same groups.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_groups : int\n        Number of groups (``p``) to leave out in the test split.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import LeavePGroupsOut\n    >>> X = np.array([[1, 2], [3, 4], [5, 6]])\n    >>> y = np.array([1, 2, 1])\n    >>> groups = np.array([1, 2, 3])\n    >>> lpgo = LeavePGroupsOut(n_groups=2)\n    >>> lpgo.get_n_splits(X, y, groups)\n    3\n    >>> lpgo.get_n_splits(groups=groups)  # \'groups\' is always required\n    3\n    >>> print(lpgo)\n    LeavePGroupsOut(n_groups=2)\n    >>> for train_index, test_index in lpgo.split(X, y, groups):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    ...    print(X_train, X_test, y_train, y_test)\n    TRAIN: [2] TEST: [0 1]\n    [[5 6]] [[1 2]\n     [3 4]] [1] [1 2]\n    TRAIN: [1] TEST: [0 2]\n    [[3 4]] [[1 2]\n     [5 6]] [2] [1 1]\n    TRAIN: [0] TEST: [1 2]\n    [[1 2]] [[3 4]\n     [5 6]] [1] [2 1]\n\n    See also\n    --------\n    GroupKFold: K-fold iterator variant with non-overlapping groups.\n    ',
      inputs: [
        {
          name: 'n_groups',
          docstring: 'Number of groups (``p``) to leave out in the test split.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
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
          name: '_iter_test_indices',
          docstring: 'Generates integer indices corresponding to test sets.',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            "Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : array-like, with shape (n_samples,)\n            Group labels for the samples used while splitting the dataset into\n            train/test set. This 'groups' parameter must always be specified to\n            calculate the number of splits, though the other parameters can be\n            omitted.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ",
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                "Group labels for the samples used while splitting the dataset into train/test set. This 'groups' parameter must always be specified to calculate the number of splits, though the other parameters can be omitted.",
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, of length n_samples, optional\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,)\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LeavePOut',
      docstring:
        'Leave-P-Out cross-validator\n\n    Provides train/test indices to split data in train/test sets. This results\n    in testing on all distinct samples of size p, while the remaining n - p\n    samples form the training set in each iteration.\n\n    Note: ``LeavePOut(p)`` is NOT equivalent to\n    ``KFold(n_splits=n_samples // p)`` which creates non-overlapping test sets.\n\n    Due to the high number of iterations which grows combinatorically with the\n    number of samples this cross-validation method can be very costly. For\n    large datasets one should favor :class:`KFold`, :class:`StratifiedKFold`\n    or :class:`ShuffleSplit`.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    p : int\n        Size of the test sets. Must be strictly greater than the number of\n        samples.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import LeavePOut\n    >>> X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])\n    >>> y = np.array([1, 2, 3, 4])\n    >>> lpo = LeavePOut(2)\n    >>> lpo.get_n_splits(X)\n    6\n    >>> print(lpo)\n    LeavePOut(p=2)\n    >>> for train_index, test_index in lpo.split(X):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    TRAIN: [2 3] TEST: [0 1]\n    TRAIN: [1 3] TEST: [0 2]\n    TRAIN: [1 2] TEST: [0 3]\n    TRAIN: [0 3] TEST: [1 2]\n    TRAIN: [0 2] TEST: [1 3]\n    TRAIN: [0 1] TEST: [2 3]\n    ',
      inputs: [
        {
          name: 'p',
          docstring:
            'Size of the test sets. Must be strictly greater than the number of samples.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
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
          name: '_iter_test_indices',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring:
            'Generates boolean masks corresponding to test sets.\n\n        By default, delegates to _iter_test_indices(X, y, groups)\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n        ',
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
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, of length n_samples\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'ParameterGrid',
      docstring:
        "Grid of parameters with a discrete number of values for each.\n\n    Can be used to iterate over parameter value combinations with the\n    Python built-in function iter.\n\n    Read more in the :ref:`User Guide <grid_search>`.\n\n    Parameters\n    ----------\n    param_grid : dict of string to sequence, or sequence of such\n        The parameter grid to explore, as a dictionary mapping estimator\n        parameters to sequences of allowed values.\n\n        An empty dict signifies default parameters.\n\n        A sequence of dicts signifies a sequence of grids to search, and is\n        useful to avoid exploring parameter combinations that make no sense\n        or have no effect. See the examples below.\n\n    Examples\n    --------\n    >>> from sklearn.model_selection import ParameterGrid\n    >>> param_grid = {'a': [1, 2], 'b': [True, False]}\n    >>> list(ParameterGrid(param_grid)) == (\n    ...    [{'a': 1, 'b': True}, {'a': 1, 'b': False},\n    ...     {'a': 2, 'b': True}, {'a': 2, 'b': False}])\n    True\n\n    >>> grid = [{'kernel': ['linear']}, {'kernel': ['rbf'], 'gamma': [1, 10]}]\n    >>> list(ParameterGrid(grid)) == [{'kernel': 'linear'},\n    ...                               {'kernel': 'rbf', 'gamma': 1},\n    ...                               {'kernel': 'rbf', 'gamma': 10}]\n    True\n    >>> ParameterGrid(grid)[1] == {'kernel': 'rbf', 'gamma': 1}\n    True\n\n    See also\n    --------\n    :class:`GridSearchCV`:\n        Uses :class:`ParameterGrid` to perform a full parallelized parameter\n        search.\n    ",
      inputs: [
        {
          name: 'param_grid',
          docstring:
            'The parameter grid to explore, as a dictionary mapping estimator parameters to sequences of allowed values.  An empty dict signifies default parameters.  A sequence of dicts signifies a sequence of grids to search, and is useful to avoid exploring parameter combinations that make no sense or have no effect. See the examples below.',
          param_type: ['str', 'dict'],
          expected_shape: null,
          is_optional: false,
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
        }
      ],
      nodes: []
    },
    {
      name: 'ParameterSampler',
      docstring:
        "Generator on parameters sampled from given distributions.\n\n    Non-deterministic iterable over random candidate combinations for hyper-\n    parameter search. If all parameters are presented as a list,\n    sampling without replacement is performed. If at least one parameter\n    is given as a distribution, sampling with replacement is used.\n    It is highly recommended to use continuous distributions for continuous\n    parameters.\n\n    Note that before SciPy 0.16, the ``scipy.stats.distributions`` do not\n    accept a custom RNG instance and always use the singleton RNG from\n    ``numpy.random``. Hence setting ``random_state`` will not guarantee a\n    deterministic iteration whenever ``scipy.stats`` distributions are used to\n    define the parameter search space. Deterministic behavior is however\n    guaranteed from SciPy 0.16 onwards.\n\n    Read more in the :ref:`User Guide <search>`.\n\n    Parameters\n    ----------\n    param_distributions : dict\n        Dictionary where the keys are parameters and values\n        are distributions from which a parameter is to be sampled.\n        Distributions either have to provide a ``rvs`` function\n        to sample from them, or can be given as a list of values,\n        where a uniform distribution is assumed.\n\n    n_iter : integer\n        Number of parameter settings that are produced.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        Pseudo random number generator state used for random uniform sampling\n        from lists of possible values instead of scipy.stats distributions.\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    Returns\n    -------\n    params : dict of string to any\n        **Yields** dictionaries mapping each estimator parameter to\n        as sampled value.\n\n    Examples\n    --------\n    >>> from sklearn.model_selection import ParameterSampler\n    >>> from scipy.stats.distributions import expon\n    >>> import numpy as np\n    >>> rng = np.random.RandomState(0)\n    >>> param_grid = {'a':[1, 2], 'b': expon()}\n    >>> param_list = list(ParameterSampler(param_grid, n_iter=4,\n    ...                                    random_state=rng))\n    >>> rounded_list = [dict((k, round(v, 6)) for (k, v) in d.items())\n    ...                 for d in param_list]\n    >>> rounded_list == [{'b': 0.89856, 'a': 1},\n    ...                  {'b': 0.923223, 'a': 1},\n    ...                  {'b': 1.878964, 'a': 2},\n    ...                  {'b': 1.038159, 'a': 2}]\n    True\n    ",
      inputs: [
        {
          name: 'param_distributions',
          docstring:
            'Dictionary where the keys are parameters and values are distributions from which a parameter is to be sampled. Distributions either have to provide a ``rvs`` function to sample from them, or can be given as a list of values, where a uniform distribution is assumed.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_iter',
          docstring: 'Number of parameter settings that are produced.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'params',
          docstring:
            '**Yields** dictionaries mapping each estimator parameter to as sampled value.',
          param_type: ['str', 'dict'],
          returned: true
        }
      ],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'PredefinedSplit',
      docstring:
        'Predefined split cross-validator\n\n    Provides train/test indices to split data into train/test sets using a\n    predefined scheme specified by the user with the ``test_fold`` parameter.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    test_fold : array-like, shape (n_samples,)\n        The entry ``test_fold[i]`` represents the index of the test set that\n        sample ``i`` belongs to. It is possible to exclude sample ``i`` from\n        any test set (i.e. include sample ``i`` in every training set) by\n        setting ``test_fold[i]`` equal to -1.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import PredefinedSplit\n    >>> X = np.array([[1, 2], [3, 4], [1, 2], [3, 4]])\n    >>> y = np.array([0, 0, 1, 1])\n    >>> test_fold = [0, 1, -1, 1]\n    >>> ps = PredefinedSplit(test_fold)\n    >>> ps.get_n_splits()\n    2\n    >>> print(ps)       # doctest: +NORMALIZE_WHITESPACE +ELLIPSIS\n    PredefinedSplit(test_fold=array([ 0,  1, -1,  1]))\n    >>> for train_index, test_index in ps.split():\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    TRAIN: [1 2 3] TEST: [0]\n    TRAIN: [0 2] TEST: [1 3]\n    ',
      inputs: [
        {
          name: 'test_fold',
          docstring:
            'The entry ``test_fold[i]`` represents the index of the test set that sample ``i`` belongs to. It is possible to exclude sample ``i`` from any test set (i.e. include sample ``i`` in every training set) by setting ``test_fold[i]`` equal to -1.',
          param_type: ['array'],
          expected_shape: '(n_samples,)',
          is_optional: false,
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
          name: '_iter_test_indices',
          docstring: 'Generates integer indices corresponding to test sets.',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring: 'Generates boolean masks corresponding to test sets.',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'RandomizedSearchCV',
      docstring:
        "Randomized search on hyper parameters.\n\n    RandomizedSearchCV implements a \"fit\" and a \"score\" method.\n    It also implements \"predict\", \"predict_proba\", \"decision_function\",\n    \"transform\" and \"inverse_transform\" if they are implemented in the\n    estimator used.\n\n    The parameters of the estimator used to apply these methods are optimized\n    by cross-validated search over parameter settings.\n\n    In contrast to GridSearchCV, not all parameter values are tried out, but\n    rather a fixed number of parameter settings is sampled from the specified\n    distributions. The number of parameter settings that are tried is\n    given by n_iter.\n\n    If all parameters are presented as a list,\n    sampling without replacement is performed. If at least one parameter\n    is given as a distribution, sampling with replacement is used.\n    It is highly recommended to use continuous distributions for continuous\n    parameters.\n\n    Note that before SciPy 0.16, the ``scipy.stats.distributions`` do not\n    accept a custom RNG instance and always use the singleton RNG from\n    ``numpy.random``. Hence setting ``random_state`` will not guarantee a\n    deterministic iteration whenever ``scipy.stats`` distributions are used to\n    define the parameter search space.\n\n    Read more in the :ref:`User Guide <randomized_parameter_search>`.\n\n    Parameters\n    ----------\n    estimator : estimator object.\n        A object of that type is instantiated for each grid point.\n        This is assumed to implement the scikit-learn estimator interface.\n        Either estimator needs to provide a ``score`` function,\n        or ``scoring`` must be passed.\n\n    param_distributions : dict\n        Dictionary with parameters names (string) as keys and distributions\n        or lists of parameters to try. Distributions must provide a ``rvs``\n        method for sampling (such as those from scipy.stats.distributions).\n        If a list is given, it is sampled uniformly.\n\n    n_iter : int, default=10\n        Number of parameter settings that are sampled. n_iter trades\n        off runtime vs quality of the solution.\n\n    scoring : string, callable, list/tuple, dict or None, default: None\n        A single string (see :ref:`scoring_parameter`) or a callable\n        (see :ref:`scoring`) to evaluate the predictions on the test set.\n\n        For evaluating multiple metrics, either give a list of (unique) strings\n        or a dict with names as keys and callables as values.\n\n        NOTE that when using custom scorers, each scorer should return a single\n        value. Metric functions returning a list/array of values can be wrapped\n        into multiple scorers that return one value each.\n\n        See :ref:`multimetric_grid_search` for an example.\n\n        If None, the estimator's score method is used.\n\n    n_jobs : int or None, optional (default=None)\n        Number of jobs to run in parallel.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    pre_dispatch : int, or string, optional\n        Controls the number of jobs that get dispatched during parallel\n        execution. Reducing this number can be useful to avoid an\n        explosion of memory consumption when more jobs get dispatched\n        than CPUs can process. This parameter can be:\n\n            - None, in which case all the jobs are immediately\n              created and spawned. Use this for lightweight and\n              fast-running jobs, to avoid delays due to on-demand\n              spawning of the jobs\n\n            - An int, giving the exact number of total jobs that are\n              spawned\n\n            - A string, giving an expression as a function of n_jobs,\n              as in '2*n_jobs'\n\n    iid : boolean, default='warn'\n        If True, return the average score across folds, weighted by the number\n        of samples in each test set. In this case, the data is assumed to be\n        identically distributed across the folds, and the loss minimized is\n        the total loss per sample, and not the mean loss across the folds. If\n        False, return the average score across folds. Default is True, but\n        will change to False in version 0.22, to correspond to the standard\n        definition of cross-validation.\n\n        .. versionchanged:: 0.20\n            Parameter ``iid`` will change from True to False by default in\n            version 0.22, and will be removed in 0.24.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    refit : boolean, string, or callable, default=True\n        Refit an estimator using the best found parameters on the whole\n        dataset.\n\n        For multiple metric evaluation, this needs to be a string denoting the\n        scorer that would be used to find the best parameters for refitting\n        the estimator at the end.\n\n        Where there are considerations other than maximum score in\n        choosing a best estimator, ``refit`` can be set to a function which\n        returns the selected ``best_index_`` given the ``cv_results``.\n\n        The refitted estimator is made available at the ``best_estimator_``\n        attribute and permits using ``predict`` directly on this\n        ``RandomizedSearchCV`` instance.\n\n        Also for multiple metric evaluation, the attributes ``best_index_``,\n        ``best_score_`` and ``best_params_`` will only be available if\n        ``refit`` is set and all of them will be determined w.r.t this specific\n        scorer. When refit is callable, ``best_score_`` is disabled.\n\n        See ``scoring`` parameter to know more about multiple metric\n        evaluation.\n\n        .. versionchanged:: 0.20\n            Support for callable added.\n\n    verbose : integer\n        Controls the verbosity: the higher, the more messages.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        Pseudo random number generator state used for random uniform sampling\n        from lists of possible values instead of scipy.stats distributions.\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    error_score : 'raise' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised. If a numeric value is given,\n        FitFailedWarning is raised. This parameter does not affect the refit\n        step, which will always raise the error. Default is 'raise' but from\n        version 0.22 it will change to np.nan.\n\n    return_train_score : boolean, default=False\n        If ``False``, the ``cv_results_`` attribute will not include training\n        scores.\n        Computing training scores is used to get insights on how different\n        parameter settings impact the overfitting/underfitting trade-off.\n        However computing the scores on the training set can be computationally\n        expensive and is not strictly required to select the parameters that\n        yield the best generalization performance.\n\n    Attributes\n    ----------\n    cv_results_ : dict of numpy (masked) ndarrays\n        A dict with keys as column headers and values as columns, that can be\n        imported into a pandas ``DataFrame``.\n\n        For instance the below given table\n\n        +--------------+-------------+-------------------+---+---------------+\n        | param_kernel | param_gamma | split0_test_score |...|rank_test_score|\n        +==============+=============+===================+===+===============+\n        |    'rbf'     |     0.1     |       0.80        |...|       2       |\n        +--------------+-------------+-------------------+---+---------------+\n        |    'rbf'     |     0.2     |       0.90        |...|       1       |\n        +--------------+-------------+-------------------+---+---------------+\n        |    'rbf'     |     0.3     |       0.70        |...|       1       |\n        +--------------+-------------+-------------------+---+---------------+\n\n        will be represented by a ``cv_results_`` dict of::\n\n            {\n            'param_kernel' : masked_array(data = ['rbf', 'rbf', 'rbf'],\n                                          mask = False),\n            'param_gamma'  : masked_array(data = [0.1 0.2 0.3], mask = False),\n            'split0_test_score'  : [0.80, 0.90, 0.70],\n            'split1_test_score'  : [0.82, 0.50, 0.70],\n            'mean_test_score'    : [0.81, 0.70, 0.70],\n            'std_test_score'     : [0.01, 0.20, 0.00],\n            'rank_test_score'    : [3, 1, 1],\n            'split0_train_score' : [0.80, 0.92, 0.70],\n            'split1_train_score' : [0.82, 0.55, 0.70],\n            'mean_train_score'   : [0.81, 0.74, 0.70],\n            'std_train_score'    : [0.01, 0.19, 0.00],\n            'mean_fit_time'      : [0.73, 0.63, 0.43],\n            'std_fit_time'       : [0.01, 0.02, 0.01],\n            'mean_score_time'    : [0.01, 0.06, 0.04],\n            'std_score_time'     : [0.00, 0.00, 0.00],\n            'params'             : [{'kernel' : 'rbf', 'gamma' : 0.1}, ...],\n            }\n\n        NOTE\n\n        The key ``'params'`` is used to store a list of parameter\n        settings dicts for all the parameter candidates.\n\n        The ``mean_fit_time``, ``std_fit_time``, ``mean_score_time`` and\n        ``std_score_time`` are all in seconds.\n\n        For multi-metric evaluation, the scores for all the scorers are\n        available in the ``cv_results_`` dict at the keys ending with that\n        scorer's name (``'_<scorer_name>'``) instead of ``'_score'`` shown\n        above. ('split0_test_precision', 'mean_train_precision' etc.)\n\n    best_estimator_ : estimator or dict\n        Estimator that was chosen by the search, i.e. estimator\n        which gave highest score (or smallest loss if specified)\n        on the left out data. Not available if ``refit=False``.\n\n        For multi-metric evaluation, this attribute is present only if\n        ``refit`` is specified.\n\n        See ``refit`` parameter for more information on allowed values.\n\n    best_score_ : float\n        Mean cross-validated score of the best_estimator.\n\n        For multi-metric evaluation, this is not available if ``refit`` is\n        ``False``. See ``refit`` parameter for more information.\n\n    best_params_ : dict\n        Parameter setting that gave the best results on the hold out data.\n\n        For multi-metric evaluation, this is not available if ``refit`` is\n        ``False``. See ``refit`` parameter for more information.\n\n    best_index_ : int\n        The index (of the ``cv_results_`` arrays) which corresponds to the best\n        candidate parameter setting.\n\n        The dict at ``search.cv_results_['params'][search.best_index_]`` gives\n        the parameter setting for the best model, that gives the highest\n        mean score (``search.best_score_``).\n\n        For multi-metric evaluation, this is not available if ``refit`` is\n        ``False``. See ``refit`` parameter for more information.\n\n    scorer_ : function or a dict\n        Scorer function used on the held out data to choose the best\n        parameters for the model.\n\n        For multi-metric evaluation, this attribute holds the validated\n        ``scoring`` dict which maps the scorer key to the scorer callable.\n\n    n_splits_ : int\n        The number of cross-validation splits (folds/iterations).\n\n    refit_time_ : float\n        Seconds used for refitting the best model on the whole dataset.\n\n        This is present only if ``refit`` is not False.\n\n    Notes\n    -----\n    The parameters selected are those that maximize the score of the held-out\n    data, according to the scoring parameter.\n\n    If `n_jobs` was set to a value higher than one, the data is copied for each\n    parameter setting(and not `n_jobs` times). This is done for efficiency\n    reasons if individual jobs take very little time, but may raise errors if\n    the dataset is large and not enough memory is available.  A workaround in\n    this case is to set `pre_dispatch`. Then, the memory is copied only\n    `pre_dispatch` many times. A reasonable value for `pre_dispatch` is `2 *\n    n_jobs`.\n\n    See Also\n    --------\n    :class:`GridSearchCV`:\n        Does exhaustive search over a grid of parameters.\n\n    :class:`ParameterSampler`:\n        A generator over parameter settings, constructed from\n        param_distributions.\n\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring:
            'A object of that type is instantiated for each grid point. This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a ``score`` function, or ``scoring`` must be passed.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'param_distributions',
          docstring:
            'Dictionary with parameters names (string) as keys and distributions or lists of parameters to try. Distributions must provide a ``rvs`` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_iter',
          docstring:
            'Number of parameter settings that are sampled. n_iter trades off runtime vs quality of the solution.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=10'
        },
        {
          name: 'scoring',
          docstring:
            "A single string (see :ref:`scoring_parameter`) or a callable (see :ref:`scoring`) to evaluate the predictions on the test set.  For evaluating multiple metrics, either give a list of (unique) strings or a dict with names as keys and callables as values.  NOTE that when using custom scorers, each scorer should return a single value. Metric functions returning a list/array of values can be wrapped into multiple scorers that return one value each.  See :ref:`multimetric_grid_search` for an example.  If None, the estimator's score method is used.",
          param_type: ['str', 'dict', 'list', 'tuple', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: ': None'
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of jobs to run in parallel. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:      - None, in which case all the jobs are immediately       created and spawned. Use this for lightweight and       fast-running jobs, to avoid delays due to on-demand       spawning of the jobs      - An int, giving the exact number of total jobs that are       spawned      - A string, giving an expression as a function of n_jobs,       as in '2*n_jobs'",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'iid',
          docstring:
            'If True, return the average score across folds, weighted by the number of samples in each test set. In this case, the data is assumed to be identically distributed across the folds, and the loss minimized is the total loss per sample, and not the mean loss across the folds. If False, return the average score across folds. Default is True, but will change to False in version 0.22, to correspond to the standard definition of cross-validation.  .. versionchanged:: 0.20     Parameter ``iid`` will change from True to False by default in     version 0.22, and will be removed in 0.24.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: "='warn'"
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'refit',
          docstring:
            'Refit an estimator using the best found parameters on the whole dataset.  For multiple metric evaluation, this needs to be a string denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.  Where there are considerations other than maximum score in choosing a best estimator, ``refit`` can be set to a function which returns the selected ``best_index_`` given the ``cv_results``.  The refitted estimator is made available at the ``best_estimator_`` attribute and permits using ``predict`` directly on this ``RandomizedSearchCV`` instance.  Also for multiple metric evaluation, the attributes ``best_index_``, ``best_score_`` and ``best_params_`` will only be available if ``refit`` is set and all of them will be determined w.r.t this specific scorer. When refit is callable, ``best_score_`` is disabled.  See ``scoring`` parameter to know more about multiple metric evaluation.  .. versionchanged:: 0.20     Support for callable added.',
          param_type: ['bool', 'str', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: '=True'
        },
        {
          name: 'verbose',
          docstring: 'Controls the verbosity: the higher, the more messages.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise' but from version 0.22 it will change to np.nan.",
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_train_score',
          docstring:
            'If ``False``, the ``cv_results_`` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '=False'
        }
      ],
      outputs: [
        {
          name: 'cv_results_',
          docstring:
            "A dict with keys as column headers and values as columns, that can be imported into a pandas ``DataFrame``.  For instance the below given table  +--------------+-------------+-------------------+---+---------------+ | param_kernel | param_gamma | split0_test_score |...|rank_test_score| +==============+=============+===================+===+===============+ |    'rbf'     |     0.1     |       0.80        |...|       2       | +--------------+-------------+-------------------+---+---------------+ |    'rbf'     |     0.2     |       0.90        |...|       1       | +--------------+-------------+-------------------+---+---------------+ |    'rbf'     |     0.3     |       0.70        |...|       1       | +--------------+-------------+-------------------+---+---------------+  will be represented by a ``cv_results_`` dict of::      {     'param_kernel' : masked_array(data = ['rbf', 'rbf', 'rbf'],                                   mask = False),     'param_gamma'  : masked_array(data = [0.1 0.2 0.3], mask = False),     'split0_test_score'  : [0.80, 0.90, 0.70],     'split1_test_score'  : [0.82, 0.50, 0.70],     'mean_test_score'    : [0.81, 0.70, 0.70],     'std_test_score'     : [0.01, 0.20, 0.00],     'rank_test_score'    : [3, 1, 1],     'split0_train_score' : [0.80, 0.92, 0.70],     'split1_train_score' : [0.82, 0.55, 0.70],     'mean_train_score'   : [0.81, 0.74, 0.70],     'std_train_score'    : [0.01, 0.19, 0.00],     'mean_fit_time'      : [0.73, 0.63, 0.43],     'std_fit_time'       : [0.01, 0.02, 0.01],     'mean_score_time'    : [0.01, 0.06, 0.04],     'std_score_time'     : [0.00, 0.00, 0.00],     'params'             : [{'kernel' : 'rbf', 'gamma' : 0.1}, ...],     }  NOTE  The key ``'params'`` is used to store a list of parameter settings dicts for all the parameter candidates.  The ``mean_fit_time``, ``std_fit_time``, ``mean_score_time`` and ``std_score_time`` are all in seconds.  For multi-metric evaluation, the scores for all the scorers are available in the ``cv_results_`` dict at the keys ending with that scorer's name (``'_<scorer_name>'``) instead of ``'_score'`` shown above. ('split0_test_precision', 'mean_train_precision' etc.)",
          param_type: ['array', 'dict'],
          returned: false
        },
        {
          name: 'best_estimator_',
          docstring:
            'Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if ``refit=False``.  For multi-metric evaluation, this attribute is present only if ``refit`` is specified.  See ``refit`` parameter for more information on allowed values.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_score_',
          docstring:
            'Mean cross-validated score of the best_estimator.  For multi-metric evaluation, this is not available if ``refit`` is ``False``. See ``refit`` parameter for more information.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'best_params_',
          docstring:
            'Parameter setting that gave the best results on the hold out data.  For multi-metric evaluation, this is not available if ``refit`` is ``False``. See ``refit`` parameter for more information.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_index_',
          docstring:
            "The index (of the ``cv_results_`` arrays) which corresponds to the best candidate parameter setting.  The dict at ``search.cv_results_['params'][search.best_index_]`` gives the parameter setting for the best model, that gives the highest mean score (``search.best_score_``).  For multi-metric evaluation, this is not available if ``refit`` is ``False``. See ``refit`` parameter for more information.",
          param_type: ['int'],
          returned: false
        },
        {
          name: 'scorer_',
          docstring:
            'Scorer function used on the held out data to choose the best parameters for the model.  For multi-metric evaluation, this attribute holds the validated ``scoring`` dict which maps the scorer key to the scorer callable.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'n_splits_',
          docstring:
            'The number of cross-validation splits (folds/iterations).',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'refit_time_',
          docstring:
            'Seconds used for refitting the best model on the whole dataset.  This is present only if ``refit`` is not False.',
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
          name: '_check_is_fitted',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_format_results',
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
          name: '_run_search',
          docstring: 'Search n_iter candidates from param_distributions',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Call decision_function on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``decision_function``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Run fit with all sets of parameters.\n\n        Parameters\n        ----------\n\n        X : array-like, shape = [n_samples, n_features]\n            Training vector, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        **fit_params : dict of string -> object\n            Parameters passed to the ``fit`` method of the estimator\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape:
                '= [n_samples] or [n_samples, n_output], optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: '**fit_params',
              docstring:
                'Parameters passed to the ``fit`` method of the estimator',
              param_type: ['object', 'str', 'dict'],
              expected_shape: null,
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
          name: 'inverse_transform',
          docstring:
            'Call inverse_transform on the estimator with the best found params.\n\n        Only available if the underlying estimator implements\n        ``inverse_transform`` and ``refit=True``.\n\n        Parameters\n        ----------\n        Xt : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'Xt',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Call predict on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_log_proba',
          docstring:
            'Call predict_log_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_log_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_proba',
          docstring:
            'Call predict_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'score',
          docstring:
            'Returns the score on the given data, if the estimator has been refit.\n\n        This uses the score defined by ``scoring`` where provided, and the\n        ``best_estimator_.score`` method otherwise.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n            Input data, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        Returns\n        -------\n        score : float\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Input data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '= [n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape:
                '= [n_samples] or [n_samples, n_output], optional',
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
            'Call transform on the estimator with the best found parameters.\n\n        Only available if the underlying estimator supports ``transform`` and\n        ``refit=True``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
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
      name: 'RepeatedKFold',
      docstring:
        'Repeated K-Fold cross validator.\n\n    Repeats K-Fold n times with different randomization in each repetition.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_splits : int, default=5\n        Number of folds. Must be at least 2.\n\n    n_repeats : int, default=10\n        Number of times cross-validator needs to be repeated.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import RepeatedKFold\n    >>> X = np.array([[1, 2], [3, 4], [1, 2], [3, 4]])\n    >>> y = np.array([0, 0, 1, 1])\n    >>> rkf = RepeatedKFold(n_splits=2, n_repeats=2, random_state=2652124)\n    >>> for train_index, test_index in rkf.split(X):\n    ...     print("TRAIN:", train_index, "TEST:", test_index)\n    ...     X_train, X_test = X[train_index], X[test_index]\n    ...     y_train, y_test = y[train_index], y[test_index]\n    ...\n    TRAIN: [0 1] TEST: [2 3]\n    TRAIN: [2 3] TEST: [0 1]\n    TRAIN: [1 2] TEST: [0 3]\n    TRAIN: [0 3] TEST: [1 2]\n\n    Notes\n    -----\n    Randomized CV splitters may return different results for each call of\n    split. You can make the results identical by setting ``random_state``\n    to an integer.\n\n    See also\n    --------\n    RepeatedStratifiedKFold: Repeats Stratified K-Fold n times.\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring: 'Number of folds. Must be at least 2.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=5'
        },
        {
          name: 'n_repeats',
          docstring: 'Number of times cross-validator needs to be repeated.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=10'
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
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n            ``np.zeros(n_samples)`` may be used as a placeholder.\n\n        y : object\n            Always ignored, exists for compatibility.\n            ``np.zeros(n_samples)`` may be used as a placeholder.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Always ignored, exists for compatibility. ``np.zeros(n_samples)`` may be used as a placeholder.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Always ignored, exists for compatibility. ``np.zeros(n_samples)`` may be used as a placeholder.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generates indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, of length n_samples\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'RepeatedStratifiedKFold',
      docstring:
        'Repeated Stratified K-Fold cross validator.\n\n    Repeats Stratified K-Fold n times with different randomization in each\n    repetition.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_splits : int, default=5\n        Number of folds. Must be at least 2.\n\n    n_repeats : int, default=10\n        Number of times cross-validator needs to be repeated.\n\n    random_state : None, int or RandomState, default=None\n        Random state to be used to generate random state for each\n        repetition.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import RepeatedStratifiedKFold\n    >>> X = np.array([[1, 2], [3, 4], [1, 2], [3, 4]])\n    >>> y = np.array([0, 0, 1, 1])\n    >>> rskf = RepeatedStratifiedKFold(n_splits=2, n_repeats=2,\n    ...     random_state=36851234)\n    >>> for train_index, test_index in rskf.split(X, y):\n    ...     print("TRAIN:", train_index, "TEST:", test_index)\n    ...     X_train, X_test = X[train_index], X[test_index]\n    ...     y_train, y_test = y[train_index], y[test_index]\n    ...\n    TRAIN: [1 2] TEST: [0 3]\n    TRAIN: [0 3] TEST: [1 2]\n    TRAIN: [1 3] TEST: [0 2]\n    TRAIN: [0 2] TEST: [1 3]\n\n    Notes\n    -----\n    Randomized CV splitters may return different results for each call of\n    split. You can make the results identical by setting ``random_state``\n    to an integer.\n\n    See also\n    --------\n    RepeatedKFold: Repeats K-Fold n times.\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring: 'Number of folds. Must be at least 2.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=5'
        },
        {
          name: 'n_repeats',
          docstring: 'Number of times cross-validator needs to be repeated.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=10'
        },
        {
          name: 'random_state',
          docstring:
            'Random state to be used to generate random state for each repetition.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None'
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
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n            ``np.zeros(n_samples)`` may be used as a placeholder.\n\n        y : object\n            Always ignored, exists for compatibility.\n            ``np.zeros(n_samples)`` may be used as a placeholder.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Always ignored, exists for compatibility. ``np.zeros(n_samples)`` may be used as a placeholder.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Always ignored, exists for compatibility. ``np.zeros(n_samples)`` may be used as a placeholder.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generates indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, of length n_samples\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'ShuffleSplit',
      docstring:
        'Random permutation cross-validator\n\n    Yields indices to split data into training and test sets.\n\n    Note: contrary to other cross-validation strategies, random splits\n    do not guarantee that all folds will be different, although this is\n    still very likely for sizeable datasets.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_splits : int, default 10\n        Number of re-shuffling & splitting iterations.\n\n    test_size : float, int, None, default=None\n        If float, should be between 0.0 and 1.0 and represent the proportion\n        of the dataset to include in the test split. If int, represents the\n        absolute number of test samples. If None, the value is set to the\n        complement of the train size. If ``train_size`` is also None, it will\n        be set to 0.1.\n\n    train_size : float, int, or None, default=None\n        If float, should be between 0.0 and 1.0 and represent the\n        proportion of the dataset to include in the train split. If\n        int, represents the absolute number of train samples. If None,\n        the value is automatically set to the complement of the test size.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import ShuffleSplit\n    >>> X = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [3, 4], [5, 6]])\n    >>> y = np.array([1, 2, 1, 2, 1, 2])\n    >>> rs = ShuffleSplit(n_splits=5, test_size=.25, random_state=0)\n    >>> rs.get_n_splits(X)\n    5\n    >>> print(rs)\n    ShuffleSplit(n_splits=5, random_state=0, test_size=0.25, train_size=None)\n    >>> for train_index, test_index in rs.split(X):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...  # doctest: +ELLIPSIS\n    TRAIN: [1 3 0 4] TEST: [5 2]\n    TRAIN: [4 0 2 5] TEST: [1 3]\n    TRAIN: [1 2 4 0] TEST: [3 5]\n    TRAIN: [3 4 1 0] TEST: [5 2]\n    TRAIN: [3 5 1 0] TEST: [2 4]\n    >>> rs = ShuffleSplit(n_splits=5, train_size=0.5, test_size=.25,\n    ...                   random_state=0)\n    >>> for train_index, test_index in rs.split(X):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...  # doctest: +ELLIPSIS\n    TRAIN: [1 3 0] TEST: [5 2]\n    TRAIN: [4 0 2] TEST: [1 3]\n    TRAIN: [1 2 4] TEST: [3 5]\n    TRAIN: [3 4 1] TEST: [5 2]\n    TRAIN: [3 5 1] TEST: [2 4]\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring: 'Number of re-shuffling & splitting iterations.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '10'
        },
        {
          name: 'test_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If None, the value is set to the complement of the train size. If ``train_size`` is also None, it will be set to 0.1.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None'
        },
        {
          name: 'train_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If None, the value is automatically set to the complement of the test size.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: '=None'
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
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_indices',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, shape (n_samples,)\n            The target variable for supervised learning problems.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n\n        Notes\n        -----\n        Randomized CV splitters may return different results for each call of\n        split. You can make the results identical by setting ``random_state``\n        to an integer.\n        ',
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
              docstring:
                'The target variable for supervised learning problems.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set.',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'StratifiedKFold',
      docstring:
        'Stratified K-Folds cross-validator\n\n    Provides train/test indices to split data in train/test sets.\n\n    This cross-validation object is a variation of KFold that returns\n    stratified folds. The folds are made by preserving the percentage of\n    samples for each class.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_splits : int, default=3\n        Number of folds. Must be at least 2.\n\n        .. versionchanged:: 0.20\n            ``n_splits`` default value will change from 3 to 5 in v0.22.\n\n    shuffle : boolean, optional\n        Whether to shuffle each class\'s samples before splitting into batches.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Used when ``shuffle`` == True.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import StratifiedKFold\n    >>> X = np.array([[1, 2], [3, 4], [1, 2], [3, 4]])\n    >>> y = np.array([0, 0, 1, 1])\n    >>> skf = StratifiedKFold(n_splits=2)\n    >>> skf.get_n_splits(X, y)\n    2\n    >>> print(skf)  # doctest: +NORMALIZE_WHITESPACE\n    StratifiedKFold(n_splits=2, random_state=None, shuffle=False)\n    >>> for train_index, test_index in skf.split(X, y):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    TRAIN: [1 3] TEST: [0 2]\n    TRAIN: [0 2] TEST: [1 3]\n\n    Notes\n    -----\n    Train and test sizes may be different in each fold, with a difference of at\n    most ``n_classes``.\n\n    See also\n    --------\n    RepeatedStratifiedKFold: Repeats Stratified K-Fold n times.\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring:
            'Number of folds. Must be at least 2.  .. versionchanged:: 0.20     ``n_splits`` default value will change from 3 to 5 in v0.22.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=3'
        },
        {
          name: 'shuffle',
          docstring:
            "Whether to shuffle each class's samples before splitting into batches.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``shuffle`` == True.',
          param_type: ['int', null],
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
          name: '_iter_test_indices',
          docstring: 'Generates integer indices corresponding to test sets.',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_make_test_folds',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n            Note that providing ``y`` is sufficient to generate the splits and\n            hence ``np.zeros(n_samples)`` may be used as a placeholder for\n            ``X`` instead of actual training data.\n\n        y : array-like, shape (n_samples,)\n            The target variable for supervised learning problems.\n            Stratification is done based on the y labels.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n\n        Notes\n        -----\n        Randomized CV splitters may return different results for each call of\n        split. You can make the results identical by setting ``random_state``\n        to an integer.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.  Note that providing ``y`` is sufficient to generate the splits and hence ``np.zeros(n_samples)`` may be used as a placeholder for ``X`` instead of actual training data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'The target variable for supervised learning problems. Stratification is done based on the y labels.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'StratifiedShuffleSplit',
      docstring:
        'Stratified ShuffleSplit cross-validator\n\n    Provides train/test indices to split data in train/test sets.\n\n    This cross-validation object is a merge of StratifiedKFold and\n    ShuffleSplit, which returns stratified randomized folds. The folds\n    are made by preserving the percentage of samples for each class.\n\n    Note: like the ShuffleSplit strategy, stratified random splits\n    do not guarantee that all folds will be different, although this is\n    still very likely for sizeable datasets.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_splits : int, default 10\n        Number of re-shuffling & splitting iterations.\n\n    test_size : float, int, None, optional (default=None)\n        If float, should be between 0.0 and 1.0 and represent the proportion\n        of the dataset to include in the test split. If int, represents the\n        absolute number of test samples. If None, the value is set to the\n        complement of the train size. If ``train_size`` is also None, it will\n        be set to 0.1.\n\n    train_size : float, int, or None, default is None\n        If float, should be between 0.0 and 1.0 and represent the\n        proportion of the dataset to include in the train split. If\n        int, represents the absolute number of train samples. If None,\n        the value is automatically set to the complement of the test size.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import StratifiedShuffleSplit\n    >>> X = np.array([[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]])\n    >>> y = np.array([0, 0, 0, 1, 1, 1])\n    >>> sss = StratifiedShuffleSplit(n_splits=5, test_size=0.5, random_state=0)\n    >>> sss.get_n_splits(X, y)\n    5\n    >>> print(sss)       # doctest: +ELLIPSIS\n    StratifiedShuffleSplit(n_splits=5, random_state=0, ...)\n    >>> for train_index, test_index in sss.split(X, y):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    TRAIN: [5 2 3] TEST: [4 1 0]\n    TRAIN: [5 1 4] TEST: [0 2 3]\n    TRAIN: [5 0 2] TEST: [4 3 1]\n    TRAIN: [4 1 0] TEST: [2 3 5]\n    TRAIN: [0 5 1] TEST: [3 4 2]\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring: 'Number of re-shuffling & splitting iterations.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '10'
        },
        {
          name: 'test_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If None, the value is set to the complement of the train size. If ``train_size`` is also None, it will be set to 0.1.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'train_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If None, the value is automatically set to the complement of the test size.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'is None'
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
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_indices',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n            Note that providing ``y`` is sufficient to generate the splits and\n            hence ``np.zeros(n_samples)`` may be used as a placeholder for\n            ``X`` instead of actual training data.\n\n        y : array-like, shape (n_samples,)\n            The target variable for supervised learning problems.\n            Stratification is done based on the y labels.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n\n        Notes\n        -----\n        Randomized CV splitters may return different results for each call of\n        split. You can make the results identical by setting ``random_state``\n        to an integer.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.  Note that providing ``y`` is sufficient to generate the splits and hence ``np.zeros(n_samples)`` may be used as a placeholder for ``X`` instead of actual training data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'The target variable for supervised learning problems. Stratification is done based on the y labels.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'TimeSeriesSplit',
      docstring:
        'Time Series cross-validator\n\n    Provides train/test indices to split time series data samples\n    that are observed at fixed time intervals, in train/test sets.\n    In each split, test indices must be higher than before, and thus shuffling\n    in cross validator is inappropriate.\n\n    This cross-validation object is a variation of :class:`KFold`.\n    In the kth split, it returns first k folds as train set and the\n    (k+1)th fold as test set.\n\n    Note that unlike standard cross-validation methods, successive\n    training sets are supersets of those that come before them.\n\n    Read more in the :ref:`User Guide <cross_validation>`.\n\n    Parameters\n    ----------\n    n_splits : int, default=3\n        Number of splits. Must be at least 2.\n\n        .. versionchanged:: 0.20\n            ``n_splits`` default value will change from 3 to 5 in v0.22.\n\n    max_train_size : int, optional\n        Maximum size for a single training set.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.model_selection import TimeSeriesSplit\n    >>> X = np.array([[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]])\n    >>> y = np.array([1, 2, 3, 4, 5, 6])\n    >>> tscv = TimeSeriesSplit(n_splits=5)\n    >>> print(tscv)  # doctest: +NORMALIZE_WHITESPACE\n    TimeSeriesSplit(max_train_size=None, n_splits=5)\n    >>> for train_index, test_index in tscv.split(X):\n    ...    print("TRAIN:", train_index, "TEST:", test_index)\n    ...    X_train, X_test = X[train_index], X[test_index]\n    ...    y_train, y_test = y[train_index], y[test_index]\n    TRAIN: [0] TEST: [1]\n    TRAIN: [0 1] TEST: [2]\n    TRAIN: [0 1 2] TEST: [3]\n    TRAIN: [0 1 2 3] TEST: [4]\n    TRAIN: [0 1 2 3 4] TEST: [5]\n\n    Notes\n    -----\n    The training set has size ``i * n_samples // (n_splits + 1)\n    + n_samples % (n_splits + 1)`` in the ``i``th split,\n    with a test set of size ``n_samples//(n_splits + 1)``,\n    where ``n_samples`` is the number of samples.\n    ',
      inputs: [
        {
          name: 'n_splits',
          docstring:
            'Number of splits. Must be at least 2.  .. versionchanged:: 0.20     ``n_splits`` default value will change from 3 to 5 in v0.22.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '=3'
        },
        {
          name: 'max_train_size',
          docstring: 'Maximum size for a single training set.',
          param_type: ['int'],
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
          name: '_iter_test_indices',
          docstring: 'Generates integer indices corresponding to test sets.',
          inputs: [],
          outputs: []
        },
        {
          name: '_iter_test_masks',
          docstring:
            'Generates boolean masks corresponding to test sets.\n\n        By default, delegates to _iter_test_indices(X, y, groups)\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_n_splits',
          docstring:
            'Returns the number of splitting iterations in the cross-validator\n\n        Parameters\n        ----------\n        X : object\n            Always ignored, exists for compatibility.\n\n        y : object\n            Always ignored, exists for compatibility.\n\n        groups : object\n            Always ignored, exists for compatibility.\n\n        Returns\n        -------\n        n_splits : int\n            Returns the number of splitting iterations in the cross-validator.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['object'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'n_splits',
              docstring:
                'Returns the number of splitting iterations in the cross-validator.',
              param_type: ['int'],
              returned: true
            }
          ]
        },
        {
          name: 'split',
          docstring:
            'Generate indices to split data into training and test set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : array-like, shape (n_samples,)\n            Always ignored, exists for compatibility.\n\n        groups : array-like, with shape (n_samples,)\n            Always ignored, exists for compatibility.\n\n        Yields\n        ------\n        train : ndarray\n            The training set indices for that split.\n\n        test : ndarray\n            The testing set indices for that split.\n        ',
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
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'groups',
              docstring: 'Always ignored, exists for compatibility.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train',
              docstring: 'The training set indices for that split.',
              param_type: ['array'],
              returned: false
            },
            {
              name: 'test',
              docstring: 'The testing set indices for that split.',
              param_type: ['array'],
              returned: false
            }
          ]
        }
      ],
      nodes: []
    }
  ],
  library: 'sklearn',
  module: 'model_selection'
}

// export default {
//   getSklearnModelSelection (cb) {
//     let temp = _sklearn
//     setTimeout(() => cb(temp), 5)
//   }
// }
