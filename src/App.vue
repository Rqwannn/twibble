<style>

/* Utils CDN */

@import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css');

/* Font CDN */

@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');

</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import { nextTick, onMounted } from 'vue';
import "@/assets/css/core.css"
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"

export default {
  name: 'App',
  setup() {
    
    onMounted(() => {
      // Handle back button press
      window.onpopstate = function(event) {
        window.location.reload();
      };
    });

  }
}
</script>

<style>
  *{
    font-family: var(--rubikFont);
  }

  body{
    overflow: hidden;
  }
</style>