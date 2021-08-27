export default {
  getLogin: (config) => {
    const tokens = {
      admin: {
        token: "admin-token",
      },
      editor: {
        token: "editor-token",
      },
    };
    const { username } = JSON.parse(config.body);
    const token = tokens[username];

    return {
      code: 20000,
      data: token,
    };
  },
  getUserInfo: (config) => {
    console.log(config);
    const users = {
      "admin-token": {
        roles: ["admin"],
        introduction: "I am a super administrator",
        avatar:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Super Admin",
        menuList: [
          {
            path: "/home",
            name: "home",
            label: "首页",
            icon: "s-home",
          },
          {
            path: "/video",
            name: "video",
            label: "3D模块",
            icon: "video-play",
          },
          {
            path: "/paint",
            name: "paint",
            label: "画图",
            icon: "picture-outline",
          },
          {
            path: "/userManager",
            name: "userManager",
            label: "用户管理",
            icon: "user",
          },
          {
            path: "/easyTake",
            name: "easyTake",
            label: "宜搭",
            icon: "coordinate",
          },
          {
            path: "/dragAndDrop",
            name: "dragAndDrop",
            label: "拖拽",
            icon: "thumb",
          },
          {
            label: "其他",
            name: "other",
            icon: "orange",
            children: [
              {
                path: "/page1",
                name: "page1",
                label: "页面1",
              },
              {
                path: "/page2",
                name: "page2",
                label: "页面2",
              },
            ],
          },
        ],
        // routerList: [
        //   {
        //     name: "home",
        //     children: [],
        //   },
        //   {
        //     name: "video",
        //     children: [],
        //   },
        //   {
        //     name: "paint",
        //     children: [],
        //   },
        //   {
        //     name: "userManager",
        //     children: [],
        //   },
        //   {
        //     name: "easyTake",
        //     children: [
        //       {
        //         name: "formDesigner",
        //       },
        //     ],
        //   },
        //   {
        //     name: "other",
        //     children: [],
        //   },
        // ],
        routerList: ['home', 'video','paint', 'userManager','easyTake', 'formDesigner','other','dragAndDrop']
      },
      "editor-token": {
        roles: ["editor"],
        introduction: "I am an editor",
        avatar:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Normal Editor",
        menuList: [
          {
            path: "/home",
            name: "home",
            label: "首页",
            icon: "s-home",
          },
        ],
        routerList: ["home"],
      },
    };
    console.log(config);
    const token = config.url.split("?")[1].split("=")[1];
    const info = users[token];
    return {
      code: 20000,
      data: info,
    };
  },
  getLoginOut: () => {
    return {
      code: 20000,
      data: null,
    };
  },
};
