import readdirRecursive from "./folderReader";
import { join } from "path";
import { Hono } from "hono";
import fs from 'fs';

export default async function createMiddleware(
    directory: string, 
    fileExtension: string, 
    action: (middleware: Hono,fileExport: any, url: string) => Promise<any>,
    hasIndex: boolean = true,
    isJSONLike: boolean = true,
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

        let defaultExport : string | object;
        if (isJSONLike) {
            defaultExport = require(file).default
        }
        else {
            defaultExport = fs.readFileSync(file, 'utf8');
        } 

        return {
            defaultExport,
            url
        };
    });

    middlewareMapped.forEach(async ({defaultExport, url}) => {
        await action(middleware, defaultExport, url)
    });

    return middleware;
}