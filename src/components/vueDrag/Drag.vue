<template>
  <div class="drag"  @mousedown.stop="hang" @mouseup.stop="drop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "drag",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    parentWidth: {
      type: Number,
      default: 0,
    },
    parentHeight: {
      type: Number,
      default: 0,
    },
    isVote: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    width(newWidth, oldWidth) {
      if (newWidth < oldWidth) return;
      if (this.left === 0) return;

      this.parent.width = this.parentWidth || this.elem.parentNode.offsetWidth;
      this.parent.height =
        this.parentHeight || this.elem.parentNode.offsetHeight;

      if (newWidth > this.parent.width - this.left) {
        const newLeft = this.parent.width - newWidth;
        this.left = newLeft < 0 ? 0 : newLeft;
        this.elem.style.left = `${this.left}px`;
      }
    },
    height(newHeight, oldHeight) {
      if (newHeight < oldHeight) return;
      if (this.top === 0) return;
      this.parent.width = this.parentWidth || this.elem.parentNode.offsetWidth;
      this.parent.height =
        this.parentHeight || this.elem.parentNode.offsetHeight;
      if (newHeight > this.parent.height - this.top) {
        const newTop = this.parent.height - this.height;
        this.top = newTop;
        this.elem.style.top = `${this.top}px`;
      }
    },
  },
  data: () => ({
    shiftY: null,
    shiftX: null,
    left: 0,
    top: 0,
    elem: null,

    parent: {
      width: 0,
      height: 0,
    },
  }),
  methods: {
    elementMove(e) {
      e.preventDefault();
      if (!e.pageX) {
        document.body.style.overflow = "hidden";
      }
      const x = e.pageX || e.changedTouches[0].pageX;
      const y = e.pageY || e.changedTouches[0].pageY;
      let newLeft = x - this.shiftX;
      let newTop = y - this.shiftY;
      const newRight = x - this.shiftX + this.elem.offsetWidth;
      const newBottom = y - this.shiftY + this.elem.offsetHeight;
      if (newLeft < 0) {
        newLeft = 0;
      } else if (newRight > this.parent.width) {
        newLeft = this.parent.width - this.elem.offsetWidth;
      } else {
        newLeft = x - this.shiftX;
      }
      if (newTop < 0) {
        newTop = 0;
      } else if (newBottom > this.parent.height) {
        newTop = this.parent.height - this.elem.offsetHeight;
      } else {
        newTop = y - this.shiftY;
      }
      this.elem.style.left = `${newLeft}px`;
      this.left = newLeft;
      this.elem.style.top = `${newTop}px`;
      this.top = newTop;
    },
    hang(e) {
      this.$emit("drag");
      this.parent.width = this.parentWidth || this.elem.parentNode.offsetWidth;
      this.parent.height =
        this.parentHeight || this.elem.parentNode.offsetHeight;
      this.shiftX = e.pageX
        ? e.pageX - this.elem.offsetLeft
        : e.changedTouches[0].pageX - this.elem.offsetLeft;
      this.shiftY = e.pageY
        ? e.pageY - this.elem.offsetTop
        : e.changedTouches[0].pageY - this.elem.offsetTop;
      if (e.pageX) {
        this.elem.addEventListener("mousemove", this.elementMove);
        this.elem.addEventListener("mouseleave", this.drop);
      } else {
        this.elem.addEventListener("touchmove", this.elementMove);
      }
    },
    drop() {
      this.$emit("dropped");
      document.body.style.overflow = null;
      this.elem.removeEventListener("mousemove", this.elementMove, false);
      this.elem.removeEventListener("touchmove", this.elementMove, false);
      this.elem.onmouseup = null;
      this.elem.ontouchend = null;
    },
  },
  mounted() {
    this.elem = this.$el;
    this.elem.style.left = this.isVote ? "60px" : "0";
  },
};
</script>

<style scoped lang="scss">
.drag {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
