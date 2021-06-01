$(document).ready(function(){
  getWeather();
})

function getWeather() {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&APPID="+apiKey;

  $.ajax(url,{success:function(data){
    console.log(data);
  }})
}
