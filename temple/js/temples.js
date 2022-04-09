const requestURL = "./js/temples.json";
const cards = document.querySelector('.cards');
let dataRequest;

fetch(requestURL)
    .then(request => request.json())
    .then( ( data ) => {
        //console.log(data);
        const companies = data.temples;
        dataRequest = companies;
        companies.forEach(displaytemple);
    });

displaytemple = (temple) => {
    // Create elements to add to the document
    let card = document.createElement("section");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let address = document.createElement("p");
    let services = document.createElement("ul");
    let history = document.createElement("ul");
    let history_t = document.createElement("p");
    let services_t = document.createElement("p");
    let milestones = document.createElement("p");
    let tel = document.createElement("p");
    let favorite = document.createElement("a");

    favorite.setAttribute('href', 'javascript:favorite('+ temple.id +')');
    if(window.localStorage.getItem('favorites') == null)
        favorite.textContent = 'Add to Favorites';
    else
        favorite.textContent = 'Delete from Favorites';
    
    console.log(temple);
    image.setAttribute('src', './images/temples/' + temple.image);
    image.setAttribute('alt', `image of ${temple.name}`);
    image.setAttribute('loading', 'lazy');

    name.textContent = temple.name;
    address.textContent = `Address: ${temple.address}`;
    tel.textContent = `Telephone: ${(temple.phone == null) ? 'Not available' : temple.phone}`;
    milestones.textContent = temple.milestones;

    services_t.textContent = 'Services:';
    services.appendChild(services_t);
    for(let i = 0; i < temple.services.length; i++){
        let item = document.createElement('li');
        item.textContent = temple.services[i];
        services.append(item);
    }
    
    history_t.textContent = 'History:';
    history.appendChild(history_t);
    for(let i = 0; i < temple.history.length; i++){
        let item = document.createElement('li');
        item.textContent = temple.history[i];
        history.append(item);
    }

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(tel);
    card.appendChild(milestones);
    card.appendChild(favorite);

    cards.appendChild(card);
}
/*
document.getElementById('list').addEventListener('click', function () {
    document.getElementById('list').classList.add('selected');
    document.getElementById('grid').classList.remove('selected');
    cards.classList.add('list')
    table = `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>website</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>`;

    cards.innerHTML = table;
    dataRequest.forEach((c) => {
        let tr = document.createElement('tr');
        let name = document.createElement('th');
        let address = document.createElement('th');
        let tel = document.createElement('th');
        let website = document.createElement('th');
        let web_a = document.createElement('a');

        name.textContent = c.name;
        address.textContent = c.address;
        tel.textContent = (c.phone == null) ? 'Not available' : c.phone;
        web_a.setAttribute("href", c.website);
        web_a.setAttribute('target', "_blank");
        web_a.textContent = c.website;
        website.appendChild(web_a);

        tr.appendChild(name);
        tr.appendChild(address);
        tr.appendChild(tel);
        tr.appendChild(website);

        document.querySelector('table > tbody').appendChild(tr);
    });
    
});

document.getElementById('grid').addEventListener('click', function(){
    document.getElementById('grid').classList.add('selected');
    document.getElementById('list').classList.remove('selected');
    cards.classList.remove('list');
    cards.innerHTML="";
    dataRequest.forEach(displaytemple);
});
*/
function favorite(id) {
    let favorites = Array();
    
    console.log(favorites, window.localStorage.getItem('favorites'));

    if (window.localStorage.getItem('favorites') == null ) {
        window.localStorage.setItem('favorites', [id] )
    } else {
        localFavorites = parseInt(window.localStorage.getItem('favorites'));
        console.log(localFavorites);
        window.localStorage.setItem('favorites', parseInt(window.localStorage.getItem('favorites')) + 1);
    }
    /*
    if (window.localStorage.getItem('favorites') == null ) {
        
    } else {
        //console.log('Mas de una vuelta');
        window.localStorage.setItem('favorites', parseInt(window.localStorage.getItem('favorites')) + 1);
    }

    //console.log(window.localStorage.getItem('favorites'), window.localStorage.getItem('last_visit'));

    days_message = (window.localStorage.getItem('last_visit') == null) ? ', Welcome by First Time!' : 'Last Visited: ' + daysBetween + ' day(s) ago.';

    //visits.textContent = '# Visits: ' + window.localStorage.getItem('favorites') + days_message;
    visits.textContent = days_message;

    window.localStorage.setItem('last_visit', new_v);
    //localStorage.clear()*/
    //localStorage.clear()
}