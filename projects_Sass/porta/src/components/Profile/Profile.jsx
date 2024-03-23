import React from 'react'
import './Profile.scss'
import { MdEmail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

import Picture from '../../assets/img/cropped-profile.png'


const Profile = () => {
    return (
        <article className="profile">
            <figure className="profile__figure">
                <img className="profile__figure-img" src={Picture} alt="" />
            </figure>
            <div>
                <h2 className="profile__name">Billy Pearson</h2>
                <p className="profile__profession">Front-end developer</p>

                <p className="profile__email">
                    < MdEmail className='profile__email-icon' />
                    billy@example.com</p>
                <p className="profile__phone">
                    <MdPhone className='profile__email-icon' />(+603) 546 624 342</p>
                <p className="profile__bio">Self-motivated developer, who is willing to learn and create outstanding UI
                    applications.</p>
            </div>
        </article>
    )
}

export default Profile