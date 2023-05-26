import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../context/SessionContext';
import { Link } from 'react-router-dom';
import axios from 'axios'
import defaultPicture from '../assets/images/profile.picture.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Profile() {
  const { token, logout } = useContext(SessionContext);
  const [user, setUser] = useState({})

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const axiosUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/profile/update`, config)
    if (response.status === 200) {
      setUser(response.data)
    }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    axiosUser();
  }, []);
  
  return (
    <>
    <NavBar />
    <div className='all-pages profile'>
      <h1>Welcome,</h1>
      <h1>{user.userName}</h1>
      <div>
      <Link to="/update-user" >
      <img className='pic-size'src={!user.imageUrl || user.imageUrl === 'some pic' ? defaultPicture : user.imageUrl} alt='profile picture' />
      </Link>
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
      <button className='button-border-margin' type='button' onClick={logout}>
        Log out
      </button>
    </div>
    <Footer />
    
    </>
  );
}
