import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { Link } from 'react-router-dom';
import picture from '../assets/images/profile.picture.png';
import NavBar from '../components/NavBar';

export default function Profile() {
  const { logout } = useContext(SessionContext);

  return (
    <>
    <NavBar />
    <div className='all-pages profile'>
      <h1>Welcome,</h1>
      <h1>user.name</h1>
      <div >
      <img className='pic-size'src={picture} alt='profile picture' />
      </div>
      <div>
        <Link className='links' to='/event-list'>Events</Link>
      </div>
      <div>
        <Link className='links' to='/event-my'>My events</Link>
      </div>
      <div>
        <Link className='links' to='/event-create'>Add an event</Link>
      </div>
      <button type='button' onClick={logout}>
        Log out
      </button>
    </div>
    </>
  );
}
