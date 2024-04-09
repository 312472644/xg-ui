/**
 * @typedef {Object} ReturnType
 * @property {(app)=>void} install
 */
/**
 * 全局组件注册
 * @param {Array<import("vue").DefineComponent>} componentList 组件列表
 * @returns {ReturnType} return
 */
export function withInstall(componentList = []) {
  return {
    install: app => {
      for (const comp of componentList) {
        app.component(comp.name, comp);
      }
    },
  };
}

/**
 * 获取导出组件对象
 * @param {Array} componentList
 * @returns {} component 导出组件对象
 */
export function getExportCompObject(componentList) {
  if (!componentList?.length) return {};
  const component = {};
  Object.entries(componentList).forEach(([key, value]) => {
    component[value.name] = value;
  });
  return component;
}
