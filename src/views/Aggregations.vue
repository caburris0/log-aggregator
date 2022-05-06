<template>
  <div>
    <q-card class='card' v-for='(item, index) in logs' :key='index'>
      <div class='card-wrapper'>
        <p class='hero-names'>
          {{item['severity']}}
        </p>
      </div>
      <div class='card-wrapper q-ml-lg'>
        <p>
          User Agent: {{item['userAgent']}}
        </p>
      </div>
    </q-card>      
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
      dataToDisplay: {}
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
        // this.getCounts()
        console.log(this.logs)
      } catch (error) {
        console.log(error)
      } finally {
        this.logsLoaded = true
      }
    },
    // getCounts() {
    //   this.severities.forEach(severity => {
    //     let tempArray = []

    //     tempArray = this.logs.map(item => {
    //       console.log(item.severity)
    //       console.log(severity)
    //       return item.severity === severity
    //     })
    //     this.dataToDisplay[severity] = tempArray.length
    //   })
    //   console.log(this.dataToDisplay)
    // }
  },
};
</script> 

<style lang="scss" scoped>
.chart-container {
  display: flex;
  justify-content: center;  
}

.card {
  box-shadow: none;
  // border: 1px solid black;
  border: 1px solid #d1d1d1;
  background: #F5F5F5;
  width: 100%;
  padding: 20px 10px 10px 10px;
  margin-bottom: 5px;
}

.text {
  font-size: 30px;
  margin: 10px 0px 20px 10px;
}

.text {
  font-weight: bold;
  font-size: 20px;
  margin-top: 18px; 
  color: black;
}

.card-wrapper {
  display: inline-block;
}
</style>