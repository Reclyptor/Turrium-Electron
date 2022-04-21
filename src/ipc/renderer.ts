import { ipcRenderer } from 'electron';
import { SELECT_DIRECTORY, LIST_DIRECTORY } from './channels';

const selectDirectory = (): Promise<string> => {
  return ipcRenderer.invoke(SELECT_DIRECTORY);
};

const listDirectory = (directory: string): Promise<unknown> => {
  return ipcRenderer.invoke(LIST_DIRECTORY, directory);
};

export default {
  selectDirectory,
  listDirectory,
};
