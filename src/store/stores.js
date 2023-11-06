import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import { entry_point_dashboard } from '@/store/utils/entry_point_dashboard'

const store = createStore({
  modules: {
    entry_point_dashboard: entry_point_dashboard,
  },

  plugins: [
    createPersistedState(
      {
        key: 'entry_point_dashboard',
        storage: window.sessionStorage,
        paths: ['entry_point_dashboard'],
      }
    ),
  ],

});

export default store;
