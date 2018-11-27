<template>
  <div>
    <top-header title="书籍详情" :logoShow="false" align-title="center" :back="true"></top-header>
    <scroller class="main" scroll-direction="vertical">
      <book-slide :imageList="slideList" resize="contain"></book-slide>
      <div class="content">
        <text class="product-name">{{ bookName }}</text>
        <div class="price-con">
          <text class="price">¥61.80</text>
          <div class="old-con">
            <text class="old-price">¥103.00</text>
            <text class="price-tip">(不支持学习卡支付)</text>
          </div>
        </div>
        <div class="list-group">
          <div class="cell-con" v-for="(item, index) in activeList" :key="index">
            <div class="cell-text-icon">
              <text class="cell-title">{{ item.activeName }}</text>
            </div>
            <a href="" class="active-con">
              <text class="active-text">{{ item.activeDesc }}</text>
              <text class="ui-icon arrow-icon">&#xe615;</text>
            </a>
          </div>
        </div>
        <div class="row com-mod">
          <text class="h4 color2">商品状态:</text>
          <text class="h4 italic color2 auto-width">(新教材公布后发行，到货后按购买先后顺序发货！)</text>
        </div>
        <div class="row com-mod">
          <text class="h4 color2">作者:</text>
          <text class="h4 color1">中华会计网校</text>
        </div>
        <div class="combination">
          <text class="combination-title color1">推荐组合</text>
          <book-group :book-group="bookList"></book-group>
        </div>
        <div class="count-com row">
          <div class="count-price row">
            <text class="h2">总价：</text>
            <text class="price h2">¥0.00</text>
          </div>
          <text class="add-car-btn">加入购物车</text>
        </div>
        <div class="introduce">
          <div class="intro-title row">
            <text class="intro-active intro-tit">简介</text>
            <text class="intro-tit">推荐</text>
          </div>
          <div>
            <text class="intro-content h4 color1">中华会计网校（www.chinaacc.com）是专业的大型会计远程教育基地，凭借雄厚的师资力量、专业的交互式学习课件、先进的人工智能技术、灵活多样的学习方式，每年为我国财政系统培养数百万名专业人才。网校经过十数年的研究与发展，为2000万会计从业人员与每年500余万财经类专业大学生，提供考试培训、继续教育、实务操作与就业服务，为全国8000余万户各类企业，提供代理记账服务与财税咨询服务，已形成“考试培训、继续教育、实务操作、财税咨询、就业服务”五位一体完善的终身教育体系，受到学员的认可，被广大会计人员亲切地誉为“会计人的网上家园”！</text>
          </div>
        </div>
      </div>
    </scroller>
    <div class="detail-footer row">
      <div class="foot-zx-btn">
        <text class="ui-icon h1 color2">&#xe652;</text>
        <text>咨询</text>
      </div>
      <div class="foot-car-btn">
        <text class="ui-icon h1 color2">&#xe617;</text>
        <text @click="ShoppingCart">购物车</text>
      </div>
      <div class="buy-product">
        <text class="text-center h1 buy-product-btn">预定该商品</text>
      </div>
    </div>
  </div>
</template>

