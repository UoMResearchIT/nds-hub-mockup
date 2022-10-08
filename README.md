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

## current progress

- [x] [Pinia Crash Course #1 - What is Pinia]
- [x] [Pinia Crash Course #2 - Project Setup]
- [x] [Pinia Crash Course #3 - Installing Pinia and Making a Store]
- [x] [Pinia Crash Course #4 - Accessing Store State]
- [ ] [Pinia Crash Course #5 - Getters]

[Pinia Crash Course #1 - What is Pinia]: https://www.youtube.com/watch?v=u0B9dysw29A&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=1
[Pinia Crash Course #2 - Project Setup]: https://www.youtube.com/watch?v=nI7BOwcEUhk&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=2
[Pinia Crash Course #3 - Installing Pinia and Making a Store]: https://www.youtube.com/watch?v=8HI_pF4MwUo&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=3
[Pinia Crash Course #4 - Accessing Store State]: https://www.youtube.com/watch?v=9ug3DaR1sHY&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=4
[Pinia Crash Course #5 - Getters]: https://www.youtube.com/watch?v=FQIGu-w7xZ4&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=5

## VScode extensions

The proejct is developed with VScode, the following is the list of used extensions for improving the development process

- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Note in Pinia Store

1. any changes (e.g. changing the state value, adding a getting function, adding a state variable ... etc) after `setup()` **does not** do any rendering unless restarting the app.
2. 
