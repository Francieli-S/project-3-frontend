import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CreateComment from "./CreateComment";
<<<<<<< HEAD
import CommentList from "../components/CommentList";
=======
// import CommentList from "../components/CommentList";
>>>>>>> events-update

export default function OneEvent() {
  const [eventDetails, setEventDetails] = useState();
  const { eventId } = useParams();
<<<<<<< HEAD
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/event/${eventId}`)
      .then((response) => {
        console.log("ONE", response.status);
        setEventDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, [eventId]);
=======

  const navigate = useNavigate();

    useEffect(() => {
      axios
        .get(`http://localhost:5005/event/${eventId}`)
        .then((response) => {
          setEventDetails(response.data);
        })
        .catch((error) => console.log(error));
    }, [eventId]);
>>>>>>> events-update

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5005/event/${eventId}`
      );
      if (response.status === 200) {
<<<<<<< HEAD
        navigate("/event-my");
=======
        navigate('/event-my');  
>>>>>>> events-update
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
<<<<<<< HEAD
      <Link to={"/event-update/:eventId"}>Update</Link>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <CommentList />
      <CreateComment />
=======
      <Link to={`/event-update/${eventDetails._id}`}>Update</Link>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
      {/* <CommentList />
      <CreateComment /> */}
>>>>>>> events-update
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
