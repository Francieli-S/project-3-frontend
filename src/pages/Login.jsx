import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";

export default function Login() {
  const { setToken, setIsLoggedIn } = useContext(SessionContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logPassError, setLogPassError] = useState();
  const [logEmailError, setLogEmailError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5005/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const parsed = await response.json();
    if (response.status === 200) {
      //const tokenFromResponse = await response.json();
      setToken(parsed);
      setIsLoggedIn(true);
      navigate("/profile");
    }

    if (response.status === 402) {
      setLogEmailError(parsed.message);
    }
    if (response.status === 401) {
      setLogPassError(parsed.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {logEmailError && <p>{logEmailError}</p>}
        <label>Password:</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {logPassError && <p>{logPassError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
