import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "tarea 1", isFav: false },
      { id: 1, title: "tarea 2", isFav: false },
    ],
    name: "Pinia",
  }),
  getters: {
    favs() {
      return this.tasks.filter(t => t.isFav);
    },
  },
});
