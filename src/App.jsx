import { useState } from 'react'

import './App.css'
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
    <Signup setUser={setUser}/>  
    </>
  );
}

export default App
