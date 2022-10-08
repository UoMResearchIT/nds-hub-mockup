import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Task 1", completed: false, isFav: false },
      { id: 1, title: "Task 2", completed: false, isFav: true },
    ],
    name: "UserName",
  }),
});
