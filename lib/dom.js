import ReactDOM from 'react-dom';
var flexGapSupported;
/**
 * 检查浏览器支持gap
 *
 * @return {*}  {boolean}
 */

export var detectFlexGapSupported = function detectFlexGapSupported() {
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }

  if (typeof window === 'undefined') {
    return false;
  }

  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  return flexGapSupported;
};
/**
 * 取得元素偏移值
 *
 * @param {(HTMLElement | null)} el
 * @return {*}  {{ top: number; left: number }}
 */

export var offset = function offset(el) {
  var top = 0;
  var left = 0;

  while (el) {
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return {
    top: top,
    left: left
  };
};
/** 是否是浏览器 */

export var isBrowser = !!(typeof window !== 'undefined' && window);
/** 是否是移动端 */

export var isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);

/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */
export var renderElement = function renderElement(element, container) {
  var dom = container || document.createElement('div');
  document.body.appendChild(dom);
  ReactDOM.render(element, dom);

  var dispose = function dispose() {
    ReactDOM.unmountComponentAtNode(dom);

    if (dom && dom.parentNode) {
      dom.parentNode.removeChild(dom);
    }
  };

  return function (beforeDispose) {
    if (typeof beforeDispose === 'function') {
      // play transition here before unmount
      beforeDispose().then(dispose);
    } else {
      dispose();
    }
  };
};
var cssRegex = /\.css$/i;
var resourceRegex = /\.(css|js)$/i;
var resourceLoadedList = new Set();
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */

export var loadResource = function loadResource(url) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (resourceRegex.test(url)) {
    if (!resourceLoadedList.has(url)) {
      resourceLoadedList.add(url);
      return new Promise(function (resolve, reject) {
        var el;
        var isCss = cssRegex.test(url);

        if (isCss) {
          el = document.createElement('link');
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.rel = 'stylesheet';
          el.href = url;
        } else {
          el = document.createElement('script');
          el.setAttribute('data-namespace', url);
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.src = url;
        }

        el.onload = resolve;
        el.onerror = reject;

        if (isCss) {
          var head = document.getElementsByTagName('head')[0];
          head.appendChild(el);
        } else {
          document.body.appendChild(el);
        }
      });
    } else {
      return Promise.resolve();
    }
  } else {
    return Promise.reject('请输入js/css文件地址');
  }
};
/** 是否支持触屏 */

export var isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;
/** get el scrollTop */

export var getScrollTop = function getScrollTop(ele) {
  if (ele === window) {
    return window.pageYOffset;
  }

  return ele.scrollTop;
};
export var isCssVarSupported = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports('--a', '0');