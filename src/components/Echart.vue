<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script type="text/ecmascript-6">
import * as echarts from 'echarts';
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
  computed: {
    options() {
      this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
  data() {
    return {
      echart: null,
      axisOption: {
        xAxis: {
          type: "category",
          data: [],
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
    window.addEventListener("resize", this.resizChart);
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
        console.log("axis");
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
