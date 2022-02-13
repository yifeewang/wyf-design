import type { ReactElement } from 'react';
/**
 * 检查浏览器支持gap
 *
 * @return {*}  {boolean}
 */
export declare const detectFlexGapSupported: () => boolean;
/**
 * 取得元素偏移值
 *
 * @param {(HTMLElement | null)} el
 * @return {*}  {{ top: number; left: number }}
 */
export declare const offset: (el: HTMLElement | null) => {
    top: number;
    left: number;
};
/** 是否是浏览器 */
export declare const isBrowser: boolean;
/** 是否是移动端 */
export declare const isMobile: boolean;
export declare type Dispose = (beforeDispose?: () => Promise<void>) => void;
/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */
export declare const renderElement: (element: ReactElement, container?: HTMLElement) => Dispose;
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */
export declare const loadResource: (url: string, attrs?: any) => Promise<void>;
/** 是否支持触屏 */
export declare const isTouch: boolean;
/** get el scrollTop */
export declare const getScrollTop: (ele: HTMLElement | Window) => number;
export declare const isCssVarSupported: boolean;
