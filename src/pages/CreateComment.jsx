import { useState } from 'react';
import axios from 'axios';

export default function CreateComment({
  eventId,
  commentDetails,
  setCommentDetails,
}) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      comment: comment,
      eventAbout: { _id: eventId },
    };
    console.log(body);

    axios
      .post('http://localhost:5005/comment/new-comment', body)
      .then((response) => {
        console.log('CREATED COMMENT', response.data, commentDetails);
        setComment('');
        setCommentDetails([response.data, ...commentDetails]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form style={{ display: 'grid' }} onSubmit={handleSubmit}>
        <label></label>
        <input
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button type='submit'>Add Comment!</button>
      </form>
    </div>
  );
}
