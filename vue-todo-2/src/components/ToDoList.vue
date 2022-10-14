<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="todoInput" @keyup.enter='addTodo'/>
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(item, idx) in todoList" :key="idx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      todoInput: "",
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoInput);
      this.todoInput = ''
    },
  },
};
</script>
