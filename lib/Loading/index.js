import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var initLoading = /*#__PURE__*/function () {
  function initLoading() {
    _classCallCheck(this, initLoading);

    _defineProperty(this, "ele", null);
  }

  _createClass(initLoading, [{
    key: "showLoading",
    value: function showLoading() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.ele = document.createElement('div');
      var load_wraper = document.createElement('div');
      var loading = document.createElement('div');
      var load_tips = document.createElement('div');
      var style = '';
      style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      document.head.appendChild(style);
      var token = window.WebKitCSSKeyframesRule ? '-webkit-' : '';
      var sheet = style.sheet;
      var rules = "\n            @".concat(token, "keyframes weuiLoading {\n                0% {\n                    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n                    transform: rotate3d(0, 0, 1, 0deg);\n                }\n            \n                100% {\n                    -webkit-transform: rotate3d(0, 0, 1, 360deg);\n                    transform: rotate3d(0, 0, 1, 360deg);\n                }\n            }\n        ");
      sheet.insertRule(rules, 0);
      load_wraper.style.cssText = "\n            position: absolute;\n            width: 150px;\n            height: 150px;\n            color: #fff;\n            text-align: center;\n            background: rgba(0, 0, 0, 0.5);\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: space-evenly;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            border-radius: 20px;\n            font-size: 30px;        \n        ";
      loading.style.cssText = "\n            width: 70px;\n            height: 70px;\n            display: inline-block;\n            vertical-align: middle;\n            -webkit-animation: weuiLoading 1s steps(12, end) infinite;\n            animation: weuiLoading 1s steps(12, end) infinite;\n            background: transparent url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\") no-repeat;\n            background-size: 100%;\n            background-image: url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\");\n        ";
      load_tips.style.cssText = "\n            display: inline-block;\n            vertical-align: middle;\n            color: rgba(0, 0, 0, 0.9);\n            color: var(--weui-FG-0);\n        ";
      this.ele.style.cssText = "\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100vw;\n            height: 100vh;\n        ";
      load_tips.innerHTML = text || '正在加载';
      load_wraper.appendChild(loading);
      load_wraper.appendChild(load_tips);
      this.ele.appendChild(load_wraper);
      document.body.appendChild(this.ele);
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      if (this.ele) {
        document.body.removeChild(this.ele);
      }
    }
  }]);

  return initLoading;
}();

export default new initLoading();