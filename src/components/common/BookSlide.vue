<template>
  <slider class="slider" auto-play="true" interval="5000" infinite="false">
    <div class="frame" v-for="(item, index) in imageList" :key="index">
      <image :src="item.src" class="image" :resize="resize"></image>
      <div class="mark">
        <text class="mark-text">纸质书</text>
      </div>
    </div>
    <indicator class="indicator"></indicator>
  </slider>
</template>

<script>
	export default {
		name: "banner",
    props: ['imageList', 'resize']
	}
</script>

<style scoped>
  .image {
    width: 420px;
    height: 210px;
  }
  .mark {
    position: absolute;
    width: 90px;
    height: 36px;
    background-color: #f2b53f;
    top: 70px;
    left: 280px;
    border-radius: 10px;
  }
  .mark-text {
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
  }
  .slider {
    width: 750px;
    height: 360px;
  }
  .frame {
    width: 750px;
    height: 360px;
    background-color: #fff;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .indicator {
    width: 750px;
    height: 40px;
    item-color: white;
    item-selected-color: #b4282d;
    item-size: 12px;
    position: absolute;
    bottom: 10px;
    right: 0px;
  }
</style>