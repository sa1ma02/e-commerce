
import {
   
    GET_ALL_REVIEWS_SUCCESS,
    GET_ALL_REVIEWS_FAILURE,
   
    GET_ALL_RATINGS_SUCCESS,
    GET_ALL_RATINGS_FAILURE
  } from './ActionTyp';
import api from '../../../config/api';



export const getAllReviews = (productId) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/reviews/product/${productId}`);

      dispatch({
        type: GET_ALL_REVIEWS_SUCCESS,
        payload: response.data
      });
      console.log("all review ",response.data)
    } catch (error) {
      dispatch({
        type: GET_ALL_REVIEWS_FAILURE,
        payload: error.message
      });
    }
  };
};





export const getAllRatings = (productId) => {
 
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/ratings/product/${productId}`, {
       
      });

      dispatch({
        type: GET_ALL_RATINGS_SUCCESS,
        payload: response.data
      });
      console.log("all rating ",response.data)
    } catch (error) {
      dispatch({
        type: GET_ALL_RATINGS_FAILURE,
        payload: error.message
      });
    }
  };
};
