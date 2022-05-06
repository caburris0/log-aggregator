<template>
  <div class='chart-container'>
    <!-- <Bar 
      v-if='logsLoaded && logs.length > 0' 
      :items='logs'
    /> -->
  </div>
</template>

<script>
import { getLogs } from '../api/logService';
// import { Bar } from 'vue-chartjs'
export default {
  // components: {
  //   Chart
  // },
  data() {
    return {
      logsLoaded: false,
      logs: [],
      severities: ['Emergency', 'Critical', 'Alert', 'Error', 'Warning', 'Debug', 'Info', 'Notice'],
      dataToDisplay: []
    };
  },
  async beforeMount() {
    await this.getLogs();
  },    
  methods: {
    async getLogs() {
      let response;
      try {
        response = await getLogs().then(response => {
          return response;
        })
        response.forEach(item => {
          item.severity = item.severity.charAt(0).toUpperCase() + item.severity.slice(1)
          this.logs.push(item)
        })
        this.getCounts()
        console.log(this.logs)
      } catch (error) {
        console.log(error)
      } finally {
        this.logsLoaded = true
      }
    },
    getCounts() {
      this.severities.forEach(severity => {
        let tempArray = []

        tempArray = this.logs.map(item => {
          // console.log(item)
          // console.log(severity)
          return item.severity === severity
        })
        this.dataToDisplay.push(tempArray.length)
      })
      console.log(this.dataToDisplay)
    }
  },
};
</script> 

<style lang="scss" scoped>
.chart-container {
  display: flex;
  justify-content: center;  
}
</style>