import {weatherData} from "./weather.js";

export function getWeatherData()
{
    document.getElementById('submitBtn').addEventListener('click', function () {
        const location = document.getElementById('location').value

        if(location == '')
        {
            document.getElementById('errorMsg').classList.remove('d-none')
            return
        }

        weatherData.sendRequest(location)
        document.getElementById('errorMsg').classList.add('d-none')
    })
}