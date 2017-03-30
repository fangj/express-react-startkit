webpackJsonp([4],{

/***/ 0:
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

	var _weui = __webpack_require__(18);

	var _weui2 = _interopRequireDefault(_weui);

	var _weui3 = __webpack_require__(19);

	var _weui4 = _interopRequireDefault(_weui3);

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
	          { path: '/', component: _weui2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'homepage', component: _weui4.default }),
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: _weui4.default })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;


	ReactDOM.render(_react2.default.createElement(App, null), document.getElementById('App'));

/***/ },

/***/ 18:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var children = _ref.children;
	  return React.createElement(
	    "div",
	    null,
	    children
	  );
	};

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactWeui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var weui = function (_React$Component) {
	    _inherits(weui, _React$Component);

	    function weui(props) {
	        _classCallCheck(this, weui);

	        var _this = _possibleConstructorReturn(this, (weui.__proto__ || Object.getPrototypeOf(weui)).call(this, props));

	        _this.state = {
	            showToptips: false
	        };
	        return _this;
	    }

	    _createClass(weui, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'input', title: 'Input', subTitle: '\u8868\u5355\u8F93\u5165' },
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    'Radio'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    { radio: true },
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { radio: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            'Option 1'
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellFooter,
	                            null,
	                            _react2.default.createElement(_reactWeui.Radio, { name: 'radio1', value: '1', defaultChecked: true })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { radio: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            'Option 2'
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellFooter,
	                            null,
	                            _react2.default.createElement(_reactWeui.Radio, { name: 'radio1', value: '2' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.Cell,
	                        { link: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            'More'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    'Checkbox'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    { checkbox: true },
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { checkbox: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(_reactWeui.Checkbox, { name: 'checkbox1', value: '1' })
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            'Option 1'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { checkbox: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(_reactWeui.Checkbox, { name: 'checkbox2', value: '2', defaultChecked: true })
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            'Option 2'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.Cell,
	                        { link: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            'More'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    'Switch'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    null,
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { 'switch': true },
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            'Switch Label'
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellFooter,
	                            null,
	                            _react2.default.createElement(_reactWeui.Switch, null)
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    'Forms'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    null,
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Label,
	                                null,
	                                'QQ'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.Input, { type: 'tel', placeholder: 'Enter your qq#' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { vcode: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Label,
	                                null,
	                                'Phone'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.Input, { type: 'tel', placeholder: 'Enter your cellphone #' })
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellFooter,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Button
	                                //button to display toptips
	                                ,
	                                { type: 'vcode' },
	                                'Send'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Label,
	                                null,
	                                'Date'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.Input, { type: 'date', defaultValue: '', onChange: function onChange(e) {
	                                    return console.log(e.target.value);
	                                } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Label,
	                                null,
	                                'Datetime'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.Input, { type: 'datetime-local', defaultValue: '', placeholder: '' })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTips,
	                    null,
	                    'Form Footer Tips'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    'Warnings'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    null,
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { warn: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Label,
	                                null,
	                                'QQ'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.Input, { type: 'text', defaultValue: 'Oops...' })
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellFooter,
	                            null,
	                            _react2.default.createElement(_reactWeui.Icon, { value: 'warn' })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    'Textarea'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    null,
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.TextArea, { placeholder: 'Enter your comments', rows: '3', maxlength: '200' })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    '\u9009\u62E9'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    null,
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { select: true, selectPos: 'before' },
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Select,
	                                null,
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: '1' },
	                                    '+86'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: '2' },
	                                    '+80'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: '3' },
	                                    '+84'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: '4' },
	                                    '+87'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.Input, { type: 'tel', placeholder: 'Enter Phone' })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.CellsTitle,
	                    null,
	                    'Selects'
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Form,
	                    null,
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { select: true },
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Select,
	                                { defaultValue: '2' },
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: '1' },
	                                    'WeChat'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: '2' },
	                                    'QQ'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: '3' },
	                                    'Email'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactWeui.FormCell,
	                        { select: true, selectPos: 'after' },
	                        _react2.default.createElement(
	                            _reactWeui.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _reactWeui.Label,
	                                null,
	                                'Country'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactWeui.CellBody,
	                            null,
	                            _react2.default.createElement(_reactWeui.Select, { data: [{
	                                    value: 1,
	                                    label: 'China'
	                                }, {
	                                    value: 2,
	                                    label: 'United States'
	                                }, {
	                                    value: 3,
	                                    label: 'Germany'
	                                }] })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Agreement,
	                    null,
	                    '\xA0\xA0I agree to the ',
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;' },
	                        'WeUI Terms and Privacy'
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.ButtonArea,
	                    null,
	                    _react2.default.createElement(
	                        _reactWeui.Button,
	                        { onClick: function onClick(e) {
	                                if (_this2.state.showToptips) return;
	                                _this2.setState({ showToptips: !_this2.state.showToptips });
	                                window.setTimeout(function (e) {
	                                    return _this2.setState({ showToptips: !_this2.state.showToptips });
	                                }, 2000);
	                            } },
	                        'OK'
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactWeui.Toptips,
	                    { type: 'warn',
	                        show: this.state.showToptips
	                    },
	                    'Oops, something is wrong!'
	                )
	            );
	        }
	    }]);

	    return weui;
	}(_react2.default.Component);

	exports.default = weui;

/***/ },

/***/ 20:
/***/ function(module, exports) {

	module.exports = reactWeui;

/***/ }

});