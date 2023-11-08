import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import { entry_point_team } from '@/store/utils/entry_point_team'
import { entry_point_project } from '@/store/utils/entry_point_project'

const store = createStore({
  modules: {
    entry_point_team: entry_point_team,
    entry_point_project: entry_point_project,
  },

  plugins: [
    createPersistedState(
      {
        key: 'entry_point_team',
        storage: window.sessionStorage,
        paths: ['entry_point_team.js'],
      },
    ),
    createPersistedState(
      {
        key: 'entry_point_project',
        storage: window.sessionStorage,
        paths: ['entry_point_project'],
      }
    ),
  ],

});

export default store;
