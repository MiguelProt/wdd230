const visits = document.querySelector(".visits");
const currentVal = (window.localStorage.getItem('visits') == null ) ? 0 : parseInt(window.localStorage.getItem('visits'));
console.log(currentVal);
if (window.localStorage.getItem('visits') == null ) {
    console.log('This is your first time in the date');
    window.localStorage.setItem('visits', 1);
} else {
    window.localStorage.setItem('visits', currentVal + 1);
}

visits.textContent = 'Visits: ' + (currentVal == null ? currentVal : 1);
/*
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();*/