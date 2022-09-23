
/**
 * ================================================================================
 *   ViewModels.
 * ================================================================================
 */

/**
 * The application ViewModel.
 * 
 * @type {Vue}
 */
const appViewModel = new Vue({

  /**
   * The name of the HTML component (the view) that this ViewModel
   * will attempt to be bound.
   * 
   * @type {String} - The string holding the name of the HTML Component.
   */
  el: '#app',

  /**
   * Indicates that the entire view would be controled by Vuetify.
   * 
   * @type {Vuetify} - A new Vuetify object.
   */
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#660099',
          secondary: '#FFCC33',
          accent: '#3E863E',
          //error: '#b71c1c',
        },
      },
    },
  }),

  /**
   * The model associated with the view.
   * This is the model in the MVVM pattern.
   * 
   * @return {object} - The model of the application.
   */
  data: {
    selectedTabIndex: 0,
    tabs: [
      { name: 'question', title: 'Ask a Question', icon: 'mdi-head-question' },
      { name: 'data', title: 'Do more with Data', icon: 'mdi-database-search' },
      { name: 'model', title: 'Create a model', icon: 'mdi-chart-box' },
    ],
    drawer: false,
    layers: [],
    selectedLayersIndex: [],
    /**
     * The items used to create the treeview hierarchy.
     * 
     * @type {Array}
     */
    treeViewItems: AppData.treeViewItems,

    /**
     * The array of the ids of the opened folders.
     * 
     * @type {Array}
     */
    openedFolders: [100],

    /**
     * The selected field.
     * Since only one field would be visible, the array must have only one item
     * which holds the value of the id of the treeview item.
     * 
     * @type {Array}
     */
    selectedField: [101],

  },

  /**
   * The methods that provide the functionality of the ViewModel.
   * 
   * @type {Object} - The object that encapsulates all ViewModel methods.
   */
  methods: {

    /**
     * Updates the Map based on the active entry in the layers treeview.
     */
    updateMap() {

      Spatial.updateMap(appViewModel.selectedField);

    },

    setMapLayers(layers) {
      this.layers = layers;
      alert("Added to Map!")
    },

    removeAllLayers() {

      while (this.layers.length > 0) {
        this.layers.pop(); /*no good*/
      }
      console.log("removeAllLayers!!")
      console.log(this.layers)
    },

  },

  computed: {
    currentTabName() {
      return this.tabs[this.selectedTabIndex].name;
    },

    selectedLayers() {
      return this.selectedLayersIndex.map(i => this.layers[i])
    }
  }
})



/**
 * ================================================================================
 *   Main Script Body.
 * ================================================================================
 */

Spatial.initializeMap();

appViewModel.updateMap();
