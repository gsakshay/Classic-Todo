<template>
    <div class="projects">
  <h1 class="subjeading orange--text">Projects</h1>
  <v-container class="ma-5">
    
    <v-expansion-panels v-for="project in myProjects" :key="project.title">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <p class="text-uppercase">{{project.title}}</p>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="px-4 green--text">
        <div class="font-weight-bold orange--text">
          {{project.due}}
        </div>
        {{project.content}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-container>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Project} from "@/store/types"

export default Vue.extend({
  data(){
    return{
    }
  },
  computed: {
    myProjects(): Project[]{
      console.log(this.$store.getters["todo/myProjects"])
      return this.$store.getters["todo/myProjects"]
    }
  }
})
</script>