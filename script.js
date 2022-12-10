const $city = $("#city");
const $temp = $("#temp");
const $feelsLike = $("#feels-like");
const $weather = $("#weather");

const $input = $('input[type="text"]')

let weatherData, userInput;

$("form").on("submit", handleGetData)

function handleGetData(event) {
  // calling preventDefault() on a 'submit' event will prevent a page refresh
    event.preventDefault()

  //now we assign userInput to the user's input
  // .val() method references the text in the input box
  userInput = $input.val()
  
  $.ajax({
    //here we concatenate the url with the user's response
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ userInput +"&units=imperial&appid=873bf0818146c90e0651162efd8fc4c0"
  }).then(
    (data) => {
      weatherData = data
      render()
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

function render() {
  $city.text(weatherData.name)
  $temp.text(Math.floor(weatherData.main.temp)+ "°")
  $feelsLike.text(Math.floor(weatherData.main.feels_like)+ "°")
  $weather.text(weatherData.weather[0].description)

}