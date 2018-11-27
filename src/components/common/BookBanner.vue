<template>
  <slider class="slider" auto-play="true" interval="5000" infinite="false">
    <div class="frame" v-for="(item, index) in imageList" :key="index">
      <image :src="item.src" class="image" :resize="resize"></image>
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
    width: 750px;
    height: 360px;
  }
  .slider {
    width: 750px;
    height: 360px;
  }
  .frame {
    width: 750px;
    height: 360px;
    position: relative;
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