const apiKey = "baffd41c6993ab31856e392d26ce4cef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

async function checkWeather() {
 const response=await fetch(apiUrl +`&appid=${apiKey}`);
 var data=await response.json();
    console.log(data);
    document.querySelector(".weather-place").innerHTML=data.name;
    document.querySelector(".temparature").innerHTML=data.name;
    document.querySelector(".weather-place").innerHTML=data.name;
}

checkWeather();
