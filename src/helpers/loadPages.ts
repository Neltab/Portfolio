import createMiddleware from "./middleware";

const pages = await createMiddleware('../pages', ".tsx", async (middleware, fileExport, url) => {
    middleware.get(url, (c) => {
        return c.html(fileExport);
    });
})

export default pages;