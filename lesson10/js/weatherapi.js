const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=4e41a30936e84b168845a6640287d9db';

fetch( apiURL )
    .then( response => response.json())
    .then( data => {
        if( data.cod == 401 || data.cod == 404 )
            console.log(`ERROR (#${data.cod}): ${data.message}`);
        else {
            const mainInfo = data.main;

            let strongTag = document.createElement('b');
            strongTag.textContent = mainInfo.temp.toFixed(1);
            document.querySelector('#current-temp').appendChild(strongTag);

            const iconSrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            const desc = data.weather[0].description;
            let strongTag2 = document.createElement('b');
            strongTag2.textContent = iconSrc;
            document.querySelector('#icon-src').appendChild(strongTag2);
            document.querySelector('#weathericon').setAttribute('src', iconSrc);
            document.querySelector('#weathericon').setAttribute('alt', desc);
            document.querySelector('figcaption').textContent = desc;
            
            
        }
    });