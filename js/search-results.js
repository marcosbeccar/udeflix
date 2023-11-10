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
        let lista_peliculas=[]
        for(let i = 0; i <5; i++){
            let titulo = data.results[i].title;
            lista_peliculas.push(titulo)  
        }
        for(let i = 0; i <lista_peliculas.length; i++){
            let article=document.querySelector('.peliculas')
            article.innerHTML+=`<article><p>${lista_peliculas[i]}</p></article>`  
        }
    })
    .catch(function(error){
        console.log(error);
    })

