fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=> {
    //this will make it a javascript object
    return res.json();
})
.then((films)=>{
    console.log(films);

    let movieSelect = document.querySelector("#movie-select");

    for (let film of films) {
        const option = document.createElement("option");
        option.setAttribute("value", film.title);
        option.textContent = film.title;
        movieSelect.append(option);
    }
})