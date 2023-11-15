let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let genero= queryStringObj.get('name') //recupero el queryString, o la entrada del usuario.
let tipo= queryStringObj.get('tipo')
console.log(genero)

let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc&with_genres=${genero}&api_key=${APIKey}`
let url2 = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es&page=1&sort_by=popularity.desc&with_genres=${genero}&api_key=${APIKey}`


if(tipo=='movie'){
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            document.querySelector('#busqueda-usuario').innerHTML=genero
            let lista_peliculas = data.results
            for (let i=0;i<=9;i++){
                let article=document.querySelector('#barra-1')
                article.innerHTML+=`<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
                <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
                <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`
            }
            
        
            })
        .catch(function(error){
            console.log(error);
        })
    }else if(tipo=='TVshow'){
        fetch(url2)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            document.querySelector('#busqueda-usuario').innerHTML=genero
            let lista_peliculas = data.results
            for (let i=0;i<=9;i++){
                let article=document.querySelector('#barra-1')
                article.innerHTML+=`<a href="detail-serie.html?id=${lista_peliculas[i].id}"><article>
                <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
                <p>${lista_peliculas[i].name}</p><p>${lista_peliculas[i].first_air_date}</p></article></a>`
            }
            
        
            })
        .catch(function(error){
            console.log(error);
        })
    }


