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
 })();

document.querySelector('.mobile-menu').addEventListener('click', (function(){
    let menu = document.getElementById('sub-nav');
    if ( menu.className.indexOf('show') > -1 ){
        menu.classList.remove('show');
        document.querySelector('.mobile-menu').textContent = "Show Menu";
    } else {
        menu.classList.add('show');
        document.querySelector('.mobile-menu').textContent = "Hide Menu";
    }
}));