<template>
    <div class="d-flex justify-content-between align-items-center mb-4">

        <div class="header-content d-flex align-items-center justify-content-center">
            <h4><i class="fa-solid fa-briefcase"></i></h4>
            <h3>#Team Twibble</h3>
        </div>

        <div class="header-content d-flex align-items-center justify-content-center">

        <div class="circle-box project-box drop-custom">
            <div class="circle-text">AR</div>
        </div>

        <button class="btn-invite invite drop-custom">
            <i class="fa-solid fa-user-plus"></i> INVITE
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