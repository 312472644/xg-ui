/**
 * @typedef {Object} ReturnType
 * @property {(app)=>void} install
 */
/**
 * 为组件对象添加install方法
 * @param {Array<import("vue").Component>} comp 组件对象
 * @returns {ReturnType} return
 */
export function withInstall(comp) {
  comp.install = app => {
    app.component(comp.name, comp);
  };
  return comp;
}

/**
 * 获取导出组件对象
 * @param {Array<import("vue").Component>} componentList
 * @returns {Object<{name:import("vue").Component}>} component 导出组件对象
 */
export function getExportCompObject(componentList) {
  if (!componentList?.length) return {};
  const component = {};
  Object.entries(componentList).forEach(([key, value]) => {
    component[value.name] = value;
  });
  return component;
}
