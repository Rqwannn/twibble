<template>
    <div class="team-content">
        <div class="row">

          <div class="col-md-3">
            <div class="project-card">

              <div class="d-flex justify-content-center align-items-center">
                <div class="img-card">
                    <img :src="thumbnail_default2" alt="thumbnail" >
                </div>
              </div>

              <div class="description-card">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-card">
                            <p>Spotify Brand Filter</p>
                            <p>Tue, 17 Oct 2023</p>
                        </div>
                        <div class="dropdown drop-custom">
                            <button class="btn-invite dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis-v"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Open Project</a></li>
                                <li><a class="dropdown-item" href="#">Open in new Tab</a></li>
                                <li><a class="dropdown-item" href="#">Rename</a></li>
                                <li><a class="dropdown-item" href="#">Move Project</a></li>
                                <li><a class="dropdown-item" href="#">Bookmark</a></li>
                                <li><a class="dropdown-item" href="#">Duplicate</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
          </div>

          <div class="col-md-3">
            <div class="project-card">

              <div class="d-flex justify-content-center align-items-center">
                <div class="img-card">
                    <img :src="thumbnail_default" alt="thumbnail" >
                </div>
              </div>

              <div class="description-card">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-card">
                            <p>Virtual Studio</p>
                            <p>Tue, 4 Oct 2023</p>
                        </div>
                        <div class="dropdown drop-custom">
                            <button class="btn-invite dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis-v"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Open Project</a></li>
                                <li><a class="dropdown-item" href="#">Open in new Tab</a></li>
                                <li><a class="dropdown-item" href="#">Rename</a></li>
                                <li><a class="dropdown-item" href="#">Move Project</a></li>
                                <li><a class="dropdown-item" href="#">Bookmark</a></li>
                                <li><a class="dropdown-item" href="#">Duplicate</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
          </div>

        </div>
    </div>
</template>

<script>
import thumbnail from "@/assets/image/thumb1.png"
import thumbnail2 from "@/assets/image/thumb1.jpg"

export default {
setup(_, context) {
    const thumbnail_default = thumbnail
    const thumbnail_default2 = thumbnail2
        
    return {
        thumbnail_default,
        thumbnail_default2
    };
    
    }
};
</script>
  
<style scoped>
.project-card {
    border-radius: 10px;
    border: 1.5px solid var(--semiBlack);
    background-color: transparent;
    color: #fff;
    margin-bottom: 10px;
    padding: 0;
    cursor: pointer;
}

.img-card img{
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    max-height: 200px;
}

.project-card .card-text {
  font-weight: bold;
  margin-top: 10px;
}

.description-card{
    padding: 10px;
}

.text-card p:first-child{
    color: #fff;
    text-transform: uppercase;
}

.text-card p:last-child{
    color: #fff;
    color: var(--SemiGray);
}

.text-card p{
    margin: 0;
    font-size: 14px;
}

.description-card .btn-invite{
    padding: 6px 12px;
    border-radius: 6px;
}

</style>