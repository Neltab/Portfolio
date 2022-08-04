const ProjectCard = (props: {
    url: string,
    image: string,
    title: string,
    description: string,
    language: string
}) => (
    <div class="">
        <a href={props.url}>
            <div class="">
                <img class="" src={props.image} />
                <h3>
                    {props.title}
                </h3>
                <p class="">
                    {props.description}
                </p>
                <img class="" src={props.language}/>
            </div>
        </a>
    </div>
)

export default ProjectCard;