import React from 'react'
import '../css/Navbar.css'
import {useLocation, useNavigate, Link } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation();


    const handleSignOut = () => {
        localStorage.removeItem('token')  
        if (!localStorage.getItem('token')) {
            navigate('/')
        } 
    }
    const getBackgroundClass = () => {
        switch(location.pathname) {
            case '/dashboard':
                return "dashboard"
            default:
                return ""
        }
    }
    return (
        <div className='navbar-page'>
            <div className="nav-background">
                <div className="nav-logo">
                    <img src="images/logo.png" alt="" />
                    <p>CPM Medical Support</p>
                </div>
                <div className="nav-menubar">
                    <ul>
                        <li className= {`bg ${getBackgroundClass()}`} ><Link to='/dashboard'>Dasboard</Link></li>
                        <li onClick={handleSignOut}><Link>Sign Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
