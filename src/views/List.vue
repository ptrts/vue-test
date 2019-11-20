<template>
  <b-container>
    <b-row class="justify-content-md-center p-2">
      <h4>Tasks</h4>
    </b-row>
    <b-row class="justify-content-md-center p-2">
      <CreateTask
        @create-task="createTask"
      />
    </b-row>
    <b-row class="justify-content-md-center p-2">
      <ul
        v-if="tasks.length"
        class="list-group .col-12"
        style="min-width: 300px;"
      >
        <TodoItem
          v-for="item of visibleTasks"
          v-bind:task="item"
          v-bind:key="item.date"
          @remove-task="removeTask"
          @check-task="checkTask"
        />
      </ul>
      <div v-else>
        No tasks
      </div>
    </b-row>
    <b-row class="justify-content-md-center p-2">
      <Pagination
        v-bind:tasks="tasks"
        @page-update="updatePage"
        v-bind:currentPage="currentPage"
        v-bind:pageSize="pageSize"
      />
    </b-row>
  </b-container>
</template>

<script>
  import CreateTask from './../components/createTask';
  import TodoItem from './../components/ToDoItem';
  import Pagination from './../components/Pagination';
  export default {
    name: 'List',
    computed: {
      tasks() {
        return this.$store.getters.tasks;
      }
    },
    data() {
      return {
        currentPage: parseInt(this.$route.params.page, 10) || 1,
        pageSize: 5,
        visibleTasks: []
      }
    },
    beforeMount: function() {
      this.updateVisibleTasks();
    },
    methods: {
      createTask(task) {
        this.$store.dispatch('createTask', task).then(() => {
          this.updatePage(1);
        });
      },
      removeTask(taskDate) {
        this.$store.dispatch('deleteTask', taskDate).then(() => {
          this.updateVisibleTasks();
        });
      },
      checkTask(taskDate) {
        this.$store.dispatch('checkTask', taskDate).then(() => {
          this.updateVisibleTasks();
        });
      },
      updatePage(pageNumber) {
        this.currentPage = pageNumber;
        this.updateVisibleTasks();
        if (this.$route.params.page !== String(pageNumber)) {
          this.$router.push(`/page/${pageNumber}`);
        }
      },
      updateVisibleTasks() {
        this.visibleTasks = this.tasks.slice((this.currentPage - 1)* this.pageSize, ((this.currentPage - 1) * this.pageSize) + this.pageSize);

        if (this.visibleTasks.length === 0 && this.currentPage > 1) {
          this.updatePage(this.currentPage - 1);
        }
      }
    },
    components: {
      CreateTask,
      TodoItem,
      Pagination
    }
  }
</script>
