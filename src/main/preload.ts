import { contextBridge } from 'electron';
import electron from '../ipc/renderer';

contextBridge.exposeInMainWorld('electron', electron);
