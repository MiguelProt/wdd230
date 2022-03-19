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

const path = window.location.pathname;
console.log(path);
if ( path === '/chamber/' || path === '/wdd230/chamber/') {
    const requestURL = "./js/data.json";
    const cards = document.querySelector('.cards');
    let dataRequest;

    fetch(requestURL)
        .then(request => request.json())
        .then( ( data ) => {
            const companies = data.companies;
            dataRequest = companies;
            let gold_silver = [];
            (data.companies).forEach(c => {
                if ( c["membership"] == "silver" || c["membership"] == "gold")
                    gold_silver.push(c);
            });
            
            displayCompany(gold_silver, gold_silver.length);
        });

    displayCompany = (company, size) => {
        console.log(company);
        for (let i = 0; i < 3; i++){
            const spots = document.querySelector('.spotlights');
            // Create elements to add to the document
            let name = document.createElement("h3");
            let logo = document.createElement("img");
            let card = document.createElement("div");
            let address = document.createElement("p");
            let tel = document.createElement("p");
            let website = document.createElement("a");

            card.setAttribute("class", "spot");
            let random_index = Math.floor(Math.random() * size);

            logo.setAttribute('src', company[random_index].image);
            logo.setAttribute('alt', `Logo of ${company[random_index].name}`);
            logo.setAttribute('loading', 'lazy');

            name.textContent = company[random_index].name;
            address.textContent = `Address: ${company[random_index].address}`;
            tel.textContent = `Telephone: ${(company[random_index].tel == null) ? 'Not available' : company[random_index].tel}`;
            website.setAttribute("href", company[random_index].website);
            website.setAttribute('target', "_blank");
            website.textContent = company[random_index].website;


            card.appendChild(name);
            card.appendChild(logo);
            card.appendChild(address);
            card.appendChild(tel);
            card.appendChild(website);

            spots.appendChild(card);
            console.log(company[random_index])
            company.splice(random_index, 1);
            size--;
        }
    }
}