<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'fav'">Favorite tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>All tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'fav'">
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
import { ref } from "vue";


export default {
  components: {TaskDetails},
  setup() {
    const taskStore = useTaskStore();

    const filter = ref('all');

    return { taskStore, filter };
  },
};
</script>
