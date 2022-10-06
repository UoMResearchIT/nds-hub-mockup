
/**
 * Imports.
 */
// import esriConfig from "arcgis/core/config";
// import Map from "arcgis/core/Map";
// import MapView from "arcgis/core/views/MapView";

//const API_KEY = "AAPK145053262bd6467ca1964310f4fa5dcbkBC4UJkiXHLfDU5QBdgqQiRIMvqYdlD4sxk5nECzG_HtbwDniS4FuUGs5BQoHDnm";

// let esriConfig = null;
// let Map2 = null;
// let MapView2 = null;

// //require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {
// require(["libs/arcgis-4.24/esri/config", "libs/arcgis-4.24/esri/Map", "libs/arcgis-4.24/esri/views/MapView"], function (esriConfig, Map, MapView) {
//   // alert("Hello World!");
//   esriConfig2 = esriConfig;
//   Map2 = Map;
//   MapView2 = MapView;
// });

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


// require module arcgis javascript 4.24 modu

// const esriConfig = require("esri/config");
// const Map = require("esri/Map");
// const MapView = require("esri/views/MapView");




/**
 * The BaseMapLayers object provides properties and methods related to basemap layers.
 */
 let BaseMapLayers = {

  /**
   * All the names of the basemap layers that are defined by the leaflet providers plugin.
   */
  leafletProviderBaseLayers: {
    OpenStreetMap: {
      Mapnik: {},
      DE: {},
      CH: {},
      France: {},
      HOT: {},
      BZH: {},
    },
    MapTilesAPI: {
      OSMEnglish: { apikey: '' },
      OSMFrancais: { apikey: '' },
      OSMEspagnol: { apikey: '' },
    },
    Stadia: {
      AlidadeSmooth: {},
      AlidadeSmoothDark: {},
      OSMBright: {},
      Outdoors: {},
    },
    Thunderforest: {
      OpenCycleMap: { apikey: '' },
      Transport: { apikey: '' },
      TransportDark: { apikey: '' },
      SpinalMap: { apikey: '' },
      Landscape: { apikey: '' },
      Outdoors: { apikey: '' },
      Pioneer: { apikey: '' },
      MobileAtlas: { apikey: '' },
      Neighbourhood: { apikey: '' },
    },
    Jawg: {
      Streets: { accessToken: ''},
      Terrain: { accessToken: ''},
      Sunny: { accessToken: ''},
      Dark: { accessToken: ''},
      Light: { accessToken: ''},
      Matrix: { accessToken: ''},
    },
    Stamen: {
      Toner: {},
      TonerBackground: {},
      TonerLite: {},
      Watercolor: {},
      Terrain: {},
      TerrainBackground: {},
      TerrainLabels: {},
      TopOSMRelief: {},
    },
    TomTom: {
      Basic: { apikey: '' },
      Hybrid: { apikey: '' },
      Labels: { apikey: '' },
    },
    Esri: {
      WorldStreetMap: {},
      DeLorme: {},
      WorldTopoMap: {},
      WorldImagery: {},
      WorldTerrain: {},
      WorldShadedRelief: {},
      WorldPhysical: {},
      OceanBasemap: {},
      NatGeoWorldMap: {},
      WorldGrayCanvas: {},
    },
    Carto : {
      Positron: {},
      PositronNoLabels: {},
      PositronOnlyLabels: {},
      DarkMatter: {},
      DarkMatterNoLabels: {},
      DarkMatterOnlyLabels: {},
      Voyager: {},
      VoyagerNoLabels: {},
      VoyagerOnlyLabels: {},
      VoyagerLabelsUnder: {},
    },
    HikeBike: {
      HikeBike: {},
      HillShading: {},
    },
    BasemapAT: {
      basemap: {},
      grau: {},
      overlay: {},
      terrain: {},
      surface: {},
      highdpi: {},
      orthophoto: {},
    },
    nlmaps: {
      standaard: {},
      pastel: {},
      grijs: {},
      water: {},
      luchtfoto: {},
    },
    NASAGIBS: {
      ModisTerraTrueColorCR: { }, 
      ModisTerraBands367CR: { }, 
      ViirsEarthAtNight2012: { }, 
    },
    GeoportailFrance: {
      plan: { disabled: true },
      parcels: { disabled: true },
      orthos: { disabled: true },
    },
    OneMapSG: {
      Default: { disabled: true },
      Night: { disabled: true },
      Original: { disabled: true },
      Grey: { disabled: true },
      LandLot: { disabled: true },
    },
    USGS: {
      USTopo: {},
      USImagery: {},
      USImageryTopo: {},
    },
    AzureMaps: {
      MicrosoftImagery: { subscriptionKey: '' },
      MicrosoftBaseDarkGrey: { subscriptionKey: '' },
      MicrosoftBaseRoad: { subscriptionKey: '' },
      MicrosoftBaseHybridRoad: { subscriptionKey: '' },
      MicrosoftTerraMain: { subscriptionKey: '' },
      MicrosoftWeatherInfraredMain: { subscriptionKey: '' },
      MicrosoftWeatherRadarMain: { subscriptionKey: '' },
    },
    SwissFederalGeoportal: {
      NationalMapColor: { disabled: true },
      NationalMapGrey: { disabled: true },
      SWISSIMAGE: { disabled: true },
    },
    X: {
      OPNVKarte: {},
      OpenTopoMap: {},
      CyclOSM: {},
      FreeMapSK: { disabled: true },
      MtbMap: {},
      NLS: {},
    }
    
  },

  /**
   * All the names of the overlay layers that are defined by the leaflet providers plugin.
   */
  leafletProviderOverlayLayers: {
    OpenInfraMap: {
      Power: ['OpenInfraMap.Power', undefined],
      Telecom: ['OpenInfraMap.Telecom', undefined],
      Petroleum: ['OpenInfraMap.Petroleum', undefined],
      Water: ['OpenInfraMap.Water', undefined]
    },
    OpenSeaMap: ['OpenSeaMap', undefined],
    OpenPtMap: ['OpenPtMap', undefined],
    OpenRailwayMap: ['OpenRailwayMap', undefined],
    OpenFireMap: ['OpenFireMap', undefined],
    SafeCast: ['SafeCast', undefined],
    OpenMapSurfer: {
      AdminBounds: ['OpenMapSurfer.AdminBounds', undefined]
    },
    Hydda: {
      RoadsAndLabels: ['Hydda.RoadsAndLabels', undefined]
    },
    Stamen: {
      TonerHybrid: ['Stamen.TonerHybrid', undefined],
      TonerLines: ['Stamen.TonerLines', undefined],
      TonerLabels: ['Stamen.TonerLabels', undefined],
      TopOSMFeatures: ['Stamen.TopOSMFeatures', undefined]
    },
    OpenWeatherMap: {
      Clouds: ['OpenWeatherMap.Clouds', undefined],
      Pressure: ['OpenWeatherMap.Pressure', undefined],
      Wind: ['OpenWeatherMap.Wind', undefined]
    },
    NASAGIBS: {
      ModisTerraLSTDay: ['NASAGIBS.ModisTerraLSTDay', undefined],
      ModisTerraSnowCover: ['NASAGIBS.ModisTerraSnowCover', undefined],
      ModisTerraAOD: ['NASAGIBS.ModisTerraAOD', undefined],
      ModisTerraChlorophyll: ['NASAGIBS.ModisTerraChlorophyll', undefined]
    },
    JusticeMap: {
      income: ['JusticeMap.income', undefined],
      americanIndian: ['JusticeMap.americanIndian', undefined],
      asian: ['JusticeMap.asian', undefined],
      black: ['JusticeMap.black', undefined],
      hispanic: ['JusticeMap.hispanic', undefined],
      multi: ['JusticeMap.multi', undefined],
      nonWhite: ['JusticeMap.nonWhite', undefined],
      white: ['JusticeMap.white', undefined],
      plurality: ['JusticeMap.plurality', undefined]
    }
  },

  /**
   * The named base map layers.
   */
  namedBasemapLayers: {

    /**
     * The basemap layer named Light.
     */
    light: {
      name: 'Light',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Dark.
     */
    dark: {
      name: 'Dark',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Roads.
     */
    roads: {
      name: 'Roads',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Physical.
     */
    physical: {
      name: 'Physical',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Terrain.
     */
    terrain: {
      name: 'Terrain',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Satellite.
     */
    satellite: {
      name: 'Satellite',
      leafletProvider: null,
      mapLayer: null
    }

  },

  /**
   * Sets the the named base map layers.
   */
  setNamedBasemapLayers: function() {

    // Light
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.BlackAndWhite;
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale;
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Toner;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerBackground;
    this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.Positron;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronNoLabels;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronOnlyLabels;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas;

    // Dark
    this.namedBasemapLayers.dark.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterOnlyLabels;

    // Roads
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.Mapnik
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.HOT;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Roads;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Full;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLite;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldStreetMap;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.HikeBike.HikeBike;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels;
    this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Wikimedia;

    // Physical
    this.namedBasemapLayers.physical.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Base;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldPhysical;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTopoMap;

    // Terrain
    this.namedBasemapLayers.terrain.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Terrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TerrainBackground;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTerrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldShadedRelief;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.HikeBike.HillShading;

    // Satellite
    this.namedBasemapLayers.satellite.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldImagery;

  },

  /**
   * Creates the BaseMap layers.
   */
  createBaseMapLayers: function() {

    // Loop through all the named basemap layers and instantiate them.
    for (let namedLayer in this.namedBasemapLayers) {
      if (this.namedBasemapLayers.hasOwnProperty(namedLayer)) {

        const nameIndex = 0;
        const optionsIndex = 1;

        let baseLayer = this.namedBasemapLayers[namedLayer];

        if (baseLayer.leafletProvider[optionsIndex] === undefined) {
          baseLayer.mapLayer = L.tileLayer.provider(baseLayer.leafletProvider[nameIndex]);
        }
        else {
          baseLayer.mapLayer = L.tileLayer.provider(
            baseLayer.leafletProvider[nameIndex],
            baseLayer.leafletProvider[optionsIndex]
          );
        }

      }
    }

  }

};



/**
 * The Spatial class is used as a static container of Spatial Information.
 */
class Spatial {

  /**
   * The initial map latitude.
   */
  static initialLat = 55;

  /**
   * The initial map longitude.
   */
  static initialLon = 2;

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
   * The base map layers that could be used on the map.
   */
  static basemapLayers = {
    'Streets':           L.esri.Vector.vectorBasemapLayer("ArcGIS:Streets",          { apiKey: API_KEY }),
    'Navigation':        L.esri.Vector.vectorBasemapLayer("ArcGIS:Navigation",       { apiKey: API_KEY }),
    'Topographic':       L.esri.Vector.vectorBasemapLayer("ArcGIS:Topographic",      { apiKey: API_KEY }),
    'Light Gray':        L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray",        { apiKey: API_KEY }),
    'Dark Gray':         L.esri.Vector.vectorBasemapLayer("ArcGIS:DarkGray",         { apiKey: API_KEY }),
    'Streets Relief':    L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsRelief",    { apiKey: API_KEY }),
    'Imagery':           L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery",          { apiKey: API_KEY }),
    'Charted Territory': L.esri.Vector.vectorBasemapLayer("ArcGIS:ChartedTerritory", { apiKey: API_KEY }),
    'Colored Pencil':    L.esri.Vector.vectorBasemapLayer("ArcGIS:ColoredPencil",    { apiKey: API_KEY }),
    'Nova':              L.esri.Vector.vectorBasemapLayer("ArcGIS:Nova",             { apiKey: API_KEY }),
    'Midcentury':        L.esri.Vector.vectorBasemapLayer("ArcGIS:Midcentury",       { apiKey: API_KEY }),
    'OSM:Standard':      L.esri.Vector.vectorBasemapLayer("OSM:Standard",            { apiKey: API_KEY }),
    'OSM:Streets':       L.esri.Vector.vectorBasemapLayer("OSM:Streets",             { apiKey: API_KEY }),

    'OSM': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: Spatial.maxZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
  };

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
    
    Spatial.map = L.map('map').setView([Spatial.initialLat, Spatial.initialLon], Spatial.initialZoom);
    // Spatial.map = L.map('map', { center: [Spatial.initialLat, Spatial.initialLon], zoom: Spatial.initialZoom});
    
    // Spatial.basemapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: Spatial.maxZoom,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });
    if (Spatial.basemapLayer != null) {
      Spatial.map.removeLayer(Spatial.basemapLayer);
    }

    Spatial.basemapLayer = Spatial.basemapLayers['OSM'];
    Spatial.basemapLayer.addTo(Spatial.map);

  }

  /**`
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
 * The ArcSpatial class is used as a static container for all geospatial logic of the application.
 */
class ArcSpatial {

  /**
   * The initial map latitude.
   */
  static initialLat = 55;

  /**
   * The initial map longitude.
   */
  static initialLon = 2;

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
      throw Error('arcSpatial class is static and cannot be instantiated.');
    }
  }

  /**
   * Initializes the map.
   */
  static initializeMap() {

    esriConfig2.apiKey = API_KEY;
    ArcSpatial.map = new Map2({
      basemap: "arcgis-topographic" // Basemap layer service
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

        selectedQuestion: null,

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
      this.loginDialog.username = "";
      this.loginDialog.password = "";

      // Change the application state.
      this.applicationState.isUserLoggedIn = !this.loginDialog.isLoginError;
      this.applicationState.currentState = "askQuestions"; // TODO: Change to "initial" if a page is needed in between login and navdrawer and when the application is ready.
      
      // Close the login dialog.
      this.loginDialog.isLoginDialogOpen = !this.applicationState.isUserLoggedIn;

      // Make sure the DOM has been updated before calling the map initialization method.
      this.$nextTick(function() {
        
        
        // if (document.getElementById("arcgisMap").innerHTML !== null || document.getElementById("arcgisMap").innerHTML !== "") {
        //   alert(document.getElementById("arcgisMap").innerHTML);
        // }

        //TODO: The next tick unfortunately is to remove from the DOM the container with the three buttons.
        //      This causes the issue of the map not being displayed.

        Spatial.initializeMap();
        //ArcSpatial.initializeMap();

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

      alert(this.navigationTabs.askQuestionsTab.selectedQuestion.text);

    },

    temp_initializeMap() {
      Spatial.initializeMap();
    }

    

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



//Spatial.initializeMap();

//appViewModel.updateMap();
