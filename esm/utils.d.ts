import * as React from 'react';
export declare type F = (...args: any[]) => void;
export declare function toArray(children: React.ReactElement[]): React.ReactNode[];
/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */
export declare const debounce: (fn: F, timeout?: number) => F;
/**
 * 节流
 *
 * @param {F} fn
 * @param {number} [timeout=200]
 * @param {boolean} [last=true] 最后一个timeout是否执行
 * @return {*}  {F}
 */
export declare const throttle: (fn: F, timeout?: number, last?: boolean) => F;
/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */
export declare const uniqArray: <T>(arr: T[], equalFn?: (a: T, b: T) => boolean) => T[];
export declare const isObject: (obj: any) => boolean;
/**
 *  sleep 一段时间
 *
 * @param {number} time
 */
export declare const sleep: (time: number) => Promise<unknown>;
