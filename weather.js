// JavaScript Document
function openWeatherApp(){
	var city = document.getElementById("searchCity").value;
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
	var req = new XMLHttpRequest();

	req.onreadystatechange = function () {
		if(req.readyState==4 && req.status==200){
		var jsonObject = JSON.parse(req.responseText);
		var celcius = jsonObject.main.temp - 273.15;
   		 document.getElementById('weatherResult').innerHTML = "" + jsonObject.name
				+","+jsonObject.sys.country +"\t" + jsonObject.weather[0].description +"\t"+parseInt(celcius) +"°C";
	}};
	req.open("GET", url,true);
	req.send(null);

}