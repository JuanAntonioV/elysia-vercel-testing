// @ts-ignore
import app from '../dist/src/index.js';

export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
  return app.fetch(request);
}