<script>
  import TopHeader from '../components/common/TopHeader.vue'
  import BookSlide from '../components/common/BookSlide.vue'
  import BookGroup from '../components/common/BookGroup.vue'
  var navigator = weex.requireModule('navigator')
  var ev = weex.requireModule('navevent');
	export default {
		name: "BookDetail",
    components: {
	    'top-header': TopHeader,
      'book-slide': BookSlide,
      'book-group': BookGroup
    },
    created () {
      console.log(
        weex.supports('@component/top-header'),
        weex.isRegisteredComponent('top-header')
      )
    },
    data () {
			return {
				bookName: '2019年初级会计职称两科“梦想成真”系列丛书应试指南（预订）',
				slideList: [
					{link: '/detail/goods/1', src: 'http://www.chinaacc.com/upload/html/2018/05/11/fec5b5f41c8ca146e0903509ee63e652ae.jpg'},
					{link: '/detail/goods/1', src: 'http://www.chinaacc.com/upload/html/2018/05/11/fec5b5f41c8ca146e0903509ee63e652ae.jpg'}
				],
        activeList: [
          {
          	activeName: '优惠',
            activeDesc: '加10元换购2019年同科目应试指南电子书'
          },
	        {
		        activeName: '赠品',
		        activeDesc: '购买即免费赠送图书，赠完为止'
	        },
	        {
		        activeName: '礼包',
		        activeDesc: '购注会辅导书赠千元大礼包'
	        }
        ],
        bookList: [
	        {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	        {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	        {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	        {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	        {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	        {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'},
	        {imgUrl:'//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg',imgDesc:'2019年初级会计职称两科辅导教材（精要版）',imgLink:'/detail'}
        ]
      }
    },
        methods: {
            ShoppingCart(){
                ev.ShoppingCart(event => {
                    //callback 传值
                      modal.toast({message: 'asd'+event.appVersion, duration: 1});
                });
            }
        }
	}
</script>

<style scoped>
  .combination-box {
    flex-direction: row
  }
  .foot-zx-btn {
    width: 140px;
    height:100px;
    align-items: center;
    justify-content: center;
  }
  .foot-car-btn {
    height: 100px;
    width: 140px;
    align-items: center;
    justify-content: center;
  }
  .text-center {
    text-align: center;
  }
  .buy-product {
    flex: 1;
    height: 100px;
    background-color: #57cb64;
  }
  .buy-product-btn {
    color: #ffffff;
    line-height: 100px;
  }
  .detail-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    align-items: center;
  }
  .introduce {
    border-top-width: 8px;
    border-top-color: #f0f0f0;
    border-top-style: solid;
    margin-top: 20px;
  }
  .intro-tit {
    width:160px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-right: 20px;
    margin-left: 20px;
  }
  .intro-title {
    height: 80px;
    border-bottom-width: 4px;
    border-bottom-color: #e7e7e7;
    border-bottom-style: solid;
    justify-content: center;
  }
  .intro-content {
    line-height: 44px;
    text-indent: 48px;
    padding-top: 20px;
    padding-top: 20px;
  }
  .ui-icon {
    font-family: hflyicon;
    font-size:28px;
  }

  .color1 {
    color: #333333;
  }
  .color2 {
    color: #666666;
  }
  .row {
    flex-direction: row;
    align-items: center;
  }
  .count-com {
    height: 90px;
    justify-content: space-between;
    margin-top: 30px;
  }
  .count-price {
    flex-grow: 1;
    height: 90px;
    align-items: center;
  }
  .combination {
    border-top-color: #f0f0f0;
    border-top-style: solid;
    border-top-width: 18px;
  }
  .combination-title {
    text-align: center;
    height:120px;
    line-height: 120px;
  }
  .intro-active {
    color: #0088fb;
    border-bottom-style: solid;
    border-bottom-color: #0088fb;
    border-bottom-width: 2px;
  }
 
  .combination-price {
    width: 206px;
    text-align: center;
    height:60px;
    line-height: 60px;
  }
 
  .add-car-btn {
    color: #ffffff;
    background-color: #0088fb;
    height: 64px;
    text-align: center;
    line-height: 64px;
    border-radius: 12px;
    width: 210px;
    font-size: 28px;
  }
  .com-mod {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .auto-width {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .cell-con {
    flex-direction: row;
    align-items: center;
    height: 68px;
    border-bottom-style: solid;
    border-bottom-color: #f0f0f0;
    border-bottom-width: 2px;
  }
  .cell-text-icon {
    width: 90px;
    height: 36px;
    background-color: #f2b53f;
    border-radius: 8px;
  }
  .active-con {
    padding-left: 20px;
    flex: 1;
    flex-direction: row;
  }
  .active-text {
    flex: 1;
    font-size: 26px;
    color: #777;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .arrow-icon {
    width: 60px;
    text-align: center;
    font-size: 26px;
    color: #0e9cfa;
  }
  .cell-title {
    text-align: center;
    line-height: 36px;
    color: #ffffff;
    font-size: 26px;
  }
  .main {
    position: fixed;
    top: 100px;
    left: 0px;
    right: 0px;
    bottom: 100px;
    background-color: #ffffff;
  }
  .content {
    margin-top: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .product-name {
    font-size: 30px;
    font-weight: normal;
    color: #333;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .price-con {
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
  }
  .price {
    font-size: 40px;
    color: red;
  }
  .old-con {
    flex-direction: row;
    justify-content: space-between;
    flex-shrink: 1;
    flex-grow: 1;
  }
  .old-price {
    font-size: 26px;
    text-decoration: line-through;
    align-content: center;
    padding-left: 20px;
    color: #ccc;
  }
  .price-tip {
    font-size: 26px;
    color: #f2b53f;
  }
  .category-slide {
    align-items: center;
  }
  .italic {
    font-style: italic;
  }
  .h1 {
    font-size: 36px;
  }
  .h2 {
    font-size: 32px;
  }
  .h3 {
    font-size: 28px;
  }
  .h4 {
    font-size: 26px;
  }
</style>