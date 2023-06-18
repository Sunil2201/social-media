import { createContext, useEffect, useReducer, useState } from "react";
import { getAllPostsService } from "../services/PostServices";
import { getAllUsersService } from "../services/UserServices";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const initialDataState = {
    users: [],
    posts: [],
  };

  const dataReducer = (state, action) => {
    switch (action.type) {
      case "setUsers":
        return { ...state, users: action.payload };
      case "setPosts":
        return { ...state, posts: action.payload };
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
    } catch (error) {}
  };

  useEffect(() => {
    getAllUsers();
    getAllPosts();
  }, []);

  return (
    <DataContext.Provider
      value={{ dataState, dataDispatch, isPostsLoading, isUsersLoading }}
    >
      {children}
    </DataContext.Provider>
  );
}
