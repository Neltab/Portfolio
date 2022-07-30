import { Hono } from "hono";

export default function(API: Hono, url: string) {
    API.get(url, (c) => c.json({ post: "yo", ok: true }, 201))
}