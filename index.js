var dotenv = require("dotenv");
console.log(
  encodeURIComponent(
    JSON.stringify([
      {
        featureType: "land",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#091220ff",
        },
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#113549ff",
        },
      },
      {
        featureType: "green",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#0e1b30ff",
        },
      },
      {
        featureType: "building",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#113549ff",
        },
      },
      {
        featureType: "building",
        elementType: "geometry.topfill",
        stylers: {
          color: "#113549ff",
        },
      },
      {
        featureType: "building",
        elementType: "geometry.sidefill",
        stylers: {
          color: "#143e56ff",
        },
      },
      {
        featureType: "building",
        elementType: "geometry.stroke",
        stylers: {
          color: "#dadada00",
        },
      },
      {
        featureType: "subwaystation",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#113549B2",
        },
      },
      {
        featureType: "education",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#12223dff",
        },
      },
      {
        featureType: "medical",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#12223dff",
        },
      },
      {
        featureType: "scenicspots",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          color: "#12223dff",
        },
      },
      {
        featureType: "highway",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          weight: 2,
        },
      },
      {
        featureType: "highway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "highway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#fed66900",
        },
      },
      {
        featureType: "highway",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "highway",
        elementType: "labels.text.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "highway",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "highway",
        elementType: "labels.icon",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "arterial",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          weight: 2,
        },
      },
      {
        featureType: "arterial",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "arterial",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffeebb00",
        },
      },
      {
        featureType: "arterial",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "arterial",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "arterial",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "local",
        elementType: "geometry",
        stylers: {
          visibility: "on",
          weight: 1,
        },
      },
      {
        featureType: "local",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "local",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "local",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "local",
        elementType: "labels.text.fill",
        stylers: {
          color: "#979c9aff",
        },
      },
      {
        featureType: "local",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffffff",
        },
      },
      {
        featureType: "railway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "subway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          weight: 1,
        },
      },
      {
        featureType: "subway",
        elementType: "geometry.fill",
        stylers: {
          color: "#d8d8d8ff",
        },
      },
      {
        featureType: "subway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "subway",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "subway",
        elementType: "labels.text.fill",
        stylers: {
          color: "#979c9aff",
        },
      },
      {
        featureType: "subway",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffffff",
        },
      },
      {
        featureType: "continent",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "continent",
        elementType: "labels.icon",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "continent",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "continent",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "city",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "city",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "city",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "city",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "town",
        elementType: "labels.icon",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "town",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "town",
        elementType: "labels.text.fill",
        stylers: {
          color: "#454d50ff",
        },
      },
      {
        featureType: "town",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffffff",
        },
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "poilabel",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "districtlabel",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "district",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "poilabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "poilabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "poilabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "manmade",
        elementType: "geometry",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "districtlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffffff",
        },
      },
      {
        featureType: "entertainment",
        elementType: "geometry",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "shopping",
        elementType: "geometry",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "nationalway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "6",
        },
      },
      {
        featureType: "nationalway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "7",
        },
      },
      {
        featureType: "nationalway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "8",
        },
      },
      {
        featureType: "nationalway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "9",
        },
      },
      {
        featureType: "nationalway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "10",
        },
      },
      {
        featureType: "nationalway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "6",
        },
      },
      {
        featureType: "nationalway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "7",
        },
      },
      {
        featureType: "nationalway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "8",
        },
      },
      {
        featureType: "nationalway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "9",
        },
      },
      {
        featureType: "nationalway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "10",
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "6",
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "7",
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "8",
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "9",
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,10",
          level: "10",
        },
      },
      {
        featureType: "cityhighway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "6",
        },
      },
      {
        featureType: "cityhighway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "7",
        },
      },
      {
        featureType: "cityhighway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "8",
        },
      },
      {
        featureType: "cityhighway",
        stylers: {
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "9",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "6",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "7",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "8",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "geometry",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "9",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "6",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "7",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "8",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "labels",
        stylers: {
          visibility: "off",
          curZoomRegionId: "0",
          curZoomRegion: "6,9",
          level: "9",
        },
      },
      {
        featureType: "subwaylabel",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "subwaylabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "tertiarywaysign",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "tertiarywaysign",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "provincialwaysign",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "provincialwaysign",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "nationalwaysign",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "nationalwaysign",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "highwaysign",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "highwaysign",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "village",
        elementType: "labels",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "district",
        elementType: "labels.text",
        stylers: {
          fontsize: 20,
        },
      },
      {
        featureType: "district",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "district",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "country",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "country",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "tertiaryway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "tertiaryway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff10",
        },
      },
      {
        featureType: "provincialway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "provincialway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "nationalway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "nationalway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "highway",
        elementType: "labels.text",
        stylers: {
          fontsize: 20,
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels.text.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "nationalway",
        elementType: "labels.text",
        stylers: {
          fontsize: 20,
        },
      },
      {
        featureType: "provincialway",
        elementType: "labels.text.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "provincialway",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "provincialway",
        elementType: "labels.text",
        stylers: {
          fontsize: 20,
        },
      },
      {
        featureType: "cityhighway",
        elementType: "labels.text.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "cityhighway",
        elementType: "labels.text",
        stylers: {
          fontsize: 20,
        },
      },
      {
        featureType: "cityhighway",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "estate",
        elementType: "geometry",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "tertiaryway",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "tertiaryway",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "fourlevelway",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "fourlevelway",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "scenicspotsway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "scenicspotsway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "universityway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "universityway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "vacationway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "vacationway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "fourlevelway",
        elementType: "geometry",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "fourlevelway",
        elementType: "geometry.fill",
        stylers: {
          color: "#12223dff",
        },
      },
      {
        featureType: "fourlevelway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "transportationlabel",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "transportationlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "transportationlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "transportationlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "educationlabel",
        elementType: "labels",
        stylers: {
          visibility: "on",
        },
      },
      {
        featureType: "educationlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "educationlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "educationlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "transportation",
        elementType: "geometry",
        stylers: {
          color: "#113549ff",
        },
      },
      {
        featureType: "airportlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "airportlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "scenicspotslabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "scenicspotslabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "medicallabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "medicallabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "medicallabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "scenicspotslabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "airportlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "entertainmentlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "entertainmentlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "entertainmentlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "estatelabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "estatelabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "estatelabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "businesstowerlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "businesstowerlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "businesstowerlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "companylabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "companylabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "companylabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "governmentlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "governmentlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "governmentlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "restaurantlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "restaurantlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "restaurantlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "hotellabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "hotellabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "hotellabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "shoppinglabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "shoppinglabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "shoppinglabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "lifeservicelabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "lifeservicelabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "lifeservicelabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "carservicelabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "carservicelabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "carservicelabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "financelabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "financelabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "financelabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "otherlabel",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "otherlabel",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "otherlabel",
        elementType: "labels.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        featureType: "manmade",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "manmade",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "transportation",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "transportation",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "education",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "education",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "medical",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "medical",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
      {
        featureType: "scenicspots",
        elementType: "labels.text.fill",
        stylers: {
          color: "#2dc4bbff",
        },
      },
      {
        featureType: "scenicspots",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#ffffff00",
        },
      },
    ])
  )
);
// var md5 = require("md5-node");
// const aa = "&sign=e2c50d90e91c";
// let url =
//   "http://mapapip0.bdimg.com/customimage/tile?qt=customimage&x=47&y=14&z=8&udt=20230707&scale=1&ak=TvYKOGMeqBpXPCSqAciESN1p1xbtwmvI&styles=t%3Aland%7Ce%3Ag%7Cv%3Aon%7Cc%3A%23000&v=3.0";
const x = { version: "1.3.4" };
x.ba = "$BAIDU$";
x.object = x.object || {};
x.extend = x.object.extend = function (a, b) {
  for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  return a;
};
const f0 = function (a) {
  for (
    var b = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        zoom: "z",
        hue: "h",
      },
      c = {
        all: "all",
        geometry: "g",
        "geometry.fill": "g.f",
        "geometry.stroke": "g.s",
        labels: "l",
        "labels.text.fill": "l.t.f",
        "labels.text.stroke": "l.t.s",
        "lables.text": "l.t",
        "labels.icon": "l.i",
      },
      d = [],
      e = 0,
      f;
    (f = a[e]);
    e++
  ) {
    var g = f.stylers;
    delete f.stylers;
    x.extend(f, g);
    var g = [],
      i;
    for (i in b)
      if (f[i])
        if ("elementType" === i) g.push(b[i] + ":" + c[f[i]]);
        else {
          switch (f[i]) {
            case "poilabel":
              f[i] = "poi";
              break;
            case "districtlabel":
              f[i] = "label";
          }
          g.push(b[i] + ":" + f[i]);
        }
    2 < g.length && d.push(g.join("|"));
  }
  return d.join(",");
};

