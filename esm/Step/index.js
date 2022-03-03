import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["current", "dotStyle", "className", "direction", "steps", "type"];
import React, { useLayoutEffect, useRef, useImperativeHandle, useState } from 'react';
import StyledSteps from './less';
import clsx from 'clsx';
import { throttle } from '../utils';
/** 步骤条 */

var Steps = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$current = props.current,
      current = _props$current === void 0 ? 0 : _props$current,
      _props$dotStyle = props.dotStyle,
      dotStyle = _props$dotStyle === void 0 ? false : _props$dotStyle,
      className = props.className,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$steps = props.steps,
      steps = _props$steps === void 0 ? [] : _props$steps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'normal' : _props$type,
      rest = _objectWithoutProperties(props, _excluded);

  var domRef = useRef();
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var _useState = useState(80),
      _useState2 = _slicedToArray(_useState, 2),
      space = _useState2[0],
      setSpace = _useState2[1];

  useLayoutEffect(function () {
    var isHorizontal = direction === 'horizontal';

    var resizeHandler = function resizeHandler() {
      if (steps.length > 1) {
        var domEl = domRef.current;
        if (!domEl) return;
        setSpace(Math.max((isHorizontal ? domEl.offsetWidth : domEl.offsetHeight) / steps.length, 60));
      }
    };

    var throttleResizeHandler = throttle(resizeHandler);

    if (isHorizontal) {
      window.addEventListener('resize', throttleResizeHandler);
    }

    resizeHandler();
    return function () {
      if (isHorizontal) {
        window.removeEventListener('resize', throttleResizeHandler);
      }
    };
  }, [steps, direction]);
  return /*#__PURE__*/React.createElement(StyledSteps, _extends({}, rest, {
    ref: domRef,
    className: clsx(className, direction),
    space: space
  }), type === 'normal' ? /*#__PURE__*/React.createElement("div", {
    className: "step-normal-wraper"
  }, steps.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: clsx('step', {
        finish: idx < current,
        current: idx === current
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "step-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: clsx("step-circle", {
        dot: dotStyle && !item.icon,
        icon: item.icon
      })
    }, item.icon ? item.icon : dotStyle ? null : idx + 1, item.giftType ? /*#__PURE__*/React.createElement("img", {
      className: "step-gift",
      src: item.giftType === 'active' ? item.giftActiveSrc : item.giftNotActiveSrc,
      onClick: function onClick() {
        item.callBack(item);
      }
    }) : '')), /*#__PURE__*/React.createElement("div", {
      className: "step-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "step-title"
    }, item.title), !!item.description && /*#__PURE__*/React.createElement("div", {
      className: "step-description"
    }, item.description)));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "step-wraper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-steps-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress",
    id: "progress",
    style: {
      width: "".concat(current / (steps.length - 1) * 100, "%")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "step_text"
  }, steps.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "index_topIcon_".concat(index),
      className: "step_item",
      style: {
        left: "calc(".concat(index / (steps.length - 1) * 100, "%)")
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "step_item_text"
    }, item.title, item.giftType ? /*#__PURE__*/React.createElement("img", {
      className: "step-gift",
      src: item.giftType === 'active' ? item.giftActiveSrc : item.giftNotActiveSrc,
      onClick: function onClick() {
        item.callBack(item);
      }
    }) : ''));
  })))));
}); // Steps.displayName = 'UC-Steps';

export default Steps;