import { ipcRenderer } from 'electron';
import { OPEN_DIRECTORY_DIALOG } from './channels';

const openDirectoryDialog = (): Promise<string> => {
  return ipcRenderer.invoke(OPEN_DIRECTORY_DIALOG);
};

export default {
  openDirectoryDialog,
};
