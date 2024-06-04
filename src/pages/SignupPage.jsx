import { useState } from "react";
import apiHandler from "../utils/apiHandler";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await apiHandler.signup(signupForm);

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <div>{error}</div>}
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="username"
            name="username"
            id="username"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="description">
          Description
          <input
            type="description"
            name="description"
            id="description"
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}

export default SignupPage;
