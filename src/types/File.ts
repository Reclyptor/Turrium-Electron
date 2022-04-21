import { Stats } from 'fs';

export interface File extends Stats {
  directory: string;
  name: string;
}
