import { createElysia } from '../utils/elysia';
export const app = createElysia()
    .get('/', async () => {
    return {
        message: 'Hello, Elysia!',
    };
})
    .get('/health', () => {
    return {
        status: 'OK',
    };
});
