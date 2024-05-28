import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import { NotificationItem } from './NotificationItem';


function handleClick() {
    console.log('Close button has been clicked');
}


export default function Notifications() {
    return (
        <>
            <div className='Notifications'>
                <button style={{ float: 'right'}} aria-label='Close' onClick={handleClick}>
                    <img src={closeIcon} alt="Close" />
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem type="urgent" value={getLatestNotification()} />
                </ul>
            </div>
        </>
    );
}