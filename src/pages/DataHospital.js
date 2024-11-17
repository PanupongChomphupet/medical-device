import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

import '../css/DataHospital.css'

export default function DataHospital() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [navigate])

    return (
        <div className='dashboard-page'>
            <div className="display-flex">
                <Navbar />
                <div className="dashboard-content">
                    <div className="header">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="content">
                        <h2>โรงพยาบาล</h2>
                        <table className='tablesty'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>ชื่อโรงพยาบาล</th>
                                    <th>ที่อยู่</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>โรงพยาบาล......</td>
                                    <td>จังหวัดพิษณุโลก</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>โรงพยาบาล......</td>
                                    <td>จังหวัดพิจิตร</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>โรงพยาบาล......</td>
                                    <td>จังหวัดนครสวรรค์</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
