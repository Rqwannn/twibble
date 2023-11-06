import { createApp } from 'vue';
import App from '@/App.vue';

import router from "@/router/routes";
import store from '@/store/stores';

const app = createApp(App)

app.use(router).use(store).mount('#app')