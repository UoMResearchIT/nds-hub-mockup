
/**
 * Imports.
 */
// import esriConfig from "arcgis/core/config";
// import Map from "arcgis/core/Map";
// import MapView from "arcgis/core/views/MapView";

const API_KEY = "AAPK145053262bd6467ca1964310f4fa5dcbkBC4UJkiXHLfDU5QBdgqQiRIMvqYdlD4sxk5nECzG_HtbwDniS4FuUGs5BQoHDnm";

const ESRI = {
  esriConfig: undefined,
  Map: undefined,
  MapView: undefined,
  BasemapGallery: undefined,
  BasemapLayerList: undefined,
}

//require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {
require([
  "libs/arcgis-4.24/esri/config",
  "libs/arcgis-4.24/esri/Map",
  "libs/arcgis-4.24/esri/views/MapView",
  "libs/arcgis-4.24/esri/widgets/BasemapGallery",
  "libs/arcgis-4.24/esri/widgets/BasemapLayerList",
],
function (esriConfig, Map, MapView, BasemapGallery, BasemapLayerList) {
  ESRI.esriConfig = esriConfig;
  ESRI.Map = Map;
  ESRI.MapView = MapView;
  ESRI.BasemapGallery = BasemapGallery;
  ESRI.BasemapLayerList = BasemapLayerList;
});