function Gc(a) {
  var b = decodeURIComponent(a.substring(a.indexOf("?") + 1)),
    c = 1689767819812,
    d = "mKTJnrYgXtFDWxl/EOCI7RPaFzGiMSjIttbgWH5zNVY=",
    e =
      "W0_dPvYjact5sF9CvD8_HHzy2_H68b-7_7Ryh0MqU-Cw1rRyq7IWPANiy8ylpacLnjKFko6Vst26G1dU4KMjAk044XVNZTwFWafCtIHcxYTcX-SB6cZWcr1O9kdi1fbyStaf_nz2vS-d056VH_DqoHO8K4F0ixY1RQTi5UbpucM5-DLzk6neluHAC25BLBVj",
    f = encodeURIComponent(d + "," + e);
  -1 === a.indexOf("v=") && ((a += "&v=2.1"), (b += "&v=2.1"));
  return (a =
    a +
    ("&seckey=" + f + "&timeStamp=" + c) +
    Ic()(b + ("&seckey=" + d + "," + e + "&timeStamp=" + c)));
}

function Ic() {
  function a(a) {
    return b[a - 0];
  }
  var b = (function (a, b) {
    function e(a) {
      var b = {
        icxax: function (a, b) {
          return i.ailxm(a, b);
        },
      };
      return g(a, function (a) {
        return b.icxax(f, a);
      });
    }
    function f(a) {
      return i.xhaxa(a, "")[i.aiaea][i.xhaxa(i.cdxai("from", "Char"), l)](a);
    }
    function g(a, b) {
      for (var c = "cxe"; "hxdh" !== c; )
        switch (c) {
          case "lxc":
            return f;
          case i.almmx:
            var d = a.length,
              c = i.laxhh;
            break;
          case i.aadee:
            for (c = 0; i.axehm(c, d); c++) {
              var e = b(a[c]);
              f.push(e);
            }
            c = "lxc";
            break;
          case i.laxhh:
            var f = [],
              c = i.aadee;
        }
    }
    var i = {
        almmx: "cxe",
        laxhh: "eda",
        aadee: "dah",
        axehm: function (a, b) {
          return a < b;
        },
        xhaxa: function (a, b) {
          return a + b;
        },
        aiaea: "constructor",
        cdxai: function (a, b) {
          return a + b;
        },
        ailxm: function (a, b) {
          return a(b);
        },
        ilaxc: function (a, b) {
          return a(b);
        },
        aedia: "1.1.2",
        ddmic: function (a, b, c) {
          return a(b, c);
        },
        iadma: function (a, b) {
          return a(b);
        },
      },
      j,
      l,
      m = decodeURIComponent;
    l = "Code";
    var n = e.call(
      f,
      [
        39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102,
        70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      ]
    );
    j = i.ddmic(g, [28782, 27702, 26416, 25167, 24183], function (a) {
      return m(a);
    });
    var s = e.call(
        j,
        [
          22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547,
          22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368,
          29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673,
          26925, 25249, 24430,
        ]
      ),
      u = {};
    j = i.iadma(e, j);
    var w = RegExp(j.join("|"));
    for (j = 0; i.axehm(j, n.length); j++) u[s[j]] = n[j];
    b = g(b.split(""), function (a) {
      return u[a] || a;
    }).join("");
    return g(b.split(w), function (a) {
      return i.ilaxc(m, a);
    });
  })(
    this,
    "H\u5e52\u6256\u5f6eP\u62a1P\u692dY\u6c19\u6256\u63cbQO\u5e52\u706e\u58a0\u5ef2\u545a\u58a0\u56c4\u624fl\u5ef2\u545a\u6730\u545a\u545a\u5ef2\u58a0\u706ehh\u5ef2\u624f\u5ef2h\u5ef2\u5e77i\u545a\u545a\u58a0\u545a\u5e77il\u59c8\u5ef2\u5ef2\u6730\u7209\u72baL\u66f0O\u6c19R\u6c19\u6256\u6b9b\u62a1\u5f6e\u5f6e\u5e52O\u6c36\u545a\u545a\u735c\u5ef2\u545a\u5e77\u5ef2\u735cl\u6c36\u5ef2l\u59c8\u5ef2\u5ef2\u5e77l\u545a\u72b8\u577ath"
  );
  (function (a, b) {
    for (var e = ++b; --e; ) a.push(a.shift());
  })(b, 236);
  return function (b) {
    for (
      var d = {
          ieexe: a("0x0"),
          ilcaa: a("0x1"),
          eemae: a("0x2"),
          alcaa: function (a, b) {
            return a - b;
          },
          xaexd: a("0x3"),
          laeci: function (a, b) {
            return a + b;
          },
        },
        e = d[a("0x4")];
      e !== d[a("0x5")];

    )
      switch (e) {
        case "lae":
          var f = a("0x6"),
            e = d[a("0x7")];
          break;
        case a("0x8"):
          return "&sign=" + i.substring(d[a("0x9")](i[a("0xa")], 12));
        case a("0x2"):
          var g = a("0xb"),
            e = d[a("0xc")];
          break;
        case "aha":
          var i = md5(md5(d.laeci(b, f)) + g),
            e = a("0x8");
      }
  };
}

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

