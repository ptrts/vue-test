import Vue from 'vue';
import VueRouter from 'vue-router';
import ToDoList from '../views/ToDoList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'toDoList',
    component: ToDoList
  },
  {
    path: '/to-do-item/:id',
    name: 'toDoItem',
    component: () => import('../views/ToDoItem.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
