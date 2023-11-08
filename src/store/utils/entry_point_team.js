export const entry_point_team = {
  state() {
    return {
      teams: [],
    };
  },

  mutations: {
    addTeam(state, team) {
      state.teams.push(team);
    },
  },

  getters: {
    getTeams: (state) => state.teams,
    getTeamById: (state) => (id) => {
      return state.teams.find(team => team.id === id);
    }
  },

  actions: {
    // Action untuk menambah tim
    addTeam({ commit }, team) {
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
