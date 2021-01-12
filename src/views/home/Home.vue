<template>
  <div class="banner">
    <input type="text" ref="usernameInput" @click="good">
    <div id="hook-arguments-example" ></div>
  </div>

</template>

<script>

export default {
  
  data () {
    return {
      banners:''
    }
  },
  watch: {  

  },
  
  created () {
    this.getdata()
    
  },
  methods: {
    getdata: function() {
      this.$axios.mockdata('/data/index')
      .then(res => {
        console.log(res);
        this.dataShow = res.data;
      })
    },
    good(){
      
      console.log(this.$refs.usernameInput.f)
    }
     
  }

}
</script>

<style lang="scss" scoped>


</style>

