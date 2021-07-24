import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import router from "@/router";
const state = {
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  roles: [],
  //左侧目录列表
  menuList: [],
  //路由列表
  routerList: [],
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_MENULIST(state, val) {
    state.menuList = val;
  },
  SET_ROUTERlIST(state, list) {
    if (list.length == 0) {
    }
    let routerList = [
      {
        path: "/",
        component: () => import("@/views/layout"),
        redirect: "/home",
        children: [],
      },
    ];
    list.forEach((item) => {
      routerList[0].children.push({
        path: `/${item}`,
        name: item,
        component: () => import(`@/views/${item}/${item}`),
        // children: item.children.length ? getChildren(item, item.children) : [],
      });
    });
    state.routerList = routerList;
    router.addRoutes(routerList);
    console.log(routerList);
  },
};
const getChildren = function(parent, children) {
  let list = [];
  list = children.map((i) => {
    return {
      path: `/${i.name}`,
      name: i.name,
      component: () => import(`@/views/${i.name}`),
    };
  });
  return list;
};
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password,
      })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          const { data } = response;
          if (!data) {
            reject("Verification failed, please Login again.");
          }
          const {
            roles,
            name,
            avatar,
            introduction,
            menuList,
            routerList,
          } = data;
          if (!roles || roles.length <= 0) {
            reject("getInfo: roles must be a non-null array!");
          }
          commit("SET_ROLES", roles);
          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          commit("SET_INTRODUCTION", introduction);
          //设置登录人员的目录列表
          commit("SET_MENULIST", menuList);
          //设置登录人员的路由列表
          commit("SET_ROUTERlIST", routerList);
          console.log(state);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  /**
   * 登出
   */
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit("SET_TOKEN", "");
          commit("SET_ROLES", []);
          //设置登录人员的目录列表
          commit("SET_MENULIST", []);
          //设置登录人员的路由列表
          commit("SET_ROUTERlIST", []);
          removeToken();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + "-token";
    commit("SET_TOKEN", token);
    setToken(token);
    const { roles } = await dispatch("getInfo");
    dispatch("tagsView/delAllViews", null, {
      root: true,
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
