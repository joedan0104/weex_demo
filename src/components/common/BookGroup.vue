<template>
    <div>
        <scroller class="combination-box" scroll-direction="horizontal" show-scrollbar="false">
            <div v-for="(book, index) in bookGroup" :key="index" class="book-wrap">
                <a :href="book.imgLink" class="category-slide">
                <image :src="book.imgUrl" size="cover" class="book-cover"></image>
                <text class="img-desc">{{ book.imgDesc }}</text>
                <text class="price h3 combination-price">¥ 25.00</text>
                </a>
            </div>
        </scroller>
    </div>
</template>

<script>
export default {
    props: ['bookGroup']
}
</script>

<style>
  .combination-box {
    flex-direction: row;
    height: 200px;
  }
  .book-wrap {
    width: 206px;
  }
   .category-slide {
    align-items: center;
  }
   .book-cover {
    width: 135px;
    height: 190px;
  }
  .img-desc {
    width:180px;
    line-height: 42px;
    padding-top:15px;
    font-size:26px;
    text-overflow: ellipsis;
    overflow : hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    lines: 2;
  }
   .price {
    font-size: 28px;
    color: red;
  }
  .combination-price {
    width: 206px;
    text-align: center;
    height:60px;
    line-height: 60px;
  }
</style>
