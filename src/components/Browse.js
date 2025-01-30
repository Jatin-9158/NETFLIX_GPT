import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
  useUpcomingMovies();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div className="overflow-hidden">
      {
        showGptSearch ? 
        (<GptSearch/>)
        : 
        (
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
      
    </div>
  )
}

export default Browse