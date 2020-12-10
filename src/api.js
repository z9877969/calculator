import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_URL_API;
const KEY = process.env.REACT_APP_KEY_TMDB;


export const fetchPicturesWithQuery = (searchQuery, page = 1) => {
    return  axios
      .get(`?q=${searchQuery}&page=${page}&key=18890670-d4e48795a2d3ae1cd90463fe7&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => response.data.hits)
}

export  const fetchGenresId = () => axios.get(`/genre/movie/list?api_key=${KEY}`);

// class FetchApiTheMovieDB {

//   get

// }
 
// export default FetchApiTheMovieDB;