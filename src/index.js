let currentLocation = moment.tz.guess();

let currentCity = document.querySelector("#current-city");
currentCity.innerHTML = `${currentLocation}`;

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = moment()
  .tz(`${currentLocation}`)
  .format("dddd  Do MMMM YYYY");

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = moment().tz(`${currentLocation}`).format("HH:MM");

function twentyFourHour(event) {
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().tz(`${currentLocation}`).format("h:mm a");
}

let twentyFour = document.querySelector("#twenty-four");
twentyFour.addEventListener("click", twentyFourHour);

function twelveHour(event) {
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().tz(`${currentLocation}`).format("HH:MM");
}

let twelve = document.querySelector("#twelve");
twelve.addEventListener("click", twelveHour);
