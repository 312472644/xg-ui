const fs = require('fs');
const path = require('path');

/**
 * 获取Rollup入口文件
 * @param {string} folderPath 文件夹路径
 * @returns {string[]} 入口文件路径
 */ 
function getEntry(folderPath) {
  return fs.readdirSync(folderPath).map(file => path.join(folderPath, file, 'index.vue'));
}

module.exports = {
  getEntry,
};
