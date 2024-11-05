import { app } from './app';
import { env } from './env';
import { createElysia } from './utils/elysia';
import { fixCtxRequest } from './utils/fixCtxRequest';
const server = createElysia()
    .derive((ctx) => fixCtxRequest(ctx.request))
    .use(app);
server.listen({ port: env.PORT }, ({ hostname, port }) => {
    const url = env.NODE_ENV === 'production' ? 'https' : 'http';
    console.log(`🦊 Elysia is running at ${url}://${hostname}:${port}`);
});
