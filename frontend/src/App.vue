<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-icon size="50" color="secondary">mdi-magnify</v-icon>
      <h2 class="secondary--text">CEP Finder</h2>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height">
        <v-row class="fill-height" justify="center" align-content="center">
          <v-col cols="5">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  })
})
</script>
<style>
.alert-title, .alert-button {
  color: #00517C !important;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.alert-button {
  color: white !important;
}

</style>
