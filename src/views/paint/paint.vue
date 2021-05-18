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
      </div>
    </div>
    <canvas
      id="canvas"
      ref="canvas"
      class="canvas"
      @mousedown="canvasDown(cvs, canvas, $event)"
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
      penColor: "black",
      penWeight: 0,
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
    canvasDown(cvs, canvas, e) {
      console.log(e);
      console.log(canvas.offsetLeft);
      let start_x = e.clientX - canvas.offsetLeft ;
      let start_y = e.clientY - canvas.offsetTop;
      console.log(start_x, start_y);
      cvs.beginPath(); //开始本次绘画
      cvs.moveTo(start_x, start_y); //画笔起始点
      /*设置画笔属性*/
      cvs.lineCap = "round";
      cvs.lineJoin = "round";
      cvs.strokeStyle = this.penColor; //画笔颜色
      cvs.lineWidth = this.penWeight; //画笔粗细
      canvas.onmousemove = function (e) {
        /*找到鼠标（画笔）的坐标*/
        let move_x = e.clientX - canvas.offsetLeft;
        let move_y = e.clientY - canvas.offsetTop ;
        cvs.lineTo(move_x, move_y); //根据鼠标路径绘画
        cvs.stroke(); //立即渲染
      };
      canvas.onmouseup = function (e) {
        cvs.closePath(); //结束本次绘画
        canvas.onmousemove = null;
        canvas.onmouseup = null;
      };
      canvas.onmouseleave = function () {
        cvs.closePath();
        canvas.onmousemove = null;
        canvas.onmouseup = null;
      };
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
      margin-right: 10px;
    }
  }
  .canvas {
    width: 100%;
    height: 90%;
    border: 2px solid #ccc;
  }
}
</style>
