import { createContext, useEffect, useReducer, useState } from "react";
import { getAllPostsService } from "../services/PostServices";
import { getAllUsersService } from "../services/UserServices";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [isUsersLoading, setIsUsersLoading] = useState(true);
  const [filter, setFilter] = useState("trending");

  const initialDataState = {
    users: [],
    posts: [],
    bookmarks: [],
  };

  const dataReducer = (state, action) => {
    switch (action.type) {
      case "setUsers":
        return { ...state, users: action.payload };
      case "setPosts":
        return { ...state, posts: action.payload };
      case "setBookmarks":
        return { ...state, bookmarks: action.payload };
      default:
        return state;
    }
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);

  const getAllUsers = async () => {
    try {
      const res = await getAllUsersService();
      const resJson = await res.json();
      if (res.status === 200) {
        dataDispatch({ type: "setUsers", payload: resJson?.users });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAllPosts = async () => {
    try {
      const res = await getAllPostsService();
      const resJson = await res.json();
      if (res.status === 200) {
        dataDispatch({ type: "setPosts", payload: resJson?.posts });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChangeFilter = (selectedValue) => {
    setFilter(selectedValue);
  };

  useEffect(() => {
    getAllUsers();
    getAllPosts();
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataState,
        filter,
        dataDispatch,
        isPostsLoading,
        isUsersLoading,
        handleChangeFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
