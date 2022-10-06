# ArcGIS metadata doc

[PCM_2020](https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020)


    - **No** Roads!
    - identifier: incremental
    - services: only 1 item
    - 1st layer is 0
    - sublayers are the rest!

- [x] [NOx (as NO2) annual mean][]
- [x] [PM10 annual mean][]
- [x] [PM 2.5 annual mean][]
- [x] [Benzene annual mean][]
- [x] [Carbon Monoxide max-8hr mean][]
- [x] [Carbon Monoxide annual mean][]
- [x] [Ozone (Days greater than 120 μg m-3)][]
- [x] [Sulphur Dioxide annual mean][]
- [x] [Arsenic annual mean][]
- [x] [Benzoa Pyrene annual mean][]
- [x] [Cadmium annual mean][]
- [x] [Lead annual mean][]
- [x] [Nickel annual mean][]

## NO2 example

```js
{
  identifier: '428', name: "PCM_2020/NO2_MapServer", title: "PCM_2020/NO2 (MapServer)", abstract: "Nitrogen Dioxide annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/NO2 (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer",
    sublayers: [
      { name: "Nitrogen Dioxide annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/13" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/14" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/15" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/16" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/17" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/18" },
      { name: "2002", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/19" },
      { name: "2001", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer/20" }
    ]
  }]     
},
{
  identifier: '429', name: "PCM_2020/NOx_MapServer", title: "PCM_2020/NOx (MapServer)", abstract: "NOx (as NO2) annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/NOx (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer",
    sublayers: [
      { name: "NOx (as NO2) annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/13" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/14" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/15" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/16" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/17" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/18" },
      { name: "2002", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/19" },
      { name: "2001", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer/20" }
    ]
  }]     
},
{
  identifier: '430', name: "PCM_2020/PM10_MapServer", title: "PCM_2020/PM10 (MapServer)", abstract: "Nitrogen Dioxide annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/PM10 (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer",
    sublayers: [
      { name: "PM10 annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/13" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/14" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/15" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/16" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/17" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/18" },
      { name: "2002", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/19" },
      { name: "2001", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer/20" }
    ]
  }]     
},
{
  identifier: '431', name: "PCM_2020/PM25_MapServer", title: "PCM_2020/PM25 (MapServer)", abstract: "PM25 annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/PM2.5 (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer",
    sublayers: [
      { name: "PM25 annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/13" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/14" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/15" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/16" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/17" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/18" },
      { name: "2002", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer/19" },
      
    ]
  }]     
},
{
  identifier: '432', name: "PCM_2020/Benzene_MapServer", title: "PCM_2020/Benzene (MapServer)", abstract: "Benzene annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/Benzene (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer",
    sublayers: [
      { name: "Benzene annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/13" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/14" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/15" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/16" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/17" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer/18" },
    ]
  }]     
},
{
  identifier: '433', name: "PCM_2020/CO_MapServer", title: "PCM_2020/CO (MapServer)", abstract: "Carbon Monoxide annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/CO (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer",
    sublayers: [
      { name: " Carbon Monoxide annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/0" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/1" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/2" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/3" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/4" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/5" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/6" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/7" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/8" },
      { name: "2002", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer/9" },
    ]
  }]     
},
{
  identifier: '434', name: "PCM_2020/CO8hr_MapServer", title: "PCM_2020/CO8hr (MapServer)", abstract: "Carbon Monoxide max-8hr mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/CO8hr (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer",
    sublayers: [
      { name: "Carbon Monoxide max-8hr mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/0" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/1" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/2" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/3" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/4" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/5" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/6" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/7" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/8" },
      { name: "2002", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer/9" },
    ]
  }]     
},
{
  identifier: '434', name: "PCM_2020/Ozone_MapServer", title: "PCM_2020/Ozone (MapServer)", abstract: "Ozone (Days greater than 120 µg m<sup>-3</sup>)", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/Ozone (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer",
    sublayers: [
      { name: "Ozone (Days greater than 120 µg m<sup>-3</sup>)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/13" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/14" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/15" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/16" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/17" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer/18" },
    ]
  }]     
},
{
  identifier: '435', name: "PCM_2020/SO2_MapServer", title: "PCM_2020/SO2 (MapServer)", abstract: "Sulphur Dioxide annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/SO2 (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer",
    sublayers: [
      { name: "Sulphur Dioxide annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/13" },
      { name: "2007", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/14" },
      { name: "2006", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/15" },
      { name: "2005", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/16" },
      { name: "2004", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/17" },
      { name: "2003", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/18" },
      { name: "2002", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer/19" },
    ]
  }]     
},
{
  identifier: '436', name: "PCM_2020/Arsenic_MapServer", title: "PCM_2020/Arsenic (MapServer)", abstract: "Arsenic annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/Arsenic (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer",
    sublayers: [
      { name: "Arsenic annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer/13" },
    ]
  }]     
},
{
  identifier: '437', name: "PCM_2020/BaP_MapServer", title: "PCM_2020/BaP (MapServer)", abstract: "Benzo[a]Pyrene annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/BaP (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer",
    sublayers: [
      { name: "Benzo[a]Pyrene annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer/13" },
    ]
  }]     
},
{
  identifier: '438', name: "PCM_2020/Cadmium_MapServer", title: "PCM_2020/Cadmium (MapServer)", abstract: "Cadmium annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/Cadmium (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer",
    sublayers: [
      { name: "Cadmium annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer/13" },
    ]
  }]     
},
{
  identifier: '439', name: "PCM_2020/Lead_MapServer", title: "PCM_2020/Lead (MapServer)", abstract: "Lead annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/Lead (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer",
    sublayers: [
      { name: "Lead annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer/13" },
    ]
  }]     
},
{
  identifier: '440', name: "PCM_2020/Nickel_MapServer", title: "PCM_2020/Nickel (MapServer)", abstract: "Nickel annual mean", recordType: "dataTable", src: "dataset", url: "",
  services: [{ 
    id: 1, name: "PCM_2020/Nickel (MapServer)", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer",
    sublayers: [
      { name: "Nickel annual mean", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/0" },
      { name: "2020", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/1" },
      { name: "2019", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/2" },
      { name: "2018", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/3" },
      { name: "2017", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/4" },
      { name: "2016", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/5" },
      { name: "2015", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/6" },
      { name: "2014", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/7" },
      { name: "2013", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/8" },
      { name: "2012", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/9" },
      { name: "2011", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/10" },
      { name: "2010", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/11" },
      { name: "2009", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/12" },
      { name: "2008", type: "arcgisMapService", url: "https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer/13" },
    ]
  }]     
},
```

[Nitrogen Dioxide annual mean]: https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NO2/MapServer
[NOx (as NO2) annual mean]:  https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/NOx/MapServer
[PM10 annual mean]:  https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM10/MapServer
[PM 2.5 annual mean]:  https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/PM25/MapServer
[Benzene annual mean]:  https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Benzene/MapServer
[Carbon Monoxide annual mean]:  https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO/MapServer
[Carbon Monoxide max-8hr mean]:  https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/CO8hr/MapServer
[Ozone (Days greater than 120 μg m-3)]: https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Ozone/MapServer
[Sulphur Dioxide annual mean]: https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/SO2/MapServer
[Arsenic annual mean]:   https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Arsenic/MapServer
[Benzoa Pyrene annual mean]:   https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/BaP/MapServer
[Cadmium annual mean]:   https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Cadmium/MapServer
[Lead annual mean]:   https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Lead/MapServer
[Nickel annual mean]:   https://ukairmaps.ricardo-aea.com/server/rest/services/PCM_2020/Nickel/MapServer




