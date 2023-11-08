export const entry_point_team = {
  state() {
    return {
      teams: [],
    };
  },

  mutations: {
    // Buat mutation untuk menambah tim
    addTeam(state, team) {
      state.teams.push(team);
    },
  },

  getters: {
    // Getter untuk mendapatkan daftar tim
    getTeams: (state) => state.teams,
  },

  actions: {
    // Action untuk menambah tim
    async addTeam({ commit }, team) {
      commit('addTeam', team);
    },

  },
};

// import { useStore } from 'vuex';

// export default {
//   setup() {
//     const store = useStore();

//     const addNewTeam = () => {
//       const newTeam = {
//         id: 1, // Gantilah ini dengan ID tim yang sesuai
//         name: 'Tim Saya',
//       };
//       store.dispatch('addTeam', newTeam);
//     };

//     return {
//       addNewTeam,
//     };
//   },
// };
