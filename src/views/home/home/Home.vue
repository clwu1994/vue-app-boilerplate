<template>
  <div class="home">
    <van-swipe :height="150" :loop="false" class="fs0">
      <van-swipe-item v-for="(num, index) in nums" :key="index">{{num}}</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      nums: [1, 2, 3 , 4]
    }
  }
};
</script>

<style lang="less" scoped>
.van-swipe-item {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:nth-child(even) {
    background-color: #39a9ed;
  }
  &:nth-child(odd) {
    background-color: #66c6f2;
  }
}
</style>
