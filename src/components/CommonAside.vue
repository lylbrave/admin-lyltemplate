<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.path" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="child.path"
          v-for="child in item.children"
          :key="child.path"
          >{{ child.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "s-home",
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "video-play",
        },
        {
          path: "/userManager",
          label: "用户管理",
          icon: "user",
        },
        {
          label: "其他",
          icon: "orange",
          children: [
            { path: "/page1", label: "页面1" },
            { path: "/page2", label: "页面2" },
          ],
        },
      ],
    };
  },
  components: {},
  computed: {
    noChildren() {
      return this.asideMenu.filter((item) => {
        return !item.children;
      });
    },
    hasChildren() {
      return this.asideMenu.filter((item) => {
        return item.children;
      });
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="scss" >
.el-menu {
  height: 100%;
  .el-menu-item {
    padding: 0;
    text-align: start;
  }
  ::v-deep .el-submenu__title {
    padding: 0;
    text-align: start;
  }
  // .el-menu-item.is-active {
  //   padding-left: 20px;
  // }
}
</style>
