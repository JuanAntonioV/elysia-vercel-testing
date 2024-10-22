import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => {
    return {
      message: 'Hello, Elysia!',
    };
  })
  .listen(3000);

export default app;

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
