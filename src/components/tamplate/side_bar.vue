<template>
    <div class="sidebar">

      <div class="teams" style="flex: 3.2;">
        <div class="header-team">
            <p>Teams</p>
        </div>

        <ul class="team-list">

            <router-link active-class="active" :to="{name:'Team', params: { team_id: 0 }}" :class="{ active: isActiveTeam(0) }">
                <li>
                    <div class="list-of-team">
                        <i class="fa-solid fa-briefcase"></i> #Tim Saya
                        <span class="float-end">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </div>
                    
                    <div class="list-of-project" :class="isActiveTeam(0) ? 'list-of-project-active' : ''">
                        <div class="project-active">
                            <img :src="figjam_default" alt="figjam"> Industry Music
                        </div>
                        <div>
                            <img :src="figjam_default" alt="figjam"> Industry Music
                        </div>
                    </div>

                </li>
            </router-link>

            <li>
                <div class="cek-activate"> <!-- class="active" -->
                    <i class="fa-solid fa-briefcase"></i> #Tim Raqwan
                    <span class="float-end">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>

            </li>
            
            <router-link active-class="active" :to="{name:'Team', params: { team_id: 1 }}" :class="{ active: isActiveTeam(1) }">
                <li>
                    <div class="list-of-team">
                        <i class="fa-solid fa-briefcase"></i> #Tim Saya
                        <span class="float-end">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </div>
                    
                    <div class="list-of-project" :class="isActiveTeam(1) ? 'list-of-project-active' : ''">
                        <div class="project-active">
                            <img :src="figjam_default" alt="figjam"> Industry Music
                        </div>
                        <div>
                            <img :src="figjam_default" alt="figjam"> Industry Music
                        </div>
                    </div>

                </li>
            </router-link>

            <li>
                <div>
                    <i class="fa-solid fa-briefcase"></i> #Tim Saya 3
                    <span class="float-end">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>
            </li>
        </ul>

        <div class="create-new-teams">
            <span class="create-btn d-flex">
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

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import figjam from "@/assets/image/core/figjam.png"

export default {
props: {
    sidebarHeight: Number,
    team_id: String
},
setup(_, context) {

    const figjam_default = figjam
    const activeTeam = ref(_.team_id);
    const route = useRoute();

    watch(
      () => route.params.team_id,

      (newId) => {
        activeTeam.value = newId;
      }
    );


    const isActiveTeam = (teamName) =>{
        return parseInt(activeTeam.value) === teamName;
    }
        
    return {
        figjam_default,
        isActiveTeam,
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

    /* ------ */

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

    .team-list a li div {
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

    /* ------ */
    
    .team-list li div {
        color: #fff;
        border-radius: 7px;
        margin-bottom: 10px;
        padding: 10px;
        cursor: pointer;
    }

    .team-list li i, .team-list li img {
        margin-right: 5px;
        color: #fff;
    }

    .team-list li .float-end i{
        border: 1px solid var(--semiBlack); 
        border-radius: 5px; 
        color: #fff;
        font-size: 12px;
        padding: 5px;
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
  