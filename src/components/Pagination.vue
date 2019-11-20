<template>
    <nav v-if="totalPages() > 1">
        <ul class="pagination">
            <li
                class="page-item"
                v-bind:class="{disabled: !showPreviousLink()}"
            ><a
                v-on:click="updatePage(currentPage - 1)"
                class="page-link"
            >Previous</a></li>
            <li
                class="page-item"
                v-bind:class="{disabled: !showNextLink()}"
            ><a
                v-on:click="updatePage(currentPage + 1)"
                class="page-link"
            >Next</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'pagination',
        props: ['tasks', 'currentPage', 'pageSize'],
        methods: {
            updatePage(pageNumber) {
                this.$emit('page-update', pageNumber);
            },
            totalPages() {
                return Math.ceil(this.tasks.length / this.pageSize);
            },
            showPreviousLink() {
                return this.currentPage > 1;
            },
            showNextLink() {
                return this.currentPage !== this.totalPages();
            }
        }
    }
</script>
