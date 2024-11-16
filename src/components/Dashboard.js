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
    return (
        <div className='dashboard-page'>
            <Navbar />
        </div>
    )
}
