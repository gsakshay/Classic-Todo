<template>
    <div class="team">
  <h1 class="subjeading orange--text">Team</h1>

  <v-container class="my-5">
    <v-layout>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card
          class="mx-auto text-center"
          outlined
          
        >
          <v-responsive class="pt4">
            <v-avatar size="100" class="green lighten-2">
              <img src="https://picsum.photos/200/300" :alt="person.name">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <strong class="subheading">
              {{person.name}}
            </strong>
            <div class="green--text">
              {{person.role}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              rounded
              text
            >
              <v-icon small left>
                mdi-android-messages
              </v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</div>
</template>

<script lang="ts">
import {Team} from "@/store/types"

export default {
  data(){
    return{
    }
  },
  computed: {
    team(): Team[]{
      return this.$store.state.todo.team
    }
  }
}
</script>