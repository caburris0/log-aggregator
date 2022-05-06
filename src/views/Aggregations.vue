<template>
  <div>
    <div class="q-pa-md flex flex-center" v-if='!logsLoaded'>
      <q-circular-progress
        indeterminate
        size="50px"
        color="lime"
        class="q-ma-md"
      />
    </div>
    <div v-if='logsLoaded'>
      <q-card class='card'>
        <div class='card-wrapper'>
          <p class='totals'>
            Total Log Count: {{logs.length}}
          </p>
          <p class='totals'>
            Critical Logs: {{criticalLogs}}
          </p>  
          <p class='totals'>
            Emergency Logs: {{emergencyLogs}}
          </p>                    
        </div>      
      </q-card>
      <q-card class='card' v-for='(item, index) in logs' :key='index'>
        <div>
          <p>
            {{parseTime(item['timestamp'])}}
          </p>  
        </div>
        <div>       
          <p>
            <span class='bold-text'>Severity: </span>{{item['severity']}}
          </p>
        </div>
        <div>
          <p>
            <span class='bold-text'>Source: </span>{{item['userAgent']}}
          </p>    
        </div>

      </q-card> 
    </div>     
  </div>
</template>

<script>
import { getLogs } from '../api/logService';
import moment from 'moment'

export default {
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
  computed: {
    criticalLogs() {
      let tempArray = []
      tempArray = this.logs.filter(function(log) {
        return log.severity === 'Critical'
      })
      return tempArray.length
    },
    emergencyLogs() {
      let tempArray = []
      tempArray = this.logs.filter(function(log) {
        return log.severity === 'Emergency'
      })
      return tempArray.length
    }    
  },
  methods: {
    async getLogs() {
      this.logsLoaded = false

      let response;
      try {
        response = await getLogs().then(response => {
          return response;
        })
        response.forEach(item => {
          item.severity = item.severity.charAt(0).toUpperCase() + item.severity.slice(1)
          this.logs.push(item)
        })
        console.log(this.logs)
      } catch (error) {
        console.log(error)
      } finally {
        this.logsLoaded = true
      }
    },
    parseTime(timestamp) {
      let date = new Date(Number(timestamp));
      return moment(date).format('dddd, MMMM Do, YYYY h:mm:ss A')
    }    
  },
};
</script> 

<style lang="scss" scoped>
.chart-container {
  display: flex;
  justify-content: center;  
}

.timestamps {
  font-size: 30px;
  margin: 10px 0px 20px 10px;
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

p {
font-size: 18px;
}

.bold-text {
  // font-size: 30px;
  font-weight: bold;
}

.totals {
  font-size: 20px;
  margin-top: 18px; 
  color: black;  
}

.card-wrapper {
  display: flex;
  justify-content: space-evenly;
}
</style>