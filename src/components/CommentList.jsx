import axios from "axios";
import { useEffect, useState } from "react";
import CreateComment from "../pages/CreateComment";

function CommentList({ eventId }) {
  const [commentDetails, setCommentDetails] = useState([]);

  const commentData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/comment/all-comments/${eventId}`
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
      console.log(commentDetails);
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}/comment/${commentId}`
      );
      if (response.status === 200) {
        const filteredComments = commentDetails.filter((comment) => {
          if (comment._id !== commentId) {
            return comment;
          }
        });
        setCommentDetails(filteredComments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return commentDetails ? (
    <>
      <h3>Hello</h3>
      {commentDetails.map((comment) => (
        <div key={comment._id}>
          <p>{comment.comment}</p>
          <button type="button" onClick={() => handleDelete(comment._id)}>
            Delete
          </button>
        </div>
      ))}
      <CreateComment
        eventId={eventId}
        commentDetails={commentDetails}
        setCommentDetails={setCommentDetails}
      />
    </>
  ) : (
    <p>Loading comments...</p>
  );
}

export default CommentList;
