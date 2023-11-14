let APIKey='7bbfa155b881d065cf760bebe36c4d28'

// let queryString=location.search
// let queryStringObj= new URLSearchParams(queryString)
// let id_pelicula= queryStringObj.get('id') //recupero el queryString, o la entrada del usuario.

let url=`https://api.themoviedb.org/3/movie/popular?language=es&page=1&api_key=${APIKey}`, options

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); 
        let lista_peliculas = data.results
        for (let i=0;i<=4;i++){
            let article=document.querySelector('#barra-1')
            article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
            <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`
        }
        for (let i=6;i<=10;i++){
            let article=document.querySelector('#barra-2')
            article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
            <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`
        }
        for (let i=12;i<=16;i++){
            let article=document.querySelector('#barra-3')
            article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
            <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`
        }
    })
    .catch(function(error){
        console.log(error);
    })