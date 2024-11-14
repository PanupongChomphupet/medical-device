import { useState } from 'react';
import '../css/LoginPage.css'
import axios from 'axios'
import Swal from 'sweetalert2';

export default function LoginPage() {
    const [user, setuser] = useState('')
    const [pw, setpw] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", {user, pw})
        .then(res => {
            Swal.fire({
                title: "เข้าสู่ระบบ",
                icon: "success"
            })
            console.log(res.data)
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
                        <input type="text" onChange={e => setuser(e.target.value)}/>
                    </div>
                    <div className="input-form">
                        <label htmlFor="">password</label>
                        <input type="password" onChange={e => setpw(e.target.value)}/>
                    </div>
                    <div className="btn">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}