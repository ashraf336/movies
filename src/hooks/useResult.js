import React, { useState  , useEffect} from "react";
import movie from "../api/movie";


// A React Hook used in fetching and passing the results and components

export default ()=>{

  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [ currentPage, setCurrentPage] = useState(1) ;
  const [isLoading, setIsLoading]=useState(false)

// The actual function that fetch the Designated PAGE from Movies Api
  const fetchApi = async (pageNumber) => {
    try {
      setIsLoading(true);
      const response = await movie.get("", {
        params: {
          page:pageNumber,
        },
      });
      setIsLoading(false);
      setResult(result.concat(response.data.results));
      setCurrentPage(currentPage+1)
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

// The function call once the FlatList has reached its end  
  getMorePages = ()=>{
      fetchApi(currentPage);
  }; 

// The useEffect() will run the fetchApi() function once at the beginning of 
// the App so that the user won't see a blank screen at the beginning. 
  useEffect(() => {
    fetchApi(1);
  }, []);

    return [result,getMorePages,isLoading];
};