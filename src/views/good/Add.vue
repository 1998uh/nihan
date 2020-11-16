<template>
<div class="qf-good-add">
  <div class="box">
    <div class="box1">
      <div class="box3"></div>
    <el-carousel indicator-position="outside" height="100px" arrow="never" :autoplay="good" >
      <el-carousel-item v-for="item in img" :key="item.id" >
        
        <img :src="item.active" alt="这是一张图片" >
      </el-carousel-item>
    </el-carousel>      
    </div>

  </div>


</div>
</template>

<script>

import imgs from '@/utils/img.js'
export default {
  components: {
    
  },
  data: function() {
    return {
      imgs,
      good:false,
      img:[
        {id:'1', active:imgs.todo},
        {id:'2', active:imgs.todo},
        {id:'3', active:imgs.todo},
        {id:'4', active:imgs.todo},
      ]
   
    }
  }
 
 
}
</script>

<style lang="scss" scoped>

.qf-good-add ::v-deep .el-carousel__indicators--outside{
  position: absolute;
  top:66px;
  left: 118px;
  height: 34px;
  z-index: 999;
}
.qf-good-add ::v-deep .el-carousel__button{
      width: 10px ;
      height: 10px;
      border-radius:50%;
      background-color:#fff ;
      opacity: 1;
}

.qf-good-add ::v-deep .el-carousel__indicator:hover button {
  background: blue;
  opacity: 1;

}
/*  .qf-good-add ::v-deep .el-carousel__indicator--horizontal{
   width: 10px;
   height: 10px;
   border-radius: 50%;  
}  */

.qf-good-add {
  .box{
    text-align: center;
    width: 200px;
    height:100px;
    margin: 50px auto;
    border: 1px solid #ccc;
    position: relative;
    overflow-y: hidden;
    .box3{
      width: 100%;
      height: 30px;
      background: rgba($color: #000000, $alpha: 0.4);
      z-index: 99;
      position:absolute;
      bottom: 0;
    }
    img{
      width: 100%;
      height: 100%;
    }
    
    
  }
}

</style>
