<template>
  <div class="page"><div id="container"></div></div>
</template>

<script type="text/ecmascript-6">
import * as Three from "three";
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      animateEnable: false,
    };
  },
  components: {},
  mounted() {
    this.init();
    this.animateEnable = true;
    this.animate();
  },
  beforeDestroy() {
    //禁止动画
    this.animateEnable = false;
  },
  methods: {
    init: function () {
      let container = document.getElementById("container");
      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        80
      );
      this.camera.position.z = 0.8;
      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function () {
      if (this.animateEnable) {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
      }
    },
  },
};
</script>

<style scoped lang="scss">
#container {
  height: 400px;
}
</style>
