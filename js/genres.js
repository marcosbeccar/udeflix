let APIKey='7bbfa155b881d065cf760bebe36c4d28'
let url=`https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=${APIKey}`
let url2=`https://api.themoviedb.org/3/genre/tv/list?language=es&api_key=${APIKey}`





fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let lista_generos = data.genres
        for (let i=0;i<=7;i++){
            let article=document.querySelector('#listaGeneros')
            article.innerHTML+=`<a href="./detail-genres.html?name=${lista_generos[i].id}&tipo=movie&ng=${lista_generos[i].name}">
            <li> ${lista_generos[i].name} </li></a>`
        }
    
        })
    .catch(function(error){
        console.log(error);
    })

    fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let lista_generos = data.genres
        for (let i=1;i<=8;i++){
            let article=document.querySelector('#listaGenerosSeries')
            article.innerHTML+=`<a href="./detail-genres.html?name=${lista_generos[i].id}&tipo=TVshow&ng=${lista_generos[i].name}">
            <li> ${lista_generos[i].name} </li></a>`
        }
    
        })
        
    .catch(function(error){
        console.log(error);
    })
    

