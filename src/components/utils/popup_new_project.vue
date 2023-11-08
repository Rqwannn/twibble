<template>
    <div v-show="isShow" class="custom-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">CREATE NEW PROJECT</h5>
            <i @click="closeModal" class="fa-solid fa-xmark"></i>
          </div>
          <div class="modal-body">
            <p class="text-sm font-normal">
                Set the project name below and add selected projects to it.
            </p>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <input
                  type="text"
                  v-model="project"
                  placeholder="Project Name"
                  required
                />
              </div>
              <div class="d-flex gap-3">
                <button @click="closeModal" type="button" class="btn custom-btn">
                  Cancel
                </button>
                <button type="submit" class="btn custom-btn">
                  <slot name="icon"></slot> Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const prop = defineProps({
    isShow: {
      type: Boolean,
      default: false,
    },
  });
  
  const project = ref('');
  
  const closeModal = () => {
    project.value = ''; // Mengosongkan input email saat modal ditutup
    emit('closeModal');
  };
  
  const emit = defineEmits(['closeModal']);
  
  const submitForm = () => {
    // Lakukan apa pun yang perlu dilakukan saat form disubmit
  };
  
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
  