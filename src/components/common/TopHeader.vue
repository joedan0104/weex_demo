<template>
  <div class=top-header>
    <div class="title">
      <text class="topTitle" :style="{'text-align': alignTitle, 'padding-left': logoShow ? '100px' : 0}">{{ title }}</text>
    </div>
    <a href="http://m.chinaacc.com" v-if="logoShow" class="logo-con">
      <image :src="logo" class="logo"></image>
    </a>
    <a v-if="back" class="back-con" @click="backPage">
      <text class="icon back-btn">&#xe618;</text>
    </a>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
  	props: ['title', 'alignTitle', 'logoShow', 'back'],
    data () {
  		return {
  			logo: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1586000969,2420197735&fm=58'
      }
    },
    methods: {
      backPage () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .top-header{
    background-color: #0e9cfa;
    position: fixed;
    top:0;
    left:0;
    right:0;
    height: 100px;
    flex-direction: row;
  }
  .logo-con{
    width:100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }
  .icon {
    font-family: hflyicon;
  }
  .back-con {
    position: absolute;
    left: 0;
    top: 0;
    height: 100px;
    width: 100px;
  }
  .back-btn {
    color: #ffffff;
    font-size: 40px;
    line-height: 100px;
    text-align: center;
    width: 100px;
  }
  .logo{
    width: 50px;
    height: 50px;
  }
  .title{
    height: 100px;
    line-height: 100px;
    flex: 1;
  }
  .topTitle{
    color: #ffffff;
    height:100px;
    line-height: 100px;
    font-size: 36px;
  }
  .center {
    text-align: center;
  }
  .left {
    text-align: left;
  }
</style>