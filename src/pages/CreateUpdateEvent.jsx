import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SessionContext } from "../context/SessionContext";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function CreateUpdateEvent({ isUpdating = false }) {
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();
  //console.log(setToken);
  //const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);

  // in case isUpdating = true
  const { eventId } = useParams();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');
  const [details, setDetails] = useState('');

  const genreOption = ['rock', 'folk', 'blues', 'jazz', 'eletronic', 'hip hop']

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      date: date,
      location: location,
      genre: genre,
      details: details,
    };
    console.log(body);

    !isUpdating
      ? axios
          .post(
            `${import.meta.env.VITE_BASE_API_URL}/event/create`,
            body,
            config
          )
          .then((response) => {
            const newEventId = response.data._id;
            setTitle('');
            setDate('');
            setLocation('');
            setGenre('');
            setDetails('');

            navigate(`/event-one/${newEventId}`);
          })
          .catch((error) => {
            console.log(error);
          })
      : axios
          .put(`${import.meta.env.VITE_BASE_API_URL}/event/${eventId}`, body)
          .then(() => {
            setTitle('');
            setDate('');
            setLocation('');
            setGenre('');
            setDetails('');

            navigate(`/event-one/${eventId}`);
          })
          .catch((error) => {
            console.log(error);
          });
    console.log('submit');
  };

  const axiosEvent = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/event/${eventId}`
      );
      if (response.status === 200) {
        const event = response.data;
        setTitle(event.title);
        setDate(event.date);
        setLocation(event.location);
        setGenre(event.genre);
        setDetails(event.details);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isUpdating) {
      axiosEvent();
    }
  }, [isUpdating]);

  return (
    <>
      <NavBar />
      <div className='all-pages create-update-event'>
        <h1>{isUpdating ? 'Update event' : 'Add events'}</h1>
        <form onSubmit={handleSubmit}>
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
          <select value={genre} name='genre'
            onChange={(e) => {
              setGenre(e.target.value);
            }}>
            <option>Choose one</option>
            {genreOption.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}    
          </select>        
          <label>Details</label>
          <input
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button type='submit'>{isUpdating ? 'Update' : 'Save'}</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
