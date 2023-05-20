import axios from "axios";
import React, { useEffect, useState } from "react";

function CommentList() {
  const [commentDetails, setCommentDetails] = useState([]);
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

  return commentDetails ? (
    <>
      {commentDetails.map((event) => (
        <div key={event._id}>
          <p>{event.comment}</p>
        </div>
      ))}
    </>
  ) : (
    <p>Loading comments...</p>
  );
}

export default CommentList;
