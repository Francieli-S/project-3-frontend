import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function MyEvents() {
  const [myEvents, setMyEvents] = useState([]);
  const { token } = useContext(SessionContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreBlues, setGenreBlues] = useState(false);
  const [genreRock, setGenreRock] = useState(false);
  const [genreFolk, setGenreFolk] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const axiosMyEvents = async (searchTerm = "") => {
    try {
      let endpoint = `${
        import.meta.env.VITE_BASE_API_URL
      }/event/all-events/my-events?`;
      if (searchTerm) {
        endpoint += `search=${searchTerm}&`;
      }
      if (genreBlues) {
        endpoint += "blues=true&";
      }
      if (genreRock) {
        endpoint += "rock=true&";
      }
      if (genreFolk) {
        endpoint += "folk=true&";
      }
      const response = await axios.get(endpoint, config);
      if (response.status === 200) {
        setMyEvents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosMyEvents();
  }, []);

  useEffect(() => {
    axiosMyEvents(searchTerm);
  }, [searchTerm, genreBlues, genreRock, genreBlues, genreFolk]);

  return (
    <>
    <NavBar />
      <div className='all-pages my-events'>
        <div className='search-bar'>
          <input
          placeholder='seach event'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='checkbox'>
          <label>Blues</label>
          <input
            type='checkbox'
            checked={genreBlues}
            onChange={(e) => setGenreBlues(e.target.checked)}
          />
          <label>Rock</label>
          <input
            type='checkbox'
            checked={genreRock}
            onChange={(e) => setGenreRock(e.target.checked)}
          />
          <label>Folk</label>
          <input
            type='checkbox'
            checked={genreFolk}
            onChange={(e) => setGenreFolk(e.target.checked)}
          />
        </div>
        <div className='events-list'>
      {myEvents.length &&
        myEvents.map((event) => (
          <div key={event._id}>
            <Link className='links' to={`/event-one/${event._id}`}>{event.title}</Link>
            <p>{event.date}</p>
          </div>
        ))}
        </div>
        </div>
        <Footer />
    </>
  );
}