var config = {
  baidu: {
    udt: process.env.UDT,
    scale: process.env.SCALE,
    ak: process.env.AK,
    v: process.env.V,
    seckey_abvk: process.env.SECKEY_ABVK,
    bmap_seckey: process.env.BMAP_SECKEY,
  },
};
function generateSign(stylesJson, url) {
  const seed = new Date().getTime() % 2;
  let stylesStr = encodeURIComponent(f0(stylesJson));
  const signUrl = Gc(
    `http://mapapip${seed}.bdimg.com/${url}&udt=${config.baidu.udt}&scale=${config.baidu.scale}&ak=${config.baidu.ak}&styles=${stylesStr}&v=${config.baidu.v}`
  );
  return signUrl;
}

const express = require("express");
const app = new express();
var proxy = require("express-http-proxy");
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 50000000000000,
  })
);

app.listen(80, () => {
  console.log("app start at 80");
});

app.use(
  "/customimage",
  proxy("http://mapapip0.bdimg.com", {
    proxyReqPathResolver: function (req, res) {
      return generateSign(
        JSON.parse(req.query.styles),
        `customimage${req.url.split("&styles=")[0]}`
      );
    },
    userResDecorator: function (proxyRes, proxyResData, req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
      );
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      if (req.method == "OPTIONS") {
        res.send(200);
      }
      return proxyResData;
    },
  })
);


const fs = require('fs');
let options = {
 flags: 'a', // 
 encoding: 'utf8', // utf8编码
}
let stderr = fs.createWriteStream('./a.log', options);
// 创建logger
let logger = new console.Console(stderr);
fs.writeFile('./a.log', '', function (err) {
 if(err){
  console.log(err);
 }
});
// 真实项目中调用下面即可记录错误日志
logger.log('这是一条日志1');
logger.log('这是一条日志2');
logger.log('这是一条日志3');