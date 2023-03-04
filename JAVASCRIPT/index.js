// background Navbar scroll
// function changeBg() {
//     var navbar = document.querySelector(".navbar-container");
//     var scrollValue = window.scrollY;

//     if(scrollValue < 50) {
//         navbar.classList.remove("bgnavbar");
//     } else {
//         navbar.classList.add("bgnavbar");
//     }

// }
// window.addEventListener('scroll',changeBg)

const slider = document.querySelector(".sliderMoviesBox");

var scrollPerclick;


showMovieData();

var scrollAmount = 0;
function sliderScrollLeft() {
    slider.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerclick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0
    }
}

function sliderScrollRight() {
    if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
        slider.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerclick),
            behavior: "smooth"
        })
    }
}

function showMovieData() { //async
    // const api_key = "20a3b2db64569377dafa9b2c6094e31f"; //API Key

    // var result = await axios.get(
    //     "https://api.themoviedb.org/3/discover/movie?api_key=" + //Example API Request
    //     api_key +
    //     "&sort_by=popularity.desc" //Discover Examples
    // );

    // result = result.data.results;

    // result.map(function (cur, index) {
    //     slider.insertAdjacentHTML(
    //         "beforeend",
    //         `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}">`
    //     )
    // });

    scrollPerclick = 450;
}



