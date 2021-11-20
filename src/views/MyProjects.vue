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

interface project {
  title: string,
  person: string,
  due: string,
  status: string,
  content: string,
}

export default Vue.extend({
  data(){
    return{
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter((project: any) => project.person === 'Ryu')
    }
  }
})
</script>