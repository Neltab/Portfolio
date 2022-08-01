import { describe, expect, it } from 'bun:test'
import app from "../../src/server"

describe('Locale FR', () => {
  it('Should say Bonjour', async () => {
    const req = new Request('http://localhost:3000/')
    const res = await app.fetch(req)
    expect(res.status).toBe(200)
  })
})