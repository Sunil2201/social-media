import React, { useContext, useState } from "react";
import {MdOutlineInsertPhoto, MdOutlineGifBox} from "react-icons/md"
import {BsEmojiSmile} from "react-icons/bs"
import { AuthContext } from "../../contexts/AuthContext";

function CreatePost() {
  const {authState} = useContext(AuthContext)
  const [tweet, setTweet] = useState("");

  const handleChange = (e) => {
    setTweet(e.target.innerText);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tweet);
  };

  return (
    <div className="newPost">
      <div className="userAvatar">
        <img src={authState?.user?.profileAvatar} style={{width: "30px", height: "30px", borderRadius: "50%"}} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div
          role="textbox"
          className={`tweet-input ${tweet.trim() === "" ? "empty" : ""}`}
          contentEditable="true"
          placeholder="What is happening?!"
          onInput={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="createTweetActions">
          <div className="addToTweet">
            <MdOutlineInsertPhoto size={23} />
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
