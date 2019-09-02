//------------------------------------------------------GeoJSON Map Start
var myGeoJSONPath = 'data/map.json';
var myCustomStyle = {
  stroke: false,
  fill: true,
  fillColor: '#fff',
  fillOpacity: 1
}

//if there's any pop up content, this for each function helps display it on click
function onEachFeature(feature, layer) {
  if(feature.properties) {
    if(feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
    }
  }
}

//all gp location objects (layers)
var bahrain = {
  "type": "Feature",
  "properties": {
      "name": "Bahrain International Circuit",
      "amenity": "Motor racing track",
      "popupContent": "Bahrain GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [50.510556, 26.0325]
  }
};
var sepang = {
  "type": "Feature",
  "properties": {
      "name": "Sepang International Circuit",
      "description": "Motor racing track",
      "popupContent": "Malaysia GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [101.7375, 2.760556]
  }
};
var melbourne = {
  "type": "Feature",
  "properties": {
      "name": "Melbourne Grand Prix Circuit",
      "amenity": "Motor racing track",
      "popupContent": "Australia GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [144.968333, -37.849722]
  }
};
var imola = {
  "type": "Feature",
  "properties": {
      "name": "Autodromo Enzo e Dino Ferrari",
      "amenity": "Motor racing track",
      "popupContent": "Italy GP (Imola)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [11.713333, 44.341111]
  }
};
var nurburgring = {
  "type": "Feature",
  "properties": {
      "name": "Nürburgring",
      "amenity": "Motor racing track",
      "popupContent": "Germany GP (Nürburg)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [6.9475, 50.335556]
  }
};
var circuit_de_catalunya = {
  "type": "Feature",
  "properties": {
      "name": "Circuit de Barcelona-Catalunya",
      "amenity": "Motor racing track",
      "popupContent": "Spain GP (Catalunya)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [2.261111, 41.57]
  }
};
var circuit_de_monaco = {
  "type": "Feature",
  "properties": {
      "name": "Circuit de Monaco",
      "amenity": "Motor racing track",
      "popupContent": "Monaco GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [7.420556, 43.734722]
  }
};
var silverstone = {
  "type": "Feature",
  "properties": {
      "name": "Silverstone Circuit",
      "amenity": "Motor racing track",
      "popupContent": "British GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-1.016944, 52.078611]
  }
};
var circuit_gilles_villeneuve = {
  "type": "Feature",
  "properties": {
      "name": "Circuit Gilles Villeneuve",
      "amenity": "Motor racing track",
      "popupContent": "Canada GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-73.522461, 45.500578]
  }
};
var baku = {
  "type": "Feature",
  "properties": {
      "name": "Baku City Circuit",
      "amenity": "Motor racing track",
      "popupContent": "Baku GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [49.853333, 40.3725]
  }
};
var paul_ricard = {
  "type": "Feature",
  "properties": {
      "name": "Circuit Paul Ricard",
      "amenity": "Motor racing track",
      "popupContent": "France GP (Paul Ricard)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [5.791667, 43.250556]
  }
};
var red_bull_ring = {
  "type": "Feature",
  "properties": {
      "name": "Red Bull Ring",
      "amenity": "Motor racing track",
      "popupContent": "Austria GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [14.764722, 47.219722]
  }
};
var indianapolis = {
  "type": "Feature",
  "properties": {
      "name": "Indianapolis Motor Speedway",
      "amenity": "Motor racing track",
      "popupContent": "USA GP (Indianapolis)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-86.232778, 39.798333]
  }
};
var magny_cours = {
  "type": "Feature",
  "properties": {
      "name": "Circuit de Nevers Magny-Cours",
      "amenity": "Motor racing track",
      "popupContent": "France GP (Magny-Cours)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [3.164228, 46.863242]
  }
};
var hockenheim = {
  "type": "Feature",
  "properties": {
      "name": "Hockenheimring",
      "amenity": "Motor racing track",
      "popupContent": "Germany GP (Hockenheim)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [8.565833, 49.327778]
  }
};
var hungaroring = {
  "type": "Feature",
  "properties": {
      "name": "Hungaroring",
      "amenity": "Motor racing track",
      "popupContent": "Hungary GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [19.251111, 47.582222]
  }
};
var valencia = {
  "type": "Feature",
  "properties": {
      "name": "Valencia Street Circuit",
      "amenity": "Motor racing track",
      "popupContent": "Spain GP (Valencia)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-0.325556, 39.458778]
  }
};
var istanbul = {
  "type": "Feature",
  "properties": {
      "name": "Intercity Istanbul Park",
      "amenity": "Motor racing track",
      "popupContent": "Turkey GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [29.405, 40.951667]
  }
};
var monza = {
  "type": "Feature",
  "properties": {
      "name": "Autodromo Nazionale Monza",
      "amenity": "Motor racing track",
      "popupContent": "Italy GP (Monza)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [9.289444, 45.620556]
  }
};
var spa = {
  "type": "Feature",
  "properties": {
      "name": "Circuit de Spa-Francorchamps",
      "amenity": "Motor racing track",
      "popupContent": "Belgium GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [5.971389, 50.437222]
  }
};
var marina_bay = {
  "type": "Feature",
  "properties": {
      "name": "Marina Bay Street Circuit",
      "amenity": "Motor racing track",
      "popupContent": "Singapore GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [103.86385, 1.291531]
  }
};
var shanghai = {
  "type": "Feature",
  "properties": {
      "name": "Shanghai International Circuit",
      "amenity": "Motor racing track",
      "popupContent": "China GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [121.219722, 31.338889]
  }
};
var fuji = {
  "type": "Feature",
  "properties": {
      "name": "Fuji Speedway",
      "amenity": "Motor racing track",
      "popupContent": "Japan GP (Fuji)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [138.926667, 35.371667]
  }
};
var suzuka = {
  "type": "Feature",
  "properties": {
      "name": "Suzuka International Racing Course",
      "amenity": "Motor racing track",
      "popupContent": "Japan GP (Suzuka)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [136.540556, 34.843056]
  }
};
var korea = {
  "type": "Feature",
  "properties": {
      "name": "Korea International Circuit",
      "amenity": "Motor racing track",
      "popupContent": "Korea GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [126.416667, 34.733333]
  }
};
var buddh = {
  "type": "Feature",
  "properties": {
      "name": "Buddh International Circuit",
      "amenity": "Motor racing track",
      "popupContent": "India GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [77.535, 28.350556]
  }
};
var sochi = {
  "type": "Feature",
  "properties": {
      "name": "Sochi Autodrom",
      "amenity": "Motor racing track",
      "popupContent": "Russia GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [39.968271, 43.410278]
  }
};
var cota = {
  "type": "Feature",
  "properties": {
      "name": "Circuit of the Americas",
      "amenity": "Motor racing track",
      "popupContent": "USA GP (Austin)"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-97.641111, 30.132778]
  }
};
var mexico = {
  "type": "Feature",
  "properties": {
      "name": "Autódromo Hermanos Rodríguez",
      "amenity": "Motor racing track",
      "popupContent": "Mexico GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-99.0925, 19.406111]
  }
};
var interlagos = {
  "type": "Feature",
  "properties": {
      "name": "Autódromo José Carlos Pace",
      "amenity": "Motor racing track",
      "popupContent": "Brazil GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-46.697222, -23.701111]
  }
};
var yas_marina = {
  "type": "Feature",
  "properties": {
      "name": "Yas Marina Circuit",
      "amenity": "Motor racing track",
      "popupContent": "Abu Dhabi GP"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [54.603056, 24.467222]
  }
};

