import React from 'react'
import './Experiences.scss'

import ExperiencesItems from './ExperiencesItems/ExperiencesItems'
import Adidas from '../../assets/img/adidas.png'
import HM from '../../assets/img/hm.png'
import Nivea from '../../assets/img/nivea.png'

const Experiences = () => {
    return (
        <article className='experiences'>
            <h2 className="experiences__title">Experiences</h2>
            <ExperiencesItems
                image={Adidas}
                name='adidas'
                date='Feb 2017 - Current'
                profession='Front-end developer'
                bio='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' />

            <ExperiencesItems
                image={HM}
                name='hm'
                date='Aug 2016 - Feb 2018'
                profession='Full-stack developer'
                bio='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' />

            <ExperiencesItems
                image={Nivea}
                name='nivea'
                date='Jun 2015 - Aug 2016'
                profession='Junior front-end developer'
                bio='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' />

        </article>
    )
}

export default Experiences