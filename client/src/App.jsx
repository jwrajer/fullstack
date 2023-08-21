import { useState } from "react";
import Trains from "./components/Trains";
import AuthForm from "./components/AuthForm";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Conductors from "./components/Conductors"
import { Route, Routes } from "react-router-dom";


function App() {
  const [token, setToken] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <NavBar />
      <h1>REACT TRAIN APP</h1>
      <p>Choo Choo!</p>

      {token ? <button onClick={() => setToken(false)}>Sign Out</button> : ""}

      {token ? (
        null
      ) : signUp ? (
        <SignUp setToken={setToken} setSignUp={setSignUp} signUp={signUp} />
      ) : (
        <AuthForm setToken={setToken} signIp={signUp} setSignUp={setSignUp} />
      )}
      <Routes>
        <Route path='/trains' element={token ? <Trains token={token} /> : null} />
        <Route path='/conductors' element={token ? <Conductors token={token} /> : null} />
      </Routes>
    </>
  );
}

export default App;
