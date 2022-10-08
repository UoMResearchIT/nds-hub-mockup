
/**
 * Imports.
 */
// import esriConfig from "arcgis/core/config";
// import Map from "arcgis/core/Map";
// import MapView from "arcgis/core/views/MapView";

const API_KEY = "AAPK145053262bd6467ca1964310f4fa5dcbkBC4UJkiXHLfDU5QBdgqQiRIMvqYdlD4sxk5nECzG_HtbwDniS4FuUGs5BQoHDnm";

let esriConfig2 = null;
let Map2 = null;
let MapView2 = null;

//require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {
require(["libs/arcgis-4.24/esri/config", "libs/arcgis-4.24/esri/Map", "libs/arcgis-4.24/esri/views/MapView"], function (esriConfig, Map, MapView) {
  // alert("Hello World!");
  esriConfig2 = esriConfig;
  Map2 = Map;
  MapView2 = MapView;
});

// require([
//   "https://js.arcgis.com/4.24/esri/config",
//   "https://js.arcgis.com/4.24/esri/Map",
//   "https://js.arcgis.com/4.24/esri/views/MapView"
// ], function (esriConfig, Map, MapView) {
//   // alert("Hello World!");
//   esriConfig2 = esriConfig;
//   Map2 = Map;
//   MapView2 = MapView;
// });


// require module arcgis javascript 4.24 modules

// const esriConfig = require("esri/config");
// const Map = require("esri/Map");
// const MapView = require("esri/views/MapView");

