import React from 'react'

function MemeCard({data}) {
const {title, url, author} = data;
  return (
    <div className='p-5 m-5 border border-black rounded-lg'>{title}<img alt='meme' className='w-64 h-64' src={url}/>,<p>{author}</p></div>
  )
}

export default MemeCard