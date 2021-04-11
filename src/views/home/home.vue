<template>
  <div class="page">home</div>
</template>

<script type="text/ecmascript-6">
import { getHomeData } from "../../api/home";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    this._getHomeData();
  },
  methods: {
    async _getHomeData() {
      let res = await getHomeData();
      console.log(res);
    },
  },
};
</script>

<style scoped lang="stylus"></style>
