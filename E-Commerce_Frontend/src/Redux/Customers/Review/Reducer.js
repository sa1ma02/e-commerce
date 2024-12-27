// reducer.js
import {
   
    GET_ALL_REVIEWS_SUCCESS,
    GET_ALL_REVIEWS_FAILURE,

    GET_ALL_RATINGS_SUCCESS,
    GET_ALL_RATINGS_FAILURE
  } from './ActionTyp';
  
  const initialState = {
    reviews: [],
    ratings: [],
    error: ''
  };
  
  const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
    
      case GET_ALL_REVIEWS_SUCCESS:
        return {
          ...state,
          reviews: action.payload,
          error: ''
        };
      case GET_ALL_REVIEWS_FAILURE:
        return {
          ...state,
          error: action.payload
        };
    
      case GET_ALL_RATINGS_SUCCESS:
        return {
          ...state,
          ratings: action.payload,
          error: ''
        };
      case GET_ALL_RATINGS_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default ReviewReducer;
  