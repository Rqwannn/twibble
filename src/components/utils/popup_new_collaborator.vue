<template>
    <div v-show="isShow" class="custom-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">ADD YOUR COLLABORATORS</h5>
            <i @click="closeModal" class="fa-solid fa-xmark"></i>
          </div>
          <div class="modal-body">
            <p class="text-sm font-normal">
                Invite now or you can update user permission on the team later on.
            </p>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <P>Email</P>
                <input
                  type="text"
                  v-model="team"
                  placeholder="Team Name"
                  required
                />
              </div>
              <div class="content-collaborators d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">   
                    <div class="circle-box">
                        <div class="circle-text">AR</div>
                    </div>
                    <div class="user-info">
                        <div>Palestina</div>
                        <div class="user-email">palestina@gmail.com</div>
                    </div>
                </div>
                
                <div>
                    <select class="btn custom-btn">
                        <option>Owner</option>
                        <option>Editor</option>
                        <option>View</option>
                    </select>
                </div>

              </div>

              <div class="d-flex gap-3">
                <button @click="closeModal" type="button" class="btn custom-btn">
                  Skip For Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const prop = defineProps({
    isShow: {
      type: Boolean,
      default: false,
    },
  });

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
    width: 500px;
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

  .custom-modal form div p {
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
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
    width: 150px;
    font-size: 14px;
    border: 1.5px solid var(--borderColor);
    background-color: var(--barColor);
    color: var(--orange);
  }

  select.custom-btn{
    width: 100px;
  }

  .custom-btn:nth-child(2) {
    width: 100%;
    border: 0;
    background-color: var(--semiBlack);
    color: #fff;
  }

  .content-collaborators{
    border-top: 1.5px solid var(--borderColor);
    border-bottom: 1.5px solid var(--borderColor);
    margin-bottom: 20px;
    padding: 10px 0;
  }

  .circle-box{
    margin-right: 10px;
  }
  
  </style>
  