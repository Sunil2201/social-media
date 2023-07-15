import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { MdOutlineInsertPhoto, MdOutlineGifBox } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { createPost } from "../../utils/PostUtils";
import { uploadImage } from "../../utils/UploadImage";
import "./CreatePostModal.css";

function CreatePostModal({ closeModal }) {
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
    closeModal()
  };

  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <div className="newPostModal">
            <div className="userAvatar">
              <img
                src={authState?.user?.profileAvatar}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                alt=""
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div
                role="textbox"
                ref={newPostRef}
                className={`tweetInput ${
                  postForm?.content.trim() === "" ? "empty" : ""
                }`}
                contentEditable="true"
                placeholder="What is happening?!"
                onInput={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              {postForm?.mediaUrl && postForm?.type === "image" && (
                <div className="modalMediaContainer">
                  <img
                    src={(postForm?.mediaUrl)}
                    alt="post-img"
                  />
                  <IoMdClose
                    onClick={() => {
                      setPostForm((prev) => ({ ...prev, mediaUrl: "" }));
                    }}
                    className="closeMediaInModal"
                  />
                </div>
              )}

              {postForm?.mediaUrl && postForm?.type === "video" && (
                <div className="modalMediaContainer">
                  <video controls muted loop>
                    <source
                      src={(postForm?.mediaUrl)}
                    ></source>
                  </video>
                  <IoMdClose
                    onClick={() => {
                      setPostForm((prev) => ({ ...prev, mediaUrl: "" }));
                    }}
                    className="closeMediaInModal"
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
          <IoMdClose className="closePostModal" onClick={closeModal} />
        </div>
      </div>
      <div className="modalOverlay"></div>
    </>
  );
}

export default CreatePostModal;
