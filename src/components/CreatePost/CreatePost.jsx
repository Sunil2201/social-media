import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineInsertPhoto, MdOutlineGifBox } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";
import { createPost } from "../../utils/PostUtils";
import { DataContext } from "../../contexts/DataContext";
import "./CreatePost.css";
import { uploadImage } from "../../utils/UploadImage";

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

  const newPostRef = useRef();

  const handleChange = (e) => {
    setPostForm((prev) => ({ ...prev, content: e.target.innerText }));
  };

  const handleFocus = (e) => {
    if (e.target.innerText.trim() !== "") {
      e.target.classList.remove("empty");
    }
  };

  const handleBlur = (e) => {
    if (e.target.innerText.trim() === "") {
      e.target.classList.add("empty");
    }
  };

  const handleMediaInput = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file.type.startsWith("image/") || file?.type.startsWith("video/")) {
      if (file.size < 20 * 1024 * 1024) {
        setPostForm((prev) => ({
          ...prev,
          mediaUrl: file,
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
      const resp = await uploadImage(postForm?.mediaUrl);
      const modifiedPostForm = {...postForm, mediaUrl: resp.url}
      createPost(modifiedPostForm, authState?.token, dataDispatch);
    } else {
      createPost(postForm?.content, "", authState?.token, dataDispatch);
    }

    setPostForm({
      firstName,
      lastName,
      content: "",
      mediaUrl: "",
    });
    newPostRef.current.innerText = "";
  };

  return (
    <div className="newPost">
      <div className="userAvatar">
        <img
          src={authState?.user?.profileAvatar}
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div
          role="textbox"
          ref={newPostRef}
          className={`tweet-input ${
            postForm?.content.trim() === "" ? "empty" : ""
          }`}
          contentEditable="true"
          placeholder="What is happening?!"
          onInput={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {postForm?.mediaUrl && postForm?.type === "image" && (
          <div className="mediaContainer">
            <img src={URL.createObjectUrl(postForm?.mediaUrl)} alt="post-img" />
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
              <source src={URL.createObjectURL(postForm?.mediaUrl)}></source>
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
              <MdOutlineInsertPhoto size={23} />
            </label>
            <MdOutlineGifBox size={23} />
            <BsEmojiSmile size={20} />
          </div>
          <button type="submit">Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
