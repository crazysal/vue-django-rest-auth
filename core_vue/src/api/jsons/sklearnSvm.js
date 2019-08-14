export default {
  name: 'sklearn.svm',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'l1_min_c',
      docstring:
        "\n    Return the lowest bound for C such that for C in (l1_min_C, infinity)\n    the model is guaranteed not to be empty. This applies to l1 penalized\n    classifiers, such as LinearSVC with penalty='l1' and\n    linear_model.LogisticRegression with penalty='l1'.\n\n    This value is valid if class_weight parameter in fit() is not set.\n\n    Parameters\n    ----------\n    X : array-like or sparse matrix, shape = [n_samples, n_features]\n        Training vector, where n_samples in the number of samples and\n        n_features is the number of features.\n\n    y : array, shape = [n_samples]\n        Target vector relative to X\n\n    loss : {'squared_hinge', 'log'}, default 'squared_hinge'\n        Specifies the loss function.\n        With 'squared_hinge' it is the squared hinge loss (a.k.a. L2 loss).\n        With 'log' it is the loss of logistic regression models.\n\n    fit_intercept : bool, default: True\n        Specifies if the intercept should be fitted by the model.\n        It must match the fit() method parameter.\n\n    intercept_scaling : float, default: 1\n        when fit_intercept is True, instance vector x becomes\n        [x, intercept_scaling],\n        i.e. a \"synthetic\" feature with constant value equals to\n        intercept_scaling is appended to the instance vector.\n        It must match the fit() method parameter.\n\n    Returns\n    -------\n    l1_min_c : float\n        minimum value for C\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            'Training vector, where n_samples in the number of samples and n_features is the number of features.',
          param_type: ['array'],
          expected_shape: '[n_samples, n_features]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'y',
          docstring: 'Target vector relative to X',
          param_type: ['array'],
          expected_shape: '[n_samples]',
          is_optional: false,
          default_value: null
        },
        {
          name: 'loss',
          docstring:
            "Specifies the loss function. With 'squared_hinge' it is the squared hinge loss (a.k.a. L2 loss). With 'log' it is the loss of logistic regression models.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: 'squared_hinge'
        },
        {
          name: 'fit_intercept',
          docstring:
            'Specifies if the intercept should be fitted by the model. It must match the fit() method parameter.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'intercept_scaling',
          docstring:
            'when fit_intercept is True, instance vector x becomes [x, intercept_scaling], i.e. a "synthetic" feature with constant value equals to intercept_scaling is appended to the instance vector. It must match the fit() method parameter.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '1'
        }
      ],
      outputs: [
        {
          name: 'l1_min_c',
          docstring: 'minimum value for C',
          param_type: ['float'],
          returned: true
        }
      ]
    }
  ],
  nodes: [
    {
      name: 'LinearSVC',
      docstring:
        "Linear Support Vector Classification.\n\n    Similar to SVC with parameter kernel='linear', but implemented in terms of\n    liblinear rather than libsvm, so it has more flexibility in the choice of\n    penalties and loss functions and should scale better to large numbers of\n    samples.\n\n    This class supports both dense and sparse input and the multiclass support\n    is handled according to a one-vs-the-rest scheme.\n\n    Read more in the :ref:`User Guide <svm_classification>`.\n\n    Parameters\n    ----------\n    penalty : string, 'l1' or 'l2' (default='l2')\n        Specifies the norm used in the penalization. The 'l2'\n        penalty is the standard used in SVC. The 'l1' leads to ``coef_``\n        vectors that are sparse.\n\n    loss : string, 'hinge' or 'squared_hinge' (default='squared_hinge')\n        Specifies the loss function. 'hinge' is the standard SVM loss\n        (used e.g. by the SVC class) while 'squared_hinge' is the\n        square of the hinge loss.\n\n    dual : bool, (default=True)\n        Select the algorithm to either solve the dual or primal\n        optimization problem. Prefer dual=False when n_samples > n_features.\n\n    tol : float, optional (default=1e-4)\n        Tolerance for stopping criteria.\n\n    C : float, optional (default=1.0)\n        Penalty parameter C of the error term.\n\n    multi_class : string, 'ovr' or 'crammer_singer' (default='ovr')\n        Determines the multi-class strategy if `y` contains more than\n        two classes.\n        ``\"ovr\"`` trains n_classes one-vs-rest classifiers, while\n        ``\"crammer_singer\"`` optimizes a joint objective over all classes.\n        While `crammer_singer` is interesting from a theoretical perspective\n        as it is consistent, it is seldom used in practice as it rarely leads\n        to better accuracy and is more expensive to compute.\n        If ``\"crammer_singer\"`` is chosen, the options loss, penalty and dual\n        will be ignored.\n\n    fit_intercept : boolean, optional (default=True)\n        Whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (i.e. data is expected to be already centered).\n\n    intercept_scaling : float, optional (default=1)\n        When self.fit_intercept is True, instance vector x becomes\n        ``[x, self.intercept_scaling]``,\n        i.e. a \"synthetic\" feature with constant value equals to\n        intercept_scaling is appended to the instance vector.\n        The intercept becomes intercept_scaling * synthetic feature weight\n        Note! the synthetic feature weight is subject to l1/l2 regularization\n        as all other features.\n        To lessen the effect of regularization on synthetic feature weight\n        (and therefore on the intercept) intercept_scaling has to be increased.\n\n    class_weight : {dict, 'balanced'}, optional\n        Set the parameter C of class i to ``class_weight[i]*C`` for\n        SVC. If not given, all classes are supposed to have\n        weight one.\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n    verbose : int, (default=0)\n        Enable verbose output. Note that this setting takes advantage of a\n        per-process runtime setting in liblinear that, if enabled, may not work\n        properly in a multithreaded context.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator to use when shuffling\n        the data for the dual coordinate descent (if ``dual=True``). When\n        ``dual=False`` the underlying implementation of :class:`LinearSVC`\n        is not random and ``random_state`` has no effect on the results. If\n        int, random_state is the seed used by the random number generator; If\n        RandomState instance, random_state is the random number generator; If\n        None, the random number generator is the RandomState instance used by\n        `np.random`.\n\n    max_iter : int, (default=1000)\n        The maximum number of iterations to be run.\n\n    Attributes\n    ----------\n    coef_ : array, shape = [n_features] if n_classes == 2 else [n_classes, n_features]\n        Weights assigned to the features (coefficients in the primal\n        problem). This is only available in the case of a linear kernel.\n\n        ``coef_`` is a readonly property derived from ``raw_coef_`` that\n        follows the internal memory layout of liblinear.\n\n    intercept_ : array, shape = [1] if n_classes == 2 else [n_classes]\n        Constants in decision function.\n\n    Examples\n    --------\n    >>> from sklearn.svm import LinearSVC\n    >>> from sklearn.datasets import make_classification\n    >>> X, y = make_classification(n_features=4, random_state=0)\n    >>> clf = LinearSVC(random_state=0, tol=1e-5)\n    >>> clf.fit(X, y)  # doctest: +NORMALIZE_WHITESPACE\n    LinearSVC(C=1.0, class_weight=None, dual=True, fit_intercept=True,\n         intercept_scaling=1, loss='squared_hinge', max_iter=1000,\n         multi_class='ovr', penalty='l2', random_state=0, tol=1e-05, verbose=0)\n    >>> print(clf.coef_)\n    [[0.085... 0.394... 0.498... 0.375...]]\n    >>> print(clf.intercept_)\n    [0.284...]\n    >>> print(clf.predict([[0, 0, 0, 0]]))\n    [1]\n\n    Notes\n    -----\n    The underlying C implementation uses a random number generator to\n    select features when fitting the model. It is thus not uncommon\n    to have slightly different results for the same input data. If\n    that happens, try with a smaller ``tol`` parameter.\n\n    The underlying implementation, liblinear, uses a sparse internal\n    representation for the data that will incur a memory copy.\n\n    Predict output may not match that of standalone liblinear in certain\n    cases. See :ref:`differences from liblinear <liblinear_differences>`\n    in the narrative documentation.\n\n    References\n    ----------\n    `LIBLINEAR: A Library for Large Linear Classification\n    <https://www.csie.ntu.edu.tw/~cjlin/liblinear/>`__\n\n    See also\n    --------\n    SVC\n        Implementation of Support Vector Machine classifier using libsvm:\n        the kernel can be non-linear but its SMO algorithm does not\n        scale to large number of samples as LinearSVC does.\n\n        Furthermore SVC multi-class mode is implemented using one\n        vs one scheme while LinearSVC uses one vs the rest. It is\n        possible to implement one vs the rest with SVC by using the\n        :class:`sklearn.multiclass.OneVsRestClassifier` wrapper.\n\n        Finally SVC can fit dense data without memory copy if the input\n        is C-contiguous. Sparse data will still incur memory copy though.\n\n    sklearn.linear_model.SGDClassifier\n        SGDClassifier can optimize the same cost function as LinearSVC\n        by adjusting the penalty and loss parameters. In addition it requires\n        less memory, allows incremental (online) learning, and implements\n        various loss functions and regularization regimes.\n\n    ",
      inputs: [
        {
          name: 'penalty',
          docstring:
            "Specifies the norm used in the penalization. The 'l2' penalty is the standard used in SVC. The 'l1' leads to ``coef_`` vectors that are sparse.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'l2'
        },
        {
          name: 'loss',
          docstring:
            "Specifies the loss function. 'hinge' is the standard SVM loss (used e.g. by the SVC class) while 'squared_hinge' is the square of the hinge loss.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'squared_hinge'
        },
        {
          name: 'dual',
          docstring:
            'Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=False when n_samples > n_features.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
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
          docstring: 'Penalty parameter C of the error term.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'multi_class',
          docstring:
            'Determines the multi-class strategy if `y` contains more than two classes. ``"ovr"`` trains n_classes one-vs-rest classifiers, while ``"crammer_singer"`` optimizes a joint objective over all classes. While `crammer_singer` is interesting from a theoretical perspective as it is consistent, it is seldom used in practice as it rarely leads to better accuracy and is more expensive to compute. If ``"crammer_singer"`` is chosen, the options loss, penalty and dual will be ignored.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'ovr'
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'intercept_scaling',
          docstring:
            'When self.fit_intercept is True, instance vector x becomes ``[x, self.intercept_scaling]``, i.e. a "synthetic" feature with constant value equals to intercept_scaling is appended to the instance vector. The intercept becomes intercept_scaling * synthetic feature weight Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Set the parameter C of class i to ``class_weight[i]*C`` for SVC. If not given, all classes are supposed to have weight one. The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``',
          param_type: ['LIST_VALID_OPTIONS', 'dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0'
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data for the dual coordinate descent (if ``dual=True``). When ``dual=False`` the underlying implementation of :class:`LinearSVC` is not random and ``random_state`` has no effect on the results. If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'max_iter',
          docstring: 'The maximum number of iterations to be run.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1000'
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  ``coef_`` is a readonly property derived from ``raw_coef_`` that follows the internal memory layout of liblinear.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
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
            'Fit the model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            Training vector, where n_samples in the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples]\n            Target vector relative to X\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Array of weights that are assigned to individual\n            samples. If not provided,\n            then each sample is given unit weight.\n\n        Returns\n        -------\n        self : object\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target vector relative to X',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
          name: 'score',
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like, shape = (n_samples, n_features)\n            Test samples.\n\n        y : array-like, shape = (n_samples) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test samples.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
      name: 'LinearSVR',
      docstring:
        "Linear Support Vector Regression.\n\n    Similar to SVR with parameter kernel='linear', but implemented in terms of\n    liblinear rather than libsvm, so it has more flexibility in the choice of\n    penalties and loss functions and should scale better to large numbers of\n    samples.\n\n    This class supports both dense and sparse input.\n\n    Read more in the :ref:`User Guide <svm_regression>`.\n\n    Parameters\n    ----------\n    epsilon : float, optional (default=0.0)\n        Epsilon parameter in the epsilon-insensitive loss function. Note\n        that the value of this parameter depends on the scale of the target\n        variable y. If unsure, set ``epsilon=0``.\n\n    tol : float, optional (default=1e-4)\n        Tolerance for stopping criteria.\n\n    C : float, optional (default=1.0)\n        Penalty parameter C of the error term. The penalty is a squared\n        l2 penalty. The bigger this parameter, the less regularization is used.\n\n    loss : string, optional (default='epsilon_insensitive')\n        Specifies the loss function. The epsilon-insensitive loss\n        (standard SVR) is the L1 loss, while the squared epsilon-insensitive\n        loss ('squared_epsilon_insensitive') is the L2 loss.\n\n    fit_intercept : boolean, optional (default=True)\n        Whether to calculate the intercept for this model. If set\n        to false, no intercept will be used in calculations\n        (i.e. data is expected to be already centered).\n\n    intercept_scaling : float, optional (default=1)\n        When self.fit_intercept is True, instance vector x becomes\n        [x, self.intercept_scaling],\n        i.e. a \"synthetic\" feature with constant value equals to\n        intercept_scaling is appended to the instance vector.\n        The intercept becomes intercept_scaling * synthetic feature weight\n        Note! the synthetic feature weight is subject to l1/l2 regularization\n        as all other features.\n        To lessen the effect of regularization on synthetic feature weight\n        (and therefore on the intercept) intercept_scaling has to be increased.\n\n    dual : bool, (default=True)\n        Select the algorithm to either solve the dual or primal\n        optimization problem. Prefer dual=False when n_samples > n_features.\n\n    verbose : int, (default=0)\n        Enable verbose output. Note that this setting takes advantage of a\n        per-process runtime setting in liblinear that, if enabled, may not work\n        properly in a multithreaded context.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    max_iter : int, (default=1000)\n        The maximum number of iterations to be run.\n\n    Attributes\n    ----------\n    coef_ : array, shape = [n_features] if n_classes == 2 else [n_classes, n_features]\n        Weights assigned to the features (coefficients in the primal\n        problem). This is only available in the case of a linear kernel.\n\n        `coef_` is a readonly property derived from `raw_coef_` that\n        follows the internal memory layout of liblinear.\n\n    intercept_ : array, shape = [1] if n_classes == 2 else [n_classes]\n        Constants in decision function.\n\n    Examples\n    --------\n    >>> from sklearn.svm import LinearSVR\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(n_features=4, random_state=0)\n    >>> regr = LinearSVR(random_state=0, tol=1e-5)\n    >>> regr.fit(X, y)  # doctest: +NORMALIZE_WHITESPACE\n    LinearSVR(C=1.0, dual=True, epsilon=0.0, fit_intercept=True,\n         intercept_scaling=1.0, loss='epsilon_insensitive', max_iter=1000,\n         random_state=0, tol=1e-05, verbose=0)\n    >>> print(regr.coef_)\n    [16.35... 26.91... 42.30... 60.47...]\n    >>> print(regr.intercept_)\n    [-4.29...]\n    >>> print(regr.predict([[0, 0, 0, 0]]))\n    [-4.29...]\n\n    See also\n    --------\n    LinearSVC\n        Implementation of Support Vector Machine classifier using the\n        same library as this class (liblinear).\n\n    SVR\n        Implementation of Support Vector Machine regression using libsvm:\n        the kernel can be non-linear but its SMO algorithm does not\n        scale to large number of samples as LinearSVC does.\n\n    sklearn.linear_model.SGDRegressor\n        SGDRegressor can optimize the same cost function as LinearSVR\n        by adjusting the penalty and loss parameters. In addition it requires\n        less memory, allows incremental (online) learning, and implements\n        various loss functions and regularization regimes.\n    ",
      inputs: [
        {
          name: 'epsilon',
          docstring:
            'Epsilon parameter in the epsilon-insensitive loss function. Note that the value of this parameter depends on the scale of the target variable y. If unsure, set ``epsilon=0``.',
          param_type: ['float'],
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
            'Penalty parameter C of the error term. The penalty is a squared l2 penalty. The bigger this parameter, the less regularization is used.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'loss',
          docstring:
            "Specifies the loss function. The epsilon-insensitive loss (standard SVR) is the L1 loss, while the squared epsilon-insensitive loss ('squared_epsilon_insensitive') is the L2 loss.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'fit_intercept',
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be already centered).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'intercept_scaling',
          docstring:
            'When self.fit_intercept is True, instance vector x becomes [x, self.intercept_scaling], i.e. a "synthetic" feature with constant value equals to intercept_scaling is appended to the instance vector. The intercept becomes intercept_scaling * synthetic feature weight Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dual',
          docstring:
            'Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=False when n_samples > n_features.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'verbose',
          docstring:
            'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0'
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
          name: 'max_iter',
          docstring: 'The maximum number of iterations to be run.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1000'
        }
      ],
      outputs: [
        {
          name: 'coef_',
          docstring:
            'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is a readonly property derived from `raw_coef_` that follows the internal memory layout of liblinear.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
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
            'Fit the model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape = [n_samples, n_features]\n            Training vector, where n_samples in the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples]\n            Target vector relative to X\n\n        sample_weight : array-like, shape = [n_samples], optional\n            Array of weights that are assigned to individual\n            samples. If not provided,\n            then each sample is given unit weight.\n\n        Returns\n        -------\n        self : object\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples in the number of samples and n_features is the number of features.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'Target vector relative to X',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
      name: 'NuSVC',
      docstring:
        "Nu-Support Vector Classification.\n\n    Similar to SVC but uses a parameter to control the number of support\n    vectors.\n\n    The implementation is based on libsvm.\n\n    Read more in the :ref:`User Guide <svm_classification>`.\n\n    Parameters\n    ----------\n    nu : float, optional (default=0.5)\n        An upper bound on the fraction of training errors and a lower\n        bound of the fraction of support vectors. Should be in the\n        interval (0, 1].\n\n    kernel : string, optional (default='rbf')\n         Specifies the kernel type to be used in the algorithm.\n         It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or\n         a callable.\n         If none is given, 'rbf' will be used. If a callable is given it is\n         used to precompute the kernel matrix.\n\n    degree : int, optional (default=3)\n        Degree of the polynomial kernel function ('poly').\n        Ignored by all other kernels.\n\n    gamma : float, optional (default='auto')\n        Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.\n\n        Current default is 'auto' which uses 1 / n_features,\n        if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var())\n        as value of gamma. The current default of gamma, 'auto', will change\n        to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of\n        'auto' is used as a default indicating that no explicit value of gamma\n        was passed.\n\n    coef0 : float, optional (default=0.0)\n        Independent term in kernel function.\n        It is only significant in 'poly' and 'sigmoid'.\n\n    shrinking : boolean, optional (default=True)\n        Whether to use the shrinking heuristic.\n\n    probability : boolean, optional (default=False)\n        Whether to enable probability estimates. This must be enabled prior\n        to calling `fit`, and will slow down that method.\n\n    tol : float, optional (default=1e-3)\n        Tolerance for stopping criterion.\n\n    cache_size : float, optional\n        Specify the size of the kernel cache (in MB).\n\n    class_weight : {dict, 'balanced'}, optional\n        Set the parameter C of class i to class_weight[i]*C for\n        SVC. If not given, all classes are supposed to have\n        weight one. The \"balanced\" mode uses the values of y to automatically\n        adjust weights inversely proportional to class frequencies as\n        ``n_samples / (n_classes * np.bincount(y))``\n\n    verbose : bool, default: False\n        Enable verbose output. Note that this setting takes advantage of a\n        per-process runtime setting in libsvm that, if enabled, may not work\n        properly in a multithreaded context.\n\n    max_iter : int, optional (default=-1)\n        Hard limit on iterations within solver, or -1 for no limit.\n\n    decision_function_shape : 'ovo', 'ovr', default='ovr'\n        Whether to return a one-vs-rest ('ovr') decision function of shape\n        (n_samples, n_classes) as all other classifiers, or the original\n        one-vs-one ('ovo') decision function of libsvm which has shape\n        (n_samples, n_classes * (n_classes - 1) / 2).\n\n        .. versionchanged:: 0.19\n            decision_function_shape is 'ovr' by default.\n\n        .. versionadded:: 0.17\n           *decision_function_shape='ovr'* is recommended.\n\n        .. versionchanged:: 0.17\n           Deprecated *decision_function_shape='ovo' and None*.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator used when shuffling\n        the data for probability estimates. If int, random_state is the seed\n        used by the random number generator; If RandomState instance,\n        random_state is the random number generator; If None, the random\n        number generator is the RandomState instance used by `np.random`.\n\n    Attributes\n    ----------\n    support_ : array-like, shape = [n_SV]\n        Indices of support vectors.\n\n    support_vectors_ : array-like, shape = [n_SV, n_features]\n        Support vectors.\n\n    n_support_ : array-like, dtype=int32, shape = [n_class]\n        Number of support vectors for each class.\n\n    dual_coef_ : array, shape = [n_class-1, n_SV]\n        Coefficients of the support vector in the decision function.\n        For multiclass, coefficient for all 1-vs-1 classifiers.\n        The layout of the coefficients in the multiclass case is somewhat\n        non-trivial. See the section about multi-class classification in\n        the SVM section of the User Guide for details.\n\n    coef_ : array, shape = [n_class * (n_class-1) / 2, n_features]\n        Weights assigned to the features (coefficients in the primal\n        problem). This is only available in the case of a linear kernel.\n\n        `coef_` is readonly property derived from `dual_coef_` and\n        `support_vectors_`.\n\n    intercept_ : array, shape = [n_class * (n_class-1) / 2]\n        Constants in decision function.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> X = np.array([[-1, -1], [-2, -1], [1, 1], [2, 1]])\n    >>> y = np.array([1, 1, 2, 2])\n    >>> from sklearn.svm import NuSVC\n    >>> clf = NuSVC(gamma='scale')\n    >>> clf.fit(X, y) #doctest: +NORMALIZE_WHITESPACE\n    NuSVC(cache_size=200, class_weight=None, coef0=0.0,\n          decision_function_shape='ovr', degree=3, gamma='scale', kernel='rbf',\n          max_iter=-1, nu=0.5, probability=False, random_state=None,\n          shrinking=True, tol=0.001, verbose=False)\n    >>> print(clf.predict([[-0.8, -1]]))\n    [1]\n\n    See also\n    --------\n    SVC\n        Support Vector Machine for classification using libsvm.\n\n    LinearSVC\n        Scalable linear Support Vector Machine for classification using\n        liblinear.\n\n    Notes\n    -----\n    **References:**\n    `LIBSVM: A Library for Support Vector Machines\n    <http://www.csie.ntu.edu.tw/~cjlin/papers/libsvm.pdf>`__\n    ",
      inputs: [
        {
          name: 'nu',
          docstring:
            'An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1].',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'kernel',
          docstring:
            "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to precompute the kernel matrix.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'degree',
          docstring:
            "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'gamma',
          docstring:
            "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma. The current default of gamma, 'auto', will change to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of 'auto' is used as a default indicating that no explicit value of gamma was passed.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'coef0',
          docstring:
            "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shrinking',
          docstring: 'Whether to use the shrinking heuristic.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'probability',
          docstring:
            'Whether to enable probability estimates. This must be enabled prior to calling `fit`, and will slow down that method.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for stopping criterion.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cache_size',
          docstring: 'Specify the size of the kernel cache (in MB).',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Set the parameter C of class i to class_weight[i]*C for SVC. If not given, all classes are supposed to have weight one. The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies as ``n_samples / (n_classes * np.bincount(y))``',
          param_type: ['LIST_VALID_OPTIONS', 'dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'max_iter',
          docstring:
            'Hard limit on iterations within solver, or -1 for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'decision_function_shape',
          docstring:
            "Whether to return a one-vs-rest ('ovr') decision function of shape (n_samples, n_classes) as all other classifiers, or the original one-vs-one ('ovo') decision function of libsvm which has shape (n_samples, n_classes * (n_classes - 1) / 2).  .. versionchanged:: 0.19     decision_function_shape is 'ovr' by default.  .. versionadded:: 0.17    *decision_function_shape='ovr'* is recommended.  .. versionchanged:: 0.17    Deprecated *decision_function_shape='ovo' and None*.",
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: 'ovr'
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator used when shuffling the data for probability estimates. If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'support_',
          docstring: 'Indices of support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'support_vectors_',
          docstring: 'Support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_support_',
          docstring: 'Number of support vectors for each class.',
          param_type: ['array', 'int'],
          returned: false
        },
        {
          name: 'dual_coef_',
          docstring:
            'Coefficients of the support vector in the decision function. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the section about multi-class classification in the SVM section of the User Guide for details.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is readonly property derived from `dual_coef_` and `support_vectors_`.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
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
          name: '_check_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_compute_kernel',
          docstring: 'Return the data transformed by a callable kernel',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
          docstring:
            'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
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
              name: 'X',
              docstring:
                'Returns the decision function of the sample for each class in the model.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_dense_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_predict_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_coef',
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
          name: '_sparse_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_predict_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_for_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_targets',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_warn_from_fit_status',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            "Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_classes * (n_classes-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n            If decision_function_shape='ovr', the shape is (n_samples,\n            n_classes).\n\n        Notes\n        -----\n        If decision_function_shape='ovo', the function values are proportional\n        to the distance of the samples X to the separating hyperplane. If the\n        exact distances are required, divide the function values by the norm of\n        the weight vector (``coef_``). See also `this question\n        <https://stats.stackexchange.com/questions/14876/\n        interpreting-distance-from-hyperplane-in-svm>`_ for further details.\n        If decision_function_shape='ovr', the decision function is a monotonic\n        transformation of ovo decision function.\n        ",
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
              name: 'X',
              docstring:
                "Returns the decision function of the sample for each class in the model. If decision_function_shape='ovr', the shape is (n_samples, n_classes).",
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'fit',
          docstring:
            'Fit the SVM model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples\n            and n_features is the number of features.\n            For kernel="precomputed", the expected shape of X is\n            (n_samples, n_samples).\n\n        y : array-like, shape (n_samples,)\n            Target values (class labels in classification, real numbers in\n            regression)\n\n        sample_weight : array-like, shape (n_samples,)\n            Per-sample weights. Rescale C per sample. Higher weights\n            force the classifier to put more emphasis on these points.\n\n        Returns\n        -------\n        self : object\n\n        Notes\n        -----\n        If X and y are not C-ordered and contiguous arrays of np.float64 and\n        X is not a scipy.sparse.csr_matrix, X and/or y may be copied.\n\n        If X is a dense array, then the other methods will not support sparse\n        matrices as input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vectors, where n_samples is the number of samples and n_features is the number of features. For kernel="precomputed", the expected shape of X is (n_samples, n_samples).',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target values (class labels in classification, real numbers in regression)',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
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
            'Perform classification on samples in X.\n\n        For an one-class model, +1 or -1 is returned.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            For kernel="precomputed", the expected shape of X is\n            [n_samples_test, n_samples_train]\n\n        Returns\n        -------\n        y_pred : array, shape (n_samples,)\n            Class labels for samples in X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'For kernel="precomputed", the expected shape of X is [n_samples_test, n_samples_train]',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_pred',
              docstring: 'Class labels for samples in X.',
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
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
      name: 'NuSVR',
      docstring:
        "Nu Support Vector Regression.\n\n    Similar to NuSVC, for regression, uses a parameter nu to control\n    the number of support vectors. However, unlike NuSVC, where nu\n    replaces C, here nu replaces the parameter epsilon of epsilon-SVR.\n\n    The implementation is based on libsvm.\n\n    Read more in the :ref:`User Guide <svm_regression>`.\n\n    Parameters\n    ----------\n    nu : float, optional\n        An upper bound on the fraction of training errors and a lower bound of\n        the fraction of support vectors. Should be in the interval (0, 1].  By\n        default 0.5 will be taken.\n\n    C : float, optional (default=1.0)\n        Penalty parameter C of the error term.\n\n    kernel : string, optional (default='rbf')\n         Specifies the kernel type to be used in the algorithm.\n         It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or\n         a callable.\n         If none is given, 'rbf' will be used. If a callable is given it is\n         used to precompute the kernel matrix.\n\n    degree : int, optional (default=3)\n        Degree of the polynomial kernel function ('poly').\n        Ignored by all other kernels.\n\n    gamma : float, optional (default='auto')\n        Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.\n\n        Current default is 'auto' which uses 1 / n_features,\n        if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var())\n        as value of gamma. The current default of gamma, 'auto', will change\n        to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of\n        'auto' is used as a default indicating that no explicit value of gamma\n        was passed.\n\n    coef0 : float, optional (default=0.0)\n        Independent term in kernel function.\n        It is only significant in 'poly' and 'sigmoid'.\n\n    shrinking : boolean, optional (default=True)\n        Whether to use the shrinking heuristic.\n\n    tol : float, optional (default=1e-3)\n        Tolerance for stopping criterion.\n\n    cache_size : float, optional\n        Specify the size of the kernel cache (in MB).\n\n    verbose : bool, default: False\n        Enable verbose output. Note that this setting takes advantage of a\n        per-process runtime setting in libsvm that, if enabled, may not work\n        properly in a multithreaded context.\n\n    max_iter : int, optional (default=-1)\n        Hard limit on iterations within solver, or -1 for no limit.\n\n    Attributes\n    ----------\n    support_ : array-like, shape = [n_SV]\n        Indices of support vectors.\n\n    support_vectors_ : array-like, shape = [nSV, n_features]\n        Support vectors.\n\n    dual_coef_ : array, shape = [1, n_SV]\n        Coefficients of the support vector in the decision function.\n\n    coef_ : array, shape = [1, n_features]\n        Weights assigned to the features (coefficients in the primal\n        problem). This is only available in the case of a linear kernel.\n\n        `coef_` is readonly property derived from `dual_coef_` and\n        `support_vectors_`.\n\n    intercept_ : array, shape = [1]\n        Constants in decision function.\n\n    Examples\n    --------\n    >>> from sklearn.svm import NuSVR\n    >>> import numpy as np\n    >>> n_samples, n_features = 10, 5\n    >>> np.random.seed(0)\n    >>> y = np.random.randn(n_samples)\n    >>> X = np.random.randn(n_samples, n_features)\n    >>> clf = NuSVR(gamma='scale', C=1.0, nu=0.1)\n    >>> clf.fit(X, y)  #doctest: +NORMALIZE_WHITESPACE\n    NuSVR(C=1.0, cache_size=200, coef0=0.0, degree=3, gamma='scale',\n          kernel='rbf', max_iter=-1, nu=0.1, shrinking=True, tol=0.001,\n          verbose=False)\n\n    See also\n    --------\n    NuSVC\n        Support Vector Machine for classification implemented with libsvm\n        with a parameter to control the number of support vectors.\n\n    SVR\n        epsilon Support Vector Machine for regression implemented with libsvm.\n\n    Notes\n    -----\n    **References:**\n    `LIBSVM: A Library for Support Vector Machines\n    <http://www.csie.ntu.edu.tw/~cjlin/papers/libsvm.pdf>`__\n    ",
      inputs: [
        {
          name: 'nu',
          docstring:
            'An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1].  By default 0.5 will be taken.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'C',
          docstring: 'Penalty parameter C of the error term.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'kernel',
          docstring:
            "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to precompute the kernel matrix.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'degree',
          docstring:
            "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'gamma',
          docstring:
            "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma. The current default of gamma, 'auto', will change to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of 'auto' is used as a default indicating that no explicit value of gamma was passed.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'coef0',
          docstring:
            "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shrinking',
          docstring: 'Whether to use the shrinking heuristic.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for stopping criterion.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cache_size',
          docstring: 'Specify the size of the kernel cache (in MB).',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'max_iter',
          docstring:
            'Hard limit on iterations within solver, or -1 for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'support_',
          docstring: 'Indices of support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'support_vectors_',
          docstring: 'Support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'dual_coef_',
          docstring:
            'Coefficients of the support vector in the decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is readonly property derived from `dual_coef_` and `support_vectors_`.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
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
          name: '_compute_kernel',
          docstring: 'Return the data transformed by a callable kernel',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
          docstring:
            'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
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
              name: 'X',
              docstring:
                'Returns the decision function of the sample for each class in the model.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_dense_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_coef',
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
          name: '_sparse_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_for_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_targets',
          docstring:
            'Validation of y and class_weight.\n\n        Default implementation for SVR and one-class; overridden in BaseSVC.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_warn_from_fit_status',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the SVM model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples\n            and n_features is the number of features.\n            For kernel="precomputed", the expected shape of X is\n            (n_samples, n_samples).\n\n        y : array-like, shape (n_samples,)\n            Target values (class labels in classification, real numbers in\n            regression)\n\n        sample_weight : array-like, shape (n_samples,)\n            Per-sample weights. Rescale C per sample. Higher weights\n            force the classifier to put more emphasis on these points.\n\n        Returns\n        -------\n        self : object\n\n        Notes\n        -----\n        If X and y are not C-ordered and contiguous arrays of np.float64 and\n        X is not a scipy.sparse.csr_matrix, X and/or y may be copied.\n\n        If X is a dense array, then the other methods will not support sparse\n        matrices as input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vectors, where n_samples is the number of samples and n_features is the number of features. For kernel="precomputed", the expected shape of X is (n_samples, n_samples).',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target values (class labels in classification, real numbers in regression)',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
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
            'Perform regression on samples in X.\n\n        For an one-class model, +1 (inlier) or -1 (outlier) is returned.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            For kernel="precomputed", the expected shape of X is\n            (n_samples_test, n_samples_train).\n\n        Returns\n        -------\n        y_pred : array, shape (n_samples,)\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'For kernel="precomputed", the expected shape of X is (n_samples_test, n_samples_train).',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_pred',
              docstring: '',
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
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
      name: 'OneClassSVM',
      docstring:
        "Unsupervised Outlier Detection.\n\n    Estimate the support of a high-dimensional distribution.\n\n    The implementation is based on libsvm.\n\n    Read more in the :ref:`User Guide <outlier_detection>`.\n\n    Parameters\n    ----------\n    kernel : string, optional (default='rbf')\n         Specifies the kernel type to be used in the algorithm.\n         It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or\n         a callable.\n         If none is given, 'rbf' will be used. If a callable is given it is\n         used to precompute the kernel matrix.\n\n    degree : int, optional (default=3)\n        Degree of the polynomial kernel function ('poly').\n        Ignored by all other kernels.\n\n    gamma : float, optional (default='auto')\n        Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.\n\n        Current default is 'auto' which uses 1 / n_features,\n        if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var())\n        as value of gamma. The current default of gamma, 'auto', will change\n        to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of\n        'auto' is used as a default indicating that no explicit value of gamma\n        was passed.\n\n    coef0 : float, optional (default=0.0)\n        Independent term in kernel function.\n        It is only significant in 'poly' and 'sigmoid'.\n\n    tol : float, optional\n        Tolerance for stopping criterion.\n\n    nu : float, optional\n        An upper bound on the fraction of training\n        errors and a lower bound of the fraction of support\n        vectors. Should be in the interval (0, 1]. By default 0.5\n        will be taken.\n\n    shrinking : boolean, optional\n        Whether to use the shrinking heuristic.\n\n    cache_size : float, optional\n        Specify the size of the kernel cache (in MB).\n\n    verbose : bool, default: False\n        Enable verbose output. Note that this setting takes advantage of a\n        per-process runtime setting in libsvm that, if enabled, may not work\n        properly in a multithreaded context.\n\n    max_iter : int, optional (default=-1)\n        Hard limit on iterations within solver, or -1 for no limit.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        Ignored.\n\n        .. deprecated:: 0.20\n           ``random_state`` has been deprecated in 0.20 and will be removed in\n           0.22.\n\n    Attributes\n    ----------\n    support_ : array-like, shape = [n_SV]\n        Indices of support vectors.\n\n    support_vectors_ : array-like, shape = [nSV, n_features]\n        Support vectors.\n\n    dual_coef_ : array, shape = [1, n_SV]\n        Coefficients of the support vectors in the decision function.\n\n    coef_ : array, shape = [1, n_features]\n        Weights assigned to the features (coefficients in the primal\n        problem). This is only available in the case of a linear kernel.\n\n        `coef_` is readonly property derived from `dual_coef_` and\n        `support_vectors_`\n\n    intercept_ : array, shape = [1,]\n        Constant in the decision function.\n\n    offset_ : float\n        Offset used to define the decision function from the raw scores.\n        We have the relation: decision_function = score_samples - `offset_`.\n        The offset is the opposite of `intercept_` and is provided for\n        consistency with other outlier detection algorithms.\n\n    ",
      inputs: [
        {
          name: 'kernel',
          docstring:
            "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to precompute the kernel matrix.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'degree',
          docstring:
            "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'gamma',
          docstring:
            "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma. The current default of gamma, 'auto', will change to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of 'auto' is used as a default indicating that no explicit value of gamma was passed.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'coef0',
          docstring:
            "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for stopping criterion.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'nu',
          docstring:
            'An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1]. By default 0.5 will be taken.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shrinking',
          docstring: 'Whether to use the shrinking heuristic.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cache_size',
          docstring: 'Specify the size of the kernel cache (in MB).',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'max_iter',
          docstring:
            'Hard limit on iterations within solver, or -1 for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'Ignored.  .. deprecated:: 0.20    ``random_state`` has been deprecated in 0.20 and will be removed in    0.22.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'support_',
          docstring: 'Indices of support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'support_vectors_',
          docstring: 'Support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'dual_coef_',
          docstring:
            'Coefficients of the support vectors in the decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is readonly property derived from `dual_coef_` and `support_vectors_`',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constant in the decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'offset_',
          docstring:
            'Offset used to define the decision function from the raw scores. We have the relation: decision_function = score_samples - `offset_`. The offset is the opposite of `intercept_` and is provided for consistency with other outlier detection algorithms.',
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
          name: '_compute_kernel',
          docstring: 'Return the data transformed by a callable kernel',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
          docstring:
            'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
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
              name: 'X',
              docstring:
                'Returns the decision function of the sample for each class in the model.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_dense_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_coef',
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
          name: '_sparse_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_for_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_targets',
          docstring:
            'Validation of y and class_weight.\n\n        Default implementation for SVR and one-class; overridden in BaseSVC.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_warn_from_fit_status',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Signed distance to the separating hyperplane.\n\n        Signed distance is positive for an inlier and negative for an outlier.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        dec : array-like, shape (n_samples,)\n            Returns the decision function of the samples.\n        ',
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
              name: 'dec',
              docstring: 'Returns the decision function of the samples.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'fit',
          docstring:
            '\n        Detects the soft boundary of the set of samples X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Set of samples, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        sample_weight : array-like, shape (n_samples,)\n            Per-sample weights. Rescale C per sample. Higher weights\n            force the classifier to put more emphasis on these points.\n\n        y : Ignored\n            not used, present for API consistency by convention.\n\n        Returns\n        -------\n        self : object\n\n        Notes\n        -----\n        If X is not a C-ordered contiguous array it is copied.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Set of samples, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'not used, present for API consistency by convention.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit_predict',
          docstring:
            'Performs fit on X and returns labels for X.\n\n        Returns -1 for outliers and 1 for inliers.\n\n        Parameters\n        ----------\n        X : ndarray, shape (n_samples, n_features)\n            Input data.\n\n        y : Ignored\n            not used, present for API consistency by convention.\n\n        Returns\n        -------\n        y : ndarray, shape (n_samples,)\n            1 for inliers, -1 for outliers.\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Input data.',
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'not used, present for API consistency by convention.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y',
              docstring: '1 for inliers, -1 for outliers.',
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
          name: 'predict',
          docstring:
            '\n        Perform classification on samples in X.\n\n        For a one-class model, +1 or -1 is returned.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            For kernel="precomputed", the expected shape of X is\n            [n_samples_test, n_samples_train]\n\n        Returns\n        -------\n        y_pred : array, shape (n_samples,)\n            Class labels for samples in X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'For kernel="precomputed", the expected shape of X is [n_samples_test, n_samples_train]',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_pred',
              docstring: 'Class labels for samples in X.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'score_samples',
          docstring:
            'Raw scoring function of the samples.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        score_samples : array-like, shape (n_samples,)\n            Returns the (unshifted) scoring function of the samples.\n        ',
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
              name: 'score_samples',
              docstring:
                'Returns the (unshifted) scoring function of the samples.',
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
        }
      ],
      nodes: []
    },
    {
      name: 'SVC',
      docstring:
        "C-Support Vector Classification.\n\n    The implementation is based on libsvm. The fit time scales at least\n    quadratically with the number of samples and may be impractical\n    beyond tens of thousands of samples. For large datasets\n    consider using :class:`sklearn.linear_model.LinearSVC` or\n    :class:`sklearn.linear_model.SGDClassifier` instead, possibly after a\n    :class:`sklearn.kernel_approximation.Nystroem` transformer.\n\n    The multiclass support is handled according to a one-vs-one scheme.\n\n    For details on the precise mathematical formulation of the provided\n    kernel functions and how `gamma`, `coef0` and `degree` affect each\n    other, see the corresponding section in the narrative documentation:\n    :ref:`svm_kernels`.\n\n    Read more in the :ref:`User Guide <svm_classification>`.\n\n    Parameters\n    ----------\n    C : float, optional (default=1.0)\n        Penalty parameter C of the error term.\n\n    kernel : string, optional (default='rbf')\n        Specifies the kernel type to be used in the algorithm.\n        It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or\n        a callable.\n        If none is given, 'rbf' will be used. If a callable is given it is\n        used to pre-compute the kernel matrix from data matrices; that matrix\n        should be an array of shape ``(n_samples, n_samples)``.\n\n    degree : int, optional (default=3)\n        Degree of the polynomial kernel function ('poly').\n        Ignored by all other kernels.\n\n    gamma : float, optional (default='auto')\n        Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.\n\n        Current default is 'auto' which uses 1 / n_features,\n        if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var())\n        as value of gamma. The current default of gamma, 'auto', will change\n        to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of\n        'auto' is used as a default indicating that no explicit value of gamma\n        was passed.\n\n    coef0 : float, optional (default=0.0)\n        Independent term in kernel function.\n        It is only significant in 'poly' and 'sigmoid'.\n\n    shrinking : boolean, optional (default=True)\n        Whether to use the shrinking heuristic.\n\n    probability : boolean, optional (default=False)\n        Whether to enable probability estimates. This must be enabled prior\n        to calling `fit`, and will slow down that method.\n\n    tol : float, optional (default=1e-3)\n        Tolerance for stopping criterion.\n\n    cache_size : float, optional\n        Specify the size of the kernel cache (in MB).\n\n    class_weight : {dict, 'balanced'}, optional\n        Set the parameter C of class i to class_weight[i]*C for\n        SVC. If not given, all classes are supposed to have\n        weight one.\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n    verbose : bool, default: False\n        Enable verbose output. Note that this setting takes advantage of a\n        per-process runtime setting in libsvm that, if enabled, may not work\n        properly in a multithreaded context.\n\n    max_iter : int, optional (default=-1)\n        Hard limit on iterations within solver, or -1 for no limit.\n\n    decision_function_shape : 'ovo', 'ovr', default='ovr'\n        Whether to return a one-vs-rest ('ovr') decision function of shape\n        (n_samples, n_classes) as all other classifiers, or the original\n        one-vs-one ('ovo') decision function of libsvm which has shape\n        (n_samples, n_classes * (n_classes - 1) / 2). However, one-vs-one\n        ('ovo') is always used as multi-class strategy.\n\n        .. versionchanged:: 0.19\n            decision_function_shape is 'ovr' by default.\n\n        .. versionadded:: 0.17\n           *decision_function_shape='ovr'* is recommended.\n\n        .. versionchanged:: 0.17\n           Deprecated *decision_function_shape='ovo' and None*.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator used when shuffling\n        the data for probability estimates. If int, random_state is the\n        seed used by the random number generator; If RandomState instance,\n        random_state is the random number generator; If None, the random\n        number generator is the RandomState instance used by `np.random`.\n\n    Attributes\n    ----------\n    support_ : array-like, shape = [n_SV]\n        Indices of support vectors.\n\n    support_vectors_ : array-like, shape = [n_SV, n_features]\n        Support vectors.\n\n    n_support_ : array-like, dtype=int32, shape = [n_class]\n        Number of support vectors for each class.\n\n    dual_coef_ : array, shape = [n_class-1, n_SV]\n        Coefficients of the support vector in the decision function.\n        For multiclass, coefficient for all 1-vs-1 classifiers.\n        The layout of the coefficients in the multiclass case is somewhat\n        non-trivial. See the section about multi-class classification in the\n        SVM section of the User Guide for details.\n\n    coef_ : array, shape = [n_class * (n_class-1) / 2, n_features]\n        Weights assigned to the features (coefficients in the primal\n        problem). This is only available in the case of a linear kernel.\n\n        `coef_` is a readonly property derived from `dual_coef_` and\n        `support_vectors_`.\n\n    intercept_ : array, shape = [n_class * (n_class-1) / 2]\n        Constants in decision function.\n\n    fit_status_ : int\n        0 if correctly fitted, 1 otherwise (will raise warning)\n\n    probA_ : array, shape = [n_class * (n_class-1) / 2]\n    probB_ : array, shape = [n_class * (n_class-1) / 2]\n        If probability=True, the parameters learned in Platt scaling to\n        produce probability estimates from decision values. If\n        probability=False, an empty array. Platt scaling uses the logistic\n        function\n        ``1 / (1 + exp(decision_value * probA_ + probB_))``\n        where ``probA_`` and ``probB_`` are learned from the dataset [2]_. For\n        more information on the multiclass case and training procedure see\n        section 8 of [1]_.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> X = np.array([[-1, -1], [-2, -1], [1, 1], [2, 1]])\n    >>> y = np.array([1, 1, 2, 2])\n    >>> from sklearn.svm import SVC\n    >>> clf = SVC(gamma='auto')\n    >>> clf.fit(X, y) #doctest: +NORMALIZE_WHITESPACE\n    SVC(C=1.0, cache_size=200, class_weight=None, coef0=0.0,\n        decision_function_shape='ovr', degree=3, gamma='auto', kernel='rbf',\n        max_iter=-1, probability=False, random_state=None, shrinking=True,\n        tol=0.001, verbose=False)\n    >>> print(clf.predict([[-0.8, -1]]))\n    [1]\n\n    See also\n    --------\n    SVR\n        Support Vector Machine for Regression implemented using libsvm.\n\n    LinearSVC\n        Scalable Linear Support Vector Machine for classification\n        implemented using liblinear. Check the See also section of\n        LinearSVC for more comparison element.\n\n    References\n    ----------\n    .. [1] `LIBSVM: A Library for Support Vector Machines\n        <http://www.csie.ntu.edu.tw/~cjlin/papers/libsvm.pdf>`_\n\n    .. [2] `Platt, John (1999). \"Probabilistic outputs for support vector\n        machines and comparison to regularizedlikelihood methods.\"\n        <http://citeseer.ist.psu.edu/viewdoc/summary?doi=10.1.1.41.1639>`_\n    ",
      inputs: [
        {
          name: 'C',
          docstring: 'Penalty parameter C of the error term.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'kernel',
          docstring:
            "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to pre-compute the kernel matrix from data matrices; that matrix should be an array of shape ``(n_samples, n_samples)``.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'degree',
          docstring:
            "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'gamma',
          docstring:
            "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma. The current default of gamma, 'auto', will change to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of 'auto' is used as a default indicating that no explicit value of gamma was passed.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'coef0',
          docstring:
            "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shrinking',
          docstring: 'Whether to use the shrinking heuristic.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'probability',
          docstring:
            'Whether to enable probability estimates. This must be enabled prior to calling `fit`, and will slow down that method.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for stopping criterion.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cache_size',
          docstring: 'Specify the size of the kernel cache (in MB).',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'class_weight',
          docstring:
            'Set the parameter C of class i to class_weight[i]*C for SVC. If not given, all classes are supposed to have weight one. The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``',
          param_type: ['LIST_VALID_OPTIONS', 'dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'max_iter',
          docstring:
            'Hard limit on iterations within solver, or -1 for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'decision_function_shape',
          docstring:
            "Whether to return a one-vs-rest ('ovr') decision function of shape (n_samples, n_classes) as all other classifiers, or the original one-vs-one ('ovo') decision function of libsvm which has shape (n_samples, n_classes * (n_classes - 1) / 2). However, one-vs-one ('ovo') is always used as multi-class strategy.  .. versionchanged:: 0.19     decision_function_shape is 'ovr' by default.  .. versionadded:: 0.17    *decision_function_shape='ovr'* is recommended.  .. versionchanged:: 0.17    Deprecated *decision_function_shape='ovo' and None*.",
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: 'ovr'
        },
        {
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator used when shuffling the data for probability estimates. If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'support_',
          docstring: 'Indices of support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'support_vectors_',
          docstring: 'Support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_support_',
          docstring: 'Number of support vectors for each class.',
          param_type: ['array', 'int'],
          returned: false
        },
        {
          name: 'dual_coef_',
          docstring:
            'Coefficients of the support vector in the decision function. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the section about multi-class classification in the SVM section of the User Guide for details.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is a readonly property derived from `dual_coef_` and `support_vectors_`.',
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
          name: 'fit_status_',
          docstring: '0 if correctly fitted, 1 otherwise (will raise warning)',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'probA_',
          docstring: '',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'probB_',
          docstring:
            'If probability=True, the parameters learned in Platt scaling to produce probability estimates from decision values. If probability=False, an empty array. Platt scaling uses the logistic function ``1 / (1 + exp(decision_value * probA_ + probB_))`` where ``probA_`` and ``probB_`` are learned from the dataset [2]_. For more information on the multiclass case and training procedure see section 8 of [1]_.',
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
          name: '_check_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_compute_kernel',
          docstring: 'Return the data transformed by a callable kernel',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
          docstring:
            'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
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
              name: 'X',
              docstring:
                'Returns the decision function of the sample for each class in the model.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_dense_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_predict_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_coef',
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
          name: '_sparse_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_predict_proba',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_for_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_targets',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_warn_from_fit_status',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            "Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_classes * (n_classes-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n            If decision_function_shape='ovr', the shape is (n_samples,\n            n_classes).\n\n        Notes\n        -----\n        If decision_function_shape='ovo', the function values are proportional\n        to the distance of the samples X to the separating hyperplane. If the\n        exact distances are required, divide the function values by the norm of\n        the weight vector (``coef_``). See also `this question\n        <https://stats.stackexchange.com/questions/14876/\n        interpreting-distance-from-hyperplane-in-svm>`_ for further details.\n        If decision_function_shape='ovr', the decision function is a monotonic\n        transformation of ovo decision function.\n        ",
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
              name: 'X',
              docstring:
                "Returns the decision function of the sample for each class in the model. If decision_function_shape='ovr', the shape is (n_samples, n_classes).",
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'fit',
          docstring:
            'Fit the SVM model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples\n            and n_features is the number of features.\n            For kernel="precomputed", the expected shape of X is\n            (n_samples, n_samples).\n\n        y : array-like, shape (n_samples,)\n            Target values (class labels in classification, real numbers in\n            regression)\n\n        sample_weight : array-like, shape (n_samples,)\n            Per-sample weights. Rescale C per sample. Higher weights\n            force the classifier to put more emphasis on these points.\n\n        Returns\n        -------\n        self : object\n\n        Notes\n        -----\n        If X and y are not C-ordered and contiguous arrays of np.float64 and\n        X is not a scipy.sparse.csr_matrix, X and/or y may be copied.\n\n        If X is a dense array, then the other methods will not support sparse\n        matrices as input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vectors, where n_samples is the number of samples and n_features is the number of features. For kernel="precomputed", the expected shape of X is (n_samples, n_samples).',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target values (class labels in classification, real numbers in regression)',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
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
            'Perform classification on samples in X.\n\n        For an one-class model, +1 or -1 is returned.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            For kernel="precomputed", the expected shape of X is\n            [n_samples_test, n_samples_train]\n\n        Returns\n        -------\n        y_pred : array, shape (n_samples,)\n            Class labels for samples in X.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'For kernel="precomputed", the expected shape of X is [n_samples_test, n_samples_train]',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_pred',
              docstring: 'Class labels for samples in X.',
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
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True labels for X.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
      name: 'SVR',
      docstring:
        "Epsilon-Support Vector Regression.\n\n    The free parameters in the model are C and epsilon.\n\n    The implementation is based on libsvm. The fit time complexity\n    is more than quadratic with the number of samples which makes it hard\n    to scale to datasets with more than a couple of 10000 samples. For large\n    datasets consider using :class:`sklearn.linear_model.LinearSVR` or\n    :class:`sklearn.linear_model.SGDRegressor` instead, possibly after a\n    :class:`sklearn.kernel_approximation.Nystroem` transformer.\n\n    Read more in the :ref:`User Guide <svm_regression>`.\n\n    Parameters\n    ----------\n    kernel : string, optional (default='rbf')\n         Specifies the kernel type to be used in the algorithm.\n         It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or\n         a callable.\n         If none is given, 'rbf' will be used. If a callable is given it is\n         used to precompute the kernel matrix.\n\n    degree : int, optional (default=3)\n        Degree of the polynomial kernel function ('poly').\n        Ignored by all other kernels.\n\n    gamma : float, optional (default='auto')\n        Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.\n\n        Current default is 'auto' which uses 1 / n_features,\n        if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var())\n        as value of gamma. The current default of gamma, 'auto', will change\n        to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of\n        'auto' is used as a default indicating that no explicit value of gamma\n        was passed.\n\n    coef0 : float, optional (default=0.0)\n        Independent term in kernel function.\n        It is only significant in 'poly' and 'sigmoid'.\n\n    tol : float, optional (default=1e-3)\n        Tolerance for stopping criterion.\n\n    C : float, optional (default=1.0)\n        Penalty parameter C of the error term.\n\n    epsilon : float, optional (default=0.1)\n         Epsilon in the epsilon-SVR model. It specifies the epsilon-tube\n         within which no penalty is associated in the training loss function\n         with points predicted within a distance epsilon from the actual\n         value.\n\n    shrinking : boolean, optional (default=True)\n        Whether to use the shrinking heuristic.\n\n    cache_size : float, optional\n        Specify the size of the kernel cache (in MB).\n\n    verbose : bool, default: False\n        Enable verbose output. Note that this setting takes advantage of a\n        per-process runtime setting in libsvm that, if enabled, may not work\n        properly in a multithreaded context.\n\n    max_iter : int, optional (default=-1)\n        Hard limit on iterations within solver, or -1 for no limit.\n\n    Attributes\n    ----------\n    support_ : array-like, shape = [n_SV]\n        Indices of support vectors.\n\n    support_vectors_ : array-like, shape = [nSV, n_features]\n        Support vectors.\n\n    dual_coef_ : array, shape = [1, n_SV]\n        Coefficients of the support vector in the decision function.\n\n    coef_ : array, shape = [1, n_features]\n        Weights assigned to the features (coefficients in the primal\n        problem). This is only available in the case of a linear kernel.\n\n        `coef_` is readonly property derived from `dual_coef_` and\n        `support_vectors_`.\n\n    intercept_ : array, shape = [1]\n        Constants in decision function.\n\n    Examples\n    --------\n    >>> from sklearn.svm import SVR\n    >>> import numpy as np\n    >>> n_samples, n_features = 10, 5\n    >>> rng = np.random.RandomState(0)\n    >>> y = rng.randn(n_samples)\n    >>> X = rng.randn(n_samples, n_features)\n    >>> clf = SVR(gamma='scale', C=1.0, epsilon=0.2)\n    >>> clf.fit(X, y) #doctest: +NORMALIZE_WHITESPACE\n    SVR(C=1.0, cache_size=200, coef0=0.0, degree=3, epsilon=0.2, gamma='scale',\n        kernel='rbf', max_iter=-1, shrinking=True, tol=0.001, verbose=False)\n\n    See also\n    --------\n    NuSVR\n        Support Vector Machine for regression implemented using libsvm\n        using a parameter to control the number of support vectors.\n\n    LinearSVR\n        Scalable Linear Support Vector Machine for regression\n        implemented using liblinear.\n\n    Notes\n    -----\n    **References:**\n    `LIBSVM: A Library for Support Vector Machines\n    <http://www.csie.ntu.edu.tw/~cjlin/papers/libsvm.pdf>`__\n    ",
      inputs: [
        {
          name: 'kernel',
          docstring:
            "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to precompute the kernel matrix.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'degree',
          docstring:
            "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'gamma',
          docstring:
            "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma. The current default of gamma, 'auto', will change to 'scale' in version 0.22. 'auto_deprecated', a deprecated version of 'auto' is used as a default indicating that no explicit value of gamma was passed.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'coef0',
          docstring:
            "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tol',
          docstring: 'Tolerance for stopping criterion.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'C',
          docstring: 'Penalty parameter C of the error term.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'epsilon',
          docstring:
            'Epsilon in the epsilon-SVR model. It specifies the epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'shrinking',
          docstring: 'Whether to use the shrinking heuristic.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'cache_size',
          docstring: 'Specify the size of the kernel cache (in MB).',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'verbose',
          docstring:
            'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'max_iter',
          docstring:
            'Hard limit on iterations within solver, or -1 for no limit.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: 'support_',
          docstring: 'Indices of support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'support_vectors_',
          docstring: 'Support vectors.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'dual_coef_',
          docstring:
            'Coefficients of the support vector in the decision function.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'coef_',
          docstring:
            'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is readonly property derived from `dual_coef_` and `support_vectors_`.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'intercept_',
          docstring: 'Constants in decision function.',
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
          name: '_compute_kernel',
          docstring: 'Return the data transformed by a callable kernel',
          inputs: [],
          outputs: []
        },
        {
          name: '_decision_function',
          docstring:
            'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
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
              name: 'X',
              docstring:
                'Returns the decision function of the sample for each class in the model.',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: '_dense_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_dense_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_coef',
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
          name: '_sparse_decision_function',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_sparse_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_for_predict',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_targets',
          docstring:
            'Validation of y and class_weight.\n\n        Default implementation for SVR and one-class; overridden in BaseSVC.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_warn_from_fit_status',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Fit the SVM model according to the given training data.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples\n            and n_features is the number of features.\n            For kernel="precomputed", the expected shape of X is\n            (n_samples, n_samples).\n\n        y : array-like, shape (n_samples,)\n            Target values (class labels in classification, real numbers in\n            regression)\n\n        sample_weight : array-like, shape (n_samples,)\n            Per-sample weights. Rescale C per sample. Higher weights\n            force the classifier to put more emphasis on these points.\n\n        Returns\n        -------\n        self : object\n\n        Notes\n        -----\n        If X and y are not C-ordered and contiguous arrays of np.float64 and\n        X is not a scipy.sparse.csr_matrix, X and/or y may be copied.\n\n        If X is a dense array, then the other methods will not support sparse\n        matrices as input.\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vectors, where n_samples is the number of samples and n_features is the number of features. For kernel="precomputed", the expected shape of X is (n_samples, n_samples).',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target values (class labels in classification, real numbers in regression)',
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring:
                'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
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
            'Perform regression on samples in X.\n\n        For an one-class model, +1 (inlier) or -1 (outlier) is returned.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            For kernel="precomputed", the expected shape of X is\n            (n_samples_test, n_samples_train).\n\n        Returns\n        -------\n        y_pred : array, shape (n_samples,)\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'For kernel="precomputed", the expected shape of X is (n_samples_test, n_samples_train).',
              param_type: ['LIST_VALID_OPTIONS', 'array'],
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'y_pred',
              docstring: '',
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
              expected_shape: '(n_samples, n_features)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring: 'True values for X.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
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
  module: 'svm'
}
