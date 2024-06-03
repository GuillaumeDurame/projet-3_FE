import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    <h1>
        Brick Share
    </h1>
    <div className="accessUser">
        <Link to="/sign-in" className="signIn">Sign in</Link>
        <Link to="/login" className="login">Login</Link>
        <Link to="/user" className="profile">Profile</Link>
    </div>
    </>
)}

export default HomePage;
