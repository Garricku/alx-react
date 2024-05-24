import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

<footer className="App-footer">
    <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
</footer>