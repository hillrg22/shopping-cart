"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//should take an array of products & a function that will be called when the form is submitted

var AddItem = function (_React$Component) {
  _inherits(AddItem, _React$Component);

  function AddItem(props) {
    _classCallCheck(this, AddItem);

    var _this = _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).call(this, props));

    _this.onSubmit = function (e) {
      e.preventDefault();
      var newItem = {
        id: _this.props.cartItemsList.length + 1,
        product: {
          id: 40,
          name: _this.props.selected,
          priceInCents: 399
        },
        quantity: _this.refs.amount.value
      };
      // console.log(newItem,'submitted', this.refs.amount.value);
      _this.props.onAddProduct(newItem);
    };

    return _this;
  }

  _createClass(AddItem, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { onSubmit: this.onSubmit },
        _react2.default.createElement(
          "div",
          { className: "form-group" },
          _react2.default.createElement(
            "label",
            { htmlFor: "products" },
            "Products"
          ),
          _react2.default.createElement(
            "select",
            { onChange: this.props.onSelectChange, className: "form-control" },
            this.props.products.map(function (item) {
              return _react2.default.createElement(
                "option",
                null,
                item.name
              );
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "form-group" },
          _react2.default.createElement(
            "label",
            { htmlFor: "Quantity" },
            "Quantity"
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement("input", { placeholder: "Enter Quantity", ref: "amount" })
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "button",
            { type: "Submit", className: "btn btn-primary" },
            "Submit"
          )
        )
      );
    }
  }]);

  return AddItem;
}(_react2.default.Component);

exports.default = AddItem;

//# sourceMappingURL=AddItem.js.map