import React from 'react'
import { Link,Routes,Router,Route } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Home from './Home'
const Nav = () => {
  return (
    <div>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"https://www.netflix.com/in/"} target='blank'>Google</Link></li>
                </ul>
            </nav>

            
    </div>
  )
}

export default Nav