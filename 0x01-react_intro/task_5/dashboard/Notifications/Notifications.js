import React from 'react';
import '../Notifications/Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';


function handleClick() {
    console.log('Close button has been clicked');
}


export default function notifications() {
    return (
        <div className='Notifications'>
            <button style={{ float: 'right'}} aria-label='Close' onClick={handleClick}>
                <img src={closeIcon} alt="Close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}