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

        console.log(fileExport, processedPost);

        middleware.get(url, (c) => c.html(processedPost));
    }, 
    false,
    false,
);


export default posts;