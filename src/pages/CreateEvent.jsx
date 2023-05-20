import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateEvent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title,
      date,
      location,
      genre,
      details,
    };
    console.log(body)

    axios
    .post('http://localhost:5005/event/create', body)
    .then(() => {
      setTitle('')
      setDate('')
      setLocation('')
      setGenre('')
      setDetails('')

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
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Date</label>
        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label>Location</label>
        <input
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label>Genre</label>
        <input
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <label>Details</label>
        <input
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button type='submit'>Add Event!</button>
      </form>
    </div>
  );
}
