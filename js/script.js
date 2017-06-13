

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var city = $("select#cities").val();
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=2b27a0a40b563e713ff359067ffba1dd",
      dataType:'json',
      success:function(weather_data){

        $(".result").text(" ");
        $(".result").append("<div id='thing'><h2>"+weather_data.name+"</h2><p>, "+weather_data.sys.country+"</p></div>");
        $(".result").append("<p>"+weather_data.weather[0].main+", "+weather_data.weather[0].description+"</p>");
        $(".result").append("<img src='http://openweathermap.org/img/w/"+weather_data.weather[0].icon+".png' alt='"+weather_data.weather[0].description+"'>");
      }
    })

  });
});

//   $.ajax({
//     url:"assets/city.list.json",
//     dataType:'json',
//     success:function(cities){
//       var kenyan_cities = [];
//       console.log("success");
//       for (var i = 0; i < cities.length; i++) {
//         if(cities.country === "KE"){
//           kenyan_cities.push(cities[i]);
//           console.log(i);
//         }
//       }
//       $(".result").append(kenyan_cities);
//     }
//   })
// });
