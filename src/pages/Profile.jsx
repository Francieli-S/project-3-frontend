import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/event-list">Event List</Link>
      <Link to="/my-events">My Events</Link>
      <Link to="/create-events">Create New Event</Link>
    </div>
  );
}
