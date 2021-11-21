<template>
<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="orange"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2 text-center">
          Add Project
        </v-card-title>
          <v-spacer></v-spacer>

        <v-card-text class="my-3">
            <v-form class="px-3">
                <v-text-field prepend-icon="mdi-semantic-web" label="Title" v-model="title">
                </v-text-field>
                <v-textarea
                prepend-icon="mdi-fountain-pen-tip"
                label="Information"
                auto-grow
                v-model="content"
                ></v-textarea>
                <v-spacer></v-spacer>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="due"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="due"
                        label="Due"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="due"
                    no-title
                    scrollable
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="saveDate(due)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
            
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="addProject"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions} from 'vuex';

export default Vue.extend({
    data () {
      return {
        dialog: false,
        title: '',
        content: '',
        due: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
      }
    },
    methods: {
        ...mapActions([
            'addNewProject'
        ]),
        saveDate(due: any){
          this.due = due;
        },
        addProject(){
          this.menu = false;
          this.dialog = false;
          this.$store.commit("todo/ADD_PROJECT", {
            title: this.title,
            content: this.content,
            due: this.due,
            person: 'Akshay',
            status: 'ongoing'
          })
        }
        // addNewProject(){
        //   console.log({
        //     title: this.title,
        //     content: this.content,
        //     due: this.due,
        //     person: 'Akshay',
        //     status: 'ongoing'
        //   })
        // }
    }
})
</script>