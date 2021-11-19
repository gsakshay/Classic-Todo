<template>
    <div>
    <v-toolbar flat dense app dark>
    <v-app-bar-nav-icon class="green" @click="toggleDrawer"></v-app-bar-nav-icon>
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
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      bottom
      dark
      app
    >
      <v-list
        nav
        dense
        class="list-item"
      >
            <v-list-item v-for="link in links" :key="link.text" link router :to="link.route">
                <v-list-title-action>
                    <v-icon left class="green--text">{{link.icon}}</v-icon>
                </v-list-title-action>
                <v-list-title-content>
                    <v-list-tile-title class="green--text">{{link.text}}</v-list-tile-title>
                </v-list-title-content>
            </v-list-item>
     
      </v-list>
    </v-navigation-drawer>
 </div>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            links:[
                {
                    icon: 'mdi-view-dashboard',
                    text: 'Dashboard',
                    route: '/'
                },
                {
                    icon: 'mdi-semantic-web',
                    text: 'My projects',
                    route: '/projects'
                },
                {
                    icon: 'mdi-account-group',
                    text: 'Team',
                    route: '/team'
                }
            ]
        }
    },
    methods: {
        toggleDrawer(){
            this.drawer = !this.drawer
        },
    },
    
}
</script>

<style scoped>
.list-item{
    margin: 4rem 2rem;
}
</style>