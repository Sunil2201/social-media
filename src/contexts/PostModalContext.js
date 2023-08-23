import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { DataContext } from "./DataContext";
import { uploadImage } from "../utils/UploadImage";
import { createPost, editPost } from "../utils/PostUtils";
import { toast } from "react-hot-toast";

export const PostModalContext = createContext();

export function PostModalProvider({ children }) {
  const { authState } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);

  const firstName = authState?.user?.firstName;
  const lastName = authState?.user?.lastName;

  const [postForm, setPostForm] = useState({
    firstName,
    lastName,
    content: "",
    mediaUrl: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [showPostSpinner, setShowPostSpinner] = useState(false);

  const handleChange = (e) => {
    setPostForm((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleMediaInput = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image/") || file?.type.startsWith("video/")) {
      if (file.size < 20 * 1024 * 1024) {
        setPostForm((prev) => ({
          ...prev,
          media: file,
          mediaUrl: URL.createObjectURL(file),
          type: file?.type.startsWith("image/") ? "image" : "video",
        }));
      } else {
        toast.error("File size must be less than 20mb");
      }
    } else {
      toast.error("File must be a video or an image");
    }
  };

  const handlePostFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setShowPostSpinner(true);
      setPostForm({
        firstName,
        lastName,
        content: "",
        mediaUrl: "",
      });
      if (postForm?.mediaUrl !== "") {
        const resp = await uploadImage(postForm?.media);
        const modifiedPostForm = { ...postForm, mediaUrl: resp.url };
        createPost(modifiedPostForm, authState?.token, dataDispatch);
      } else {
        createPost(postForm, authState?.token, dataDispatch);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setShowPostSpinner(false);
    }
  };

  const closeMedia = () => {
    setPostForm((prev) => ({ ...prev, mediaUrl: "", media: "", type: "" }));
  };

  const handleFormEdit = (postToEdit) => {
    setEditMode(true);
    setPostForm(postToEdit);
  };

  const handleSubmitEditedPost = async (e) => {
    try {
      e.preventDefault();
      setShowPostSpinner(true);
      if (postForm?.media && postForm?.media !== "") {
        const resp = await uploadImage(postForm?.media);
        const modifiedPostForm = { ...postForm, mediaUrl: resp?.url };
        editPost(
          postForm?._id,
          modifiedPostForm,
          authState?.token,
          dataDispatch
        );
      } else {
        editPost(postForm?._id, postForm, authState?.token, dataDispatch);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setShowPostSpinner(false);
    }
  };

  return (
    <PostModalContext.Provider
      value={{
        postForm,
        showPostSpinner,
        setPostForm,
        editMode,
        setEditMode,
        handleChange,
        handleMediaInput,
        handlePostFormSubmit,
        closeMedia,
        handleFormEdit,
        handleSubmitEditedPost,
      }}
    >
      {children}
    </PostModalContext.Provider>
  );
}
