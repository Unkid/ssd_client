import React, { Component } from 'react'
import './style.css'

class HeaderBlock extends Component {
    
    render() {
        return (
            <header className="header-block">
                <a className="navbar-brand" href="#">
                    <img className="navbar-icon" src="../icon.png"/>
                </a>
                <div className="navbar-collapse">
                    <div className="navbar-ul">
                        <a href="#" className="navbar-li">
                            Tickets
                        </a>
                        <a href="#" className="navbar-li">
                            Ships
                        </a>
                        <a href="#" className="navbar-li">
                            Service
                        </a>
                        <a href="#" className="navbar-li">
                            Travel guides
                        </a>
                    </div>          

                </div>
                <div className="navbar-icons">
                    <a className="nav-icon" href="#">
                        <img className="icon sm" src="../srch.png"/>
                    </a>
                    <a className="nav-icon" href="#">
                        <p className="text-icon">EN</p>
                    </a>
                    <a className="nav-icon" href="#">
                        <img className="icon" src="../ast.png"/>
                    </a>
                    
                        
                    </div>
            </header>
        )
    }


}

export default HeaderBlock;