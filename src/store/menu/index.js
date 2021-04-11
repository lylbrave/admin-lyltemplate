export default {
  state: {
    menu: [],
    isCollapse: "false",
    //当前选中的菜单
    currentMenu: null,
    tabLists: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
      },
    ],
  },
  mutations: {
    //选择目录
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
        let res = state.tabLists.findIndex((item) => item.name === val.name);
        res == -1 ? state.tabLists.push(val) : "";
      } else {
        state.currentMen = null;
      }
    },
    //删除标签
    closeTab(state, val) {
      let res = state.tabLists.findIndex((item) => item.name === val.name);
      state.tabLists.splice(res, 1);
    },
    //展开或折叠目录
    collapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
};
