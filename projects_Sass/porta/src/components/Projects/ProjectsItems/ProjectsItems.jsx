import React from 'react'
import './ProjectsItems.scss'

const ProjectsItems = ({ image, name }) => {
    return (
        <article className="project">
            <figure className="project__figure">
                <img src={image} alt={`imagen ${name}`} />
            </figure>
            <section className="project__content">
                <p className="project__content-skills"><span>#HTML</span><span>#CSS</span><span>#responsive</span>
                </p>
                <h3 className="project__content-title">{name}</h3>
                <p className="project__content-text">In this project, I work with HTML and CSS to create a
                    responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum
                    diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                <div className="project__content-buttons">
                    <button>Demo</button>
                    <button>Code</button>
                </div>
            </section>

        </article>
    )
}

export default ProjectsItems