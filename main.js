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

    
})