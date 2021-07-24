<template>
  <div class="page">
    <div class="line">
      <TemplateCard
        icon="formType"
        name="新建表单"
        describe="数据收集，事件跟进"
        @click.native="toFormDesigner()"
      />
      <TemplateCard
        icon="formType"
        name="新建流程表单"
        describe="任务流转，工作协同"
      />
    </div>
    <div class="line">
      <TemplateCard
        icon="formType"
        name="新建报表"
        describe="数据分析，报表展示"
      />
      <TemplateCard
        icon="formType"
        name="新建自定义页面"
        describe="信息展示及导航、门户页面"
      />
      <TemplateCard
        icon="formType"
        name="添加外部链接"
        describe="从本站点链接到外部"
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TemplateCard from "./components/templateCard";
export default {
  data() {
    return {};
  },
  components: {
    TemplateCard,
  },
  methods: {
    /**
     * 表单设计器
     */
    toFormDesigner() {
      this.$router.push({
        path: "/formDesigner",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  color: rgba(0, 0, 0, 0.6);
  background: #fff;
  box-shadow: 0 1px 4px 0 rgb(10 30 65 / 8%);
  border-radius: 8px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  .line {
    width: 75%;
    height: 200px;
    display: flex;
    margin-bottom: 20px;
  }
}
</style>
