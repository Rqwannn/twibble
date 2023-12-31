<template>
    <popup-new-collaborator :isShow="showModal" @closeModal="showModal = false" />

    <div v-show="isShow" class="custom-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">CREATE NEW TEAM</h5>
            <i @click="closeModal" class="fa-solid fa-xmark"></i>
          </div>
          <div class="modal-body">
            <p class="text-sm font-normal">
              Add a new team and start assigning projects to collaborate on.
            </p>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <input
                  :style="{ borderColor: borderColors }"
                  type="text"
                  v-model="team"
                  placeholder="Team Name"
                  required
                />
              </div>
              <div class="d-flex gap-3">
                <button @click="closeModal" type="button" class="btn custom-btn">
                  Cancel
                </button>
                <button class="btn custom-btn" :style="{ backgroundColor: bgColors }">
                   Add Team
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, watch } from 'vue';
  import { useStore } from 'vuex';
  import PopupNewCollaborator from '@/components/utils/popup_new_collaborator.vue';
  
  const prop = defineProps({
    isShow: {
      type: Boolean,
      default: false,
    },
  });
  
  const team = ref('');
  const store = useStore();

  function generateRandomTeamID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
  
  const closeModal = () => {
    team.value = '';
    emit('closeModal');
  };
  
  const emit = defineEmits(['closeModal']);

  const showModal = ref(false);
  const team_id = ref("")
  const show_collab = ref(false);

  const new_collab = () => {
    showModal.value = true;
    show_collab.value = true;
  }
  
  const submitForm = () => {
    const id_team = generateRandomTeamID(6); 
    const newTeam = {
      id: id_team,
      name: team.value,
    };
    store.dispatch('addTeam', newTeam);
    team_id.value = id_team;
    closeModal()
    new_collab()
  };

  const borderColors = ref("")
  const bgColors = ref("")

  watch(
      () => team.value,

      (value) => {
        borderColors.value = value.length > 0 ? "#EF6351" : "#404040"
        bgColors.value = value.length > 0 ? "#EF6351" : "#2B2B2B"
      }
    );

  </script>
  
  <style scoped>
  .custom-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }
  
  .modal-dialog {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    width: 350px;
  }

  .modal-title{
    font-weight: 400;
  }

  .modal-body{
    padding-top: 0;
  }

  .modal-body p {
    color: var(--SemiGray);
    font-size: 14px;
  }

  .modal-content{
    border: 0;
    background-color: var(--barColor);
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0;
    font-weight: bold;
  }
  
  .modal-header i {
    font-size: 20px;
    cursor: pointer;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    width: 100%;
    border: 1.5px solid var(--borderColor);
    background-color: var(--semiBlack);
    border-radius: 8px;
    outline: none;
    color: #fff;
    padding: 8px;
  }
  
  .btn {
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    cursor: pointer;
  }
  
  .custom-btn {
    width: 100%;
    border: 1.5px solid var(--borderColor);
    background-color: var(--barColor);
    color: #fff;
  }

  .custom-btn:nth-child(2) {
    width: 100%;
    border: 0;
    background-color: var(--semiBlack);
    color: #fff;
  }
  
  </style>
  