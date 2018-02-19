"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Phone;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Phone(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M10.022 14.656a16.832 16.832 0 0 0 7.322 7.322l2.445-2.445c.3-.3.744-.4 1.133-.266 1.245.41 2.59.633 3.967.633.611 0 1.111.5 1.111 1.111v3.878C26 25.5 25.5 26 24.889 26 14.456 26 6 17.544 6 7.111 6 6.5 6.5 6 7.111 6H11c.611 0 1.111.5 1.111 1.111 0 1.389.222 2.722.633 3.967.123.389.034.822-.277 1.133l-2.445 2.445z" })
  );
}