webpackJsonp([0],[
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

	var _ant = __webpack_require__(3);

	var _ant2 = _interopRequireDefault(_ant);

	var _antMobile = __webpack_require__(8);

	var _antMobile2 = _interopRequireDefault(_antMobile);

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
	          _react2.default.createElement(_reactRouter.Route, { path: 'homepage', component: _antMobile2.default }),
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: _antMobile2.default })
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__webpack_require__(4);

	exports.default = function (_ref) {
	  var children = _ref.children;
	  return React.createElement(
	    "div",
	    { className: "container", id: "container" },
	    React.createElement(
	      "div",
	      { className: "body" },
	      children
	    )
	  );
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antdMobile = __webpack_require__(9);

	var CheckboxItem = _antdMobile.Checkbox.CheckboxItem;
	// export default ()=><div>
	// <NavBar leftContent="返回" mode="light"
	//         onLeftClick={() => alert('onLeftClick') }>NavBar</NavBar>
	// </div>

	var picker = [{
	  value: 'bj',
	  label: '北京市'
	}, {
	  value: 'zj',
	  label: '浙江省'
	}, {
	  value: 'gd',
	  label: '广东省'
	}, {
	  value: 'hn',
	  label: '海南省'
	}, {
	  value: 'cq',
	  label: '重庆市'
	}, {
	  value: 'sc',
	  label: '四川省'
	}];

	exports.default = function () {
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      _antdMobile.NavBar,
	      { leftContent: '\u8FD4\u56DE', mode: 'light' },
	      'NavBar'
	    ),
	    React.createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
	    React.createElement(
	      _antdMobile.WingBlank,
	      { size: 'lg' },
	      React.createElement(
	        'h1',
	        null,
	        '\u7535\u6E90\u63A7\u5236\u5668'
	      )
	    ),
	    React.createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
	    React.createElement(
	      _antdMobile.List,
	      { style: { height: document.documentElement.clientHight } },
	      _.map(new Array(20), function (i, index) {
	        return React.createElement(
	          _antdMobile.List.Item,
	          { key: index },
	          '\u6211\u662F\u7B2C',
	          index,
	          '\u4E2Aitem'
	        );
	      })
	    )
	  );
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = antdMobile;

/***/ })
]);