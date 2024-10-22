import { Elysia } from 'elysia';
import homeRoute from './routes/homeRoute';

const app = new Elysia().use(homeRoute).listen(3000);

export default app;

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
