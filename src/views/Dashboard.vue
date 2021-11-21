<template>
<div class="dashboard">
  <h1 class="subjeading orange--text">Dashboard</h1>
  <v-container class="my-5">

    <v-layout row justify-center class="mb-3">
      <v-btn small text color="green" class="mx-3" @click="sortBy('title')">
        <v-icon left small>mdi-semantic-web</v-icon>
        <span class="caption text-lowercase">By project name</span>
      </v-btn>
      <v-btn small text color="green" class="mx-3" @click="sortBy('person')">
        <v-icon left small>mdi-account</v-icon>
        <span class="caption text-lowercase">By Person</span>
      </v-btn>
    </v-layout>

    <v-card class="pa-4 my-2" v-for="project in projects" :key="project.title">
      <v-layout row wrap justify-space-around :class="`pa-2 project ${project.status}`">
        <v-flex xs12 md6>
          <div class="caption green--text">
            Project title
          </div>
          <div>{{project.title}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption green--text">
            Person
          </div>
          <div>{{project.person}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption green--text">
            Due date
          </div>
          <div>
            {{project.due}}
          </div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="right">
            <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
          </div>
        </v-flex>
      </v-layout>
    </v-card>

    <!-- <v-card class="pa-4 my-2">
      <v-layout row wrap justify-space-around :class="`pa-2 project`">
        <v-flex xs12 md6>
          <div class="caption green--text">
            Project title
          </div>
          <div>Project title</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption green--text">
            Person
          </div>
          <div>Team member</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption green--text">
            Due date
          </div>
          <div>
            11/10/2025
          </div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="right">
            <v-chip small :class="` white--text caption my-2`">Ongoing</v-chip>
          </div>
        </v-flex>
      </v-layout>
    </v-card> -->
  </v-container>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Dashboard',
    components: {
    },
    data(){
      return{
      }
    },
    computed: {
      projects(){
        return this.$store.state.todo.projects;
      }
    },
    methods: {
      sortBy(prop: string){
        this.projects.sort((a:any, b:any)=>a[prop] > b[prop] ? 1: -1);
      },
     
    }
  })
</script>

<style scoped>
.project.complete{
  border-left: 4px solid green;
}
.project.ongoing{
  border-left: 4px solid purple;
}
.project.overdue{
  border-left: 4px solid orange;
}
.v-chip.complete{
  background: green !important;
}
.v-chip.ongoing{
  background: purple !important;
}
.v-chip.overdue{
  background: orange !important;
}
</style>