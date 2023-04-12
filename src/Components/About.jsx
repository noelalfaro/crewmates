import React from 'react'
import SupabaseIMG from '../assets/supabase-logo2.png'

export default function About() {
    return (
        <div className='App aboutPage'>
            <h1>About</h1>
            <img src={SupabaseIMG} style={{ width: 300, borderRadius: 8 }} alt="supabase-logo2.png" />
            <h2>This is a web app that uses the Supabase database and API to add, delete, or edit 'Crewmates' in the Crewmate gallery, it also uses react-router-dom for navigation of the different pages</h2>
        </div>

    )
}
