<template>
  <div>      
    <project></project>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Project from "@/components/dashboard_management/entry_point/project.vue"

export default {
components: {
    Project
},
setup(_, context) {

    
    }
};
</script>
