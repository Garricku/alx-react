import './Header.css';
import logo from '../assets/holberton-logo.jpg';

export default function appHeader() {
return (
    <>
        <header className="App-header">
            <img src={logo} alt="Holberton Logo" />
            <h1>School dashboard</h1>
        </header>
    </>
    );
}