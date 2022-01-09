const url = "https://api.rawg.io/api/games?key=930f3820ae934782bc02fc7a5949d8a8";

const gamesContainer = document.querySelector(".games-container");

const loading = document.querySelector(".loader");

async function gamesList() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        console.log(games);

        for (let i = 0; i < games.length; i++) {

            if ( i === 4) {
                break;
            }

            gamesContainer.innerHTML += `
            <a href="gamesDetails.html?id=${games[i].id}" class="results">
            <img src="${games[i].background_image}"</img>
            <h3>${games[i].name}</h3>
            </a>`
        }
    
    } catch (error) {
        console.log("An error has occured.");
        gamesContainer.innerHTML = "";
        gamesContainer.innerHTML += `<div class="error">Error.</div>`;
    }
}

gamesList();

const gamesColumn = document.querySelector(".games-column");

async function getGames() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        console.log(games);

        const loading = document.querySelector(".loader");
        
        for (let i = 0; i < games.length; i++) {

            if ( i === 10) {
                break;
            }

            gamesColumn.innerHTML += `<div class="sgame">
            <a href="gamesDetails.html?id=${games[i].id}" class="sgameResults">
            <img src="${games[i].background_image}"</img>
            <div class="game-card">
            <h3>${games[i].name}</h3>
            </a>
            <div class="card-details">
            <h4>Details</h4>
            <p>${games[i].genres[1].name}</p>
            <h4>Ratings</h4>
            <p>${games[i].ratings[0].title}</p>
            </div>
            </div>
            <form class="ssbutton">
            <button formaction="cart.html" type="submit">Add to cart</button>
            </form>
            </div>`
        }
    
    } catch (error) {
        console.log("An error has occured.");
        gamesColumn.innerHTML = "";
        gamesColumn.innerHTML += `<div class="error">Error.</div>`;
    }
}

getGames();


const toggleBtn = document.querySelector(".toggle-button");

const navLinks = document.querySelector(".navlinks");
toggleBtn.addEventListener("click", () => {
   navLinks.classList.toggle("active")
})