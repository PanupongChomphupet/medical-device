import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Document() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [navigate])

    const displayFlex = {
        display: 'flex',
    };
    const marginBox = {
        margin: '30px',

    }
    return (
        <div className='document-page'>
            <div className="flex" style={displayFlex}>
                < Navbar />
                <div className="document-content">
                    <h1 style={marginBox}>เอกสาร</h1>
                </div>

            </div>
        </div>
    )
}
