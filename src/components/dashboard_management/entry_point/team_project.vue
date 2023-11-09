<template>
    <div class="team-content">
        <div class="row">

          <div v-for="items in listProject" :key="items.id" class="col-md-4">
            
            <div class="project-card">

              <div class="row thumbnail-project">
                <div class="col-md-6 card-space">
                    <div class="card card-project">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="img-card">
                                <img :src="thumbnail_default2" alt="thumbnail" >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 card-space">
                    <div class="card">
                        
                    </div>
                </div>
                <div class="col-md-6 card-space">
                    <div class="card">
                        
                    </div>
                </div>
                <div class="col-md-6 card-space">
                    <div class="card">
                        
                    </div>
                </div>
              </div>

              <div class="description-card">
                    <div class="d-flex align-items-center">
                        <div class="text-card">
                            <p>{{ items.name }}</p>
                            <div class="d-flex align-items-center info">
                                <p>2 Files</p> <li>Updated 20 Minutes</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>

        </div>
    </div>
</template>

<script>
import { ref, toRefs } from 'vue';
import thumbnail from "@/assets/image/thumb1.png"
import thumbnail2 from "@/assets/image/thumb1.jpg"

export default {
props:{
    list_project: Array,
},
setup(_, context) {
    const { list_project } = toRefs(_);
    const thumbnail_default = thumbnail
    const thumbnail_default2 = thumbnail2
    const listProject = ref(list_project)

    // watch(
    //   () => listProject,

    //   (value) => {
    //     listProject.value = isProjectNotEmpty(route.params.team_id)
    //     activeTeam.value = newId;

    //     context.emit('listProject', listProject.value);
    //   }
    // );

    return {
        thumbnail_default,
        thumbnail_default2,
        listProject
    };
    
    }
};
</script>
  
<style scoped>
.project-card {
    overflow: hidden;
    border-radius: 10px;
    border: 1.5px solid var(--semiBlack);
    background-color: transparent;
    color: #fff;
    margin-bottom: 10px;
    cursor: pointer;
}

.img-card img{
    width: 100%;
    max-height: 300px;
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

.text-card .info p, .text-card .info{
    color: var(--SemiGray);
    font-size: 14px;
}

.text-card .info li{
    padding-left: 0;
    list-style-type: disc;
}
.text-card .info p{
    margin-right: 10px;
}

.description-card .btn-invite{
    padding: 6px 12px;
    border-radius: 6px;
}

.card {
    overflow: hidden;
    border-radius: 7px;
    border: 1.5px dashed var(--semiBlack);
    background-color: transparent;
    min-height: 0;
    height: 110px;
    color: #fff;
    cursor: pointer;
}

.card.card-project{
    border: 1.5px solid var(--semiBlack);
}

.card-space{
    margin-bottom: 10px;
    padding: 0 5px;
}

.img-card img{
    width: 100%;
    max-height: 130px;
}

.thumbnail-project{
    padding: 10px 15px;
    border-bottom: 1px solid var(--semiBlack);
}

</style>