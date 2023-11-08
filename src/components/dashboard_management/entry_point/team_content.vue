<template>
    <div class="team-content">
        <div class="row">

        <div class="col-md-3">
            <div @click="new_team()" class="card">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <i class="fa-solid fa-plus"></i>
                <p class="card-text">ADD NEW PROJECT</p>
              </div>
            </div>
          </div>

        </div>

        <popup-new-team :isShow="showModal" @closeModal="showModal = false" />
    </div>
</template>

<script>
import { ref } from 'vue';
import PopupNewTeam from '@/components/utils/popup_new_team.vue';

export default {
  components: {
    PopupNewTeam,
  },
  setup() {
    const showModal = ref(false);

    const new_team = () => {
      showModal.value = true; // Menampilkan modal saat tombol diklik
    }

    return {
      showModal,
      new_team,
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