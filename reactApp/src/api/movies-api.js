export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=9d0854bcb403ca24412c9584b28487e2&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };