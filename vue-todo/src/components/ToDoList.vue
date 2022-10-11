<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

// data
const todoItems = ref([])
const todoItem = ref('')

// method
function addTodoItem() { 
  todoItems.value.push(todoItem.value)
  todoItem.value = ''
}

</script>

<template>
  <h1>{{msg}}</h1>

  <ul>
    <li v-for="(item, idx) in todoItems" :key="idx">
      {{item}}
    </li>
  </ul>

  <div>
    <input v-model="todoItem" @keyup.enter="addTodoItem" type="text" />
    <button @click="addTodoItem" >Add</button>
  </div>
  
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
