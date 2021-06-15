<template>
  <div class="page">
    <div class="tools">
      <div class="tool-item">
        <span>颜色：</span>
        <el-button
          v-for="color in colorToolList"
          :key="color.name"
          :class="{ check: penColor == color.value }"
          @click="changePenColor(color.value)"
          >{{ color.name }}</el-button
        >
      </div>
      <div class="tool-item">
        <span>线条：</span>
        <el-button
          v-for="line in lineToolList"
          :key="line.name"
          :class="{ check: penWeight == line.value }"
          @click="changePenLine(line.value)"
          >{{ line.name }}</el-button
        >
        <el-button @click="clearCanvas(cvs)">清除画布</el-button>
        <el-button @click="savePic()">保存图片</el-button>
      </div>
    </div>
    <canvas
      id="canvas"
      ref="canvas"
      class="canvas"
      width="1200px"
      height="550px"
      @mousedown="canvasDown($event)"
      @mousemove="canvasMove(cvs, $event)"
      @mouseup="canvasUp"
      @mouseout="canvasOut"
    ></canvas>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      colorToolList: [
        { value: "red", name: "红" },
        { value: "black", name: "黑" },
        { value: "yellow", name: "黄" },
        { value: "blue", name: "蓝" },
      ],
      lineToolList: [
        { value: 10, name: "粗" },
        { value: 5, name: "中" },
        { value: 0, name: "细" },
        { value: "eraser", name: "橡皮擦" },
      ],
      canvas: null,
      cvs: null,
      //画笔颜色
      penColor: "black",
      //画笔粗细
      penWeight: 0,
      isDrawing: false,
      //开始坐标
      lastX: 0,
      lastY: 0,
    };
  },
  components: {},
  mounted() {
    this.initCavans();
  },
  methods: {
    /**
     * 初始化canvas
     */
    initCavans() {
      this.canvas = this.$refs["canvas"];
      this.cvs = this.canvas.getContext("2d");
    },
    /**
     * 鼠标在canvas画布上点击事件
     */
    canvasDown(e) {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    },
    canvasUp() {
      this.isDrawing = false;
    },
    canvasOut() {
      this.isDrawing = false;
    },
    /**
     * 鼠标在canvas画布上移动事件
     */
    canvasMove(cvs, e) {
      if (!this.isDrawing) return;
      cvs.strokeStyle = this.penColor;
      cvs.lineWidth = this.penWeight;
      cvs.beginPath();
      // 开始坐标
      cvs.moveTo(this.lastX, this.lastY);
      // 开始绘制
      cvs.lineTo(e.offsetX, e.offsetY);
      cvs.stroke();
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    },
    /**
     * 清除画布
     */
    clearCanvas(cvs) {
      cvs.clearRect(0, 0, 1200, 550);
    },
    /**
     * 保存图片
     */
    savePic() {
      let image = this.canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      window.location.href = image;
    },
    /**
     * 改变画笔颜色
     */
    changePenColor(color) {
      this.cvs.strokeStyle = color;
      this.penColor = color;
    },
    /**
     * 改变画笔粗细
     */
    changePenLine(line) {
      this.cvs.lineWidth = line;
      this.penWeight = line;
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tools {
    
    display: flex;
    height: 60px;
    .check {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    .tool-item {
      margin-right: 20px;
    }
  }
  .canvas {
    border: 2px solid #ccc;
  }
}
</style>
