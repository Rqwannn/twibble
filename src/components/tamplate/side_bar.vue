<template>
    <div class="sidebar">

      <popup-new-team :isShow="showModal" @closeModal="showModal = false" />

      <div class="teams" style="flex: 3.2;">
        <div class="header-team">
            <p>Teams</p>
        </div>

        <ul class="team-list">

            <router-link v-for="items in list_of_team" :key="items.id" active-class="active" :to="{name:'Team', params: { team_id: items.id }}" :class="{ active: isActiveTeam(items.id) }">
                <li>
                    <div class="list-of-team">
                        <i class="fa-solid fa-briefcase"></i> {{items.name}}
                        <span class="float-end">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </div>
                    
                    <div class="list-of-project" :class="isProjectNotEmpty(items.id).length > 0 ? 'list-of-project-active' : ''">
                        <router-link v-for="result in isProjectNotEmpty(items.id)" :key="result.id" active-class="project-active" :to="{name:'Project', params: { team_id: items.id, project_id: result.id }}" :class="{ active: isActiveProject(result.id) }">
                            <img :src="figjam_default" alt="figjam"> {{ result.name }}
                        </router-link>
                    </div>

                </li>
            </router-link>
        </ul>

        <div class="create-new-teams">
            <span class="create-btn d-flex" @click="new_team()">
                <span class="float-end">
                    <i class="fa-solid fa-plus"></i>
                </span>
                CREATE NEW TEAMS
            </span>
        </div>

      </div>
  
      <div class="library" style="flex: 6.3;">
        <i class="fa-regular fa-bookmark"></i>
        <span>Library</span>
      </div>
  
      <div class="help-center d-flex align-items-center" style="flex: 0.5;">
        <i class="fa-regular fa-circle-question"></i>
        <span>Help Center</span>
      </div>
    </div>
  </template>

<script>

import { ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import figjam from "@/assets/image/core/figjam.png"
import PopupNewTeam from '@/components/utils/popup_new_team.vue';

export default {
props: {
    sidebarHeight: Number,
    team_id: String,
    project_id: {
        type: Boolean,
        default: null,
    },
    cekProjectExis: {
      type: Boolean,
      default: false,
    },
    list_of_team: Array,
},
components: {
    PopupNewTeam,
},
setup(_, context) {

    const route = useRoute();
    const store = useStore();

    const figjam_default = figjam
    const activeTeam = ref(_.team_id) ? ref(_.team_id) : null;
    const activeProject = ref(_.project_id) ? ref(_.project_id) : null;
    const listTeam = _.list_of_team ? _.list_of_team : null;
    const listProject = ref([])

    watch(
      () => route.params.team_id,

      (newId) => {
        listProject.value = isProjectNotEmpty(route.params.team_id)
        activeTeam.value = newId;

        context.emit('listProject', listProject.value);
      }
    );

    const isActiveTeam = (teamID) =>{
        return parseInt(activeTeam.value) === teamID;
    }

    const isActiveProject = (projectID) =>{
        return parseInt(activeProject.value) === projectID;
    }

    const isProjectNotEmpty = (ID) =>{
        listProject.value = []

        if(route.params.team_id == ID){
            let wrapper = store.getters.getProjectId(ID);
            listProject.value = wrapper ? wrapper : [];
        }

        return listProject.value;
    }

    watchEffect(() => {
      if(activeTeam.value){
          const getDataProject = store.getters.getProjectId(activeTeam.value)
          context.emit('listProject', getDataProject);
      }
    });


    const showModal = ref(false);

    const new_team = () => {
        showModal.value = true;
    }
        
    return {
        figjam_default,
        isActiveTeam,
        isActiveProject,
        isProjectNotEmpty,
        showModal,
        new_team,
        listTeam,
        listProject
    };
    
    }
};

</script>
  
<style>
    .sidebar {
        width: 360px;
        display: flex;
        flex-direction: column;
        border-right: 1.5px solid var(--semiBlack);
        background-color: var(--barColor);
        color: white;
    }

    .header-team{
        text-transform: uppercase;
    }

    .team-list .active {
        background-color: var(--semiOrange);
        color: var(--orange);
    }

    .team-list .active i{
        color: var(--orange);
    }

    .teams, .library, .help-center{
        padding: 20px 16px;
    }

    .teams{
        height: 300px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .library{
        height: 500px;
        overflow: hidden;
    }

    .teams, .library{
        border-bottom: 1.5px solid var(--semiBlack);
    }

    .team-list {
        list-style: none;
        padding: 0;
    }

    .team-list a{
        text-decoration: none;
    }

    .team-list a.active .list-of-team {
        background-color: var(--semiOrange);
        color: var(--orange);
    }

    .team-list a.active i{
        color: var(--orange);
    }

    .team-list a li div, .team-list a li a {
        color: #fff;
        border-radius: 7px;
        margin-bottom: 10px;
        padding: 10px;
        cursor: pointer;
    }

    .team-list a li i, .team-list a li img {
        margin-right: 5px;
        color: #fff;
    }

    .team-list a li i, .team-list a li img {
        margin-right: 5px;
        color: #fff;
    }

    .team-list a li .float-end i{
        border: 1px solid var(--semiBlack); 
        border-radius: 5px; 
        color: #fff;
        font-size: 12px;
        padding: 5px;
    }

    .team-list a .project-active{
        background-color: var(--semiBlack);
        color: #fff;
    }

    .team-list .project-active{
        background-color: var(--semiBlack);
        color: #fff;
    }

    .team-list .list-of-project {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        height: 0;
        overflow: hidden;
        transition: 0.7s;
    }

    .team-list .list-of-project-active {
        height: auto;
    }

    .team-list .list-of-project[style*="height: auto"] {
        height: auto;
    }

    .city {
        color: #777;
    }

    .create-btn {
        color: white;
        padding: 5px 10px;
        border-radius: 7px;
        cursor: pointer;
    }

    i {
        margin-right: 10px;
    }
</style>
  