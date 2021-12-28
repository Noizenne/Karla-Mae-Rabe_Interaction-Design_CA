const gamesContainer = document.querySelector(".gamesContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id + "?key=930f3820ae934782bc02fc7a5949d8a8";


async function getGame() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        createHTML(data);

    }
    catch {
        console.log("An error has occured.");
    }
}

getGame();

function createHTML(data) {
    gamesContainer.innerHTML = `
    <div class="details-card">
    <img src="${data.background_image}"</img>
    </div>
    <h1 class="gameTitle">${data.name}</h1>
    <div class="gameDescription"><p>${data.description}</p></div>
    `
}