import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Unauthorized from './components/Unauthorized';
import About from './components/About';
import Restricted from './components/Restricted';
import Protected from './components/Protected';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <>
      <BrowserRouter>
        <header className='flex bg-gray-200 justify-between'><nav>
          <ul className='flex gap-4 p-4 bg-gray-200'>
            <li><Link to="/" className='text-blue-500'>Home</Link></li>
            <li><Link to="/restricted" className='text-blue-500'>Restricted</Link></li>
            <li><Link to="/about" className='text-blue-500'>About</Link></li>
          </ul>
        </nav> <select name="language" id="language" className='m-4 p-2 border border-black rounded-lg' onChange={(e) => setLang(e.target.value)} value={lang}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="pu">Punjabi</option>
          </select></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route element={<Protected />}>
            <Route path='/restricted' element={<Restricted />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>

      </BrowserRouter>
    </>
  )

}

export default App
