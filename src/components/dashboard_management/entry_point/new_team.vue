<template> 

    <div>
      <nav-bar></nav-bar>

      <div class="d-flex">
          <side-bar :team_id="team_id" :project_id="project_id" :style="{ height: sidebarHeight + 'px' }"></side-bar>

          <div class="project p-4 w-100">
            <header-project></header-project>
            <!-- <project-tabs></project-tabs> -->
            <team-tabs></team-tabs>
            <!-- <team-project></team-project> -->
            <team-content></team-content>
            <!-- <project-content></project-content> -->
          </div>
          
      </div>
    </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import SideBar from "@/components/tamplate/side_bar.vue"
import NavBar from "@/components/tamplate/nav_bar.vue"

import HeaderProject from "@/components/dashboard_management/entry_point/header_project.vue"
import TeamTabs from "@/components/dashboard_management/entry_point/team_tabs.vue"
import ProjectTabs from "@/components/dashboard_management/entry_point/project_tabs.vue"
import TeamContent from "@/components/dashboard_management/entry_point/team_content.vue"
import TeamProject from "@/components/dashboard_management/entry_point/team_project.vue"
import ProjectContent from "@/components/dashboard_management/entry_point/project_content.vue"

export default {
props:{
  team_id: Number,
  project_id: Number
},
components: {
    SideBar,
    NavBar,
    HeaderProject,
    TeamTabs,
    ProjectTabs,
    TeamContent,
    TeamProject,
    ProjectContent
},
setup(_, context) {
  const team_id = _.team_id
  const project_id = _.project_id

  const sidebarHeight = ref(0);

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
      project_id
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