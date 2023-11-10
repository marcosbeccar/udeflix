fetch('https://api.themoviedb.org/3/movie/76341?api_key=7bbfa155b881d065cf760bebe36c4d28')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
    })
    .catch(function(error){
        console.log(error);
    })






    console.log(location)
    let queryString=location.search
    let queryStringObj= new URLSearchParams(queryString)
    console.log(queryStringObj.get('busqueda')) //recupero el queryString, o la entrada del usuario.
    
    
    let nameABuscar=queryStringObj.get('busqueda')
    let url=`https://rickandmortyapi.com/api/character?name=${nameABuscar}` //SOLO va a buscar nombres que contengan "rick" o lo que el usuario escriba.
    let infoPersonajes=[]
    fetch(url) //request
        .then(function(response) {  //capto los datos de la API (response)
          return response.json()    //Lo traduzco a js
        })
    
        .then(function(data) {      //llamo a la data que traduje antes
           console.log(data)
        })
    
        .catch(function(error) {
          console.log("Error: " + error);
        })