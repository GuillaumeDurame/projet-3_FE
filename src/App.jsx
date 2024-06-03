import { Route, Routes } from "react-router-dom";
// import { API_BASE_URL } from "./const";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/user" Component={UserProfilePage} />
      </Routes>
    </>
  );
}

export default App;
