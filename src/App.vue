<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="hHh lpR fFf" class="container">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
      
      <q-tabs align="left">
        <q-route-tab to="/" label="Submit a Log" />
        <q-route-tab to="/aggregations" label="Aggregations" />
      </q-tabs>      
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style>

#app {
  max-width: 1280px;
  margin: 50px auto;
  /* margin-left: 620px; */
  font-weight: normal;
}

header {
  line-height: 1.5;
  /* max-height: 100vh; */
  height: 100px;
}

</style>
