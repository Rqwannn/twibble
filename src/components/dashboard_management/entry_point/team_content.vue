<template>
    <div class="team-content">
       <popup-new-project :team_id="team_id" :isShow="showModal" @closeModal="showModal = false" />

        <div class="row">

        <div class="col-md-3">
            <div class="card" @click="new_project()">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <i class="fa-solid fa-plus"></i>
                <p class="card-text">ADD NEW PROJECT</p>
              </div>
            </div>
          </div>

        </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import PopupNewProject from '@/components/utils/popup_new_project.vue';

export default {
  props: {
    team_id: String,
    list_of_team: Array
  },
  components: {
    PopupNewProject,
  },
  setup(_, context) {

    const showModal = ref(false);
    const team_id = _.team_id

    const new_project = () => {
        if(_.list_of_team.length > 0){
          showModal.value = true;
        }  else {
          alert("Mohon Maaf Untuk Buat Team Terlebih Dahulu")
        }
    }

    return {
      showModal,
      team_id,
      new_project
    };
  },
};

</script>
  
<style scoped>
.card {
  border-radius: 7px;
  border: 1.5px dashed var(--semiBlack);
  background-color: transparent;
  min-height: 0;
  padding: 45px 0;
  color: #fff;
  cursor: pointer;
}

.card-body {
  text-align: center;
  padding: 20px;
}

.card-text {
  font-weight: bold;
  margin-top: 10px;
}
</style>