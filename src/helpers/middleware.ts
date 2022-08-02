import readdirRecursive from "./folderReader";
import { join } from "path";
import { Hono } from "hono";

export default async function createMiddleware(
    directory: string, 
    fileExtension: string, 
    action: (middleware: Hono,fileExport: any, url: string) => any,
    hasIndex: boolean = true
){
    const middleware = new Hono();

    const dir = join(import.meta.dir, directory);
    const dirStringLength = dir.length;
    const indexStringLength = "index".length;
    const extStringLength = fileExtension.length;
    const files = await readdirRecursive(dir);

    const middlewareMapped = files.map( function (file: string) {
        let url = file.slice(dirStringLength, -extStringLength)
        if (hasIndex && url.endsWith("index")) {
            url = url.slice(0, -indexStringLength);
        }
        return {
            defaultExport: require(file).default,
            url
        };
    });

    middlewareMapped.forEach(({defaultExport, url}) => {
        action(middleware, defaultExport, url)
    });

    return middleware;
}