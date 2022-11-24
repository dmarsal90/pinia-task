<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- tasks list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <taskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore.js";
import { taskDetails } from "./components/TaskDetails.vue"

export default {
  components: { taskDetails },
  //composition api
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

<style lang="scss" scoped>

</style>
