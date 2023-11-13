let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let lista_generos = data.results
        let generos = []
        for(let i=0; i<data.genres.length; i++){
            generos += lista_generos.genres[i].name + "  "
            let vinculo=document.querySelector('.container-peliculas')
            vinculo.innerHTML+=`<a href="detail-movie.html?id=${generos[i].id}"></a>` 
        }
        

    })
    .catch(function(error){
        console.log(error);
    })
