<template>
    <div>
    <v-app-bar text dense app dark>
    <v-app-bar-nav-icon offset class="green" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title floating>
          <span class="grey--text">To</span>
          <span class="green--text">Do</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="blue dark">
          <span>Log in</span>
      </v-btn>
      <v-btn class="orange">
          <span>Log out</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      bottom
      dark
      app
    >
    <v-layout column align-center class="ma-2">
        <v-flex class="mt-5">
            <v-avatar size="100">
                <img src="https://picsum.photos/200/300" alt="sample">
            </v-avatar>
            <p class="white--text subheading text-center">
                Akshay GS
            </p>
        </v-flex>
        <v-flex class="my-4 ">
            <Popup />
        </v-flex> 
    </v-layout>
      <v-list
        nav
        dense
        class="ma-3"
      >
            <v-list-item v-for="link in links" :key="link.text" link router :to="link.route">
                <v-list-item-action>
                    <v-icon left class="green--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="green--text">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <!-- <div>
                {{links}}
            </div> -->

            <!-- <v-list-item>
                <v-list-item-action>
                    <v-icon left class="green--text">mdi-calendar</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="green--text">Some text</v-list-item-title>
                </v-list-item-content>
            </v-list-item> -->
     
      </v-list>
    </v-navigation-drawer>
 </div>
</template>

<script>

import Popup from "./Popup.vue" 

export default {
    components:{
        Popup
    },
    data(){
        return{
            drawer: false,
        }
    },
    computed: {
        links() {
            return this.$store.state.todo.links
        }
    },
}

</script>

<style scoped>
</style>