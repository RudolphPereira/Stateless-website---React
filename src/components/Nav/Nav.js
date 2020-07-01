import React from 'react'
import logoImage from './../../Media/Nav/logo-image.png'
import './Nav.css'

function Nav() {
    return (
        <nav className = 'nav'>
            <div className = 'nav__logo'>
                <img src = {logoImage} alt = 'logo-img' />
                <h1 className = 'nav__logo--title'>THE BAT</h1>
            </div>

            <ul className = 'nav__list'>
                <li className = 'nav__items'><a className = 'nav__link' href = ''>Home</a></li>
                <li className = 'nav__items'><a className = 'nav__link' href = ''>About</a></li>
                <li className = 'nav__items'><a className = 'nav__link' href = ''>Blog</a></li>
                <li className = 'nav__items'><a className = 'nav__link' href = ''>Shop</a></li>
                <li className = 'nav__items'><a className = 'nav__link' href = ''>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav