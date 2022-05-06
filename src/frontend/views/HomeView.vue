<script setup>
import InputValue from '../components/InputValue.vue'
import UserData from '../components/UserData.vue'
</script>

<template>
  <main>
    <q-card class='card'>
      <div class='header-card'>
        <q-card-section>
          <p class='text'>Input your Battletag</p>
        </q-card-section>
      </div>
      <q-separator/>
      <div>
        <q-card-section>
          <InputValue @updateInput='updateInput($event)'/>
        </q-card-section>
        <q-separator/>
        <q-card-section>
          <q-skeleton v-if='isLoading' height="200px" square />
          <user-data v-if='userData.length > 0' :userData='userData' :username='battletag'/>
        </q-card-section>  
      </div>    
    </q-card>
  </main>
</template>

<script>
import { getUserStats } from '../api/callOwApi';
export default {
  components: {
    InputValue
  },
  data() {
    return {
      battletag: '',
      isLoading: false,
      userData: []
    };
  },
  methods: {
    async updateInput(input) {
      this.battletag=input
      this.userData = await this.doGetData(this.battletag)
      console.log(this.userData)
    },
    async doGetData (battletag) {
      let response
      try {
        this.isLoading = true
        response = await getUserStats(battletag)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }

      return response
    }    
  },
};
</script>

<style>
.header-card {
  background-color: #1976D2;
  text-align: center; 
}

.card {
  width: 50%;
}

/* .card-body {
  display: flex;
  justify-content: space-between;
} */

.text {
  font-weight: bold;
  font-size: 20px;
  margin-top: 18px;
  color: white;
}
</style>
