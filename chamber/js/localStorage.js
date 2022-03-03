const visits = document.querySelector(".visits");
const date = document.querySelector(".date");

const FACTOR = 1000 * 60 * 60 * 24;

last_v = (window.localStorage.getItem('last_visit') == null) ? new Date().getTime() : window.localStorage.getItem('last_visit');
new_v = new Date().getTime();

let daysBetween = Math.round((new_v - last_v) / FACTOR)

/*console.log(window.localStorage.getItem('visits'));
console.log(daysBetween, ( new_v - last_v), 12);
console.log(new_v);
console.log(last_v);*/

if (window.localStorage.getItem('visits') == null ) {
    window.localStorage.setItem('visits', 1);
} else {
    //console.log('Mas de una vuelta');
    window.localStorage.setItem('visits', parseInt(window.localStorage.getItem('visits')) + 1);
}

//console.log(window.localStorage.getItem('visits'), window.localStorage.getItem('last_visit'));

days_message = (window.localStorage.getItem('last_visit') == null) ? ', Welcome by First Time!' : ', Last Visited: ' + daysBetween + ' day(s) ago.';

visits.textContent = '# Visits: ' + window.localStorage.getItem('visits') + days_message;

window.localStorage.setItem('last_visit', new_v);
//localStorage.clear()