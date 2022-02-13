import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _excluded = ["wait", "loading", "className"];

var _templateObject;

import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import WaitLoading from '../Loading';
var StyledSpin = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @-webkit-keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n  @keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n\n  display: inline-flex;\n  position: relative;\n  width: 1em;\n  height: 1em;\n  vertical-align: middle;\n  animation: loading 1s steps(60, end) infinite;\n  :before,\n  :after {\n    display: block;\n    box-sizing: border-box;\n    width: 0.5em;\n    height: 1em;\n    border: 0.125em solid;\n    border-color: currentColor;\n    content: '';\n  }\n  :before {\n    border-right-width: 0;\n    border-top-left-radius: 1em;\n    border-bottom-left-radius: 1em;\n    -webkit-mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n    mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n  :after {\n    border-left-width: 0;\n    border-top-right-radius: 1em;\n    border-bottom-right-radius: 1em;\n    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n"])));
/** 加载中指示器,继承父容器颜色和字体大小 */

var Spin = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var wait = _ref.wait,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? true : _ref$loading,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded);

  var waitTime = typeof wait === 'number' && wait > 0 ? wait : typeof wait === 'boolean' && wait === true ? 700 : 0;
  var el = /*#__PURE__*/React.createElement(StyledSpin, _extends({}, rest, {
    ref: ref,
    className: clsx(className, 'uc-spin')
  }));
  return waitTime > 0 ? /*#__PURE__*/React.createElement(WaitLoading, {
    visible: loading,
    wait: waitTime
  }, el) : el;
});
Spin.displayName = 'UC-Spin';
export default Spin;