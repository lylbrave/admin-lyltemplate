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
        chartType="line"
        :chartData="lineChartData"
      ></Echart>
    </div>
    <div class="chart-card">
      <div class="item">
        <Echart
          v-if="radarData.series[0].data.length"
          chartType="radar"
          :chartData="radarData"
        ></Echart>
      </div>
      <div class="item">
        <Echart
          v-if="pieData.series[0].data.length"
          chartType="pie"
          :chartData="pieData"
        ></Echart>
      </div>
      <div class="item">
        <Echart
          v-if="barChartData.xData.length"
          chartType="bar"
          :chartData="barChartData"
        ></Echart>
      </div>
    </div>
    <div class="tabel">ffff</div>
  </div>
</template>

<script type="text/ecmascript-6">
import Echart from "../../components/Echart";
import {
  getHomeLineChartData,
  getRadarData,
  getPieData,
  getBarData,
} from "../../api/home";
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
      //曲线图数据
      lineChartData: {
        //图表横坐标
        xData: [],
        //图表数据
        series: [{ data: [], type: "line", smooth: true }],
      },
      //柱状图数据
      barChartData: {
        //图表横坐标
        xData: [],
        //图表数据
        series: [{ data: [], type: "bar", barWidth: "16px" }],
      },
      //雷达图数据
      radarData: {
        radar: { indicator: [] },
        series: [{ data: [] }],
      },
      //饼图数据
      pieData: {
        legend: { data: [] },
        series: [{ data: [] }],
      },
    };
  },
  components: { Echart, InfoCard },
  mounted() {
    this._getHomeLineChartData();
    this._getRadarData();
    this._getPieData();
    this._getBarData();
  },
  methods: {
    /** ===================================曲线图======================================= */
    /**
     * 获取曲线图数据
     */
    async _getHomeLineChartData() {
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
    /** ===================================雷达图======================================= */
    /**
     * 获取雷达图数据
     */
    async _getRadarData() {
      let res = await getRadarData();
      if (res.code == 20000) {
        this.dealRadartData(res.data);
      }
    },
    /**
     * 处理雷达图数据
     */
    dealRadartData(data) {
      const { radarData, indicator } = data;
      this.radarData.radar.indicator = indicator;
      this.radarData.series[0].data = radarData;
    },
    /** ===================================饼图======================================= */
    /**
     * 获取饼图数据
     */
    async _getPieData() {
      let res = await getPieData();
      if (res.code === 20000) {
        this.dealPieData(res.data);
      }
    },
    /**
     * 处理饼图数据
     */
    dealPieData(data) {
      const { pieData } = data;
      this.pieData.legend.data = [];
      this.pieData.series[0].data = pieData;
      pieData.forEach((item) => {
        this.pieData.legend.data.push(item.name);
      });
    },
    /** ===================================柱状图======================================= */
    /**
     * 获取柱状图数据
     */
    async _getBarData() {
      let res = await getBarData();
      if (res.code === 20000) {
        this.dealBarData(res.data);
      }
    },
    /***
     * 处理柱状图数据
     */
    dealBarData(data) {
      const { barData } = data;
      this.barChartData.xData = [];
      this.barChartData.series[0].data = [];
      barData.forEach((item) => {
        this.barChartData.xData.push(item.name);
        this.barChartData.series[0].data.push(item.value);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 1000px;
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
  .chart-card {
    height: 363px;
    display: flex;
    justify-content: space-between;
    .item {
      width: 30%;
      background-color: #fff;
    }
  }
}
</style>
