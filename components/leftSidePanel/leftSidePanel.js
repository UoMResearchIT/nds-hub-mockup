Vue.component('left-side-panel', {
    template:
    /* html */
    `
    <v-navigation-drawer clipped
    permanent
    app width="25%">

    <v-tabs
      v-model="selectedTabIndex"
      fixed-tabs
      dark
      background-color="indigo"
      class=" rounded-0"
      width="100%"
      >
      <v-tab v-for="(tab, index) in tabs" :key="index">
    <v-icon>{{tab.icon}}</v-icon>
    </v-tab>
    </v-tabs>
    
    
    <v-container fill-height>
    
    

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
            /*v-model is slower than @click*/
            console.log("selectedTabIndex: " + this.tabs[this.selectedTabIndex].name);
        }
    },
    computed:{
        currentTabName(){
            return this.tabs[this.selectedTabIndex].name;
    }
}
    



    
})