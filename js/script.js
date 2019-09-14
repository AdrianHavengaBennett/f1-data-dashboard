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

//------------------------------------------------------D3/DC/Crossfilter Graphs/Charts/Numbers Start

//wait for data to load
queue()
      .defer(d3.csv, "data/f1_dataset.csv")
      .await(makeGraphs);

//if data loads successfully, create function, if not, throw error
function makeGraphs(error, data) {
  var ndx = crossfilter(data);

  //make sure all numbers are integers
  data.forEach(function(d) {
    d.season = parseInt(d.season);
    d.race_no = parseInt(d.race_no);
    d.champ_points = parseInt(d.champ_points);
    d.runner_up_points = parseInt(d.runner_up_points);
    d.quali_time = parseInt(d.quali_time);
    d.avg_quali_speed = parseInt(d.avg_quali_speed);
    d.fast_lap_time = parseInt(d.fast_lap_time);
    d.avg_fast_lap_speed = parseInt(d.avg_fast_lap_speed);
  });

  show_all_info(ndx);

  //------------------------------------------------------Custom jQuery start
  
  $("#nav-toggle").click(function() {
    $(".nav-buttons").slideToggle(500, "swing");
  });

  $(".fa-question-circle").click(function() {
    $(this).children(".info").toggle();
    $(this).css("class", "info-icon").toggleClass("fa-question-circle").toggleClass("fa-times");
  });

  d3.select("#all-seasons").on("click.foo", function() {
    //prevents the anchor tags from jumping to the top of the screen
    event.preventDefault(); 
    //calls graphs/charts, etc.
    show_all_info(ndx); 
    //determines current screen size and how to react to it
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "0%" }, 1000);
      $(".specific-bg-color").animate({ right: "0%" }, 1000);
      console.log(say_hello("All"));
    } else {
      $(".specific-bg-color").css("position", "absolute");
    }
  });

  d3.select("#s-06").on("click.foo", function() {
    event.preventDefault();
    show_06_info(ndx);
    $("#world-champ").html("Fernando Alonso ");
    $("#sealed-at").html("Race 18: Brazil ");
    //remove all other flags before adding correct one
    $("#champ-flag").removeClass("flag-icon-fi").removeClass("flag-icon-gb").removeClass("flag-icon-de").addClass("flag-icon-es ");
    //remove all other flags before adding correct one
    $("#country-flag").removeClass("flag-icon-ae").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-br ");

    $("#oon-gold-driver").html("Jenson Button: ");
    $("#oon-silver-driver").html("Michael Schumacher: ");
    $("#oon-bronze-driver").html("Fernando Alonso: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Felipe Massa: ");
    $("#ihs-silver-driver").html("Fernando Alonso: ");
    $("#ihs-bronze-driver").html("Michael Schumacher: ");

    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Michael Schumacher: ");
    $("#aiad-silver-driver").html("Fernando Alonso: ");

    $("#sd-driver").html("Kimi Raikkonen");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2006")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-07").on("click.foo", function() {
    event.preventDefault();
    show_07_info(ndx);
    $("#world-champ").html("Kimi Raikkonen ");
    $("#sealed-at").html("Race 17: Brazil ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-gb").removeClass("flag-icon-de").addClass("flag-icon-fi ");
    $("#country-flag").removeClass("flag-icon-ae").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-br ");

    $("#oon-gold-driver").html("Kimi Raikkonen: ");
    $("#oon-silver-driver").html("Fernando Alonso: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Felipe Massa: ");
    $("#ihs-bronze-driver").html("Kimi Raikkonen: ");
    
    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").show();
    $("#aiad-gold-driver").html("Fernando Alonso: ");
    $("#aiad-silver-driver").html("Felipe Massa: ");
    $("#aiad-bronze-driver").html("Lewis Hamilton: ");

    $("#sd-driver").html("Kimi Raikkonen");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2007")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-08").on("click.foo", function() {
    event.preventDefault();
    show_08_info(ndx);
    $("#world-champ").html("Lewis Hamilton ");
    $("#sealed-at").html("Race 18: Brazil ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-de").addClass("flag-icon-gb ");
    $("#country-flag").removeClass("flag-icon-ae").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-br ");

    $("#oon-gold-driver").html("Fernando Alonso: ");
    $("#oon-silver-driver").html("Felipe Massa: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    $("#ihs-silver-driver").html("Lewis Hamilton: ");
    $("#ihs-bronze-driver").html("Felipe Massa: ");
    
    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").show();
    $("#aiad-gold-driver").html("Felipe Massa: ");
    $("#aiad-silver-driver").html("Lewis Hamilton: ");
    $("#aiad-bronze-driver").html("Kimi Raikkonen: ");

    $("#sd-driver").html("Heikki Kovalainen");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2008")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-09").on("click.foo", function() {
    event.preventDefault();
    show_09_info(ndx);
    $("#world-champ").html("Jenson Button ");
    $("#sealed-at").html("Race 16: Brazil ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-de").addClass("flag-icon-gb ");
    $("#country-flag").removeClass("flag-icon-ae").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-br ");

    $("#oon-gold-driver").html("Rubens Barrichello: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    $("#ihs-silver-driver").html("Jenson Button: ");
    $("#ihs-bronze-driver").html("Lewis Hamilton: ");

    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Jenson Button: ");
    $("#aiad-silver-driver").html("Sebastian Vettel: ");

    $("#sd-driver").html("Sebastian Vettel");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2009")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-10").on("click.foo", function() {
    event.preventDefault();
    show_10_info(ndx);
    $("#world-champ").html("Sebastian Vettel ");
    $("#sealed-at").html("Race 19: Abu Dhabi ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-gb").addClass("flag-icon-de ");
    $("#country-flag").removeClass("flag-icon-br").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-ae ");
    
    $("#oon-gold-driver").html("Jenson Button: ");
    $("#oon-silver-driver").html("Lewis Hamilton: ");
    $("#oon-bronze-driver").html("Fernando Alonso: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    $("#ihs-silver-driver").html("Mark Webber: ");
    $("#ihs-bronze-driver").html("Fernando Alonso: ");
    
    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Fernando Alonso: ");

    $("#sd-driver").html("Fernando Alonso: ");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2010")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-11").on("click.foo", function() {
    event.preventDefault();
    show_11_info(ndx);
    $("#world-champ").html("Sebastian Vettel ");
    $("#sealed-at").html("Race 15: Japan ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-gb").addClass("flag-icon-de ");
    $("#country-flag").removeClass("flag-icon-br").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-ae").removeClass("flag-icon-in").addClass("flag-icon-jp ");
    
    $("#oon-gold-driver").html("Jenson Button: ");
    $("#oon-silver-driver").html("Lewis Hamilton: ");
    $("#oon-bronze-driver").html("Mark Webber: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").hide();
    $("#in-his-stride-bronze").hide();
    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    
    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Sebastian Vettel: ");

    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2011")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-12").on("click.foo", function() {
    event.preventDefault();
    show_12_info(ndx);
    $("#world-champ").html("Sebastian Vettel ");
    $("#sealed-at").html("Race 20: Brazil ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-gb").addClass("flag-icon-de ");
    $("#country-flag").removeClass("flag-icon-ae").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-br ");
    
    $("#oon-gold-driver").html("Mark Webber: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Pastor Maldonado: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Nico Rosberg: ");
    $("#ihs-silver-driver").html("Sebastian Vettel: ");
    $("#ihs-bronze-driver").html("Lewis Hamilton: ");

    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Sebastian Vettel: ");
    
    $("#sd-driver").html("Jenson Button");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2012")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-13").on("click.foo", function() {
    event.preventDefault();
    show_13_info(ndx);
    $("#world-champ").html("Sebastian Vettel ");
    $("#sealed-at").html("Race 16: India ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-gb").addClass("flag-icon-de ");
    $("#country-flag").removeClass("flag-icon-ae").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-br").addClass("flag-icon-in ");
    
    $("#oon-gold-driver").html("Fernando Alonso: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Nico Rosberg: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Sebastian Vettel: ");
    $("#ihs-bronze-driver").html("Nico Rosberg: ");

    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Sebastian Vettel: ");
    
    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2013")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-14").on("click.foo", function() {
    event.preventDefault();
    show_14_info(ndx);
    $("#world-champ").html("Lewis Hamilton ");
    $("#sealed-at").html("Race 19: Abu Dhabi ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-de").addClass("flag-icon-gb ");
    $("#country-flag").removeClass("flag-icon-br").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-ae ");
    
    $("#oon-gold-driver").html("Daniel Ricciardo: ");
    $("#oon-silver-driver").html("Lewis Hamilton: ");
    $("#oon-bronze-driver").html("Nico Rosberg: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").hide();
    $("#ihs-gold-driver").html("Nico Rosberg: ");
    $("#ihs-silver-driver").html("Lewis Hamilton: ");

    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Lewis Hamilton: ");
    
    $("#sd-driver").html("Nico Rosberg");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2014")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-15").on("click.foo", function() {
    event.preventDefault();
    show_15_info(ndx);
    $("#world-champ").html("Lewis Hamilton ");
    $("#sealed-at").html("Race 16: USA ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-de").addClass("flag-icon-gb ");
    $("#country-flag").removeClass("flag-icon-br").removeClass("flag-icon-ae").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-us ");
    
    $("#oon-gold-driver").html("Sebastian Vettel: ");
    $("#oon-silver-driver").html("Nico Rosberg: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Nico Rosberg: ");
    $("#ihs-bronze-driver").html("Sebastian Vettel: ");
    
    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Lewis Hamilton: ");
    $("#aiad-silver-driver").html("Nico Rosberg: ");

    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2015")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-16").on("click.foo", function() {
    event.preventDefault();
    show_16_info(ndx);
    $("#world-champ").html("Nico Rosberg ");
    $("#sealed-at").html("Race 21: Abu Dhabi ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-gb").addClass("flag-icon-de ");
    $("#country-flag").removeClass("flag-icon-br").removeClass("flag-icon-us").removeClass("flag-icon-mx").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-ae ");
    
    $("#oon-gold-driver").html("Daniel Ricciardo: ");
    $("#oon-silver-driver").html("Max Verstappen: ");
    $("#oon-bronze-driver").html("Nico Rosberg: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").hide();
    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Nico Rosberg: ");
    
    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Nico Rosberg: ");
    $("#aiad-silver-driver").html("Lewis Hamilton: ");
    
    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2016")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-17").on("click.foo", function() {
    event.preventDefault();
    show_17_info(ndx);
    $("#world-champ").html("Lewis Hamilton ");
    $("#sealed-at").html("Race 18: Mexico ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-de").addClass("flag-icon-gb ");
    $("#country-flag").removeClass("flag-icon-br").removeClass("flag-icon-us").removeClass("flag-icon-ae").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-mx ");
    
    $("#oon-gold-driver").html("Max Verstappen: ");
    $("#oon-silver-driver").html("Daniel Ricciardo: ");
    $("#oon-bronze-driver").html("Sebastian Vettel: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Valtteri Bottas: ");
    $("#ihs-bronze-driver").html("Sebastian Vettel: ");
    
    $("#all-in-a-day-gold").show();
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#aiad-gold-driver").html("Lewis Hamilton: ");
    $("#aiad-silver-driver").html("Valtteri Bottas: ");
    
    $("#sd-driver").html("Valtteri Bottas");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2017")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  d3.select("#s-18").on("click.foo", function() {
    event.preventDefault();
    show_18_info(ndx);
    $("#world-champ").html("Lewis Hamilton ");
    $("#sealed-at").html("Race 19: Mexico ");
    $("#champ-flag").removeClass("flag-icon-es").removeClass("flag-icon-fi").removeClass("flag-icon-de").addClass("flag-icon-gb ");
    $("#country-flag").removeClass("flag-icon-br").removeClass("flag-icon-us").removeClass("flag-icon-ae").removeClass("flag-icon-jp").removeClass("flag-icon-in").addClass("flag-icon-mx ");
    
    $("#oon-gold-driver").html("Max Verstappen: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Sebastian Vettel: ");

    $("#in-his-stride-gold").show();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Daniel Ricciardo: ");
    $("#ihs-bronze-driver").html("Sebastian Vettel: ");

    $("#all-in-a-day-gold").hide();
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    
    $("#sd-driver").html("Kimi Raikkonen");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-50%" }, 1000);
      console.log(say_hello("2018")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  //------------------------------------------------------Custom jQuery end
}

//silly greeting on jquery buttons to confirm the event has been triggered
function say_hello(year) {
  return `Hello, ${year}!`;
}

//********************************************************ALL INFO FUNCTION CALLS */

function show_all_info(ndx) {
  show_all_wins_pie(ndx);
  show_all_poles_pie(ndx);
  show_all_fast_laps_pie(ndx);
  show_all_constructor_points(ndx);
}

//********************************************************2006 INFO FUNCTION CALLS */
function show_06_info(ndx) {
  show_wins_pie(ndx, "06");
  show_poles_pie(ndx, "06");
  show_fast_laps_pie(ndx, "06");
  show_points(ndx, "06");
  show_driver_world_champ_chart(ndx, "06", "Fernando Alonso");
  show_out_of_nowhere_percentage_gold(ndx, "06", "Jenson Button", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "06", "Michael Schumacher", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "06", "Fernando Alonso", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "06", "Felipe Massa", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "06", "Fernando Alonso", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "06", "Michael Schumacher", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "06", "Michael Schumacher", "#all-in-a-day-gold");
  show_all_in_a_day_number_silver(ndx, "06", "Fernando Alonso", "#all-in-a-day-silver");
  show_quali_speed_demon(ndx, "06", "Kimi Raikkonen", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "06", "Kimi Raikkonen", "#sd-fast-laps");
}

//********************************************************2007 INFO FUNCTION CALLS */
function show_07_info(ndx) {
  show_wins_pie(ndx, "07");
  show_poles_pie(ndx, "07");
  show_fast_laps_pie(ndx, "07");
  show_points(ndx, "07");
  show_driver_world_champ_chart(ndx, "07", "Kimi Raikkonen");
  show_out_of_nowhere_percentage_gold(ndx, "07", "Kimi Raikkonen", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "07", "Fernando Alonso", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "07", "Lewis Hamilton", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "07", "Felipe Massa", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "07", "Lewis Hamilton", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "07", "Kimi Raikkonen", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "07", "Fernando Alonso", "#all-in-a-day-gold");
  show_all_in_a_day_number_silver(ndx, "07", "Felipe Massa", "#all-in-a-day-silver");
  show_all_in_a_day_number_bronze(ndx, "07", "Lewis Hamilton", "#all-in-a-day-bronze");
  show_quali_speed_demon(ndx, "07", "Kimi Raikkonen", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "07", "Kimi Raikkonen", "#sd-fast-laps");
}

//********************************************************2008 INFO FUNCTION CALLS */
function show_08_info(ndx) {
  show_wins_pie(ndx, "08");
  show_poles_pie(ndx, "08");
  show_fast_laps_pie(ndx, "08");
  show_points(ndx, "08");
  show_driver_world_champ_chart(ndx, "08", "Lewis Hamilton");
  show_out_of_nowhere_percentage_gold(ndx, "08", "Fernando Alonso", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "08", "Felipe Massa", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "08", "Lewis Hamilton", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "08", "Sebastian Vettel", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "08", "Lewis Hamilton", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "08", "Felipe Massa", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "08", "Felipe Massa", "#all-in-a-day-gold");
  show_all_in_a_day_number_silver(ndx, "08", "Lewis Hamilton", "#all-in-a-day-silver");
  show_all_in_a_day_number_bronze(ndx, "08", "Kimi Raikkonen", "#all-in-a-day-bronze");
  show_quali_speed_demon(ndx, "08", "Heikki Kovalainen", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "08", "Heikki Kovalainen", "#sd-fast-laps");
}

//********************************************************2009 INFO FUNCTION CALLS */
function show_09_info(ndx) {
  show_wins_pie(ndx, "09");
  show_poles_pie(ndx, "09");
  show_fast_laps_pie(ndx, "09");
  show_points(ndx, "09");
  show_driver_world_champ_chart(ndx, "09", "Jenson Button");
  show_out_of_nowhere_percentage_gold(ndx, "09", "Rubens Barrichello", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "09", "Kimi Raikkonen", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "09", "Lewis Hamilton", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "09", "Sebastian Vettel", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "09", "Jenson Button", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "09", "Lewis Hamilton", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "09", "Jenson Button", "#all-in-a-day-gold");
  show_all_in_a_day_number_silver(ndx, "09", "Sebastian Vettel", "#all-in-a-day-silver");
  show_quali_speed_demon(ndx, "09", "Sebastian Vettel", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "09", "Sebastian Vettel", "#sd-fast-laps");
}

//********************************************************2010 INFO FUNCTION CALLS */
function show_10_info(ndx) {
  show_wins_pie(ndx, "10");
  show_poles_pie(ndx, "10");
  show_fast_laps_pie(ndx, "10");
  show_points(ndx, "10");
  show_driver_world_champ_chart(ndx, "10", "Sebastian Vettel");
  show_out_of_nowhere_percentage_gold(ndx, "10", "Jenson Button", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "10", "Lewis Hamilton", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "10", "Fernando Alonso", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "10", "Sebastian Vettel", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "10", "Mark Webber", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "10", "Fernando Alonso", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "10", "Fernando Alonso", "#all-in-a-day-gold");
  show_quali_speed_demon(ndx, "10", "Fernando Alonso", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "10", "Fernando Alonso", "#sd-fast-laps");
}

//********************************************************2011 INFO FUNCTION CALLS */
function show_11_info(ndx) {
  show_wins_pie(ndx, "11");
  show_poles_pie(ndx, "11");
  show_fast_laps_pie(ndx, "11");
  show_points(ndx, "11");
  show_driver_world_champ_chart(ndx, "11", "Sebastian Vettel");
  show_out_of_nowhere_percentage_gold(ndx, "11", "Jenson Button", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "11", "Lewis Hamilton", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "11", "Mark Webber", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "11", "Sebastian Vettel", "#in-his-stride-gold");
  show_all_in_a_day_number_gold(ndx, "11", "Sebastian Vettel", "#all-in-a-day-gold");
  show_quali_speed_demon(ndx, "11", "Lewis Hamilton", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "11", "Lewis Hamilton", "#sd-fast-laps");
}

//********************************************************2012 INFO FUNCTION CALLS */
function show_12_info(ndx) {
  show_wins_pie(ndx, "12");
  show_poles_pie(ndx, "12");
  show_fast_laps_pie(ndx, "12");
  show_points(ndx, "12");
  show_driver_world_champ_chart(ndx, "12", "Sebastian Vettel");
  show_out_of_nowhere_percentage_gold(ndx, "12", "Mark Webber", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "12", "Kimi Raikkonen", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "12", "Pastor Maldonado", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "12", "Nico Rosberg", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "12", "Sebastian Vettel", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "12", "Lewis Hamilton", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "12", "Sebastian Vettel", "#all-in-a-day-gold");
  show_quali_speed_demon(ndx, "12", "Jenson Button", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "12", "Jenson Button", "#sd-fast-laps");
}

//********************************************************2013 INFO FUNCTION CALLS */
function show_13_info(ndx) {
  show_wins_pie(ndx, "13");
  show_poles_pie(ndx, "13");
  show_fast_laps_pie(ndx, "13");
  show_points(ndx, "13");
  show_driver_world_champ_chart(ndx, "13", "Sebastian Vettel");
  show_out_of_nowhere_percentage_gold(ndx, "13", "Fernando Alonso", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "13", "Kimi Raikkonen", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "13", "Nico Rosberg", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "13", "Lewis Hamilton", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "13", "Sebastian Vettel", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "13", "Nico Rosberg", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "13", "Sebastian Vettel", "#all-in-a-day-gold");
  show_quali_speed_demon(ndx, "13", "Lewis Hamilton", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "13", "Lewis Hamilton", "#sd-fast-laps");
}

//********************************************************2014 INFO FUNCTION CALLS */
function show_14_info(ndx) {
  show_wins_pie(ndx, "14");
  show_poles_pie(ndx, "14");
  show_fast_laps_pie(ndx, "14");
  show_points(ndx, "14");
  show_driver_world_champ_chart(ndx, "14", "Lewis Hamilton");
  show_out_of_nowhere_percentage_gold(ndx, "14", "Daniel Ricciardo", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "14", "Lewis Hamilton", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "14", "Nico Rosberg", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "14", "Nico Rosberg", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "14", "Lewis Hamilton", "#in-his-stride-silver");
  show_all_in_a_day_number_gold(ndx, "14", "Lewis Hamilton", "#all-in-a-day-gold");
  show_quali_speed_demon(ndx, "14", "Nico Rosberg", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "14", "Nico Rosberg", "#sd-fast-laps");
}

//********************************************************2015 INFO FUNCTION CALLS */
function show_15_info(ndx) {
  show_wins_pie(ndx, "15");
  show_poles_pie(ndx, "15");
  show_fast_laps_pie(ndx, "15");
  show_points(ndx, "15");
  show_driver_world_champ_chart(ndx, "15", "Lewis Hamilton");
  show_out_of_nowhere_percentage_gold(ndx, "15", "Sebastian Vettel", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "15", "Nico Rosberg", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "15", "Lewis Hamilton", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "15", "Lewis Hamilton", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "15", "Nico Rosberg", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "15", "Sebastian Vettel", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "15", "Lewis Hamilton", "#all-in-a-day-gold");
  show_all_in_a_day_number_silver(ndx, "15", "Nico Rosberg", "#all-in-a-day-silver");
  show_quali_speed_demon(ndx, "15", "Lewis Hamilton", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "15", "Lewis Hamilton", "#sd-fast-laps");
}

//********************************************************2016 INFO FUNCTION CALLS */
function show_16_info(ndx) {
  show_wins_pie(ndx, "16");
  show_poles_pie(ndx, "16");
  show_fast_laps_pie(ndx, "16");
  show_points(ndx, "16");
  show_driver_world_champ_chart(ndx, "16", "Nico Rosberg");
  show_out_of_nowhere_percentage_gold(ndx, "16", "Daniel Ricciardo", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "16", "Max Verstappen", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "16", "Nico Rosberg", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "16", "Lewis Hamilton", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "16", "Nico Rosberg", "#in-his-stride-silver");
  show_all_in_a_day_number_gold(ndx, "16", "Nico Rosberg", "#all-in-a-day-gold");
  show_all_in_a_day_number_silver(ndx, "16", "Lewis Hamilton", "#all-in-a-day-silver");
  show_quali_speed_demon(ndx, "16", "Lewis Hamilton", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "16", "Lewis Hamilton", "#sd-fast-laps");
}

//********************************************************2017 INFO FUNCTION CALLS */
function show_17_info(ndx) {
  show_wins_pie(ndx, "17");
  show_poles_pie(ndx, "17");
  show_fast_laps_pie(ndx, "17");
  show_points(ndx, "17");
  show_driver_world_champ_chart(ndx, "17", "Lewis Hamilton");
  show_out_of_nowhere_percentage_gold(ndx, "17", "Max Verstappen", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "17", "Daniel Ricciardo", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "17", "Sebastian Vettel", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "17", "Lewis Hamilton", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "17", "Valtteri Bottas", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "17", "Sebastian Vettel", "#in-his-stride-bronze");
  show_all_in_a_day_number_gold(ndx, "17", "Lewis Hamilton", "#all-in-a-day-gold");
  show_all_in_a_day_number_silver(ndx, "17", "Valtteri Bottas", "#all-in-a-day-silver");
  show_quali_speed_demon(ndx, "17", "Valtteri Bottas", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "17", "Valtteri Bottas", "#sd-fast-laps");
}

//********************************************************2018 INFO FUNCTION CALLS */
function show_18_info(ndx) {
  show_wins_pie(ndx, "18");
  show_poles_pie(ndx, "18");
  show_fast_laps_pie(ndx, "18");
  show_points(ndx, "18");
  show_driver_world_champ_chart(ndx, "18", "Lewis Hamilton");
  show_out_of_nowhere_percentage_gold(ndx, "18", "Max Verstappen", "#out-of-nowhere-gold");
  show_out_of_nowhere_percentage_silver(ndx, "18", "Kimi Raikkonen", "#out-of-nowhere-silver");
  show_out_of_nowhere_percentage_bronze(ndx, "18", "Sebastian Vettel", "#out-of-nowhere-bronze");
  show_in_his_stride_percentage_gold(ndx, "18", "Lewis Hamilton", "#in-his-stride-gold");
  show_in_his_stride_percentage_silver(ndx, "18", "Daniel Ricciardo", "#in-his-stride-silver");
  show_in_his_stride_percentage_bronze(ndx, "18", "Sebastian Vettel", "#in-his-stride-bronze");
  show_quali_speed_demon(ndx, "18", "Kimi Raikkonen", "#sd-quali");
  show_fast_lap_speed_demon(ndx, "18", "Kimi Raikkonen", "#sd-fast-laps");
}

let stackedChart, winsPie, polesPie, fastLapsPie, 
    lineChart, qualiSpeedDemonNumber, fastLapSpeedDemon, 
    oonNumberGold, oonNumberSilver, oonNumberBronze, 
    ihsNumberGold, ihsNumberSilver, ihsNumberBronze, 
    aiadNumberGold, aiadNumberSilver, aiadNumberBronze;

//********************************************************ALL INFO FUNCTIONS*/
function show_all_wins_pie(ndx) {
  var dim = ndx.dimension(dc.pluck("win_car"));
  var group = dim.group().reduce(
    function(p, v) {
      p.count++;
      if(v.win_car != "N/A") {
        p.match++;
      } else {
        return 0;
      }
      return p;
    },
    function(p, v) {
      p.count--;
      if(v.win_car != "N/A") {
        p.match--;
      } else {
        return 0;
      }
      return p;
    },
    function() {
      return { count: 0, match: 0 };
    }
  );

  if(winsPie) {
    winsPie.dimension().dispose();
    winsPie
      .group(group)
      .dimension(dim)
      .redraw();
  } else {
    winsPie = dc.pieChart("#wins-pie");
    winsPie
      .height(200)
      .width(200)
      .radius(100)
      .innerRadius(40)
      .dimension(dim)
      .valueAccessor(function(d) {
        if(d.value.count > 0) {
          return d.value.match;
        } else {
          return 0;
        }
      })
      .group(group)
      .transitionDuration(1000);
      
    winsPie.render();
  }
}

function show_all_poles_pie(ndx) {
  var dim = ndx.dimension(dc.pluck("pole_car"));
  var group = dim.group().reduce(
    function(p, v) {
      p.count++;
      if(v.pole_car != "N/A") {
        p.match++;
      } else {
        return 0;
      }
      return p;
    },
    function(p, v) {
      p.count--;
      if(v.pole_car != "N/A") {
        p.match--;
      } else {
        return 0;
      }
      return p;
    },
    function() {
      return { count: 0, match: 0 };
    }
  );

  if(polesPie) {
    polesPie.dimension().dispose();
    polesPie
      .group(group)
      .dimension(dim)
      .redraw();
  } else {
    polesPie = dc.pieChart("#poles-pie")
    polesPie
      .height(200)
      .width(200)
      .radius(100)
      .innerRadius(40)
      .dimension(dim)
      .valueAccessor(function(d) {
        if(d.value.count > 0) {
          return d.value.match;
        } else {
          return 0;
        }
      })
      .group(group)
      .transitionDuration(1000);
      
    polesPie.render();
  }
}

function show_all_fast_laps_pie(ndx) {
  var dim = ndx.dimension(dc.pluck("fast_lap_car"));
  var group = dim.group().reduce(
    function(p, v) {
      p.count++;
      if(v.fast_lap_car != "N/A") {
        p.match++;
      } else {
        return 0;
      }
      return p;
    },
    function(p, v) {
      p.count--;
      if(v.fast_lap_car != "N/A") {
        p.match--;
      } else {
        return 0;
      }
      return p;
    },
    function() {
      return { count: 0, match: 0 };
    }
  );

  if(fastLapsPie) {
    fastLapsPie.dimension().dispose();
    fastLapsPie
      .group(group)
      .dimension(dim)
      .redraw();
  } else {
    fastLapsPie = dc.pieChart("#fast-laps-pie")
    fastLapsPie
      .height(200)
      .width(200)
      .radius(100)
      .innerRadius(40)
      .dimension(dim)
      .valueAccessor(function(d) {
        if(d.value.count > 0) {
          return d.value.match;
        } else {
          return 0;
        }
      })
      .group(group)
      .transitionDuration(1000);
      
    fastLapsPie.render();
  }
}

function show_all_constructor_points(ndx) {
  var width = document.getElementById("all-constructor-points").offsetWidth;

  function resize_chart() {
    var newWidth = document.getElementById("all-constructor-points").offsetWidth;
    stackedChart.width(newWidth);
    stackedChart.render();
  }
  window.addEventListener('resize', resize_chart);
  
  var dim = ndx.dimension(dc.pluck("season")); 
    function pointsPerTeam(dimension, team_name) {
      return dimension.group().reduce(
        function(p, v) {
          p.count++;
          if(v.team_name == team_name) {
            p.total += (v.champ_points + v.runner_up_points);
          }
          return p;
        },
        function(p, v) {
          p.count--;
          if(v.team_name == team_name) {
            p.total -= (v.champ_points + v.runner_up_points);
          }
          return p;
        },
        function() {
          return { count: 0, total: 0 };
        }
      );
    }
  
  var ferPoints = pointsPerTeam(dim, "Ferrari");
  var merPoints = pointsPerTeam(dim, "Mercedes");
  var rbrPoints = pointsPerTeam(dim, "RBR");
  var braPoints = pointsPerTeam(dim, "Brawn GP");
  var renPoints = pointsPerTeam(dim, "Renault");
  var mclPoints = pointsPerTeam(dim, "McLaren");

  if(stackedChart) {
    stackedChart.dimension().dispose();
    stackedChart
      .group(merPoints, "Mercedes")
      .stack(ferPoints, "Ferrari")
      .stack(rbrPoints, "RBR")
      .stack(braPoints, "Brawn GP")
      .stack(renPoints, "Renault")
      .stack(mclPoints, "McLaren")
      .dimension(dim)
      .redraw();
  } else {
    stackedChart = dc.barChart("#all-constructor-points");
    stackedChart
      .width(width)
      .height(400)
      .dimension(dim)
      .group(merPoints, "Mercedes")
      .stack(ferPoints, "Ferrari")
      .stack(rbrPoints, "RBR")
      .stack(braPoints, "Brawn GP")
      .stack(renPoints, "Renault")
      .stack(mclPoints, "McLaren")
      .title(function(d) {
        return "Hello!"; //<---------------------------------------------------RETURN ACTUAL INFO
      })
      .valueAccessor(function(d) {
        return d.value.total;
      })
      .transitionDuration(1000)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .xAxisLabel("Season: 2006 - 2018")
      .elasticX(true)
      .elasticY(true)
      .legend(dc.legend().x(10).y(10).itemHeight(10).gap(5))
      .margins({top: 10, right: 10, bottom: 50, left: 105});

    stackedChart.render();
  }
}

//********************************************************SPECIFIC PIE, POINTS & NUMBER INFO FUNCTIONS*/
function show_wins_pie(ndx, season) {
  var dim = ndx.dimension(dc.pluck("win_car"));
  var group = dim.group().reduce(
    function(p, v) {
      if(v.season == season) {
        p.count++;
        if(v.win_car != "N/A") {
          p.match++;
        } else {
          return 0;
        }
      }
      return p;
    },
    function(p, v) {
      if(v.season == season) {
        p.count--;
        if(v.win_car != "N/A") {
          p.match--;
        } else {
          return 0;
        }
      }
      return p;
    },
    function() {
      return { count: 0, match: 0 };
    }
  );

  if(winsPie) {
    winsPie.dimension().dispose();
    winsPie
      .group(group)
      .dimension(dim)
      .redraw();
  } else {
    winsPie = dc.pieChart("#wins-pie")
    winsPie
      .height(200)
      .width(200)
      .radius(100)
      .innerRadius(40)
      .dimension(dim)
      .valueAccessor(function(d) {
        if(d.value.count > 0) {
          return d.value.match;
        } else {
          return 0;
        }
      })
      .group(group)
      .transitionDuration(1000);

    winsPie.render();
  }
}

function show_poles_pie(ndx, season) {
  var dim = ndx.dimension(dc.pluck("pole_car"));
  var group = dim.group().reduce(
    function(p, v) {
      if(v.season == season) {
        p.count++;
        if(v.pole_car != "N/A") {
          p.match++;
        } else {
          return 0;
        }
      }
      return p;
    },
    function(p, v) {
      if(v.season == season) {
        p.count--;
        if(v.pole_car != "N/A") {
          p.match--;
        } else {
          return 0;
        }
      }
      return p;
    },
    function() {
      return { count: 0, match: 0 };
    }
  );

  if(polesPie) {
    polesPie.dimension().dispose();
    polesPie
      .group(group)
      .dimension(dim)
      .redraw();
  } else {
    polesPie = dc.pieChart("#poles-pie")
    polesPie
      .height(200)
      .width(200)
      .radius(100)
      .innerRadius(40)
      .dimension(dim)
      .valueAccessor(function(d) {
        if(d.value.count > 0) {
          return d.value.match;
        } else {
          return 0;
        }
      })
      .group(group)
      .transitionDuration(1000);

    polesPie.render();
  }
}

function show_fast_laps_pie(ndx, season) {
  var dim = ndx.dimension(dc.pluck("fast_lap_car"));
  var group = dim.group().reduce(
    function(p, v) {
      if(v.season == season) {
        p.count++;
        if(v.fast_lap_car != "N/A") {
          p.match++;
        } else {
          return 0;
        }
      }
      return p;
    },
    function(p, v) {
      if(v.season == season) {
        p.count--;
        if(v.fast_lap_car != "N/A") {
          p.match--;
        } else {
          return 0;
        }
      }
      return p;
    },
    function() {
      return { count: 0, match: 0 };
    }
  );

  if(fastLapsPie) {
    fastLapsPie.dimension().dispose();
    fastLapsPie
      .group(group)
      .dimension(dim)
      .redraw();
  } else {
    fastLapsPie = dc.pieChart("#fast-laps-pie")
    fastLapsPie
      .height(200)
      .width(200)
      .radius(100)
      .innerRadius(40)
      .dimension(dim)
      .valueAccessor(function(d) {
        if(d.value.count > 0) {
          return d.value.match;
        } else {
          return 0;
        }
      })
      .group(group)
      .transitionDuration(1000);

    fastLapsPie.render();
  }
}

function show_points(ndx, season) {
  var width = document.getElementById("all-constructor-points").offsetWidth;

  function resize_chart() {
    var newWidth = document.getElementById("all-constructor-points").offsetWidth;
    stackedChart.width(newWidth);
    stackedChart.render();
  }
  window.addEventListener('resize', resize_chart);

  var dim = ndx.dimension(function(d) {
    if(d.season == season) {
      return d.race_no;
    }
  });
  
  function pointsPerTeam(dimension, team_name) {
    return dimension.group().reduce(
      function(p, v) {
        if(v.season == season) {
          p.count++;
          if(v.team_name == team_name) {
            p.total += (v.champ_points + v.runner_up_points);
          }
        }
        return p;
      },
      function(p, v) {
        if(v.season == season) {
          p.count--;
          if(v.team_name == team_name) {
            p.total -= (v.champ_points + v.runner_up_points);
          }
        }
        return p;
      },
      function() {
        return { count: 0, total: 0 };
      }
    );
  }

  var ferPoints = pointsPerTeam(dim, "Ferrari");
  var renPoints = pointsPerTeam(dim, "Renault");
  var braPoints = pointsPerTeam(dim, "Brawn GP");
  var mclPoints = pointsPerTeam(dim, "McLaren");
  var rbrPoints = pointsPerTeam(dim, "RBR");
  var merPoints = pointsPerTeam(dim, "Mercedes");

  if(stackedChart) {
    stackedChart.dimension().dispose();
    stackedChart
      .group(ferPoints, "Ferrari")
      .stack(renPoints, "Renault")
      .stack(braPoints, "Brawn GP")
      .stack(mclPoints, "McLaren")
      .stack(rbrPoints, "RBR")
      .stack(merPoints, "Mercedes")
      .redraw();
  } else {
    stackedChart = dc.barChart("#all-constructor-points");
    stackedChart
      .width(width)
      .height(400)
      .dimension(dim)
      .group(ferPoints, "Ferrari")
      .stack(renPoints, "Renault")
      .stack(braPoints, "Brawn GP")
      .stack(mclPoints, "McLaren")
      .stack(rbrPoints, "RBR")
      .stack(merPoints, "Mercedes")
      .valueAccessor(function(d) {
        if(d.total === 0) {
          return 0;
        } else {
          return d.value.total; //try to return keys rather: "Team scored n points in x country"
        }
      })
      .transitionDuration(1000)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .xAxisLabel("Race number")
      .elasticY(true)
      .elasticX(true)
      .legend(dc.legend().x(10).y(10).itemHeight(10).gap(5))
      .margins({top: 10, right: 10, bottom: 50, left: 105});

    stackedChart.render();
  }
}

function show_driver_world_champ_chart(ndx, season, driver) {
  var width = document.getElementById("driver-world-champ").offsetWidth;

  function resize_chart() {
    var newWidth = document.getElementById("driver-world-champ").offsetWidth;
    lineChart.width(newWidth);
    lineChart.render();
  }
  window.addEventListener('resize', resize_chart);

  var dim = ndx.dimension(function(d) {
    if(d.season == season) {
      return d.race_no;
    }
  });
  
  function champ_points(dimension, driver) {
    return dimension.group().reduce(
      function(p, v) {
        if(v.season == season) {
          if(v.world_champ == "Yes" && v.driver == driver) {
            p.count++;
            p.total += v.champ_points;
          }
        }
        return p;
      },
      function(p, v) {
        if(v.season == season) {
          if(v.world_champ == "Yes" && v.driver == driver) {
            p.count--;
            p.total -= v.champ_points;
          }
        }
        return p;
      },
      function() {
        return { count: 0, total: 0 };
      }
    );
  }
  
  var champGroup = champ_points(dim, driver);

  if(lineChart) {
    lineChart.dimension().dispose();
    lineChart
      .group(champGroup)
      .dimension(dim)
      .redraw();
  } else {
    lineChart = dc.lineChart("#driver-world-champ");
    lineChart
      .width(width)
      .height(300)
      .dimension(dim)
      .group(champGroup)
      .transitionDuration(1000)
      .valueAccessor(function(d) {
        return d.value.total;
      })
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .yAxisLabel("Points")
      .xAxisLabel("Race Number")
      .elasticY(true)
      .elasticX(true)
      .margins({top: 20, right: 20, bottom: 50, left: 35})
      .renderHorizontalGridLines(true)
      .yAxis().ticks(5);

    lineChart.render();
  }
}

function show_quali_speed_demon(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.pole_position == driver) {
        p.count++;
        p.total_speed += +v.avg_quali_speed;
        p.average_speed = p.total_speed / p.count;
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.pole_position == driver) {
        p.count--;
        if(p.count == 0) {
          p.total_speed = 0;
          p.average_speed = 0;
        } else {
          p.total_speed -= +v.avg_quali_speed;
          p.average_speed = p.total_speed / p.count;
        }
      }
      return p;
    },
    function() {
      return { count: 0, total_speed: 0, average_speed: 0 };
    }
  );

  if(qualiSpeedDemonNumber) {
    qualiSpeedDemonNumber
      .group(group)
      .redraw();
  } else {
    qualiSpeedDemonNumber = dc.numberDisplay(element)
    qualiSpeedDemonNumber
      .formatNumber(d3.format("0"))
      .transitionDuration(0.00000000001)
      .valueAccessor(function(d) {
        return `${d.average_speed.toFixed(0)}`;
      })
      .group(group);

    qualiSpeedDemonNumber.render();
  }
}

function show_fast_lap_speed_demon(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.fast_lap == driver) {
        p.count++;
        p.total_speed += +v.avg_fast_lap_speed;
        p.average_speed = p.total_speed / p.count;
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.fast_lap == driver) {
        p.count--;
        if(p.count == 0) {
          p.total_speed = 0;
          p.average_speed = 0;
        } else {
          p.total_speed -= +v.avg_fast_lap_speed;
          p.average_speed = p.total_speed / p.count;
        }
      }
      return p;
    },
    function() {
      return { count: 0, total_speed: 0, average_speed: 0 };
    }
  );

  if(fastLapSpeedDemon) {
    fastLapSpeedDemon
      .group(group)
      .redraw();
  } else {
    fastLapSpeedDemon = dc.numberDisplay(element)
    fastLapSpeedDemon
      .formatNumber(d3.format("0"))
      .transitionDuration(0.00000000001)
      .valueAccessor(function(d) {
        return `${d.average_speed.toFixed(0)}`;
      })
      .group(group);

    fastLapSpeedDemon.render();
  }
}

function show_out_of_nowhere_percentage_gold(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position !== driver) {
          p.no_pole++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position !== driver) {
          p.no_pole--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, no_pole: 0 };
    }
  );

  if(oonNumberGold) {
    oonNumberGold
      .group(group)
      .redraw();
  } else {
    oonNumberGold = dc.numberDisplay(element)
    oonNumberGold
      .formatNumber(d3.format(".2%"))
      .transitionDuration(1000)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return (d.no_pole / d.count);
        } else {
          return 0;
        }
      })
      .group(group);

    oonNumberGold.render();
  }
}

function show_out_of_nowhere_percentage_silver(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position !== driver) {
          p.no_pole++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position !== driver) {
          p.no_pole--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, no_pole: 0 };
    }
  );

  if(oonNumberSilver) {
    oonNumberSilver
      .group(group)
      .redraw();
  } else {
    oonNumberSilver = dc.numberDisplay(element)
    oonNumberSilver
      .formatNumber(d3.format(".2%"))
      .transitionDuration(1000)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return (d.no_pole / d.count);
        } else {
          return 0;
        }
      })
      .group(group);

    oonNumberSilver.render();
  }
}

