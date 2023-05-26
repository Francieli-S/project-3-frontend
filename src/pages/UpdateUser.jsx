import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import axios from 'axios'

export default function UpdateUser() {
    const { token } = useContext(SessionContext);
    const navigate = useNavigate();

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fData = new FormData()
        const image = e.target.image.files[0]
        fData.append("imageUrl", image)
        const response = await axios.put(`${import.meta.env.VITE_BASE_API_URL}/profile`, fData, config)
        if (response.status === 200) {
            navigate('/profile')
        }
    }
    
  return (
    <>
      <div>Change yor picture</div>
      <form encType='multipart/form-data' onSubmit={handleSubmit}>
        <label>Picture</label>
        <input type='file' accept='image/jpg, image/png' name='image' />
        <button type='submit'>Save</button>
      </form>
    </>
  );
}
