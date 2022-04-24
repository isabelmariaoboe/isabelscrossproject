const baseUrl = "https://noroffcors.herokuapp.com/" + "http://imgv.link/wp-json/wc/store/products"
const productContainer = document.querySelector(".results")
const categories = document.querySelectorAll(".categories");
const searchButton = document.querySelector(".search-button");

async function getProducts(url){
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function(product){
    productContainer.innerHTML +=
    `<a href="player.html?id=${product.id}" class ="card"><h2>${product.name}</h2>
    <div class = "product-image" style="background-image:url('${product.thumbnail}')
    </div>`
  })
}
getProducts(baseUrl);

categories.forEach(function(category){
  category.onclick = function(event){
    let newUrl;
    if(event.target.id === "featured"){
      newUrl = baseUrl + "?featured=true";
    }
    else{
      const categoryChosen = event.target.value;
      newUrl = baseUrl +`?category=${categoryChosen}`
    }
    productContainer.innerHTML = "";
    getProducts(newUrl);
  }
})

searchButton.onclick = function(){
  const searchInput = document.querySelector("#search-input").value;
  const newUrl = baseUrl + `?search=${searchInput}`;
  productContainer.innerHTML = "";
    getProducts(newUrl);
}







// FUNCTION FOR API CALL TO YOUTUBE

// function createURL(query) {
//   var encodedURI = encodeURI(query);
//   const url =
//     `https://youtube.googleapis.com/youtube/v3/search?` +
//     `part=snippet` +
//     `&maxResults=25` +
//     `&q=${encodedURI}` +
//     `&key=`;
//   // console.log(url);
//   // console.log(encodedURI);
//   return url;
// }

// const proxy = "https://noroffcors.herokuapp.com/";

// async function searchMovies() {
//   // console.log("clicked")
//   var searchText = document.getElementById("search-bar");
//   var query = searchText.value;
//   // console.log(query);
//   if (query.length === 0) {
//     return;
//   }
//   var url = createURL(query);

//   // console.log(corsFix)
//   callApi(url);
// }

// const resultsContainer = document.querySelector(".results");

// async function callApi(url) {
//   try {
//     const corsFix = proxy + url;
//     const response = await fetch(corsFix);
//     const json = await response.json();

//     console.log(json);
//     console.log(json.items);
//     console.log(json.items.length);

//     var movies = json.items;

//     resultsContainer.innerHTML = "";

//     for (let i = 0; i < Math.min(movies.length, 6); i++) {
//       console.log(movies[i].snippet.title);
//       resultsContainer.innerHTML += `<a href="payment.html?id=${movies[i].id.videoId}" class="card" >
//                                             <h3> ${movies[i].snippet.title} <h3>
//                                             <button class= "btn-buy">Buy it</button>
//                                             <h5> ${movies[i].snippet.description} <h5>
                                            
//                                            </a>`;
//     }
//   } catch (error) {
//     console.log(error);
//     resultsContainer.innerHTML = message("error", error);
//   }
// }

