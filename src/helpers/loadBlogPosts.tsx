import { remark } from 'remark';
import html from 'remark-html';
import createMiddleware from './middleware';

const posts = await createMiddleware(
    '../posts', 
    ".md",
    async (middleware, fileExport, url) => {

        const post = await remark()
            .use(html)
            .process(fileExport);
        
        const processedPost = post.toString();

        middleware.get(url, (c) => c.html(
            `<html>
                <head>
                <link href="/style/tailwind.css" rel="stylesheet" />
                </head>
                <body>
                    <article class='container mx-auto px-[12.5vw] pt-32'>
                        ${processedPost}
                    </article>
                </body>
            </html>`
        ));
    }, 
    false,
    false,
);


export default posts;