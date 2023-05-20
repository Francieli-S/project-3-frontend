import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateComment() {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      comment
    };
    console.log(body)

    axios
    .post('http://localhost:5005/comment/create', body)
    .then(() => {
      setComment('')

      navigate('/')
    })
    .catch(error => {
      console.log(error);
    })
    console.log('submit');
  }

  return (
    <div>
        <Link to={'/'}>Home</Link>
      <form style={{ display: 'grid' }} onSubmit={handleSubmit}>
        <label>Comment</label>
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
