import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";
import Footer from "../components/Footer";

export default function Login() {
  const { setToken, setIsLoggedIn } = useContext(SessionContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logPassError, setLogPassError] = useState();
  const [logEmailError, setLogEmailError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
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
    <>
      <div className="auth-page">
        <h1>Log In</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {logEmailError && <p>{logEmailError}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {logPassError && <p>{logPassError}</p>}
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
