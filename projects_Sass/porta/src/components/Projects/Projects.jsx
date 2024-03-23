import React from 'react'
import './Projects.scss'

import ProjectsItems from './ProjectsItems/ProjectsItems'
import RecipeBlog from '../../assets/img/recipe-project.png'
import MyGallery from '../../assets/img/gallery-project.png'
import Checkout from '../../assets/img/checkout-project.png'



const Projects = () => {
    return (
        <section className='projects'>
            <p className='projects__title'>Projects (3)</p>

            <ProjectsItems
                image={RecipeBlog}
                name='Recipe Blog' />

            <ProjectsItems
                image={MyGallery}
                name='My Gallery' />

            <ProjectsItems
                image={Checkout}
                name='Checkout' />

        </section>
    )
}

export default Projects