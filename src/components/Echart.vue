<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script type="text/ecmascript-6">
import * as echarts from "echarts";
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
    //是否需要坐标轴
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      echart: null,
      options: {},
      axisOption: {
        xAxis: {
          type: "category",
          data: [],
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: 30,
          top: 30,
        },
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [],
      },

      normalOption: {
        series: [],
      },
    };
  },
  components: {},
  mounted() {
    this.$nextTick(async () => {
      this.options = this.isAxisChart ? this.axisOption : this.normalOption;
      await this.initChartData();
      this.initChart();
      window.addEventListener("resize", this.resizChart);
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.resizChart);
  },
  methods: {
    /**
     * 初始化图表
     */
    initChart() {
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    /**
    初始化图表数据 */
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
        console.log(this.axisOption);
        console.log(this.chartData.series);
      } else {
        console.log("normal");
      }
    },
    /**
     * 调整echart尺寸
     */
    resizChart() {
      this.echart ? this.echart.resize() : "";
    },
  },
};
</script>

<style scoped lang="stylus"></style>