function show_out_of_nowhere_percentage_bronze(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position !== driver) {
          p.no_pole++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position !== driver) {
          p.no_pole--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, no_pole: 0 };
    }
  );

  if(oonNumberBronze) {
    oonNumberBronze
      .group(group)
      .redraw();
  } else {
    oonNumberBronze = dc.numberDisplay(element)
    oonNumberBronze
      .formatNumber(d3.format(".2%"))
      .transitionDuration(1000)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return (d.no_pole / d.count);
        } else {
          return 0;
        }
      })
      .group(group);

    oonNumberBronze.render();
  }
}

function show_in_his_stride_percentage_gold(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position === driver) {
          p.pole++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position == driver) {
          p.pole--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, pole: 0 };
    }
  );

  if(ihsNumberGold) {
    ihsNumberGold
      .group(group)
      .redraw();
  } else {
    ihsNumberGold = dc.numberDisplay(element)
    ihsNumberGold
      .formatNumber(d3.format(".2%"))
      .transitionDuration(1000)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return (d.pole / d.count);
        } else {
          return 0;
        }
      })
      .group(group);

    ihsNumberGold.render();
  }
}

function show_in_his_stride_percentage_silver(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position === driver) {
          p.pole++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position == driver) {
          p.pole--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, pole: 0 };
    }
  );

  if(ihsNumberSilver) {
    ihsNumberSilver
      .group(group)
      .redraw();
  } else {
    ihsNumberSilver = dc.numberDisplay(element)
    ihsNumberSilver
      .formatNumber(d3.format(".2%"))
      .transitionDuration(1000)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return (d.pole / d.count);
        } else {
          return 0;
        }
      })
      .group(group);

    ihsNumberSilver.render();
  }
}

