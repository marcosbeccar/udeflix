let APIKey='7bbfa155b881d065cf760bebe36c4d28'

// let queryString=location.search
// let queryStringObj= new URLSearchParams(queryString)
// let id_pelicula= queryStringObj.get('id') //recupero el queryString, o la entrada del usuario.

let url=`https://api.themoviedb.org/3/movie/popular?language=es&page=1&api_key=${APIKey}`
let urlSeries=`https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}`


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
        for (let i=5;i<=9;i++){
            let article=document.querySelector('#barra-2')
            article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
            <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`
        }
    })
    .catch(function(error){
        console.log(error);
    })

    //última fila de series
    fetch(urlSeries)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let listaSeries=data.results
        for (let i=0;i<=4;i++){
            let article=document.querySelector('#barra-3')
            article.innerHTML+=`<a href="detail-serie.html?id=${listaSeries[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w342${listaSeries[i].poster_path}">
            <p>${listaSeries[i].name}</p><p>${listaSeries[i].first_air_date}</p></article></a>`
        }
    })
  