import Elysia from 'elysia';

const homeRoute = new Elysia();

homeRoute.get('/', () => {
  return {
    message: 'Hello, Elysia!',
  };
});

export default homeRoute;
