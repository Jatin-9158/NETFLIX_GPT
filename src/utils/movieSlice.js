import {createSlice} from '@reduxjs/toolkit';
 const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies = action.payload;
        },
        addtopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addupcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideos : (state,action) =>{
           state.trailerVideo = action.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies,addtopRatedMovies,addupcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;