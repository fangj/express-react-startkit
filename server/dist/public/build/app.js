webpackJsonp([0],[
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

	var _main = __webpack_require__(3);

	var _main2 = _interopRequireDefault(_main);

	var _homepage = __webpack_require__(4);

	var _homepage2 = _interopRequireDefault(_homepage);

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
	          { path: '/', component: _main2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'homepage', component: _homepage2.default }),
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: _homepage2.default })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;


	ReactDOM.render(_react2.default.createElement(App, null), document.getElementById('App'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var children = _ref.children;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h1',
	            null,
	            ' \u7535\u6E90\u63A7\u5236\u5668 '
	        ),
	        children
	    );
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SwitchPage = __webpack_require__(5);

	var _SwitchPage2 = _interopRequireDefault(_SwitchPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(_SwitchPage2.default, null);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SwitchItem = __webpack_require__(6);

	var _SwitchItem2 = _interopRequireDefault(_SwitchItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SwitchPage = function (_React$Component) {
	  _inherits(SwitchPage, _React$Component);

	  function SwitchPage(props) {
	    _classCallCheck(this, SwitchPage);

	    var _this = _possibleConstructorReturn(this, (SwitchPage.__proto__ || Object.getPrototypeOf(SwitchPage)).call(this, props));

	    _this.state = { switches: {} };
	    return _this;
	  }

	  _createClass(SwitchPage, [{
	    key: 'render',
	    value: function render() {
	      var switches = this.state.switches;

	      var switcheList = [];
	      Object.keys(switches).map(function (mac) {
	        return switcheList.push(_extends({ mac: mac }, switches[mac]));
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: 'weui-cells weui-cells_form' },
	        switcheList.map(function (_ref) {
	          var mac = _ref.mac,
	              on = _ref.on;
	          return _react2.default.createElement(_SwitchItem2.default, { key: mac, mac: mac, on: on });
	        }),
	        switcheList.length === 0 ? "目前没有电源控制器接入" : null
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.token = PubSub.subscribe("switches", this.handleMsg.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      PubSub.unsubscribe(this.token);
	    }
	  }, {
	    key: 'handleMsg',
	    value: function handleMsg(target, switches) {
	      this.setState({ switches: switches });
	    }
	  }]);

	  return SwitchPage;
	}(_react2.default.Component);

	/**
	 PubSub.publish("switches",{"abc":{on:true},"def":{on:false}})

	 */


	exports.default = SwitchPage;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _api = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var _ref$mac = _ref.mac,
	        mac = _ref$mac === undefined ? "标题文字" : _ref$mac,
	        _ref$on = _ref.on,
	        on = _ref$on === undefined ? false : _ref$on;
	    return _react2.default.createElement(
	        'div',
	        { className: 'weui-cell weui-cell_switch' },
	        _react2.default.createElement(
	            'div',
	            { className: 'weui-cell__bd' },
	            mac
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'weui-cell__ft' },
	            _react2.default.createElement('input', { className: 'weui-switch', type: 'checkbox', checked: on, onChange: function onChange(e) {
	                    return (0, _api.switchPower)(mac, e.target.checked);
	                } })
	        )
	    );
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var switchPower = exports.switchPower = function switchPower(mac, on) {
		console.log(mac, on);
		//更新本地界面
		gSwitches[mac] = { on: on };
		PubSub.publish("switches", gSwitches);
		//发送到远程
		client.publish("/switch", { mac: mac, on: on });
	};

/***/ }
]);