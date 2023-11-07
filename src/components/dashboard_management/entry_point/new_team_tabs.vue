<template>

<div class="d-flex justify-content-between align-items-center new-team-tabs">
    <div class="left">
        LAST VIEWED <i class="fa-solid fa-chevron-down"></i>
    </div>
    
    <div class="right d-flex justify-content-between align-items-center">
        <div class="vector vector_1 d-flex justify-content-center align-items-center">
            <img :src="vector_1" alt="Vector 1" />
        </div>
        <div class="vector vector_2 d-flex justify-content-center align-items-center">
            <img :src="vector_2" alt="Vector 2" />
        </div>
    </div>

</div>

</template>

<script>
import vector1 from "@/assets/image/core/header_tabs_vect1.svg"
import vector2 from "@/assets/image/core/header_tabs_vect2.svg"

export default {
setup(_, context) {

    const vector_1 = vector1
    const vector_2 = vector2
        
    return {
        vector_1,
        vector_2
    };
    
    }
};

</script>

<style scoped>
.new-team-tabs{
    padding-bottom: 10px;
    border-bottom: 1px solid var(--semiBlack);
    width: 100%;
}

.left {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: var(--semiBlack);
}

.left i{
    margin-left: 7px;
    cursor: pointer;
}

.right {
    border-radius: 7px;
    border: 1px solid var(--semiBlack);
    display: flex;
}

.vector {
    cursor: pointer;
}

.vector.vector_2{
    margin: 0 10px;
}

.vector.vector_1 {
    margin: 4px;
    width: 30px;
    height: 30px;
    padding: 3px;
    border-radius: 7px;
    background-color: var(--semiBlack);
}
</style>
  