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

            const anchorLeft = document.createElement('button');
            anchorLeft.classList.add("switchLeft", "switchButton", "fa-solid", "fa-chevron-left");


            const anchorRight = document.createElement('button');
            anchorRight.classList.add("switchRight", "switchButton", "fa-solid", "fa-chevron-right");
            
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
                poster.src = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                BoxMovie.appendChild(poster); // ภายใน div ชั้น 3

            });

        })
    )

};

// slider movies

document.addEventListener("click", e => {
    let slide;
    if (e.target.matches(".switchLeft")) {
        slide = e.target;
    } else if (e.target.matches(".switchRight")) {
        slide = e.target;
    } else {
        slide = e.target.closest(".switchLeft,.switchRight");
    }
    if (slide != null) {
        onHandleClick(slide);
    }
});


let sliderIndex = 0;
function onHandleClick(slide) {
    const sliderBoxCon = slide.closest(".sliderMoviesBox");
    const sliderBox = sliderBoxCon.querySelector(".boxmovies");
    const slideWidth = sliderBox.offsetWidth;
    const numSlides = sliderBox.querySelectorAll("img")[0];


    console.log(numSlides);
    console.log(slideWidth);

    if (slide.classList.contains("switchLeft")) {
        sliderIndex = (sliderIndex - 1 + numSlides) % numSlides;
        if (sliderIndex === numSlides - 1) {
            // Go to the last slide when going left from the first slide
            sliderBox.style.transform = `translateX(${-sliderIndex * slideWidth}px)`;
            sliderIndex = 0;
        }
    }
    if (slide.classList.contains("switchRight")) {
        sliderIndex = (sliderIndex + 1) % numSlides;
        if (sliderIndex === 0) {
            // Start the slider from the beginning
            sliderBox.style.transform = `translateX(0)`;
            sliderIndex = 1;
        }
    }
    sliderBox.style.transform = `translateX(${-sliderIndex * slideWidth}px)`;
}















