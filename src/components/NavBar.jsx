import { Link } from "react-router-dom";
import logo2 from "../assets/images/logo2.png";
import { Nav, Navbar, NavLink } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo2} alt="profile picture" />
      </div>
      <Navbar collapseOnSelect expand="sm" variant="dark">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            {/* <div className='nav-lks'> */}
            <NavLink eventKey="1" as={Link} to="/">
              Home
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/event-list">
              Events
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/event-my">
              My Events
            </NavLink>
            <NavLink eventKey="4" as={Link} to="/event-create">
              Add Events
            </NavLink>
            <NavLink eventKey="5" as={Link} to="/profile">
              Profile
            </NavLink>
            <NavLink eventKey="6" as={Link} to="/profile">
              Logout
            </NavLink>
            <NavLink eventKey="7" as={Link} to="/">
              Help
            </NavLink>
            <NavLink eventKey="8" as={Link} to="/">
              About
            </NavLink>
            {/* <Link className="links" to="/profile">
              Home
            </Link>
            <Link className="links" to="/event-list">
              Events
            </Link>
            <Link className="links" to="/event-my">
              My events
            </Link>
            <Link className="links" to="/event-create">
              Add events
            </Link>
            <Link className="links" to="/">
              Profile
            </Link>
            <Link className="links" to="/">
              Log out
            </Link>
            <Link className="links" to="/">
              Help
            </Link>
            <Link className="links" to="/">
              About
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    //</div>
  );
}
