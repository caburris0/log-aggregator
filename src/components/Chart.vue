<template>
  <div style="height:600px;width: 600px; display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
</template>

<script >
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  props: [
    'items'
  ],
  methods: {
    getCounts() {
      console.log('inside get counts')
      // this.items.map(function(item) {
      //   return item.severity
      // })      
    }
  },
  setup () {
    const doughnutChart = {
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Emergency', 'Critical', 'Alert', 'Error', 'Warning', 'Debug', 'Info', 'Notice'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 20, 80, 10]
            // data: this.items.map(function(item) {
            //   return item.severity
            // })
          }
        ]
      }
    }

    const beforeRenderLogic = (event) => {
      //...
      //if(a === b) {
      //  event.preventDefault()
      //}
      this.getCounts()
    }

    return {
      doughnutChart,
      beforeRenderLogic
    }
  },
}
</script>