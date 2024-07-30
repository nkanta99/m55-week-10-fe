import { useState, useEffect } from 'react'

import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import { fetchPhotos } from '../unsplashFetch';
import imageContainer from './components/imageContainer';

function App() {
  const [user, setUser] = useState(false);
  const [images, setUsers] = useState([]);

  useEffect(() => {
    console.log("Hello useEffect")
  },[])
  // import.meta.env.VITE_KEY
  return (
    <>
          <Signup setUser={setUser} user={user} />
          <Login setUser={setUser} user={user} />
    </>
  );
}

export default App
