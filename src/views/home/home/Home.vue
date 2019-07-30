<template>
  <div class="home">
    <van-swipe :loop="false" class="fs0">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      images: [
        'https://xituan.oss-cn-shenzhen.aliyuncs.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551562904005318.jpg'
      ]
    }
  }
};
</script>
