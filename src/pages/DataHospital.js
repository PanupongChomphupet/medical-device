import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

import '../css/DataHospital.css'
import axios from 'axios';

export default function DataHospital() {
    const navigate = useNavigate();
    const [selectOption, setSlectOption] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
        getData()
    }, [navigate])

    const getData = () => {
        axios.get('http://localhost:5000/getDataTable')
        .then(res => {
            setSlectOption(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='dashboard-page'>
            <div className="display-flex">
                <Navbar />
                <div className="dashboard-content">
                    <div className="header">
                        <h1>โรงพยาบาล</h1>
                        <button>เพิ่ม</button>
                    </div>
                    <div className="content">
                        <table className='tablesty'>
                            <thead>
                                <tr>
                                    {console.log(selectOption)}
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
