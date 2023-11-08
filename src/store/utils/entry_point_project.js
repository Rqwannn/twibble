export const entry_point_project = {
  state() {
    return {
      project: [],
    };
  },

  mutations: {
    addProject(state, project) {
      state.project.push(project);
    },
  },

  getters: {
    getProject: (state) => state.project,
    getProjectId: (state) => (id_team) => {
      return state.project.filter(project => project.id_team === id_team);
    },
    getProjectById: (state) => (project_id) => {
      return state.project.find(project => project.id === project_id);
    }
  },

  actions: {
    async addProject({ commit }, project) {
      commit('addProject', project);
    },

  },
};
