# Pinia Todo App

This project's purpose is to learn to use Pinia to build a Todo App. It follows [The Net Ninja Pinia Crash course](https://www.youtube.com/watch?v=u0B9dysw29A&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD), see the respective [Github repo](https://github.com/iamshaunjp/Pinia-with-Vue-3)

While #1 - #5 is free, the [full course](https://netninja.dev/p/pinia-crash-course) costs $2. It would not cover the Pinia's `action` feature. The supplimentary crash course could be [Vue State Management with Pinia - Pinia Crash Course]

[Vue State Management with Pinia - Pinia Crash Course]: https://www.youtube.com/watch?v=YG1Q3bT0X6o&t


## What is Pinia

Pinia is a state management tool for `Vue.js`. It is similar to `Vuex` but easier to use.
see this [short](https://youtube.com/shorts/EFm9s4xSerE?feature=share) for a quick demo.

## How to init the project

```bash
npm init @vue/latest
```

under the hood it is using `Vite`, see [Vite 100 sec]


## How to run the project

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
- [x] [Pinia Crash Course #5 - Getters]

[Pinia Crash Course #1 - What is Pinia]: https://www.youtube.com/watch?v=u0B9dysw29A&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=1
[Pinia Crash Course #2 - Project Setup]: https://www.youtube.com/watch?v=nI7BOwcEUhk&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=2
[Pinia Crash Course #3 - Installing Pinia and Making a Store]: https://www.youtube.com/watch?v=8HI_pF4MwUo&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=3
[Pinia Crash Course #4 - Accessing Store State]: https://www.youtube.com/watch?v=9ug3DaR1sHY&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=4
[Pinia Crash Course #5 - Getters]: https://www.youtube.com/watch?v=FQIGu-w7xZ4&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=5

# To watch


- [ ] [Vite crash course]
- [ ] [Vue State Management with Pinia - Pinia Crash Course]

[Vite crash course]: https://www.youtube.com/watch?v=LQQ3CR2JTX8

## `VScode` extensions

The project is developed with VScode, the following is the list of used extensions for improving the development process

- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Notes

1. Any changes (e.g. changing the state value, adding a getting function, adding a state variable ... etc) after `setup()` **does not** do any rendering unless restarting the app. `setup()` is even before `create()`
2. [data() and setup()](https://stackoverflow.com/questions/64105088/vue-3-composition-api-data-function)
3. [watch in Vue3](https://www.youtube.com/watch?v=mM-P7S2sXQ4)
4. [Vite 100 sec](https://www.youtube.com/watch?v=KCrXgy8qtjM)