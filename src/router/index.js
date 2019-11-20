import Vue from 'vue';
import VueRouter from 'vue-router';
import ToDoList from './../views/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'toDoList',
    component: ToDoList
  },
  {
    path: '/page/:page',
    name: 'toDoListPage',
    component: ToDoList
  },
  {
    path: '/edit-to-do/:id',
    name: 'toDoItem',
    component: () => import('../views/EditToDo')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
