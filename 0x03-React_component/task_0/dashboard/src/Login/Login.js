import './Login.css';

export default function appLogin() {
return (
    <>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' placeholder='example@gmail.com'></input>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' placeholder='Enter Your Password'></input>
                <button>OK</button>
            </form>
        </div>
    </>
    );
}