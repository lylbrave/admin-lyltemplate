<template>
  <div class="page">
    <div class="header">组件库</div>
    <div class="content">
      <div class="basic">
        <div class="title">常用控件</div>
        <div class="complist">
          <Control
            v-for="i in basiclist"
            :key="i.name"
            :name="i.name"
            :icon="i.icon"
          />
        </div>
      </div>
      <div class="basic">
        <div class="title">高级控件</div>
        <div class="complist">
          <Control
            v-for="i in heighlist"
            :key="i.name"
            :name="i.name"
            :icon="i.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Control from "./control.vue";
export default {
  data() {
    return {
      heighlist: [
        {
          name: "布局容器",
          icon: "",
        },
      ],
      basiclist: [
        {
          name: "单行文本",
          icon: "input",
        },
        {
          name: "单选",
          icon: "",
        },
        {
          name: "多选",
          icon: "",
        },
        {
          name: "日期",
          icon: "",
        },
        {
          name: "数值",
          icon: "",
        },
      ],
    };
  },
  components: { Control },
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
