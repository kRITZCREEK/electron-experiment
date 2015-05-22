var app = require('app')
var clipboard = require('clipboard')
var BrowserWindow = require('browser-window')
var ipc = require('ipc')
var globalShortcut = require('global-shortcut')
var path = require('path')


function getNewYank(){
  return {
    content: clipboard.readText(),
    timestamp: new Date()
  }
}

app.commandLine.appendSwitch('remote-debugging-port', '8315')

app.on('ready', function () {
  var mainWindow = new BrowserWindow(
    {
      width: 800,
      height: 700
    })

  var ret = globalShortcut.register('ctrl+shift+c', function() {
      yanks.push(getNewYank())
      mainWindow.webContents.send('update', JSON.stringify(yanks))
    })

  var yanks = ['Hi']

  mainWindow.loadUrl(path.join('file://', __dirname, '/index.html'))
})
