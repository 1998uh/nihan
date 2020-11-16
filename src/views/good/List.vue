<template>

	<div class="marketplace_aside_b">
      <div
        v-for="item in classd"
        :key="item.id"
        class="marketplace_aside_show_that"
      >{{ item.text }}</div>

      <el-collapse-transition>
        <div v-show="show3">
          <div
            v-for="item in classed"
            :key="item.id"
            class="marketplace_aside_show_that"
          >{{ item.text }}</div>
        </div>
      </el-collapse-transition>
      <el-button @click="show3 = !show3" class="marketplace_show_more">{{word}}</el-button>
    </div>

</template>

<script>
export default {
  name: "GameList",
  data() {
    return {
     word:"展开/收起",
     show3: false,
        classd: [
        { id: 1, text: "分类1" },
        { id: 2, text: "分类2" },
        { id: 3, text: "分类3" },
        { id: 4, text: "分类4" }
        ],
        classed: [
        { id: 5, text: "分类5" },
        { id: 6, text: "分类6" },
        { id: 7, text: "分类7" },
        { id: 8, text: "分类8" }
        ],
      
    };
  },
  computed:{
   
  }
};
</script>

<style lang="scss" scoped>
.marketplace_aside_b .marketplace_aside_show_that {
height: 35px;
line-height: 35px;
font-size: 14px;
padding-left: 33px;
transition: all 0.5s ease;
}
.marketplace_aside_b .marketplace_aside_show_that:hover{
background-color: #4393FD;
cursor: pointer;
}
.marketplace_aside_b .marketplace_show_more {
width: 101px;
height: 38px;
background-color: #4393FD;
color: #fff;
text-align: center;
margin-left: 70px;
border-radius: 5px;
font-size: 14px;
cursor: pointer;
margin-top: 10px;
margin-bottom: 20px;
}
</style>
