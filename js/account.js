const lastPurchase = document.querySelector(".lastPurchase");
const selling = document.querySelector(".selling");
const wishList = document.querySelector(".wishList");

const url = "https://api.rawg.io/api/games?key=930f3820ae934782bc02fc7a5949d8a8";

const loading = document.querySelector(".loader");

async function getLastPurchase() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        console.log(games);

        for (let i = 0; i < games.length; i++) {

            if ( i === 2) {
                break;
            }

            lastPurchase.innerHTML += `
            <a href="gamesDetails.html?id=${games[i].id}" class="results">
            <img src="${games[i].background_image}"</img>
            <h3>${games[i].name}</h3>
            </a>`
        }
    
    } catch (error) {
        console.log("An error has occured.");
        lastPurchase.innerHTML = "";
        lastPurchase.innerHTML += `<div class="error">Error.</div>`;
    }
}

getLastPurchase();

async function getSelling() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        for (let i = 0; i < games.length; i++) {

            if ( i === 1) {
                break;
            }

            selling.innerHTML += `
            <a href="gamesDetails.html?id=${games[i].id}" class="results">
            <img src="${games[i].background_image}"</img>
            <h3>${games[i].name}</h3>
            </a>`
        }
    
    } catch (error) {
        console.log("An error has occured.");
        selling.innerHTML = "";
        selling.innerHTML += `<div class="error">Error.</div>`;
    }
}

getSelling();

async function getWishList() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        for (let i = 0; i < games.length; i++) {

            if ( i === 3) {
                break;
            }

            wishList.innerHTML += `
            <a href="gamesDetails.html?id=${games[i].id}" class="results">
            <img src="${games[i].background_image}"</img>
            <h3>${games[i].name}</h3>
            </a>`
        }
    
    } catch (error) {
        console.log("An error has occured.");
        wishList.innerHTML = "";
        wishList.innerHTML += `<div class="error">Error.</div>`;
    }
}

getWishList();