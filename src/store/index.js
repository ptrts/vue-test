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
    changeTitle(state, editData) {
      console.log('changeTitle', editData);
      state.tasks = state.tasks.map((task) => {
        if (task.date === editData.date) {
          task.title = editData.title;
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
    changeTitle({commit}, editData) {
      commit('changeTitle', editData);
    },
  },
  modules: {
  },
  getters: {
    tasks: state => state.tasks,
    getTask: state => date => {
      return state.tasks.find(task => String(task.date) === date) || false;
    }
  }
});