function show_in_his_stride_percentage_bronze(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position === driver) {
          p.pole++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position == driver) {
          p.pole--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, pole: 0 };
    }
  );

  if(ihsNumberBronze) {
    ihsNumberBronze
      .group(group)
      .redraw();
  } else {
    ihsNumberBronze = dc.numberDisplay(element)
    ihsNumberBronze
      .formatNumber(d3.format(".2%"))
      .transitionDuration(1000)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return (d.pole / d.count);
        } else {
          return 0;
        }
      })
      .group(group);

    ihsNumberBronze.render();
  }
}

function show_all_in_a_day_number_gold(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position == driver && v.fast_lap == driver) {
          p.pole_and_fast_lap++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position == driver && v.fast_lap == driver) {
          p.pole_and_fast_lap--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, pole_and_fast_lap: 0, };
    }
  );

  if(aiadNumberGold) {
    aiadNumberGold
      .group(group)
      .redraw();
  } else {
    aiadNumberGold = dc.numberDisplay(element)
    aiadNumberGold
      .formatNumber(d3.format(".0"))
      .transitionDuration(0.00000000001)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return d.pole_and_fast_lap;
        } else {
          return 0;
        }
      })
      .group(group);

    aiadNumberGold.render();
  }
}

function show_all_in_a_day_number_silver(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position == driver && v.fast_lap == driver) {
          p.pole_and_fast_lap++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position == driver && v.fast_lap == driver) {
          p.pole_and_fast_lap--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, pole_and_fast_lap: 0, };
    }
  );

  if(aiadNumberSilver) {
    aiadNumberSilver
      .group(group)
      .redraw();
  } else {
    aiadNumberSilver = dc.numberDisplay(element)
    aiadNumberSilver
      .formatNumber(d3.format(".0"))
      .transitionDuration(0.00000000001)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return d.pole_and_fast_lap;
        } else {
          return 0;
        }
      })
      .group(group);

    aiadNumberSilver.render();
  }
}

function show_all_in_a_day_number_bronze(ndx, season, driver, element) {
  var group = ndx.groupAll().reduce(
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count++;
        if(v.pole_position == driver && v.fast_lap == driver) {
          p.pole_and_fast_lap++;
        } 
      }
      return p;
    },
    function(p, v) {
      if(v.season == season && v.winner == driver) {
        p.count--;
        if(v.pole_position == driver && v.fast_lap == driver) {
          p.pole_and_fast_lap--;
        } 
      }
      return p;
    },
    function() {
      return { count: 0, pole_and_fast_lap: 0, };
    }
  );

  if(aiadNumberBronze) {
    aiadNumberBronze
      .group(group)
      .redraw();
  } else {
    aiadNumberBronze = dc.numberDisplay(element)
    aiadNumberBronze
      .formatNumber(d3.format(".0"))
      .transitionDuration(0.00000000001)
      .valueAccessor(function(d) {
        if(d.count > 0) {
          return d.pole_and_fast_lap;
        } else {
          return 0;
        }
      })
      .group(group);

    aiadNumberBronze.render();
  }
}

//------------------------------------------------------D3/DC/Crossfilter Graphs/Charts/Numbers End
