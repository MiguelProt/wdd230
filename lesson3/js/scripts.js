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