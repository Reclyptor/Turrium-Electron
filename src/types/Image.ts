export interface Image extends File {
  width: number;
  height: number;
  type: string;
  sha1: string;
  b64: string;
}
