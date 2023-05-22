import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CommentList() {
  const [commentDetails, setCommentDetails] = useState([]);
  const [refresh, setRefresh] = useState(false)
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
        setRefresh(!refresh)
        navigate("/event-my");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    commentData();
  }, [refresh]);
  

  return commentDetails ? (
    <>
      {commentDetails.map((comment) => (
        <div key={comment._id}>
          <p>{comment.comment}</p>
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
