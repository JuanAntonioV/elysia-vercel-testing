import { createElysia } from '../utils/elysia.js';
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
