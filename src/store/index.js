import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').sort((a, b) => a.date > b.date)
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, taskDate) {
      state.tasks = state.tasks.filter((task) => task.date !== taskDate);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    checkTask(state, taskDate) {
      state.tasks = state.tasks.map((task) => {
        if (task.date === taskDate) {
          task.completed = !task.completed;
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    },
    deleteTask({commit}, taskDate) {
      commit('deleteTask', taskDate);
    },
    checkTask({commit}, taskDate) {
      commit('checkTask', taskDate);
    },
  },
  modules: {
  },
  getters: {
    tasks: state => state.tasks
  }
});
