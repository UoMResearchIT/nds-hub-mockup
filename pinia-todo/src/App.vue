<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="logo" />
      <h1>Pinia Todo</h1>
    </header>
    <div class="task-list">
        <div v-for="task in taskStore.tasks">
            <Task :task="task" />
        </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/taskStore";
import Task from "./components/Task.vue";
export default {
  components: {
    Task,
  },
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
