const {app, BrowserWindow} = require('electron');

let browserWindow;

app.on('ready', () => {
    browserWindow = new BrowserWindow();
    browserWindow.loadURL('file://' + __dirname + '/index3.html' );
});
