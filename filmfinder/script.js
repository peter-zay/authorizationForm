const tmdbKey = "095d03441eb598b2fe53adbc92175624"; //set up api with tmdb assign to const step 1
const tmdbBaseUrl = "https://api.themoviedb.org/3"; //set up base url assign to const step 2
const playBtn = document.getElementById("playBtn");
//async function grabs genre list, constructs url with baseurl+location of list+apikey
const getGenres = async () => {
  //step 3, step 6,
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`; //step 4 query parameters to add specificity
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`; //step 5

  try {
    const response = await fetch(urlToFetch); //attempts to fetch list from url
    if (response.ok) {
      const jsonResponse = await response.json(); //waits for response an converts it to json format step 10
      const genres = jsonResponse.genres; //new const that references other const's property
      return genres; //returns genres step 12
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie"; //step 13
  const requestParams = `?api_key=${tmdbKey}&with_genre=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
        const response = await fetch(urlToFetch); //attempts to fetch list from url
    if (response.ok) {
      const jsonResponse = await response.json(); //waits for response an converts it to json format step 10
      const movies = jsonResponse.results; //new const that references other const's property
      return movies; //returns genres step 12
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id; 
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

  try {
            const response = await fetch(urlToFetch); //attempts to fetch list from url
    if (response.ok) {
      //checks if response is good step 9
      const jsonResponse = await response.json(); //waits for response an converts it to json format step 10
      const movieInfo = jsonResponse; //new const that references other const's property
      return movieInfo; //returns genres step 
    }

  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
    };

    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
