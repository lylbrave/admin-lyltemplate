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
  getRadarData: () => {
    return {
      code: 20000,
      data: {
        radarData: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "预算分配（Allocated Budget）",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "实际开销（Actual Spending）",
          },
        ],
        indicator: [
          { name: "销售（Sales）", max: 6500 },
          { name: "管理（Administration）", max: 16000 },
          { name: "信息技术（Information Technology）", max: 30000 },
          { name: "客服（Customer Support）", max: 38000 },
          { name: "研发（Development）", max: 52000 },
          { name: "市场（Marketing）", max: 25000 },
        ],
      },
    };
  },
  getPieData: () => {
    return {
      code: 20000,
      data: {
        pieData: [
          { value: 320, name: "Industries" },
          { value: 240, name: "Technology" },
          { value: 149, name: "Forex" },
          { value: 100, name: "Gold" },
          { value: 59, name: "Forecasts" },
        ],
      },
    };
  },
  getBarData: () => {
    return {
      code: 20000,
      data: {
        barData: [
          { value: 320, name: "Industries" },
          { value: 240, name: "Technology" },
          { value: 149, name: "Forex" },
          { value: 100, name: "Gold" },
          { value: 59, name: "Forecasts" },
        ],
      },
    };
  },
};
