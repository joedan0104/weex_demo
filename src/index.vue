<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
  import util from './util'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  beforeCreate () {
	  util.initIconFont()
  }
}
</script>

<style scoped>
  .wrapper {
    background-color: #fafafa;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
