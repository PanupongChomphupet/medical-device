import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [navigate])
    const dashboardSty = {
        display: 'flex',
    };
    const dashpagesty = {
        margin: '30px',

    }

    return (
        <div className='dashboard-page'>
            <div className="flex" style={dashboardSty}>
                <Navbar />
                <div className="dashboard-content">
                    <h1 style={dashpagesty}>DasboardPage</h1>
                </div>
            </div>
        </div>
    )
}
