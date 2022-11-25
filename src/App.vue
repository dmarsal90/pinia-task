<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- tasks list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>All tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
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
import { ref } from "vue";

export default {
  components: { TaskDetails },
  //composition api
  setup() {
    const taskStore = useTaskStore();

    const filter = ref('all');

    return { taskStore };
  },
};
</script>

<style lang="scss" scoped></style>
