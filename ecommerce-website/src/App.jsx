import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </>
  )
}

export default App
