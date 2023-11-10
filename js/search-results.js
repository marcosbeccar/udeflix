let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let nameABuscar=queryStringObj.get('busqueda')
let busqueda= queryStringObj.get('busqueda') //recupero el queryString, o la entrada del usuario.

let urlPelis=`https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=${APIKey}`


fetch(urlPelis)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results); 
        document.querySelector('#busqueda-usuario').innerHTML=busqueda
        let lista_peliculas = data.results
        for(let i = 0; i <lista_peliculas.length; i++){
            let article=document.querySelector('.peliculas')
            article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"></a><article><img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}"><p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date
        }</p></article></a>`  
        }
    })
    .catch(function(error){
        console.log(error);
    })

