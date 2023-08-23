import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getAllPostsService } from "../services/PostServices";
import { getAllUsersService } from "../services/UserServices";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const { authState } = useContext(AuthContext);
  const [filter, setFilter] = useState("trending");
  const [darkMode, setDarkMode] = useState(true);

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
      setIsUsersLoading(true);
      const res = await getAllUsersService();
      const resJson = await res.json();
      if (res.status === 200) {
        dataDispatch({ type: "setUsers", payload: resJson?.users });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsUsersLoading(false);
    }
  };

  const getAllPosts = async () => {
    try {
      setIsPostsLoading(true);
      const res = await getAllPostsService();
      const resJson = await res.json();
      if (res.status === 200) {
        dataDispatch({ type: "setPosts", payload: resJson?.posts });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsPostsLoading(false);
    }
  };

  const handleChangeFilter = (selectedValue) => {
    setFilter(selectedValue);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  useEffect(() => {
    getAllUsers();
    getAllPosts();
  }, [authState?.token]);

  return (
    <DataContext.Provider
      value={{
        dataState,
        filter,
        isPostsLoading,
        isUsersLoading,
        darkMode,
        dataDispatch,
        handleChangeFilter,
        toggleDarkMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
