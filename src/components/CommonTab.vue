<template>
  <div class="tab">
    <el-tag
      :key="tag.label"
      v-for="tag in tabLists"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="selectTag(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'light'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tabLists: (state) => state.menu.tabLists,
    }),
  },
  components: {},
  methods: {
    ...mapMutations({
      close: "closeTab",
    }),
    selectTag(tag) {
      this.$router.push({
        name: tag.name,
      });
      this.$store.commit("selectMenu", tag);
    },
    /**
     * 关闭标签
     */
    handleClose(tag) {
      this.close(tag);
    },
  },
};
</script>

<style scoped lang="scss">
.tab {
  padding: 4px 10px;
  text-align: start;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
