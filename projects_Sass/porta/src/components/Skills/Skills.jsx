import React from 'react'
import './Skills.scss'

const Skills = () => {
    return (
        <article className='skills'>
            <section className='skills__item front'>
                <h3 >FRONT END</h3>
                <p>React <progress max="100" value="60"></progress></p>
                <p>Javascript <progress max="100" value="80"></progress></p>
                <p>CSS<progress max="100" value="90"></progress></p>
                <p>Vue <progress max="100" value="60"></progress></p>
                <p>Redux <progress max="100" value="80"></progress></p>
                <p>React Native <progress max="100" value="90"></progress></p>
            </section>
            <section className='skills__item desing'>
                <h3>DESING</h3>
                <p>Figma <progress max="100" value="60"></progress></p>
                <p>Photoshop <progress max="100" value="80"></progress></p>
            </section>
        </article>
    )
}

export default Skills