type DisplayArticleProps = {
    title: string,
    subTitle: string,
    description: string,
}

const DisplayArticle = (props: DisplayArticleProps) => (
    <article class="container">
        <h1 class="text-rose-500">{props.title}</h1>
        <h2 class="text-sky-500">{props.subTitle}</h2>
        <p>{props.description}</p>
    </article>
)

export default DisplayArticle;