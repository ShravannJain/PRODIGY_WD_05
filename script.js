const apiKey = "baffd41c6993ab31856e392d26ce4cef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Get the search bar input and button elements globally
const search_box = document.querySelector(".search-bar input");
const search_btn = document.querySelector(".search-bar button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status==404){
    document.querySelector(".error").style.display="block"
  }
  else{
  var data = await response.json();
  console.log(data);

  // Update the UI with the weather data
  document.querySelector(".weather-place").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#Visibility").innerHTML = data.visibility;
  document.querySelector("#wind").innerHTML = data.wind.speed;
  document.querySelector(".country").innerHTML = data.sys.country;
  document.querySelector(".main-sec").style.display="block" 
  document.querySelector(".error").style.display="none"
  }
}

function displayDateTime() {
  const dayElement = document.querySelector(".day");
  const dateElement = document.querySelector(".date");
  const timeElement = document.querySelector(".time");

  const now = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayName = daysOfWeek[now.getDay()];

  const day = String(now.getDate()).padStart(2, '0');
  const month = monthsOfYear[now.getMonth()];
  const year = now.getFullYear();
  const date = `${day} ${month} ${year}`;

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const time = `${hours}:${minutes}`;

  dayElement.innerHTML = `${dayName}`;
  dateElement.innerHTML = `${date}`;
  timeElement.innerHTML = `${time}`;
  
}

// Call the function to display the date and time
displayDateTime();

// Update the time every second
setInterval(displayDateTime, 1000);

// Add the event listener for the search button
search_btn.addEventListener("click", () => {
  checkWeather(search_box.value);
});
