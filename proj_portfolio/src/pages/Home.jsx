/* eslint-disable no-unused-vars */
import Navbar from '../sections/Navbar'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Project from '../sections/Project'
import Resume from '../sections/Resume'
import Hello from '../components/hello'


const Home = () => {
    return (
        <main className='w-[70%] mx-auto'>
            <Hello/>
            <About/>
            <Skills />
            <Project />
            <Resume />
            
        </main>
    )
}

export default Home
