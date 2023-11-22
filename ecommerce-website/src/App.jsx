import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DealsContainer from './components/deals/dealsContainer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <main>
        <DealsContainer />
      </main>
    </>
  )
}

export default App
