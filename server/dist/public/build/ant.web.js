webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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

	var _antWeb = __webpack_require__(12);

	var _antWeb2 = _interopRequireDefault(_antWeb);

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
	          _react2.default.createElement(_reactRouter.Route, { path: 'homepage', component: _antWeb2.default }),
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: _antWeb2.default })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;


	ReactDOM.render(_react2.default.createElement(App, null), document.getElementById('App'));

/***/ }),
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
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = antd;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
]);