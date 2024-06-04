import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import "./App.css";
import IsPublicLayout from "./components/IsPublicLayout";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import IsPrivateLayout from "./components/IsPrivateLayout";

function App() {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route Component={IsPublicLayout}>
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
        </Route>
        <Route Component={IsPrivateLayout}>
          <Route path="/user" Component={UserProfilePage} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
