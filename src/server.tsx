import { Hono } from "hono";
import API from "./helpers/loadAPI";
import pages from "./helpers/loadPages";

const app = new Hono();

const port = parseInt(process.env.PORT) || 3000;

// Custom logger
app.use('*', async (c, next) => {
  console.log(`[${c.req.method}] ${c.req.url}`)
  await next()
})

// Add a custom header
app.use('/message/*', async (c, next) => {
  await next()
  c.header('x-message', 'This is middleware!')
})

console.log(pages);

app.route("/", pages);
app.route("/api/", API);

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
