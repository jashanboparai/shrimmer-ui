import { useEffect, useState } from 'react';
import './App.css'
import MemeCard from './components/MemeCard';
import Shrimmer from './components/Shrimmer';

function App() {
  const [memes, setMemes] = useState(null);

  const fetchMemes = async () => {
    const response = await fetch('https://meme-api.com/gimme/20');
    const data = await response.json();
    setMemes(data.memes);
  }

  useEffect(() => {
    fetchMemes();
  }, [])

  return (
    <div className='flex flex-wrap'>
      {!memes ? <Shrimmer/> : memes.map((meme, index) => <div key={index}><MemeCard data={meme}/></div>)}
    </div>
  )
}

export default App
