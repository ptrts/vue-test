<template>
    <form class="form-inline" @submit.prevent="onSubmit">
        <div class="form-group mb-2">
            <input
                type="text"
                class="form-control"
                id="taskTitle"
                placeholder="Title"
                v-model="title"
            >
        </div>
        <button type="submit" class="btn btn-primary mb-2">Add task</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                if (this.title) {
                    this.$emit('create-task', {
                        title: this.title,
                        date: Date.now(),
                        completed: false
                    });
                    this.title = '';
                }
            }
        }
    }
</script>
