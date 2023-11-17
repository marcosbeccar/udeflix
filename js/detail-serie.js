document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "flex"; // Se muestra el div del loader

  let APIKey = "7bbfa155b881d065cf760bebe36c4d28";

  let queryString = location.search;
  let queryStringObj = new URLSearchParams(queryString);
  let id_serie = queryStringObj.get("id"); //recupero el queryString, o la entrada del usuario.

  let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${APIKey}`;
  let url2 = `https://api.themoviedb.org/3/movie/${id_serie}/recommendations?language=en-US&page=1&api_key=${APIKey}`;
  let url3 = `https://api.themoviedb.org/3/tv/${id_serie}/videos?language=es&api_key=${APIKey}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let lista_generos = [];
      for (let i = 0; i < data.genres.length; i++) {
        lista_generos += data.genres[i].name + "  ";
      }
      let section_izquierda = document.querySelector(
        ".detalle_pelicula_izquierda"
      );
      let section_derecha = document.querySelector(".detalle_pelicula_derecha");
      section_izquierda.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}">`;
      section_derecha.innerHTML += `<article> <h1>${data.name}</h1> <p>Sinopsis: ${data.overview}</p> 
          <p> Rating: ${data.vote_average}</p> <p> Fecha de estreno: ${data.first_air_date}</p> 
          <p> Temporadas: ${data.number_of_seasons}</p> <p> Generos: ${lista_generos}</p></article>`;
      loader.style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
      loader.style.display = "none";
    });

  fetch(url2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let lista_peliculas = data.results;
      console.log(data);
      if(lista_peliculas[0]){
      for (let i = 0; i <= 4; i++) {
        let article = document.querySelector("#barra");
        article.innerHTML += `<a href="detail-movie.html?id=${lista_peliculas[i].id}"><article>
          <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
          <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p></article></a>`;
      }
      }else{document.querySelector('#noRecomiendo').innerHTML='🔎 No se encontraron recomendaciones para este título'}
      loader.style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
      loader.style.display = "none";
    });

  fetch(url3)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let key = data.results;
      if (key[0]) {
        for (let i = 0; i == 0; i++) {
          let article = document.querySelector(".trailer");
          article.innerHTML += `<iframe id="ytplayer" type="text/html" width="720" height="405"
              src="https://www.youtube.com/embed/${key[i].key}" frameborder="0" allowfullscreen>`;
        }
      } else {
        document.querySelector("#noTrailer").innerHTML =
          "🔎 No se encontró un trailer para este título";
      }
      loader.style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
      loader.style.display = "none";
    });

  let boton = document.getElementById("miBoton");
  let section = document.getElementById("boton");

  boton.addEventListener("click", function () {
    if (section.style.display === "none") {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
    }
  });
});
