import $ from 'jquery';

$(document).ready(() => {
    $('body').append('<div><button><img src={closeIcon} alt="Close" /></button></div>')
    $('body').append('<p>Here is the list of notifications</p>')
    $('body').append('<ul><li data-priority="default">New course available</li><li data-priority="urgent">New resume available</li><li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}/></ul></div>')
    $('body').append('<div className="App"><header className="App-header"><img src={logo} alt="Holberton Logo" /><h1>School dashboard</h1></header></div>')
    $('body').append('<div className="App-body"><p>Login to access the full dashboard</p>')
    $('body').append('<div><form><label htmlFor="email">Email:<input id="email" type="email" placeholder="example@gmail.com" autoComplete="on"></input></label><label htmlFor="password">Password:<input id="password" type="password" placeholder="Enter Your Password" autoComplete="on"></input></label><button>OK</button></form></div>')
    $('body').append('<footer className="App-footer"><p>Copyright { getFullYear() } - { getFooterCopy(true) }</p></footer></div>');
});