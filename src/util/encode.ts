import fs from 'fs';

export const base64 = (filepath: string): string => {
  return fs.readFileSync(filepath).toString('base64');
};
