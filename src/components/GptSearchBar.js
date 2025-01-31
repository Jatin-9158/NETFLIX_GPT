import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LANG_CONSTANTS } from "../utils/lang_constants";
import { useRef } from "react";
import { GEMINIAI_KEY, options } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) =>{
      const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,options)
      const json = await results.json();
      return json;

  }
  const handleGptSearch = async () => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINIAI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Acts as a Movie Recommendation System and suggest some movies for the query  :" + searchText.current.value + ". only give me name of 5 movies , comma seperated example Don,Indra the Tiger,Himmatwar,Baadshah,Sholay,Sultan,Golmaal Make sure if no results are found do not tell me any results";

    const result = await model.generateContent(prompt);
    if(!result) 
       console.log("No results found");
    const movieSuggestions = result.response.text().split(',');
    console.log(movieSuggestions)
    const movieResult = movieSuggestions.map((movie) => searchMovieTMDB(movie));
    const movies = await Promise.all(movieResult);
    console.log(movies)
    dispatch(addGptMovieResults({movieNames:movieSuggestions,movieResults:movies}))

  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2  bg-black  grid grid-cols-12 m-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={LANG_CONSTANTS[langkey].search_placeholder}
        ></input>
        <button
          className="bg-red-600 m-4 py-2 px-4 font-bold text-white rounded-md col-span-3"
          onClick={handleGptSearch}
        >
          {LANG_CONSTANTS[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
