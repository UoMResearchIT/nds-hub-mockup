

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
     * The application state.
     */
    applicationState: {

      /**
       * The current state of the application.
       */
      currentState: 'welcome',

      /**
       * The possible states of the application in sequence.
       */
      states: [ "welcome", "initial", "askQuestions", "exploreData", "runModel" ],

      /**
       * Indicates whether the user is logged in or not.
       */
      isUserLoggedIn: false,
      
    },

    /**
     * The login dialog.
     */
    loginDialog: {

      /**
        * Indicates whether the login dialog is open or not.
        */
      isLoginDialogOpen: false,

       /**
        * The username.
        */
      username: "vasilis",

       /**
        * The password
        */
      password: "vasilisvasilis",

       /**
        * Indicates whether there is a login error or not.
        */
      isLoginError: false,

    },

    /**
     * The search dialog.
     */
    searchDialog: {

      isSearchDialogOpen: false,

      notifications: false,
      
      sound: true,
      
      widgets: false,
      
      layers: null

    },

    /**
     * The search bar.
     */
    searchBar: {

      loading: false,

      items: [],

      searchResults: [],

      selectedResults: [],

      search: null,

      select: null,

      metadataTitles: AppData.metadata.getTitles()

    },

    /**
     * The  tabs of the application.
     */
    navigationTabs: {

      selectedTabIndex: 0,
      tabs: [
        { state: 'askQuestion', title: 'Ask a Question', icon: 'mdi-head-question' },
        { state: 'exploreData', title: 'Do more with Data', icon: 'mdi-database-search' },
        { state: 'runModel', title: 'Create a model', icon: 'mdi-chart-box' },
      ],
      drawer: false,
      layers: [],
      selectedLayersIndex: []
      
    },




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
     * Gets the text of the login button.
     * @returns {String} - The text of the login button.
     */
         applicationState_GetUserLoginButtonText() {
          return this.applicationState.isUserLoggedIn ? "Logout" : "Login";
        },
    
    /**
     * Get the object of the selected tab.
     * @returns {Object} - The selected field object.
     */    
    navigationTabs_GetSelectedTab() {
      return this.navigationTabs.tabs[this.navigationTabs.selectedTabIndex];
    }
    },

  /**
   * 
   */
  watch: {

    /**
     * 
     * @param {*} val 
     */
    searchBarSearch (val) {
      val && val !== this.searchBar.select && this.searchBar_QuerySelections(val)
    },

    
  /**
   * watch the changes selected tab in the navigation tabs
   * set the current state of the application accordingly
   */
    navigationTabs_GetSelectedTab(){
      console.log('navigationTabs_GetSelectedTab() changed!!!');
      this.applicationState.currentState = this.navigationTabs_GetSelectedTab.state;
      console.log(`current state: ${this.applicationState.currentState}`);
    }

  },

  /**
   * The methods that provide the functionality of the ViewModel.
   * @type {Object} - The object that encapsulates all ViewModel methods.
   */
  methods: {

    alertMessage: function (message) {
      alert(message);
    },

    /**
     * Clears the login error.
     */
    loginDialog_ClearLoginError() {
      this.loginDialog.isLoginError = false;
    },

    /**
     * Performs user login.
     * @returns - When a login error occurs.
     */
    loginDialog_UserLogin() {

      // Fake an error by not allowing the user to login if password has a length less than 8 characters long.
      if (this.loginDialog.password.length < 8) {
        this.loginDialog.isLoginError = true;
        return;
      }

      // Make sure username/password are cleared from the dialog form.
      this.loginDialog.username = "";
      this.loginDialog.password = "";

      // Change the application state.
      this.applicationState.isUserLoggedIn = !this.loginDialog.isLoginError;
      this.applicationState.currentState = "initial";
      
      // Close the login dialog.
      this.loginDialog.isLoginDialogOpen = !this.applicationState.isUserLoggedIn;

    },

    /**
     * Performs user logout.
     */
    loginDialog_UserLogout() {

      // Change the application state.
      this.applicationState.isUserLoggedIn = false;
      this.applicationState.currentState = "welcome";

      // Close the login dialog.
      this.loginDialog.isLoginDialogOpen = this.applicationState.isUserLoggedIn;

    },

    /**
     * Queries the selections.
     * @param {*} v | The value of the selected items.
     */
    searchBar_QuerySelections(v) {
      this.searchBar.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.searchBar.items = this.searchBar.metadataTitles.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.searchBar.loading = false
      }, 500)
    },

    /**
     * 
     * @returns {Array} - The array of the selected search results.
     */
    searchBar_OnEnter() {
      if (this.searchBar.loading) return;
      console.log("ENTER!!")
      this.searchBar.searchResults = this.searchBar.items
      console.log(this.searchBar.searchResults)
    },
    
    /**
     * Add the selected items on map.
     */
    searchBar_AddToMap() {
      alert('add to map');
      //this.$emit("add-to-map", this.searchBar.selectedResults.map( i => this.searchBar.searchResults[i]))
    },

    /**
     * 
     * @param {*} layers 
     */
    searchButton_OnAddToMap(layers) {
      alert('OnAddToMap');
      //this.$emit("add-to-map", layers)
      this.loginDialog.isLoginDialogOpen = false
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
