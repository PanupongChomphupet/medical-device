import { useState } from 'react';
import '../css/LoginPage.css'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [value, setvalue] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        setvalue(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", value)
            .then(res => {
                if (res.data.success) {
                    Swal.fire({
                        title: "เข้าสู่ระบบ",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    localStorage.setItem('token', res.data.token)
                    navigate('/dashboard')
                } else {
                    Swal.fire({
                        title: "เข้าสู้ระบบไม่สำเร็จ",
                        text: "ชื่อผู้ใช่หรือรหัสผ่านไม่ถูกต้อง",
                        icon: "warning"
                    })
                    console.log(res.data)
                }


            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="login-page">
            <div className="backgroud">
                <form onSubmit={onSubmit}>
                    <h1>Admin</h1>
                    <div className="input-form">
                        <label htmlFor="">username</label>
                        <input type="text" name='username' onChange={handleInput} />
                    </div>
                    <div className="input-form">
                        <label htmlFor="">password</label>
                        <input type="password" name='password' onChange={handleInput} />
                    </div>
                    <div className="btn">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}