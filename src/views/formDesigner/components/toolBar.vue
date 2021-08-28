<template>
  <div class="page">
    <div class="header">组件库</div>
    <div class="content">
      <div class="basic">
        <div class="title">常用控件</div>
        <div class="complist">
          <Control
            v-for="i in toolList"
            :key="i.name"
            :item="i"
            @handleDrag="handleDrag"
            @handleDragend="handleDragend"
          />
        </div>
      </div>
      <div class="basic">
        <div class="title">高级控件</div>
        <div class="complist">
          <Control
            v-for="i in layoutlist"
            :key="i.name"
            :item="i"
            @handleClick="handleClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Control from "./control.vue";
import toolList from './toolList' ;
export default {
  data() {
    return {
      layoutlist: [
        {
          name: "布局容器",
          icon: "layout",
        },
      ],
      toolList: toolList
    };
  },
  components: { Control },
  methods: {
    handleDrag(itemCom) {
      this.$emit("handleDrag", itemCom);
    },
    handleDragend(itemCom) {
      this.$emit("handleDragend", itemCom);
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
  flex-direction: column;

  .header {
    height: 60px;
    line-height: 60px;
    text-align: left;
    color: #0f1726;
    font-weight: 700;
    font-size: 16px;
    padding-left: 10px;
    border-bottom: 2px solid #0079f2;
  }
  .content {
    height: 100%;
    padding-left: 10px;
    overflow-y: auto;
    .basic {
      display: flex;
      flex-direction: column;

      .complist {
        min-height: 80px;
        display: flex;
        flex-wrap: wrap;
      }
    }
    .title {
      height: 20px;
      text-align: left;
      padding: 8px;
      font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
        Helvetica, Arial, sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 12px;
      line-height: 20px;
    }
  }
}
</style>
