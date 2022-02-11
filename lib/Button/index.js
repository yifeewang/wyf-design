import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _excluded = ["type", "disabled", "active", "outlined", "block", "className", "children", "htmlType", "circle", "dashed", "danger", "loading", "ghost", "onClick", "wait"];

var _templateObject;

import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from '../vars';
import { isMobile } from '../dom';
import { getThemeColorCss } from '../themeHelper';
import Spin from '../Spin';
import Space from '../Space';
var StyledButton = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  box-sizing: border-box;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  padding: 4px 16px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    ", " {\n      opacity: 0.8;\n    }\n    &.pc:hover,\n    &.outlined {\n      ", "\n      ", "\n    }\n\n    &.mobile:active {\n      background-color: ", ";\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.primary {\n    ", "\n    ", "\n    color: #fff;\n\n    ", " {\n      opacity: 0.8;\n    }\n\n    &.ghost,\n    &.ghost:hover,\n    &.ghost:active {\n      background-color: transparent !important;\n      ", "\n      ", "\n\n      &.danger {\n        color: ", ";\n      }\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.anchor {\n    margin: unset;\n    padding: unset;\n    background: unset;\n    border: none;\n    ", "\n    height: unset;\n  }\n\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:active {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  &.ghost,\n  &.ghost:hover {\n    color: ", ";\n    background-color: transparent;\n    border-color: ", ";\n  }\n"])), vars.border, isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), vars.activeBg, vars.danger, vars.danger, getThemeColorCss('background-color'), getThemeColorCss('border-color'), isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), vars.danger, vars.danger, vars.danger, getThemeColorCss('color'), vars.border, vars.border);
/** 按钮 */

var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      disabled = props.disabled,
      active = props.active,
      outlined = props.outlined,
      block = props.block,
      className = props.className,
      children = props.children,
      htmlType = props.htmlType,
      circle = props.circle,
      dashed = props.dashed,
      danger = props.danger,
      loading = props.loading,
      ghost = props.ghost,
      _onClick = props.onClick,
      wait = props.wait,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      waiting = _useState2[0],
      setWaiting = _useState2[1];

  var waitTime = typeof wait === 'number' && wait > 0 ? wait : typeof wait === 'boolean' && wait === true ? 1000 : 0;
  var usingWait = waitTime > 0;
  var icon = props.icon || (loading ? /*#__PURE__*/React.createElement(Spin, null) : null);
  return /*#__PURE__*/React.createElement(StyledButton, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    type: htmlType,
    onClick: function onClick(e) {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);

      if (usingWait) {
        setWaiting(true);
        setTimeout(function () {
          setWaiting(false);
        }, waitTime);
      }
    },
    className: clsx('uc-btn', 'uc-button', type, {
      disabled: disabled || loading || waiting,
      block: block,
      circle: circle,
      dashed: dashed,
      ghost: ghost,
      danger: danger,
      mobile: isMobile,
      pc: !isMobile,
      anchor: rest.as === 'a',
      outlined: outlined || active
    }, className)
  }), /*#__PURE__*/React.createElement(Space, null, icon, children));
});
Button.displayName = 'UC-Button';
export default Button;