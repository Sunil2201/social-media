import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import { useContext, useState } from "react";
import { DataContext } from "./contexts/DataContext";
import Sidebar from "./components/Sidebar/Sidebar";
import ExploreUsers from "./components/Explore Users/ExploreUsers";
import CreatePostModal from "./components/CreatePostModal/CreatePostModal";
import { PostModalContext } from "./contexts/PostModalContext";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const {authState} = useContext(AuthContext)
  const { dataState } = useContext(DataContext);
  const {setPostForm, setEditMode} = useContext(PostModalContext)
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const openModal = () => {
    setIsPostModalOpen(true);
    setEditMode(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setPostForm((prevState) => ({ ...prevState, content: "", mediaUrl: "" }));
    setIsPostModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const loggedInUser = authState?.user;

  const followingUsers = loggedInUser?.following || [];

  const usernameOfFollowingUsers = [...followingUsers].map(
    (user) => user?.username
  );

  const usersToFollow = [...dataState?.users].filter(
    (user) =>
      user?.username !== loggedInUser?.username &&
      !usernameOfFollowingUsers.includes(user?.username)
  );

  return (
    <div className="appContainer">
      <Sidebar openModal={openModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:username" element={<Profile openModal={openModal}/>} />
      </Routes>
      <ExploreUsers usersToFollow={usersToFollow} />
      {isPostModalOpen && <CreatePostModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
