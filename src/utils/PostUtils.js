import {
  createPostService,
  deletePostService,
  dislikePostService,
  editPostService,
  likePostService,
} from "../services/PostServices";

export const createPost = async (postForm, token, dataDispatch) => {
  try {
    const res = await createPostService(postForm, token);
    const resJson = await res.json();
    if (res.status === 201) {
      dataDispatch({ type: "setPosts", payload: resJson?.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export const likePost = async (postId, token, dataDispatch) => {
  try {
    const res = await likePostService(postId, token);
    const resJson = await res.json();
    if (res.status === 201) {
      dataDispatch({ type: "setPosts", payload: resJson?.posts });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const dislikePost = async (postId, token, dataDispatch) => {
  try {
    const res = await dislikePostService(postId, token);
    const resJson = await res.json();
    if (res.status === 201) {
      dataDispatch({ type: "setPosts", payload: resJson?.posts });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePost = async (postId, token, dataDispatch) => {
  try {
    const res = await deletePostService(postId, token);
    const resJson = await res.json();
    if(res.status === 201){
      dataDispatch({type: "setPosts", payload: resJson?.posts})
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const editPost = async (postId, postForm, token, dataDispatch) => {
  try {
    const res = await editPostService(postId, postForm, token);
    const resJson = await res.json()
    if(res.status === 201){
      dataDispatch({type: "setPosts", payload: resJson?.posts})
    }
  } catch (error) {
    console.error(error.message);
  }
}
