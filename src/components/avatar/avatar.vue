<template>
  <div class="v-avatar" :class="{'circle':isCircle}" :style="style">
    <img v-if="showError" src="~@/assets/images/avatar-round.png" />
  </div>
</template>

<script>
import { loadImage } from "@/utils/file";

/**
 * 圆形缩略图组件
 * props
 * **** url
 */
export default {
  name: "v-avatar",
  components: {},
  props: {
    url: String,
    isCircle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showError: true,
      style: {}
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    url() {
      this.style = {
        backgroundImage: `url(${""})`
      };
      this.init();
    }
  },
  methods: {
    async init() {
      if (!this.url) return;
      try {
        let img = await loadImage(this.url, true);
        this.style = {
          backgroundImage: `url(${img.src})`
        };
        this.showError = false;
      } catch (e) {
        this.showError = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-avatar {
  background-size: cover;
  background-position: center center;
  display: flex;
  overflow: hidden;
  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.circle {
  border-radius: 50%;
}
</style>
