import React from 'react'
import UserOne from './../../Media/Users/user-one.jpg'
import UserTwo from './../../Media/Users/user-two.jpg'
import UserThree from './../../Media/Users/user-three.jpg'
import UserFour from './../../Media/Users/user-four.jpg'
import './Users.css'

function Users() {
    return ( 
    <div className = 'users'>
        <div className = 'users__content'>
            <div className = 'user'>

                <img src = {UserOne} alt = 'user-one' className = 'user__image'/>

                <div className = 'user__text'>
                    <h3 className = 'user__name'>Gabriella Martinez</h3>
                    <p className = 'user__desc'>Front End Developer</p>
                </div>

            </div>

            <div className = 'user'>

                <img src = {UserTwo} alt = 'user-one' className = 'user__image'/>

                <div className = 'user__text'>
                    <h3 className = 'user__name'>Asmerelda Gomes</h3>
                    <p className = 'user__desc'>Front End Developer</p>
                </div>

            </div>

            <div className = 'user'>

                <img src = {UserThree} alt = 'user-one' className = 'user__image'/>

                <div className = 'user__text'>
                    <h3 className = 'user__name'>Niddhi Sharma</h3>
                    <p className = 'user__desc'>Front End Developer</p>
                </div>

            </div>

            <div className = 'user'>

                <img src = {UserFour} alt = 'user-one' className = 'user__image'/>

                <div className = 'user__text'>
                    <h3 className = 'user__name'>Kate Home</h3>
                    <p className = 'user__desc'>Front End Developer</p>
                </div>

            </div>

        </div>

    </div>
    )
}

export default Users