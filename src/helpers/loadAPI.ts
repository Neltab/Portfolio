import createMiddleware from "./middleware";

const API = await createMiddleware('../API', ".ts", (middleware, fileExport, url) => fileExport(middleware, url))

export default API;