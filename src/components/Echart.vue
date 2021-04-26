<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script type="text/ecmascript-6">
import * as echarts from "echarts";
export default {
  props: {
    //图表数据
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
    //图表类型
    chartType: {
      type: String,
      default: "line",
    },
  },
  data() {
    return {
      echart: null,
      options: {},
      //曲线或柱状图配置项
      axisOption: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
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
      //饼图配置项
      pieOption: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: "10",
          data: [],
        },
        series: [
          {
            name: "WEEKLY WRITE ARTICLES",
            type: "pie",
            roseType: "radius",
            radius: [15, 95],
            data: [],
          },
        ],
      },
      //雷达图配置项
      radarOption: {
        title: {
          text: "",
        },
        radar: {
          indicator: [],
          radius: "66%",
          // center: ["40%", "52%"],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: "rgba(127,95,132,.3)",
              opacity: 1,
              shadowBlur: 45,
              shadowColor: "rgba(0,0,0,.5)",
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            },
          },
        },
        legend: {
          data: [],
        },
        series: [
          {
            type: "radar",
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: "rgba(0,0,0,.2)",
                shadowOffsetX: 0,
                shadowOffsetY: 6,
                opacity: 1,
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  components: {},
  mounted() {
    this.$nextTick(async () => {
      console.log(this.chartType);
      this.getOption();
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
     * 配置兼容
     */
    getOption() {
      if (this.chartType == "line" || this.chartType == "bar") {
        this.options = this.axisOption;
      } else if (this.chartType == "radar") {
        this.options = this.radarOption;
      } else if (this.chartType == "pie") {
        this.options = this.pieOption;
      }
    },
    /**
     * 初始化图表
     */
    initChart() {
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs["echart"]);
        this.echart.setOption(this.options);
      }
    },
    /**
    初始化图表数据 */
    initChartData() {
      if (this.chartType == "line") {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else if (this.chartType == "radar") {
        this.radarOption.radar.indicator = this.chartData.radar.indicator;
        this.radarOption.series[0].data = this.chartData.series[0].data;
      } else if (this.chartType == "pie") {
        console.log(this.chartData);
        this.pieOption.legend.data = this.chartData.legend.data;
        this.pieOption.series[0].data = this.chartData.series[0].data;
      } else if (this.chartType == "bar") {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
        this.axisOption.grid = {
          top: 10,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        };
        console.log(this.axisOption);
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
