import readdirRecursive from "./folderReader";
import { join } from "path";
import { Context, Hono } from "hono";

type APIRoute = {
    fn: (API: Hono, url: string) => Response,
    url: string,
}

const API = new Hono();

const APIDir = join(import.meta.dir, '../API');
const APIDirStringLength = APIDir.length;
const indexStringLength = "index".length;
const extStringLength = ".ts".length;
const APIsFiles = await readdirRecursive(APIDir)

const APIsObject : APIRoute[] = APIsFiles.map( function (file: string) : APIRoute {
    let url = file.slice(APIDirStringLength, -extStringLength)
    if (url.endsWith("index")) {
        url = url.slice(0, -indexStringLength);
    }
    return {
        fn: require(file).default,
        url
    };
});

APIsObject.forEach(({fn, url}) => fn(API, url));


export default API;