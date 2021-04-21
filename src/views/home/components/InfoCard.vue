<template>
  <div class="info-card">
    <div class="left">
      <svg-icon :icon-class="cardInfo.icon" class-name="card-panel-icon" />
    </div>
    <div class="right">
      <div class="card-panel-text">
        {{ cardInfo.label }}
      </div>
      <count-to
        :start-val="0"
        :end-val="cardInfo.num"
        :duration="3200"
        class="card-panel-num"
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CountTo from "vue-count-to";
export default {
  name: "InfoCard",
  props: {
    cardInfo: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: { CountTo },
};
</script>

<style scoped lang="scss">
.info-card {
  height: 100%;
  width: 285px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .left {
    height: 100%;
    width: 80px;
    padding-top: 30px;
    .card-panel-icon {
      font-size: 48px;
    }
  }
  .right {
    font-weight: bold;
    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }
  }
}
</style>
