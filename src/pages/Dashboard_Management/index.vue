<template>
  <div>      
    <new-team></new-team>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NewTeam from "@/components/dashboard_management/entry_point/new_team.vue"

export default {
props:{
  id: Number
},
components: {
  NewTeam
},
setup(_, context) {
  
    
}
};
</script>
