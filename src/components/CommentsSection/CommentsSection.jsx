import React from "react";
import "./CommentsSection.css";
import Comment from "../Comment/Comment";

function CommentsSection({ comments, comment, handleChange, handleAddComment }) {
  return (
    <div className="commentsSection">
      <div className="addCommentSection">
        <div className="profilePicture">SB</div>
        <textarea
          className="commentInput"
          placeholder="Add your comment"
          onChange={handleChange}
          value={comment?.text}
        />
        <button
          disabled={comment.length === 0}
          className={
            comment.length === 0 ? "commentBtnDisabled" : "commentBtnEnabled"
          }
          onClick={handleAddComment}
        >
          Comment
        </button>
      </div>
      <div className="commentsContainer">
        {comments?.length === 0 ? (
          <p>No comments to show</p>
        ) : (
          comments.map((comment, idx) => {
            return <Comment comment={comment} key={idx} />;
          })
        )}
      </div>
    </div>
  );
}

export default CommentsSection;
