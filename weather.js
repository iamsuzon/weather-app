const API_KEY = 'a92e9ec48bdb43ad9e7164800232106'
const API_URI = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`
const weatherData = {
    sendRequest(location) {
        let location_name = location.trim();

        axios({
            method: 'get',
            url: API_URI + location_name,
        }).then(function (response) {
            let data = getResponse(response.data)
            createMarkup(data);
        });
    }
}

function getResponse(data)
{
    let current = data.current
    let location = data.location

    return {
        country: location.country,
        name: location.name,
        temp_c: current.temp_c,
        temp_f: current.temp_f,
        humidity: current.humidity,
    }
}

function createMarkup(data)
{
    let country = document.getElementById('country')
    let city = document.getElementById('city')
    let temp_c = document.getElementById('temp_c')
    let temp_f = document.getElementById('temp_f')
    let humidity = document.getElementById('humidity')

    document.getElementById('weatherResult').classList.remove('d-none')
    country.innerText = `Country Name: ${data.country}`
    city.innerText = `City Name: ${data.name}`
    temp_c.innerText = `Temperature: ${data.temp_c} \u00B0C`
    temp_f.innerText = `Temperature: ${data.temp_f} \u00B0F`
    humidity.innerText = `Humidity: ${data.humidity}%`
}

export {weatherData}