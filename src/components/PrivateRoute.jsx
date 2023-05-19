import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { isLoggedIn, isLoading } = useContext(SessionContext)
  const navigate = useNavigate();

  if (!isLoading && !isLoggedIn) {
    return navigate('/login')
  }

  return isLoading ? <h1>Loading...</h1> : <>{children}</>
}

