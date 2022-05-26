import axios from "axios";

// axios is a Library used in handling Api Requests
export default axios.create({
  baseURL: "http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2"
});
