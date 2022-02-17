class initToast {
  showToast(msg: string, duration: number) {
    const newDuration = isNaN(duration) ? 2000 : duration;
    const m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText =
      'max-width:80%; background: #000; opacity: 0.6; height: auto; min-height: 30px; color: #fff; line-height: 30px; text-align: center; border-radius: 4px; position: fixed;top: 15%; left: 50%; transform: translateX(-50%); font-size: 16px;padding: 5px 10px;z-index: 9999;';
    document.body.appendChild(m);
    setTimeout(function () {
      const d = 0.5;
      m.style.webkitTransition = 'opacity ' + d + 's ease-in';
      m.style.opacity = '0';
      setTimeout(function () {
        document.body.removeChild(m);
      }, d * 1000);
    }, newDuration);
  }
}
export default new initToast();
