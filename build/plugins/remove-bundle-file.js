const fs = require('fs');
const path = require('path');
const { logError, logSuccess } = require('../utils');

/**
 * 删除打包指定文件列表
 * @param {*} options
 * @returns
 */
module.exports = function (options = {}) {
  const { fileList = [] } = options;
  return {
    name: 'vite-remove-bundle-file-list',
    closeBundle() {
      if (!fileList.length) return;
      fileList.forEach(file => {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
          try {
            fs.unlinkSync(filePath);
            logSuccess(`[vite-remove-bundle-file-list] ${file} 删除成功`);
          } catch (error) {
            logError(`[vite-remove-bundle-file-list] ${file} 删除失败，错误信息：${error}`);
          }
        }
      });
    },
  };
};
