<template>
  <div class="home">
    <div class="basic-info">
      <InfoCard v-for="i in 3" :key="i"></InfoCard>
    </div>
    <div class="line"></div>
    <div class="chart-card"></div>
    <div class="tabel"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Echart from "../../components/Echart";
import { getHomeData } from "../../api/home";
import InfoCard from "./components/InfoCard";
export default {
  data() {
    return {};
  },
  components: { Echart, InfoCard },
  mounted() {
    this._getHomeData();
  },
  methods: {
    /**
     * 获取主页数据
     */
    async _getHomeData() {
      let res = await getHomeData();
      console.log(res);
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .basic-info {
    height: 108px;
    display: flex;
    justify-content: space-between;
  }
  .line {
    height: 363px;
    background-color: #fff;
  }
}
</style>
