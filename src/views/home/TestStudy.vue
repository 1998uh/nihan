<template>
  <div 
   class="goodindex" 
  >
    <div class="goodlist" 
     v-for="item in data" 
     :key="item.id"
    >
    <div class="box">
      {{item.title}}
    </div>

    <div class="list2">
          <div>nihan</div>
      </div>  
    </div>
    <div class="food">

        <el-tabs v-model="activeName"  >

          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        </el-tabs>
    </div>
     <!-- <div :is='com'></div> -->
  </div>
</template>

<script>
// import Home from './Home'
export default {
    data(){
      return{
        data:[
          {id:'1',title:"样式分析1"},
          {id:'2',title:"样式分析2"},
          {id:'3',title:"样式分析3"},
          {id:'4',title:"样式分析4"},
          {id:'5',title:"样式分析5"},
          {id:'6',title:"样式分析6"}, 
        ],
        activeName:"first",
        // com:Home
      }
    }
}
</script>

<style lang="scss" scoped>
.goodindex ::v-deep  .el-tabs--top .el-tabs__item.is-top:nth-child(2){
  padding-left: 20px;
}
.goodindex ::v-deep .el-tabs__active-bar{
  width: 100px !important;
  margin-left: -20px;
}
.goodindex {

 .goodlist{
 width: 300px;
 height: 20px;
 margin-bottom: 5px;
 background: #ccc;
 position: relative;
 .list2{
   display: none;
   position: absolute;
   z-index: 10;
   top: 20px;
  left: 200px;
 }
 }
 .goodlist:hover .list2{
   display: block;
 }
}
</style>