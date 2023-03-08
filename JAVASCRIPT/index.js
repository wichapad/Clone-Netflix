// background Navbar scroll
window.onscroll = function() {scrollNavbar()};

function scrollNavbar(){
    if(document.documentElement.scrollTop > 50){
        document.querySelector("#navbar-container").className ="scroll";
    } else{
        document.querySelector("#navbar-container").className ="";
    }
};



// Movies slider
const slider = document.querySelector(".sliderMovies");

showMovieData();

function showMovieData() {
    const api_key = "20a3b2db64569377dafa9b2c6094e31f"; //API Key
    const urls = [
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
        `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&sort_by=popularity.desc`,
        `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&with_genres=35&with_cast=23659&sort_by=revenue.desc`,
        `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&with_genres=878&with_cast=500&sort_by=vote_average.desc`
    ];

    urls.map(url => fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            const movies = data.results;

            const sliderMoviesBox = document.createElement('div');
            sliderMoviesBox.classList.add('sliderMoviesBox')

            const BoxMovie = document.createElement('div');
            BoxMovie.classList.add("boxmovies")

            const anchorLeft = document.createElement('a');
            anchorLeft.classList.add("switchLeft", "sliderButton");
            anchorLeft.textContent = "<";

            const anchorRight = document.createElement('a');
            anchorRight.classList.add("switchRight", "sliderButton");
            anchorRight.textContent = ">";

            // const genre = document.createElement("h2");
            // genre.textContent = "trending Now";

            movies.forEach(function (movie) {

                const poster = document.createElement('img');
                poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

                slider.appendChild(sliderMoviesBox);
                // slider.appendChild(genre);
                sliderMoviesBox.appendChild(BoxMovie);
                sliderMoviesBox.appendChild(anchorLeft);
                sliderMoviesBox.appendChild(anchorRight);
                BoxMovie.appendChild(poster);



            });
        })
    )

};





