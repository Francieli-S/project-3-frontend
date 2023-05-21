import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CommentList() {
  const [commentDetails, setCommentDetails] = useState([]);
  const navigate = useNavigate;
  const commentData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5005/comment/all-comments"
      );
      if (response.status === 200) {
        setCommentDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    commentData();
  }, []);

  const handleDelete = async (commentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5005/comment/${commentId}`
      );
      if (response.status === 200) {
        navigate("/event-my");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return commentDetails ? (
    <>
      {commentDetails.map((comment) => (
        <div key={comment._id}>
          <p>{comment.text}</p>
          <button type="button" onClick={() => handleDelete(comment._id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  ) : (
    <p>Loading comments...</p>
  );
}

export default CommentList;
