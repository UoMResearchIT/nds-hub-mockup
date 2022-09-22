/**
 * The Spatial class is used as a static container of Spatial Information.
 */
class Spatial {

  /**
   * The initial map latitute.
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
   * The maximum zoom level of the backgroundlayer which holds the maximum zoom level of them.
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

