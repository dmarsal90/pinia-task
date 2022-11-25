<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- tasks list -->
    <div class="task-list">
      <p>All tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list">
      <p>Fav tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore.js";
import TaskDetails from "./components/TaskDetails.vue";

export default {
  components: { TaskDetails },
  //composition api
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

<style lang="scss" scoped></style>
