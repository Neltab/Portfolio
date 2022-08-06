const ProjectCard = (props: {
    url: string,
    image: string,
    title: string,
    description: string,
    language: string
}) => (
    <a href={props.url} class="drop-shadow inline flex flex-col justify-items-center items-center max-w-xs">
        <img class="w-16" src={props.image} />
        <h3>
            {props.title}
        </h3>
        <p class="">
            {props.description}
        </p>
        <img class="w-8" src={props.language}/>
    </a>
)

export default ProjectCard;