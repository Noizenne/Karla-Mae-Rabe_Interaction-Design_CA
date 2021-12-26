const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=930f3820ae934782bc02fc7a5949d8a8";


const gamesContainer = document.querySelector(".games-container");


async function gamesList() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        for (let i = 0; i < games.length; i++) {

            if ( i === 4) {
                break;
            }

            gamesContainer.innerHTML += `
            <div class="results">
            <img src="${games[i].background_image}"</img>
            <h2>${games[i].name}</h2>
            </div>`;
        }
    
    } catch (error) {
        console.log("An error has occured.");
        gamesContainer.innerHTML = "";
        gamesContainer.innerHTML += `<div class="error">Error.</div>`;
    }

    finally {
        console.log("Finally.")
    }
}

gamesList();