/**
 * 安装组件列表
 * @param {Array<import("vue").Component>} components
 */
export const makeInstaller = (components = []) => {
  const install = app => {
    components.forEach(c => app.use(c));
  };
  return { install };
};
