<template>
  <div class="page">
    <ToolBar class="tool" />
    <div class="content"></div>
    <div class="property"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import ToolBar from "./components/toolBar.vue";
export default {
  data() {
    return {};
  },
  components: { ToolBar },
};
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  .tool {
    width: 250px;
    height: 100%;
  }
  .content {
    flex: 1;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .property {
    width: 280px;
  }
}
</style>
