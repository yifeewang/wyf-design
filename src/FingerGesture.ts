/*
 * refer to AlloyFinger & refactor
 */

import type { SyntheticEvent } from 'react';
import { isTouch } from './dom';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = function () {};

const getLen = (v: any) => {
  return Math.sqrt(v.x * v.x + v.y * v.y);
};

function dot(v1: any, v2: any) {
  return v1.x * v2.x + v1.y * v2.y;
}

function getAngle(v1: any, v2: any) {
  const mr = getLen(v1) * getLen(v2);
  if (mr === 0) return 0;
  let r = dot(v1, v2) / mr;
  if (r > 1) r = 1;
  return Math.acos(r);
}

function cross(v1: any, v2: any) {
  return v1.x * v2.y - v2.x * v1.y;
}

function getRotateAngle(v1: any, v2: any) {
  let angle = getAngle(v1, v2);
  if (cross(v1, v2) > 0) {
    angle *= -1;
  }
  return angle * 180;
  // return (angle * 180) / Math.PI;
}

const HandlerAdmin = function (el: any) {
  this.handlers = [];
  this.el = el;
} as any;

HandlerAdmin.prototype.add = function (handler: any) {
  this.handlers.push(handler);
};

HandlerAdmin.prototype.del = function (handler: any) {
  if (!handler) this.handlers = [];

  for (let i = this.handlers.length; i >= 0; i--) {
    if (this.handlers[i] === handler) {
      this.handlers.splice(i, 1);
    }
  }
};

HandlerAdmin.prototype.dispatch = function (...args: any) {
  for (let i = 0, len = this.handlers.length; i < len; i++) {
    const handler = this.handlers[i];
    handler.apply?.(this.el, args);
  }
};

function wrapFunc(el: any, handler: any) {
  const handlerAdmin = new HandlerAdmin(el);
  handlerAdmin.add(handler);

  return handlerAdmin;
}

export type Options = Partial<{
  onTouchStart: (evt: SyntheticEvent) => void;
  onTouchMove: (evt: SyntheticEvent) => void;
  onTouchEnd: (evt: SyntheticEvent) => void;
  onTouchCancel: (evt: SyntheticEvent) => void;
  onMultipointStart: (evt: SyntheticEvent) => void;
  onMultipointEnd: (evt: SyntheticEvent) => void;
  onTap: () => void;
  /** 点两次 */
  onDoubleTap: () => void;
  /** 长按 */
  onLongTap: () => void;
  // onSingleTap: () => void;

  /** 旋转, 单位:deg */
  onRotate: (evt: SyntheticEvent & { angle: number }) => void;
  /** 缩放  */
  onPinch: (evt: SyntheticEvent & { scale: number }) => void;
  /** 单指滑动 */
  onPressMove: (evt: SyntheticEvent & { deltaX: number; deltaY: number }) => void;
  /** 左右滑动 */
  onSwipe: (evt: SyntheticEvent & { direction: 'left' | 'right' | 'up' | 'down' }) => void;
  onTwoFingerPressMove: () => void;
}>;

/** 手势操作 */
const FingerGesture = function (el: Element, option: Options) {
  this.element = el;

  this.start = this.start.bind(this);
  this.move = this.move.bind(this);
  this.end = this.end.bind(this);
  this.cancel = this.cancel.bind(this);

  this.element.addEventListener(isTouch ? 'touchstart' : 'mousedown', this.start);

  if (isTouch) {
    this.element.addEventListener('touchmove', this.move);
    this.element.addEventListener('touchend', this.end);
    this.element.addEventListener('touchcancel', this.cancel);
  } else {
    document.addEventListener('mousemove', this.move);
    document.addEventListener('mouseup', this.end);
  }

  this.preV = { x: null, y: null };
  this.pinchStartLen = null;
  this.scale = 1;
  this.isDoubleTap = false;

  this.rotate = wrapFunc(this.element, option.onRotate || noop);

  this.touchStart = wrapFunc(this.element, option.onTouchStart || noop);
  this.touchMove = wrapFunc(this.element, option.onTouchMove || noop);
  this.touchEnd = wrapFunc(this.element, option.onTouchEnd || noop);
  this.touchCancel = wrapFunc(this.element, option.onTouchCancel || noop);
  this.isMoving = false;

  this.multipointStart = wrapFunc(this.element, option.onMultipointStart || noop);
  this.multipointEnd = wrapFunc(this.element, option.onMultipointEnd || noop);
  this.pinch = wrapFunc(this.element, option.onPinch || noop);
  this.swipe = wrapFunc(this.element, option.onSwipe || noop);
  this.tap = wrapFunc(this.element, option.onTap || noop);
  this.doubleTap = wrapFunc(this.element, option.onDoubleTap || noop);
  this.longTap = wrapFunc(this.element, option.onLongTap || noop);
  // this.singleTap = wrapFunc(this.element, option.onSingleTap || noop);
  this.pressMove = wrapFunc(this.element, option.onPressMove || noop);
  this.twoFingerPressMove = wrapFunc(this.element, option.onTwoFingerPressMove || noop);

  this._cancelAllHandler = this.cancelAll.bind(this);

  window.addEventListener('scroll', this._cancelAllHandler);

  this.delta = null;
  this.last = null;
  this.now = null;
  this.tapTimeout = null;
  // this.singleTapTimeout = null;
  this.longTapTimeout = null;
  this.swipeTimeout = null;
  this.x1 = this.x2 = this.y1 = this.y2 = null;
  this.preTapPosition = { x: null, y: null };
} as any;

