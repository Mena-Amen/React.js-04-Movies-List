import { AllMOVIES } from "./../types/moviesTypes";

const initialValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = initialValue, action) => {
  if (action.type === AllMOVIES) {
    return { movies: action.data, pageCount: action.pages };
  }
  return state;
};
