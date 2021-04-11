import Mock from "mockjs";

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: "SpringBoot",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "VUE",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "ES6",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
      },
    };
  },
};
