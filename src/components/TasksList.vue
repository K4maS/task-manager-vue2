<template>
    <ul class="tasks__list">
        <TaskItem v-for="task in getTasks" :task="task" :key="task.id" />
    </ul>
</template>

<script>
import TaskItem from './TaskItem.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'TasksList',
    components: { TaskItem },
    computed: { ...mapGetters(['getTasks']) },
}
</script>

<style>
.tasks__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    padding: 0;

}
</style>