import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from './components/PrivateRoute';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AllEvents from "./pages/AllEvents";
import MyEvents from "./pages/MyEvents";
import OneEvent from './pages/OneEvent';
import CreateUpdateEvent from "./pages/CreateUpdateEvent";
import CreateComment from './pages/CreateComment';
import UpdateUser from './pages/UpdateUser';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/update-user" element={<PrivateRoute><UpdateUser /></PrivateRoute>} />
      <Route path="/event-list" element={<PrivateRoute><AllEvents /></PrivateRoute>} />
      <Route path="/event-my" element={<PrivateRoute><MyEvents /></PrivateRoute>} />
      <Route path="/event-one/:eventId" element={<PrivateRoute><OneEvent /></PrivateRoute>} />
      <Route path="/event-create" element={<PrivateRoute><CreateUpdateEvent /></PrivateRoute>} />
      <Route path="/event-update/:eventId" element={<PrivateRoute><CreateUpdateEvent isUpdating /></PrivateRoute>} />
      <Route path="/comment-create" element={<PrivateRoute><CreateComment /></PrivateRoute>} />
    </Routes>
  );
}


