$(document).ready(function() {

  const locations = JSON.parse(localStorage.getItem('savedLocations')) || []
  var apiKey = '0e85c09f82737f5cbeeaa614911739d4'

  // User Input & `Click`
 $('.searchBtn').on('click', function() {
    $('#currentWeatherContainer').empty()
    $('#futureWeatherContainer').empty()
    searchLocation()
  })

  // User Input & `Enter`
  $('#locationInput').on('keypress', function(event) {
      if (event.key === 'Enter') {
        $('#currentWeatherContainer').empty()
        $('#futureWeatherContainer').empty()
        searchLocation()
      }
  })

  // Input  Location
  function searchLocation() {
    var location = $('#locationInput').val().toLowerCase()
    var [city, state] = location.split(',').map(str => str.trim())

    $('#locationInput').val('')

    getLocation(city, state)
  }

  // Alert User
  function displayAlert() {
    $('#alert').text('Invalid, please check spelling. (Example: Denver, Colorado)').attr('style', 'color:#7b0004;')

    setTimeout(function () {
      $('#alert').text('')
    }, 4000)
  }

  // Location API
  function getLocation(city, state) {
    var requestUrlLocation = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=5&appid=${apiKey}`

    fetch(requestUrlLocation)
      .then(function(response) {
          return response.json()
      })
      .then(function(data) {
        var matchingLocation = data.find(function(location) {
          return location.name.toLowerCase() === city && location.state.toLowerCase() === state
        });
        if (matchingLocation) {
          saveLocation(matchingLocation)
          displayLocation()
          getCurrentWeather(matchingLocation.lat, matchingLocation.lon)
          getFutureWeather(matchingLocation.lat, matchingLocation.lon)
        } else {
          displayAlert()
        }
      })
  }

  // Weather Current API
  function getCurrentWeather(lat, lon) {
    var requestUrlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial&lang=en`

    fetch(requestUrlCurrentWeather)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
      var formattedDateTime = dayjs.unix(data.dt).format('dddd, MMMM D, YYYY')
      var currentDay = $('<p>').text(formattedDateTime)
      var cityName = $('<h4>').text(data.name)
      var iconCode = data.weather[0].icon
      var iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`
      var currentIcon = $('<img>').attr('src', iconUrl)
      var currentTemp = $('<p>').text('Temp: ' + Math.round(data.main.temp) + ' °F')
      var currentHumidity = $('<p>').text('Humidity: ' + data.main.humidity + '%')
      var currentWind = $('<p>').text('Wind Speed: ' + Math.round(data.wind.speed) + ' mph')

      $('#currentWeatherContainer').append(cityName, currentDay, currentIcon, currentTemp, currentHumidity, currentWind)
    })
  }

  // Weather 5-Day API
  function getFutureWeather(lat, lon) {
    var requestUrlFutureWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial&lang=en`

    fetch(requestUrlFutureWeather)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
      for (var i = 7; i < data.list.length; i += 8) {
        var formattedDateTime = dayjs.unix(data.list[i].dt).format('ddd, MMM. D')
        var day = $('<p>').text(formattedDateTime)
        var iconCode = data.list[i].weather[0].icon
        var iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`
        var icon = $('<img>').attr('src', iconUrl)
        var temp = $('<p>').text('Temp: ' + Math.round(data.list[i].main.temp) + ' °F')
        var humidity = $('<p>').text('Humidity: ' + data.list[i].main.humidity + '%')
        var wind = $('<p>').text('Wind Speed: ' + Math.round(data.list[i].wind.speed) + ' mph')

        var container = $('<div>').addClass('col-12 col-md-2 mb-3 border border-secondary')

        container.append(day, icon, temp, humidity, wind)

        $('#futureWeatherContainer').append(container)
      }
    })
  }

  // Save to Local Storage
  function saveLocation(matchingLocation) {
    var existingLocation = locations.find(function(location) {
      return (
        location.name.toLowerCase() === matchingLocation.name.toLowerCase() &&
        location.state.toLowerCase() === matchingLocation.state.toLowerCase()
      )
    })
    if (!existingLocation) {
      locations.push(matchingLocation)
      localStorage.setItem('savedLocations', JSON.stringify(locations))
    }
  }

  // Create Button to Save User Input
  function displayLocation() {

    $('#locationHistory').empty()

    for (var i = 0; i < locations.length; i++) {
      var locationBtn = $('<button>').text(locations[i].name + ', ' + locations[i].state)

      addLocationBtnEvent(locationBtn, locations[i].name.toLowerCase(), locations[i].state.toLowerCase())

      $('#locationHistory').append(locationBtn)
    }
  }

  // Add Click Event to Search History Buttons
  function addLocationBtnEvent(locationBtn, city, state) {
    $(locationBtn).on('click', function() {
      $('#currentWeatherContainer').empty()
      $('#futureWeatherContainer').empty()

      getLocation(city, state)
    })
  }

  // Clear Local Storage
  $('.clearBtn').on('click', function() {
    localStorage.clear()
    location.reload()
  })
    displayLocation()
})
