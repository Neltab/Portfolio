type DisplayArticleProps = {
    title: string,
    subTitle: string,
    description: string,
}

const DisplayArticle = (props: DisplayArticleProps) => (
    <article class="container inline max-w-2xl">
        <h1 class="text-rose-500 text-justify">{props.title}</h1>
        <h2 class="text-sky-500 text-justify">{props.subTitle}</h2>
        <p class="text-justify">{props.description}</p>
    </article>
)

export default DisplayArticle;