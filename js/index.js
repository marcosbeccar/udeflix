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