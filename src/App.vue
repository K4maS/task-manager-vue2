<template>
  <div id="app">
    <div class="container">
      <TasksComponent />
      <TasksList />
    </div>
  </div>
</template>

<script>
import TasksComponent from './components/TasksComponent.vue'
import TasksList from './components/TasksList.vue'

export default {
  name: 'App',
  components: {
    TasksComponent, TasksList
  }
}
</script>

<style></style>
