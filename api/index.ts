import { app } from '../src/app';

export const config = { runtime: 'bun' };

export default async function handler(request: Request) {
  return app.fetch(request);
}
