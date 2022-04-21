import fs from 'fs';
import path from 'path';
import { File } from '../types/File';

export const toPosixPath = (filepath: string): string => {
  return !filepath ? '' : filepath.split(path.sep).join(path.posix.sep);
};

export const walkDir = (directory: string): File[] => {
  const files: File[] = [];
  if (!directory) {
    return files;
  }

  const directories: string[] = [];
  fs.readdirSync(directory, { withFileTypes: true }).forEach((dirent) => {
    const { name } = dirent;
    const filepath = path.join(directory, name);
    if (dirent.isFile()) {
      const stats = fs.statSync(filepath);
      const file = { ...stats, directory, name };
      files.push(file);
    } else {
      directories.push(path.join(directory, name));
    }
  });
  directories.flatMap(walkDir).forEach((file) => files.push(file));

  return files;
};

export const listFiles = (directory: string): Promise<File[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(walkDir(toPosixPath(directory)));
    } catch (err) {
      reject(err);
    }
  });
};
