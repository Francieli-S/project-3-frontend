import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CreateComment from "./CreateComment";
import CommentList from "../components/CommentList";

export default function OneEvent() {
  const [eventDetails, setEventDetails] = useState();
  const { eventId } = useParams();

  console.log("EVENT", eventDetails);
  console.log("ID", eventId);

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

  //   const fetchEvent = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:5005/event/${eventId}`);
  //       console.log('RESPONSE', response)
  //       if (response.status === 200) {
  //         const parsed = await response.json();
  //         setEventDetails(parsed);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //  useEffect(() => {
  //      fetchEvent();
  //    }, [eventId]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5005/event/${eventId}`
      );
      console.log("DELETE", response.status);

      if (response === 200) {
        navigate("/event-my");
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
      <Link to={"/event-update/:eventId"}>Update</Link>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <CommentList />
      <CreateComment />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
