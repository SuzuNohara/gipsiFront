const { app, BrowserWindow } = require("electron");
const { fs } = require('fs');

let appWin;
let window = {};
window.fs = fs;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 1200,
        height: 600,
        title: "Hermione",
        resizable: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });
    
    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});