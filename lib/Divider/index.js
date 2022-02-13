import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _excluded = ["type", "textPosition", "className", "dashed", "color", "children"];

var _templateObject;

import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from '../vars';
var StyledDivider = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 16px 0;\n  padding: 0;\n  color: #000000d9;\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  border: none;\n  border-top: 1px solid ", ";\n\n  &.horizontal {\n    display: flex;\n    clear: both;\n    width: 100%;\n    min-width: 100%;\n  }\n\n  &.dashed {\n    border-top-style: dashed;\n  }\n\n  &.text {\n    border-top: 0;\n    .inner-text {\n      display: inline-block;\n      padding: 0 1em;\n      white-space: nowrap;\n      text-align: center;\n    }\n    &::before,\n    &::after {\n      width: 50%;\n      border-top: 1px solid ", ";\n      transform: translateY(50%);\n      content: '';\n    }\n\n    &.dashed {\n      &::before,\n      &::after {\n        border-top-style: dashed;\n      }\n    }\n\n    &.left {\n      &::before {\n        width: 5%;\n      }\n      &::after {\n        width: 95%;\n      }\n    }\n    &.right {\n      &::before {\n        width: 95%;\n      }\n      &::after {\n        width: 5%;\n      }\n    }\n  }\n\n  &.vertical {\n    position: relative;\n    top: -0.06em;\n    display: inline-block;\n    height: 0.9em;\n    margin: 0 8px;\n    vertical-align: middle;\n    border-top: 0;\n    border-left: 1px solid ", ";\n  }\n"])), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
});
/** 分割线 */

var Divider = function Divider(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'horizontal' : _props$type,
      _props$textPosition = props.textPosition,
      textPosition = _props$textPosition === void 0 ? 'center' : _props$textPosition,
      className = props.className,
      dashed = props.dashed,
      _props$color = props.color,
      color = _props$color === void 0 ? vars.border : _props$color,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var hasText = !!children;
  return /*#__PURE__*/React.createElement(StyledDivider, _extends({}, rest, {
    color: color,
    className: clsx('uc-divider', type, hasText ? textPosition : '', className, {
      dashed: dashed,
      text: hasText
    })
  }), hasText ? /*#__PURE__*/React.createElement("span", {
    className: "inner-text"
  }, children) : null);
};

export default Divider;