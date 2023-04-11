import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className='nav-bar'>
            <Link to={"/"}>
                <div className='nav-item'>
                    Home
                </div>
            </Link>

            <Link to={'/crewmate-gallery'}>
                <div className='nav-item'>
                    Gallery
                </div>
            </Link>

            <Link to={'/new-crewmate'}>
                <div className='nav-item'>
                    Create A Crewmate
                </div>
            </Link>


            <Link to={"/about"}>
                <div className='nav-item'>
                    About
                </div>
            </Link>

        </div>
    )
}
