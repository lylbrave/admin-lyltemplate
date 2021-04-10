<template>
  <el-container style="height: 100%">
    <el-aside width="160px"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main>ssss</el-main>
    </el-container>
  </el-container>
</template>

<script type="text/ecmascript-6">
import CommonHeader from "../components/CommonHeader";
import CommonAside from "../components/CommonAside";
export default {
  data() {
    return {};
  },
  components: {
    CommonHeader,
    CommonAside,
  },
};
</script>

<style scoped lang="scss"></style>
