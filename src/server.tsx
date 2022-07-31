import { Context, Hono, Next } from "hono";
import translate from "./helpers/i18n";
import API from "./helpers/loadAPI";
import pages from "./helpers/loadPages";

const app = new Hono();

const port = parseInt(process.env.PORT) || 3000;

app.use('/*', translate())

app.route("/", pages);
app.route("/api/", API);

console.log(`Running at http://localhost:${port}`);

export default {
    port,
    fetch: app.fetch,
};
