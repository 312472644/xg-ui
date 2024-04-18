const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { logError, logSuccess } = require('../utils');

/**
 * 将所有样式文件合并成一个文件
 * @param {Object} options
 * @param {String} options.fileName 生成的文件名称
 * @returns {import('vite').Plugin}
 */
module.exports = function generateCSS(options = { fileName: '' }) {
  const { fileName } = options;
  const mergeOptions = { filePath: '', fileName };
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
      const content = new CleanCSS().minify(cssSourceList.join('')).styles;
      const ptah = path.join(process.cwd(), output, fileName);
      fs.writeFile(ptah, content, err => {
        if (!err) {
          logSuccess(`[vite-plugin-generate-css] css文件合并成功：${path.join(output, fileName)}`);
        } else {
          logError(`[vite-plugin-generate-css] css文件合并失败：${err}`);
        }
      });
    },
  };
};
