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
  currentTime.innerHTML = moment().tz(`${currentLocation}`).format("HH:mm:ss");

  let cityOne = document.querySelector("#time-one");
  let cityOneDate = document.querySelector("#city-one-date");
  cityOne.innerHTML = moment().tz("Asia/Beirut").format("HH:mm:ss");
  cityOneDate.innerHTML = moment()
    .tz("Asia/Beirut")
    .format("dddd  Do MMMM YYYY");

  let cityTwo = document.querySelector("#time-two");
  let cityTwoDate = document.querySelector("#city-two-date");
  cityTwo.innerHTML = moment().tz("Europe/Sofia").format("HH:mm:ss");
  cityTwoDate.innerHTML = moment()
    .tz("Europe/Sofia")
    .format("dddd  Do MMMM YYYY");

  let cityThree = document.querySelector("#time-three");
  let cityThreeDate = document.querySelector("#city-three-date");

  cityThree.innerHTML = moment().tz("America/Mexico_City").format("HH:mm:ss");
  cityThreeDate.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("dddd  Do MMMM YYYY");

  let cityFour = document.querySelector("#time-four");
  let cityFourDate = document.querySelector("#city-four-date");

  cityFour.innerHTML = moment().tz("Asia/Bangkok").format("HH:mm:ss");
  cityFourDate.innerHTML = moment()
    .tz("Asia/Bangkok")
    .format("dddd  Do MMMM YYYY");
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
  cityFour.innerHTML = moment().tz("Asia/Bangkok").format("h:mm:ss a");
}

let twelve = document.querySelector("#twelve");
twelve.addEventListener("click", twelveHour);
