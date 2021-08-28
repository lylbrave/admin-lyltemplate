<template>
  <div class="page">
    <!-- 可拖动的范围 -->
    <div class="drag-area">
      <dragCom
        v-for="(item,index) in ballotBoxList"
        :style="{ color: currentId == item.id ? 'blue' : '' }"
        :key="index"
        @mousedown.native="mousedown(item.id)"
      >
        <div style="margin-right: 8px">选票箱</div>
      </dragCom>
      <dragCom
        :style="{ color: currentId == item.id ? 'blue' : '' }"
        v-for="(item,index) in voteList"
        :key="index"
        :isVote="true"
      >
        <div style="margin-right: 8px">{{ item.value }}</div>
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
      voteList: [
        {
          id: 1,
          value: 6,
          coordinates: "",
        },
      ],
      //当前拖拽的组合id
      currentId: 1,
    };
  },
  components: {
    dragCom,
  },
  methods: {
    mousedown(id) {
      this.currentId = id;
      console.log(this.currentId);
    },
    addBallotBox() {
      this.ballotBoxList.push({
        id: this.ballotBoxList.length + 1,
        coordinates: "",
      });
      this.voteList.push({
        id: this.voteList.length + 1,
        value: 6,
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
