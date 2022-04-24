const baseUrl = "https://noroffcors.herokuapp.com/" + "http://imgv.link/wp-json/wc/store/products/"


const detailContainer = document.querySelector(".movie-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);



const url = baseUrl + id;



async function fetchMovie() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        
        // console.log(typeof json)

        var movie = json;

        detailContainer.innerHTML = "";

        createHtml(movie)
      
    }
    catch(error) {
        console.log(error);
        // detailContainer.innerHTML = message("error", error);
    }
    
}

fetchMovie();

function createHtml(movie) {
    detailContainer.innerHTML = `<h1>${movie.name}</h1>
                                <div class="movie-name">${movie.prices.price} ${movie.prices.currency_prefix}</div>
                                <div class = "product-image" style="background-image:url('${movie.thumbnail}')</div>`;
}










// const queryString = document.location.search;
// console.log(queryString);
// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// var player = document.getElementById("player");
// console.log(player);
// player.innerHTML = `<iframe 
// src="https://www.youtube.com/embed/${id}">
// </iframe>`;











// buyMovieBtn.href = `player.html?id=${id}`;

// const params = new URLSearchParams(queryString);

// const id = params.get("id.videoId");

// console.log(id);

// const url = `https://youtube.googleapis.com/youtube/v3/search?`+
// `part=snippet`+
// `&maxResults=25` +
// `&q=${encodedURI}` +
// `&key=`;

// const proxy = "https://noroffcors.herokuapp.com/";

// const corsFix = proxy + url;

// console.log(url);

// async function fetchMovie() {

//     try {
//         const response = await fetch(corsFix);
//         const json = await response.json();

//         console.log(json);

//         var movie = json.items;
//         console.log(json.items.snippet.title)

//         playerContainer.innerHTML = "";

//         createHtml(movie)

//     }
//     catch(error) {
//         console.log(error);
//         // detailContainer.innerHTML = message("error", error);
//     }

// }

// fetchMovie();

// function createHtml(movie) {
//     detailContainer.innerHTML = `<h1>${movies[i].snippet.title}</h1>`;
// }
