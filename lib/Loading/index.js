import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState, useRef } from 'react';

/** 延迟渲染子元素, 一般用于防止loading闪烁等问题 */
var Loading = function Loading(props) {
  var _props$wait = props.wait,
      wait = _props$wait === void 0 ? 700 : _props$wait,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      children = props.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var ref = useRef();
  useEffect(function () {
    if (visible) {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      ref.current = window.setTimeout(function () {
        setShow(true);
      }, wait);
    } else {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setShow(false);
    }

    return function () {
      setShow(false);
      clearTimeout(ref.current);
    };
  }, [visible, wait]);
  return show ? children : null;
};

export default Loading;