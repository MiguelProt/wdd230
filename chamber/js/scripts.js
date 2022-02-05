(function() {
    
    const today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();
    let date = `${month}/${day}/${year}`;
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let dateTime = `${date} ${time}`;

    document.getElementById("year").innerHTML = year;
    document.getElementById("fullDate").innerHTML = dateTime;

    const dataField = document.querySelector(".date");
    const now = new Date();
    const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);

    dataField.textContent = fullDate;
 })();

 document.querySelector('.mobile-menu').addEventListener('click', (function(){
    let menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
}));