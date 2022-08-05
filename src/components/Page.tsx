type PageProps = {
    title: string,
    description: string,
    children?: string,
    robots?: string,
}

const Page = (props: PageProps) => (
    <html>
        <head>
            <link href="/public/style/tailwind.css" rel="stylesheet" />
            <title>
                {props.title}
            </title>
            <meta name="robots" content={props.robots || "all"}/>
            <meta
                name="description"
                content={props.description}
            />
        </head>
        <body>
            {props.children}
        </body>
    </html>
);

export default Page