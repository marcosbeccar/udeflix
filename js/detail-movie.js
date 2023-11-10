let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let id_pelicula= queryStringObj.get('id') //recupero el queryString, o la entrada del usuario.

let urlPelis=`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${APIKey}`

fetch(urlPelis)
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
        <p> Duración xmins: ${data.runtime}</p> <p> Generos: ${lista_generos}</p></article>`
    })
    .catch(function(error){
        console.log(error);
    })