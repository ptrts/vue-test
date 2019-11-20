<template>
  <li class="list-group-item" v-bind:class="{completed: task.completed}">
    <div class="row">
      <div class="col-1">
        <input
          v-on:change="$emit('check-task', task.date)"
          type="checkbox"
          :checked="task.completed"
        >
      </div>
      <div class="col-8 title-col">
        {{task.title}}
      </div>
      <div class="col-3 delete-col">
        <button
          v-on:click="$emit('remove-task', task.date)"
          type="button"
          class="btn btn-outline-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style scoped>
  .completed {
    text-decoration: line-through;
  }
  .title-col {
    max-width: 60%;
    text-overflow: ellipsis;
    overflow: hidden
  }
  .delete-col {
    padding: 0;
  }
</style>
