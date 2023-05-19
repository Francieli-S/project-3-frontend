import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AllEvents from "./pages/AllEvents";
import MyEvents from "./pages/MyEvents";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/event-list" element={<AllEvents />} />
      <Route path="/my-events" element={<MyEvents />} />
      <Route path="/create-events" element={<CreateEvent />} />
    </Routes>
  );
}

export default App;
