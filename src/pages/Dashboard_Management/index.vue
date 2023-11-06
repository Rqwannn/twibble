<template>
  <div>
      
    <nav-bar></nav-bar>

    <div class="d-flex">
        <side-bar></side-bar>
        <!-- <new-team-content></new-team-content> -->
    </div>

  </div>
</template>

<script>

import SideBar from "@/components/tamplate/side_bar.vue"
import NavBar from "@/components/tamplate/nav_bar.vue"

export default {
components: {
    SideBar,
    NavBar,
},
setup(_, context) {
        
    return {

    };
    
    }
};
</script>
