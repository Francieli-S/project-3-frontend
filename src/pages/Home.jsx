import { Link } from "react-router-dom";
import logo2 from "../assets/images/logo2.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="auth-page">
        <div>
          <img className="homescreen-logo" src={logo2} alt="profile picture" />
        </div>
        <div>
          <button className='button-border-margin'>
            <Link className="home-links" to="/signup">
              Sign up
            </Link>
          </button>
        </div>
        <div>
          <button className='button-border-margin'>
            <Link className="home-links" to="/login">
              Log in
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
