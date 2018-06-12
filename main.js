const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win, splash

function createSplash() {
  splash = new BrowserWindow({frame: false})

  splash.loadURL(url.format({
    pathname: path.join(__dirname, 'src/splash.html'),
    protocol: 'file:',
    slashes: true
  }))

  splash.on('closed', () => {
    splash = null
  })
}

function createWindow () {

  win = new BrowserWindow({frame: false, fullscreen: true, show: false })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.on('did-finish-load', () => {
    win.show();

    if (splash) {
        splash.close();
    }
  });

  win.setMenu(null)
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createSplash();
  setTimeout(() => {
    createWindow();
  }, 1000);
})