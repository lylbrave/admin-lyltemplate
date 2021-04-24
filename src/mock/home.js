import Mock from "mockjs";

export default {
  getHomeLineChartData: () => {
    return {
      code: 20000,
      data: {
        lineData: [
          {
            name: "Mon",
            value: 150,
          },
          {
            name: "Tue",
            value: 230,
          },
          {
            name: "Wed",
            value: 224,
          },
          {
            name: "Thu",
            value: 216,
          },
          {
            name: "Fri",
            value: 135,
          },
          {
            name: "Sat",
            value: 147,
          },
          {
            name: "Sun",
            value: 260,
          },
        ],
      },
    };
  },
};
