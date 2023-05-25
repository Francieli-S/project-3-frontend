import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from '../components/CommentList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function OneEvent() {
  const [eventDetails, setEventDetails] = useState();
  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_API_URL}/event/${eventId}`)
      .then((response) => {
        setEventDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, [eventId]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}/event/${eventId}`
      );
      if (response.status === 200) {
        navigate('/event-list');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return eventDetails ? (
    <>
      <NavBar />
      <div className='all-pages one-event'>
        <div className='events'>
          <h1>{eventDetails.title}</h1>
          <h3>{eventDetails.date}</h3>
          <h3>{eventDetails.location}</h3>
          <h3>Genre: <span>{eventDetails.genre}</span></h3>
          <h3>Details: <span>{eventDetails.details}</span></h3>
          <Link className='links one-event-lks' to={`/event-update/${eventId}`}>Update</Link>
          <button type='button' onClick={handleDelete}>
            Delete
          </button>
        </div>
        <div className='comments'>
          <CommentList eventId={eventId} />
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
