<template>
  <div class="tasks">
    <h1 class="tasks__title">Задачи</h1>
    <form class="form tasks__form">
      <div class="mb-3 d-flex gap-3">
        <input placeholder="введите задачу" type="text" class="form-control form__input" v-model="task">
        <button type="submit" class="btn btn-primary form__btn" @click.prevent=addingTask()>Добавить задачу</button>
      </div>

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TasksComponent',
  data() {
    return {
      task: '',
    };
  },
  methods: {
    ...mapActions(['addTaskAction']),

    addingTask() {
      if (this.task) {
        this.addTaskAction(this.task);
        this.task = '';
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tasks {
  padding-top: 50px;
}

.form__btn {
  min-width: 300px;
}
</style>
