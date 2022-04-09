//weather API
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=19.3907336&lon=-99.1436127&units=imperial&exclude=minutely,hourly&appid=4e41a30936e84b168845a6640287d9db";



fetch( apiURL )
    .then( response => response.json())
    .then( data => {
        if( data.cod == 401 || data.cod == 404 )
            console.log(`ERROR (#${data.cod}): ${data.message}`);
        else {            
            const iconSrc = 'https://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@4x.png';
            const main = data.current.weather[0].main;
            const desc = data.current.weather[0].description;
            const humidity = data.current.humidity;
            
            document.querySelector('#current-day .temp').textContent = data.current.temp.toFixed(1);
            document.querySelector('#current-day .weather-image > img').setAttribute('src', iconSrc);
            document.querySelector('#current-day .weather-image > img').setAttribute('alt', desc);
            document.querySelector('#current-day .weather-type').textContent = main;
            document.querySelector('#current-day .weather-desc').textContent = desc;
            document.querySelector('#current-day .weather-humidity').textContent = humidity;

            for (let index = 0; index < 3; index++) {
                forecast = data.daily[index];
                console.log(forecast);
                const iconSrc = 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@4x.png';
                const main = forecast.weather[0].main;
                const desc = forecast.weather[0].description;
                const humidity = forecast.humidity;
                document.querySelector('#forecast-' + (index + 1) + ' .temp').textContent = forecast.temp.day.toFixed(1);
                document.querySelector('#forecast-' + (index + 1) + ' .weather-image > img').setAttribute('src', iconSrc);
                document.querySelector('#forecast-' + (index + 1) + ' .weather-image > img').setAttribute('alt', desc);
                document.querySelector('#forecast-' + (index + 1) + ' .weather-type').textContent = main;
                document.querySelector('#forecast-' + (index + 1) + ' .weather-desc').textContent = desc;
                document.querySelector('#forecast-' + (index + 1) + ' .weather-humidity').textContent = humidity;
                
            }
        }
    });