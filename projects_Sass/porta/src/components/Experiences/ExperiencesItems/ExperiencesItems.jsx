import React from 'react'
import './ExperiencesItems.scss'

const ExperiencesItems = ({ image, name, date, profession, bio }) => {
    return (
        <section className="experiences__items">
            <figure className="experiences__items-figure">
                <img src={image} alt={`logo${name}`} />
            </figure>
            <div className="experiences__items-content">
                <p><span>{date}</span><br /><strong>{profession}</strong></p>
                <p className="experiences__items-content">{bio}</p>
            </div>
        </section>
    )
}

export default ExperiencesItems