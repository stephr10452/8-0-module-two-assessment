fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=> {
    //this will make it a javascript object
    return res.json();
})
.then((films)=>{
    console.log(films);

    let dropDown = document.querySelector("#dropDown");

    for (let film of films) {
        const option = document.createElement("option");
        option.setAttribute("value", film.title);
        option.textContent = film.title;
        dropDown.append(option);
    }
  let movieTitle = document.querySelector("#movie-title");
  const movieYear = document.querySelector("#movie-released-date");
  const movieDescrip = document.querySelector("#movie-description");
  
  let selectedFilm;

dropDown.addEventListener("change", ()=>{
    for (let film of films){
        if(dropDown.value === film.title){
            console.log(film);
            selectedFilm = film;
            movieTitle.textContent = film.title;
            movieYear.textContent =  film.release_date;
            movieDescrip.textContent = film.description;
          

        }
    }
})
const addButton = document.querySelector("#save-button");
const reviews = document.querySelector("#list_review");
    
})