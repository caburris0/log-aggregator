<template>
  <main>
    <q-card class='card'>
      <div class='header-card'>
        <q-card-section>
          <p class='text'>Click the button below to trigger the API and create a log!</p>
        </q-card-section>
      </div>
      <q-separator/>
      <div class='card-body'>
        <q-card-section>
          <ApiTrigger @input='triggerApi($event)'/>
          <!-- <LogForm/> -->
        </q-card-section>
      </div>    
    </q-card>
  </main>
</template>

<script>
import { triggerLog, getLogs } from '../api/logService';
import ApiTrigger from '../components/ApiTrigger.vue';
export default {
  components: {
    ApiTrigger
  },
  data() {
    return {
      isLoading: false,
      userData: []
    };
  },
  methods: {
    async triggerApi() {
      let response = await triggerLog()
      console.log(response)
    },
  },
};
</script>

<style>
.header-card {
  background-color: #1976D2;
  text-align: center; 
}

.card {
  width: 100%;
}

.card-body {
  display: flex;
  justify-content: center;
}

.text {
  font-weight: bold;
  font-size: 20px;
  margin-top: 18px;
  color: white;
}
</style>
