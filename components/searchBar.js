

Vue.component(
    'search-bar', {
        template:
        /*html*/
        `
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
        ></v-autocomplete>
      </v-toolbar>`,
      data () {
        return {
          loading: false,
          items: [],
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
        }
        
    }    
}
)