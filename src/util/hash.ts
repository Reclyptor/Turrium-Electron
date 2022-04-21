import fs from 'fs';
import crypto from 'crypto';

export const sha1sum = (filepath: string): string => {
  const buffer = fs.readFileSync(filepath);
  const hash = crypto.createHash('sha1');
  hash.update(buffer);
  return hash.digest('hex');
};

export const sha1sumAsync = (filepath: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const stream = fs.createReadStream(filepath);
    const hash = crypto.createHash('sha1');
    stream.on('data', (buffer) => hash.update(buffer));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', (err) => reject(err));
  });
};
