import { Elysia } from 'elysia';

const app = new Elysia().get('/', () => {
  return {
    message: 'Hello, Elysia!',
  };
});

export default app;

app.listen(3000);

// console.log(
//   `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
// );
