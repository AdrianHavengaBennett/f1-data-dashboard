$(document).ready(function() {
  
  $("#nav-toggle").click(function() {
    $(".nav-buttons").slideToggle(500, "swing");
  });

  $("#all-seasons").click(function() {
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "0%" }, 1000);
      $(".specific-bg-color").animate({ right: "0%" }, 1000);
      console.log(say_hello("All"));
    } else {
      $(".specific-bg-color").css("position", "absolute");
    }
  });

  $("#s-06").click(function() {
    $("#oon-gold-driver").html("Jenson Button: ");
    $("#oon-silver-driver").html("Michael Schumacher: ");
    $("#oon-bronze-driver").html("Fernando Alonso: ");

    $("#ihs-gold-driver").html("Felipe Massa: ");
    $("#ihs-silver-driver").html("Fernando Alonso: ");
    $("#ihs-bronze-driver").html("Michael Schumacher: ");

    $("#aiad-gold-driver").html("Michael Schumacher: ");
    $("#aiad-silver-driver").html("Fernando Alonso: ");
    $("#all-in-a-day-bronze").hide();

    $("#sd-driver").html("Kimi Raikkonen");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2006")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-07").click(function() {
    $("#all-in-a-day-bronze").show();

    $("#oon-gold-driver").html("Kimi Raikkonen: ");
    $("#oon-silver-driver").html("Fernando Alonso: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Felipe Massa: ");
    $("#ihs-bronze-driver").html("Kimi Raikkonen: ");
    
    $("#aiad-gold-driver").html("Fernando Alonso: ");
    $("#aiad-silver-driver").html("Felipe Massa: ");
    $("#aiad-bronze-driver").html("Lewis Hamilton: ");

    $("#sd-driver").html("Kimi Raikkonen");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2007")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-08").click(function() {
    $("#all-in-a-day-bronze").show();

    $("#oon-gold-driver").html("Fernando Alonso: ");
    $("#oon-silver-driver").html("Felipe Massa: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    $("#ihs-silver-driver").html("Lewis Hamilton: ");
    $("#ihs-bronze-driver").html("Felipe Massa: ");
    
    $("#aiad-gold-driver").html("Felipe Massa: ");
    $("#aiad-silver-driver").html("Lewis Hamilton: ");
    $("#aiad-bronze-driver").html("Kimi Raikkonen: ");

    $("#sd-driver").html("Heikki Kovalainen");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2008")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-09").click(function() {
    $("#all-in-a-day-bronze").hide();

    $("#oon-gold-driver").html("Rubens Barrichello: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    $("#ihs-silver-driver").html("Jenson Button: ");
    $("#ihs-bronze-driver").html("Lewis Hamilton: ");
    
    $("#aiad-gold-driver").html("Jenson Button: ");
    $("#aiad-silver-driver").html("Sebastian Vettel: ");

    $("#sd-driver").html("Sebastian Vettel");

    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2009")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-10").click(function() {
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    
    $("#oon-gold-driver").html("Jenson Button: ");
    $("#oon-silver-driver").html("Lewis Hamilton: ");
    $("#oon-bronze-driver").html("Fernando Alonso: ");

    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    $("#ihs-silver-driver").html("Mark Webber: ");
    $("#ihs-bronze-driver").html("Fernando Alonso: ");
    
    $("#aiad-gold-driver").html("Fernando Alonso: ");

    $("#sd-driver").html("Fernando Alonso: ");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2010")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-11").click(function() {
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").hide();
    $("#in-his-stride-bronze").hide();
    
    $("#oon-gold-driver").html("Jenson Button: ");
    $("#oon-silver-driver").html("Lewis Hamilton: ");
    $("#oon-bronze-driver").html("Mark Webber: ");

    $("#ihs-gold-driver").html("Sebastian Vettel: ");
    
    $("#aiad-gold-driver").html("Sebastian Vettel: ");

    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2011")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-12").click(function() {
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    
    $("#oon-gold-driver").html("Mark Webber: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Pastor Maldonado: ");

    $("#ihs-gold-driver").html("Nico Rosberg: ");
    $("#ihs-silver-driver").html("Sebastian Vettel: ");
    $("#ihs-bronze-driver").html("Lewis Hamilton: ");
    
    $("#aiad-gold-driver").html("Sebastian Vettel: ");
    
    $("#sd-driver").html("Jenson Button");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2012")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-13").click(function() {
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    
    $("#oon-gold-driver").html("Fernando Alonso: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Nico Rosberg: ");

    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Sebastian Vettel: ");
    $("#ihs-bronze-driver").html("Nico Rosberg: ");
    
    $("#aiad-gold-driver").html("Sebastian Vettel: ");
    
    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2013")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-14").click(function() {
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").hide();
    
    $("#oon-gold-driver").html("Daniel Ricciardo: ");
    $("#oon-silver-driver").html("Lewis Hamilton: ");
    $("#oon-bronze-driver").html("Nico Rosberg: ");

    $("#ihs-gold-driver").html("Nico Rosberg: ");
    $("#ihs-silver-driver").html("Lewis Hamilton: ");
    
    $("#aiad-gold-driver").html("Lewis Hamilton: ");
    
    $("#sd-driver").html("Nico Rosberg");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2014")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-15").click(function() {
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    
    $("#oon-gold-driver").html("Sebastian Vettel: ");
    $("#oon-silver-driver").html("Nico Rosberg: ");
    $("#oon-bronze-driver").html("Lewis Hamilton: ");

    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Nico Rosberg: ");
    $("#ihs-bronze-driver").html("Sebastian Vettel: ");
    
    $("#aiad-gold-driver").html("Lewis Hamilton: ");
    $("#aiad-silver-driver").html("Nico Rosberg: ");

    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2015")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-16").click(function() {
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").hide();
    
    $("#oon-gold-driver").html("Daniel Ricciardo: ");
    $("#oon-silver-driver").html("Max Verstappen: ");
    $("#oon-bronze-driver").html("Nico Rosberg: ");

    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Nico Rosberg: ");
    
    $("#aiad-gold-driver").html("Nico Rosberg: ");
    $("#aiad-silver-driver").html("Lewis Hamilton: ");
    
    $("#sd-driver").html("Lewis Hamilton");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2016")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-17").click(function() {
    $("#all-in-a-day-silver").show();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    
    $("#oon-gold-driver").html("Max Verstappen: ");
    $("#oon-silver-driver").html("Daniel Ricciardo: ");
    $("#oon-bronze-driver").html("Sebastian Vettel: ");

    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Valtteri Bottas: ");
    $("#ihs-bronze-driver").html("Sebastian Vettel: ");
    
    $("#aiad-gold-driver").html("Lewis Hamilton: ");
    $("#aiad-silver-driver").html("Valtteri Bottas: ");
    
    $("#sd-driver").html("Valtteri Bottas");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2017")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });

  $("#s-18").click(function() {
    $("#all-in-a-day-gold").hide();
    $("#all-in-a-day-silver").hide();
    $("#all-in-a-day-bronze").hide();
    $("#in-his-stride-silver").show();
    $("#in-his-stride-bronze").show();
    
    $("#oon-gold-driver").html("Max Verstappen: ");
    $("#oon-silver-driver").html("Kimi Raikkonen: ");
    $("#oon-bronze-driver").html("Sebastian Vettel: ");

    $("#ihs-gold-driver").html("Lewis Hamilton: ");
    $("#ihs-silver-driver").html("Daniel Ricciardo: ");
    $("#ihs-bronze-driver").html("Sebastian Vettel: ");
    
    $("#sd-driver").html("Kimi Raikkonen");
    
    if(window.matchMedia('(min-width: 1024px)').matches) {
      $(".section-bg").animate({ left: "-22%" }, 1000);
      $(".specific-bg-color").animate({ right: "-48%" }, 1000);
      console.log(say_hello("2018")); 
    } else {
      $(".specific-bg-color").css("position", "unset");
    }
  });
});


    

  