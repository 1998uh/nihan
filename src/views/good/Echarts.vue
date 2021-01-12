<template>
  <div class="myChart">
     <div ref="chart" style="width:100%;height:376px">
     </div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
export default {
    name:"Eacharts",
    data(){
        return{
            
        }
    },
    methods:{
        getEchartData() {
        const chart = this.$refs.chart
      if (chart) {
        const myChart = echarts.init(chart);
        const option = {
                title: {
                text: 'ECharts 入门示例'
            },
            grid:{
                left:200,
                right:'30%',
                height:100,
                bottom:'10%'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        myChart.setOption(option)
       
      }
      
    }
   
    },

    mounted(){
       this.getEchartData()  
    },
    
    destroyed() {

    }
}
</script>

<style>

</style>