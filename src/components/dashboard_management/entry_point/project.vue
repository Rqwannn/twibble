<template> 

    <div>
      <nav-bar></nav-bar>

      <div class="d-flex">
          <side-bar :style="{ height: sidebarHeight + 'px' }"></side-bar>

          <div class="project p-4 w-100">
            <header-project></header-project>
            <new-team-tabs></new-team-tabs>
          </div>
          
      </div>
    </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import SideBar from "@/components/tamplate/side_bar.vue"
import NavBar from "@/components/tamplate/nav_bar.vue"

import HeaderProject from "@/components/dashboard_management/entry_point/header_project.vue"
import NewTeamTabs from "@/components/dashboard_management/entry_point/new_team_tabs.vue"

export default {
components: {
    SideBar,
    NavBar,
    HeaderProject,
    NewTeamTabs
},
setup(_, context) {

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
        sidebarHeight
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