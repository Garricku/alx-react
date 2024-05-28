import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function appFooter() {
return (
    <>
        <footer className="App-footer">
            <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
        </footer>
    </>
    );
}