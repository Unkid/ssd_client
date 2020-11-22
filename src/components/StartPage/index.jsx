import React, { Component } from 'react'
import './style.css'

class StartPage extends Component {

    render(){
        return (
            <main className="main-block">
                <div className='main-text'>Let's start your journey</div>
                <img className='main-img' src='../Planets.png' alt='planets'/>
                <a href='#' className='main-button'  >Begin</a>
            </main>
        )
    }


}

export default StartPage;