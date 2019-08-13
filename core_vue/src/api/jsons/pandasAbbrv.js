export default {
  name: 'pandas',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'read_csv',
      docstring:
        "\nRead a comma-separated values (csv) file into DataFrame.\n\nAlso supports optionally iterating or breaking of the file\ninto chunks.\n\nAdditional help can be found in the online docs for\n`IO Tools <http://pandas.pydata.org/pandas-docs/stable/io.html>`_.\n\nParameters\n----------\nfilepath_or_buffer : str, path object, or file-like object\n    Any valid string path is acceptable. The string could be a URL. Valid\n    URL schemes include http, ftp, s3, and file. For file URLs, a host is\n    expected. A local file could be: file://localhost/path/to/table.csv.\n\n    If you want to pass in a path object, pandas accepts either\n    ``pathlib.Path`` or ``py._path.local.LocalPath``.\n\n    By file-like object, we refer to objects with a ``read()`` method, such as\n    a file handler (e.g. via builtin ``open`` function) or ``StringIO``.\nsep : str, default ','\n    Delimiter to use. If sep is None, the C engine cannot automatically detect\n    the separator, but the Python parsing engine can, meaning the latter will\n    be used and automatically detect the separator by Python's builtin sniffer\n    tool, ``csv.Sniffer``. In addition, separators longer than 1 character and\n    different from ``'\\s+'`` will be interpreted as regular expressions and\n    will also force the use of the Python parsing engine. Note that regex\n    delimiters are prone to ignoring quoted data. Regex example: ``'\\r\\t'``.\ndelimiter : str, default ``None``\n    Alias for sep.\nheader : int, list of int, default 'infer'\n    Row number(s) to use as the column names, and the start of the\n    data.  Default behavior is to infer the column names: if no names\n    are passed the behavior is identical to ``header=0`` and column\n    names are inferred from the first line of the file, if column\n    names are passed explicitly then the behavior is identical to\n    ``header=None``. Explicitly pass ``header=0`` to be able to\n    replace existing names. The header can be a list of integers that\n    specify row locations for a multi-index on the columns\n    e.g. [0,1,3]. Intervening rows that are not specified will be\n    skipped (e.g. 2 in this example is skipped). Note that this\n    parameter ignores commented lines and empty lines if\n    ``skip_blank_lines=True``, so ``header=0`` denotes the first line of\n    data rather than the first line of the file.\nnames : array-like, optional\n    List of column names to use. If file contains no header row, then you\n    should explicitly pass ``header=None``. Duplicates in this list will cause\n    a ``UserWarning`` to be issued.\nindex_col : int, sequence or bool, optional\n    Column to use as the row labels of the DataFrame. If a sequence is given, a\n    MultiIndex is used. If you have a malformed file with delimiters at the end\n    of each line, you might consider ``index_col=False`` to force pandas to\n    not use the first column as the index (row names).\nusecols : list-like or callable, optional\n    Return a subset of the columns. If list-like, all elements must either\n    be positional (i.e. integer indices into the document columns) or strings\n    that correspond to column names provided either by the user in `names` or\n    inferred from the document header row(s). For example, a valid list-like\n    `usecols` parameter would be ``[0, 1, 2]`` or ``['foo', 'bar', 'baz']``.\n    Element order is ignored, so ``usecols=[0, 1]`` is the same as ``[1, 0]``.\n    To instantiate a DataFrame from ``data`` with element order preserved use\n    ``pd.read_csv(data, usecols=['foo', 'bar'])[['foo', 'bar']]`` for columns\n    in ``['foo', 'bar']`` order or\n    ``pd.read_csv(data, usecols=['foo', 'bar'])[['bar', 'foo']]``\n    for ``['bar', 'foo']`` order.\n\n    If callable, the callable function will be evaluated against the column\n    names, returning names where the callable function evaluates to True. An\n    example of a valid callable argument would be ``lambda x: x.upper() in\n    ['AAA', 'BBB', 'DDD']``. Using this parameter results in much faster\n    parsing time and lower memory usage.\nsqueeze : bool, default False\n    If the parsed data only contains one column then return a Series.\nprefix : str, optional\n    Prefix to add to column numbers when no header, e.g. 'X' for X0, X1, ...\nmangle_dupe_cols : bool, default True\n    Duplicate columns will be specified as 'X', 'X.1', ...'X.N', rather than\n    'X'...'X'. Passing in False will cause data to be overwritten if there\n    are duplicate names in the columns.\ndtype : Type name or dict of column -> type, optional\n    Data type for data or columns. E.g. {'a': np.float64, 'b': np.int32,\n    'c': 'Int64'}\n    Use `str` or `object` together with suitable `na_values` settings\n    to preserve and not interpret dtype.\n    If converters are specified, they will be applied INSTEAD\n    of dtype conversion.\nengine : {'c', 'python'}, optional\n    Parser engine to use. The C engine is faster while the python engine is\n    currently more feature-complete.\nconverters : dict, optional\n    Dict of functions for converting values in certain columns. Keys can either\n    be integers or column labels.\ntrue_values : list, optional\n    Values to consider as True.\nfalse_values : list, optional\n    Values to consider as False.\nskipinitialspace : bool, default False\n    Skip spaces after delimiter.\nskiprows : list-like, int or callable, optional\n    Line numbers to skip (0-indexed) or number of lines to skip (int)\n    at the start of the file.\n\n    If callable, the callable function will be evaluated against the row\n    indices, returning True if the row should be skipped and False otherwise.\n    An example of a valid callable argument would be ``lambda x: x in [0, 2]``.\nskipfooter : int, default 0\n    Number of lines at bottom of file to skip (Unsupported with engine='c').\nnrows : int, optional\n    Number of rows of file to read. Useful for reading pieces of large files.\nna_values : scalar, str, list-like, or dict, optional\n    Additional strings to recognize as NA/NaN. If dict passed, specific\n    per-column NA values.  By default the following values are interpreted as\n    NaN: '', '#N/A', '#N/A N/A', '#NA', '-1.#IND', '-1.#QNAN', '-NaN', '-nan',\n    '1.#IND', '1.#QNAN', 'N/A', 'NA', 'NULL', 'NaN', 'n/a', 'nan',\n    'null'.\nkeep_default_na : bool, default True\n    Whether or not to include the default NaN values when parsing the data.\n    Depending on whether `na_values` is passed in, the behavior is as follows:\n\n    * If `keep_default_na` is True, and `na_values` are specified, `na_values`\n      is appended to the default NaN values used for parsing.\n    * If `keep_default_na` is True, and `na_values` are not specified, only\n      the default NaN values are used for parsing.\n    * If `keep_default_na` is False, and `na_values` are specified, only\n      the NaN values specified `na_values` are used for parsing.\n    * If `keep_default_na` is False, and `na_values` are not specified, no\n      strings will be parsed as NaN.\n\n    Note that if `na_filter` is passed in as False, the `keep_default_na` and\n    `na_values` parameters will be ignored.\nna_filter : bool, default True\n    Detect missing value markers (empty strings and the value of na_values). In\n    data without any NAs, passing na_filter=False can improve the performance\n    of reading a large file.\nverbose : bool, default False\n    Indicate number of NA values placed in non-numeric columns.\nskip_blank_lines : bool, default True\n    If True, skip over blank lines rather than interpreting as NaN values.\nparse_dates : bool or list of int or names or list of lists or dict, default False\n    The behavior is as follows:\n\n    * boolean. If True -> try parsing the index.\n    * list of int or names. e.g. If [1, 2, 3] -> try parsing columns 1, 2, 3\n      each as a separate date column.\n    * list of lists. e.g.  If [[1, 3]] -> combine columns 1 and 3 and parse as\n      a single date column.\n    * dict, e.g. {'foo' : [1, 3]} -> parse columns 1, 3 as date and call\n      result 'foo'\n\n    If a column or index cannot be represented as an array of datetimes,\n    say because of an unparseable value or a mixture of timezones, the column\n    or index will be returned unaltered as an object data type. For\n    non-standard datetime parsing, use ``pd.to_datetime`` after\n    ``pd.read_csv``. To parse an index or column with a mixture of timezones,\n    specify ``date_parser`` to be a partially-applied\n    :func:`pandas.to_datetime` with ``utc=True``. See\n    :ref:`io.csv.mixed_timezones` for more.\n\n    Note: A fast-path exists for iso8601-formatted dates.\ninfer_datetime_format : bool, default False\n    If True and `parse_dates` is enabled, pandas will attempt to infer the\n    format of the datetime strings in the columns, and if it can be inferred,\n    switch to a faster method of parsing them. In some cases this can increase\n    the parsing speed by 5-10x.\nkeep_date_col : bool, default False\n    If True and `parse_dates` specifies combining multiple columns then\n    keep the original columns.\ndate_parser : function, optional\n    Function to use for converting a sequence of string columns to an array of\n    datetime instances. The default uses ``dateutil.parser.parser`` to do the\n    conversion. Pandas will try to call `date_parser` in three different ways,\n    advancing to the next if an exception occurs: 1) Pass one or more arrays\n    (as defined by `parse_dates`) as arguments; 2) concatenate (row-wise) the\n    string values from the columns defined by `parse_dates` into a single array\n    and pass that; and 3) call `date_parser` once for each row using one or\n    more strings (corresponding to the columns defined by `parse_dates`) as\n    arguments.\ndayfirst : bool, default False\n    DD/MM format dates, international and European format.\niterator : bool, default False\n    Return TextFileReader object for iteration or getting chunks with\n    ``get_chunk()``.\nchunksize : int, optional\n    Return TextFileReader object for iteration.\n    See the `IO Tools docs\n    <http://pandas.pydata.org/pandas-docs/stable/io.html#io-chunking>`_\n    for more information on ``iterator`` and ``chunksize``.\ncompression : {'infer', 'gzip', 'bz2', 'zip', 'xz', None}, default 'infer'\n    For on-the-fly decompression of on-disk data. If 'infer' and\n    `filepath_or_buffer` is path-like, then detect compression from the\n    following extensions: '.gz', '.bz2', '.zip', or '.xz' (otherwise no\n    decompression). If using 'zip', the ZIP file must contain only one data\n    file to be read in. Set to None for no decompression.\n\n    .. versionadded:: 0.18.1 support for 'zip' and 'xz' compression.\n\nthousands : str, optional\n    Thousands separator.\ndecimal : str, default '.'\n    Character to recognize as decimal point (e.g. use ',' for European data).\nlineterminator : str (length 1), optional\n    Character to break file into lines. Only valid with C parser.\nquotechar : str (length 1), optional\n    The character used to denote the start and end of a quoted item. Quoted\n    items can include the delimiter and it will be ignored.\nquoting : int or csv.QUOTE_* instance, default 0\n    Control field quoting behavior per ``csv.QUOTE_*`` constants. Use one of\n    QUOTE_MINIMAL (0), QUOTE_ALL (1), QUOTE_NONNUMERIC (2) or QUOTE_NONE (3).\ndoublequote : bool, default ``True``\n   When quotechar is specified and quoting is not ``QUOTE_NONE``, indicate\n   whether or not to interpret two consecutive quotechar elements INSIDE a\n   field as a single ``quotechar`` element.\nescapechar : str (length 1), optional\n    One-character string used to escape other characters.\ncomment : str, optional\n    Indicates remainder of line should not be parsed. If found at the beginning\n    of a line, the line will be ignored altogether. This parameter must be a\n    single character. Like empty lines (as long as ``skip_blank_lines=True``),\n    fully commented lines are ignored by the parameter `header` but not by\n    `skiprows`. For example, if ``comment='#'``, parsing\n    ``#empty\\na,b,c\\n1,2,3`` with ``header=0`` will result in 'a,b,c' being\n    treated as the header.\nencoding : str, optional\n    Encoding to use for UTF when reading/writing (ex. 'utf-8'). `List of Python\n    standard encodings\n    <https://docs.python.org/3/library/codecs.html#standard-encodings>`_ .\ndialect : str or csv.Dialect, optional\n    If provided, this parameter will override values (default or not) for the\n    following parameters: `delimiter`, `doublequote`, `escapechar`,\n    `skipinitialspace`, `quotechar`, and `quoting`. If it is necessary to\n    override values, a ParserWarning will be issued. See csv.Dialect\n    documentation for more details.\ntupleize_cols : bool, default False\n    Leave a list of tuples on columns as is (default is to convert to\n    a MultiIndex on the columns).\n\n    .. deprecated:: 0.21.0\n       This argument will be removed and will always convert to MultiIndex\n\nerror_bad_lines : bool, default True\n    Lines with too many fields (e.g. a csv line with too many commas) will by\n    default cause an exception to be raised, and no DataFrame will be returned.\n    If False, then these \"bad lines\" will dropped from the DataFrame that is\n    returned.\nwarn_bad_lines : bool, default True\n    If error_bad_lines is False, and warn_bad_lines is True, a warning for each\n    \"bad line\" will be output.\ndelim_whitespace : bool, default False\n    Specifies whether or not whitespace (e.g. ``' '`` or ``'\t'``) will be\n    used as the sep. Equivalent to setting ``sep='\\s+'``. If this option\n    is set to True, nothing should be passed in for the ``delimiter``\n    parameter.\n\n    .. versionadded:: 0.18.1 support for the Python parser.\n\nlow_memory : bool, default True\n    Internally process the file in chunks, resulting in lower memory use\n    while parsing, but possibly mixed type inference.  To ensure no mixed\n    types either set False, or specify the type with the `dtype` parameter.\n    Note that the entire file is read into a single DataFrame regardless,\n    use the `chunksize` or `iterator` parameter to return the data in chunks.\n    (Only valid with C parser).\nmemory_map : bool, default False\n    If a filepath is provided for `filepath_or_buffer`, map the file object\n    directly onto memory and access the data directly from there. Using this\n    option can improve performance because there is no longer any I/O overhead.\nfloat_precision : str, optional\n    Specifies which converter the C engine should use for floating-point\n    values. The options are `None` for the ordinary converter,\n    `high` for the high-precision converter, and `round_trip` for the\n    round-trip converter.\n\nReturns\n-------\nDataFrame or TextParser\n    A comma-separated values (csv) file is returned as two-dimensional\n    data structure with labeled axes.\n\nSee Also\n--------\nto_csv : Write DataFrame to a comma-separated values (csv) file.\nread_csv : Read a comma-separated values (csv) file into DataFrame.\nread_fwf : Read a table of fixed-width formatted lines into DataFrame.\n\nExamples\n--------\n>>> pd.read_csv('data.csv')  # doctest: +SKIP\n",
      inputs: [
        {
          name: 'filepath_or_buffer',
          docstring:
            'Any valid string path is acceptable. The string could be a URL. Valid URL schemes include http, ftp, s3, and file. For file URLs, a host is expected. A local file could be: file://localhost/path/to/table.csv.  If you want to pass in a path object, pandas accepts either ``pathlib.Path`` or ``py._path.local.LocalPath``.  By file-like object, we refer to objects with a ``read()`` method, such as a file handler (e.g. via builtin ``open`` function) or ``StringIO``.',
          param_type: ['object', 'str'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'sep',
          docstring:
            "Delimiter to use. If sep is None, the C engine cannot automatically detect the separator, but the Python parsing engine can, meaning the latter will be used and automatically detect the separator by Python's builtin sniffer tool, ``csv.Sniffer``. In addition, separators longer than 1 character and different from ``'\\s+'`` will be interpreted as regular expressions and will also force the use of the Python parsing engine. Note that regex delimiters are prone to ignoring quoted data. Regex example: ``'\\r\\t'``.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'delimiter',
          docstring: 'Alias for sep.',
          param_type: ['str', null],
          expected_shape: null,
          is_optional: true,
          default_value: '``None``'
        },
        {
          name: 'header',
          docstring:
            'Row number(s) to use as the column names, and the start of the data.  Default behavior is to infer the column names: if no names are passed the behavior is identical to ``header=0`` and column names are inferred from the first line of the file, if column names are passed explicitly then the behavior is identical to ``header=None``. Explicitly pass ``header=0`` to be able to replace existing names. The header can be a list of integers that specify row locations for a multi-index on the columns e.g. [0,1,3]. Intervening rows that are not specified will be skipped (e.g. 2 in this example is skipped). Note that this parameter ignores commented lines and empty lines if ``skip_blank_lines=True``, so ``header=0`` denotes the first line of data rather than the first line of the file.',
          param_type: ['int', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: 'infer'
        },
        {
          name: 'names',
          docstring:
            'List of column names to use. If file contains no header row, then you should explicitly pass ``header=None``. Duplicates in this list will cause a ``UserWarning`` to be issued.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'index_col',
          docstring:
            'Column to use as the row labels of the DataFrame. If a sequence is given, a MultiIndex is used. If you have a malformed file with delimiters at the end of each line, you might consider ``index_col=False`` to force pandas to not use the first column as the index (row names).',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'usecols',
          docstring:
            "Return a subset of the columns. If list-like, all elements must either be positional (i.e. integer indices into the document columns) or strings that correspond to column names provided either by the user in `names` or inferred from the document header row(s). For example, a valid list-like `usecols` parameter would be ``[0, 1, 2]`` or ``['foo', 'bar', 'baz']``. Element order is ignored, so ``usecols=[0, 1]`` is the same as ``[1, 0]``. To instantiate a DataFrame from ``data`` with element order preserved use ``pd.read_csv(data, usecols=['foo', 'bar'])[['foo', 'bar']]`` for columns in ``['foo', 'bar']`` order or ``pd.read_csv(data, usecols=['foo', 'bar'])[['bar', 'foo']]`` for ``['bar', 'foo']`` order.  If callable, the callable function will be evaluated against the column names, returning names where the callable function evaluates to True. An example of a valid callable argument would be ``lambda x: x.upper() in ['AAA', 'BBB', 'DDD']``. Using this parameter results in much faster parsing time and lower memory usage.",
          param_type: ['list', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'squeeze',
          docstring:
            'If the parsed data only contains one column then return a Series.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'prefix',
          docstring:
            "Prefix to add to column numbers when no header, e.g. 'X' for X0, X1, ...",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'mangle_dupe_cols',
          docstring:
            "Duplicate columns will be specified as 'X', 'X.1', ...'X.N', rather than 'X'...'X'. Passing in False will cause data to be overwritten if there are duplicate names in the columns.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'dtype',
          docstring:
            "Data type for data or columns. E.g. {'a': np.float64, 'b': np.int32, 'c': 'Int64'} Use `str` or `object` together with suitable `na_values` settings to preserve and not interpret dtype. If converters are specified, they will be applied INSTEAD of dtype conversion.",
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'engine',
          docstring:
            'Parser engine to use. The C engine is faster while the python engine is currently more feature-complete.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'converters',
          docstring:
            'Dict of functions for converting values in certain columns. Keys can either be integers or column labels.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'true_values',
          docstring: 'Values to consider as True.',
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'false_values',
          docstring: 'Values to consider as False.',
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'skipinitialspace',
          docstring: 'Skip spaces after delimiter.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'skiprows',
          docstring:
            'Line numbers to skip (0-indexed) or number of lines to skip (int) at the start of the file.  If callable, the callable function will be evaluated against the row indices, returning True if the row should be skipped and False otherwise. An example of a valid callable argument would be ``lambda x: x in [0, 2]``.',
          param_type: ['int', 'list', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'skipfooter',
          docstring:
            "Number of lines at bottom of file to skip (Unsupported with engine='c').",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0'
        },
        {
          name: 'nrows',
          docstring:
            'Number of rows of file to read. Useful for reading pieces of large files.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'na_values',
          docstring:
            "Additional strings to recognize as NA/NaN. If dict passed, specific per-column NA values.  By default the following values are interpreted as NaN: '', '#N/A', '#N/A N/A', '#NA', '-1.#IND', '-1.#QNAN', '-NaN', '-nan', '1.#IND', '1.#QNAN', 'N/A', 'NA', 'NULL', 'NaN', 'n/a', 'nan', 'null'.",
          param_type: ['str', 'dict', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'keep_default_na',
          docstring:
            'Whether or not to include the default NaN values when parsing the data. Depending on whether `na_values` is passed in, the behavior is as follows:  * If `keep_default_na` is True, and `na_values` are specified, `na_values`   is appended to the default NaN values used for parsing. * If `keep_default_na` is True, and `na_values` are not specified, only   the default NaN values are used for parsing. * If `keep_default_na` is False, and `na_values` are specified, only   the NaN values specified `na_values` are used for parsing. * If `keep_default_na` is False, and `na_values` are not specified, no   strings will be parsed as NaN.  Note that if `na_filter` is passed in as False, the `keep_default_na` and `na_values` parameters will be ignored.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'na_filter',
          docstring:
            'Detect missing value markers (empty strings and the value of na_values). In data without any NAs, passing na_filter=False can improve the performance of reading a large file.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'verbose',
          docstring:
            'Indicate number of NA values placed in non-numeric columns.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'skip_blank_lines',
          docstring:
            'If True, skip over blank lines rather than interpreting as NaN values.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'parse_dates',
          docstring:
            "The behavior is as follows:  * boolean. If True -> try parsing the index. * list of int or names. e.g. If [1, 2, 3] -> try parsing columns 1, 2, 3   each as a separate date column. * list of lists. e.g.  If [[1, 3]] -> combine columns 1 and 3 and parse as   a single date column. * dict, e.g. {'foo' : [1, 3]} -> parse columns 1, 3 as date and call   result 'foo'  If a column or index cannot be represented as an array of datetimes, say because of an unparseable value or a mixture of timezones, the column or index will be returned unaltered as an object data type. For non-standard datetime parsing, use ``pd.to_datetime`` after ``pd.read_csv``. To parse an index or column with a mixture of timezones, specify ``date_parser`` to be a partially-applied :func:`pandas.to_datetime` with ``utc=True``. See :ref:`io.csv.mixed_timezones` for more.  Note: A fast-path exists for iso8601-formatted dates.",
          param_type: ['int', 'bool', 'dict', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'infer_datetime_format',
          docstring:
            'If True and `parse_dates` is enabled, pandas will attempt to infer the format of the datetime strings in the columns, and if it can be inferred, switch to a faster method of parsing them. In some cases this can increase the parsing speed by 5-10x.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'keep_date_col',
          docstring:
            'If True and `parse_dates` specifies combining multiple columns then keep the original columns.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'date_parser',
          docstring:
            'Function to use for converting a sequence of string columns to an array of datetime instances. The default uses ``dateutil.parser.parser`` to do the conversion. Pandas will try to call `date_parser` in three different ways, advancing to the next if an exception occurs: 1) Pass one or more arrays (as defined by `parse_dates`) as arguments; 2) concatenate (row-wise) the string values from the columns defined by `parse_dates` into a single array and pass that; and 3) call `date_parser` once for each row using one or more strings (corresponding to the columns defined by `parse_dates`) as arguments.',
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dayfirst',
          docstring: 'DD/MM format dates, international and European format.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'iterator',
          docstring:
            'Return TextFileReader object for iteration or getting chunks with ``get_chunk()``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'chunksize',
          docstring:
            'Return TextFileReader object for iteration. See the `IO Tools docs <http://pandas.pydata.org/pandas-docs/stable/io.html#io-chunking>`_ for more information on ``iterator`` and ``chunksize``.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'compression',
          docstring:
            "For on-the-fly decompression of on-disk data. If 'infer' and `filepath_or_buffer` is path-like, then detect compression from the following extensions: '.gz', '.bz2', '.zip', or '.xz' (otherwise no decompression). If using 'zip', the ZIP file must contain only one data file to be read in. Set to None for no decompression.  .. versionadded:: 0.18.1 support for 'zip' and 'xz' compression.",
          param_type: ['LIST_VALID_OPTIONS', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'infer'
        },
        {
          name: 'thousands',
          docstring: 'Thousands separator.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'decimal',
          docstring:
            "Character to recognize as decimal point (e.g. use ',' for European data).",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: '.'
        },
        {
          name: 'lineterminator',
          docstring:
            'Character to break file into lines. Only valid with C parser.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'quotechar',
          docstring:
            'The character used to denote the start and end of a quoted item. Quoted items can include the delimiter and it will be ignored.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'quoting',
          docstring:
            'Control field quoting behavior per ``csv.QUOTE_*`` constants. Use one of QUOTE_MINIMAL (0), QUOTE_ALL (1), QUOTE_NONNUMERIC (2) or QUOTE_NONE (3).',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0'
        },
        {
          name: 'doublequote',
          docstring:
            'When quotechar is specified and quoting is not ``QUOTE_NONE``, indicate whether or not to interpret two consecutive quotechar elements INSIDE a field as a single ``quotechar`` element.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '``True``'
        },
        {
          name: 'escapechar',
          docstring: 'One-character string used to escape other characters.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'comment',
          docstring:
            "Indicates remainder of line should not be parsed. If found at the beginning of a line, the line will be ignored altogether. This parameter must be a single character. Like empty lines (as long as ``skip_blank_lines=True``), fully commented lines are ignored by the parameter `header` but not by `skiprows`. For example, if ``comment='#'``, parsing ``#empty\\na,b,c\\n1,2,3`` with ``header=0`` will result in 'a,b,c' being treated as the header.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'encoding',
          docstring:
            "Encoding to use for UTF when reading/writing (ex. 'utf-8'). `List of Python standard encodings <https://docs.python.org/3/library/codecs.html#standard-encodings>`_ .",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dialect',
          docstring:
            'If provided, this parameter will override values (default or not) for the following parameters: `delimiter`, `doublequote`, `escapechar`, `skipinitialspace`, `quotechar`, and `quoting`. If it is necessary to override values, a ParserWarning will be issued. See csv.Dialect documentation for more details.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tupleize_cols',
          docstring:
            'Leave a list of tuples on columns as is (default is to convert to a MultiIndex on the columns).  .. deprecated:: 0.21.0    This argument will be removed and will always convert to MultiIndex',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'error_bad_lines',
          docstring:
            'Lines with too many fields (e.g. a csv line with too many commas) will by default cause an exception to be raised, and no DataFrame will be returned. If False, then these "bad lines" will dropped from the DataFrame that is returned.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'warn_bad_lines',
          docstring:
            'If error_bad_lines is False, and warn_bad_lines is True, a warning for each "bad line" will be output.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'delim_whitespace',
          docstring:
            "Specifies whether or not whitespace (e.g. ``' '`` or ``'    '``) will be used as the sep. Equivalent to setting ``sep='\\s+'``. If this option is set to True, nothing should be passed in for the ``delimiter`` parameter.  .. versionadded:: 0.18.1 support for the Python parser.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'low_memory',
          docstring:
            'Internally process the file in chunks, resulting in lower memory use while parsing, but possibly mixed type inference.  To ensure no mixed types either set False, or specify the type with the `dtype` parameter. Note that the entire file is read into a single DataFrame regardless, use the `chunksize` or `iterator` parameter to return the data in chunks. (Only valid with C parser).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'memory_map',
          docstring:
            'If a filepath is provided for `filepath_or_buffer`, map the file object directly onto memory and access the data directly from there. Using this option can improve performance because there is no longer any I/O overhead.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'float_precision',
          docstring:
            'Specifies which converter the C engine should use for floating-point values. The options are `None` for the ordinary converter, `high` for the high-precision converter, and `round_trip` for the round-trip converter.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: '',
          docstring:
            'A comma-separated values (csv) file is returned as two-dimensional data structure with labeled axes.',
          param_type: [null],
          returned: true
        }
      ]
    },
    {
      name: 'read_table',
      docstring:
        "\nRead general delimited file into DataFrame.\n\n.. deprecated:: 0.24.0\nUse :func:`pandas.read_csv` instead, passing ``sep='\\t'`` if necessary.\n\nAlso supports optionally iterating or breaking of the file\ninto chunks.\n\nAdditional help can be found in the online docs for\n`IO Tools <http://pandas.pydata.org/pandas-docs/stable/io.html>`_.\n\nParameters\n----------\nfilepath_or_buffer : str, path object, or file-like object\n    Any valid string path is acceptable. The string could be a URL. Valid\n    URL schemes include http, ftp, s3, and file. For file URLs, a host is\n    expected. A local file could be: file://localhost/path/to/table.csv.\n\n    If you want to pass in a path object, pandas accepts either\n    ``pathlib.Path`` or ``py._path.local.LocalPath``.\n\n    By file-like object, we refer to objects with a ``read()`` method, such as\n    a file handler (e.g. via builtin ``open`` function) or ``StringIO``.\nsep : str, default '\\\\t' (tab-stop)\n    Delimiter to use. If sep is None, the C engine cannot automatically detect\n    the separator, but the Python parsing engine can, meaning the latter will\n    be used and automatically detect the separator by Python's builtin sniffer\n    tool, ``csv.Sniffer``. In addition, separators longer than 1 character and\n    different from ``'\\s+'`` will be interpreted as regular expressions and\n    will also force the use of the Python parsing engine. Note that regex\n    delimiters are prone to ignoring quoted data. Regex example: ``'\\r\\t'``.\ndelimiter : str, default ``None``\n    Alias for sep.\nheader : int, list of int, default 'infer'\n    Row number(s) to use as the column names, and the start of the\n    data.  Default behavior is to infer the column names: if no names\n    are passed the behavior is identical to ``header=0`` and column\n    names are inferred from the first line of the file, if column\n    names are passed explicitly then the behavior is identical to\n    ``header=None``. Explicitly pass ``header=0`` to be able to\n    replace existing names. The header can be a list of integers that\n    specify row locations for a multi-index on the columns\n    e.g. [0,1,3]. Intervening rows that are not specified will be\n    skipped (e.g. 2 in this example is skipped). Note that this\n    parameter ignores commented lines and empty lines if\n    ``skip_blank_lines=True``, so ``header=0`` denotes the first line of\n    data rather than the first line of the file.\nnames : array-like, optional\n    List of column names to use. If file contains no header row, then you\n    should explicitly pass ``header=None``. Duplicates in this list will cause\n    a ``UserWarning`` to be issued.\nindex_col : int, sequence or bool, optional\n    Column to use as the row labels of the DataFrame. If a sequence is given, a\n    MultiIndex is used. If you have a malformed file with delimiters at the end\n    of each line, you might consider ``index_col=False`` to force pandas to\n    not use the first column as the index (row names).\nusecols : list-like or callable, optional\n    Return a subset of the columns. If list-like, all elements must either\n    be positional (i.e. integer indices into the document columns) or strings\n    that correspond to column names provided either by the user in `names` or\n    inferred from the document header row(s). For example, a valid list-like\n    `usecols` parameter would be ``[0, 1, 2]`` or ``['foo', 'bar', 'baz']``.\n    Element order is ignored, so ``usecols=[0, 1]`` is the same as ``[1, 0]``.\n    To instantiate a DataFrame from ``data`` with element order preserved use\n    ``pd.read_csv(data, usecols=['foo', 'bar'])[['foo', 'bar']]`` for columns\n    in ``['foo', 'bar']`` order or\n    ``pd.read_csv(data, usecols=['foo', 'bar'])[['bar', 'foo']]``\n    for ``['bar', 'foo']`` order.\n\n    If callable, the callable function will be evaluated against the column\n    names, returning names where the callable function evaluates to True. An\n    example of a valid callable argument would be ``lambda x: x.upper() in\n    ['AAA', 'BBB', 'DDD']``. Using this parameter results in much faster\n    parsing time and lower memory usage.\nsqueeze : bool, default False\n    If the parsed data only contains one column then return a Series.\nprefix : str, optional\n    Prefix to add to column numbers when no header, e.g. 'X' for X0, X1, ...\nmangle_dupe_cols : bool, default True\n    Duplicate columns will be specified as 'X', 'X.1', ...'X.N', rather than\n    'X'...'X'. Passing in False will cause data to be overwritten if there\n    are duplicate names in the columns.\ndtype : Type name or dict of column -> type, optional\n    Data type for data or columns. E.g. {'a': np.float64, 'b': np.int32,\n    'c': 'Int64'}\n    Use `str` or `object` together with suitable `na_values` settings\n    to preserve and not interpret dtype.\n    If converters are specified, they will be applied INSTEAD\n    of dtype conversion.\nengine : {'c', 'python'}, optional\n    Parser engine to use. The C engine is faster while the python engine is\n    currently more feature-complete.\nconverters : dict, optional\n    Dict of functions for converting values in certain columns. Keys can either\n    be integers or column labels.\ntrue_values : list, optional\n    Values to consider as True.\nfalse_values : list, optional\n    Values to consider as False.\nskipinitialspace : bool, default False\n    Skip spaces after delimiter.\nskiprows : list-like, int or callable, optional\n    Line numbers to skip (0-indexed) or number of lines to skip (int)\n    at the start of the file.\n\n    If callable, the callable function will be evaluated against the row\n    indices, returning True if the row should be skipped and False otherwise.\n    An example of a valid callable argument would be ``lambda x: x in [0, 2]``.\nskipfooter : int, default 0\n    Number of lines at bottom of file to skip (Unsupported with engine='c').\nnrows : int, optional\n    Number of rows of file to read. Useful for reading pieces of large files.\nna_values : scalar, str, list-like, or dict, optional\n    Additional strings to recognize as NA/NaN. If dict passed, specific\n    per-column NA values.  By default the following values are interpreted as\n    NaN: '', '#N/A', '#N/A N/A', '#NA', '-1.#IND', '-1.#QNAN', '-NaN', '-nan',\n    '1.#IND', '1.#QNAN', 'N/A', 'NA', 'NULL', 'NaN', 'n/a', 'nan',\n    'null'.\nkeep_default_na : bool, default True\n    Whether or not to include the default NaN values when parsing the data.\n    Depending on whether `na_values` is passed in, the behavior is as follows:\n\n    * If `keep_default_na` is True, and `na_values` are specified, `na_values`\n      is appended to the default NaN values used for parsing.\n    * If `keep_default_na` is True, and `na_values` are not specified, only\n      the default NaN values are used for parsing.\n    * If `keep_default_na` is False, and `na_values` are specified, only\n      the NaN values specified `na_values` are used for parsing.\n    * If `keep_default_na` is False, and `na_values` are not specified, no\n      strings will be parsed as NaN.\n\n    Note that if `na_filter` is passed in as False, the `keep_default_na` and\n    `na_values` parameters will be ignored.\nna_filter : bool, default True\n    Detect missing value markers (empty strings and the value of na_values). In\n    data without any NAs, passing na_filter=False can improve the performance\n    of reading a large file.\nverbose : bool, default False\n    Indicate number of NA values placed in non-numeric columns.\nskip_blank_lines : bool, default True\n    If True, skip over blank lines rather than interpreting as NaN values.\nparse_dates : bool or list of int or names or list of lists or dict, default False\n    The behavior is as follows:\n\n    * boolean. If True -> try parsing the index.\n    * list of int or names. e.g. If [1, 2, 3] -> try parsing columns 1, 2, 3\n      each as a separate date column.\n    * list of lists. e.g.  If [[1, 3]] -> combine columns 1 and 3 and parse as\n      a single date column.\n    * dict, e.g. {'foo' : [1, 3]} -> parse columns 1, 3 as date and call\n      result 'foo'\n\n    If a column or index cannot be represented as an array of datetimes,\n    say because of an unparseable value or a mixture of timezones, the column\n    or index will be returned unaltered as an object data type. For\n    non-standard datetime parsing, use ``pd.to_datetime`` after\n    ``pd.read_csv``. To parse an index or column with a mixture of timezones,\n    specify ``date_parser`` to be a partially-applied\n    :func:`pandas.to_datetime` with ``utc=True``. See\n    :ref:`io.csv.mixed_timezones` for more.\n\n    Note: A fast-path exists for iso8601-formatted dates.\ninfer_datetime_format : bool, default False\n    If True and `parse_dates` is enabled, pandas will attempt to infer the\n    format of the datetime strings in the columns, and if it can be inferred,\n    switch to a faster method of parsing them. In some cases this can increase\n    the parsing speed by 5-10x.\nkeep_date_col : bool, default False\n    If True and `parse_dates` specifies combining multiple columns then\n    keep the original columns.\ndate_parser : function, optional\n    Function to use for converting a sequence of string columns to an array of\n    datetime instances. The default uses ``dateutil.parser.parser`` to do the\n    conversion. Pandas will try to call `date_parser` in three different ways,\n    advancing to the next if an exception occurs: 1) Pass one or more arrays\n    (as defined by `parse_dates`) as arguments; 2) concatenate (row-wise) the\n    string values from the columns defined by `parse_dates` into a single array\n    and pass that; and 3) call `date_parser` once for each row using one or\n    more strings (corresponding to the columns defined by `parse_dates`) as\n    arguments.\ndayfirst : bool, default False\n    DD/MM format dates, international and European format.\niterator : bool, default False\n    Return TextFileReader object for iteration or getting chunks with\n    ``get_chunk()``.\nchunksize : int, optional\n    Return TextFileReader object for iteration.\n    See the `IO Tools docs\n    <http://pandas.pydata.org/pandas-docs/stable/io.html#io-chunking>`_\n    for more information on ``iterator`` and ``chunksize``.\ncompression : {'infer', 'gzip', 'bz2', 'zip', 'xz', None}, default 'infer'\n    For on-the-fly decompression of on-disk data. If 'infer' and\n    `filepath_or_buffer` is path-like, then detect compression from the\n    following extensions: '.gz', '.bz2', '.zip', or '.xz' (otherwise no\n    decompression). If using 'zip', the ZIP file must contain only one data\n    file to be read in. Set to None for no decompression.\n\n    .. versionadded:: 0.18.1 support for 'zip' and 'xz' compression.\n\nthousands : str, optional\n    Thousands separator.\ndecimal : str, default '.'\n    Character to recognize as decimal point (e.g. use ',' for European data).\nlineterminator : str (length 1), optional\n    Character to break file into lines. Only valid with C parser.\nquotechar : str (length 1), optional\n    The character used to denote the start and end of a quoted item. Quoted\n    items can include the delimiter and it will be ignored.\nquoting : int or csv.QUOTE_* instance, default 0\n    Control field quoting behavior per ``csv.QUOTE_*`` constants. Use one of\n    QUOTE_MINIMAL (0), QUOTE_ALL (1), QUOTE_NONNUMERIC (2) or QUOTE_NONE (3).\ndoublequote : bool, default ``True``\n   When quotechar is specified and quoting is not ``QUOTE_NONE``, indicate\n   whether or not to interpret two consecutive quotechar elements INSIDE a\n   field as a single ``quotechar`` element.\nescapechar : str (length 1), optional\n    One-character string used to escape other characters.\ncomment : str, optional\n    Indicates remainder of line should not be parsed. If found at the beginning\n    of a line, the line will be ignored altogether. This parameter must be a\n    single character. Like empty lines (as long as ``skip_blank_lines=True``),\n    fully commented lines are ignored by the parameter `header` but not by\n    `skiprows`. For example, if ``comment='#'``, parsing\n    ``#empty\\na,b,c\\n1,2,3`` with ``header=0`` will result in 'a,b,c' being\n    treated as the header.\nencoding : str, optional\n    Encoding to use for UTF when reading/writing (ex. 'utf-8'). `List of Python\n    standard encodings\n    <https://docs.python.org/3/library/codecs.html#standard-encodings>`_ .\ndialect : str or csv.Dialect, optional\n    If provided, this parameter will override values (default or not) for the\n    following parameters: `delimiter`, `doublequote`, `escapechar`,\n    `skipinitialspace`, `quotechar`, and `quoting`. If it is necessary to\n    override values, a ParserWarning will be issued. See csv.Dialect\n    documentation for more details.\ntupleize_cols : bool, default False\n    Leave a list of tuples on columns as is (default is to convert to\n    a MultiIndex on the columns).\n\n    .. deprecated:: 0.21.0\n       This argument will be removed and will always convert to MultiIndex\n\nerror_bad_lines : bool, default True\n    Lines with too many fields (e.g. a csv line with too many commas) will by\n    default cause an exception to be raised, and no DataFrame will be returned.\n    If False, then these \"bad lines\" will dropped from the DataFrame that is\n    returned.\nwarn_bad_lines : bool, default True\n    If error_bad_lines is False, and warn_bad_lines is True, a warning for each\n    \"bad line\" will be output.\ndelim_whitespace : bool, default False\n    Specifies whether or not whitespace (e.g. ``' '`` or ``'\t'``) will be\n    used as the sep. Equivalent to setting ``sep='\\s+'``. If this option\n    is set to True, nothing should be passed in for the ``delimiter``\n    parameter.\n\n    .. versionadded:: 0.18.1 support for the Python parser.\n\nlow_memory : bool, default True\n    Internally process the file in chunks, resulting in lower memory use\n    while parsing, but possibly mixed type inference.  To ensure no mixed\n    types either set False, or specify the type with the `dtype` parameter.\n    Note that the entire file is read into a single DataFrame regardless,\n    use the `chunksize` or `iterator` parameter to return the data in chunks.\n    (Only valid with C parser).\nmemory_map : bool, default False\n    If a filepath is provided for `filepath_or_buffer`, map the file object\n    directly onto memory and access the data directly from there. Using this\n    option can improve performance because there is no longer any I/O overhead.\nfloat_precision : str, optional\n    Specifies which converter the C engine should use for floating-point\n    values. The options are `None` for the ordinary converter,\n    `high` for the high-precision converter, and `round_trip` for the\n    round-trip converter.\n\nReturns\n-------\nDataFrame or TextParser\n    A comma-separated values (csv) file is returned as two-dimensional\n    data structure with labeled axes.\n\nSee Also\n--------\nto_csv : Write DataFrame to a comma-separated values (csv) file.\nread_csv : Read a comma-separated values (csv) file into DataFrame.\nread_fwf : Read a table of fixed-width formatted lines into DataFrame.\n\nExamples\n--------\n>>> pd.read_table('data.csv')  # doctest: +SKIP\n",
      inputs: [
        {
          name: 'filepath_or_buffer',
          docstring:
            'Any valid string path is acceptable. The string could be a URL. Valid URL schemes include http, ftp, s3, and file. For file URLs, a host is expected. A local file could be: file://localhost/path/to/table.csv.  If you want to pass in a path object, pandas accepts either ``pathlib.Path`` or ``py._path.local.LocalPath``.  By file-like object, we refer to objects with a ``read()`` method, such as a file handler (e.g. via builtin ``open`` function) or ``StringIO``.',
          param_type: ['object', 'str'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'sep',
          docstring:
            "Delimiter to use. If sep is None, the C engine cannot automatically detect the separator, but the Python parsing engine can, meaning the latter will be used and automatically detect the separator by Python's builtin sniffer tool, ``csv.Sniffer``. In addition, separators longer than 1 character and different from ``'\\s+'`` will be interpreted as regular expressions and will also force the use of the Python parsing engine. Note that regex delimiters are prone to ignoring quoted data. Regex example: ``'\\r\\t'``.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: '\\\\t tab-stop'
        },
        {
          name: 'delimiter',
          docstring: 'Alias for sep.',
          param_type: ['str', null],
          expected_shape: null,
          is_optional: true,
          default_value: '``None``'
        },
        {
          name: 'header',
          docstring:
            'Row number(s) to use as the column names, and the start of the data.  Default behavior is to infer the column names: if no names are passed the behavior is identical to ``header=0`` and column names are inferred from the first line of the file, if column names are passed explicitly then the behavior is identical to ``header=None``. Explicitly pass ``header=0`` to be able to replace existing names. The header can be a list of integers that specify row locations for a multi-index on the columns e.g. [0,1,3]. Intervening rows that are not specified will be skipped (e.g. 2 in this example is skipped). Note that this parameter ignores commented lines and empty lines if ``skip_blank_lines=True``, so ``header=0`` denotes the first line of data rather than the first line of the file.',
          param_type: ['int', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: 'infer'
        },
        {
          name: 'names',
          docstring:
            'List of column names to use. If file contains no header row, then you should explicitly pass ``header=None``. Duplicates in this list will cause a ``UserWarning`` to be issued.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'index_col',
          docstring:
            'Column to use as the row labels of the DataFrame. If a sequence is given, a MultiIndex is used. If you have a malformed file with delimiters at the end of each line, you might consider ``index_col=False`` to force pandas to not use the first column as the index (row names).',
          param_type: ['int', 'bool'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'usecols',
          docstring:
            "Return a subset of the columns. If list-like, all elements must either be positional (i.e. integer indices into the document columns) or strings that correspond to column names provided either by the user in `names` or inferred from the document header row(s). For example, a valid list-like `usecols` parameter would be ``[0, 1, 2]`` or ``['foo', 'bar', 'baz']``. Element order is ignored, so ``usecols=[0, 1]`` is the same as ``[1, 0]``. To instantiate a DataFrame from ``data`` with element order preserved use ``pd.read_csv(data, usecols=['foo', 'bar'])[['foo', 'bar']]`` for columns in ``['foo', 'bar']`` order or ``pd.read_csv(data, usecols=['foo', 'bar'])[['bar', 'foo']]`` for ``['bar', 'foo']`` order.  If callable, the callable function will be evaluated against the column names, returning names where the callable function evaluates to True. An example of a valid callable argument would be ``lambda x: x.upper() in ['AAA', 'BBB', 'DDD']``. Using this parameter results in much faster parsing time and lower memory usage.",
          param_type: ['list', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'squeeze',
          docstring:
            'If the parsed data only contains one column then return a Series.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'prefix',
          docstring:
            "Prefix to add to column numbers when no header, e.g. 'X' for X0, X1, ...",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'mangle_dupe_cols',
          docstring:
            "Duplicate columns will be specified as 'X', 'X.1', ...'X.N', rather than 'X'...'X'. Passing in False will cause data to be overwritten if there are duplicate names in the columns.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'dtype',
          docstring:
            "Data type for data or columns. E.g. {'a': np.float64, 'b': np.int32, 'c': 'Int64'} Use `str` or `object` together with suitable `na_values` settings to preserve and not interpret dtype. If converters are specified, they will be applied INSTEAD of dtype conversion.",
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'engine',
          docstring:
            'Parser engine to use. The C engine is faster while the python engine is currently more feature-complete.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'converters',
          docstring:
            'Dict of functions for converting values in certain columns. Keys can either be integers or column labels.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'true_values',
          docstring: 'Values to consider as True.',
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'false_values',
          docstring: 'Values to consider as False.',
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'skipinitialspace',
          docstring: 'Skip spaces after delimiter.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'skiprows',
          docstring:
            'Line numbers to skip (0-indexed) or number of lines to skip (int) at the start of the file.  If callable, the callable function will be evaluated against the row indices, returning True if the row should be skipped and False otherwise. An example of a valid callable argument would be ``lambda x: x in [0, 2]``.',
          param_type: ['int', 'list', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'skipfooter',
          docstring:
            "Number of lines at bottom of file to skip (Unsupported with engine='c').",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0'
        },
        {
          name: 'nrows',
          docstring:
            'Number of rows of file to read. Useful for reading pieces of large files.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'na_values',
          docstring:
            "Additional strings to recognize as NA/NaN. If dict passed, specific per-column NA values.  By default the following values are interpreted as NaN: '', '#N/A', '#N/A N/A', '#NA', '-1.#IND', '-1.#QNAN', '-NaN', '-nan', '1.#IND', '1.#QNAN', 'N/A', 'NA', 'NULL', 'NaN', 'n/a', 'nan', 'null'.",
          param_type: ['str', 'dict', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'keep_default_na',
          docstring:
            'Whether or not to include the default NaN values when parsing the data. Depending on whether `na_values` is passed in, the behavior is as follows:  * If `keep_default_na` is True, and `na_values` are specified, `na_values`   is appended to the default NaN values used for parsing. * If `keep_default_na` is True, and `na_values` are not specified, only   the default NaN values are used for parsing. * If `keep_default_na` is False, and `na_values` are specified, only   the NaN values specified `na_values` are used for parsing. * If `keep_default_na` is False, and `na_values` are not specified, no   strings will be parsed as NaN.  Note that if `na_filter` is passed in as False, the `keep_default_na` and `na_values` parameters will be ignored.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'na_filter',
          docstring:
            'Detect missing value markers (empty strings and the value of na_values). In data without any NAs, passing na_filter=False can improve the performance of reading a large file.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'verbose',
          docstring:
            'Indicate number of NA values placed in non-numeric columns.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'skip_blank_lines',
          docstring:
            'If True, skip over blank lines rather than interpreting as NaN values.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'parse_dates',
          docstring:
            "The behavior is as follows:  * boolean. If True -> try parsing the index. * list of int or names. e.g. If [1, 2, 3] -> try parsing columns 1, 2, 3   each as a separate date column. * list of lists. e.g.  If [[1, 3]] -> combine columns 1 and 3 and parse as   a single date column. * dict, e.g. {'foo' : [1, 3]} -> parse columns 1, 3 as date and call   result 'foo'  If a column or index cannot be represented as an array of datetimes, say because of an unparseable value or a mixture of timezones, the column or index will be returned unaltered as an object data type. For non-standard datetime parsing, use ``pd.to_datetime`` after ``pd.read_csv``. To parse an index or column with a mixture of timezones, specify ``date_parser`` to be a partially-applied :func:`pandas.to_datetime` with ``utc=True``. See :ref:`io.csv.mixed_timezones` for more.  Note: A fast-path exists for iso8601-formatted dates.",
          param_type: ['int', 'bool', 'dict', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'infer_datetime_format',
          docstring:
            'If True and `parse_dates` is enabled, pandas will attempt to infer the format of the datetime strings in the columns, and if it can be inferred, switch to a faster method of parsing them. In some cases this can increase the parsing speed by 5-10x.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'keep_date_col',
          docstring:
            'If True and `parse_dates` specifies combining multiple columns then keep the original columns.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'date_parser',
          docstring:
            'Function to use for converting a sequence of string columns to an array of datetime instances. The default uses ``dateutil.parser.parser`` to do the conversion. Pandas will try to call `date_parser` in three different ways, advancing to the next if an exception occurs: 1) Pass one or more arrays (as defined by `parse_dates`) as arguments; 2) concatenate (row-wise) the string values from the columns defined by `parse_dates` into a single array and pass that; and 3) call `date_parser` once for each row using one or more strings (corresponding to the columns defined by `parse_dates`) as arguments.',
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dayfirst',
          docstring: 'DD/MM format dates, international and European format.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'iterator',
          docstring:
            'Return TextFileReader object for iteration or getting chunks with ``get_chunk()``.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'chunksize',
          docstring:
            'Return TextFileReader object for iteration. See the `IO Tools docs <http://pandas.pydata.org/pandas-docs/stable/io.html#io-chunking>`_ for more information on ``iterator`` and ``chunksize``.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'compression',
          docstring:
            "For on-the-fly decompression of on-disk data. If 'infer' and `filepath_or_buffer` is path-like, then detect compression from the following extensions: '.gz', '.bz2', '.zip', or '.xz' (otherwise no decompression). If using 'zip', the ZIP file must contain only one data file to be read in. Set to None for no decompression.  .. versionadded:: 0.18.1 support for 'zip' and 'xz' compression.",
          param_type: ['LIST_VALID_OPTIONS', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'infer'
        },
        {
          name: 'thousands',
          docstring: 'Thousands separator.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'decimal',
          docstring:
            "Character to recognize as decimal point (e.g. use ',' for European data).",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: '.'
        },
        {
          name: 'lineterminator',
          docstring:
            'Character to break file into lines. Only valid with C parser.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'quotechar',
          docstring:
            'The character used to denote the start and end of a quoted item. Quoted items can include the delimiter and it will be ignored.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'quoting',
          docstring:
            'Control field quoting behavior per ``csv.QUOTE_*`` constants. Use one of QUOTE_MINIMAL (0), QUOTE_ALL (1), QUOTE_NONNUMERIC (2) or QUOTE_NONE (3).',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0'
        },
        {
          name: 'doublequote',
          docstring:
            'When quotechar is specified and quoting is not ``QUOTE_NONE``, indicate whether or not to interpret two consecutive quotechar elements INSIDE a field as a single ``quotechar`` element.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '``True``'
        },
        {
          name: 'escapechar',
          docstring: 'One-character string used to escape other characters.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'comment',
          docstring:
            "Indicates remainder of line should not be parsed. If found at the beginning of a line, the line will be ignored altogether. This parameter must be a single character. Like empty lines (as long as ``skip_blank_lines=True``), fully commented lines are ignored by the parameter `header` but not by `skiprows`. For example, if ``comment='#'``, parsing ``#empty\\na,b,c\\n1,2,3`` with ``header=0`` will result in 'a,b,c' being treated as the header.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'encoding',
          docstring:
            "Encoding to use for UTF when reading/writing (ex. 'utf-8'). `List of Python standard encodings <https://docs.python.org/3/library/codecs.html#standard-encodings>`_ .",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'dialect',
          docstring:
            'If provided, this parameter will override values (default or not) for the following parameters: `delimiter`, `doublequote`, `escapechar`, `skipinitialspace`, `quotechar`, and `quoting`. If it is necessary to override values, a ParserWarning will be issued. See csv.Dialect documentation for more details.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'tupleize_cols',
          docstring:
            'Leave a list of tuples on columns as is (default is to convert to a MultiIndex on the columns).  .. deprecated:: 0.21.0    This argument will be removed and will always convert to MultiIndex',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'error_bad_lines',
          docstring:
            'Lines with too many fields (e.g. a csv line with too many commas) will by default cause an exception to be raised, and no DataFrame will be returned. If False, then these "bad lines" will dropped from the DataFrame that is returned.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'warn_bad_lines',
          docstring:
            'If error_bad_lines is False, and warn_bad_lines is True, a warning for each "bad line" will be output.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'delim_whitespace',
          docstring:
            "Specifies whether or not whitespace (e.g. ``' '`` or ``'    '``) will be used as the sep. Equivalent to setting ``sep='\\s+'``. If this option is set to True, nothing should be passed in for the ``delimiter`` parameter.  .. versionadded:: 0.18.1 support for the Python parser.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'low_memory',
          docstring:
            'Internally process the file in chunks, resulting in lower memory use while parsing, but possibly mixed type inference.  To ensure no mixed types either set False, or specify the type with the `dtype` parameter. Note that the entire file is read into a single DataFrame regardless, use the `chunksize` or `iterator` parameter to return the data in chunks. (Only valid with C parser).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'memory_map',
          docstring:
            'If a filepath is provided for `filepath_or_buffer`, map the file object directly onto memory and access the data directly from there. Using this option can improve performance because there is no longer any I/O overhead.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        },
        {
          name: 'float_precision',
          docstring:
            'Specifies which converter the C engine should use for floating-point values. The options are `None` for the ordinary converter, `high` for the high-precision converter, and `round_trip` for the round-trip converter.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        }
      ],
      outputs: [
        {
          name: '',
          docstring:
            'A comma-separated values (csv) file is returned as two-dimensional data structure with labeled axes.',
          param_type: [null],
          returned: true
        }
      ]
    }
  ],
  nodes: [],
  library: 'pandas',
  module: null
}
