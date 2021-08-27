<template>
  <div class="page">
    <!-- 可拖动的范围 -->
    <div class="drag-area">
      <dragCom
        v-for="item in ballotBoxList"
        :key="item.id"
        :width="80"
        :height="80"
      >
        <div>选票箱</div>
      </dragCom>
    </div>
    <div>
      <el-button type="primary" round @click="addBallotBox">新增票箱</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import dragCom from "../../components/vueDrag/Drag.vue";
export default {
  data() {
    return {
      ballotBoxList: [
        {
          id: 1,
          coordinates: "",
        },
      ],
    };
  },
  components: {
    dragCom,
  },
  methods: {
    addBallotBox() {
      this.ballotBoxList.push({
        id: this.ballotBoxList.length + 1,
        coordinates: "",
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
  padding: 20px;
  display: flex;
}
.drag-area {
  position: relative;
  width: 80%;
  height: 100%;
}
</style>
