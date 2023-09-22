$(document).ready(function() {
    var locationInputEl = $('#locationInput')
    var searchBtnEl = $('.searchBtn')

    searchBtnEl.on('click', function() {
        var location = locationInputEl.val().toLowerCase()
        var [city, state] = location.split(',').map(str => str.trim())

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
                  })

                  if (matchingLocation) {
                    console.log('Match found:')
                    console.log(matchingLocation)
                  } else {
                    console.log('No matching location found.')
                  }
            })

    })
})
