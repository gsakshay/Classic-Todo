<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="ma-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar';

export default Vue.extend({
  name: 'App',
  components: {
    'nav-bar': Navbar
  },
  data: () => ({
    //
  }),
});
</script>
