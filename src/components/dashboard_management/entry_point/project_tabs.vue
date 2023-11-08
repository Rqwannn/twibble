<template>

    <div class="d-flex justify-content-between align-items-center new-team-tabs mb-4 position-relative">
        <div class="left d-flex justify-content-center align-items-center">
            <div class="active-bagan">RECENT</div>
            <div>DELETE</div>
        </div>
        
        <div class="d-flex justify-content-between align-items-center">

            <div class="last_viewed">
                LAST VIEWED <i class="fa-solid fa-chevron-down"></i>
            </div>

            <div class="right">
                <div class="vector vector_1 d-flex justify-content-center align-items-center">
                    <img :src="vector_1" alt="Vector 1" />
                </div>
                <div class="vector vector_2 d-flex justify-content-center align-items-center">
                    <img :src="vector_2" alt="Vector 2" />
                </div>
            </div>

        </div>
    
    </div>
    
    </template>
    
    <script>
    import vector1 from "@/assets/image/core/header_tabs_vect1.svg"
    import vector2 from "@/assets/image/core/header_tabs_vect2.svg"
    
    export default {
    setup(_, context) {
        const recent_active = true
        const delete_active = false
    
        const vector_1 = vector1
        const vector_2 = vector2
            
        return {
            vector_1,
            vector_2,
            recent_active,
            delete_active
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
    
    .last_viewed {
        display: flex;
        align-items: center;
        color: var(--SemiGray);
    }
    
    .last_viewed i{
        margin-left: 7px;
        margin-right: 20px;
        cursor: pointer;
    }

    .left div {
        color: var(--SemiGray);
        margin-right: 10px;
    }

    .left .active-bagan{
        color: var(--orange);
    }

    .left .active-bagan::after{
        content: "";
        width: 60px;
        height: 1px;
        display: block;
        position: absolute;
        left: 0;
        bottom: -1px;
        background-color: var(--orange);
        z-index: 10;
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
      