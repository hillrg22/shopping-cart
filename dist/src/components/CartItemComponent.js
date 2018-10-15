"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CartItemComponent = function CartItemComponent(props) {
  return props.cartItemsList.map(function (item) {
    return _react2.default.createElement(
      "div",
      { className: "list-group-item" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-8" },
          item.product.name
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-2" },
          item.product.priceInCents
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-2" },
          item.quantity
        )
      )
    );
  });
};

exports.default = CartItemComponent;

//# sourceMappingURL=CartItemComponent.js.map