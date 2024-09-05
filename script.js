const apiKey = "baffd41c6993ab31856e392d26ce4cef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=rio";

async function checkWeather() {
 const response=await fetch(apiUrl +`&appid=${apiKey}`);
 var data=await response.json();
    console.log(data);
    document.querySelector(".weather-place").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".weather-place").innerHTML=data.name;
    document.querySelector("#humidity").innerHTML=data.main.humidity;
    document.querySelector("#Visibility").innerHTML=data.visibility;
    document.querySelector("#wind").innerHTML=data.wind.speed;
    document.querySelector(".country").innerHTML=data.sys.country;

}
function displayDateTime() {
    // Select the elements where the day, date, and time will be displayed
    const dayElement = document.querySelector(".day");
    const dateElement = document.querySelector(".date");
    const timeElement = document.querySelector(".time");

    // Get the current date and time
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayName = daysOfWeek[now.getDay()];

    // Format the date as DD-MM-YYYY
    const day = String(now.getDate()).padStart(2, '0');
    const month = monthsOfYear[now.getMonth()];
    const year = now.getFullYear();
    const date = `${day} ${month} ${year}`;

    // Format the time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    // Display the day, date, and time
    dayElement.innerHTML = `${dayName}`;
    dateElement.innerHTML = ` ${date}`;
    timeElement.innerHTML = ` ${time}`;
  }

  // Call the function to display the date and time when the page loads
  
  // Optional: Update the time every second
  setInterval(displayDateTime, 1000);
  
  checkWeather();
  displayDateTime();
