import { ipcRenderer } from 'electron';
import { SELECT_DIRECTORY } from './channels';

const openDirectoryDialog = (): Promise<string> => {
  return ipcRenderer.invoke(SELECT_DIRECTORY);
};

export default {
  openDirectoryDialog,
};