let BaseMaps = {

  /**
   * Basemaps accessible through the use of an API key.
   * Use of these basemaps requires an ArcGIS Developer subscription.
   */
  apiKeys: {
    'arcgis-imagery'          : { description: 'Imagery Hybrid',                                url: 'https://www.arcgis.com/home/item.html?id=ea3befe305494bb5b2acd77e1b3135dc' },
    'arcgis-imagery-standard' : { description: 'Imagery',                                       url: 'https://www.arcgis.com/home/item.html?id=c7d2b5c334364e8fb5b73b0f4d6a779b' },
    'arcgis-imagery-labels'   : { description: 'The reference layer from `arcgis-imagery`',     url: undefined },
    'arcgis-light-gray'       : { description: 'Light Gray Canvas',                             url: 'https://www.arcgis.com/home/item.html?id=0f74af7609054be8a29e0ba5f154f0a8' },
    'arcgis-dark-gray'        : { description: 'Dark Gray Canvas',                              url: 'https://www.arcgis.com/home/item.html?id=7742cd5abef8497288dc81426266df9b' },
    'arcgis-navigation'       : { description: 'Navigation',                                    url: 'https://www.arcgis.com/home/item.html?id=78c096abedb9498380f5db1922f96aa0' },
    'arcgis-navigation-night' : { description: 'Navigation (Night',                             url: 'https://www.arcgis.com/home/item.html?id=77073a29526046b89bb5622b6276e933' },
    'arcgis-streets'          : { description: 'Streets',                                       url: 'https://www.arcgis.com/home/item.html?id=e3e6df1d2f6a485d8a70f28fdd3ce19e' },
    'arcgis-streets-night'    : { description: 'Streets (Night',                                url: 'https://www.arcgis.com/home/item.html?id=b22e146f927e413c92f75b5e4614354a' },
    'arcgis-streets-relief'   : { description: 'Streets (with Relief',                          url: 'https://www.arcgis.com/home/item.html?id=03daad361e1849bc80cb7b70ed391379' },
    'arcgis-topographic'      : { description: 'Topographic',                                   url: 'https://www.arcgis.com/home/item.html?id=dd247558455c4ffab54566901a14f42c' },
    'arcgis-oceans'           : { description: 'Oceans',                                        url: 'https://www.arcgis.com/home/item.html?id=b1dca7ef7b61466785901c41aed89ba5' },
    'osm-standard'            : { description: 'OpenStreetMap',                                 url: 'https://www.arcgis.com/home/item.html?id=695aef1564e84c06833542eb4d8c02d3' },
    'osm-standard-relief'     : { description: 'OpenStreetMap (with Relief',                    url: 'https://www.arcgis.com/home/item.html?id=5b93370c7fc24ca3b8740abd2a55456a' },
    'osm-streets'             : { description: 'OpenStreetMap (Streets',                        url: 'https://www.arcgis.com/home/item.html?id=bcefe41ce33943ac81d2fd801edd452c' },
    'osm-streets-relief'      : { description: 'OpenStreetMap (Streets with Relief',            url: 'https://www.arcgis.com/home/item.html?id=c6ec0420be5a4e36b57d1ef0f243b175' },
    'osm-light-gray'          : { description: 'OpenStreetMap (Light Gray Canvas',              url: 'https://www.arcgis.com/home/item.html?id=983b312ebd9b4d15a02e00f50acdb1c1' },
    'osm-dark-gray'           : { description: 'OpenStreetMap (Dark Gray Canvas',               url: 'https://www.arcgis.com/home/item.html?id=7371ca07df4047eaa5f02d09ef12b1a0' },
    'arcgis-terrain'          : { description: 'Terrain with Labels',                           url: 'https://www.arcgis.com/home/item.html?id=2ef1306b93c9459ca7c7b4f872c070b9' },
    'arcgis-community'        : { description: 'Community Map',                                 url: 'https://www.arcgis.com/home/item.html?id=184f5b81589844699ca1e132d007920e' },
    'arcgis-charted-territory': { description: 'Charted Territory Map',                         url: 'https://www.arcgis.com/home/item.html?id=303e75b27af043fd835c981ab9accf84' },
    'arcgis-colored-pencil'   : { description: 'Colored Pencil Map',                            url: 'https://www.arcgis.com/home/item.html?id=c0ddf27614bc407f92c35020a9b48afa' },
    'arcgis-nova'             : { description: 'Nova Map',                                      url: 'https://www.arcgis.com/home/item.html?id=90f86b329f37499096d3715ac6e5ed1f' },
    'arcgis-modern-antique'   : { description: 'Modern Antique Map',                            url: 'https://www.arcgis.com/home/item.html?id=b69f2876ce4c4e9db185cdc857fcebc7' },
    'arcgis-midcentury'       : { description: 'Mid-Century Map',                               url: 'https://www.arcgis.com/home/item.html?id=52d6a28f09704f04b33761ba7c4bf93f' },
    'arcgis-newspaper'        : { description: 'Newspaper Map',                                 url: 'https://www.arcgis.com/home/item.html?id=e3c062eedf8b487b8bb5b9b08db1b7a9' },
    'arcgis-hillshade-light'  : { description: 'The hillshade layer from `arcgis-topographic`', url: undefined },
    'arcgis-hillshade-dark'   : { description: '',                                              url: undefined },
  },

  /**
   * Basemaps accessible without the need of an API Key.
   * Use of these basemaps requires a valid ArcGIS Online organizational subscription or an ArcGIS Enterprise license.
   */
  noApiKeys: {
    'satellite':                 { description: 'World Imagery',                    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' },
    'hybrid':                    { description: 'Hybrid Reference Layer',           url: 'https://www.arcgis.com/home/item.html?id=30d6b8271e1849cd9c3042060001f425',
              additionalLayers: [{ description: 'World Imagery',                    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' }] },
    'oceans':                    { description: 'World Ocean Reference',            url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer',
              additionalLayers: [{ description: 'World Ocean Base',                 url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer' }] },
    'osm':                       { description: 'OpenStreetMapLayer',               url: 'https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OpenStreetMapLayer.html' },
    'terrain':                   { description: 'World Reference Overlay',          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer',
              additionalLayers: [{ description: 'World Terrain Base',               url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer' }] },
    'dark-gray-vector':          { description: 'Dark Gray Canvas',                 url: 'https://www.arcgis.com/home/item.html?id=c11ce4f7801740b2905eb03ddc963ac8' },
    'gray-vector':               { description: 'Light Gray Canvas',                url: 'https://www.arcgis.com/home/item.html?id=8a2cba3b0ebf4140b7c0dc5ee149549a' },
    'streets-vector':            { description: 'World Street Map',                 url: 'https://www.arcgis.com/home/item.html?id=de26a3cf4cc9451298ea173c4b324736' },
    'streets-night-vector':      { description: 'World Street Map (Night)',         url: 'https://www.arcgis.com/home/item.html?id=86f556a2d1fd468181855a35e344567f' },
    'streets-navigation-vector': { description: 'World Navigation Map',             url: 'https://www.arcgis.com/home/item.html?id=63c47b7177f946b49902c24129b87252' },
    'topo-vector':               { description: 'World Hillshade',                  url: 'https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
              additionalLayers: [{ description: 'World Topographic',                url: 'https://www.arcgis.com/home/item.html?id=7dc6cea0b1764a1f9af2e679f642f0f5' }] },
    'streets-relief-vector':     { description: 'World Hillshade',                  url: 'https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
              additionalLayers: [{ description: 'World Street Map (with Relief)',   url: 'https://www.arcgis.com/home/item.html?id=b266e6d17fc345b498345613930fbd76' }] },
    'topo-vector':               { description: 'World Topo Map',                   url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer' },
    'streets-vector':            { description: 'World Street Map',                 url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer' },
    'dark-gray-vector':          { description: 'World Dark Gray Reference',        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer',
              additionalLayers: [{ description: 'World Dark Gray Base',             url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer' }] },
    'gray-vector':               { description: 'World Light Gray Reference',       url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer',
              additionalLayers: [{ description: 'World Light Gray Base',            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer' }] },
    'national-geographic':       { description: 'National Geographic Style WebMap', url: 'https://www.arcgis.com/home/item.html?id=f33a34de3a294590ab48f246e99958c9',
              additionalLayers: [{ description: 'NatGeo World Map',                 url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer' }] },
  }

}



/**
 * The ArcSpatial class is used as a static container for all geospatial logic of the application.
 */
class ArcSpatial {

  /**
   * The initial map latitude.
   */
  static initialLat = 54.5;

  /**
   * The initial map longitude.
   */
  static initialLon = -2;

  /**
   * The initial map zoom level.
   */
  static initialZoom = 6;

  /**
   * The maximum zoom level of the background layer which holds the maximum zoom level of them.
   */
  static maxZoom = 18;
  
  /**
   * The ArcGIS map.
   */
  static map = null;

  /**
   * The ArcGIS map view.
   */
  static mapView = null;

  /**
   * The constructor of the class which makes sure that the class
   * acts as a static one and can not be instantiated.
   */
   constructor() {
    if (this instanceof ArcSpatial) {
      throw Error('ArcSpatial class is static and cannot be instantiated.');
    }
  }

  /**
   * Initializes the map.
   */
  static initializeMap() {
    
    esriConfig2.apiKey = API_KEY;
    
    ArcSpatial.map = new Map2({
      basemap: "arcgis-light-gray" // Basemap named layer service.
    });
    
    ArcSpatial.mapView = new MapView2({
      map: ArcSpatial.map,
      center: [ArcSpatial.initialLon, ArcSpatial.initialLat],
      zoom: ArcSpatial.initialZoom,
      container: "arcgisMap",
    });

  }

}



/**
 * ================================================================================
 *   ViewModels.
 * ================================================================================
 */

/**
 * The application ViewModel.
 * @type {Vue} = A Vue.js ViewModel.
 */
const appViewModel = new Vue({

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
   */
  data: {

    /**
     * The application state.
     */
    applicationState: {
  
      /**
       * The current state of the application.
       */
      currentState: 'welcome', // TODO: Change to 'initial' to 'welcome' when the application is ready.
      
      /**
       * The possible states of the application in sequence.
       */
      states: [ "welcome", "initial", "askQuestions", "exploreData", "runModels" ],

      /**
       * Indicates whether the user is logged in or not.
       */
      isUserLoggedIn: false, // TODO: Change to false when the application is ready.
      
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
     * The register dialog.
     */
    registerDialog: {

      /**
       * Indicates whether the register dialog is open or not.
       */
      isRegisterDialogOpen: false

    },
      
    /**
     * The search dialog.
     */
    searchDialog: {

      /**
       * Indicates whether the search dialog is open or not.
       */
      isSearchDialogOpen: false,

      // TODO: Documentation
      notifications: false,
      
      /**
       * Indicates whether the search dialog produces sound or not.
       */
      sound: true,
      
      // TODO: Documentation
      widgets: false,
      
      /**
       * The layers filtered by the search dialog.
       */
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
     * The tabs of the application.
     */
    navigationTabs: {

      /**
       * The index of the selected tab.
       */
      selectedTabIndex: 0,

      /**
       * Indicates whether the navigation drawer is visible or not.
       */
      isNavDrawerOpen: false,

      /**
       * The tabs of the application.
       */
      tabs: [
        { state: 'askQuestions', title: 'Ask a Question', icon: 'mdi-head-question' },
        { state: 'exploreData', title: 'Do more with Data', icon: 'mdi-database-search' },
        { state: 'runModels', title: 'Create or Run a model', icon: 'mdi-chart-box' },
      ],

      /**
       * The ask questions tab.
       */
      askQuestionsTab: {

        selectedQuestion: undefined,

        questionItems: AppData.questions.getComboboxItems(),

      }



    },
    

    // questionItems: AppData.questions.getComboboxItems(),
      
      
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

  },

  /**
   * The methods that provide the functionality of the ViewModel.
   * @type {Object} - The object that encapsulates all ViewModel methods.
   */
  methods: {
    
    /**
     * Submits the registration information.
     */
    registerDialog_onSubmit: function() {
      this.registerDialog.isRegisterDialogOpen = false;
    },

    /**
     * Switches the application state.
     * @param {String} state 
     * @return {void}
     */
    applicationState_toState: function(state) {

      if (this.applicationState.states.includes(state)){
        this.applicationState.currentState = state;
      }
      else {
        // TODO: that pattern is a bit strange. Needs discussion.
        throw new Error(`
          state "${state}" does not exist.
          available states are: [${this.applicationState.states}]
        `);
      }

    },


    alertMessage: function (message) {
      alert(message);
    },

    

    /**
     * Gets the text of the login button.
     * @returns {String} - The text of the login button.
     */
    applicationState_GetUserLoginButtonText() {
      return this.applicationState.isUserLoggedIn ? "Logout" : "Login";
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
      // this.loginDialog.username = "";   // Chris: do not clear the username, then after logout you still have the login credentials.
      // this.loginDialog.password = "";   // TODO: if you agree, then remove the these lines.

      // Change the application state.
      this.applicationState.isUserLoggedIn = !this.loginDialog.isLoginError;
      this.applicationState.currentState = "askQuestions"; // TODO: Change to "initial" if a page is needed in between login and navdrawer and when the application is ready.
      
      // Close the login dialog.
      this.loginDialog.isLoginDialogOpen = !this.applicationState.isUserLoggedIn;

      // Make sure the DOM has been updated before calling the map initialization method.
      this.$nextTick(function() {
        
        //TODO: The next tick unfortunately is to remove from the DOM the container with the three buttons.
        //      This causes the issue of the map not being displayed.

        ArcSpatial.initializeMap();

      });
      

      // DOM element innerHTML
      
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

      if (this.searchBar.loading) {
        return;
      }
      
      this.searchBar.searchResults = this.searchBar.items

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
     * Executes when the selected question changes.
     */
    askQuestions_OnSelectedQuestionChanged() {
      this.composeQuestionMap();
    },






    /**
     * Updates the Map based on the active entry in the layers treeview.
     */
    updateMap() {

      Spatial.updateMap(appViewModel.selectedField);

    },

    /**
     * Composes the map associated with the current question.
     */
    composeQuestionMap() {
      Spatial.createQuestionMapLayers(this.navigationTabs.askQuestionsTab.selectedQuestion.value);
    },

    

  }

})




/**
 * ================================================================================
 *   Main Script Body.
 * ================================================================================
 */

// Vue.nextTick(function() {
//   // DOM updated
//   //alert('DOM updated');
//   //console.log('DOM updated');
//   //console.log(appViewModel);
//   //console.log(appViewModel.askQuestionsTab.questionItems);

// });


// Vue.nextTick is called after an element has been created and inserted into the DOM.

