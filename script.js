const collectionMovies = [];

function addMovie() {
  // Aqui obtém os dados do filme
  const movieName = document.getElementById("filme").value;
  const linkTrailer = document.getElementById("linkTrailer").value; 

  // Objeto para representar o filme
  const newMovie = {
    name: movieName,
    link: linkTrailer
  }
  
  // Adicionar o filme na lista
  collectionMovies.push(newMovie);

  // Atualiza a lista da página
  updateMovieList();

  // Limpa os campos de input após adicionar os filmes
  document.getElementById("filme").value = "";
  document.getElementById("linkTrailer").value = "";
  
  window.removeMovie = function(index) {
    // Remove o filme da lista pel indice
    collectionMovies.splice(index, 1);

    // Atualiza a lista da página
    updateMovieList();
  } 

  function updateMovieList() {
    const listMovies = document.getElementById("listaFilmes");
    listMovies.innerHTML = "";

    collectionMovies.forEach((filme, index) => {
      listMovies.innerHTML += `
        <div class="items">
          <img src= ${filme.name} >
          <a href= ${filme.link} target="_blank">TRAILER DO FILME</a>
          <button onclick="removeMovie(${index})"> Remover </button>
        </div>
      `;
    })
  }
}