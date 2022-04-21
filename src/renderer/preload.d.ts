import electron from 'ipc/renderer';

declare global {
  interface Window {
    electron: typeof electron;
  }
}

export {};
