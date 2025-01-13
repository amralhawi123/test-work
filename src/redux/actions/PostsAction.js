import { useGetData } from "../../hook/useGetData";
import { GET_POSTS, GET_ERROR } from "../type";


export const getPostsAction = () => async (dispatch) => {
    try {
      const respons = await useGetData(`/posts`);
      dispatch({
        type: GET_POSTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };