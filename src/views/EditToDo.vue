<template>
  <b-container>
    <b-row class="justify-content-md-center p-2">
      <h4>Edit title</h4>
    </b-row>
    <b-row class="justify-content-md-center p-2">
      <div class="form-group mb-2">
        <input
          type="text"
          class="form-control"
          id="taskTitle"
          placeholder="Title"
          v-model="title"
        >
      </div>
    </b-row>
    <b-row class="justify-content-md-center p-2">
      <button v-on:click="onSave" type="button" class="btn btn-success">Save</button>
      <button
        v-on:click="onCancel"
        type="button"
        class="btn btn-danger"
      >Cancel</button>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'EditToDo',
    computed: {
      task() {
        return this.$store.getters.getTask(this.$route.params.id);
      }
    },
    beforeMount: function() {
      this.title = this.task.title;
    },
    data() {
      return {
        title: ''
      }
    },
    methods: {
      onSave() {
        console.log(this.title);
        this.$store.dispatch('changeTitle', {
          date: this.task.date,
          title: this.title
        }).then(() => {
          this.$router.push('/');
        });
      },
      onCancel() {
        this.$router.push('/');
      },
    },
    components: {}
  }
</script>
