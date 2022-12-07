<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <p>All tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list">
      <p>Fav tasks</p>
      <div v-for="task in taskStore.fav">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue"

export default {
  components: {TaskDetails},
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
