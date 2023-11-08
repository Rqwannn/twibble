<template> 
    <!-- <popup-new-collaborator :isShow="true" @closeModal="showModal = false" /> -->
    
    <div>
      <nav-bar></nav-bar>

      <div class="d-flex">
          <side-bar @cekProjectExis="cekProjectExis = false" :team_id="team_id" :project_id="project_id" :list_of_team="list_of_team" :style="{ height: sidebarHeight + 'px' }"></side-bar>

          <div class="project p-4 w-100">
            <header-project></header-project>
            <!-- <header-on-project></header-on-project> -->
            
            <project-tabs v-if="cekProjectExis"></project-tabs>
            <team-tabs v-if="!cekProjectExis"></team-tabs>

            <team-project v-if="cekTeamExis && cekProjectExis && onTeamSide"></team-project>
            <project-content v-else-if="cekProjectExis"></project-content>
            <team-content v-else :list_of_team="list_of_team" :team_id="team_id"></team-content>
          </div>
          
      </div>
    </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useStore } from 'vuex';

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

  const cekTeamExis = ref(false);
  const cekProjectExis = ref(false);
  const onTeamSide = ref(false);

  const store = useStore();
  const sidebarHeight = ref(0);
  const list_of_team = ref(store.getters.getTeams).value;

  if(list_of_team.length > 0) {
    cekTeamExis.value = true
  }

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
      
  return {
      sidebarHeight,
      team_id,
      project_id,
      list_of_team,
      name_team,
      cekTeamExis,
      cekProjectExis,
      onTeamSide
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