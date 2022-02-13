import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

import { css } from 'styled-components';
import { isBrowser } from './dom';
import * as vars from './vars';
/**
 *  获取包含主题色的styled-components css片段
 *
 * @param {string} css属性
 * @param {string} [leftValue=''] 左侧值
 * @return {*}  {*}
 */

export var getThemeColorCss = function getThemeColorCss(prop) {
  var leftValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", ":", " ", ";\n    ", ":", " var(--uc-color, ", ");\n  "])), prop, leftValue, function (props) {
    return props.theme.color || vars.primary;
  }, prop, leftValue, vars.primary);
};
/**
 *  get theme color from root el
 *
 * @return {*}
 */

export var getRootCssVarColor = function getRootCssVarColor() {
  return isBrowser && document.documentElement.style.getPropertyValue('--uc-color');
};