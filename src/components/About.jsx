import React from 'react'
import { translations } from '../Utilities/lang'

function About({ lang = 'en' }) {
    const t = translations[lang] || translations['en'];
    return (
        <><p className='text-2xl'>{t.about_us}</p>
            <p className='text-lg'>{t.about_desc}</p>
            <p className='text-2xl'>{t.mission}</p>
            <p className='text-lg'>{t.mission_desc}</p>
        </>
    )
}

export default About