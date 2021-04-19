<template>
  <div class="info-card">
    <div class="left">
      <svg-icon icon-class="eye"/>
    </div>
    <div class="right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "InfoCard",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="scss">
.info-card {
  height: 100%;
  width: 285px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .left {
    height: 100%;
    width:80px;
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
  }
}
</style>
