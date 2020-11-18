<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
          v-for="item in banners"
          :key="item"
        >
          <img src="" alt="">
        </div>
      </div>
    </div>
          <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  
  data () {
    return {
      banners:[1,2,4,3]
    }
  },
  watch: {  
    // banners () {
    //   this.$nextTick(()=>{
    //     this.initSwiper()
    //   })
    // }
  },
  methods: {
    initSwiper () {
      // 初始化Swiper
       new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  },
  mounted(){
    this.initSwiper()
  }
}
</script>

<style lang="scss" scoped>
.banner ::v-deep .swiper-pagination {
  right: 0 ;
  width: 100px;
  height: 20px;
}
.banner{
 width: 200px;
 height: 100px;
 margin: 50px auto;
 border: 1px solid #ccc;
 position: relative;
 .swiper-container{
   width: 100%;
   height: 100%;
   position: relative;
  
  
 }
 .swiper-pagination{
   position:absolute;
   bottom:0
 }
}

</style>

