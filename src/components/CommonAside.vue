<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="!isCollapse"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.label"
      v-for="item in hasChildren"
      :key="item.path"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="child.path"
          v-for="child in item.children"
          :key="child.path"
          @click="clickMenu(item)"
          >{{ child.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  data() {
    return {};
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
    ...mapState({
      isCollapse: (state) => state.menu.isCollapse,
      asideMenu: (state) => state.user.menuList,
    }),
    //当前选中的目录
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path;
    },
  },
  methods: {
    /**
     * 选中目录
     */
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
      this.$store.commit("selectMenu", item);
    },
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
  border: none;
  overflow: hidden;
  .el-menu-item {
    padding: 0;
    text-align: start;
  }

  ::v-deep .el-submenu__title {
    padding: 0;
    text-align: start;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
