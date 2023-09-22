$(document).ready(function() {
    var locationInputEl = $('#locationInput')
    var searchBtnEl = $('.searchBtn')

    searchBtnEl.on('click', function() {
        var location = locationInputEl.val().toLowerCase()
        var [city, state] = location.split(',').map(str => str.trim())

        var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=1&appid=daf50ca1167039b8a5b4a47e15c528e8`

        fetch(requestUrl)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                console.log('Fetch Response\n-------------')
                console.log(data)
                if (city == data.name && state == data.state) {
                    console.log(data[0].name)
                    console.log(data[0].state)
                    console.log(data[0].lat)
                    console.log(data[0].lon)
                }
                else {
                    console.log('error')
                }
            });
    })
})
