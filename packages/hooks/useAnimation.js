/**
 * 动画函数封装
 * @param {Object} config
 * @param {Number} config.duration 动画持续时间(ms)
 * @param {Number} config.from 动画开始值
 * @param {Number} config.to 动画结束值
 * @param {Function} config.progress 动画过程回调
 * @param {Function} config.complete 动画结束回调
 */
export function useAnimation(config = {}) {
  const { duration, from, to, progress, complete } = config;
  let value = from;
  const speed = (to - from) / duration;
  const start = Date.now();
  // 动画执行函数
  function _run() {
    const t = Date.now() - start;
    if (t >= duration) {
      value = to;
      progress && progress(value);
      complete && complete();
      return;
    }
    value = from + speed * t;
    progress && progress(value);
    requestAnimationFrame(_run);
  }
  _run();
}
