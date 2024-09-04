const apiKey = "baffd41c6993ab31856e392d26ce4cef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mangalore";

async function checkWeather() {
 const response=await fetch(apiUrl +`&appid=${apiKey}`);
 var data=await response.json();
    console.log(data);
    document.querySelector(".weather-place").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=data.main.temp;
    document.querySelector(".weather-place").innerHTML=data.name;
    document.querySelector("#humidity").innerHTML=data.main.humidity;
    document.querySelector("#Visibility").innerHTML=data.visibility;
    document.querySelector("#wind").innerHTML=data.wind.speed;
}

checkWeather();
