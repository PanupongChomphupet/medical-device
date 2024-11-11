import './css/LoginPage.css'
export default function LoginPage() {
    return(
        <div className="login-page">
            <div className="backgroud">
                <form action="">
                    <h1>Admin</h1>
                    <div className="input-form">
                        <label htmlFor="">username</label>
                        <input type="text" />
                    </div>
                    <div className="input-form">
                        <label htmlFor="">password</label>
                        <input type="password" />
                    </div>
                    <div className="btn">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}