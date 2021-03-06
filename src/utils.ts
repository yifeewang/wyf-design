import * as React from 'react';
import { isFragment } from 'react-is';
export type F = (...args: any[]) => void;

export function toArray(children: React.ReactElement[]): React.ReactNode[] {
  let ret: any = [];
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
export const debounce = (fn: F, timeout = 100): F => {
  let timer = 0;

  return function a(...args) {
    const that: any = this;
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = window.setTimeout(() => {
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
export const throttle = (fn: F, timeout = 200, last = true): F => {
  let start = 0;
  let timer = 0;
  const ensureExecute = (now: any, args: any, that: any) => {
    if (!last) return;
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = window.setTimeout(() => {
      fn.apply(that, args);
      start = now;
    }, timeout);
  };
  return function (...args: any[]) {
    const that = this;
    const now = Date.now();
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

const defaultEqualFn = (a: any, b: any) => a === b;

/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */
export const uniqArray = <T>(arr: T[], equalFn: (a: T, b: T) => boolean = defaultEqualFn): T[] => {
  const rt: T[] = [];

  if (Array.isArray(arr)) {
    arr.map((item) => {
      if (!rt.find((d) => equalFn(item, d))) {
        rt.push(item);
      }
    });
  }

  return rt;
};

export const isObject = (obj: any) => Object.prototype.toString.call(obj) === '[object Object]';

/**
 *  sleep 一段时间
 *
 * @param {number} time
 */
export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
