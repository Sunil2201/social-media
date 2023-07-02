export const getAllPostsService = async () => {
  try {
    const res = await fetch("/api/posts");
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const createPostService = async(postForm, token) => {
  try {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        postData: {...postForm}
      }),
      headers: {authorization: token}
    })
    return res
  } catch (error) {
    console.error(error.message)
  }
}