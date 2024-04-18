const fs = require('fs');
const path = require('path');
const { logSuccess } = require('../utils');

/**
 * 打包之前删除目标文件夹
 * @param {String} filePath  目标文件夹路径
 * @returns {import('vite').Plugin}
 */
module.exports = function (filePath = '/dist') {
  return {
    name: 'vite-remove-dest',
    buildStart() {
      const packagesPath = process.cwd();
      const destPath = path.join(packagesPath, filePath);
      if (fs.existsSync(destPath)) {
        fs.rmdirSync(destPath, { recursive: true });
        logSuccess(`[vite-remove-dest] ${destPath} deleted`);
      }
    },
  };
};
