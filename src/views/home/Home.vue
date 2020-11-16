<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">
          <img src="../../assets/img/c1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/c2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/c3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/c4.jpg" alt="">
        </div> -->
        <div class="swiper-slide"
          v-for="item in banners"
          :key="item"
        >
          <h1>{{item}}</h1>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
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
          delay: 1000,
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

<style lang="scss" >
.banner{
  img{
    width: 7.5rem;
    height: 3rem;
  }
  .swiper-container {
    width: 7.5rem;
    height: 3rem;
  }  
}
</style>

