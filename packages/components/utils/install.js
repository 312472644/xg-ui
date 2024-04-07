/**
 * 组件安装
 * @param {SFC} main 组件对象
 */
export function withInstall(main) {
  main.install = app => {
    // for (const comp of [main]) {
    //   app.component(comp.name, comp);
    // }
    app.component(comp.name, comp);
  };
  return main;
}
