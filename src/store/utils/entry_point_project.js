export const entry_point_project = {
  state() {
    return {
      project: [],
    };
  },

  mutations: {
    // Buat mutation untuk menambah tim
    addProject(state, project) {
      state.project.push(project);
    },
  },

  getters: {
    // Getter untuk mendapatkan daftar tim
    getProject: (state) => state.project,
  },

  actions: {
    // Action untuk menambah tim
    async addProject({ commit }, project) {
      commit('addProject', project);
    },

  },
};
