<template>
    <nav class="navbar navbar-dark">
      <div class="d-flex justify-content-between align-items-center custom-content">

        <div class="d-flex">
            <img :src="logo_default" alt="Tribble_Logo">

            <div class="input-group">
                <span class="input-group-text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                type="text"
                placeholder="Search"
                >
            </div>
        </div>
        
        <div class="d-flex align-items-center">
            <button class="btn-project"><i class="fa-solid fa-plus"></i> New Project</button>
            <div class="vertical-line"></div>

            <div class="circle-box">
                <div class="circle-text">AR</div>
            </div>

            <div class="user-info">
                <div class="user-name">
                    <p>Palestina</p>
                    <i class="fa-solid fa-chevron-down ml-3"></i>
                </div>
                <p class="user-email">palestina@gmail.com</p>
            </div>

        </div>

      </div>
    </nav>
  </template>

<script>

import logo_path from "@/assets/image/core/logo.png"

export default {
setup(_, context) {

    const logo_default = logo_path
        
    return {
        logo_default
    };
    
    }
};

</script>
  
<style>

    nav.navbar{
        background-color: var(--barColor); 
        border-bottom: 1.5px solid var(--semiBlack);
    }

    nav.navbar .custom-content{
        width: 100vw;
        padding: 0 16px;
    }

    .btn-project{
        margin: 0;
        border: 0;
        padding: 8px 16px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        background-color: var(--orange);
        border-radius: 8px;
        color: #fff;
    }

    .btn-project i{
        margin-right: 5px;
    }

    .vertical-line {
        border-left: 1px solid var(--semiBlack);
        height: 30px;
        margin: 0 15px;
    }

    .user-info {
        color: white;
    }

    .user-name {
        display: flex;
        align-items: center;
    }

    .user-name i {
        margin-left: 5px;
        cursor: pointer;
    }

    .user-name p {
        margin: 0;
    }

    .user-email {
        margin: 0;
        color: var(--SemiGray);
    }

    .input-group{
        border: 1.5px solid var(--SemiGray);
        margin-left: 9.6rem;
        border-radius: 7px;
        overflow: hidden;
    }

    .input-group input{
        background-color: var(--semiBlack); 
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
    }

    .input-group input::placeholder{
        color: var(--Gray);
    }

    .input-group-text{
        background-color: var(--semiBlack); 
        border: none;
    }

    .input-group-text i {
        margin: 0;
        color: var(--Gray); 
    }
</style>
  