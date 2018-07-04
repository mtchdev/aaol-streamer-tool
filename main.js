const {app, BrowserWindow} = require('electron')
  
  let win
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600, frame: false})
  
    // load react application
    win.loadURL('http://localhost:3001')
  
    // Open the DevTools.
    win.webContents.openDevTools()

    win.on('closed', () => {
      win = null
    })
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })