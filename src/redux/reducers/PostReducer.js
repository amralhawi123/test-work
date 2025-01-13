import { GET_POSTS, GET_ERROR } from "../type";

const inital = {
   getPosts:[],
}
const PostReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_POSTS:
         return {
            ...state,
            getPosts:action.payload,
         }
         case GET_ERROR:
            return {
               getPosts:action.payload,
            }
      default:
         return state;
   }
}

export default PostReducer