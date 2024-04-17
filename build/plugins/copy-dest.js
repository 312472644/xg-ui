const path = require('path');
const { logError, logSuccess, copyFolderRecursive } = require('../utils');

/**
 * 复制文件目录到另一个目录
 * @param {Object} options
 * @param {String} options.target 目标目录
 * @param {String} options.source 源目录
 * @param {String} options.replacePath 替换路径
 */
module.exports = function (options = { target: '', source: '', replacePath: '' }) {
  return {
    name: 'vite-copy-dest',
    closeBundle() {
      try {
        const packagesPath = process.cwd().replace(options.replacePath || '\\element', '');
        const targetPath = path.join(packagesPath, options.target);
        const sourcePath = path.join(packagesPath, options.source);
        copyFolderRecursive(targetPath, sourcePath);
        logSuccess(`[vite-copy-dest] 文件复制成功！`);
      } catch (e) {
        logError(`[vite-copy-dest] 文件复制失败！错误信息：${e}`);
      }
    },
  };
};
