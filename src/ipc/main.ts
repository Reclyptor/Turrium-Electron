import { ipcMain, dialog, BrowserWindow, IpcMainInvokeEvent } from 'electron';
import { SELECT_DIRECTORY, LIST_DIRECTORY } from './channels';
import { listFiles } from '../util/io';

const selectDirectory = (mainWindow: BrowserWindow) => (): Promise<string> => {
  return dialog
    .showOpenDialog(mainWindow, { properties: ['openDirectory'] })
    .then(({ filePaths: [directory] }) => directory);
};

const listDirectory = (
  _: IpcMainInvokeEvent,
  directory: string
): Promise<unknown> => {
  return listFiles(directory);
};

export default (mainWindow: BrowserWindow | null): void => {
  if (mainWindow) {
    ipcMain.handle(SELECT_DIRECTORY, selectDirectory(mainWindow));
    ipcMain.handle(LIST_DIRECTORY, listDirectory);
  }
};
