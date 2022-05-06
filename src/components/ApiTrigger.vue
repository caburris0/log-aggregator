<template>
  <div class='q-pa-md'>
    <div class="col button-div">
      <q-btn @click='handleClick' class='submit-button'>Click me to trigger</q-btn>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        console.log('emitting', 'triggered')
        this.$emit('input', 'triggered')
      }
    }
  }
</script>

<style lang="scss" scoped>

.select {
  height: 56px;
  width: 90%;
}

.button-div {
  display: flex;
  justify-content: center;
}

.submit-button {
  background-color: white;
  color: black;
  // height: 30px;
  padding: 40px 40px;
  border: 1px solid #C2C2C2;
}
</style>