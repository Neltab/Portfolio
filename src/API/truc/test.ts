import { Hono } from "hono";

export default function(API: Hono, url: string) {
    API.get(url, (c) => {
        const id = c.req.param('test')
        return c.json({ post: id, ok: true }, 201)
    })
}