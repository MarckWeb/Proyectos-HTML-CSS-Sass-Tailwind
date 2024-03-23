import React from 'react'
import './Blog.scss'

import Organizer from '../../assets/img/blog.png'

const Blog = () => {
    return (
        <section className='blog'>
            <p className='blog__title'>Blog (1)</p>
            <article className='blog__item'>
                <section className='blog__content'>
                    <p className='blog__content-subtitle'>Blog</p>
                    <h3 className='blog__content-tema'>How to organize your CSS</h3>
                    <p className='blog__content-text'>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. </p>

                    <p className='blog__content-text'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>

                    <span>dev.to</span>
                </section>
                <figure className='blog__figure'>
                    <img className='blog__figure-img' src={Organizer} alt="" />
                </figure>
            </article>
        </section>
    )
}

export default Blog