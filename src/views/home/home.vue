<template>
  <div class="home">
    <div class="basic-info">
      <InfoCard
        v-for="i in cardInfoList"
        :key="i.label"
        :cardInfo="i"
      ></InfoCard>
    </div>
    <div class="line-chart">
      <Echart
        v-if="lineChartData.xData.length"
        :chartData="lineChartData"
      ></Echart>
    </div>
    <div class="chart-card">222</div>
    <div class="tabel">ffff</div>
  </div>
</template>

<script type="text/ecmascript-6">
import Echart from "../../components/Echart";
import { getHomeLineChartData } from "../../api/home";
import InfoCard from "./components/InfoCard";
export default {
  data() {
    return {
      cardInfoList: [
        { label: "New Visite", num: 102400, icon: "peoples" },
        { label: "Messages", num: 81212, icon: "message" },
        { label: "Purchases", num: 9280, icon: "money" },
        { label: "Shoppings", num: 13600, icon: "shopping" },
      ],
      //曲线数据
      lineChartData: {
        //图表横坐标
        xData: [],
        //图表数据
        series: [{ data: [], type: "line", smooth: true }],
      },
    };
  },
  components: { Echart, InfoCard },
  mounted() {
    this.getHomeLineChartData();
  },
  methods: {
    /**
     * 获取主页数据
     */
    async getHomeLineChartData() {
      let res = await getHomeLineChartData();
      if (res.code == 20000) {
        this.dealLineChartData(res.data.lineData);
      }
    },
    /**
     * 处理line-chart数据
     *  lineChartData{xData: [],series: [],}
     */
    dealLineChartData(data) {
      this.lineChartData.xData = [];
      this.lineChartData.series[0].data = [];
      data.forEach((item) => {
        this.lineChartData.xData.push(item.name);
        this.lineChartData.series[0].data.push(item.value);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .basic-info {
    height: 108px;
    display: flex;
    justify-content: space-between;
  }
  .line-chart {
    height: 363px;
    background-color: #fff;
  }
  .chart-card{
    height: 363px;
  }
}
</style>
