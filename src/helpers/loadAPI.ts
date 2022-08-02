import createMiddleware from "./middleware";

const API = await createMiddleware('../API', ".ts", async (middleware, fileExport, url) => fileExport(middleware, url))

export default API;