import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CommentList() {
  const [commentDetails, setCommentDetails] = useState([]);
  const { commentId } = useParams();
  const navigate = useNavigate;
  console.log(commentId);
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

  const handleDelete = async () => {
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
      {commentDetails.map((event) => (
        <div key={event._id}>
          <p>{event.comment}</p>
          <button type="button" onClick={handleDelete}>
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
