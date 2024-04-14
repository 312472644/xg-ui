const fs = require('fs');
const path = require('path');

/**
 * @typedef {Object} Options
 * @property {String} Options.fileName 生成的文件名称
 */

/**
 * 将所有样式文件合并成一个文件
 * @param {Options} options
 * @returns {Function}
 */
module.exports = function generateCSS(options = { fileName: '' }) {
  const { fileName } = options;
  const mergeOptions = { filePath: '', fileName };
  // const output = mergeOptions.output;
  const cssSourceList = [];
  return {
    name: 'vite-plugin-generate-css',
    config(config) {
      // 默认从配置项取
      const outputDir = config?.build?.rollupOptions?.output?.dir || 'dist';
      if (!mergeOptions.fileName) {
        mergeOptions.fileName = 'index.css';
      }
      mergeOptions.filePath = outputDir;
    },
    transform(source, id) {
      if (id.indexOf('.css') !== -1 || id.indexOf('.scss') !== -1) {
        cssSourceList.push(source);
      }
    },
    closeBundle() {
      const output = mergeOptions.filePath;
      const fileName = mergeOptions.fileName;
      const reg = new RegExp(/\r\n|\n|\s+/, 'g');
      const content = cssSourceList.map(item => item.replace(reg, '')).join('');
      const ptah = path.join(process.cwd(), output, fileName);
      fs.writeFile(ptah, content, err => {
        if (!err) {
          console.log(`css文件生成成功：${path.join(output, fileName)}`);
        } else {
          console.log(`css文件生成失败：${err}`);
        }
      });
    },
  };
};
