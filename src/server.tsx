import { Context, Hono, Next } from "hono";
import { serveStatic } from 'hono/serve-static.bun'
import translate from "./helpers/i18n";
import API from "./helpers/loadAPI";
import pages from "./helpers/loadPages";
import posts from "./helpers/loadBlogPosts";

const app = new Hono();

const port = parseInt(process.env.PORT) || 3000;

app.use('*', async (c, next) => {
    console.log(`[${c.req.method}] ${c.req.url}`)
    await next()
})

app.use('*', translate())

app.route("/", pages);
app.route("/api/", API);
app.route("/posts/", posts);
app.use('*', serveStatic({ root: './public' }))

console.log(`Running at http://localhost:${port}`);

export default {
    port,
    fetch: app.fetch,
};
