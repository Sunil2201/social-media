export const getAllPostsService = async () => {
  try {
    const res = await fetch("/api/posts");
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