// create new map and set initial view, then add all layers
$.getJSON(myGeoJSONPath, function(data) {
  var map = L.map('map').setView([16, 0], 2);

  L.geoJSON(bahrain).addTo(map);
  L.geoJSON(bahrain, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(sepang).addTo(map);
  L.geoJSON(sepang, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(melbourne).addTo(map);
  L.geoJSON(melbourne, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(imola).addTo(map);
  L.geoJSON(imola, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(nurburgring).addTo(map);
  L.geoJSON(nurburgring, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(circuit_de_catalunya).addTo(map);
  L.geoJSON(circuit_de_catalunya, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(circuit_de_monaco).addTo(map);
  L.geoJSON(circuit_de_monaco, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(silverstone).addTo(map);
  L.geoJSON(silverstone, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(circuit_gilles_villeneuve).addTo(map);
  L.geoJSON(circuit_gilles_villeneuve, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(baku).addTo(map);
  L.geoJSON(baku, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(paul_ricard).addTo(map);
  L.geoJSON(paul_ricard, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(red_bull_ring).addTo(map);
  L.geoJSON(red_bull_ring, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(indianapolis).addTo(map);
  L.geoJSON(indianapolis, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(magny_cours).addTo(map);
  L.geoJSON(magny_cours, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(hockenheim).addTo(map);
  L.geoJSON(hockenheim, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(hungaroring).addTo(map);
  L.geoJSON(hungaroring, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(valencia).addTo(map);
  L.geoJSON(valencia, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(istanbul).addTo(map);
  L.geoJSON(istanbul, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(monza).addTo(map);
  L.geoJSON(monza, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(spa).addTo(map);
  L.geoJSON(spa, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(marina_bay).addTo(map);
  L.geoJSON(marina_bay, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(shanghai).addTo(map);
  L.geoJSON(shanghai, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(fuji).addTo(map);
  L.geoJSON(fuji, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(suzuka).addTo(map);
  L.geoJSON(suzuka, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(korea).addTo(map);
  L.geoJSON(korea, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(buddh).addTo(map);
  L.geoJSON(buddh, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(sochi).addTo(map);
  L.geoJSON(sochi, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(cota).addTo(map);
  L.geoJSON(cota, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(mexico).addTo(map);
  L.geoJSON(mexico, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(interlagos).addTo(map);
  L.geoJSON(interlagos, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJSON(yas_marina).addTo(map);
  L.geoJSON(yas_marina, { onEachFeature: onEachFeature }).addTo(map);

  L.geoJson(data, {
      clickable: true,
      style: myCustomStyle
  }).addTo(map);
})
//------------------------------------------------------GeoJSON Map End