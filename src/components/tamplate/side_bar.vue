<template>
    <div class="sidebar">

      <div class="teams" style="flex: 3.2;">
        <div class="header-team">
            <p>Teams</p>
        </div>

        <ul class="team-list">
            <li>
                <div class="active">
                    <i class="fa-solid fa-briefcase"></i> #Tim Saya
                    <span class="float-end">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>
            </li>
            <li>
                <div>
                    <i class="fa-solid fa-briefcase"></i> #Tim Saya 2
                    <span class="float-end">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>
            </li>
            <li>
                <div>
                    <i class="fa-solid fa-briefcase"></i> #Tim Saya 3
                    <span class="float-end">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>
            </li>
        </ul>

        <div class="create-new-teams">
            <span class="create-btn d-flex">
                <span class="float-end">
                    <i class="fa-solid fa-plus" style="border: 1px solid gray; border-radius: 5px; padding: 2px;"></i>
                </span>
                CREATE NEW TEAMS
            </span>
        </div>

      </div>
  
      <div class="library" style="flex: 6.3;">
        <i class="fa-regular fa-bookmark"></i>
        <span>Library</span>
      </div>
  
      <div class="help-center d-flex align-items-center" style="flex: 0.5;">
        <i class="fa-regular fa-circle-question"></i>
        <span>Help Center</span>
      </div>
    </div>
  </template>

<script>

export default {
props: {
    sidebarHeight: Number,
},
setup(_, context) {

        
    return {
    };
    
    }
};

</script>
  
<style>
    .sidebar {
        width: 360px;
        display: flex;
        flex-direction: column;
        border-right: 1.5px solid var(--semiBlack);
        background-color: var(--barColor);
        color: white;
    }

    .header-team{
        text-transform: uppercase;
    }

    .team-list .active {
        background-color: var(--semiOrange);
        color: var(--orange);
    }

    .team-list .active i{
        color: var(--orange);
    }

    .teams, .library, .help-center{
        padding: 20px 16px;
    }

    .teams{
        height: 300px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .library{
        height: 500px;
        overflow: hidden;
    }

    .teams, .library{
        border-bottom: 1.5px solid var(--semiBlack);
    }

    .team-list {
        list-style: none;
        padding: 0;
    }

    .team-list li div {
        color: #fff;
        border-radius: 7px;
        margin-bottom: 10px;
        padding: 10px;
    }

    .team-list li i {
        margin-right: 5px;
        color: #fff;
    }

    .team-list li .float-end i{
        border: 1px solid var(--semiBlack); 
        border-radius: 5px; 
        color: #fff;
        font-size: 12px;
        padding: 5px;
    }

    .city {
        color: #777;
    }

    .create-btn {
        color: white;
        padding: 5px 10px;
        border-radius: 7px;
        cursor: pointer;
    }

    i {
        margin-right: 10px;
    }
</style>
  