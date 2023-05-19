import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { Link } from "react-router-dom";


export default function Profile() {
  const {logout} = useContext(SessionContext)
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/event-list">Event List</Link>
      <Link to="/my-events">My Events</Link>
      <Link to="/create-events">Create New Event</Link>
      <button type='button' onClick={logout}>Log out</button>
    </div>
  );
}
