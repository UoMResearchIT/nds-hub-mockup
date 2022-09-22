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
      <v-tab>
        <v-icon>mdi-chart-box </v-icon>
      </v-tab>
      <v-tab>
        <v-icon>mdi-head-question  </v-icon>
      </v-tab>
      <v-tab>
        <v-icon>mdi-map-search</v-icon>
      </v-tab>
    </v-tabs>
  </template>
    </v-navigation-drawer>
  
</template>
    `
    ,

    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'About', icon: 'mdi-forum' },
            ],
            links: ['Home', 'Contacts', 'Settings'],
            mini: true,
        }
    },

    methods: {

    }
});