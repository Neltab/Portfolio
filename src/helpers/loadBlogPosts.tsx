import MarkdownIt from 'markdown-it';
// TODO faire tous les imports
import mdsub from 'markdown-it-sub';
import mdsup from 'markdown-it-sup';
import mdabbr from 'markdown-it-abbr';
import mdanchor from 'markdown-it-anchor';
import mdattrs from 'markdown-it-attrs';
import mddeflist from 'markdown-it-deflist';
import mdemoji from 'markdown-it-emoji';
import mdfootnote from 'markdown-it-footnote';
import mdmark from 'markdown-it-mark';
import mdtoc from 'markdown-it-table-of-contents';
import createMiddleware from './middleware';

const posts = await createMiddleware(
    '../posts', 
    ".md",
    async (middleware, fileExport, url) => {

        const md = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true
        })
        .use(mdsub)
        .use(mdsup)
        .use(mdabbr)
        .use(mdanchor)
        .use(mdattrs)
        .use(mddeflist)
        .use(mdemoji)
        .use(mdfootnote)
        .use(mdmark)
        .use(mdtoc)

        const post = md.render(fileExport);

        middleware.get(url, (c) => c.html(
            `<html>
                <head>
                <link href="/style/tailwind.css" rel="stylesheet" />
                </head>
                <body>
                    <article class='container mx-auto px-[12.5vw] pt-32'>
                        ${post}
                    </article>
                </body>
            </html>`
        ));
    }, 
    false,
    false,
);


export default posts;