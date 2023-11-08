<template>
    <div class="d-flex justify-content-between align-items-center mb-4">

        <div class="header-content d-flex align-items-center justify-content-center">
            <h4><i class="fa-solid fa-briefcase"></i></h4>
            <h3>{{ name_project }}</h3>
        </div>

        <div class="header-content d-flex align-items-center justify-content-center">

        <button class="btn-invite drop-custom">
            <i class="fa-solid fa-share"></i> SHARE
        </button>
        
        <button class="btn-invite invite drop-custom">
            <i class="fa-regular fa-bookmark"></i>
        </button>

        <div class="dropdown drop-custom">
            <button class="btn-invite dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>

        </div>

    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup(_, context) {
    const route = useRoute();
    const store = useStore();

    let name_project = ref("Your Project")

    if(route.params.project_id){
      name_project.value = store.getters.getProjectById(route.params.project_id).name;
    }

    watch(
      () => route.params.project_id,

      (newId) => {
        name_project.value = "#" + store.getters.getProjectById(newId).name;
      }
    );

    return {
      name_project
    };
  },
};
</script>

<style>
  .header-content{
    color: #fff;
    height: 40px;
  }

  .circle-box.project-box{
    margin-right: 0px;
  }

  .btn-invite{
    border: 1.5px solid var(--semiBlack);
    background-color: transparent;
    padding: 8px 16px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 8px;
    color: #fff;
  }

  .drop-custom .fa-bookmark{
    margin-right: 0;
  }

  .invite{
    margin: 0 10px;
  }

  .header-content .circle-box, .header-content .btn-invite, .header-content .drop-custom {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>