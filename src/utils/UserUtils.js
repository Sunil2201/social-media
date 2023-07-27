import {
  addBookmarkService,
  editUserService,
  followUserService,
  getBookmarksService,
  getUserService,
  removeBookmarkService,
  unfollowUserService,
} from "../services/UserServices";

export const getBookmarks = async (token, dataDispatch) => {
  try {
    const res = getBookmarksService(token);
    const resJson = await res.json();
    if (res.status === 200) {
      dataDispatch({ type: "setBookmarks", payload: resJson?.bookmarks });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const addBookmark = async (_id, token, dataDispatch) => {
  try {
    const res = await addBookmarkService(_id, token);
    const resJson = await res.json();
    if (res.status === 200) {
      dataDispatch({ type: "setBookmarks", payload: resJson?.bookmarks });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeBookmark = async (_id, token, dataDispatch) => {
  try {
    const res = await removeBookmarkService(_id, token);
    const resJson = await res.json();
    if (res.status === 200) {
      dataDispatch({ type: "setBookmarks", payload: resJson?.bookmarks });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const followUser = async (userId, token, authDispatch) => {
  try {
    const res = await followUserService(userId, token);
    const resJson = await res.json();
    if (res.status === 200) {
      authDispatch({ type: "setUser", payload: resJson?.user });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const unfollowUser = async (userId, token, authDispatch) => {
  try {
    const res = await unfollowUserService(userId, token);
    const resJson = await res.json();
    console.log(resJson);
    if (res.status === 200) {
      authDispatch({ type: "setUser", payload: resJson?.user });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const getUserInfo = async (userId, dataDispatch) => {
  try {
    const res = await getUserService(userId);
    const resJson = await res.json();
    if (res.status === 200) {
      dataDispatch({ type: "setUserProfile", payload: resJson?.user });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const editUser = async (
  token,
  userProfile,
  dataDispatch,
  remainingUsers
) => {
  try {
    const res = await editUserService(token, userProfile);
    const resJson = await res.json();
    const finalData = [...remainingUsers, resJson?.user]
    console.log(finalData);
    dataDispatch({
      type: "setUsers",
      payload: finalData,
    });
  } catch (error) {
    console.error(error.message);
  }
};
