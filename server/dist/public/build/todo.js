webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _ant = __webpack_require__(10);

	var _ant2 = _interopRequireDefault(_ant);

	var _todo = __webpack_require__(18);

	var _todo2 = _interopRequireDefault(_todo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.hashHistory },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: '/', component: _ant2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'homepage', component: _todo2.default }),
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: _todo2.default })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;


	ReactDOM.render(_react2.default.createElement(App, null), document.getElementById('App'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(11);

	var _antWeb = __webpack_require__(12);

	var _antWeb2 = _interopRequireDefault(_antWeb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(13);
	var Header = _antd.Layout.Header,
	    Content = _antd.Layout.Content,
	    Footer = _antd.Layout.Footer,
	    Sider = _antd.Layout.Sider;

	var SubMenu = _antd.Menu.SubMenu;

	var SiderDemo = function (_React$Component) {
	  _inherits(SiderDemo, _React$Component);

	  function SiderDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SiderDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SiderDemo.__proto__ || Object.getPrototypeOf(SiderDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      collapsed: false,
	      mode: 'inline'
	    }, _this.onCollapse = function (collapsed) {
	      console.log(collapsed);
	      _this.setState({
	        collapsed: collapsed,
	        mode: collapsed ? 'vertical' : 'inline'
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SiderDemo, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      return React.createElement(
	        _antd.Layout,
	        { className: 'components-layout-demo-side' },
	        React.createElement(
	          Sider,
	          {
	            collapsible: true,
	            collapsed: this.state.collapsed,
	            onCollapse: this.onCollapse,
	            style: { height: "100vh" }
	          },
	          React.createElement('div', { className: 'logo' }),
	          React.createElement(
	            _antd.Menu,
	            { theme: 'dark', mode: this.state.mode, defaultSelectedKeys: ['6'] },
	            React.createElement(
	              SubMenu,
	              {
	                key: 'sub1',
	                title: React.createElement(
	                  'span',
	                  null,
	                  React.createElement(_antd.Icon, { type: 'user' }),
	                  React.createElement(
	                    'span',
	                    { className: 'nav-text' },
	                    'User'
	                  )
	                )
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                { key: '1' },
	                'Tom'
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                { key: '2' },
	                'Bill'
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                { key: '3' },
	                'Alex'
	              )
	            ),
	            React.createElement(
	              SubMenu,
	              {
	                key: 'sub2',
	                title: React.createElement(
	                  'span',
	                  null,
	                  React.createElement(_antd.Icon, { type: 'team' }),
	                  React.createElement(
	                    'span',
	                    { className: 'nav-text' },
	                    'Team'
	                  )
	                )
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                { key: '4' },
	                'Team 1'
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                { key: '5' },
	                'Team 2'
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              { key: '6' },
	              React.createElement(
	                'span',
	                null,
	                React.createElement(_antd.Icon, { type: 'file' }),
	                React.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'File'
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          _antd.Layout,
	          null,
	          React.createElement(Header, { style: { background: '#fff', padding: 0 } }),
	          children,
	          React.createElement(
	            Footer,
	            { style: { textAlign: 'center' } },
	            'Ant Design \xA92016 Created by Ant UED'
	          )
	        )
	      );
	    }
	  }]);

	  return SiderDemo;
	}(React.Component);

	exports.default = SiderDemo;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = antd;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = _antd.Layout.Header,
	    Content = _antd.Layout.Content,
	    Footer = _antd.Layout.Footer,
	    Sider = _antd.Layout.Sider;

	exports.default = function () {
	  return _react2.default.createElement(
	    Content,
	    { style: { margin: '0 16px' } },
	    _react2.default.createElement(
	      _antd.Breadcrumb,
	      { style: { margin: '12px 0' } },
	      _react2.default.createElement(
	        _antd.Breadcrumb.Item,
	        null,
	        'User'
	      ),
	      _react2.default.createElement(
	        _antd.Breadcrumb.Item,
	        null,
	        'Bill'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: { padding: 24, background: '#fff', minHeight: 360 } },
	      'Bill is a cat.'
	    )
	  );
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(11);

	var _TodoInput = __webpack_require__(19);

	var _TodoInput2 = _interopRequireDefault(_TodoInput);

	var _TodoList = __webpack_require__(21);

	var _TodoList2 = _interopRequireDefault(_TodoList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 使用mobx的样例
	 * 业务数据(数据库，REST接口,纯JSON,纯函数)->页面数据(Mobx)->页面View
	 */

	var Header = _antd.Layout.Header,
	    Content = _antd.Layout.Content,
	    Footer = _antd.Layout.Footer,
	    Sider = _antd.Layout.Sider;

	exports.default = function () {
	  return _react2.default.createElement(
	    Content,
	    { style: { margin: '0 16px', padding: '16px 0' } },
	    _react2.default.createElement(_TodoInput2.default, null),
	    _react2.default.createElement(_TodoList2.default, null)
	  );
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(11);

	var _todo = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;
	function hasErrors(fieldsError) {
	  return Object.keys(fieldsError).some(function (field) {
	    return fieldsError[field];
	  });
	}

	var HorizontalLoginForm = function (_React$Component) {
	  _inherits(HorizontalLoginForm, _React$Component);

	  function HorizontalLoginForm() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, HorizontalLoginForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HorizontalLoginForm.__proto__ || Object.getPrototypeOf(HorizontalLoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
	      e.preventDefault();
	      _this.props.form.validateFields(function (err, values) {
	        if (!err) {
	          console.log('Received values of form: ', values);
	          (0, _todo.addTodo)(values["todo"]).then(function (todos) {
	            return gPageTodo.todos = todos;
	          });
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(HorizontalLoginForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // To disabled submit button at the beginning.
	      this.props.form.validateFields();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$form = this.props.form,
	          getFieldDecorator = _props$form.getFieldDecorator,
	          getFieldsError = _props$form.getFieldsError,
	          getFieldError = _props$form.getFieldError,
	          isFieldTouched = _props$form.isFieldTouched;

	      // Only show error after a field is touched.

	      var todoError = isFieldTouched('todo') && getFieldError('todo');
	      return _react2.default.createElement(
	        _antd.Form,
	        { layout: 'inline', onSubmit: this.handleSubmit },
	        _react2.default.createElement(
	          FormItem,
	          {
	            validateStatus: todoError ? 'error' : '',
	            help: todoError || ''
	          },
	          getFieldDecorator('todo', {
	            rules: [{ required: true, message: '做点什么？' }]
	          })(_react2.default.createElement(_antd.Input, { placeholder: 'todo something?' }))
	        ),
	        _react2.default.createElement(
	          FormItem,
	          null,
	          _react2.default.createElement(
	            _antd.Button,
	            {
	              type: 'primary',
	              htmlType: 'submit',
	              disabled: hasErrors(getFieldsError())
	            },
	            '\u6DFB\u52A0'
	          )
	        )
	      );
	    }
	  }]);

	  return HorizontalLoginForm;
	}(_react2.default.Component);

	var WrappedHorizontalLoginForm = _antd.Form.create()(HorizontalLoginForm);

	exports.default = WrappedHorizontalLoginForm;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.addTodo = addTodo;
	exports.removeTodo = removeTodo;
	function addTodo(todo) {
		return axios.post("/todo", todo).then(function (res) {
			return res.data;
		});
	}
	function removeTodo(id) {
		return axios({
			method: 'delete',
			url: "/todo",
			data: id
		}).then(function (res) {
			return res.data;
		});
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(22);

	var _antd = __webpack_require__(11);

	var _todo = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var _ = __webpack_require__(26);

	function deleteHandler(id) {
	  console.log(id);
	  var todos = [].concat(_toConsumableArray(gPageTodo.todos));
	  (0, _todo.removeTodo)(id).then(function (todos) {
	    return gPageTodo.todos = todos;
	  });
	}

	var columns = [{
	  title: 'Todo',
	  dataIndex: 'title',
	  key: 'title'
	}, {
	  title: 'Operation',
	  key: 'operation',
	  render: function render(text, record) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      _react2.default.createElement(
	        _antd.Popconfirm,
	        { title: 'Confirm to delete?', onConfirm: deleteHandler.bind(null, record.id) },
	        _react2.default.createElement(
	          'a',
	          { href: '' },
	          'Delete'
	        )
	      )
	    );
	  }
	}];

	var TodoList = function TodoList() {
	  var todos = gPageTodo.todos;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: { marginTop: "16px" } },
	      _react2.default.createElement(_antd.Table, {
	        columns: columns,
	        dataSource: todos,
	        rowKey: function rowKey(record) {
	          return record.id;
	        }
	      })
	    )
	  );
	};

	exports.default = (0, _mobxReact.observer)(TodoList);

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = mobxReact;

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	module.exports = _;

/***/ }
]);