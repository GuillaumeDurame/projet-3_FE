import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    <h1>
        Brick Share
    </h1>
    <div className="accessUser">
        <Link to="/signup" className="signUp">Sign Up</Link>
        <Link to="/login" className="login">Login</Link>
        <Link to="/user" className="profile">Profile</Link>
    </div>
    <div>
        <Link to="/sets" className="sets">Sets</Link>
    </div>
    </>
)}

export default HomePage;
