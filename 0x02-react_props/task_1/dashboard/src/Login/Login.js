import './Login.css';

export default function appLogin() {
return (
    <>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <label>Email:</label>
            <input type='email' placeholder='example@gmail.com'></input>
            <label>Password:</label>
            <input type='password' placeholder='Enter Your Password'></input>
            <button>OK</button>
        </div>
    </>
    );
}