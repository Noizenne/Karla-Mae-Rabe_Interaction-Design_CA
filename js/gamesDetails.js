const gamesContainer = document.querySelector(".gamesContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id + "?key=930f3820ae934782bc02fc7a5949d8a8";

const loading = document.querySelector(".loader");
loading.classList.remove("loader");

async function getGame() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        createHTML(data);
        console.log(data);

    }
    catch {
        console.log("An error has occured.");
    }
}

getGame();

function createHTML(data) {
    gamesContainer.innerHTML = `
    <h2 class="gameTitle">${data.name}</h2>
    <div class="details-card">
    <img src="${data.background_image}"</img>
    <div class="gamesDetails">
    <div><h3>Details</h3>
    <p>Released: ${data.released}</p>
    <div>
    <p>Genre: ${data.genres[1].name}, ${data.genres[0].name}</p>
    </div>
    <p>Rating: ${data.rating}</p>
    <p>Tags: ${data.tags[0].name}, ${data.tags[1].name}</p>
    <button formaction="checkout.html" type="submit">Buy this</button>
    </div>
    </div>
    </div>
    <div class="gameDescription"><h3>Description</h3> <p>${data.description}</p></div>
    <div class="games-container">
  </div>
    `
}
