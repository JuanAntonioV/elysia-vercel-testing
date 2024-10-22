import Elysia from 'elysia';

const homeRoute = new Elysia().get('/', () => {
  return {
    message: 'Hello, Elysia!',
  };
});

export default homeRoute;
