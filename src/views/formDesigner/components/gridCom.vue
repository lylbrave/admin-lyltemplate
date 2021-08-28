<template>
  <div class="page">
    <component ref="detail" :is="myComponent"></component>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    componentSrc: {
      type: String,
    },
  },
  data() {
    return {
      myComponent: null,
    };
  },
  created() {
    this.myComponent = () =>
      import(`../../../components/formComponents/${this.componentSrc}.vue`);
  },
};
</script>

<style scoped lang="stylus"></style>
