import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AllEvents from "./pages/AllEvents";
import MyEvents from "./pages/MyEvents";
import CreateEvent from "./pages/CreateEvent";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/event-list" element={<PrivateRoute><AllEvents /></PrivateRoute>} />
      <Route path="/my-events" element={<PrivateRoute><MyEvents /></PrivateRoute>} />
      <Route path="/create-events" element={<PrivateRoute><CreateEvent /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
