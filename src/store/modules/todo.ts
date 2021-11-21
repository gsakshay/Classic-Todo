import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import {Link, Project, Team, TodoState} from '@/store/types'

const defaultState = (): TodoState => {
    return {
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
    ],
    projects: [
        { title: 'Solve bugs', person: 'Abhi', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Add a new conponent', person: 'Abhi', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Learn pre req', person: 'Akshay', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Understand code', person: 'akshay', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ],
    team: [
        { name: 'Abhi', role: 'Web and android dev' },
        { name: 'Akshay', role: 'Web developer' },
    ]
    }
}

const state = defaultState()

const getters: GetterTree<TodoState, any> = {
    myProjects: (state) => state.projects.filter((project: Project)=>project.person.toLowerCase() === 'akshay')
}

const actions: ActionTree<TodoState, any> = {
    addNewProject(context, project: Project) {
      context.commit('ADD_PROJECT', project)
    }
}

const mutations: MutationTree<TodoState> = {
    ADD_PROJECT(state, project: Project){
      console.log(project, "Here")
      state.projects.push(project)
    }
}

const todoStore: Module<TodoState, any> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default todoStore;