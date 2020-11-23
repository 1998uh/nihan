<template>
  <div class="banner">
    
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
    }
  }

}
</script>

<style lang="scss" scoped>


</style>

