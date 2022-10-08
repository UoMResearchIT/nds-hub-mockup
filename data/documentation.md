# Mockup data / metadata documentation

This document is for documenting the mockup data structures in files:

- `app-data.js`
- `app-data-metadata.js`

## `app-data-metadata.js`

|field|type|description|
|:--|:--|:--|
|`identifier` | `String` | A unique metadata record identifier. |
|`name` | `String` | The name of the resource/dataset/service documented in the fake metadata record. |
|`title` | `String` | A human readable descriptive name of the metadata entry. |
|`abstract` | `String` | A short paragraph for the dataset/service/resource documented in the fake metadata entry. |
|`type` | `Enum String` | The type of the record. `Enum`: `field`, `dataTable` |
|`src` | `Enum String` | The source of the record. `Enum`: `dataset`, `timeseriesDataset`, `service` |
|`url` | `Enum String` | The url pointing to the resource for downloading. |
|`services` | `Array [serviceItem]` | The available services for this resource. |
| | | |
|`serviceItem` | `Object` | Service items. |
| | | |
|`serviceItem.id` | `String` | The id of the service. |
|`serviceItem.name` | `String` | The name of the service. |
|`serviceItem.type` | `{Enum String}` | The type of the service.  `Enum`: `wms`, `wfs`, `arcgisMapService`,`arcgisFeatureService` |
|`serviceItem.url` | `{Enum String}` | The url to access the service. |
|`serviceItem.sublayers` | `Array [sublayerItem]` | The sublayers of the default layer of the service. |
| | | |
|`sublayerItem`| `Object`| A sublayer of the default layer of the service. |
| | | |
|`sublayerItem.name`| `name`| The name of the sublayer. |
|`sublayerItem.url`| `url`| The name of the sublayer. |

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
