function renderMovies(movieData) {
    var movieHTML = movieData.map(function(movie) {
        return `
        <div class="card movie-card" style="width: 18rem;">
            <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <button class="btn btn-primary" onClick="saveToWatchlist('${movie.imdbID}')">Save to Watchlist</button>
            </div>
        </div>
        `;
    }).join('');

    document.getElementsByClassName('results')[0].innerHTML = movieHTML;
}
function saveToWatchlist(imdbID) {
	console.log(imdbID);
	var movie = movieData.find(function (currentMovie) {
		return currentMovie.imdbID == imdbID;
	})
	var WatchlistJSON = localStorage.getItem("watchlist");
	var watchlist = JSON.parse(WatchlistJSON);
	
		if (watchlist == null){
			watchlist = [];
		}
		
		watchlist.push(movie);
		WatchlistJSON = JSON.stringify(watchlist);
		localStorage.setItem("watchlist", WatchlistJSON);
	
}
window.addEventListener("DOMContentLoaded", function() {"submit", function(event){}
	event.preventDefault();
    renderMovies(movieData);
	
});

