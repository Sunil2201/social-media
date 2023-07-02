import { createPostService } from "../services/PostServices";

export const createPost = async (postForm, token, dataDispatch) => {
  try {
    const res = await createPostService(postForm, token);
    const resJson = await res.json();
    if(res.status === 201){
        dataDispatch({type: "setPosts", payload: resJson?.posts})
    }
  } catch (error) {
    console.error(error)
  }
};
