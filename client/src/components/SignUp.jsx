import { useState } from "react";

const SignUp = ({ setToken, setSignUp, signUp }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, username, password }),
      });

      const data = await result.json();

      if (data.token) {
        setAlert("");
        setToken(data.token);
      } else {
        setAlert(<p>Invalid Login</p>);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Sign Up for an account to see trains! Choo Choo!</h1>
      <form onSubmit={submitHandler}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {alert}
      <p>Have an account? <button onClick={() => setSignUp(!signUp)}>Log In</button></p>
    </>
  );
};

export default SignUp;
