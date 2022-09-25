

/**
 * The Spatial class is used as a static container of Spatial Information.
 */
class Spatial {

  /**
   * The initial map latitude.
   */
  static initialLat = 54;

  /**
   * The initial map longitude.
   */
  static initialLon = -4;

  /**
   * The initial map zoom level.
   */
  static initialZoom = 6;

  /**
   * The maximum zoom level of the background layer which holds the maximum zoom level of them.
   */
  static maxZoom = 18;

  /**
   * The leaflet map.
   */
  static map = null;

  /**
   * The choropleth map layer.
   */
  static layer = null;

  /**
   * The basemap layer.
   */
  static basemapLayer = null;

  /**
   * The constructor of the class which makes sure that the class
   * acts as a static one and can not be instantiated.
   */
  constructor() {
    if (this instanceof Spatial) {
      throw Error('Spatial class is static and cannot be instantiated.');
    }
  }

  /**
   * Initializes the map.
   */
  static initializeMap() {

    // Create the map and set its view.
    Spatial.map = L.map('map').setView([Spatial.initialLat, Spatial.initialLon], Spatial.initialZoom)

    // Add the basemap layer.
    Spatial.basemapLayer = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: Spatial.maxZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    Spatial.basemapLayer.addTo(Spatial.map);

  }

  /**
   * Updates the Map based on the active entry in the layers treeview.
   *
   * @param {object} selectedField - The field that has been selected in the treeview.
   */
  static updateMap(selectedField) {

    // Check if a feature layer exists on the map and remove it.
    if (Spatial.layer !== null) {
       Spatial.map.removeLayer(Spatial.layer);
    }

    // Make sure a field is selected.
    if (selectedField.length > 0) {

      let fieldName = AppData.heatExp2011Fields[selectedField[0].toString()].fieldName;
      
      // Create a new featurelayer and store it in the Spatial object.
      Spatial.layer = L.choropleth(AppData.heatExp2011FeatureCollection, {
        valueProperty: function (feature) {
          return feature.properties[fieldName]
        },
        colors: ['#a80000', '#cd6666', '#f5a27a', '#ffffbe', '#cccccc', '#9eaad7', '#4375b5'], // set your own colours to match number of steps
        //scale: ['red', 'blue'], // or use the chroma.js colour scale
        steps: 7, // number of breaks or steps in range
        mode: 'q', // equidistant (e), quantile (q), logarithmic (l), and k-means (k)
        style: {
          color: '#636363', //border color
          weight: 1,
          fillOpacity: 1
        },
        onEachFeature: function (feature, layer) {
          layer.bindPopup("Value: " + feature.properties[fieldName])
        }
      });

      // Add the feature layer on the map.
      Spatial.layer.addTo(Spatial.map);

    }

  }

};

/**
 * ================================================================================
 *   ViewModels.
 * ================================================================================
 */

/**
 * The application ViewModel.
 * @type {Vue} = A Vue.js ViewModel.
 */
let appViewModel = new Vue({

  /**
   * The name of the HTML component (the view) that this ViewModel
   * will attempt to be bound.
   * @type {String} - The string holding the name of the HTML Component.
   */
  el: '#app',

  /**
   * Indicates that the entire view would be controlled by Vuetify.
   * @type {Vuetify} - The Vuetify object.
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
   * @return {object} - The model of the application.
   */
  data: {


    


    /**
     * The items used to create the treeview hierarchy.
     * @type {Array} - The array of treeview items.
     */
    treeViewItems: AppData.treeViewItems,

    /**
     * The ids of the opened folders.
     * @type {Array} - The array of the ids of the opened folders.
     */
    openedFolders: [100],

    /**
     * The selected field.
     * Since only one field would be visible, the array must have only one item
     * which holds the value of the id of the treeview item.
     * @type {Array} - The array of the ids of the selected fields.
     */
    selectedField: [101],

  },

  /**
   * The reactive properties of the model associated with the view.
   * This is the model in the MVVM pattern.
   * @return {object} - The reactive properties of the model of the application.
   */
  computed: {

    /**
     * Gets the current state of the application.
     */
    currentAppState() {
      return AppState.currentState;
    },

  },

  /**
   * The methods that provide the functionality of the ViewModel.
   * @type {Object} - The object that encapsulates all ViewModel methods.
   */
  methods: {

    /**
     * Determines whether the user is logged in or not.
     * @returns {Boolean} - True if the user is logged in, false otherwise.
     */
    isUserLoggedIn() {
      return AppState.isUserLoggedIn;
    },

    /**
     * Gets the text of the login button.
     * @returns {String} - The text of the login button.
     */
    getUserLoginButtonText() {
      return AppState.isUserLoggedIn ? "Logout" : "Login";
    },

    /**
     * Gets the current state of the application.
     */
    getCurrentAppState() {
      return AppState.currentState;
    },

    /**
     * Updates the Map based on the active entry in the layers treeview.
     */
    updateMap() {

      Spatial.updateMap(appViewModel.selectedField);

    }

  }

})




/**
 * ================================================================================
 *   Main Script Body.
 * ================================================================================
 */



//Spatial.initializeMap();

//appViewModel.updateMap();
