import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState();
  const [passwordErrors, setPasswordErrors] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const parsed = await response.json();
      console.log(parsed);
      if (response.status === 402) {
        setEmailErrors(parsed.message);
        console.log(response.error);
      }
      if (response.status === 401) {
        setPasswordErrors(parsed.message);
      }
      response.status === 201 && navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors && <p>{emailErrors}</p>}
        <label>Password:</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors && <p>{passwordErrors}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
