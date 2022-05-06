<template>
  <div class='q-pa-md'>
    <div class="row">
      <div class="col">
        <p>What happened?</p>
        <input 
          type='text' 
          v-model='log.what' 
          class='input-field'
        />
      </div>
      <div class="col">
        <p>When did this happen?</p>
        <input 
          type='text' 
          v-model='log.when' 
          class='input-field'
        />
      </div>
      <div class="col">
        <p>How bad was it?</p>
          <q-select 
            outlined 
            v-model="log.severity" 
            class='select'
            :options="severities"
          />
      </div>      
    </div>
    <div class="col q-pt-lg button-div">
      <q-btn @click='handleClick' class='submit-button'>Submit Your Log</q-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        log: {
          what: '',
          when: '',
          severity: ''
        },
        severities: [
          'Debug',
          'Info',
          'Notice',
          'Warning',
          'Error',
          'Critical',
          'Alert',
          'Emergency'
        ]
      }
    },
    methods: {
      handleClick() {
        console.log('emitting', this.log)
        this.$emit('updateInput', this.log)
      }
    }
  }
</script>

<style lang="scss" scoped>

.input-field {
  height: 56px;
  width: 90%;
  border: 1px solid #C2C2C2;
  border-radius: 4px;
}

.select {
  height: 56px;
  width: 90%;
  // border: 1px solid #C2C2C2;
}

.button-div {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  background-color: white;
  color: black;
  height: 30px;
  border: 1px solid #C2C2C2;
}
</style>