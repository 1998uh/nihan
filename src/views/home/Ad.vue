<template>
<div class="qf-ad">
    <el-tabs type="card" @tab-click="tabClick">
      <el-tab-pane label="我的行程">
        <!-- <span slot="label"> 我的行程</span> -->
        <div class="cla">
          <h1>fsdfs</h1>
        </div>
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
export default {
   data:()=>{
      return {
        radio1: '上海',
      };
   },
   methods:{
     tabClick(v,value){
       console.log(v.index,value)
     }
   }
   
  
}

</script>

<style lang="scss" scoped>

</style>
