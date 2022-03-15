//Wheater API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Cancun&units=imperial&appid=4e41a30936e84b168845a6640287d9db';


fetch( apiURL )
    .then( response => response.json())
    .then( data => {
        if( data.cod == 401 || data.cod == 404 )
            console.log(`ERROR (#${data.cod}): ${data.message}`);
        else {
            console.log(data);
            const iconSrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            const desc = data.weather[0].description;
            
            document.querySelector('#temp').textContent = data.main.temp.toFixed(1);
            document.querySelector('.wheater-image > img').setAttribute('src', iconSrc);
            document.querySelector('.wheater-image > img').setAttribute('alt', desc);
            document.querySelector('#wheater-desc').textContent = desc;
            document.querySelector("#wind_speed").textContent = data.wind.speed;

            calc_windchill();
        }
    });


const calc_windchill = () => {
    // weather script
    const temp_cel = parseFloat(document.getElementById("temp").textContent);
    const wind_speed = parseFloat(document.getElementById("wind_speed").textContent);

    //const temp = cel_to_far(temp_cel);
    //const speed = kmph_to_mph(wind_speed);

    console.log(temp_cel, wind_speed);
    if( temp_cel <= 50 && wind_speed > 3) {
        const windchill = 35.74 + (0.6215 * temp_cel) - (35.75 * Math.pow(wind_speed,0.16)) + (0.4275 * temp_cel * Math.pow(wind_speed,0.16));
        document.getElementById("wind_chill").innerHTML = Math.round(windchill * 10) / 10 + " M/h";
    }
    else {
        document.getElementById("wind_chill").innerHTML = "N/A"
    }
}

/*
    function cel_to_far(temp) {
        return (temp * (9/5) + 32 );
    }

    function kmph_to_mph(speed) {
        return ( speed / 1.609344 );
    }
*/