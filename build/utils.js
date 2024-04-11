const fs = require('fs');
const path = require('path');

/**
 * 获取Rollup入口文件
 * @param {string} folderPath 文件夹路径
 * @returns {Object<string,string>} 入口文件路径
 */
function getRollupEntry(folderPath) {
  const entry = {};
  fs.readdirSync(folderPath).forEach(file => {
    entry[file] = path.join(folderPath, file, 'index.js');
  });
  return entry;
}

module.exports = { getRollupEntry };
