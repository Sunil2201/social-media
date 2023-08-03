import React, { useContext, useRef, useState } from "react";
import { MdOutlineInsertPhoto, MdOutlineGifBox } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";
import { createPost } from "../../utils/PostUtils";
import { DataContext } from "../../contexts/DataContext";
import { uploadImage } from "../../utils/UploadImage";
import "./CreatePost.css";
import EmojiPicker from "emoji-picker-react";
import GifPicker from "gif-picker-react";

function CreatePost() {
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
  const [showEmojiContainer, setShowEmojiContainer] = useState(false);
  const [showGifContainer, setShowGifContainer] = useState(false);

  const newPostRef = useRef();

  const handleChange = (e) => {
    setPostForm((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleFocus = (e) => {
    const textarea = e.target;
    if (textarea.value.trim() !== "") {
      textarea.classList.remove("empty");
    }
  };

  const handleBlur = (e) => {
    const textarea = e.target;
    if (textarea.value.trim() === "") {
      textarea.classList.add("empty");
    }
  };

  const toggleEmojiContainer = () => {
    setShowEmojiContainer((prevState) => !prevState);
  };

  const toggleGifContainer = () => {
    setShowGifContainer((prevState) => !prevState);
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
        console.log("File size must be less than 20mb");
      }
    } else {
      console.log("File must be a video or video or an image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postForm?.mediaUrl !== "") {
      const resp = await uploadImage(postForm?.media);
      const modifiedPostForm = { ...postForm, mediaUrl: resp.url };
      createPost(modifiedPostForm, authState?.token, dataDispatch);
    } else {
      createPost(postForm, authState?.token, dataDispatch);
    }

    setPostForm({
      firstName,
      lastName,
      content: "",
      mediaUrl: "",
    });
    newPostRef.current.innerText = "";
  };

  const handleEmojiClick = (emoji) => {
    setPostForm((prev) => ({
      ...prev,
      content: prev.content + emoji?.emoji,
    }));
  };

  return (
    <div className="newPost">
      <div className="userAvatar">
        <div className="profilePicture">
          <img src={authState?.user?.profileAvatar} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          ref={newPostRef}
          className={`tweetInput ${
            postForm?.content.trim() === "" ? "empty" : ""
          }`}
          placeholder="What is happening?!"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={postForm?.content}
        />

        {postForm?.mediaUrl && postForm?.type === "image" && (
          <div className="mediaContainer">
            <img src={postForm?.mediaUrl} alt="post-img" />
            <IoMdClose
              onClick={() => {
                setPostForm((prev) => ({ ...prev, mediaUrl: "" }));
              }}
              className="closeMedia"
            />
          </div>
        )}

        {postForm?.mediaUrl && postForm?.type === "video" && (
          <div className="mediaContainer">
            <video controls muted loop>
              <source src={postForm?.mediaUrl}></source>
            </video>
            <IoMdClose
              onClick={() => {
                setPostForm((prev) => ({ ...prev, mediaUrl: "" }));
              }}
              className="closeMedia"
            />
          </div>
        )}

        <div className="createTweetActions">
          <div className="addToTweet">
            <label>
              <input
                type="file"
                className="fileInput"
                onChange={handleMediaInput}
              />
              <MdOutlineInsertPhoto size={25} className="icon" />
            </label>
            <MdOutlineGifBox
              size={25}
              className="icon"
              onClick={toggleGifContainer}
            />
            <BsEmojiSmile
              size={20}
              className="icon"
              onClick={toggleEmojiContainer}
            />
          </div>
          <button type="submit">Tweet</button>
        </div>
      </form>
      {showEmojiContainer && (
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          className="emojiPickerContainer"
        />
      )}
      {showGifContainer && (
        <GifPicker tenorApiKey="AIzaSyDHZRMhrQg0K7ibOX7Qq6zWjfZEm7j4bH4" />
      )}
    </div>
  );
}

export default CreatePost;
