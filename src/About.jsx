import React from 'react'
import Card from './components/shared/Card'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div id='main-box'>
        <Card> 
            <div className="box">
            <div >
            <p>Hi, I am Ajay Jha, I am a full-stack developer.</p>
            <p>My key skill sets are Java, Javascript, React , Node.js , MongoDB  </p>
            <a href="https://www.linkedin.com/in/ajay-jha-01/" target="{_blank}">My LinkedIn</a>
            <Link to="/"><button>Go to Home</button></Link>
            </div>
            <img src={require('./Data/ajay.jpeg')} alt='error loading' className='img' />
            </div>
        </Card>


    </div>
  )
}

export default About
