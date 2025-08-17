import React from 'react'

function Shrimmer() {
    return (
        Array(10).fill(0).map((_, index) => <div key={index} className='p-5 m-5 border border-black rounded-lg bg-gray-500'><div className='w-64 h-64' /></div>
        ))
}

export default Shrimmer