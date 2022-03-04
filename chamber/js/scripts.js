(function() {
    
    const today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();
    let weekDay = today.getDay()
    let date = `${month}/${day}/${year}`;
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let dateTime = `${date} ${time}`;

    const special_banner = document.getElementById('top-banner');
    const input_date = document.querySelector("[name='date']");

    if(special_banner) {
        if (weekDay == 1 || weekDay == 2)
            special_banner.style.display = 'block';
        else
            special_banner.style.display = 'none';
    }

    if(input_date) {
        input_date.value = dateTime;
    }

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