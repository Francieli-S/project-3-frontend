import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreBlues, setGenreBlues] = useState(false)
  const [genreRock, setGenreRock] = useState(false)
  const [genreFolk, setGenreFolk] = useState(false)

  const axiosEvents = async (searchTerm = '') => {
    try {
      let endpoint = 'http://localhost:5005/event/all-events?'
      if (searchTerm) {
        endpoint += `search=${searchTerm}&`
      }
      if (genreBlues) {
        endpoint += 'blues=true&'
      }
      if (genreRock) {
        endpoint += 'rock=true&'
      }
      if (genreFolk) {
        endpoint += 'folk=true&'
      }
      const response = await axios.get(endpoint);
      if (response.status === 200) {
        setEvents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosEvents();
  }, []);

  useEffect(() => {
    axiosEvents(searchTerm)
  }, [searchTerm, genreBlues, genreRock, genreBlues, genreFolk])

  return (
    <>
    <label>Search</label>
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        {/* <button>Search</button> */}
    <label>Blues</label>    
    <input type='checkbox' checked={genreBlues} onChange={e => setGenreBlues(e.target.checked)} />
    <label>Rock</label>    
    <input type='checkbox' checked={genreRock} onChange={e => setGenreRock(e.target.checked)} />
    <label>Folk</label>    
    <input type='checkbox' checked={genreFolk} onChange={e => setGenreFolk(e.target.checked)} />
      {events.map((event) => (
        <div key={event._id}>
          <Link to={`/event-one/${event._id}`}>{event.title}</Link>
        </div>
      ))}
    </>
  );
}
