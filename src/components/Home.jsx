import { useEffect, useState } from 'react';
import MemeCard from './MemeCard';
import Shrimmer from './Shrimmer';

function Home() {
    const [memes, setMemes] = useState([]);
    const [showShrimmer, setShowShrimmer] = useState(true);

    /**
     * Fetches 20 random memes from the Meme API and updates the component
     * state accordingly. Also, it shows the Shrimmer component when the
     * fetch request is sent and hides it when the response is received.
     */
    const fetchMemes = async () => {
        setShowShrimmer(true);
        const response = await fetch('https://meme-api.com/gimme/20');
        const data = await response.json();
        setMemes((prev) => [...prev, ...data.memes]);
        setShowShrimmer(false);
    }

    useEffect(() => {
        fetchMemes();
        window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                fetchMemes();
            }
        })
        return () => {
            window.removeEventListener('scroll', fetchMemes);
        }
    }, [])

    return (
        <div className='flex flex-wrap'>
            {memes.map((meme, index) => <div key={index}><MemeCard data={meme} /></div>)}
            {showShrimmer && <Shrimmer />}
        </div>
    )
}

export default Home
