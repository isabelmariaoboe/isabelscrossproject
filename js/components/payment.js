const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

var buyMovieBtn = document.getElementById("btnProducer");
console.log(buyMovieBtn);
buyMovieBtn.href = `player.html?id=${id}`;
