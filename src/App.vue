<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>

import { Layout } from '@/components/'
export default {
  
  name: 'App',
  components: {
   Layout,
  },
  data:function(){
    return{
     
    }
  },
  methods:{
   
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(247, 248, 250, 1);
}
#app {
  height: 100%;
}
</style>
