/**
 * 名称转换为kebab-case
 * @param {String} key
 * @returns {String}
 */
function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

/**
 * 组件要引入的资源文件
 * @param {String} dirName 组件文件夹名称
 * @param {Object} options
 * @returns {String}
 */
function getSideEffects(dirName, options) {
  return `@xg-ui/element/style/${dirName}/index.css`;
}
/**
 * xg ui解析器
 * @description 根据组件名自动导入对应的资源文件
 * @param {Object} options
 * @returns {Object}
 */
export default function xgResolver(options) {
  return {
    type: 'component',
    name: 'xg-resolver',
    resolve(name) {
      if (name.startsWith('Xg')) {
        // 组件名转换为kebab-case
        const componentName = kebabCase(name.slice(2));
        return {
          // name 对应的是组件名称，from 对应的是组件的路径
          name,
          // from 对应的是组件的路径
          from: `@xg-ui/element/es/${componentName}`,
          sideEffects: getSideEffects(componentName, options),
        };
      }
    },
  };
}
