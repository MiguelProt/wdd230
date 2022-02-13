// weather script
const temp_cel = parseFloat(document.getElementById("temp").textContent);
const wind_speed = parseFloat(document.getElementById("wind_speed").textContent);

const temp = cel_to_far(temp_cel);
const speed = kmph_to_mph(wind_speed);

if( temp_cel <= 50 && wind_speed > 3) {
    const windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed,0.16));
    document.getElementById("wind_chill").innerHTML = Math.round(windchill * 10) / 10 + " M/h";
}
else {
    document.getElementById("wind_chill").innerHTML = "N/A"
}

function cel_to_far(temp) {
    return (temp * (9/5) + 32 );
}

function kmph_to_mph(speed) {
    return ( speed / 1.609344 );
}