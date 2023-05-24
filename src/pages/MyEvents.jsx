import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MyEvents() {
  const [myEvents, setMyEvents] = useState([]);
  //const { userId } = useParams();

  const axiosEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/event/all-events/${userId}`
      );
      if (response.status === 200) {
        setMyEvents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosEvents();
  }, []);

  return (
    <>
      {myEvents.map((event) => (
        <div key={event._id}>
          <Link to={`/event-one/${event._id}`}>{event.title}</Link>
        </div>
      ))}
    </>
  );
}