FingerGesture.prototype = {
  start: function (evt: any) {
    if (!evt.touches) {
      evt.touches = evt.touches || [];
      evt.touches[0] = {
        pageX: evt.pageX,
        pageY: evt.pageY,
      };
    }
    if (!this.isMoving) {
      this.isMoving = true;
    }
    this.now = Date.now();
    this.x1 = evt.touches[0].pageX;
    this.y1 = evt.touches[0].pageY;
    this.delta = this.now - (this.last || this.now);
    this.touchStart.dispatch(evt, this.element);
    if (this.preTapPosition.x !== null) {
      this.isDoubleTap =
        this.delta > 0 &&
        this.delta <= 250 &&
        Math.abs(this.preTapPosition.x - this.x1) < 30 &&
        Math.abs(this.preTapPosition.y - this.y1) < 30;
      // if (this.isDoubleTap) clearTimeout(this.singleTapTimeout);
    }
    this.preTapPosition.x = this.x1;
    this.preTapPosition.y = this.y1;
    this.last = this.now;
    const preV = this.preV,
      len = evt.touches.length;
    if (len > 1) {
      this._cancelLongTap();
      // this._cancelSingleTap();
      const v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
      preV.x = v.x;
      preV.y = v.y;
      this.pinchStartLen = getLen(preV);
      this.multipointStart.dispatch(evt, this.element);
    }
    this._preventTap = false;
    this.longTapTimeout = setTimeout(
      function () {
        this.longTap.dispatch(evt, this.element);
        this._preventTap = true;
      }.bind(this),
      750,
    );
  },
  move: function (evt: any) {
    if (!this.isMoving) {
      return;
    }
    if (!evt.touches) {
      evt.touches = evt.touches || [];
      evt.touches[0] = {
        pageX: evt.pageX,
        pageY: evt.pageY,
      };
    }
    const preV = this.preV,
      len = evt.touches.length,
      currentX = evt.touches[0].pageX,
      currentY = evt.touches[0].pageY;
    this.isDoubleTap = false;
    if (len > 1) {
      const sCurrentX = evt.touches[1].pageX,
        sCurrentY = evt.touches[1].pageY;
      const v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };

      if (preV.x !== null) {
        if (this.pinchStartLen > 0) {
          evt.scale = getLen(v) / this.pinchStartLen;
          this.pinch.dispatch(evt, this.element);
        }

        evt.angle = getRotateAngle(v, preV);
        this.rotate.dispatch(evt, this.element);
      }
      preV.x = v.x;
      preV.y = v.y;

      if (this.x2 !== null && this.sx2 !== null) {
        evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
        evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }
      this.twoFingerPressMove.dispatch(evt, this.element);

      this.sx2 = sCurrentX;
      this.sy2 = sCurrentY;
    } else {
      if (this.x2 !== null) {
        evt.deltaX = currentX - this.x2;
        evt.deltaY = currentY - this.y2;

        //move事件中添加对当前触摸点到初始触摸点的判断，
        //如果曾经大于过某个距离(比如10),就认为是移动到某个地方又移回来，应该不再触发tap事件才对。
        const movedX = Math.abs(this.x1 - this.x2),
          movedY = Math.abs(this.y1 - this.y2);

        if (movedX > 10 || movedY > 10) {
          this._preventTap = true;
        }
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }

      this.pressMove.dispatch(evt, this.element);
    }

    this.touchMove?.dispatch(evt, this.element);

    this._cancelLongTap();
    this.x2 = currentX;
    this.y2 = currentY;

    if (len > 1) {
      evt.preventDefault();
    }
  },
  end: function (evt: any) {
    if (this.isMoving) {
      this.isMoving = false;
    }
    if (isTouch && !evt.changedTouches) return;
    if (!evt.touches) {
      (evt as any).touches = evt.touches || [];
      (evt as any).touches[0] = {
        pageX: evt.pageX,
        pageY: evt.pageY,
      };
    }
    this._cancelLongTap();
    const self = this;
    if (isTouch && evt.touches.length < 2) {
      this.multipointEnd.dispatch(evt, this.element);
      this.sx2 = this.sy2 = null;
    }

    //swipe
    if (
      (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
      (this.y2 && Math.abs(this.y1 - this.y2) > 30)
    ) {
      evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
      this.swipeTimeout = setTimeout(function () {
        self.swipe.dispatch(evt, self.element);
      }, 0);
    } else {
      this.tapTimeout = setTimeout(function () {
        if (!self._preventTap) {
          self.tap?.dispatch(evt, self.element);
        }
        // trigger double tap immediately
        if (self.isDoubleTap) {
          self.doubleTap?.dispatch(evt, self.element);
          self.isDoubleTap = false;
        }
      }, 0);

      // if (!self.isDoubleTap) {
      //   self.singleTapTimeout = setTimeout(function () {
      //     self.singleTap?.dispatch(evt, self.element);
      //   }, 250);
      // }
    }

    this.touchEnd?.dispatch(evt, this.element);

    this.preV.x = 0;
    this.preV.y = 0;
    this.scale = 1;
    this.pinchStartLen = null;
    this.x1 = this.x2 = this.y1 = this.y2 = null;
  },
  cancelAll: function () {
    this._preventTap = true;
    // clearTimeout(this.singleTapTimeout);
    clearTimeout(this.tapTimeout);
    clearTimeout(this.longTapTimeout);
    clearTimeout(this.swipeTimeout);
  },
  cancel: function (evt: any) {
    this.cancelAll();
    this.touchCancel.dispatch(evt, this.element);
  },
  _cancelLongTap: function () {
    clearTimeout(this.longTapTimeout);
  },
  // _cancelSingleTap: function () {
  //   clearTimeout(this.singleTapTimeout);
  // },
  _swipeDirection: function (x1: any, x2: any, y1: any, y2: any) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
      ? x1 - x2 > 0
        ? 'left'
        : 'right'
      : y1 - y2 > 0
      ? 'up'
      : 'down';
  },

  on: function (evt: any, handler: any) {
    if (this[evt]) {
      this[evt].add(handler);
    }
  },

  off: function (evt: any, handler: any) {
    if (this[evt]) {
      this[evt].del(handler);
    }
  },

  destroy: function () {
    // if (this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
    if (this.tapTimeout) clearTimeout(this.tapTimeout);
    if (this.longTapTimeout) clearTimeout(this.longTapTimeout);
    if (this.swipeTimeout) clearTimeout(this.swipeTimeout);

    this.element.removeEventListener(isTouch ? 'touchstart' : 'mousedown', this.start);

    if (isTouch) {
      this.element.removeEventListener('touchmove', this.move);
      this.element.removeEventListener('touchend', this.end);
      this.element.removeEventListener('touchcancel', this.cancel);
    } else {
      document.removeEventListener('mousemove', this.move);
      document.removeEventListener('mouseup', this.end);
    }

    this.rotate.del();
    this.touchStart.del();
    this.multipointStart.del();
    this.multipointEnd.del();
    this.pinch.del();
    this.swipe.del();
    this.tap.del();
    this.doubleTap.del();
    this.longTap.del();
    // this.singleTap.del();
    this.pressMove.del();
    this.twoFingerPressMove.del();
    this.touchMove.del();
    this.touchEnd.del();
    this.touchCancel.del();

    this.preV = { x: null, y: null };

    this.isMoving =
      this.pinchStartLen =
      this.scale =
      this.isDoubleTap =
      this.delta =
      this.last =
      this.now =
      this.tapTimeout =
      // this.singleTapTimeout =
      this.longTapTimeout =
      this.swipeTimeout =
      this.x1 =
      this.x2 =
      this.y1 =
      this.y2 =
      this.preTapPosition =
      this.rotate =
      this.touchStart =
      this.multipointStart =
      this.multipointEnd =
      this.pinch =
      this.swipe =
      this.tap =
      this.doubleTap =
      this.longTap =
      // this.singleTap =
      this.pressMove =
      this.touchMove =
      this.touchEnd =
      this.touchCancel =
      this.twoFingerPressMove =
        null;

    window.removeEventListener('scroll', this._cancelAllHandler);
    return null;
  },
};

export default FingerGesture;
