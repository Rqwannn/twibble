<template> 
    <!-- <popup-new-collaborator :isShow="true" @closeModal="showModal = false" /> -->
    
    <div>
      <nav-bar :team_id="team_id"></nav-bar>

      <div class="d-flex">
          <side-bar @listProject="receiveDataProject" :team_id="team_id" :project_id="project_id" :list_of_team="list_of_team" :style="{ height: sidebarHeight + 'px' }"></side-bar>

          <div class="project p-4 w-100">
            <header-on-project v-if="inProject"></header-on-project>
            <header-project v-else-if="inDashboard || inTeam"></header-project>
            
            <project-tabs v-if="inProject"></project-tabs>
            <team-tabs v-else-if="inDashboard || inTeam"></team-tabs>

            <project-content v-if="inProject"></project-content>
            <team-project :list_project="list_of_project" v-else-if="inTeam && !inDashboard"></team-project>
            <team-content v-else :list_of_team="list_of_team" :team_id="team_id"></team-content>
          </div>
          
      </div>
    </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

// import PopupNewCollaborator from '@/components/utils/popup_new_collaborator.vue';

import SideBar from "@/components/tamplate/side_bar.vue"
import NavBar from "@/components/tamplate/nav_bar.vue"

import HeaderProject from "@/components/dashboard_management/entry_point/header_project.vue"
import HeaderOnProject from "@/components/dashboard_management/entry_point/header_on_project.vue"
import TeamTabs from "@/components/dashboard_management/entry_point/team_tabs.vue"
import ProjectTabs from "@/components/dashboard_management/entry_point/project_tabs.vue"
import TeamContent from "@/components/dashboard_management/entry_point/team_content.vue"
import TeamProject from "@/components/dashboard_management/entry_point/team_project.vue"
import ProjectContent from "@/components/dashboard_management/entry_point/project_content.vue"

export default {
props:{
  team_id: String,
  project_id: String
},
components: {
    SideBar,
    NavBar,
    HeaderProject,
    HeaderOnProject,
    TeamTabs,
    ProjectTabs,
    TeamContent,
    TeamProject,
    ProjectContent,
    // PopupNewCollaborator
},
setup(_, context) {
  const team_id = _.team_id ? _.team_id : null;
  const project_id = _.project_id ? _.team_id : null;

  const store = useStore();
  const route = useRoute();

  const sidebarHeight = ref(0);
  const list_of_team = ref(store.getters.getTeams).value;
  const list_of_project = ref([])

  const inDashboard = ref(false);
  const inTeam = ref(false)
  const inProject = ref(false)

  inDashboard.value = route.path.includes("/") && route.path.length == 1;
  inTeam.value = route.path.includes("team")
  inProject.value = route.path.includes("project")

  watch(
    () => route.path,
    
    (value) => {
      inDashboard.value = value.includes("/") && value.length == 1;
      inTeam.value = value.includes("team")
      inProject.value = value.includes("project")
    }
  );

  let name_team = "#Your Team"

  const adjustSidebarHeight = () => {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
      sidebarHeight.value = window.innerHeight - navbarHeight;
  };

  onMounted(() => {
      adjustSidebarHeight();
      window.addEventListener('resize', adjustSidebarHeight);
  });

  onBeforeUnmount(() => {
      window.removeEventListener('resize', adjustSidebarHeight);
  });

  const receiveDataProject = (data) => {
    list_of_project.value = data;

    if(data.length == 0){
      inDashboard.value = true;
    } else {
      inDashboard.value = false;
    }
  };

  return {
      sidebarHeight,
      team_id,
      project_id,
      list_of_team,
      name_team,
      inDashboard,
      inTeam,
      inProject,
      receiveDataProject,
      list_of_project
  };
  
  }
};
</script>

<style>
  .project{
    background-color: var(--black);
  }

  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-toggle i {
    margin: 0;
  }
</style>