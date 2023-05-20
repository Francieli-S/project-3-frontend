import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllEvents() {
  const [events, setEvents] = useState([]);

  const axiosData = async () => {
    try {
      const response = await axios.get('http://localhost:5005/event/all-events');
      if (response.status === 200) {
        setEvents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosData();
  }, []);

  return (
    <>
      {events.map(event => (
        <div key={event._id}>
        <Link to={`/event-one/${event._id}`}>{event.title}</Link>
        </div>
      ))}
    </>

  )
}
