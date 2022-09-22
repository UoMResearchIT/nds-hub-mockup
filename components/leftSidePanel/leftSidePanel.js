Vue.component('left-side-panel', {
    template:
        /* html */
        `
    <v-navigation-drawer
      app
      permanent
      width="25%"
      >    
      
      <v-tabs
      v-model="selectedTabIndex"
      fixed-tabs
      dark
      background-color="indigo"
      class=" rounded-0"
      width="100%"
      >
      <v-tab v-for="(tab, index) in tabs" :key="index" @click="Debug">
    <v-icon>{{tab.icon}}</v-icon>
    </v-tab>
    </v-tabs>
    </div>
    
    
    <v-container fill-height>

    <p>current tab: {{this.currentTabName}}</p>

    <tab-question-content v-if="this.currentTabName === 'question'"></tab-question-content>
    <tab-data-content v-if="this.currentTabName === 'data'"></tab-data-content>
    <tab-model-content v-if="this.currentTabName === 'model'"></tab-model-content>
    
    </v-container>
    </v-navigation-drawer>
    `
    ,

    data() {
        return {
            selectedTabIndex: 0,
            tabs: [
                { name: 'question', title: 'Ask a Question', icon: 'mdi-head-question' },
                { name: 'data', title: 'Do more with Data', icon: 'mdi-database-search' },
                { name: 'model', title: 'Create a model', icon: 'mdi-chart-box' },
            ]
        }
    },

    methods: {
        Debug() {
            /**/
            console.log("selectedTabIndex: " + this.tabs[this.selectedTabIndex].name);
        }
    },
    computed:{
        currentTabName(){
            return this.tabs[this.selectedTabIndex].name;
    }
}
    



    
})