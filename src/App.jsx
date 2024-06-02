import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
      
      <Route path="/login" Component={LoginPage} />
      <Route path="/signup" Component={SignupPage} />
    </>
  );
}

export default App;
