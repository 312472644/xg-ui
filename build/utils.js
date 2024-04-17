const fs = require('fs');
const path = require('path');

/**
 * 获取入口文件名, 对于指定目录下的文件, 去掉该目录前缀
 * @param {Object} chunkInfo chunk信息
 * @param {String} format 文件格式
 * @param {String} directory 输出目录
 * @returns {String} 入口文件名
 */
function getEntryFileNames(chunkInfo, format = '.mjs', directory = 'element') {
  if (chunkInfo.name.includes(directory)) {
    return chunkInfo.name.replace(`${directory}/`, '') + format;
  }
  return `[name]${format}`;
}

/**
 * 复制文件目录到另一个目录
 * @param {String} source 源目录
 * @param {String} target 目标目录
 */
function copyFolderRecursive(source, target) {
  // 如果目标文件夹不存在，则创建它
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  // 获取源文件夹中的所有文件/文件夹
  const files = fs.readdirSync(source);

  // 遍历源文件夹中的所有内容
  files.forEach(file => {
    const currentSource = path.join(source, file);
    const currentTarget = path.join(target, file);

    // 如果是文件夹，则递归调用 copyFolderRecursive
    if (fs.statSync(currentSource).isDirectory()) {
      copyFolderRecursive(currentSource, currentTarget);
    } else {
      // 如果是文件，则直接复制到目标文件夹中
      fs.copyFileSync(currentSource, currentTarget);
    }
  });
}

/**
 * 成功日志
 * @param {String} message
 */
function logSuccess(message) {
  console.log(`✅ \x1b[32m${message}`);
}

/**
 * 错误日志
 * @param {String} message
 */
function logError(message) {
  console.log(`❌ \x1b[31m${message}`);
}

module.exports = { getEntryFileNames, logSuccess, logError, copyFolderRecursive };
