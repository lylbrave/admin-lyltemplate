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
    const { username } =JSON.parse(config.body) ;
    const token = tokens[username];
    console.log(config);
    return {
      code: 20000,
      data: token,
    };
  },
  getUserInfo: () => {
    const users = {
      "admin-token": {
        roles: ["admin"],
        introduction: "I am a super administrator",
        avatar:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Super Admin",
      },
      "editor-token": {
        roles: ["editor"],
        introduction: "I am an editor",
        avatar:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Normal Editor",
      },
    };
    const { token } = config.query;
    const info = users[token];
    return {
      code: 20000,
      data: info,
    };
  },
  getLoginOut:()=>{
    return {
      code: 20000,
      data: null,
    };
  }
};
