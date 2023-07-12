export const getAllUsersService = async () => {
  try {
    const res = await fetch("/api/users");
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const getBookmarksService = async (token) => {
  try {
    const res = await fetch("/api/users/bookmark/", {
      headers: { authorization: token },
    });
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const addBookmarkService = async (_id, token) => {
  try {
    const res = await fetch(`/api/users/bookmark/${_id}`, {
      method: "POST",
      headers: { authorization: token },
    });
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
