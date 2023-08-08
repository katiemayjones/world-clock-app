let currentLocation = moment.tz.guess();

let currentCity = document.querySelector("#current-city");
currentCity.innerHTML = `${currentLocation.replace("_", " ").split("/")[1]}`;

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = moment()
  .tz(`${currentLocation}`)
  .format("dddd  Do MMMM YYYY");

twentyFourHour();

function twentyFourHour(event) {
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().tz(`${currentLocation}`).format("HH:mm");

  let cityOne = document.querySelector("#time-one");
  let cityOneDate = document.querySelector("#city-one-date");
  cityOne.innerHTML = moment().tz("Asia/Beirut").format("HH:mm");
  cityOneDate.innerHTML = moment()
    .tz("Asia/Beirut")
    .format("dddd  Do MMMM YYYY");

  let cityTwo = document.querySelector("#time-two");
  let cityTwoDate = document.querySelector("#city-two-date");
  cityTwo.innerHTML = moment().tz("Europe/Sofia").format("HH:mm");
  cityTwoDate.innerHTML = moment()
    .tz("Europe/Sofia")
    .format("dddd  Do MMMM YYYY");

  let cityThree = document.querySelector("#time-three");
  let cityThreeDate = document.querySelector("#city-three-date");

  cityThree.innerHTML = moment().tz("America/Mexico_City").format("HH:mm");
  cityThreeDate.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("dddd  Do MMMM YYYY");

  let cityFour = document.querySelector("#time-four");
  let cityFourDate = document.querySelector("#city-four-date");

  cityFour.innerHTML = moment().tz("Asia/Bangkok").format("HH:mm");
  cityFourDate.innerHTML = moment()
    .tz("Asia/Bangkok")
    .format("dddd  Do MMMM YYYY");
}

let twentyFour = document.querySelector("#twenty-four");
twentyFour.addEventListener("click", twentyFourHour);

function twelveHour(event) {
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().tz(`${currentLocation}`).format("h:mm a");
  let cityOne = document.querySelector("#time-one");
  cityOne.innerHTML = moment().tz("Asia/Beirut").format("h:mm a");
  let cityTwo = document.querySelector("#time-two");
  cityTwo.innerHTML = moment().tz("Europe/Sofia").format("h:mm a");
  let cityThree = document.querySelector("#time-three");
  cityThree.innerHTML = moment().tz("America/Mexico_City").format("h:mm a");
  let cityFour = document.querySelector("#time-four");
  cityFour.innerHTML = moment().tz("Asia/Bangkok").format("h:mm a");
}

let twelve = document.querySelector("#twelve");
twelve.addEventListener("click", twelveHour);

function updateCity(event) {
  let chosenCity = event.target.value;
  if (chosenCity === "current") {
    chosenCity = moment.tz.guess();
  }
  let cityName = chosenCity.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(chosenCity);
  let citiesElement = document.querySelector("#cities-list");
  citiesElement.innerHTML = `
  <div class="row">
            <div class="col">
              <h3 class="cityOne" id="city-one">${cityName}</h3>
              <h4 class="cityOneDate" id="city-one-date">${cityTime.format(
                "MMMM	Do YYYY"
              )}</h4>
            </div>
            <div class="col">
              <h3 class="timeOne" id="time-one">${cityTime.format("HH:mm")}</h3>
            </div>
                  <hr />

      <a href="#"> <h3 class="allCities" id="all-cities">All Cities</h3></a>

          </div>`;
}

let citiesSelectElement = document.querySelector("#dropdown");
citiesSelectElement.addEventListener("change", updateCity);
