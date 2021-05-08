<template>
  <div class="box-card">
    <div class="img-wrap">
      <img
        class="img"
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
      />
    </div>
    <div class="content">
      <Thumb :image="headPhoto" class="thumb"></Thumb>
      <div style="padding-top: 30px" class="progress-item">
        <span>Vue</span>
        <el-progress :percentage="70" />
      </div>
      <div class="progress-item">
        <span>JavaScript</span>
        <el-progress :percentage="18" />
      </div>
      <div class="progress-item">
        <span>CSS</span>
        <el-progress :percentage="12" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Thumb from "./Thumb";
export default {
  data() {
    return { headPhoto: require("@/assets/images/user.jpeg") };
  },
  components: { Thumb },
};
</script>

<style scoped lang="scss">
.box-card {
  position: relative;
  .thumb {
    position: absolute;
    width: 60px;
    left: 40px;
    top: 45%;
    background-color: #fff;
    border: 2px solid #ffffff;
  }
  .img-wrap {
    height: 200px;
    overflow: hidden;
    .img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .content {
    padding: 8px;
    color: #333;
    .progress-item {
      text-align: start;
      margin-bottom: 8px;
      font-size: 14px;
    }
  }
}
</style>
