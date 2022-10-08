<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="logo" />
      <h1>Pinia Todo</h1>
    </header>
    <nav class="filter">
        <button @click="filter='all'">All tasks</button>
        <button @click="filter='favs'">Fav tasks</button>
    </nav>
    <div class="task-list" v-if="filter==='all'">
    
        <p>You have {{taskStore.totalCount}} tasks left to do</p>
        <div v-for="task in taskStore.tasks">
            <Task :task="task" />
        </div>
    </div>
    <div class="task-list" v-if="filter==='favs'">
        <p>You have {{taskStore.favCount}} tasks left to do</p>
        <div v-for="task in taskStore.favs">
            <Task :task="task" />
        </div>
    </div>
    
  </main>
</template>

<script>
import {ref} from 'vue'
import { useTaskStore } from "./stores/taskStore";
import Task from "./components/Task.vue";
export default {
  components: {
    Task,
  },
  
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    return { taskStore, filter };
  },

};
</script>
