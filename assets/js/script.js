$(document).ready(function() {
  var locationInputEl = $('#locationInput')
  var searchBtnEl = $('.searchBtn')
  var locationHistoryEl=$('#locationHistory')
  var locations = JSON.parse(localStorage.getItem('savedLocations')) || []

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
      // displayLocation() - REMINDER BUG
    }
  }

  function displayLocation() {
    // locationHistoryEl.innerHTML = '' REMINDER BUG

    for (var i = 0; i < locations.length; i++) {
      var locationEntry = document.createElement('button')
      locationEntry.textContent = locations[i].name + ', ' + locations[i].state
      locationHistoryEl.append(locationEntry)
    }
  }

  displayLocation()

  searchBtnEl.on('click', searchLocation)

  locationInputEl.on('keypress', function(event) {
      if (event.key === 'Enter') {
          searchLocation()
      }
  })

  function searchLocation() {
    var location = locationInputEl.val().toLowerCase()
    var [city, state] = location.split(',').map(str => str.trim())

    locationInputEl.val('')

    var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=5&appid=daf50ca1167039b8a5b4a47e15c528e8`

    fetch(requestUrl)
      .then(function(response) {
          return response.json()
      })
      .then(function(data) {
        console.log('Fetch Response\n-------------')
        console.log(data)
        var matchingLocation = data.find(function(location) {
          return location.name.toLowerCase() === city && location.state.toLowerCase() === state
        });
        if (matchingLocation) {
          console.log('Match found:')
          console.log(matchingLocation)
          saveLocation(matchingLocation)
          displayLocation();
        } else {
          console.log('No matching location found.')
        }
      })
  }
})
