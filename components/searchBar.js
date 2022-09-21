

Vue.component(
    'search-bar', {
        template:
        /*html*/
        `
        <v-container>
        <v-toolbar
        dark
        color="teal"
        >
        <v-toolbar-title>
        <slot name="search-item"></slot>
        </v-toolbar-title>
        
        <v-autocomplete
        v-model="select"
        :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          solo-inverted
          @keydown.enter="onEnter"
        ></v-autocomplete>
        
        </v-toolbar>
        <v-list>
        <v-subheader v-show="search_results.length">Search Results</v-subheader>

        <v-list-item-group
          v-model="selected_results"
          multiple
          active-class=""
        >
          <v-list-item v-for="(result, i) in search_results" :key="i">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title>{{result}}</v-list-item-title>
                <v-list-item-subtitle>some desc</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
        </v-list>
        

        <v-btn
  :disabled="selected_results.length === 0"
  color="primary"
  elevation="2"
  block
  @click="addToMap"
>Add to Map</v-btn>        
        
        </v-container>
        `,
      data () {
        return {
          loading: false,
          items: [],
          search_results: [],
          selected_results: [],
          search: null,
          select: null,
          metadataTitles: AppData.getTitles()
          ,
        }
      },
      watch: {
        search (val) {
          val && val !== this.select && this.querySelections(val)
        },

      },
      methods: {
        querySelections (v) {
          this.loading = true
          // Simulated ajax query
          setTimeout(() => {
            this.items = this.metadataTitles.filter(e => {
              return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
            })
            this.loading = false
          }, 500)
        },
        onEnter(){
          if (this.loading) return;
          console.log("ENTER!!")
          this.search_results = this.items
          console.log(this.search_results)
        },
        
        addToMap() {
          this.$emit("add-to-map", this.selected_results.map( i => this.search_results[i]))
        }
    }    
}
)