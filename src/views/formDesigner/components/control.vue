<template>
  <div class="page">
    <div
      class="icon"
      @drag="handleDrag"
      @dragend="handleDragend"
      @click="handleClick(item.name)"
      draggable="true"
      unselectable="on"
    >
      <svg-icon :icon-class="item.icon" class-name="card-panel-icon" />
    </div>
    <div class="name">{{ item.name }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    handleDrag() {
      this.$emit("handleDrag", this.item);
    },
    handleDragend() {
      this.$emit("handleDragend", this.item);
    },
    handleClick(name) {
      this.$emit("handleClick", name);
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  margin-right: 12px;
  .icon {
    cursor: pointer;
    border-radius: 3px;
    border: 1px dashed #cdd2d9;
    width: 68px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 28px;
    margin-bottom: 8px;
    &:hover {
      border: 1px solid #0089ff;
    }
  }
  .name {
    width: 100%;
    padding: 0 4px;
    font-size: 12px;
    color: #666666;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
