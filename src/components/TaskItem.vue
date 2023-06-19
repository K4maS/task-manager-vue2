<template>
    <li class="tasks__item item" v-bind:class="{ success: task.status }">
        <h2 class="item__title">
            {{ task.text }}
        </h2>
        <div class="item__btn-block">
            <button type="button" class="btn btn-success" @click.prevent="changeTaskAction(task.id)">Выполнено</button>
            <button type="button" class="btn btn-danger" @click.prevent="removeTaskAction(task.id)">Удалить</button>
        </div>

    </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TaskItem',
    props: ['task'],
    methods: {
        ...mapActions(['changeTaskAction', 'removeTaskAction'])
    },


}
</script>

<style>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(127, 127, 127, 0.303);
    padding: 20px 50px;
    border-radius: 5px;
}

.item.success {
    background-color: rgba(0, 128, 0, 0.298);
}

.item__btn-block {
    display: flex;
    gap: 10px;
}
</style>