import { app } from './app/index.js';
import { env } from './env.js';
import { createElysia } from './utils/elysia.js';
import { fixCtxRequest } from './utils/fixCtxRequest.js';
const server = createElysia()
    .derive((ctx) => fixCtxRequest(ctx.request))
    .use(app);
server.listen({ port: env.PORT }, ({ hostname, port }) => {
    const url = env.NODE_ENV === 'production' ? 'https' : 'http';
    console.log(`🦊 Elysia is running at ${url}://${hostname}:${port}`);
});
