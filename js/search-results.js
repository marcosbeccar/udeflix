let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
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
        if (lista_peliculas[0]){
        for(let i = 0; i <lista_peliculas.length; i++){
            let article=document.querySelector('.peliculas')
            article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
            <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`  
        }
        }else{document.querySelector('.container_resultado_busqueda h2').innerHTML='🔎 No se encontraron coincidencias con su búsqueda'}
    })
    .catch(function(error){
        console.log(error);
    })

