# Mockup data / metadata documentation

This document is for documenting the mockup data structures in files:

- `app-data.js`
- `app-data-metadata.js`

## `app-data-metadata.js`

|field|type|description|
|:--|:--|:--|
|`identifier` | `String` | a unique metadata record identifier. |
|`name` | `String` | the name of the resource/dataset/service documented in the fake metadata record. |
|`title` | `String` | a human readable descriptive name of the metadata entry. |
|`abstract` | `String` | a short paragraph for the dataset/service/resource documented in the fake metadata entry. |
|`type` | `Enum String` | the type of the record. `Enum`: `field`, `dataTable` |
|`src` | `Enum String` | the source of the record. `Enum`: `dataset`, `timeseriesDataset`, `service` |
|`url` | `Enum String` | the url pointing to the resource for downloading. |
|`services` | `Array [serviceItem]` | the available services for this resource. |
| | | |
|`serviceItem` | `Object` | service items. |
| | | |
|`serviceItem.id` | `String` | the id of the service. |
|`serviceItem.name` | `String` | the name of the service. |
|`serviceItem.type` | `{Enum String}` | the type of the service.  `Enum`: `wms`, `wfs`, `arcgisMapService`,`arcgisFeatureService` |
|`serviceItem.url` | `{Enum String}` | the url to access the service. |
|`serviceItem.sublayers` | `Array [sublayerItem]` | the sublayers of the default layer of the service. |
| | | |
|`sublayerItem`| `Object`| a sublayer of the default layer of the service. |
| | | |
|`sublayerItem.name`| `name`| the name of the sublayer. |
|`sublayerItem.url`| `url`| the name of the sublayer. |

### app-data-metadata.js Example

```js
AppData.metadata = {
  records: [    {
      identifier: '428', name: "PCM_2020/NO2_MapServer", title: "PCM_2020/NO2 (MapServer)", abstract: "Nitrogen Dioxide annual mean", recordType: "dataTable", src: "dataset", url: "",
      services: [{
        id: 1, name: "PCM_2020/NO2 (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer",
        sublayers: [
          { name: "Nitrogen Dioxide annual mean", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/0" },
          { name: "2020", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/1" },
          { name: "2019", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/2" },
          { name: "2018", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/3" },
        ]
      },]
    }]
}
```
