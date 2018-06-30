const {app, BrowserWindow} = require('electron')

// Window Object
let mainWindow

function createWindow () {
  
  mainWindow = new BrowserWindow({width: 800, height: 600, frame: false})

  mainWindow.loadURL('http://localhost:3000');

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})