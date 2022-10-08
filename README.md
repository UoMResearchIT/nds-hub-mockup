# Pinia Todo App

This project's purpose is to learn to use Pinia to build a Todo App. It follows [The Net Ninja Pinia Crash course](https://www.youtube.com/watch?v=u0B9dysw29A&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD), see the respective [Github repo](https://github.com/iamshaunjp/Pinia-with-Vue-3)

## What is Pinia

Pinia is a state management tool for `Vue.js`. It is similar to `Vuex` but easier to use.

## How run the project

```bash
cd pinia-todo
npm install
npm run dev
```

## VScode extensions

The proejct is developed with VScode, the following is the list of used extensions for improving the development process

- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Note in Pinia

1. changing the state directly after `setup()` does not do any rendering unless restarting the app.
