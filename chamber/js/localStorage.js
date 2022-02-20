const visits = document.querySelector(".visits");
const currentVal = (window.localStorage.getItem('visits') == null ) ? 0 : parseInt(window.localStorage.getItem('visits'));
console.log(currentVal);
if (window.localStorage.getItem('visits') == null ) {
    console.log('This is your first time in the date');
    window.localStorage.setItem('visits', 1);
} else {
    window.localStorage.setItem('visits', (currentVal + 1));
}

visits.textContent = 'Visits: ' + currentVal;