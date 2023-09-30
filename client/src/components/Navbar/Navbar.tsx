import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img className="appLogo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"/>
          </Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button className="signUp_button" onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button className="login_button" onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
