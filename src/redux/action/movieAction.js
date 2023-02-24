import { AllMOVIES, MoviesAPI } from "../types/moviesTypes";
import axios from "axios";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MoviesAPI);
    console.log(res.data);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=ar`
    );

    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=en-US&page=${page}`
    );

    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
