import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => {
    return {
      message: 'Hello, Elysia!',
    };
  })
  .listen(3000);

export const GET = app.handle;
export const POST = app.handle;
export const PATCH = app.handle;
export const PUT = app.handle;
export const OPTIONS = app.handle;

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
