<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="logo" />
      <h1>Pinia Todo</h1>
      <h2>{{ taskStore.name }}</h2>
    </header>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/taskStore";

export default {
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};

</script>
