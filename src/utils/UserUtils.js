import {
  addBookmarkService,
  getBookmarksService,
  removeBookmarkService
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

export const removeBookmark = async(_id, token, dataDispatch) => {
  try {
    const res = await removeBookmarkService(_id, token);
    const resJson = await res.json();
    if(res.status === 200){
      dataDispatch({type: "setBookmarks", payload: resJson?.bookmarks})
    }
  } catch (error) {
    console.error(error.message)
  }
}