const BaseMaps = {

  /**
   * Basemaps accessible through the use of an API key.
   * Use of these basemaps requires an ArcGIS Developer subscription.
   */
  apiKeys: {
    'arcgis-imagery'          : { name: 'arcgis-imagery',           description: 'Imagery Hybrid',                                inUse: true,  portalItemId: 'ea3befe305494bb5b2acd77e1b3135dc', url: 'https://www.arcgis.com/home/item.html?id=ea3befe305494bb5b2acd77e1b3135dc' },
    'arcgis-imagery-standard' : { name: 'arcgis-imagery-standard',  description: 'Imagery',                                       inUse: true,  portalItemId: 'c7d2b5c334364e8fb5b73b0f4d6a779b', url: 'https://www.arcgis.com/home/item.html?id=c7d2b5c334364e8fb5b73b0f4d6a779b' },
    'arcgis-imagery-labels'   : { name: 'arcgis-imagery-labels',    description: 'The reference layer from `arcgis-imagery`',     inUse: false, portalItemId: undefined,                          url: undefined },
    'arcgis-light-gray'       : { name: 'arcgis-light-gray',        description: 'Light Gray Canvas',                             inUse: true,  portalItemId: '0f74af7609054be8a29e0ba5f154f0a8', url: 'https://www.arcgis.com/home/item.html?id=0f74af7609054be8a29e0ba5f154f0a8' },
    'arcgis-dark-gray'        : { name: 'arcgis-dark-gray',         description: 'Dark Gray Canvas',                              inUse: true,  portalItemId: '7742cd5abef8497288dc81426266df9b', url: 'https://www.arcgis.com/home/item.html?id=7742cd5abef8497288dc81426266df9b' },
    'arcgis-navigation'       : { name: 'arcgis-navigation',        description: 'Navigation',                                    inUse: true,  portalItemId: '78c096abedb9498380f5db1922f96aa0', url: 'https://www.arcgis.com/home/item.html?id=78c096abedb9498380f5db1922f96aa0' },
    'arcgis-navigation-night' : { name: 'arcgis-navigation-night',  description: 'Navigation (Night',                             inUse: true,  portalItemId: '77073a29526046b89bb5622b6276e933', url: 'https://www.arcgis.com/home/item.html?id=77073a29526046b89bb5622b6276e933' },
    'arcgis-streets'          : { name: 'arcgis-streets',           description: 'Streets',                                       inUse: true,  portalItemId: 'e3e6df1d2f6a485d8a70f28fdd3ce19e', url: 'https://www.arcgis.com/home/item.html?id=e3e6df1d2f6a485d8a70f28fdd3ce19e' },
    'arcgis-streets-night'    : { name: 'arcgis-streets-night',     description: 'Streets (Night',                                inUse: true,  portalItemId: 'b22e146f927e413c92f75b5e4614354a', url: 'https://www.arcgis.com/home/item.html?id=b22e146f927e413c92f75b5e4614354a' },
    'arcgis-streets-relief'   : { name: 'arcgis-streets-relief',    description: 'Streets (with Relief',                          inUse: true,  portalItemId: '03daad361e1849bc80cb7b70ed391379', url: 'https://www.arcgis.com/home/item.html?id=03daad361e1849bc80cb7b70ed391379' },
    'arcgis-topographic'      : { name: 'arcgis-topographic',       description: 'Topographic',                                   inUse: true,  portalItemId: 'dd247558455c4ffab54566901a14f42c', url: 'https://www.arcgis.com/home/item.html?id=dd247558455c4ffab54566901a14f42c' },
    'arcgis-oceans'           : { name: 'arcgis-oceans',            description: 'Oceans',                                        inUse: true,  portalItemId: 'b1dca7ef7b61466785901c41aed89ba5', url: 'https://www.arcgis.com/home/item.html?id=b1dca7ef7b61466785901c41aed89ba5' },
    'osm-standard'            : { name: 'osm-standard',             description: 'OpenStreetMap',                                 inUse: true,  portalItemId: '695aef1564e84c06833542eb4d8c02d3', url: 'https://www.arcgis.com/home/item.html?id=695aef1564e84c06833542eb4d8c02d3' },
    'osm-standard-relief'     : { name: 'osm-standard-relief',      description: 'OpenStreetMap (with Relief',                    inUse: true,  portalItemId: '5b93370c7fc24ca3b8740abd2a55456a', url: 'https://www.arcgis.com/home/item.html?id=5b93370c7fc24ca3b8740abd2a55456a' },
    'osm-streets'             : { name: 'osm-streets',              description: 'OpenStreetMap (Streets',                        inUse: true,  portalItemId: 'bcefe41ce33943ac81d2fd801edd452c', url: 'https://www.arcgis.com/home/item.html?id=bcefe41ce33943ac81d2fd801edd452c' },
    'osm-streets-relief'      : { name: 'osm-streets-relief',       description: 'OpenStreetMap (Streets with Relief',            inUse: true,  portalItemId: 'c6ec0420be5a4e36b57d1ef0f243b175', url: 'https://www.arcgis.com/home/item.html?id=c6ec0420be5a4e36b57d1ef0f243b175' },
    'osm-light-gray'          : { name: 'osm-light-gray',           description: 'OpenStreetMap (Light Gray Canvas',              inUse: true,  portalItemId: '983b312ebd9b4d15a02e00f50acdb1c1', url: 'https://www.arcgis.com/home/item.html?id=983b312ebd9b4d15a02e00f50acdb1c1' },
    'osm-dark-gray'           : { name: 'osm-dark-gray',            description: 'OpenStreetMap (Dark Gray Canvas',               inUse: true,  portalItemId: '7371ca07df4047eaa5f02d09ef12b1a0', url: 'https://www.arcgis.com/home/item.html?id=7371ca07df4047eaa5f02d09ef12b1a0' },
    'arcgis-terrain'          : { name: 'arcgis-terrain',           description: 'Terrain with Labels',                           inUse: true,  portalItemId: '2ef1306b93c9459ca7c7b4f872c070b9', url: 'https://www.arcgis.com/home/item.html?id=2ef1306b93c9459ca7c7b4f872c070b9' },
    'arcgis-community'        : { name: 'arcgis-community',         description: 'Community Map',                                 inUse: true,  portalItemId: '184f5b81589844699ca1e132d007920e', url: 'https://www.arcgis.com/home/item.html?id=184f5b81589844699ca1e132d007920e' },
    'arcgis-charted-territory': { name: 'arcgis-charted-territory', description: 'Charted Territory Map',                         inUse: true,  portalItemId: '303e75b27af043fd835c981ab9accf84', url: 'https://www.arcgis.com/home/item.html?id=303e75b27af043fd835c981ab9accf84' },
    'arcgis-colored-pencil'   : { name: 'arcgis-colored-pencil',    description: 'Colored Pencil Map',                            inUse: true,  portalItemId: 'c0ddf27614bc407f92c35020a9b48afa', url: 'https://www.arcgis.com/home/item.html?id=c0ddf27614bc407f92c35020a9b48afa' },
    'arcgis-nova'             : { name: 'arcgis-nova',              description: 'Nova Map',                                      inUse: true,  portalItemId: '90f86b329f37499096d3715ac6e5ed1f', url: 'https://www.arcgis.com/home/item.html?id=90f86b329f37499096d3715ac6e5ed1f' },
    'arcgis-modern-antique'   : { name: 'arcgis-modern-antique',    description: 'Modern Antique Map',                            inUse: true,  portalItemId: 'b69f2876ce4c4e9db185cdc857fcebc7', url: 'https://www.arcgis.com/home/item.html?id=b69f2876ce4c4e9db185cdc857fcebc7' },
    'arcgis-midcentury'       : { name: 'arcgis-midcentury',        description: 'Mid-Century Map',                               inUse: true,  portalItemId: '52d6a28f09704f04b33761ba7c4bf93f', url: 'https://www.arcgis.com/home/item.html?id=52d6a28f09704f04b33761ba7c4bf93f' },
    'arcgis-newspaper'        : { name: 'arcgis-newspaper',         description: 'Newspaper Map',                                 inUse: true,  portalItemId: 'e3c062eedf8b487b8bb5b9b08db1b7a9', url: 'https://www.arcgis.com/home/item.html?id=e3c062eedf8b487b8bb5b9b08db1b7a9' },
    'arcgis-hillshade-light'  : { name: 'arcgis-hillshade-light',   description: 'The hillshade layer from `arcgis-topographic`', inUse: false, portalItemId: undefined,                          url: undefined },
    'arcgis-hillshade-dark'   : { name: 'arcgis-hillshade-dark',    description: '',                                              inUse: false, portalItemId: undefined,                          url: undefined },
  },

  /**
   * Basemaps accessible without the need of an API Key.
   * Use of these basemaps requires a valid ArcGIS Online organizational subscription or an ArcGIS Enterprise license.
   */
  noApiKeys: {
    'satellite':                 { name: 'satwellite',                description: 'World Imagery',                    inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' },
    'hybrid':                    { name: 'hybrid',                    description: 'Hybrid Reference Layer',           inUse: true, portalItemId: '30d6b8271e1849cd9c3042060001f425', url: 'https://www.arcgis.com/home/item.html?id=30d6b8271e1849cd9c3042060001f425',
              additionalLayers: [{ name: undefined,                   description: 'World Imagery',                    inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' }] },
    'oceans':                    { name: 'oceans',                    description: 'World Ocean Reference',            inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer',
              additionalLayers: [{ name: undefined,                   description: 'World Ocean Base',                 inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer' }] },
    'osm':                       { name: 'osm',                       description: 'OpenStreetMapLayer',               inUse: true, portalItemId: undefined,                          url: 'https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OpenStreetMapLayer.html' },
    'terrain':                   { name: 'terrain',                   description: 'World Reference Overlay',          inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer',
              additionalLayers: [{ name: undefined,                   description: 'World Terrain Base',               inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer' }] },
    'dark-gray-vector':          { name: 'dark-gray-vector',          description: 'Dark Gray Canvas',                 inUse: true, portalItemId: 'c11ce4f7801740b2905eb03ddc963ac8', url: 'https://www.arcgis.com/home/item.html?id=c11ce4f7801740b2905eb03ddc963ac8' },
    'gray-vector':               { name: 'gray-vector',               description: 'Light Gray Canvas',                inUse: true, portalItemId: '8a2cba3b0ebf4140b7c0dc5ee149549a', url: 'https://www.arcgis.com/home/item.html?id=8a2cba3b0ebf4140b7c0dc5ee149549a' },
    'streets-vector':            { name: 'streets-vector',            description: 'World Street Map',                 inUse: true, portalItemId: 'de26a3cf4cc9451298ea173c4b324736', url: 'https://www.arcgis.com/home/item.html?id=de26a3cf4cc9451298ea173c4b324736' },
    'streets-night-vector':      { name: 'streets-night-vector',      description: 'World Street Map (Night)',         inUse: true, portalItemId: '86f556a2d1fd468181855a35e344567f', url: 'https://www.arcgis.com/home/item.html?id=86f556a2d1fd468181855a35e344567f' },
    'streets-navigation-vector': { name: 'streets-navigation-vector', description: 'World Navigation Map',             inUse: true, portalItemId: '63c47b7177f946b49902c24129b87252', url: 'https://www.arcgis.com/home/item.html?id=63c47b7177f946b49902c24129b87252' },
    'topo-vector':               { name: 'topo-vector',               description: 'World Hillshade',                  inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
              additionalLayers: [{ name: undefined,                   description: 'World Topographic',                inUse: true, portalItemId: '7dc6cea0b1764a1f9af2e679f642f0f5', url: 'https://www.arcgis.com/home/item.html?id=7dc6cea0b1764a1f9af2e679f642f0f5' }] },
    'streets-relief-vector':     { name: 'streets-relief-vector',     description: 'World Hillshade',                  inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
              additionalLayers: [{ name: undefined,                   description: 'World Street Map (with Relief)',   inUse: true, portalItemId: 'b266e6d17fc345b498345613930fbd76', url: 'https://www.arcgis.com/home/item.html?id=b266e6d17fc345b498345613930fbd76' }] },
    'topo-vector':               { name: 'topo-vector',               description: 'World Topo Map',                   inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer' },
    'streets-vector':            { name: 'streets-vector',            description: 'World Street Map',                 inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer' },
    'dark-gray-vector':          { name: 'dark-gray-vector',          description: 'World Dark Gray Reference',        inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer',
              additionalLayers: [{ name: undefined,                   description: 'World Dark Gray Base',             inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer' }] },
    'gray-vector':               { name: 'gray-vector',               description: 'World Light Gray Reference',       inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer',
              additionalLayers: [{ name: undefined,                   description: 'World Light Gray Base',            inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer' }] },
    'national-geographic':       { name: 'national-geographic',       description: 'National Geographic Style WebMap', inUse: true, portalItemId: 'f33a34de3a294590ab48f246e99958c9', url: 'https://www.arcgis.com/home/item.html?id=f33a34de3a294590ab48f246e99958c9',
              additionalLayers: [{ name: undefined,                   description: 'NatGeo World Map',                 inUse: true, portalItemId: undefined,                          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer' }] },
  }

}

/**
 * Holds the widgets of the application.
 */
class Widgets {

  /**
   * The widget showing a gallery of basemaps available to the user.
   */
  static basemapGallery = undefined;

  /**
   * The widget showing the list of basemap layers.
   */
  static askQuestionsBaseMapLayerList = undefined;

  /**
   * The constructor of the class which makes sure that the class
   * acts as a static one and can not be instantiated.
   */
  constructor() {
    if (this instanceof Widgets) {
      throw Error('Widgets class is static and cannot be instantiated.');
    }
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
  static map = undefined;

  /**
   * The ArcGIS map view.
   */
  static mapView = undefined;


  

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
    
    ESRI.esriConfig.apiKey = API_KEY;
    
    ArcSpatial.map = new ESRI.Map({
      basemap: "arcgis-light-gray" // Basemap named layer service.
    });
    
    ArcSpatial.mapView = new ESRI.MapView({
      map: ArcSpatial.map,
      center: [ArcSpatial.initialLon, ArcSpatial.initialLat],
      zoom: ArcSpatial.initialZoom,
      container: "arcgisMap",
    });

    // TODO: Add logic depending on current tab.
    Widgets.askQuestionsBaseMapLayerList =  new ESRI.BasemapLayerList({
      container: "askQuestionsBaseMapListContainer",
      view: ArcSpatial.mapView,
    });

    Widgets.basemapGallery = new ESRI.BasemapGallery({
      // container: "askQuestionsBaseMapGalleryContainer",
      view: ArcSpatial.mapView,
      visible: true
    });

    // Add basemap gallery widget to the top right corner of the view.
    ArcSpatial.mapView.ui.add(Widgets.basemapGallery, {
      position: "top-right",
    });

  }

  static updateAskQuestionsMapLegend() {

    // TODO: Add logic depending on current tab.
    Widgets.askQuestionsBaseMapLayerList =  new ESRI.BasemapLayerList({
      container: "askQuestionsBaseMapListContainer",
      view: ArcSpatial.mapView,
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
       * Indicates whether the navigation drawer is visible or not.
       */
      isNavDrawerOpen: false,

      /**
       * The tabs of the application.
       */
      tabs: [
        { state: 'askQuestions', title: 'Ask a Question',        icon: 'mdi-head-question' },
        { state: 'exploreData',  title: 'Do more with Data',     icon: 'mdi-database-search' },
        { state: 'runModels',    title: 'Create or Run a model', icon: 'mdi-chart-box' },
      ],

      /**
       * The ask questions tab.
       */
      askQuestionsTab: {

        selectedQuestion: undefined,

        questionItems: AppData.questions.getComboboxItems(),

      }



    },

    /**
     * The map legend for a time series group of layers.
     */
    timeSeriesMapLegend: {


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
     * Changes the state of the application to the given state.
     * @param {String} state - The new state of the application.
     */
    applicationState_ChangeState(state) {
      this.applicationState.currentState = state;
      alert('applicationState_ChangeState: ' + state);
      this.applicationState_OnStateChanged();
    },

    /**
     * Raised when the state of the application has been changed.
     */
    applicationState_OnStateChanged() {

      if (this.applicationState.currentState === 'askQuestions') {
        
        this.$nextTick(function() {
        
          //TODO: The next tick unfortunately is to remove from the DOM the container with the three buttons.
          //      This causes the issue of the map not being displayed.
  
          //ArcSpatial.initializeMap();
          alert('applicationState_OnStateChanged - next tick: ' + this.applicationState.currentState);

          ArcSpatial.updateAskQuestionsMapLegend();


        });


      }

    },
    
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

    alertMessage2: function () {
      alert(this.navigationTabs.selectedTabIndex);
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

      // TODO: Clearing username/password has been disabled for testing purposes.
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
     * Executed when the tab is selected.
     * @param {String} state - The state of the application.
     */
    navigationTabs_onTabSelected: function (state) {
      this.applicationState_ChangeState(state);
      alert('navigationTabs_onTabSelected: ' + this.applicationState.currentState);
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

