<template>
    <div class="sidebar">

      <div class="teams" style="flex: 3;">
        <div class="header-team">
            <p>Teams</p>
        </div>

        <ul class="team-list">
            <li style="background-color: orange;">
                <i class="fa-solid fa-briefcase" style="margin-right: 5px;"></i> Tim Saya
                <span class="float-end">
                    <i class="fa-solid fa-plus" style="border: 1px solid gray; border-radius: 5px; padding: 2px;"></i>
                </span>
            </li>
          <li>Nama Tim 1</li>
          <li>Nama Tim 2</li>
          <li>Nama Tim 3</li>
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
  
      <div class="library" style="flex: 5;">
        <i class="fa-regular fa-bookmark"></i>
        <span>Library</span>
      </div>
  
      <div class="help-center" style="flex: 2;">
        <i class="fa-regular fa-circle-question"></i>
        <span>Help Center</span>
      </div>
    </div>
  </template>
  
<style>
    .teams, .library, .help-center{
        padding: 20px 16px;
    }

    .sidebar {
        width: 280px;
        height: calc(100vh - );
        display: flex;
        flex-direction: column;
        background-color: #1E1E1E;
        color: white;
    }

    .header-team{
        text-transform: uppercase;
    }

    .team-list {
        list-style: none;
        padding: 0;
    }

    .team-list li {
        margin: 0;
        padding: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .create-new-teams {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .city {
        color: #777;
    }

    .create-btn {
        background-color: #007BFF;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .library,
    .help-center {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    i {
        margin-right: 10px;
    }
</style>
  