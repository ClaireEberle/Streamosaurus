var APIKeyTMDB = "e4fdcb0708125c02d9d3bb1ad5536644";
// var APIKeyShowtimes =
var goBtn = $(".go-button");

function getAPI() {
  var requestURL = "https://api.themoviedb.org/3/movie/76341?api_key="+APIKeyTMDB;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getAPI()

//Fetch movie searching by name ------------------------------------------------------------------
function nameSearch(event) {
  event.preventDefault();
  var Searchname = event.currentTarget
  console.log(event.currentTarget)
  var Inputtext = $(Searchname).siblings('input') //the elemntID of the movie text input
  var nametextsave = Inputtext.val();
  //for multiple words, must format Name+name in query
  console.log(nametextsave);
  fetch ("https://api.themoviedb.org/3/search/movie?api_key="+APIKeyTMDB+"&query="+nametextsave)
.then (function(response){
  return response.json()
})
.then (function(data){
  console.log(data)
  
  })
}
goBtn.on('click', nameSearch)

//Fetch Trending Movies or tv -----------------------------------------------------------------

function gettrendingAPI(){
  var requestTrendingURL = "https://api.themoviedb.org/3/trending/movie/day?api_key="+APIKeyTMDB; //all includes people, movie and tv
  
  fetch(requestTrendingURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var top5 = data.results
    }); //returns 20 pages; could do results 1-5
}
gettrendingAPI()

//Fetches movie by ID to see watch providers ---------------------------------------------------
function watchproviders () {
  //get movie id from movie data
  // var movieID = storedID
  var requestprovider ="https://api.themoviedb.org/3/movie/12/watch/providers?api_key="+APIKeyTMDB;
  fetch(requestprovider)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
})
}
watchproviders()

//Fetch Recent movies for movie list on front page-----------------------------------------------
function recentmovies() {
  var requestrecent = "https://api.themoviedb.org/3/movie/latest?api_key="+APIKeyTMDB+"&language=en-US";
  fetch(requestprovider)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
})
}

function moviereviews () {
  //get movie id from movie data
  // var movieID = storedID
  var requestreviews ="https://api.themoviedb.org/3/movie/12/reviews?api_key="+APIKeyTMDB+"&language=en-US&page=1";
  fetch(requestreviews)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
})
}
moviereviews() //returns reviews by folks on the TMDB site
//if results=none, display text = unable to stream this movie, option to input zip code for Theater

//What do do when the movie has multiple results?
//from movie info available: poster_path, original_language, overview, release_date, vote_average






//-----------------slideshow js-------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}