import * as React from 'react';
import { isFragment } from 'react-is';
export function toArray(children) {
  var ret = [];
  React.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */

export var debounce = function debounce(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var timer = 0;
  return function a() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var that = this;

    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }

    timer = window.setTimeout(function () {
      fn.apply(that, args);
    }, timeout);
  };
};
/**
 * 节流
 *
 * @param {F} fn
 * @param {number} [timeout=200]
 * @param {boolean} [last=true] 最后一个timeout是否执行
 * @return {*}  {F}
 */

export var throttle = function throttle(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var start = 0;
  var timer = 0;

  var ensureExecute = function ensureExecute(now, args, that) {
    if (!last) return;

    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }

    timer = window.setTimeout(function () {
      fn.apply(that, args);
      start = now;
    }, timeout);
  };

  return function () {
    var that = this;
    var now = Date.now();

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!start) {
      start = now;
      ensureExecute(now, args, that);
      return;
    }

    if (now - start >= timeout) {
      ensureExecute(now, args, that);
      fn.apply(that, args);
      start = now;
    }
  };
};

var defaultEqualFn = function defaultEqualFn(a, b) {
  return a === b;
};
/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */


export var uniqArray = function uniqArray(arr) {
  var equalFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualFn;
  var rt = [];

  if (Array.isArray(arr)) {
    arr.map(function (item) {
      if (!rt.find(function (d) {
        return equalFn(item, d);
      })) {
        rt.push(item);
      }
    });
  }

  return rt;
};
export var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 *  sleep 一段时间
 *
 * @param {number} time
 */

export var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};