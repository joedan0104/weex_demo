<template>
  <div class="marquee">
    <text class="hot-icon iconfont">&#xe612;</text>
    <div class="marquee-content" :class="{'anim': animated}">
      <a href="" v-for="(item, index) in marqueeList" :key="index" class="link-con">
        <text class="type">{{ Character[item.type] }}</text>
        <text class="text">{{ item.title }}</text>
      </a>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Marquee",
    props: ['marqueeList', 'delayTime', 'marqueeList'],
		data () {
			return {
				Character: {
					Hot: '热门',
					Recommend: '推荐',
					Newest: '最新'
        },
				animated: false
      }
    },
    created () {
	    setInterval(this.scroll, this.delayTime * 1000)
    },
    methods: {
			scroll () {
				this.animated = true;
				setTimeout(() => {
					this.marqueeList.push(this.marqueeList[0])
					this.marqueeList.shift()
					this.animated = false
        }, 500)
      }
    }
	}
</script>

<style scoped>
  .iconfont {
    font-family: hflyicon;
  }
  .hot-icon {
    color: red;
    font-size: 40px;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    position: absolute;
  }
  .marquee {
    flex-direction: row;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    overflow: hidden;
  }
  .marquee-content {
    padding-left: 60px;
    height: 60px;
  }
  .link-con {
    flex-direction: row;
    height: 60px;
    align-items: center;
    transition-property: transform;
    transition-duration: .5s;
    transition-timing-function: ease-out;
  }
  .type {
    font-style: italic;
    color: red;
    font-weight: bold;
    padding-right: 20px;
    font-size: 30px;
  }
  .text {
    font-size: 30px;
    white-space: nowrap;
  }
  .anim {
    transform: translateY(-60px);
  }
</style>