let APIKey='?api_key=7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let nameABuscar=queryStringObj.get('busqueda')
console.log(queryStringObj.get('busqueda')) //recupero el queryString, o la entrada del usuario.

let urlPelis=`https://api.themoviedb.org/3/movie/popular${APIKey}?title=Mission`


fetch(urlPelis)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results);      
    })
    .catch(function(error){
        console.log(error);
    })