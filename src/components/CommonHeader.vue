<template>
  <header>
    <div class="left-content">
      <el-button size="mini" @click="collapse"
        ><i class="el-icon-menu"></i
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          class="breadcrumb-last"
          :to="{ path: current.path }"
          v-if="current"
        >
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="headPhoto" alt="头像" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  data() {
    return {
      headPhoto: require("../assets/images/user.jpeg"),
    };
  },
  computed: {
    ...mapState({
      current: (state) => state.menu.currentMenu,
    }),
  },
  components: {},
  methods: {
    /**
     * 展开或伸缩目录
     */
    collapse() {
      this.$store.commit("collapse");
    },
  },
};
</script>

<style scoped lang="scss">
header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  img {
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #666666;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #f4f4f4;
}
</style>
