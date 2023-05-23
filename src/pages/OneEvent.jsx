import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from '../components/CommentList';

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
    <div>
      <h3>Title</h3>
      <p>{eventDetails.title}</p>
      <h3>Date</h3>
      <p>{eventDetails.date}</p>
      <h3>Location</h3>
      <p>{eventDetails.location}</p>
      <h3>Genre</h3>
      <p>{eventDetails.genre}</p>
      <h3>Details</h3>
      <p>{eventDetails.details}</p>
      <Link to={`/event-update/${eventId}`}>Update</Link>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
      <CommentList eventId={eventId} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
