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
    const isAction = (path) => location.pathname === path
    return (
        <div className='navbar-page'>
            <div className="nav-background">
                <div className="nav-logo">
                    <img src="images/logo.png" alt=''/>
                    <p>CPM Medical Support</p>
                </div>
                <div className="nav-menubar">
                    <ul>
                        <li className={isAction('/data-hospital') ? "active": ""}><Link to='/data-hospital'>ข้อมูลโรงพยาบาล</Link></li>
                        <li className={isAction('/document') ? "active": ""}><Link to='/document'>เอกสาร</Link></li>
                        <li onClick={handleSignOut}><Link>ออกจากระบบ</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
