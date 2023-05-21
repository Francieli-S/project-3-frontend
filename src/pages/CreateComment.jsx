import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateComment({eventId}) {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      text: comment,
      eventAbout: {_id: eventId}
    };
    console.log(body);

    axios
      .post("http://localhost:5005/comment/new-comment", body)
      .then(() => {
        setComment("");

        navigate("/event-my");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("submit");
  };

  return (
    <div>
      <form style={{ display: "grid" }} onSubmit={handleSubmit}>
        <label></label>
        <input
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button type="submit">Add Comment!</button>
      </form>
    </div>
  );
}
