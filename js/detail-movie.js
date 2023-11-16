let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let id_pelicula= queryStringObj.get('id') //recupero el queryString, o la entrada del usuario.

let url=`https://api.themoviedb.org/3/movie/${id_pelicula}?lenguaje=es&api_key=${APIKey}`

let url2 =`https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?language=en-US&page=1&api_key=${APIKey}`

let boton = document.getElementById('miBoton');
let section = document.getElementById('boton');

boton.addEventListener('click', function() {
    if (section.style.display === 'none') {
        section.style.display = 'flex';
    } else {
        section.style.display = 'none';
    }
});


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); 
        let lista_generos = []
        for(let i=0; i<data.genres.length; i++){
            lista_generos += data.genres[i].name + "  "
            
        }
        let section_izquierda = document.querySelector('.detalle_pelicula_izquierda')
        let section_derecha = document.querySelector('.detalle_pelicula_derecha')
        section_izquierda.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}">`
        section_derecha.innerHTML += `<article> <h1>${data.title}</h1> <p>Sinopsis: ${data.overview}</p> 
        <p> Rating: ${data.vote_average}</p> <p> Fecha de estreno: ${data.release_date}</p> 
        <p> Duración: ${data.runtime} mins</p> <p> Generos: ${lista_generos}</p></article>`
    })
    .catch(function(error){
        console.log(error);
    })


fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let lista_peliculas = data.results 
        console.log(data)
        for (let i=0;i<=4;i++){
            let article=document.querySelector('#barra')
            article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
            <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`
        }
        
    })
    .catch(function(error){
        console.log(error)
    })