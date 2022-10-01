# Mockup data documentation

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
|`services` | `{Object}` | the available services for this resource. |
|`services.name` | `String` | the name of the service. |
|`services.type` | `{Enum String}` | the type of the service.  `Enum`: `wms`, `wfs`, `arcgisMapService`,`arcgisFeatureService` |
|`services.url` | `{Enum String}` | the url to access the service. |

### app-data-metadata.js Example

```js
AppData.metadata = {
  records: [{ 
    identifier: '101', 
    name: "AbsH10Day", 
    title: "Absolute Humidity 10 Days Period", 
    abstract: "AbsH10Day-Description", 
    recordType: "field", 
    src: "dataset", 
    url: "",
    services: {
      name: "serviceName"
      type: "wms",
      url: "serviceUrl",
    }
  }]
}
```
