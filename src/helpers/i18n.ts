import { Context, Next } from 'hono';
import {join} from 'path';

function fetchFromObject(obj: object | undefined, prop: string) {

    if(typeof obj === 'undefined') {
        return false;
    }

    let _index = prop.indexOf('.');
    if(_index > -1) {
        return fetchFromObject(obj[prop.substring(0, _index)], prop.substring(_index + 1));
    }

    return obj[prop];
}

export default function translate(locales: string[] = ['en', 'fr'], directory: string = join(import.meta.dir, "../locales"), defaultLocale = "en") {
    let localesFiles = {}
    locales.forEach((lang: string) => localesFiles[lang] = require(join(directory, `${lang}.json`)));
    // let regex = /(?={{)[a-zA-Z0-9\s\S]+(?=}})/g;
    let regex = /\[\[[a-zA-Z0-9.]+\]\]/gm;

    return async function (c: Context, next: Next) {
        if (c.req.url.includes("/public/")){
            await next();
            return;
        }

        let lang = defaultLocale;
        if (c.req.headers.has("accept-language")) {
            lang = c.req.header("accept-language");
        }

        // Format string to only get the language not the region
        lang = lang.split('-')[0].toLowerCase();
        if (!locales.includes(lang)) {
            lang = defaultLocale
        }

        await next();

        const responseText = await c.res.text();
        let translatedText = responseText.replace(regex, substring => fetchFromObject(localesFiles[lang], substring.slice(2, -2)));
        return c.html(translatedText)
    }
};