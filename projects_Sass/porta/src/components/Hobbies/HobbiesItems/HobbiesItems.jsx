import React from 'react'

import './HobbiesItems.scss'

const HobbiesItems = ({ image, name, title, description }) => {
    return (
        <figure className='hobbies__items'>
            <img src={image} alt={`image ${name}`} />
            <figcaption>{title}</figcaption>
            <span>{description}</span>
        </figure>
    )
}

export default HobbiesItems