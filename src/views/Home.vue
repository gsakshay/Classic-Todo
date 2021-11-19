<template>
  <div class="home">
    <h2 @click="goToAbout">HELLO WORLD</h2>
    <p>I am gonna build an awesome application</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {
  },
  methods: {
    goToAbout(){
      this.$router.push('about')
    }
  }
});
</script>
