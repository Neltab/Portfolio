const ProjectCard = (props: {
    url: string,
    image: string,
    title: string,
    description: string,
    language: string
}) => (
    <a href={props.url} class="shadow-lg text-black px-8 rounded-3xl inline flex h-96 flex-col justify-around items-center max-w-xs text-center">
        <img class="w-16" src={props.image} />
        <h3 class="text-sky-500">
            {props.title}
        </h3>
        <p class="">
            {props.description}
        </p>
        <img class="w-8" src={props.language}/>
    </a>
)

export default ProjectCard;