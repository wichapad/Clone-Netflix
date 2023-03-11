// background Navbar scroll
window.onscroll = function () { scrollNavbar() };

function scrollNavbar() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector("#navbar-container").className = "scroll";
    } else {
        document.querySelector("#navbar-container").className = "";
    }
};






// show Movies fecth API
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
            anchorLeft.classList.add("switchLeft", "sliderButton", "fa-solid", "fa-chevron-left");
            anchorLeft.style.display = "flex";

            const anchorRight = document.createElement('a');
            anchorRight.classList.add("switchRight", "sliderButton", "fa-solid", "fa-chevron-right");
            anchorRight.style.display = "flex";

            const title = document.createElement("h2");
            title.classList.add("title")
            title.textContent = "Trending Now";
            slider.appendChild(title); // type ต่อจาก div ชั้น 2

            slider.appendChild(sliderMoviesBox); // div ชั้น 2 
            sliderMoviesBox.appendChild(BoxMovie); // div ชั้น 3
            sliderMoviesBox.appendChild(anchorLeft); // sliderLeft ภายใน div ชั้น 2
            sliderMoviesBox.appendChild(anchorRight); // sliderRight ภายใน div ชั้น 2

            movies.forEach(function (movie) {

                const poster = document.createElement('img');
                poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                BoxMovie.appendChild(poster); // ภายใน div ชั้น 3

            });

        })
    )

};

// slider movies

// document.addEventListener("click", e => {
//     let slide;
//     if (e.target.matches(".sliderButton")) {
//         slide = e.target;
//     } else {
//         slide = e.target.closest(".sliderButton")
//     }
//     if (slide != null) onHandleClick(slide);
// })

// function onHandleClick(slide) {
//     const sliderBox = slide.closest(".sliderMoviesBox").querySelector(".boxmovies");
//     const sliderIndex = parseInt(getComputedStyle(sliderBox).getPropertyValue("--slider-index"));
//     console.log(sliderIndex)
//     console.log(sliderBox)
//     if (slide.classList.contains("switchLeft")) {

//         sliderBox.style.setProperty("--slider-index", sliderIndex - 1);
//     }
//     if (slide.classList.contains("switchRight")) {
//         sliderBox.style.setProperty("--slider-index", sliderIndex + 1);
//     }

// }
const sliderBox = document.querySelector(".sliderMoviesBox");
const BoxMovies = document.querySelector(".boxmovies");

const sliderBoxWidth = sliderBox.getBoundingClientRect().width;

const prevButton = document.querySelector(".switchLeft");
const nextButton = document.querySelector(".switchRight");
let currentIndex = 0;

BoxMovies.forEach(BoxMovie => {
    BoxMovie.style.width = `${sliderBoxWidth}px`;
})

prevButton.addEventListener('click', () => {
    const newSlideIndex = currentIndex - 1 < 0 ? BoxMovies.length - 1 : currentIndex - 1;

    const offset = -newSlideIndex * sliderBoxWidth;
    sliderBox.querySelector('.boxmovies').style.transform = `translateX(${offset}px)`;

    currentIndex = newSlideIndex;
})
nextButton.addEventListener('click', () => {
    const newSlideIndex = currentIndex + 1 >= BoxMovies.length ? 0 : currentIndex + 1;

    const offset = -newSlideIndex * sliderBoxWidth;
    sliderBox.querySelector('.boxmovies').style.transform = `translateX(${offset}px)`;

    currentIndex = newSlideIndex;
})









