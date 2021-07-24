<template>
  <div class="card">
    <div class="icon">
      <svg-icon :icon-class="icon" class-name="card-panel-icon" />
    </div>
    <div class="text">
      <span class="name">{{ name }}</span>
      <span class="describe">{{ describe }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    icon: {
      type: String,
    },
    name: {
      type: String,
    },
    describe: {
      type: String,
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;
  margin: 10px;
  padding: 0 10px;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: initial;
  background-color: #f1f5ff;
  justify-content: center;
  align-items: center;
  .icon {
    height: 64px;
    width: 64px;
    border-radius: 12px;
    text-align: center;
    line-height: 64px;
    margin-right: 21px;
    background-color: #ccd9ff;
    font-size: 24px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .name {
      font-size: 20px;
      color: #333;
    }
    .describe {
      color: #666;
      margin-top: 8px;
    }
  }
}
</style>
