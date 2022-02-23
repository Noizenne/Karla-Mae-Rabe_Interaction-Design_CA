const url = "https://www.kmrabe.site/wp-json/wc/v3/products?consumer_key=ck_737a0bb25e088788e7d90504a028dda34e49fd7c&consumer_secret=cs_1a2793ec973e9b9993a47e39c001e78a457c6efb";

const gamesContainer = document.querySelector(".games-container");

const loading = document.querySelector(".loader");
loading.classList.remove("loader");

async function gamesList() {

    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data.length; i++) {

            if ( i === 4) {
                break;
            }

            gamesContainer.innerHTML += `
            <a href="gamesDetails.html?id=${data[i].id}" class="results">
            <img src="${data[i].images[0].src}"</img>
            <h3>${data[i].name}</h3>
            </a>`
        }
    
    } catch (error) {
        console.log("An error has occured.");
        gamesContainer.innerHTML = "";
        gamesContainer.innerHTML += `<div class="error">There's an error!</div>`;
    }
}

gamesList();
