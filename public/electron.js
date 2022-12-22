const { app, BrowserWindow, Notification } = require("electron");
const path = require("path");

const isDev = require("electron-is-dev");

let mainWindow = null;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
    //   webPreferences: {
    //   preload: path.join(__dirname, "preloader.js")
    // }
	});

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "..", "build", "index.html")}`);
  }
}

app.whenReady().then(() => {
	createWindow();

	app.on("active", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	})

  enviaNotificacao();
})

app.on("window-all-closed", () => {
	if (process.plataform !== "darwin") app.quit();
})

function enviaNotificacao() {
  if (!Notification.isSupported()) return;

  const notification = new Notification({
    title: 'Título da Notificação',
    subtitle: 'Exemplo de uso de notificações no Electron', // só para Mac
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exemplo de notificação',
    silent: false,
    icon: path.join(__dirname, 'public', 'logo192.png'),
    timeoutType: "default" // default ou never
  })

  notification.on("show", () => console.log('Notification show'));
  notification.on("click", () => console.log('Notification click'));
  notification.on("close", () => console.log('Notification close'));
  notification.on("failed", () => console.log('Notification failed'));
  notification.show();
}
