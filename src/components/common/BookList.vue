<template>
  <div class="wrapper">
    <div v-if="isShowTitle" class="book-title">
      <text class="title-text">{{ header.title }}</text>
      <a :href="header.moreLink" class="more-con">
        <text class="more iconfont">更多&#xe602;</text>
      </a>
    </div>
    <scroller class="box" scroll-direction="horizontal" show-scrollbar="false">
      <div v-for="(book, index) in bookList" :key="index" class="box-list">
        <!-- :href="book.imgLink" -->
        <a class="category-slide" @click="detailBook">
          <image :src="book.imgUrl" size="cover" class="book-cover"></image>
          <text class="img-desc">{{ book.imgDesc }}</text>
        </a>
      </div>
    </scroller>
  </div>

</template>

<script>
    var navigator = weex.requireModule('navigator')
    navigator.setNavBarTitle({'title': '书籍详情'}, null);
  const modal = weex.requireModule('modal')
	export default {
      name: "BookList",
    props: ['isShowTitle','header', 'bookList',],
    methods: {
        detailBook (event) {
            console.log('will jump')
            navigator.push({
                url: 'http://192.168.190.153:8081/dist/views/BookDetail.js',
                animated: "true"
            }, event => {
//                modal.toast({ message: 'callback:::: ' + event })
            })
        },
//      detailBook () {
//        this.$router.push('detail')
//
//      }
    }
	}
</script>

<style scoped>
  .iconfont {
    font-family: hflyicon;
  }
  .book-title {
    flex-direction: row;
    height: 114px;
    align-items: center;
  }
  .title-text {
    font-size: 34px;
  }
  .more-con {
    flex: 1;
  }
  .more {
    font-size: 32px;
    color: #898989;
    text-align: right;
  }
  .box {
    padding-bottom: 35px;
    height: 340px;
  }
  .book-list {
    height: 340px;
  }
  .book-cover {
    width: 160px;
    height: 225px;
  }
  .img-desc {
    width: 200px;
    padding-top:15px;
    font-size:26px;
    line-height: 40px;
    text-overflow: ellipsis;
    overflow : hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    lines: 2;
  }
  .category-slide {
    align-items: center;
    width: 208px;
    height: 340px;
  }
</style>