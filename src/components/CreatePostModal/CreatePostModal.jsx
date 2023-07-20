import React, { useContext, useRef } from "react";
import { MdOutlineInsertPhoto, MdOutlineGifBox } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import "./CreatePostModal.css";
import { PostModalContext } from "../../contexts/PostModalContext";
import { AuthContext } from "../../contexts/AuthContext";

function CreatePostModal({ closeModal }) {
  const { authState } = useContext(AuthContext);
  const newPostRef = useRef();
  const {
    postForm,
    editMode,
    handleChange,
    handleMediaInput,
    handlePostFormSubmit,
    closeMedia,
    handleSubmitEditedPost,
  } = useContext(PostModalContext);

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

  const handleSubmit = (e) => {
    handlePostFormSubmit(e);
    newPostRef.current.innerText = "";
    closeModal();
  };

  const handleEdit = (e) => {
    handleSubmitEditedPost(e);
    newPostRef.current.innerText = "";
    closeModal();
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
            <form onSubmit={editMode ? handleEdit : handleSubmit}>
              <textarea
                ref={newPostRef}
                className={`tweetInput ${
                  postForm?.content.trim() === "" ? "empty" : ""
                }`}
                placeholder="What is happening?!"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                defaultValue={postForm?.content}
              />

              {postForm?.mediaUrl && postForm?.type === "image" && (
                <div className="modalMediaContainer">
                  <img src={postForm?.mediaUrl} alt="post-img" />
                  <IoMdClose
                    onClick={closeMedia}
                    className="closeMediaInModal"
                  />
                </div>
              )}

              {postForm?.mediaUrl && postForm?.type === "video" && (
                <div className="modalMediaContainer">
                  <video controls muted loop>
                    <source src={postForm?.mediaUrl}></source>
                  </video>
                  <IoMdClose
                    onClick={closeMedia}
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
                <button type="submit">{editMode ? "Update" : "Tweet"}</button>
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
