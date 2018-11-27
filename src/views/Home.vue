<template>
  <div class="wrapper">
    <home-header title="财会书店" logo-show=true align-title="left"></home-header>
    <scroller class="main">
      <refresh @loadingDown="loadingDown"></refresh>
      <book-banner :imageList="imageList" resize="cover"></book-banner>
      <div class="navList-group">
        <a v-for="(item, index) in navList" :key="index" href="" class="navList-item">
          <div :class="['icon-class', `color${index+1}`]">
            <text class="icon-text">{{ item.dot }}</text>
          </div>
          <text class="navList-text">{{ item.title }}</text>
        </a>
      </div>
      <marquee-com :delay-time="5" :marquee-list="marqueeList"></marquee-com>
      <div class="show-book" v-for="(item, index) in showBook" :key="index">
        <book-list :isShowTitle="true" :header="item.header" :bookList="item.main"></book-list>
      </div>
      <home-extension :extension-list="extensionList"></home-extension>
  </scroller>
  </div>
</template>

<script>
  import HomeHeader from '../components/common/TopHeader.vue'
  import BookBanner from '../components/common/BookBanner.vue'
  import Marquee from '../components/plugins/Marquee.vue'
  import BookList from '../components/common/BookList.vue'
  import HomeExtension from '../components/common/HomeExtension.vue'
	export default {
		name: "home",
    components: {
	    HomeHeader,
      BookBanner,
	    'marquee-com': Marquee,
	    BookList,
	    HomeExtension
    },
    data () {
			return {
				imageList: [
					{link: '/list1', src: 'http://www.chinaacc.com/upload/html/2018/06/07/sh8f5455809f0c401f9fe63413d8322e91.jpg'},
					{link: '/list2', src: 'http://www.chinaacc.com/upload/html/2018/05/31/shfc4985de497d4764a9540dc93c83335c.jpg'},
					{link: '/list3', src: 'http://www.chinaacc.com/upload/html/2018/06/09/fe4ddc03d2483e42b8a5b394eb70b592a7.jpg'},
					{link: '/list4', src: 'http://www.chinaacc.com/upload/html/2018/06/11/fe0017893d0a3d40afb8c273b1ff55cbaa.jpg'},
					{link: '/list5', src: 'http://www.chinaacc.com/upload/html/2018/06/12/fe5b8663e964d64e22820d0a5f39b65dc0.jpg'}
        ],
				navList: [
					{href: '/bookList', title: '初级职称', dot: '初',more:false},
					{href: '/bookList', title: '中级职称', dot: '中',more:false},
					{href: '/bookList', title: '高级职称', dot: '高',more:false},
					{href: '/bookList', title: '注会', dot: 'CPA',more:false},
					{href: '/bookList', title: '税务师', dot: '税',more:false},
					{href: '/bookList', title: 'ACCA', dot: 'ACCA',more:false},
					{href: '/bookList', title: 'CMA', dot: 'CMA',more:false},
					{href: '/bookList', title: '初级经济师', dot: '经',more:false},
					{href: '/bookList', title: '中级经济师', dot: '经',more:false},
					{href: '/bookList', title: '更多', dot: '···',more:true}
				],
				marqueeList: [
					{title: '2018年中级会计职称《财务管理》1', type: 'Hot', url: '/detail/23931'},
					{title: '2018年中级会计职称《财务管理》2', type: 'Recommend', url: '/detail/23932'},
					{title: '2018年中级会计职称《财务管理》3', type: 'Newest', url: '/detail/23933'},
					{title: '2018年中级会计职称《财务管理》4', type: 'Hot', url: '/detail/23934'},
					{title: '2018年中级会计职称《财务管理》5', type: 'Newest', url: '/detail/23935'}
        ],
				showBook: [
          {
	          header: {title:'初级会计职称',moreLink: '/list/1'},
	          main:[
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'}
	          ]
          },
          {
	          header: {title:'中级会计职称',moreLink: '/list/1'},
            main: [
	            {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	            {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	            {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	            {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	            {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	            {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	            {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'}
            ]
          },
          {
	          header: {title:'中级会计职称',moreLink: '/list/1'},
	          main: [
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
		          {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'}
	          ]
          }
        ],
				extensionList: [
					{imgUrl:'//sale.chinaacc.com/web/images/bookstore/ico06.png',imgTitle:'梦想成真',link: '/list/1'},
					{imgUrl:'//sale.chinaacc.com/web/images/bookstore/ico07.png',imgTitle:'激活码',link: '/list/1'},
					{imgUrl:'//sale.chinaacc.com/web/images/bookstore/ico08.png',imgTitle:'电子书',link: '/list/1'},
					{imgUrl:'//sale.chinaacc.com/web/images/bookstore/ico09.png',imgTitle:'APP',link: '/list/1'}
        ]
      }
    },
    methods: {
      // 下拉刷新
	    loadingDown () {

      }
    }
	}
</script>

<style scoped>
  .main{
    position: fixed;
    top:100px;
    left:0;
    right:0;
    bottom:0;
  }
  .navList-group{
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top:16px;
    border-bottom-width: 4px;
    border-bottom-color: #eee;
    border-bottom-style: solid;
  }
  .navList-item{
    flex-grow: 1;
    flex-shrink: 1;
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
  }
  .icon-class{
    width: 80px;
    height: 80px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
  }
  .navList-text{
    font-size: 24px;
    margin-top: 8px;
  }
  .icon-text{
    color: #ffffff;
    font-size: 24px;
  }
  .iconfont{
    font-family:'hfly-iconfont';
  }
  .color1{
    background-image: linear-gradient(to bottom,#3c9cf2,#4ebaf5);
  }
  .color2{
    background-image: linear-gradient(to bottom,#fb4d35,#fd6943);
  }
  .color3{
    background-image: linear-gradient(to bottom,#fb9a2d,#fdbc43);
  }
  .color4{
    background-image: linear-gradient(to bottom,#31bccf,#49d2df);
  }
  .color5{
    background-image: linear-gradient(to bottom,#27b859,#3bd085);
  }
  .color6{
    background-image: linear-gradient(to bottom,#3ab2e1,#56cceb);
    font-size:24px;
  }
  .color7{
    background-image: linear-gradient(to bottom,#fb6238,#fd8643);
    font-size:24px;
  }
  .color8{
    background-image: linear-gradient(to bottom,#4476e8,#65a3f0);
    font-size:27px;
  }
  .color9{
    background-image: linear-gradient(to bottom,#40afeb,#60c9f1);
  }
  .color10{
    background-image: linear-gradient(to bottom,#858585,#adadad);
    font-size:30px;
    font-weight:bold;
  }
  .show-book {
    border-top-width: 20px;
    border-top-color: #f0f0f0;
    border-top-style: solid;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>