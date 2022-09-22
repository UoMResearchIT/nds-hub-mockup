Vue.component(
    'search-btn', {
        template: 
        /*html*/
        `
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  
                  v-bind="attrs"
                  v-on="on"
                >
                  Search
                </v-btn>
              </template>
              <v-card>
                <v-toolbar
                  dark
                  color="primary"
                >
                  <v-btn
                    icon
                    dark
                    @click="dialog = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Search Data</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn
                      dark
                      text
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                
                <v-list>
                <v-list-item>
                <search-bar @add-to-map="onAddToMap">
                  <template #search-item>Search For</template>
                </search-bar>
                </v-list-item>
                
                
                


                </v-list>
              </v-card>
            </v-dialog>
        `,
        data(){
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                layers: null
            }
        },

        methods: {
          onAddToMap(layers){
            this.$emit("add-to-map", layers)
            this.dialog = false
          }
        },
    }
)