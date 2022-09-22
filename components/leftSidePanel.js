Vue.component('left-side-panel', {
    template:
        /* html */
        `
    <template>
  
    <v-navigation-drawer
      app
      permanent
      width="25%"
    >
    <template>
    <v-tabs
      fixed-tabs
      background-color="indigo"
      dark
    >
      <v-tab v-for="tab in tabs">
        <v-icon>{{tab.icon}}</v-icon>
      </v-tab>
    </v-tabs>
  </template>
    </v-navigation-drawer>
  
</template>
    `
    ,

    data() {
        return {
            tabs: [
                { title: 'Ask a Question', icon: 'mdi-head-question' },
                { title: 'Do more with Data', icon: 'mdi-database-search' },
                { title: 'Create a model', icon: 'mdi-chart-box' },
            ],
            links: ['Home', 'Contacts', 'Settings']
        }
    },

    methods: {

    }
});