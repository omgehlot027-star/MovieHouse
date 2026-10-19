const API_URL_BASE = "https://www.omdbapi.com/?apikey=15931e7c&t=";
const movieName = document.getElementById("movieName");
const button = document.getElementById("button1");


const modal = document.getElementById("movieModal");
const closeModal = document.getElementById("closeModal");

const movie1 = document.getElementById("img1");
const movie2 = document.getElementById("div2");
const movie3 = document.getElementById("div3");
const movie4 = document.getElementById("div4");
const movie5 = document.getElementById("div5");
const movie6 = document.getElementById("div6");
const movie7 = document.getElementById("div7");
const movie8 = document.getElementById("div8");
const movie9 = document.getElementById("div9");

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

async function fetchmovie() {
    const movie = movieName.value.trim();

    if (!movie) {
        alert("Please enter a valid movie name");
        return;
    }

    const API_URL = `${API_URL_BASE}${encodeURIComponent(movie)}`;
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

     
        if (data.Response === "False") {
            alert(`Error: ${data.Error}`);
            return;
        }

        console.log("Fetched Movie Data:", data);
        
     
        showMovieModal(data);
        
    } catch (error) {
        console.error("Error: ", error);
        alert("Could not get movie. Please check your connection and try again.");
    }
}

async function fetchmovieonBody(movieTitle) {

    const API_URL = `${API_URL_BASE}${encodeURIComponent(movieTitle)}`;
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

     
        if (data.Response === "False") {
            alert(`Error: ${data.Error}`);
            return;
        }

        console.log("Fetched Movie Data:", data);
        
     
        showMovieModal(data);
        
    } catch (error) {
        console.error("Error: ", error);
        alert("Could not get movie. Please check your connection and try again.");
    }
}

function showMovieModal(data) {
    document.getElementById("modalTitle").innerText = `Movie: ${data.Title}`;
    document.getElementById("modalYearGenre").innerText = `Genre: ${data.Genre}`;
    document.getElementById("Actor").innerText= `Actors: ${data.Actor}`
    document.getElementById("Country").innerText=`Country: ${data.Country}`
    document.getElementById("Released").innerText=`Released: ${data.Released}`
    document.getElementById("Awards").innerText=`Awards: ${data.Awards}`
    document.getElementById("modalPlot").innerText = `Story:  ${data.Plot}`;
    document.getElementById("modalRating").innerText = data.imdbRating;
    document.getElementById("modalPoster").src = data.Poster !== "N/A" ? data.Poster : '';

    modal.style.display = "flex";
}


movie1.addEventListener("click", () => {
    fetchmovieonBody("Dhurandhar");
});

movie2.addEventListener("click", () => {
    fetchmovieonBody("Drishyam the conclusion");
});

movie3.addEventListener("click", () => {
    fetchmovieonBody("chhaava");
});

movie4.addEventListener("click", () => {
    fetchmovieonBody("The shawshank redemption");
});

movie5.addEventListener("click", () => {
    fetchmovieonBody("titanic");
});

movie6.addEventListener("click", () => {
    fetchmovieonBody("Avatar");
});

movie7.addEventListener("click", () => {
    fetchmovieonBody("3 idiots");
});

movie8.addEventListener("click", () => {
    fetchmovieonBody("sanju");
});

movie9.addEventListener("click", () => {
    fetchmovieonBody("chalti ka naam gaadi");
});


button.addEventListener("click", fetchmovie);

movieName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchmovie();
    }
});