import { useState } from "react";
import axios from "axios";

export default function CreateComment({
  eventId,
  commentDetails,
  setCommentDetails,
}) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      comment: comment,
      eventAbout: { _id: eventId },
    };
    console.log(body);

    axios
      .post(`${import.meta.env.VITE_BASE_API_URL}/comment/new-comment`, body)
      .then((response) => {
        console.log("CREATED COMMENT", response.data, commentDetails);
        setComment("");
        setCommentDetails([response.data, ...commentDetails]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="create-comment">
      <form onSubmit={handleSubmit}>
        <div>
          <label></label>
          <textarea
            required
            placeholder="comment"
            type="textArea"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Add Comment!</button>
        </div>
      </form>
    </div>
  );
}
