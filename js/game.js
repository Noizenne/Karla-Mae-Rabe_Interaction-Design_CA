const url = "https://www.kmrabe.site/wp-json/wc/v3/products?consumer_key=ck_737a0bb25e088788e7d90504a028dda34e49fd7c&consumer_secret=cs_1a2793ec973e9b9993a47e39c001e78a457c6efb";

const gamesColumn = document.querySelector(".games-column");

async function getGames() {

    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
        
        for (let i = 0; i < data.length; i++) {

            if ( i === 5) {
                break;
            }

            gamesColumn.innerHTML += `<div class="sgame">
            <a href="gamesDetails.html?id=${data[i].id}" class="sgameResults">
            <img src="${data[i].images[0].src}"</img>
            <div class="game-card">
            <h3>${data[i].name}</h3>
            </a>
            <div class="card-details">
            <h4>Details</h4>
            <p>${data[i].attributes[0].options}</p>
            <h4>Ratings</h4>
            <p>${data[i].average_rating}</p>
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