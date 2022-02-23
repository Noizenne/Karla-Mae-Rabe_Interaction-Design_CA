const gamesContainer = document.querySelector(".gamesContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.kmrabe.site/wp-json/wc/v3/products/" + id + "?consumer_key=ck_737a0bb25e088788e7d90504a028dda34e49fd7c&consumer_secret=cs_1a2793ec973e9b9993a47e39c001e78a457c6efb";

const loading = document.querySelector(".loader");
loading.classList.remove("loader");

async function getGame() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        createHTML(data);

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
    <img src="${data.images[0].src}"</img>
    <div class="gamesDetails">
    <div><h3>Details</h3>
    <p>Genre: ${data.attributes[0].options}</p>
    </div>
    <p>Rating: ${data.average_rating}</p>
    <form class="sbutton">
    <button formaction="cart.html" type="submit">Add to cart</button>
    </form>
    </div>
    </div>
    </div>
    <div class="gameDescription"><h3>Description</h3> <p>${data.short_description}</p></div>
    <div class="games-container">
    </div>
    `
}


const toggleBtn = document.querySelector(".toggle-button");

const navLinks = document.querySelector(".navlinks");
toggleBtn.addEventListener("click", () => {
   navLinks.classList.toggle("active")
})