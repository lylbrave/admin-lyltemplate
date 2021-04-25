<template>
  <div style="height: 100%" :ref="'echart' + index">echart</div>
</template>

<script type="text/ecmascript-6">
import * as echarts from "echarts";
export default {
  props: {
    index: {
      type: Number,
    },
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
    //是否是曲线或柱状图
    isALineBurChart: {
      type: Boolean,
      default: true,
    },
    //雷达图
    isRadarChart: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      echart: null,
      options: {},
      //曲线或柱状图配置项
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
      //雷达图配置项
      radarOption: {
        title: {
          text: "",
        },
        radar: { indicator: [] },
        legend: {
          data: [],
        },
      },
    };
  },
  components: {},
  mounted() {
    this.$nextTick(async () => {
      await this.initChartData();
      this.getOption();
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
      if (this.isALineBurChart) {
        this.option = this.axisOption;
      } else if (this.isRadarChart) {
        this.option = this.radarOption;
      }
    },
    /**
     * 初始化图表
     */
    initChart() {
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs['echart'+this.index]);
        this.echart.setOption(this.options);
      }
    },
    /**
    初始化图表数据 */
    initChartData() {
      if (this.isALineBurChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else if (this.isRadarChart) {
        this.radarOption.title.text = "基础雷达图";
        this.radarOption.legend.data = [
          "预算分配（Allocated Budget）",
          "实际开销（Actual Spending）",
        ];
        this.radarOption.radar = this.chartData.radar;
        this.radarOption.series = this.chartData.series;
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
