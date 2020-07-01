import React from 'react'
import './Header.css'


function Header () {
    return (
        <div className = 'header'>
            <div className = 'header__box'>
                <h1 className = 'header__title'>Bruce Wayne</h1>
                <p className = 'header__desc'>DescriptionBatman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 in 1939.</p>
                <a className = 'header__link' href = ''>Sign Up</a>
            </div>
        </div>
    )
}

export default Header;