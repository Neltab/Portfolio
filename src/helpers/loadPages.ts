import readdirRecursive from "./folderReader";
import { join } from "path";
import { Hono } from "hono";

type Page = {
    file: string,
    url: string,
}

const pages = new Hono();

const pagesDir = join(import.meta.dir, '../pages');
const pageDirStringLength = pagesDir.length;
const indexStringLength = "index".length;
const extStringLength = ".tsx".length;
const pagesFiles = await readdirRecursive(pagesDir)

const pagesObject : Page[] = pagesFiles.map( function (file: string) : Page {
    let url = file.slice(pageDirStringLength, -extStringLength)
    if (url.endsWith("index")) {
        url = url.slice(0, -indexStringLength);
    }
    return {
        file,
        url
    };
});

pagesObject.forEach(({file, url}) => {
    pages.get(url, (c) => {
        return c.html(require(file).default);
    });
});


export default pages;