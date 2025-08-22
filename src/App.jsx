import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Unauthorized from './components/Unauthorized';
import About from './components/About';
import Restricted from './components/Restricted';
import Protected from './components/Protected';

function App() {
  return (
    <>
      <BrowserRouter>
        <header><nav>
          <ul className='flex gap-4 p-4 bg-gray-200'>
            <li><Link to="/" className='text-blue-500'>Home</Link></li>
            <li><Link to="/restricted" className='text-blue-500'>Restricted</Link></li>
            <li><Link to="/about" className='text-blue-500'>About</Link></li>
          </ul>
        </nav></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
