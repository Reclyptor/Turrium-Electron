import { ipcMain, dialog, BrowserWindow } from 'electron';
import { SELECT_DIRECTORY } from './channels';

const selectDirectory = (mainWindow: BrowserWindow) => (): Promise<string> => {
  return dialog
    .showOpenDialog(mainWindow, { properties: ['openDirectory'] })
    .then(({ filePaths: [directory] }) => directory);
};

export default (mainWindow: BrowserWindow | null): void => {
  if (mainWindow) {
    ipcMain.handle(SELECT_DIRECTORY, selectDirectory(mainWindow));
  }
};
