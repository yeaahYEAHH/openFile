const path = require('path'),
    url = require('url'),
    {app, BrowserWindow, webContents, ipcMain} = require('electron');


function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 700, 
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            allowRunningInsecureContent: true
        }
    });

    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.setTitle(title)
    })

    ipcMain.on('quit', () =>{ app.quit() })

    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    app.quit();
})

