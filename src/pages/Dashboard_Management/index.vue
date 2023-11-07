<template>
  <div>
      
    <nav-bar></nav-bar>

    <div class="d-flex">
        <side-bar :style="{ height: sidebarHeight + 'px' }"></side-bar>
        <project></project>
    </div>

  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Project from "@/components/dashboard_management/project.vue"

import SideBar from "@/components/tamplate/side_bar.vue"
import NavBar from "@/components/tamplate/nav_bar.vue"

export default {
components: {
    SideBar,
    NavBar,
    Project
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
