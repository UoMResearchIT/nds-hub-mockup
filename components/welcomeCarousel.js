Vue.component(
  'welcome-carousel', {

    /**
     * The view (presentation) of the component.
     */
    template: 
    /*html*/
    `
    <v-carousel>
      <v-carousel-item>
        <v-sheet  color="light-green darken-2"
                  height="100%"
                  tile>
          <v-row  class="fill-height"
                  align="center"
                  justify="center">
            <div class="text-h1 white--text">
              NERC Digital Solutions Hub
            </div>
            <div class="text-h2 white--text">
              Question, Explore, Analyze Petabytes of Geospatial Data
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet  color="orange lighten-1"
                  height="100%"
                  tile>
          <v-row  class="fill-height"
                  align="center"
                  justify="center">
            <div class="text-h2 primary--text">
              Ask Questions
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet  color="deep-purple darken-1"
                  height="100%"
                  tile>
          <v-row  class="fill-height"
                  align="center"
                  justify="center">
            <div class="text-h2 secondary--text">
              Explore, Mix, and Analyse Data
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet  color="amber lighten-2"
                  height="100%"
                  tile>
          <v-row  class="fill-height"
                  align="center"
                  justify="center">
            <div class="text-h2">
              Build and Run models
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet  color="light-green darken-3"
                  height="100%"
                  tile>
          <v-row  class="fill-height"
                  align="center"
                  justify="center">
            <div class="text-h2 white--text">
              Use our APIs
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    `,

    /**
     * The model associated with the component.
     * This is the model in the MVVM pattern.
     * @return {object} - The model of the application.
     */
    data() {
      return {};
    },

    /**
     * The methods that provide the functionality of the component.
     * @type {Object} - The object that encapsulates all the component methods.
     */
    methods: {
      
    },

  }
)
