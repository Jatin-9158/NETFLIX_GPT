import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useUpcomingMovies();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div className="overflow-hidden">
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse