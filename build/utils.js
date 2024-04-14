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

module.exports = { getEntryFileNames };
