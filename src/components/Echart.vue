<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script type="text/ecmascript-6">
import echart from "echarts";
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      echart: null,
      axisOption: {},
      normalOption: {},
    };
  },
  components: {},
};
</script>

<style scoped lang="stylus"></style>
