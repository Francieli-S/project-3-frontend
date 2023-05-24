import { Link } from 'react-router-dom';
import logo2 from '../assets/images/logo2.png';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div>
        <img className='logo' src={logo2} alt='profile picture' />
      </div>
      <div className='nav-lks'>
      <Link className='links' to='/profile'>
        Home
      </Link>
      <Link className='links' to='/event-list'>
        Events
      </Link>
      <Link className='links' to='/event-my'>
        My events
      </Link>
      <Link className='links' to='/event-create'>
        Add events
      </Link>
      <Link className='links' to='/'>
        Profile
      </Link>
      <Link className='links' to='/'>
        Log out
      </Link>
      <Link className='links' to='/'>
        Help
      </Link>
      <Link className='links' to='/'>
        About
      </Link>
      </div>
    </div>
  );
}
