import React from 'react'

import './Hobbies.scss'
import HobbiesItems from './HobbiesItems/HobbiesItems'
import Gaming from '../../assets/img/gaming.jpg'
import Cooking from '../../assets/img/cooking.jpg'
import Biking from '../../assets/img/biking.jpg'


const Hobbies = () => {
    return (
        <article className='hobbies'>
            <h3 className='hobbies__title'>Hobbies</h3>
            <HobbiesItems
                image={Gaming}
                name='gaming'
                title='Gaming'
                description='Quisque feugiat malesuada molestie.' />

            <HobbiesItems
                image={Cooking}
                name='cooking'
                title='Cooking'
                description='Quisque feugiat malesuada molestie.' />

            <HobbiesItems
                image={Biking}
                name='biking'
                title='Biking'
                description='Quisque feugiat malesuada molestie.' />
        </article>
    )
}

export default Hobbies