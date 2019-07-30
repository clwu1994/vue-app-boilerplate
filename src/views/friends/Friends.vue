<template>
  <van-index-bar :index-list="indexList">
    <van-index-anchor index="A" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-index-anchor index="B" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
  </van-index-bar>
</template>

<script>
export default {
	data() {
		return {
			indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		}
	}
};
</script>
