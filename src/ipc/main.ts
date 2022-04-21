import { ipcMain, dialog, BrowserWindow } from 'electron';
import { OPEN_DIRECTORY_DIALOG } from './channels';

const openDirectoryDialog =
  (mainWindow: BrowserWindow) => (): Promise<string> => {
    return dialog
      .showOpenDialog(mainWindow, { properties: ['openDirectory'] })
      .then(({ filePaths: [directory] }) => directory);
  };

export default (mainWindow: BrowserWindow | null): void => {
  if (mainWindow) {
    ipcMain.handle(OPEN_DIRECTORY_DIALOG, openDirectoryDialog(mainWindow));
  }
};
