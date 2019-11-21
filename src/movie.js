// 1. FUNCTION DEFINITION:

      const result = document.querySelector('#results');

      const insertMovieToDom = (movies) => {
        movies.Search.forEach((movie) => {
        const title = movie.Title;
        const imgUrl = movie.Poster;
        result.insertAdjacentHTML('beforeend',`<li>
          <img class="small-img" src="${imgUrl}" alt="">
          </li>`)
        });
      };


      const fetchMovies = (query) => {
        fetch(`https://www.omdbapi.com/?s=${query.value}&apikey=d4b9c62c`)
          .then(response => response.json())
          .then( data => {
           insertMovieToDom(data);
          });
      }


      const submitCallback = (event) => {
        const userInput = document.getElementById('input-user')
        event.preventDefault();
        result.innerHTML = '';
        fetchMovies(userInput);
      }


// 2. EXPORT FUNCTION/FUNCTIONS
// export { nameFunction };
export { submitCallback };













