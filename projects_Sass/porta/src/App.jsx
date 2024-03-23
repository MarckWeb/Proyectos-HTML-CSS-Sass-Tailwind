
import './App.scss'
import Blog from './components/Blog/Blog'
import Experiences from './components/Experiences/Experiences'
import Hobbies from './components/Hobbies/Hobbies'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className='container'>
      <div>
        <Profile />
        <Experiences />
        <Hobbies />

      </div>
      <article>
        <Skills />
        <Projects />
        <Blog />
      </article>
    </div>
  )
}

export default App
