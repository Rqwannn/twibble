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
    addTeam({ commit }, team) {
      commit('addTeam', team);
    },

  },
};
