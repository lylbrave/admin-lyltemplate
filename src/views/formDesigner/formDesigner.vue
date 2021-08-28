<template>
  <div class="page">
    <ToolBar
      @handleDrag="handleDrag"
      @handleDragend="handleDragend"
      @handleClick="handleClick"
      class="tool"
    />
    <div class="content">
      <GridLayout v-if="showGridLayout" ref="gridwrap"></GridLayout>
    </div>
    <div class="property"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import GridLayout from "./components/gridLayout.vue";
import ToolBar from "./components/toolBar.vue";
export default {
  data() {
    return {
      showGridLayout: false,
    };
  },
  components: { ToolBar, GridLayout },
  methods: {
    handleDrag() {
      this.$refs.gridwrap.drag();
    },
    handleDragend() {
      this.$refs.gridwrap.handleDragend();
    },
    handleClick(name) {
      if (name === "布局容器") {
        this.showGridLayout = !this.showGridLayout;
      }
    },
  },
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
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .property {
    width: 280px;
  }
}
</style>
