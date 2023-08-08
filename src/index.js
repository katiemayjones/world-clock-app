let currentLocation = moment.tz.guess();

let currentCity = document.querySelector("#current-city");
currentCity.innerHTML = `${currentLocation}`;

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = moment()
  .tz(`${currentLocation}`)
  .format("dddd  Do MMMM YYYY");

twentyFourHour();

function twentyFourHour(event) {
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().tz(`${currentLocation}`).format("HH:MM:ss");
  let cityOne = document.querySelector("#time-one");
  cityOne.innerHTML = moment().tz("Asia/Beirut").format("HH:MM:ss");
  let cityTwo = document.querySelector("#time-two");
  cityTwo.innerHTML = moment().tz("Europe/Sofia").format("HH:MM:ss");
  let cityThree = document.querySelector("#time-three");
  cityThree.innerHTML = moment().tz("America/Mexico_City").format("HH:MM:ss");
  let cityFour = document.querySelector("#time-four");
  cityFour.innerHTML = moment().tz("Asia/Beijing").format("HH:MM:ss");
}

let twentyFour = document.querySelector("#twenty-four");
twentyFour.addEventListener("click", twentyFourHour);

function twelveHour(event) {
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().tz(`${currentLocation}`).format("h:mm:ss a");
  let cityOne = document.querySelector("#time-one");
  cityOne.innerHTML = moment().tz("Asia/Beirut").format("h:mm:ss a");
  let cityTwo = document.querySelector("#time-two");
  cityTwo.innerHTML = moment().tz("Europe/Sofia").format("h:mm:ss a");
  let cityThree = document.querySelector("#time-three");
  cityThree.innerHTML = moment().tz("America/Mexico_City").format("h:mm:ss a");
  let cityFour = document.querySelector("#time-four");
  cityFour.innerHTML = moment().tz("Asia/Beijing").format("h:mm:ss a");
}

let twelve = document.querySelector("#twelve");
twelve.addEventListener("click", twelveHour);

setInterval(twentyFourHour, twelveHour, 1000);
