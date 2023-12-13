import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';


function App() {
  const [navClick, setNavClick] = useState(false)
  const onMenuClick = () => {
    setNavClick(!navClick);
  }
  const { BASE_URL } = import.meta.env;
  return (
    <BrowserRouter basename={BASE_URL}>
      <Navbar
        navClick={navClick}
        onNaveClick={onMenuClick}
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
