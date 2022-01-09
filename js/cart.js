const url = "https://api.rawg.io/api/games?key=930f3820ae934782bc02fc7a5949d8a8";

const sbag = document.querySelector(".shoppingbag");

async function getBag() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        console.log(games);

        for (let i = 0; i < games.length; i++) {

            if ( i === 2) {
                break;
            }

            sbag.innerHTML += `<div class="shoppingbag details">
            <a href="gamesDetails.html?id=${games[i].id}" class="results">
            <img src="${games[i].background_image}"</img>
            <div class="shoppingbag details">
            <h3>${games[i].name}</h3>
            <h3>$39.99</h3>
            <a href="#" class="delete">Remove</a>
            </a>
            </div>
            </div>`
        }
    
    } catch (error) {
        console.log("An error has occured.");
        sbag.innerHTML = "";
        sbag.innerHTML += `<div class="error">Error.</div>`;
    }
}

getBag();