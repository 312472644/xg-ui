const fs = require('fs');
const path = require('path');

/**
 * 删除打包指定文件列表
 * @param {*} options
 * @returns
 */
module.exports = function (options = {}) {
  const { fileList = [] } = options;
  return {
    name: 'remove-bundle-file-list',
    closeBundle() {
      if (!fileList.length) return;
      fileList.forEach(file => {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
    },
  };
};
