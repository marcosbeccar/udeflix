let APIKey='7bbfa155b881d065cf760bebe36c4d28'


let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let nombre= queryStringObj.get('name') //recupero el queryString, o la entrada del usuario.


let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}`
let url2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=${APIKey}`


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        lista_peliculas = data.results
        
       
        })
    .catch(function(error){
        console.log(error);
    })


/*fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
       
        })
    .catch(function(error){
        console.log(error);
    })*/
