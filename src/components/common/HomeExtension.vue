<template>
  <div class="home-extension">
    <a :href="item.link" v-for="(item, index) in extensionList" :key="index" class="extension-content">
      <image :src="item.imgUrl" class="image"></image>
      <text class="ext-text">{{ item.imgTitle }}</text>
    </a>
  </div>
</template>

<script>
	export default {
		name: 'HomeExtension',
    props: ['extensionList']
	}
</script>

<style scoped>
  .home-extension {
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 20px;
    border-top-style: solid;
    border-top-color: #f0f0f0;
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .extension-content {
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 72px;
    height: 72px;
  }
  .ext-text {
    font-size: 30px;
    color: #777;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
  }

</style>
